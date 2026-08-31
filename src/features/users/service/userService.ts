// CRUD + list/search/paginate against /api/users (requireAuth-gated —
// apiRequest attaches the Authorization header and handles 401 refresh
// transparently, see services/api.ts). Mirrors
// features/reservations/services/reservationService.ts's shape.
//
// This is the *only* place in the app that talks to /users — SettingsView's
// own profile edit goes through features/settings/services/profileService.ts,
// which itself calls updateUser() below rather than hitting the endpoint a
// second time (see that file). createUser() below is also the entire
// "Invite User" flow (see SettingsView.vue's Team section) — it's a plain
// account creation call, there's no email being sent and no separate
// invite record/token.
import { apiRequest } from '@/services/api'
import type { CreateUserInput, ListUsersQuery, PaginatedUsers, TeamMember, UpdateUserInput } from '../types'

function buildQuery(query: ListUsersQuery): string {
  const params = new URLSearchParams()
  if (query.search) params.set('search', query.search)
  params.set('page', String(query.page ?? 1))
  params.set('limit', String(query.limit ?? 12))
  return params.toString()
}

export function listUsers(query: ListUsersQuery = {}): Promise<PaginatedUsers> {
  return apiRequest<PaginatedUsers>(`/users?${buildQuery(query)}`)
}

// Cheap count-only query (same trick as reservationService's countReservations)
// for the Team summary card on System Settings — limit:1 gets the total
// member count from `pagination.total` without fetching real rows.
export async function countUsers(query: Omit<ListUsersQuery, 'page' | 'limit'> = {}): Promise<number> {
  const { pagination } = await listUsers({ ...query, page: 1, limit: 1 })
  return pagination.total
}

export function getUser(id: number): Promise<TeamMember> {
  return apiRequest<TeamMember>(`/users/${id}`)
}

export function createUser(input: CreateUserInput): Promise<TeamMember> {
  return apiRequest<TeamMember>('/users', {
    method: 'POST',
    body: JSON.stringify(input),
  })
}

export function updateUser(id: number, input: UpdateUserInput): Promise<TeamMember> {
  return apiRequest<TeamMember>(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(input),
  })
}

// The backend rejects deleting the caller's own account (400 — see
// user.controller.ts's deleteUserController); callers here (UserTable) hide
// the Remove action for that row rather than let the request round-trip
// just to fail.
export function deleteUser(id: number): Promise<void> {
  return apiRequest<void>(`/users/${id}`, { method: 'DELETE' })
}
