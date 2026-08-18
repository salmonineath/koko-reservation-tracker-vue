// Single source of truth for authentication. There is deliberately no
// `isLoggedIn: boolean` — `authStatus` has three states because "we haven't
// checked yet" is a real, distinct state from "checked and logged out"
// (see `ensureInitialized`), and callers (the router guard, App.vue) need to
// tell those apart to avoid flashing protected content or the login page.
import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as authService from '@/features/auth/services/authService'
import { ApiError, setOnSessionExpired } from '@/services/api'
import { useToastStore } from './toastStore'
import type { AuthUser, AuthSession } from '@/features/auth/types'

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null)
  const authStatus = ref<AuthStatus>('loading')
  const toast = useToastStore()

  function clearSession() {
    user.value = null
    authStatus.value = 'unauthenticated'
  }

  function applySession(session: AuthSession) {
    // session.accessToken isn't stored anywhere - it's already sitting in the
    // HttpOnly accessToken cookie the backend just set via Set-Cookie. This
    // store only ever needs the user out of the response body.
    user.value = session.user
    authStatus.value = 'authenticated'
  }

  async function login(email: string, password: string) {
    try {
      const session = await authService.login(email, password)
      applySession(session)
      toast.success('Login successful')
    } catch (err) {
      // Prefer the backend's own message (e.g. "Invalid email or password",
      // "Too many login attempts") - it's already written to be safe to show
      // verbatim (see auth.service.ts: wrong email vs. wrong password both
      // collapse to the same message, so this never leaks which one it was).
      // Only a non-ApiError (network failure, etc.) falls back to a generic line.
      toast.error(err instanceof ApiError ? err.message : 'Unable to log in. Something went wrong.')
      throw err
    }
  }

  // Boot-time (and re-arm) session check. Deliberately does NOT call
  // POST /auth/refresh - it makes a normal protected request instead. If the
  // accessToken cookie is still valid, this succeeds with zero refresh calls
  // (an F5 shouldn't force one). If it's expired, apiRequest's own 401
  // handling transparently calls /auth/refresh once and retries - so a
  // refresh only ever happens when the access token actually needs it.
  // Never throws — resolves false on any failure (not logged in, expired
  // access token + invalid/missing refresh cookie, network error - all look
  // the same to the frontend: "not logged in").
  async function checkSession(): Promise<boolean> {
    try {
      const { user: me } = await authService.getMe()
      user.value = me
      authStatus.value = 'authenticated'
      return true
    } catch {
      clearSession()
      return false
    }
  }

  async function logout() {
    try {
      await authService.logout()
      toast.success('Logout successful')
    } catch (err) {
      // Backend logout is idempotent and best-effort from the frontend's
      // perspective — even if this fails (network error, already-invalid
      // session), we still drop local state below. Still worth surfacing,
      // though, rather than silently pretending it succeeded.
      toast.error(err instanceof ApiError ? err.message : 'Unable to log out. Something went wrong.')
    } finally {
      clearSession()
    }
  }

  // Unlike logout(), a failed call here must NOT clear local state — the
  // most common failure is "current password is incorrect," and the user is
  // still very much logged in when that happens. Only a successful change
  // drops the session: the backend already revoked every refresh token and
  // cleared this device's cookies for us (see authService.changePassword),
  // so there's nothing left to await server-side — just mirror that locally
  // and let the caller (SettingsView) send them back to /login.
  async function changePassword(currentPassword: string, newPassword: string) {
    await authService.changePassword(currentPassword, newPassword)
    clearSession()
  }

  // Memoized so main.ts (fire on boot) and the router guard (await before
  // resolving the first navigation) can both call this without triggering
  // two checks — they end up awaiting the same promise.
  let initialCheck: Promise<void> | null = null
  function ensureInitialized(): Promise<void> {
    if (!initialCheck) {
      initialCheck = checkSession().then(() => undefined)
    }
    return initialCheck
  }

  // A transparent refresh triggered by some future protected API call (see
  // services/api.ts) can fail after the app is already running. React the
  // same way as any other session loss; App.vue watches `authStatus` and
  // handles the redirect, so this store doesn't need to know about routing.
  setOnSessionExpired(clearSession)

  return { user, authStatus, login, logout, changePassword, checkSession, ensureInitialized }
})
