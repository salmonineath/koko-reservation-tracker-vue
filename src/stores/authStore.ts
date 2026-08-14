// Single source of truth for authentication. There is deliberately no
// `isLoggedIn: boolean` — `authStatus` has three states because "we haven't
// checked yet" is a real, distinct state from "checked and logged out"
// (see `ensureInitialized`), and callers (the router guard, App.vue) need to
// tell those apart to avoid flashing protected content or the login page.
import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as authService from '@/features/auth/services/authService'
import { setAccessToken as setClientAccessToken, setOnSessionExpired } from '@/services/api'
import type { AuthUser, AuthSession } from '@/features/auth/types'

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null)
  const accessToken = ref<string | null>(null)
  const authStatus = ref<AuthStatus>('loading')

  function clearSession() {
    user.value = null
    accessToken.value = null
    setClientAccessToken(null)
    authStatus.value = 'unauthenticated'
  }

  function applySession(session: AuthSession) {
    setClientAccessToken(session.accessToken)
    accessToken.value = session.accessToken
    user.value = session.user
    authStatus.value = 'authenticated'
  }

  async function login(email: string, password: string) {
    const session = await authService.login(email, password)
    applySession(session)
  }

  // Used both for the initial boot check and to explicitly re-arm a session.
  // Never throws — resolves false on any failure (bad/missing/reused/expired
  // refresh cookie all look the same to the frontend: "not logged in").
  async function refreshSession(): Promise<boolean> {
    try {
      const session = await authService.refresh()
      applySession(session)
      return true
    } catch {
      clearSession()
      return false
    }
  }

  async function logout() {
    try {
      await authService.logout()
    } catch {
      // Backend logout is idempotent and best-effort from the frontend's
      // perspective — even if this fails (network error, already-invalid
      // session), we still drop local state below.
    } finally {
      clearSession()
    }
  }

  // Memoized so main.ts (fire on boot) and the router guard (await before
  // resolving the first navigation) can both call this without triggering
  // two POST /auth/refresh calls — they end up awaiting the same promise.
  let initialCheck: Promise<void> | null = null
  function ensureInitialized(): Promise<void> {
    if (!initialCheck) {
      initialCheck = refreshSession().then(() => undefined)
    }
    return initialCheck
  }

  // A transparent refresh triggered by some future protected API call (see
  // services/api.ts) can fail after the app is already running. React the
  // same way as any other session loss; App.vue watches `authStatus` and
  // handles the redirect, so this store doesn't need to know about routing.
  setOnSessionExpired(clearSession)

  return { user, accessToken, authStatus, login, logout, refreshSession, ensureInitialized }
})
