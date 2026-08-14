// Thin wrappers over the generic client for the 3 endpoints the backend
// actually exposes (see koko-reservation-trackera-express src/routes/auth-routes.ts).
// No register/me endpoints exist — don't add calls for them.
import { apiRequest, performRefresh, ApiError } from '@/services/api'
import type { AuthSession } from '../types'

export function login(email: string, password: string): Promise<AuthSession> {
  return apiRequest<AuthSession>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

// Delegates to the same shared/deduped refresh call used internally by
// apiRequest's 401 handling, so a boot-time check and a mid-session
// transparent refresh can never race into two separate network calls.
export async function refresh(): Promise<AuthSession> {
  const session = await performRefresh()
  if (!session) throw new ApiError(401, 'Session expired')
  return session
}

export function logout(): Promise<void> {
  return apiRequest<void>('/auth/logout', { method: 'POST' })
}
