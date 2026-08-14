// CRUD + list/search/paginate against /api/reservations (requireAuth-gated —
// apiRequest attaches the Authorization header and handles 401 refresh
// transparently, see services/api.ts).
import { apiRequest } from '@/services/api'
import type { ListReservationsQuery, PaginatedReservations, Reservation, ReservationInput } from '../types'

function buildQuery(query: ListReservationsQuery): string {
  const params = new URLSearchParams()
  if (query.search) params.set('search', query.search)
  if (query.source) params.set('source', query.source)
  if (query.status) params.set('status', query.status)
  if (query.dateFrom) params.set('dateFrom', query.dateFrom)
  if (query.dateTo) params.set('dateTo', query.dateTo)
  params.set('page', String(query.page ?? 1))
  params.set('limit', String(query.limit ?? 12))
  return params.toString()
}

export function listReservations(query: ListReservationsQuery = {}): Promise<PaginatedReservations> {
  return apiRequest<PaginatedReservations>(`/reservations?${buildQuery(query)}`)
}

export function getReservation(id: number): Promise<Reservation> {
  return apiRequest<Reservation>(`/reservations/${id}`)
}

// The backend rejects an empty string for `notes` (min length 1 if present)
// and has no "clear notes" value — the only way to omit it is to not send
// the key at all.
function serialize(input: Partial<ReservationInput>) {
  const { notes, ...rest } = input
  return notes ? { ...rest, notes } : rest
}

export function createReservation(input: ReservationInput): Promise<Reservation> {
  return apiRequest<Reservation>('/reservations', {
    method: 'POST',
    body: JSON.stringify(serialize(input)),
  })
}

export function updateReservation(id: number, input: Partial<ReservationInput>): Promise<Reservation> {
  return apiRequest<Reservation>(`/reservations/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(serialize(input)),
  })
}

export function deleteReservation(id: number): Promise<void> {
  return apiRequest<void>(`/reservations/${id}`, { method: 'DELETE' })
}
