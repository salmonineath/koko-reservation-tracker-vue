import type { DashboardMonthData } from '../types'

// Chart palette — kept in one place so donuts stay in sync.
const NAVY = 'var(--color-chart-navy)'
const RED = 'var(--color-chart-red)'
const SLATE = 'var(--color-chart-slate)'
const GRAY = 'var(--color-chart-gray)'
const MIST = 'var(--color-chart-mist)'

// This is reservation data only — the backend today is Auth + Reservations
// CRUD, nothing else (see doc/FRONTEND_API_SCOPE.md). It's still mock/
// hardcoded rather than wired to real filtered API calls; see the scope
// review this was trimmed against for what a real wiring would need
// (N filtered `GET /api/reservations` calls for the per-source/per-status
// counts and month-over-month deltas — `Total Guests` specifically has no
// endpoint support at all, since `pagination.total` is a row count, not a
// sum of `guests`).
export const DASHBOARD_MONTHS: DashboardMonthData[] = [
  {
    key: '2025-03',
    label: 'March 2025',
    comparisonLabel: 'vs Feb 2025',
    overview: [
      { key: 'totalReservations', label: 'Total Reservations', value: '143', direction: 'down', percent: 5 },
      { key: 'completed', label: 'Completed', value: '102', direction: 'up', percent: 3 },
      { key: 'totalGuests', label: 'Total Guests', value: '365', direction: 'down', percent: 2 },
      { key: 'cancelled', label: 'Cancelled', value: '9', direction: 'down', percent: 20 },
    ],
    reservationsBySource: [
      { label: 'Instagram', sourceKey: 'INSTAGRAM', count: 42, percent: 29, color: RED },
      { label: 'Facebook', sourceKey: 'FACEBOOK', count: 40, percent: 28, color: NAVY },
      { label: 'Phone Call', sourceKey: 'PHONE_CALL', count: 30, percent: 21, color: SLATE },
      { label: 'Walk-in', sourceKey: 'WALK_IN', count: 21, percent: 15, color: GRAY },
      { label: 'Others', count: 10, percent: 7, color: MIST },
    ],
    reservationStatus: [
      { label: 'Completed', statusKey: 'COMPLETED', count: 102, percent: 71, color: NAVY },
      { label: 'Confirmed', statusKey: 'CONFIRMED', count: 32, percent: 22, color: SLATE },
      { label: 'Cancelled', statusKey: 'CANCELLED', count: 9, percent: 6, color: RED },
    ],
  },
  {
    key: '2025-04',
    label: 'April 2025',
    comparisonLabel: 'vs Mar 2025',
    overview: [
      { key: 'totalReservations', label: 'Total Reservations', value: '156', direction: 'up', percent: 9 },
      { key: 'completed', label: 'Completed', value: '86', direction: 'down', percent: 4 },
      { key: 'totalGuests', label: 'Total Guests', value: '402', direction: 'up', percent: 6 },
      { key: 'cancelled', label: 'Cancelled', value: '13', direction: 'up', percent: 11 },
    ],
    reservationsBySource: [
      { label: 'Instagram', sourceKey: 'INSTAGRAM', count: 50, percent: 32, color: RED },
      { label: 'Facebook', sourceKey: 'FACEBOOK', count: 48, percent: 31, color: NAVY },
      { label: 'Phone Call', sourceKey: 'PHONE_CALL', count: 28, percent: 18, color: SLATE },
      { label: 'Walk-in', sourceKey: 'WALK_IN', count: 20, percent: 13, color: GRAY },
      { label: 'Others', count: 10, percent: 6, color: MIST },
    ],
    reservationStatus: [
      { label: 'Completed', statusKey: 'COMPLETED', count: 86, percent: 55, color: NAVY },
      { label: 'Confirmed', statusKey: 'CONFIRMED', count: 57, percent: 37, color: SLATE },
      { label: 'Cancelled', statusKey: 'CANCELLED', count: 13, percent: 8, color: RED },
    ],
  },
  {
    // Exact match to the SKAI dashboard mockup — the default month.
    key: '2025-05',
    label: 'May 2025',
    comparisonLabel: 'vs Apr 2025',
    overview: [
      { key: 'totalReservations', label: 'Total Reservations', value: '128', direction: 'down', percent: 18 },
      { key: 'completed', label: 'Completed', value: '96', direction: 'up', percent: 12 },
      { key: 'totalGuests', label: 'Total Guests', value: '342', direction: 'down', percent: 15 },
      { key: 'cancelled', label: 'Cancelled', value: '12', direction: 'down', percent: 8 },
    ],
    reservationsBySource: [
      { label: 'Instagram', sourceKey: 'INSTAGRAM', count: 45, percent: 35, color: RED },
      { label: 'Facebook', sourceKey: 'FACEBOOK', count: 38, percent: 30, color: NAVY },
      { label: 'Phone Call', sourceKey: 'PHONE_CALL', count: 20, percent: 16, color: SLATE },
      { label: 'Walk-in', sourceKey: 'WALK_IN', count: 15, percent: 12, color: GRAY },
      { label: 'Others', count: 10, percent: 7, color: MIST },
    ],
    reservationStatus: [
      { label: 'Completed', statusKey: 'COMPLETED', count: 96, percent: 75, color: NAVY },
      { label: 'Confirmed', statusKey: 'CONFIRMED', count: 20, percent: 16, color: SLATE },
      { label: 'Cancelled', statusKey: 'CANCELLED', count: 12, percent: 9, color: RED },
    ],
  },
  {
    key: '2025-06',
    label: 'June 2025',
    comparisonLabel: 'vs May 2025',
    overview: [
      { key: 'totalReservations', label: 'Total Reservations', value: '141', direction: 'up', percent: 10 },
      { key: 'completed', label: 'Completed', value: '108', direction: 'up', percent: 12 },
      { key: 'totalGuests', label: 'Total Guests', value: '368', direction: 'up', percent: 8 },
      { key: 'cancelled', label: 'Cancelled', value: '10', direction: 'down', percent: 17 },
    ],
    reservationsBySource: [
      { label: 'Instagram', sourceKey: 'INSTAGRAM', count: 50, percent: 35, color: RED },
      { label: 'Facebook', sourceKey: 'FACEBOOK', count: 42, percent: 30, color: NAVY },
      { label: 'Phone Call', sourceKey: 'PHONE_CALL', count: 24, percent: 17, color: SLATE },
      { label: 'Walk-in', sourceKey: 'WALK_IN', count: 17, percent: 12, color: GRAY },
      { label: 'Others', count: 8, percent: 6, color: MIST },
    ],
    reservationStatus: [
      { label: 'Completed', statusKey: 'COMPLETED', count: 108, percent: 77, color: NAVY },
      { label: 'Confirmed', statusKey: 'CONFIRMED', count: 23, percent: 16, color: SLATE },
      { label: 'Cancelled', statusKey: 'CANCELLED', count: 10, percent: 7, color: RED },
    ],
  },
]

export const DEFAULT_MONTH_KEY = '2025-05'

export function getMonthData(key: string): DashboardMonthData {
  return DASHBOARD_MONTHS.find((m) => m.key === key) ?? DASHBOARD_MONTHS.find((m) => m.key === DEFAULT_MONTH_KEY)!
}
