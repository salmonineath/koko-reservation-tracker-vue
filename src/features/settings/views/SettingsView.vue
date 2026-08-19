<!-- SettingsView.vue — the sidebar's "Settings" page, styled after
     design/UserProfile.png.

     Backend reality check: GET /me now returns fullName/username/role too
     (see AuthUser) - Full Name/Username/Role/Email/Member Since are all
     real, and Full Name/Username/Email are now editable via Edit Profile
     (PATCH /users/:id - see profileService). There's still no active-status
     column, so "Active" stays hardcoded (this app has no concept of a
     deactivated account yet), and the whole Account Preferences card is
     still a static, non-functional mock — nothing in it is saved anywhere. -->
<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
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
} from '@fortawesome/free-solid-svg-icons'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppInput from '@/components/common/AppInput.vue'
// import AppSelect from '@/components/common/AppSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
// import AppToggle from '@/components/common/AppToggle.vue'
import AppModal from '@/components/common/AppModal.vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { useAuthStore } from '@/stores/authStore'
import { useToastStore } from '@/stores/toastStore'
import { updateProfile } from '../services/profileService'
import { ApiError } from '@/services/api'

const auth = useAuthStore()
const toast = useToastStore()

// Known roles get a friendly label; anything else (a role added on the
// backend before the frontend catches up) still shows *something*
// reasonable instead of a blank or a crash.
const ROLE_LABELS: Record<string, string> = { ADMIN: 'Administrator' }
function roleLabel(role: string): string {
  return ROLE_LABELS[role] ?? role.charAt(0) + role.slice(1).toLowerCase()
}

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
// Full Name/Username/Email only - Role and Member Since are system-derived,
// not something the account holder edits here, and password has its own
// dedicated form below.

const isEditProfileOpen = ref(false)
const profileForm = reactive({ fullName: '', username: '', email: '' })
const profileErrors = ref<Record<string, string>>({})
const profileServerError = ref('')
const isSavingProfile = ref(false)

function openEditProfile() {
  profileForm.fullName = auth.user?.fullName ?? ''
  profileForm.username = auth.user?.username ?? ''
  profileForm.email = auth.user?.email ?? ''
  profileErrors.value = {}
  profileServerError.value = ''
  isEditProfileOpen.value = true
}

function validateProfile(): boolean {
  const next: Record<string, string> = {}
  if (!profileForm.fullName.trim()) next.fullName = 'Full name is required'
  if (!profileForm.username.trim()) next.username = 'Username is required'
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
      username: profileForm.username.trim(),
      email: profileForm.email.trim(),
    })
    auth.setUser(updated)
    isEditProfileOpen.value = false
    toast.success('Profile updated')
  } catch (err) {
    // The backend responds 409 with a field-naming message (e.g. "email
    // already in use") for a duplicate email/username - shown as a banner
    // rather than guessed-at per-field, since the response doesn't say
    // which input to attach it to beyond that message text.
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

// ---- Account preferences (static mock — see file header) ----

// const LANGUAGE_OPTIONS = [{ value: 'en', label: 'English' }]
// const TIMEZONE_OPTIONS = [{ value: 'Asia/Phnom_Penh', label: '(UTC+07:00) Phnom Penh' }]
// const language = ref('en')
// const timezone = ref('Asia/Phnom_Penh')
// const emailNotifications = ref(true)
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <AppHeader title="Settings" />

    <main class="min-h-0 flex-1 overflow-y-auto p-8">
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
                <FontAwesomeIcon :icon="faUser" class="h-3.5 w-3.5" />
                Username
              </dt>
              <dd class="text-sm font-medium text-text-heading">{{ auth.user?.username }}</dd>
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
          v-model="profileForm.username"
          label="Username"
          required
          placeholder="Enter your username"
          :error="profileErrors.username"
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
  </div>
</template>
