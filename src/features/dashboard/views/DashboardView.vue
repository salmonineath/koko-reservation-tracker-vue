<!-- DashboardView.vue — Overview stats + reservation breakdown donuts for the
     period selected in the header. Social/content KPIs, the trend chart and
     the top-content table were removed — none of that data exists in the
     backend yet (Auth + Reservations CRUD + this one Dashboard aggregate is
     the entire API surface today); see the dashboard scope review this was
     trimmed against.

     The period picker itself is the same shared DateRangeFilter Reservations
     uses (see dateRangeFilterStore) - picking a range here still shows here
     when you navigate to Reservations, and vice versa. Both screens now read
     real filtered data: this one calls GET /dashboard (see dashboardService),
     which returns exactly three totals (reservations/cancelled/guests) -
     there's no "completed" bucket since ReservationStatus itself has no
     COMPLETED value (see prisma/schema.prisma in the backend repo) - plus
     the two by-source/by-status breakdowns; labels and chart colors for
     those are assigned client-side since the backend only sends the raw
     enum + count + percent. -->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppPageTitle from '@/components/common/AppPageTitle.vue'
import DateRangeFilter from '@/components/common/DateRangeFilter.vue'
import DashboardCard from '../components/DashboardCard.vue'
import ReservationSummary from '../components/ReservationSummary.vue'
import { getDashboardStats } from '../services/dashboardService'
import type { DashboardStats, DonutSegment, OverviewStat } from '../types'
import { SOURCE_LABELS, STATUS_LABELS } from '@/features/reservations/utils/reservationFormatter'
import type { ReservationSource, ReservationStatus } from '@/features/reservations/types'
import { ApiError } from '@/services/api'
import { useDateRangeFilterStore } from '@/stores/dateRangeFilterStore'

const dateRange = useDateRangeFilterStore()

const stats = ref<DashboardStats | null>(null)
const isLoading = ref(true)
const loadError = ref('')

async function load() {
  isLoading.value = true
  loadError.value = ''
  try {
    stats.value = await getDashboardStats({ from: dateRange.dateFrom, to: dateRange.dateTo })
  } catch (err) {
    loadError.value = err instanceof ApiError ? err.message : 'Unable to load dashboard stats. Please try again.'
  } finally {
    isLoading.value = false
  }
}
watch([() => dateRange.dateFrom, () => dateRange.dateTo], load, { immediate: true })

// "Total Reservations"/"Cancelled" aren't backend labels - the endpoint
// gives back three bare totals (reservations/cancelled/guests), so the
// display label and up/down framing are assembled here. `guests` is
// deliberately excluded - no Total Guests card on this screen (matches the
// same removal on the Reservations screen's stats cards).
//
// Always exactly 2 entries, known labels included, regardless of whether
// `stats` has loaded yet - the layout (this grid, the date filter, the donut
// shells) renders immediately; only the values inside show '—' until the
// data arrives, instead of the whole page waiting behind a loading gate.
type OverviewKey = 'reservations' | 'cancelled'
const OVERVIEW_LABELS: Record<OverviewKey, string> = {
  reservations: 'Total Reservations',
  cancelled: 'Cancelled',
}
const overview = computed<OverviewStat[]>(() => {
  return (Object.keys(OVERVIEW_LABELS) as OverviewKey[]).map((key) => {
    const card = stats.value?.totals[key]
    return {
      key,
      label: OVERVIEW_LABELS[key],
      value: card ? String(card.current) : '—',
      direction: !card || card.deltaPercent === null ? null : card.deltaPercent >= 0 ? 'up' : 'down',
      percent: !card || card.deltaPercent === null ? null : Math.abs(card.deltaPercent),
    }
  })
})

// "vs previous period" rather than a fixed "vs Aug 2025" - the backend
// compares against the immediately preceding range of the same length, not
// necessarily a calendar month (see dashboard.service.ts's customRangeBounds).
const comparisonLabel = computed(() => (stats.value?.period.month ? `vs previous month` : 'vs previous period'))

// The backend only sends {source|status, count, percent} - labels and chart
// colors are a display concern, assigned here the same way the old mock data
// hand-picked them.
const SOURCE_COLORS: Record<ReservationSource, string> = {
  FACEBOOK: 'var(--color-chart-navy)',
  INSTAGRAM: 'var(--color-chart-red)',
  TIKTOK: 'var(--color-chart-slate)',
}
const STATUS_COLORS: Record<ReservationStatus, string> = {
  CONFIRMED: 'var(--color-chart-navy)',
  PENDING: 'var(--color-chart-gray)',
  CANCELLED: 'var(--color-chart-red)',
}

// Prisma's groupBy only returns rows for enum values that actually occurred
// in the period, so a source/status with zero reservations is simply absent
// from stats.value.bySource/byStatus rather than showing up as a 0 - walking
// the full enum here (defaulting missing ones to 0) is what keeps the legend
// showing every category, and the donut itself visible, instead of a
// category disappearing whenever its count happens to be zero.
const SOURCE_ORDER = Object.keys(SOURCE_COLORS) as ReservationSource[]
const STATUS_ORDER = Object.keys(STATUS_COLORS) as ReservationStatus[]

const bySource = computed<DonutSegment[]>(() => {
  const rows = stats.value?.bySource ?? []
  return SOURCE_ORDER.map((source) => {
    const row = rows.find((r) => r.source === source)
    return {
      label: SOURCE_LABELS[source],
      sourceKey: source,
      count: row?.count ?? 0,
      percent: row?.percent ?? 0,
      color: SOURCE_COLORS[source],
    }
  })
})
const byStatus = computed<DonutSegment[]>(() => {
  const rows = stats.value?.byStatus ?? []
  return STATUS_ORDER.map((status) => {
    const row = rows.find((r) => r.status === status)
    return {
      label: STATUS_LABELS[status],
      statusKey: status,
      count: row?.count ?? 0,
      percent: row?.percent ?? 0,
      color: STATUS_COLORS[status],
    }
  })
})

// Confirmed/Pending KPI cards - sit between Total Reservations and Cancelled
// in the Overview row. Reuses byStatus above (already zero-defaults a status
// with no reservations that period) rather than re-deriving count/percent
// from stats.value.byStatus a second time. "% of total" here means share of
// this period's reservations - not a vs-previous-period comparison like the
// other two Overview cards, matching how these two are shown on the
// Reservations screen's own stats cards.
//
// undefined (not a zero-valued object) while `stats` hasn't loaded yet - so
// the template can show '—' during the brief load instead of a real-looking
// "0 (0.0% of total)" that isn't actually confirmed data yet.
const confirmedStat = computed(() =>
  stats.value ? byStatus.value.find((s) => s.statusKey === 'CONFIRMED') : undefined,
)
const pendingStat = computed(() =>
  stats.value ? byStatus.value.find((s) => s.statusKey === 'PENDING') : undefined,
)
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <AppHeader title="Dashboard"> </AppHeader>

    <main class="min-h-0 flex-1 space-y-6 overflow-y-auto p-8">

      <div v-if="loadError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
        {{ loadError }}
      </div>

      <!-- The layout below renders immediately, regardless of isLoading/stats -
           only the values inside (overview/confirmedStat/pendingStat/bySource/
           byStatus, all computed with safe placeholder defaults above) wait
           for the data. No more blanking the whole page behind "Loading…" on
           every date-range change, just the numbers updating in place. -->
      <AppPageTitle title="Dashboard" />

      <section>
        <div class="p-4 border-black bg-white shadow-md rounded-lg">
          <DateRangeFilter />
        </div>
      </section>

      <section>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <DashboardCard :stat="overview[0]" :comparison-label="comparisonLabel" />

          <div class="rounded-xl border border-surface-border bg-surface-card p-5">
            <p class="text-sm text-text-muted">Confirmed</p>
            <p class="mt-2 text-3xl font-bold text-text-heading">{{ confirmedStat?.count ?? '—' }}</p>
            <p v-if="!confirmedStat" class="mt-2 text-sm text-text-muted">—</p>
            <p v-else class="mt-2 flex items-center gap-1 text-sm">
              <svg viewBox="0 0 10 10" class="h-2.5 w-2.5 fill-trend-up">
                <path d="M5 0 10 10H0Z" />
              </svg>
              <span class="font-semibold text-trend-up">{{ confirmedStat.percent.toFixed(1) }}%</span>
              <span class="text-text-muted">of total</span>
            </p>
          </div>

          <div class="rounded-xl border border-surface-border bg-surface-card p-5">
            <p class="text-sm text-text-muted">Pending</p>
            <p class="mt-2 text-3xl font-bold text-text-heading">{{ pendingStat?.count ?? '—' }}</p>
            <p v-if="!pendingStat" class="mt-2 text-sm text-text-muted">—</p>
            <p v-else class="mt-2 flex items-center gap-1.5 text-sm">
              <span class="h-2 w-2 rounded-full bg-amber-500" />
              <span class="font-semibold text-amber-600">{{ pendingStat.percent.toFixed(1) }}%</span>
              <span class="text-text-muted">of total</span>
            </p>
          </div>

          <DashboardCard :stat="overview[1]" :comparison-label="comparisonLabel" />
        </div>
      </section>

      <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ReservationSummary title="Reservations by Source" :segments="bySource" />
        <ReservationSummary title="Reservation Status" :segments="byStatus" />
      </section>
    </main>
  </div>
</template>
