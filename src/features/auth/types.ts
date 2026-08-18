// Mirrors the backend exactly (koko-reservation-trackera-express):
// src/controllers/auth-controller.ts + src/services/auth-service.ts.
// `role` is a plain string, not a union of known values on purpose - the
// frontend shouldn't need a code change every time the backend adds a role;
// see ROLE_LABELS in SettingsView.vue for how an unrecognized role degrades
// (title-cased as-is instead of crashing/showing nothing).

export interface AuthUser {
  id: number
  email: string
  fullName: string
  username: string
  role: string
  createdAt: string
}

// Shape returned by both POST /auth/login and POST /auth/refresh.
// The refresh token itself is never in this body — it only ever travels as
// the HttpOnly `refreshToken` cookie, which JS can't and shouldn't read.
export interface AuthSession {
  accessToken: string
  user: AuthUser
}
