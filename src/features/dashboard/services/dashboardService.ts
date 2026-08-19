// Thin wrapper over GET /dashboard (see koko-reservation-trackera-express
// src/modules/dashboard/dashboard.routes.ts) - the backend accepts either a
// `month` (YYYY-MM) or a custom `from`/`to` range, never both. The shared
// date-range filter (dateRangeFilterStore) always has both dateFrom and
// dateTo populated, so this always sends the from/to form.
import { apiRequest } from '@/services/api'
import type { DashboardStats } from '../types'

export interface DashboardQuery {
  from?: string
  to?: string
}

export function getDashboardStats(query: DashboardQuery = {}): Promise<DashboardStats> {
  const params = new URLSearchParams()
  if (query.from) params.set('from', query.from)
  if (query.to) params.set('to', query.to)
  return apiRequest<DashboardStats>(`/dashboard?${params.toString()}`)
}
