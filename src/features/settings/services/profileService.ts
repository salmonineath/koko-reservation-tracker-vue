// Editing the logged-in user's own profile has no dedicated endpoint - it's
// the general user-CRUD PATCH /users/:id (see koko-reservation-trackera-express's
// user.routes.ts) targeted at the caller's own id. Every account can edit
// every account today (no permission model yet), so nothing on the backend
// distinguishes "editing yourself" from "editing anyone" - this wrapper is
// just the frontend's own scoping of that.
import { apiRequest } from '@/services/api'
import type { AuthUser } from '@/features/auth/types'

export interface UpdateProfileInput {
  fullName?: string
  username?: string
  email?: string
}

export function updateProfile(id: number, input: UpdateProfileInput): Promise<AuthUser> {
  return apiRequest<AuthUser>(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(input),
  })
}
