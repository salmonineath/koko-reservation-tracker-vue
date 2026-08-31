// Editing the logged-in user's own profile has no dedicated endpoint - it's
// the general user-CRUD PATCH /users/:id (see koko-reservation-trackera-express's
// user.routes.ts) targeted at the caller's own id. Every account can edit
// every account today (no permission model yet), so nothing on the backend
// distinguishes "editing yourself" from "editing anyone" - this wrapper is
// just the frontend's own scoping of that, delegating to the same
// features/users/service/userService.ts the Team section (also on this
// page) uses so there's exactly one place that calls PATCH /users/:id.
import { updateUser } from '@/features/users/service/userService'
import type { UpdateUserInput } from '@/features/users/types'
import type { AuthUser } from '@/features/auth/types'

export type UpdateProfileInput = Pick<UpdateUserInput, 'fullName' | 'email'>

export function updateProfile(id: number, input: UpdateProfileInput): Promise<AuthUser> {
  return updateUser(id, input)
}
