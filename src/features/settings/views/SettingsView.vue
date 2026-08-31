<!-- SettingsView.vue — the sidebar's "Settings" page, styled after
     design/UserProfile.png.

     Backend reality check: GET /me now returns fullName/role too (see
     AuthUser) - Full Name/Role/Email/Member Since are all real, and Full
     Name/Email are now editable via Edit Profile (PATCH /users/:id - see
     profileService). There's no username field - dropped from the User
     table (see backend's prisma/migrations/20260831112339_user_schema_updated).
     There's still no active-status column, so "Active" stays hardcoded (this
     app has no concept of a deactivated account yet), and the whole Account
     Preferences card is still a static, non-functional mock — nothing in it
     is saved anywhere. -->
<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import {
  faEye,
  faEyeSlash,
  faCircleUser,
  faUser,
  faEnvelope,
  faCalendarDays,
  faShieldHalved,
  faLock,
  // faGear,
  faPen,
  faUsers,
  faPlus,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppPageTitle from '@/components/common/AppPageTitle.vue'
import AppInput from '@/components/common/AppInput.vue'
import AppSelect from '@/components/common/AppSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
// import AppToggle from '@/components/common/AppToggle.vue'
import AppModal from '@/components/common/AppModal.vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import UserTable from '@/features/users/components/UserTable.vue'
import { useAuthStore } from '@/stores/authStore'
import { useToastStore } from '@/stores/toastStore'
import { updateProfile } from '../services/profileService'
import { ApiError } from '@/services/api'
import { createUser, deleteUser, listUsers, updateUser } from '@/features/users/service/userService'
import { ROLE_OPTIONS, roleLabel } from '@/features/users/constants'
import type { Pagination, TeamMember } from '@/features/users/types'

const auth = useAuthStore()
const toast = useToastStore()

const initials = computed(() => {
  const name = auth.user?.fullName?.trim()
  if (!name) return '?'
  const parts = name.split(/\s+/)
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? parts[0]?.[1] ?? '')).toUpperCase()
})

const memberSince = computed(() => {
  if (!auth.user) return ''
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(
    new Date(auth.user.createdAt),
  )
})

// ---- Edit profile ----
// Full Name/Email only - Role and Member Since are system-derived, not
// something the account holder edits here, and password has its own
// dedicated form below. (No username field - see file header.)

const isEditProfileOpen = ref(false)
const profileForm = reactive({ fullName: '', email: '' })
const profileErrors = ref<Record<string, string>>({})
const profileServerError = ref('')
const isSavingProfile = ref(false)

function openEditProfile() {
  profileForm.fullName = auth.user?.fullName ?? ''
  profileForm.email = auth.user?.email ?? ''
  profileErrors.value = {}
  profileServerError.value = ''
  isEditProfileOpen.value = true
}

function validateProfile(): boolean {
  const next: Record<string, string> = {}
  if (!profileForm.fullName.trim()) next.fullName = 'Full name is required'
  if (!profileForm.email.trim()) next.email = 'Email is required'
  else if (!/^\S+@\S+\.\S+$/.test(profileForm.email.trim())) next.email = 'Enter a valid email address'
  profileErrors.value = next
  return Object.keys(next).length === 0
}

async function submitProfile() {
  if (!auth.user) return
  profileServerError.value = ''
  if (!validateProfile()) return

  isSavingProfile.value = true
  try {
    const updated = await updateProfile(auth.user.id, {
      fullName: profileForm.fullName.trim(),
      email: profileForm.email.trim(),
    })
    auth.setUser(updated)
    isEditProfileOpen.value = false
    toast.success('Profile updated')
  } catch (err) {
    // The backend responds 409 with a field-naming message (e.g. "email
    // already in use") for a duplicate email - shown as a banner rather
    // than guessed-at per-field, since the response doesn't say which
    // input to attach it to beyond that message text.
    profileServerError.value =
      err instanceof ApiError ? err.message : 'Unable to save your profile. Please try again.'
  } finally {
    isSavingProfile.value = false
  }
}

// ---- Change password ----

const form = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

const showPassword = reactive({
  current: false,
  new: false,
  confirm: false,
})

const errors = ref<Record<string, string>>({})
const serverError = ref('')
const isSubmitting = ref(false)

function validate(): boolean {
  const next: Record<string, string> = {}
  if (!form.currentPassword) next.currentPassword = 'Current password is required'
  if (!form.newPassword || form.newPassword.length < 8) {
    next.newPassword = 'New password must be at least 8 characters'
  }
  if (!form.confirmPassword) {
    next.confirmPassword = 'Please confirm your new password'
  } else if (form.newPassword && form.confirmPassword !== form.newPassword) {
    next.confirmPassword = 'Passwords do not match'
  }
  errors.value = next
  return Object.keys(next).length === 0
}

async function handleSubmit() {
  serverError.value = ''
  if (!validate()) return

  isSubmitting.value = true
  try {
    // On success this also drops the local session (see authStore) - App.vue
    // reacts to authStatus flipping to 'unauthenticated' and sends the user
    // to /login, same as a normal logout.
    await auth.changePassword(form.currentPassword, form.newPassword)
  } catch (err) {
    // The backend responds 400 (not 401) specifically so this reads as "you
    // typed the wrong current password," not "your session expired."
    if (err instanceof ApiError && err.status === 400) {
      errors.value = { currentPassword: err.message }
    } else {
      serverError.value = 'Unable to change your password right now. Please try again.'
    }
    isSubmitting.value = false
  }
}

// ---- Team (list + search/paginate) ----
// Lives directly on this page now — there is no separate User Management
// screen/route. Same split as ReservationListView.vue: this view owns the
// modals + API calls, UserTable.vue is purely presentational.

const teamSearch = ref('')
const teamPage = ref(1)
const TEAM_PAGE_SIZE = 12

const members = ref<TeamMember[]>([])
const teamPagination = ref<Pagination>({ page: 1, limit: TEAM_PAGE_SIZE, total: 0, totalPages: 1 })
const isLoadingTeam = ref(true)
const teamError = ref('')

async function loadTeam() {
  isLoadingTeam.value = true
  teamError.value = ''
  try {
    const result = await listUsers({ search: teamSearch.value || undefined, page: teamPage.value, limit: TEAM_PAGE_SIZE })
    members.value = result.data
    teamPagination.value = result.pagination
  } catch (err) {
    teamError.value = err instanceof ApiError ? err.message : 'Unable to load the team. Please try again.'
  } finally {
    isLoadingTeam.value = false
  }
}
watch(teamPage, loadTeam)

// Debounce free-text search separately so we don't fire a request per keystroke.
let teamSearchDebounce: ReturnType<typeof setTimeout> | undefined
watch(teamSearch, () => {
  clearTimeout(teamSearchDebounce)
  teamSearchDebounce = setTimeout(() => {
    teamPage.value = 1
    loadTeam()
  }, 300)
})

loadTeam()

// ---- Invite user (= create user account) ----
// "Invite User" is UI wording only — clicking it just calls the existing
// Create User endpoint (userService.createUser -> POST /users) to create
// the account directly. No email is sent, no invite token/record exists
// anywhere; the Admin manually hands the person their email + the password
// they set here.

const isInviteOpen = ref(false)
const inviteForm = reactive({ email: '', password: '', fullName: '', role: ROLE_OPTIONS[0].value as string })
const inviteErrors = ref<Record<string, string>>({})
const inviteServerError = ref('')
const isInviting = ref(false)

function resetInviteForm() {
  inviteForm.email = ''
  inviteForm.password = ''
  inviteForm.fullName = ''
  inviteForm.role = ROLE_OPTIONS[0].value
  inviteErrors.value = {}
  inviteServerError.value = ''
}

function openInvite() {
  resetInviteForm()
  isInviteOpen.value = true
}

function validateInvite(): boolean {
  const next: Record<string, string> = {}
  if (!inviteForm.email.trim()) next.email = 'Email is required'
  else if (!/^\S+@\S+\.\S+$/.test(inviteForm.email.trim())) next.email = 'Enter a valid email address'
  if (!inviteForm.password || inviteForm.password.length < 8) next.password = 'Password must be at least 8 characters'
  inviteErrors.value = next
  return Object.keys(next).length === 0
}

async function submitInvite() {
  inviteServerError.value = ''
  if (!validateInvite()) return

  isInviting.value = true
  try {
    // Plain account creation — see above. Email is lowercased + trimmed to
    // match how the backend itself normalizes it (user.schema.ts's
    // createUserSchema), so what's shown afterward always matches what was
    // actually stored.
    await createUser({
      email: inviteForm.email.trim().toLowerCase(),
      password: inviteForm.password,
      fullName: inviteForm.fullName.trim() || undefined,
      role: inviteForm.role,
    })
    isInviteOpen.value = false
    resetInviteForm()
    toast.success('User created successfully')
    teamPage.value = 1
    await loadTeam()
  } catch (err) {
    // 409 for a duplicate email, same shape as profile edit's own ApiError
    // handling above.
    inviteServerError.value = err instanceof ApiError ? err.message : 'Unable to create this user. Please try again.'
  } finally {
    isInviting.value = false
  }
}

// ---- Edit member ----

const editTarget = ref<TeamMember | null>(null)
const editForm = reactive({ fullName: '', email: '', role: '' })
const editErrors = ref<Record<string, string>>({})
const editServerError = ref('')
const isSavingEdit = ref(false)

function openEdit(member: TeamMember) {
  editTarget.value = member
  editForm.fullName = member.fullName ?? ''
  editForm.email = member.email
  editForm.role = member.role || ROLE_OPTIONS[0].value
  editErrors.value = {}
  editServerError.value = ''
}

function validateEdit(): boolean {
  const next: Record<string, string> = {}
  if (!editForm.fullName.trim()) next.fullName = 'Full name is required'
  if (!editForm.email.trim()) next.email = 'Email is required'
  else if (!/^\S+@\S+\.\S+$/.test(editForm.email.trim())) next.email = 'Enter a valid email address'
  editErrors.value = next
  return Object.keys(next).length === 0
}

async function submitEdit() {
  if (!editTarget.value) return
  editServerError.value = ''
  if (!validateEdit()) return

  isSavingEdit.value = true
  try {
    const updated = await updateUser(editTarget.value.id, {
      fullName: editForm.fullName.trim(),
      email: editForm.email.trim().toLowerCase(),
      role: editForm.role,
    })
    // Editing yourself here needs to keep the sidebar/header profile in sync.
    if (auth.user?.id === updated.id) auth.setUser(updated)
    editTarget.value = null
    toast.success('Team member updated')
    await loadTeam()
  } catch (err) {
    editServerError.value = err instanceof ApiError ? err.message : 'Unable to save this member. Please try again.'
  } finally {
    isSavingEdit.value = false
  }
}

// ---- Remove member ----

const removeTarget = ref<TeamMember | null>(null)
const isRemoving = ref(false)
const removeError = ref('')

function requestRemove(member: TeamMember) {
  removeError.value = ''
  removeTarget.value = member
}

async function confirmRemove() {
  if (!removeTarget.value) return
  isRemoving.value = true
  removeError.value = ''
  try {
    await deleteUser(removeTarget.value.id)
    removeTarget.value = null
    toast.success('Team member removed')
    // If we just removed the last row on a page beyond page 1, step back.
    if (members.value.length === 1 && teamPage.value > 1) {
      teamPage.value -= 1
    } else {
      await loadTeam()
    }
  } catch (err) {
    removeError.value = err instanceof ApiError ? err.message : 'Unable to remove this member. Please try again.'
  } finally {
    isRemoving.value = false
  }
}

// ---- Account preferences (static mock — see file header) ----

// const LANGUAGE_OPTIONS = [{ value: 'en', label: 'English' }]
// const TIMEZONE_OPTIONS = [{ value: 'Asia/Phnom_Penh', label: '(UTC+07:00) Phnom Penh' }]
// const language = ref('en')
// const timezone = ref('Asia/Phnom_Penh')
// const emailNotifications = ref(true)
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <AppHeader title="System Settings" />

    <main class="min-h-0 flex-1 overflow-y-auto p-8">
      <AppPageTitle title="System Settings" />

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <!-- Profile Summary -->
        <section class="rounded-xl border border-surface-border bg-surface-card p-6">
          <h2 class="mb-5 flex items-center gap-2 font-semibold text-text-heading">
            <FontAwesomeIcon :icon="faCircleUser" class="h-4 w-4 text-text-muted" />
            Profile Summary
          </h2>

          <div class="mb-6 flex items-center gap-4">
            <span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-navy text-lg font-bold text-white">
              {{ initials }}
            </span>
            <div>
              <p class="font-semibold text-text-heading">{{ auth.user?.fullName }}</p>
              <StatusBadge label="Active" tone="success" class="my-1" />
              <p class="text-xs text-text-muted">Role: {{ roleLabel(auth.user?.role ?? '') }}</p>
            </div>
          </div>

          <dl class="space-y-4">
            <div class="flex items-center justify-between">
              <dt class="flex items-center gap-2 text-sm text-text-muted">
                <FontAwesomeIcon :icon="faUser" class="h-3.5 w-3.5" />
                Full Name
              </dt>
              <dd class="text-sm font-medium text-text-heading">{{ auth.user?.fullName }}</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="flex items-center gap-2 text-sm text-text-muted">
                <FontAwesomeIcon :icon="faEnvelope" class="h-3.5 w-3.5" />
                Email
              </dt>
              <dd class="text-sm font-medium text-text-heading">{{ auth.user?.email }}</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="flex items-center gap-2 text-sm text-text-muted">
                <FontAwesomeIcon :icon="faCalendarDays" class="h-3.5 w-3.5" />
                Member Since
              </dt>
              <dd class="text-sm font-medium text-text-heading">{{ memberSince }}</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="flex items-center gap-2 text-sm text-text-muted">
                <FontAwesomeIcon :icon="faShieldHalved" class="h-3.5 w-3.5" />
                Role
              </dt>
              <dd class="text-sm font-medium text-text-heading">{{ roleLabel(auth.user?.role ?? '') }}</dd>
            </div>
          </dl>

          <div class="mt-6 flex justify-end">
            <AppButton variant="secondary" type="button" @click="openEditProfile">
              <FontAwesomeIcon :icon="faPen" class="h-3.5 w-3.5" />
              Edit Profile
            </AppButton>
          </div>
        </section>

        <!-- Change Password -->
        <section class="rounded-xl border border-surface-border bg-surface-card p-6">
          <h2 class="flex items-center gap-2 font-semibold text-text-heading">
            <FontAwesomeIcon :icon="faLock" class="h-4 w-4 text-text-muted" />
            Change Password
          </h2>
          <p class="mt-1 text-xs text-text-muted">
            You'll be signed out on every device and asked to log in again with your new password.
          </p>

          <form novalidate class="mt-5 space-y-5" @submit.prevent="handleSubmit">
            <div v-if="serverError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
              {{ serverError }}
            </div>

            <AppInput
              v-model="form.currentPassword"
              :type="showPassword.current ? 'text' : 'password'"
              label="Current Password"
              required
              placeholder="Enter your current password"
              :error="errors.currentPassword"
              :disabled="isSubmitting"
            >
              <template #trailing>
                <button
                  type="button"
                  class="text-text-muted hover:text-text-heading"
                  :aria-label="showPassword.current ? 'Hide password' : 'Show password'"
                  @click="showPassword.current = !showPassword.current"
                >
                  <FontAwesomeIcon :icon="showPassword.current ? faEyeSlash : faEye" class="h-4 w-4" />
                </button>
              </template>
            </AppInput>

            <AppInput
              v-model="form.newPassword"
              :type="showPassword.new ? 'text' : 'password'"
              label="New Password"
              required
              placeholder="Enter your new password"
              :error="errors.newPassword"
              :disabled="isSubmitting"
            >
              <template #trailing>
                <button
                  type="button"
                  class="text-text-muted hover:text-text-heading"
                  :aria-label="showPassword.new ? 'Hide password' : 'Show password'"
                  @click="showPassword.new = !showPassword.new"
                >
                  <FontAwesomeIcon :icon="showPassword.new ? faEyeSlash : faEye" class="h-4 w-4" />
                </button>
              </template>
            </AppInput>

            <AppInput
              v-model="form.confirmPassword"
              :type="showPassword.confirm ? 'text' : 'password'"
              label="Confirm New Password"
              required
              placeholder="Confirm your new password"
              :error="errors.confirmPassword"
              :disabled="isSubmitting"
            >
              <template #trailing>
                <button
                  type="button"
                  class="text-text-muted hover:text-text-heading"
                  :aria-label="showPassword.confirm ? 'Hide password' : 'Show password'"
                  @click="showPassword.confirm = !showPassword.confirm"
                >
                  <FontAwesomeIcon :icon="showPassword.confirm ? faEyeSlash : faEye" class="h-4 w-4" />
                </button>
              </template>
            </AppInput>

            <div class="flex justify-end">
              <AppButton type="submit" :loading="isSubmitting" :disabled="isSubmitting">
                {{ isSubmitting ? 'Saving…' : 'Save Password' }}
              </AppButton>
            </div>
          </form>
        </section>
      </div>

      <!-- Team — full member list lives here at the bottom, no separate page. -->
      <section class="mt-6 rounded-xl border border-surface-border bg-surface-card p-6">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="flex items-center gap-2 font-semibold text-text-heading">
            <FontAwesomeIcon :icon="faUsers" class="h-4 w-4 text-text-muted" />
            Team
          </h2>
          <AppButton @click="openInvite">
            <FontAwesomeIcon :icon="faPlus" class="h-3.5 w-3.5" />
            Invite User
          </AppButton>
        </div>

        <div class="mb-4">
          <AppInput v-model="teamSearch" :icon="faMagnifyingGlass" placeholder="Search by name or email" />
        </div>

        <p v-if="teamError" class="mb-4 rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
          {{ teamError }}
        </p>
        <div class="rounded-xl border border-surface-border">
          <UserTable
            :members="members"
            :pagination="teamPagination"
            :is-loading="isLoadingTeam"
            :current-user-id="auth.user?.id"
            @page-change="teamPage = $event"
            @edit="openEdit"
            @remove="requestRemove"
          />
        </div>
      </section>

      <!-- Account Preferences — static mock, see file header. -->
      <!-- <section class="mt-6 rounded-xl border border-surface-border bg-surface-card p-6">
        <h2 class="mb-5 flex items-center gap-2 font-semibold text-text-heading">
          <FontAwesomeIcon :icon="faGear" class="h-4 w-4 text-text-muted" />
          Account Preferences
        </h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-end">
          <AppSelect v-model="language" label="Language" :options="LANGUAGE_OPTIONS" />
          <AppSelect v-model="timezone" label="Timezone" :options="TIMEZONE_OPTIONS" />
          <div class="flex items-center justify-between gap-4 sm:justify-self-end">
            <div>
              <p class="text-sm font-semibold text-text-heading">Email Notifications</p>
              <p class="text-xs text-text-muted">Receive important updates and notifications.</p>
            </div>
            <AppToggle v-model="emailNotifications" />
          </div>
        </div>
      </section> -->
      <!-- <section class="mt-6 rounded-xl border border-surface-border bg-surface-card p-6">
        <h2 class="mb-5 flex items-center gap-2 font-semibold text-text-heading">
          <FontAwesomeIcon :icon="faGear" class="h-4 w-4 text-text-muted" />
          Theme
        </h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-end">
          <p>Light</p>
          <AppToggle v-model="emailNotifications" />
        </div>
      </section> -->
    </main>

    <AppModal v-model="isEditProfileOpen" title="Edit Profile">
      <form novalidate class="space-y-5" @submit.prevent="submitProfile">
        <div v-if="profileServerError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
          {{ profileServerError }}
        </div>

        <AppInput
          v-model="profileForm.fullName"
          label="Full Name"
          required
          placeholder="Enter your full name"
          :error="profileErrors.fullName"
          :disabled="isSavingProfile"
        />
        <AppInput
          v-model="profileForm.email"
          type="email"
          label="Email"
          required
          placeholder="Enter your email"
          :error="profileErrors.email"
          :disabled="isSavingProfile"
        />

        <div class="flex justify-end gap-3">
          <AppButton variant="secondary" type="button" :disabled="isSavingProfile" @click="isEditProfileOpen = false">
            Cancel
          </AppButton>
          <AppButton type="submit" :loading="isSavingProfile" :disabled="isSavingProfile">
            {{ isSavingProfile ? 'Saving…' : 'Save Changes' }}
          </AppButton>
        </div>
      </form>
    </AppModal>

    <!-- Invite User = create the account directly (see script above). -->
    <AppModal v-model="isInviteOpen" title="Invite User">
      <form novalidate class="space-y-5" @submit.prevent="submitInvite">
        <div v-if="inviteServerError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
          {{ inviteServerError }}
        </div>

        <AppInput
          v-model="inviteForm.fullName"
          label="Full Name"
          placeholder="Enter full name"
          :disabled="isInviting"
        />
        <AppInput
          v-model="inviteForm.email"
          type="email"
          label="Email"
          required
          placeholder="name@example.com"
          :error="inviteErrors.email"
          :disabled="isInviting"
        />
        <AppInput
          v-model="inviteForm.password"
          type="password"
          label="Password"
          required
          placeholder="At least 8 characters"
          :error="inviteErrors.password"
          :disabled="isInviting"
        />
        <AppSelect v-model="inviteForm.role" label="Role" required :options="[...ROLE_OPTIONS]" :disabled="isInviting" />

        <div class="flex justify-end gap-3">
          <AppButton variant="secondary" type="button" :disabled="isInviting" @click="isInviteOpen = false">Cancel</AppButton>
          <AppButton type="submit" :loading="isInviting" :disabled="isInviting">
            {{ isInviting ? 'Inviting…' : 'Invite' }}
          </AppButton>
        </div>
      </form>
    </AppModal>

    <!-- Edit team member -->
    <AppModal :model-value="!!editTarget" title="Edit Team Member" @update:model-value="editTarget = null">
      <form novalidate class="space-y-5" @submit.prevent="submitEdit">
        <div v-if="editServerError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
          {{ editServerError }}
        </div>

        <AppInput
          v-model="editForm.fullName"
          label="Full Name"
          required
          placeholder="Enter full name"
          :error="editErrors.fullName"
          :disabled="isSavingEdit"
        />
        <AppInput
          v-model="editForm.email"
          type="email"
          label="Email"
          required
          placeholder="Enter email"
          :error="editErrors.email"
          :disabled="isSavingEdit"
        />
        <AppSelect v-model="editForm.role" label="Role" required :options="[...ROLE_OPTIONS]" :disabled="isSavingEdit" />

        <div class="flex justify-end gap-3">
          <AppButton variant="secondary" type="button" :disabled="isSavingEdit" @click="editTarget = null">Cancel</AppButton>
          <AppButton type="submit" :loading="isSavingEdit" :disabled="isSavingEdit">
            {{ isSavingEdit ? 'Saving…' : 'Save Changes' }}
          </AppButton>
        </div>
      </form>
    </AppModal>

    <!-- Remove team member -->
    <AppModal :model-value="!!removeTarget" title="Remove team member?" @update:model-value="removeTarget = null">
      <p class="text-sm text-text-body">
        This will permanently remove
        <span class="font-semibold text-text-heading">{{ removeTarget?.fullName || removeTarget?.email }}</span>
        from the team. This cannot be undone.
      </p>
      <p v-if="removeError" class="mt-3 text-sm text-brand-red">{{ removeError }}</p>
      <div class="mt-5 flex justify-end gap-3">
        <AppButton variant="secondary" :disabled="isRemoving" @click="removeTarget = null">Cancel</AppButton>
        <AppButton variant="danger" :loading="isRemoving" :disabled="isRemoving" @click="confirmRemove">
          {{ isRemoving ? 'Removing…' : 'Remove' }}
        </AppButton>
      </div>
    </AppModal>
  </div>
</template>
