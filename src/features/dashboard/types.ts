import type { ReservationSource, ReservationStatus } from '@/features/reservations/types'

export type TrendDirection = 'up' | 'down'

export interface OverviewStat {
  key: string
  label: string
  value: string
  direction: TrendDirection
  percent: number
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

export interface DashboardMonthData {
  key: string
  label: string
  comparisonLabel: string
  overview: OverviewStat[]
  reservationsBySource: DonutSegment[]
  reservationStatus: DonutSegment[]
}
