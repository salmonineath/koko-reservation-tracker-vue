<!-- DashboardView.vue — Overview stats + reservation breakdown donuts for the
     period selected in the header. Social/content KPIs, the trend chart and
     the top-content table were removed — none of that data exists in the
     backend yet (Auth + Reservations CRUD is the entire API surface today);
     see the dashboard scope review this was trimmed against.

     The period picker itself is the same shared DateRangeFilter Reservations
     uses (see dateRangeFilterStore) - picking a range here still shows here
     when you navigate to Reservations, and vice versa. What it drives is
     NOT shared, though: DASHBOARD_MONTHS is fixed, hand-written mock data
     keyed by a handful of 2025 months (see its file header - there's no
     backend aggregate endpoint for it yet), so a real 2026 range just falls
     back to the closest available mock month via getMonthData rather than
     actually re-slicing anything. Reservations' own stats cards (right next
     to its copy of this picker) ARE wired to real filtered counts - this is
     the one screen still waiting on that. -->
<script setup lang="ts">
import { computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import DateRangeFilter from '@/components/common/DateRangeFilter.vue'
import DashboardCard from '../components/DashboardCard.vue'
import ReservationSummary from '../components/ReservationSummary.vue'
import { getMonthData } from '../mock/dashboardMockData'
import { useDateRangeFilterStore } from '@/stores/dateRangeFilterStore'

const dateRange = useDateRangeFilterStore()
// "YYYY-MM" from the shared range's start date - matches DASHBOARD_MONTHS'
// key format when it happens to overlap; getMonthData falls back to
// DEFAULT_MONTH_KEY otherwise (see the file-header note above).
const monthKey = computed(() => dateRange.dateFrom.slice(0, 7))
const month = computed(() => getMonthData(monthKey.value))
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <AppHeader title="Dashboard">
    </AppHeader>

    <main class="min-h-0 flex-1 space-y-6 overflow-y-auto p-8">
      <section>
        <div class="p-4 border-black bg-white shadow-md rounded-lg">
          <DateRangeFilter />
        </div>
      </section>
      <section>
        <h2 class="mb-4 text-lg font-bold text-text-heading">Overview</h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <DashboardCard
            v-for="stat in month.overview"
            :key="stat.key"
            :stat="stat"
            :comparison-label="month.comparisonLabel"
          />
        </div>
      </section>

      <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ReservationSummary title="Reservations by Source" :segments="month.reservationsBySource" />
        <ReservationSummary title="Reservation Status" :segments="month.reservationStatus" />
      </section>
    </main>
  </div>
</template>
