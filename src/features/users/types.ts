// Mirrors the backend exactly (koko-reservation-trackera-express):
// src/modules/users/user.dto.ts + user.schema.ts.
//
// A "team member" is the exact same shape GET /me returns (see
// features/auth/types.ts's AuthUser) — this feature manages the same table,
// just for every account instead of just the caller's own. Reusing AuthUser
// here (instead of redeclaring an identical User interface) is what keeps
// this a single source of truth rather than a second, drifting copy.
import type { AuthUser } from '@/features/auth/types'

export type TeamMember = AuthUser

export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface PaginatedUsers {
  data: TeamMember[]
  pagination: Pagination
}

export interface ListUsersQuery {
  search?: string
  page?: number
  limit?: number
}

// Body for POST /users. Despite the "Invite User" UI wording, this just
// creates a user account directly — no email is sent, no invite
// token/record exists anywhere. The Admin manually hands the person their
// email + this password afterward. email + password are required;
// fullName/role are optional profile fields set up front. There is no
// username field — dropped from the User table (see backend's
// prisma/migrations/20260831112339_user_schema_updated).
export interface CreateUserInput {
  email: string
  password: string
  fullName?: string
  role?: string
}

// Body for PATCH /users/:id — same fields, all optional (only what's
// provided changes). Mirrors ReservationInput's create/update split in
// features/reservations/types.ts.
export type UpdateUserInput = Partial<CreateUserInput>
