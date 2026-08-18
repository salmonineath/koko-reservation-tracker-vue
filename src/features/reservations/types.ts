// Mirrors prisma/schema.prisma (koko-reservation-trackera-express) so the
// mock layer here can be swapped for real `fetch` calls with zero type churn.
// See doc/FRONTEND_MOCK_DATA_SCHEMA.md in the backend repo for the source of truth.

export type ReservationSource = 'FACEBOOK' | 'INSTAGRAM' | 'TIKTOK' | 'TELEGRAM'

export type ReservationStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED'

export interface Reservation {
  id: number
  customerName: string
  phone: string
  date: string // ISO 8601 datetime
  guests: number
  source: ReservationSource
  status: ReservationStatus
  notes: string | null
  createdAt: string
  updatedAt: string
}

export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface PaginatedReservations {
  data: Reservation[]
  pagination: Pagination
}

export interface ListReservationsQuery {
  search?: string
  source?: ReservationSource
  status?: ReservationStatus
  dateFrom?: string
  dateTo?: string
  page?: number
  limit?: number
}

// Body for both create (POST) and update (PATCH) — update just sends a
// subset of these fields. `notes` has no "clear" value server-side: to
// remove it you omit the key entirely, so it's `string | undefined`, not
// `string | null` like the Reservation entity's `notes` field.
export interface ReservationInput {
  customerName: string
  phone: string
  date: string
  guests: number
  source: ReservationSource
  status: ReservationStatus
  notes?: string
}
