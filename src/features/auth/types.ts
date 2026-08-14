// Mirrors the backend exactly (koko-reservation-trackera-express):
// src/controllers/auth-controller.ts + src/services/auth-service.ts.
// No roles/permissions — this is "logged in or not," nothing more.

export interface AuthUser {
  id: number
  email: string
  createdAt: string
}

// Shape returned by both POST /auth/login and POST /auth/refresh.
// The refresh token itself is never in this body — it only ever travels as
// the HttpOnly `refreshToken` cookie, which JS can't and shouldn't read.
export interface AuthSession {
  accessToken: string
  user: AuthUser
}
