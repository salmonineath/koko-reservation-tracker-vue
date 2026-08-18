<!-- LoginForm.vue — email/password sign-in. Validation is native HTML5
     (required + type="email"); success/failure is surfaced via a toast (see
     authStore.login) rather than an inline message here - one message, one
     place, no risk of a stale banner still showing under a toast that
     already superseded it. -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const isPasswordVisible = ref(false)
const isSubmitting = ref(false)

async function handleSubmit() {
  if (isSubmitting.value) return // belt-and-suspenders against double submit
  isSubmitting.value = true
  try {
    await auth.login(email.value.trim(), password.value)
    router.replace('/dashboard')
  } catch {
    // authStore.login() already pushed an error toast - nothing else to do.
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form novalidate @submit.prevent="handleSubmit">
    <div class="mb-5">
      <label for="email" class="mb-2 block text-sm font-semibold text-text-heading">Email address</label>
      <div class="flex items-center gap-3 rounded-lg border border-surface-border px-4 py-3 focus-within:border-brand-navy">
        <FontAwesomeIcon :icon="faEnvelope" class="h-4 w-4 shrink-0 text-text-muted" />
        <input
          id="email"
          v-model="email"
          type="email"
          required
          autocomplete="email"
          placeholder="Enter your email"
          class="w-full min-w-0 text-sm text-text-heading placeholder:text-text-muted focus:outline-none"
          :disabled="isSubmitting"
        />
      </div>
    </div>

    <div class="mb-6">
      <label for="password" class="mb-2 block text-sm font-semibold text-text-heading">Password</label>
      <div class="flex items-center gap-3 rounded-lg border border-surface-border px-4 py-3 focus-within:border-brand-navy">
        <FontAwesomeIcon :icon="faLock" class="h-4 w-4 shrink-0 text-text-muted" />
        <input
          id="password"
          v-model="password"
          :type="isPasswordVisible ? 'text' : 'password'"
          required
          autocomplete="current-password"
          placeholder="Enter your password"
          class="w-full min-w-0 text-sm text-text-heading placeholder:text-text-muted focus:outline-none"
          :disabled="isSubmitting"
        />
        <button
          type="button"
          class="shrink-0 text-text-muted hover:text-text-heading"
          :aria-label="isPasswordVisible ? 'Hide password' : 'Show password'"
          @click="isPasswordVisible = !isPasswordVisible"
        >
          <FontAwesomeIcon :icon="isPasswordVisible ? faEyeSlash : faEye" class="h-4 w-4" />
        </button>
      </div>
    </div>

    <button
      type="submit"
      class="w-full rounded-lg bg-brand-red py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-60"
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? 'Signing in…' : 'Sign in' }}
    </button>
  </form>
</template>
