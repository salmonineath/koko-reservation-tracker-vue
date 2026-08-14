import type { DashboardMonthData } from '../types'

// Chart palette — kept in one place so donuts, bars and legends stay in sync.
const NAVY = 'var(--color-chart-navy)'
const RED = 'var(--color-chart-red)'
const SLATE = 'var(--color-chart-slate)'
const GRAY = 'var(--color-chart-gray)'
const MIST = 'var(--color-chart-mist)'

// Social/content performance and chart aggregates have no backend shape yet
// (see doc/FRONTEND_MOCK_DATA_SCHEMA.md §5 "out of scope this release"), so
// this month-keyed map is frontend-only mock data for UI development.
// `reservationsBySource` / `reservationStatus` buckets DO map to the real
// ReservationSource / ReservationStatus enums (see features/dashboard/types.ts).
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
      { key: 'totalReach', label: 'Total Reach', value: '98.2K', direction: 'up', percent: 5 },
      { key: 'totalViews', label: 'Total Views', value: '149.7K', direction: 'up', percent: 7 },
      { key: 'totalInteractions', label: 'Total Interactions', value: '11.8K', direction: 'up', percent: 4 },
      { key: 'newFollowers', label: 'New Followers', value: '0.9K', direction: 'up', percent: 6 },
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
    trendAxisLabels: ['1 Mar', '8 Mar', '15 Mar', '22 Mar', '29 Mar'],
    trend: [
      { thisPeriod: 11, lastPeriod: 8 },
      { thisPeriod: 15, lastPeriod: 12 },
      { thisPeriod: 12, lastPeriod: 10 },
      { thisPeriod: 19, lastPeriod: 16 },
      { thisPeriod: 16, lastPeriod: 13 },
      { thisPeriod: 22, lastPeriod: 19 },
      { thisPeriod: 19, lastPeriod: 16 },
      { thisPeriod: 25, lastPeriod: 21 },
      { thisPeriod: 29, lastPeriod: 23 },
    ],
    topPlatforms: [
      { label: 'Instagram', value: '46.3K', percentOfMax: 100, color: RED },
      { label: 'Facebook', value: '35.8K', percentOfMax: 77, color: NAVY },
      { label: 'TikTok', value: '24.9K', percentOfMax: 54, color: SLATE },
    ],
    topContent: [
      { id: 1, title: 'KOKO Wagyu Launch', platform: 'Instagram', type: 'Reel', reach: '19.0K', interactions: '2.1K', views: '27.6K', date: 'Mar 26, 2025' },
      { id: 2, title: "Women's Day Promo", platform: 'Facebook', type: 'Image', reach: '15.9K', interactions: '1.5K', views: '19.8K', date: 'Mar 19, 2025' },
      { id: 3, title: 'Set Lunch Deal', platform: 'Instagram', type: 'Image', reach: '13.2K', interactions: '1.2K', views: '16.9K', date: 'Mar 13, 2025' },
      { id: 4, title: 'Staff Spotlight', platform: 'TikTok', type: 'Video', reach: '11.4K', interactions: '1.0K', views: '14.8K', date: 'Mar 7, 2025' },
      { id: 5, title: 'Weekend Grill', platform: 'Facebook', type: 'Reel', reach: '9.8K', interactions: '0.8K', views: '12.5K', date: 'Mar 2, 2025' },
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
      { key: 'totalReach', label: 'Total Reach', value: '105.4K', direction: 'up', percent: 8 },
      { key: 'totalViews', label: 'Total Views', value: '160.1K', direction: 'up', percent: 12 },
      { key: 'totalInteractions', label: 'Total Interactions', value: '13.1K', direction: 'up', percent: 9 },
      { key: 'newFollowers', label: 'New Followers', value: '1.1K', direction: 'up', percent: 7 },
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
    trendAxisLabels: ['1 Apr', '8 Apr', '15 Apr', '22 Apr', '29 Apr'],
    trend: [
      { thisPeriod: 12, lastPeriod: 9 },
      { thisPeriod: 16, lastPeriod: 13 },
      { thisPeriod: 13, lastPeriod: 11 },
      { thisPeriod: 20, lastPeriod: 17 },
      { thisPeriod: 17, lastPeriod: 14 },
      { thisPeriod: 24, lastPeriod: 20 },
      { thisPeriod: 20, lastPeriod: 17 },
      { thisPeriod: 27, lastPeriod: 22 },
      { thisPeriod: 31, lastPeriod: 25 },
    ],
    topPlatforms: [
      { label: 'Instagram', value: '48.9K', percentOfMax: 100, color: RED },
      { label: 'Facebook', value: '39.2K', percentOfMax: 80, color: NAVY },
      { label: 'TikTok', value: '26.7K', percentOfMax: 55, color: SLATE },
    ],
    topContent: [
      { id: 1, title: 'KOKO Ribeye Special', platform: 'Instagram', type: 'Reel', reach: '20.1K', interactions: '2.3K', views: '29.4K', date: 'Apr 27, 2025' },
      { id: 2, title: 'Songkran Promo', platform: 'Facebook', type: 'Image', reach: '17.2K', interactions: '1.7K', views: '21.0K', date: 'Apr 20, 2025' },
      { id: 3, title: 'Weekday Lunch Set', platform: 'Instagram', type: 'Image', reach: '14.5K', interactions: '1.3K', views: '18.1K', date: 'Apr 14, 2025' },
      { id: 4, title: 'Kitchen Tour', platform: 'TikTok', type: 'Video', reach: '12.9K', interactions: '1.2K', views: '16.4K', date: 'Apr 8, 2025' },
      { id: 5, title: 'Family Combo', platform: 'Facebook', type: 'Reel', reach: '10.6K', interactions: '0.9K', views: '13.7K', date: 'Apr 3, 2025' },
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
      { key: 'totalReach', label: 'Total Reach', value: '128.6K', direction: 'up', percent: 22 },
      { key: 'totalViews', label: 'Total Views', value: '198.4K', direction: 'up', percent: 24 },
      { key: 'totalInteractions', label: 'Total Interactions', value: '15.2K', direction: 'up', percent: 16 },
      { key: 'newFollowers', label: 'New Followers', value: '1.2K', direction: 'up', percent: 10 },
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
    trendAxisLabels: ['1 May', '8 May', '15 May', '22 May', '29 May'],
    trend: [
      { thisPeriod: 14, lastPeriod: 10 },
      { thisPeriod: 19, lastPeriod: 16 },
      { thisPeriod: 15, lastPeriod: 13 },
      { thisPeriod: 24, lastPeriod: 20 },
      { thisPeriod: 20, lastPeriod: 17 },
      { thisPeriod: 29, lastPeriod: 24 },
      { thisPeriod: 24, lastPeriod: 20 },
      { thisPeriod: 33, lastPeriod: 27 },
      { thisPeriod: 38, lastPeriod: 30 },
    ],
    topPlatforms: [
      { label: 'Instagram', value: '55.2K', percentOfMax: 100, color: RED },
      { label: 'Facebook', value: '42.1K', percentOfMax: 76, color: NAVY },
      { label: 'TikTok', value: '31.3K', percentOfMax: 57, color: SLATE },
    ],
    topContent: [
      { id: 1, title: 'KOKO Tomahawk Steak', platform: 'Instagram', type: 'Reel', reach: '24.5K', interactions: '2.8K', views: '36.1K', date: 'May 28, 2025' },
      { id: 2, title: "Valentine's Day Promo", platform: 'Facebook', type: 'Image', reach: '18.7K', interactions: '1.9K', views: '23.4K', date: 'May 22, 2025' },
      { id: 3, title: 'Weekend Special', platform: 'Instagram', type: 'Image', reach: '16.2K', interactions: '1.6K', views: '20.8K', date: 'May 15, 2025' },
      { id: 4, title: 'KOKO Behind the Scene', platform: 'TikTok', type: 'Video', reach: '14.8K', interactions: '1.4K', views: '19.2K', date: 'May 10, 2025' },
      { id: 5, title: "Chef's Special", platform: 'Facebook', type: 'Reel', reach: '12.1K', interactions: '1.1K', views: '15.3K', date: 'May 5, 2025' },
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
      { key: 'totalReach', label: 'Total Reach', value: '151.3K', direction: 'up', percent: 18 },
      { key: 'totalViews', label: 'Total Views', value: '221.9K', direction: 'up', percent: 12 },
      { key: 'totalInteractions', label: 'Total Interactions', value: '17.4K', direction: 'up', percent: 14 },
      { key: 'newFollowers', label: 'New Followers', value: '1.4K', direction: 'up', percent: 17 },
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
    trendAxisLabels: ['1 Jun', '8 Jun', '15 Jun', '22 Jun', '29 Jun'],
    trend: [
      { thisPeriod: 16, lastPeriod: 12 },
      { thisPeriod: 22, lastPeriod: 19 },
      { thisPeriod: 18, lastPeriod: 15 },
      { thisPeriod: 28, lastPeriod: 24 },
      { thisPeriod: 23, lastPeriod: 20 },
      { thisPeriod: 34, lastPeriod: 29 },
      { thisPeriod: 28, lastPeriod: 24 },
      { thisPeriod: 38, lastPeriod: 32 },
      { thisPeriod: 45, lastPeriod: 36 },
    ],
    topPlatforms: [
      { label: 'Instagram', value: '62.0K', percentOfMax: 100, color: RED },
      { label: 'Facebook', value: '47.5K', percentOfMax: 77, color: NAVY },
      { label: 'TikTok', value: '34.8K', percentOfMax: 56, color: SLATE },
    ],
    topContent: [
      { id: 1, title: 'KOKO Seafood Tower', platform: 'Instagram', type: 'Reel', reach: '27.3K', interactions: '3.2K', views: '40.5K', date: 'Jun 27, 2025' },
      { id: 2, title: "Father's Day Promo", platform: 'Facebook', type: 'Image', reach: '21.6K', interactions: '2.2K', views: '26.9K', date: 'Jun 20, 2025' },
      { id: 3, title: 'Summer Special', platform: 'Instagram', type: 'Image', reach: '18.4K', interactions: '1.9K', views: '23.7K', date: 'Jun 14, 2025' },
      { id: 4, title: 'Behind the Grill', platform: 'TikTok', type: 'Video', reach: '16.7K', interactions: '1.6K', views: '21.6K', date: 'Jun 8, 2025' },
      { id: 5, title: "Chef's Tasting Menu", platform: 'Facebook', type: 'Reel', reach: '13.9K', interactions: '1.3K', views: '17.8K', date: 'Jun 3, 2025' },
    ],
  },
]

export const DEFAULT_MONTH_KEY = '2025-05'

export function getMonthData(key: string): DashboardMonthData {
  return DASHBOARD_MONTHS.find((m) => m.key === key) ?? DASHBOARD_MONTHS.find((m) => m.key === DEFAULT_MONTH_KEY)!
}
