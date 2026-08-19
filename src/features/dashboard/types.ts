import type { ReservationSource, ReservationStatus } from '@/features/reservations/types'

// Mirrors GET /dashboard's response (koko-reservation-trackera-express
// src/modules/dashboard/dashboard.types.ts) - see dashboardService.ts for the
// call. `current`/`previous` are raw counts for the requested period and the
// immediately preceding period of the same length; `deltaPercent` is null
// (not 0) when there's no previous-period baseline to compare against.
export interface StatCard {
  current: number
  previous: number
  deltaPercent: number | null
}

export interface DashboardStats {
  period: {
    // Null when a custom from/to range was requested instead of a single
    // calendar month.
    month: string | null
    from: string
    to: string
  }
  totals: {
    reservations: StatCard
    cancelled: StatCard
    guests: StatCard
  }
  // count out of the *current* period's total reservations.
  bySource: Array<{ source: ReservationSource; count: number; percent: number }>
  byStatus: Array<{ status: ReservationStatus; count: number; percent: number }>
}

export type TrendDirection = 'up' | 'down'

// One Overview card - built client-side from a DashboardStats totals entry
// (see DashboardView.vue), not sent by the backend as-is. `direction`/
// `percent` are both null when the backend had no previous-period baseline
// to compare against (see StatCard.deltaPercent).
export interface OverviewStat {
  key: string
  label: string
  value: string
  direction: TrendDirection | null
  percent: number | null
}

/** One wedge of a donut chart. `sourceKey`/`statusKey` tie the display bucket
 *  back to the real backend enum it aggregates, per the Prisma schema. */
export interface DonutSegment {
  label: string
  sourceKey?: ReservationSource
  statusKey?: ReservationStatus
  count: number
  percent: number
  color: string
}
