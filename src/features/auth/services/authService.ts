// Thin wrappers over the generic client for the endpoints the backend
// actually exposes (see koko-reservation-trackera-express src/routes/auth-routes.ts
// and src/routes/me-routes.ts). No register endpoint exists — don't add a
// call for it.
//
// There is no `refresh()` wrapper here on purpose: POST /auth/refresh is only
// ever called from inside services/api.ts's own 401 handling (via
// performRefresh), never explicitly by feature code — see authStore.checkSession
// for the boot-time equivalent, which calls getMe() instead.
import { apiRequest } from '@/services/api'
import type { AuthSession, AuthUser } from '../types'

export function login(email: string, password: string): Promise<AuthSession> {
  return apiRequest<AuthSession>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

// A normal protected request, not a special auth endpoint - used by
// authStore.checkSession to answer "am I still logged in?" without forcing a
// refresh. Relies entirely on apiRequest's existing 401 -> refresh -> retry
// handling to renew an expired access token transparently.
export function getMe(): Promise<{ user: AuthUser }> {
  return apiRequest<{ user: AuthUser }>('/me')
}

export function logout(): Promise<void> {
  return apiRequest<void>('/auth/logout', { method: 'POST' })
}

// On success the backend revokes every refresh token for this account and
// clears the accessToken/refreshToken cookies on this response too (see
// user.controller.ts's changePasswordController) - the caller is expected to
// treat this exactly like a logout (SettingsView does) rather than staying
// on the page as if nothing happened.
export function changePassword(currentPassword: string, newPassword: string): Promise<void> {
  return apiRequest<void>('/me/password', {
    method: 'PATCH',
    body: JSON.stringify({ currentPassword, newPassword }),
  })
}
