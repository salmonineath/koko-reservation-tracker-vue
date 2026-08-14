<!-- DashboardView.vue — assembles the Overview stats, chart panels and
     top-content table from the month currently selected in the header. -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import DashboardMonthPicker from '../components/DashboardMonthPicker.vue'
import DashboardCard from '../components/DashboardCard.vue'
import ReservationSummary from '../components/ReservationSummary.vue'
import DashboardTrendCard from '../components/DashboardTrendCard.vue'
import TopPlatformCard from '../components/TopPlatformCard.vue'
import TopContentTable from '../components/TopContentTable.vue'
import { DASHBOARD_MONTHS, DEFAULT_MONTH_KEY, getMonthData } from '../mock/dashboardMockData'

const monthOptions = DASHBOARD_MONTHS.map((m) => ({ key: m.key, label: m.label }))
const selectedMonthKey = ref(DEFAULT_MONTH_KEY)
const month = computed(() => getMonthData(selectedMonthKey.value))
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <AppHeader title="Dashboard">
      <template #actions>
        <DashboardMonthPicker v-model="selectedMonthKey" :options="monthOptions" />
      </template>
    </AppHeader>

    <main class="min-h-0 flex-1 space-y-6 overflow-y-auto p-8">
      <section>
        <h2 class="mb-4 text-lg font-bold text-text-heading">Overview</h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
          <DashboardCard
            v-for="stat in month.overview"
            :key="stat.key"
            :stat="stat"
            :comparison-label="month.comparisonLabel"
          />
        </div>
      </section>

      <section class="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div class="md:col-span-3">
          <ReservationSummary title="Reservations by Source" :segments="month.reservationsBySource" />
        </div>
        <div class="md:col-span-3">
          <ReservationSummary title="Reservation Status" :segments="month.reservationStatus" />
        </div>
        <div class="md:col-span-4">
          <DashboardTrendCard :axis-labels="month.trendAxisLabels" :points="month.trend" />
        </div>
        <div class="md:col-span-2">
          <TopPlatformCard :platforms="month.topPlatforms" />
        </div>
      </section>

      <TopContentTable :rows="month.topContent" />

      <footer class="pt-4 text-center text-xs text-text-muted">© 2025 SKAI. All rights reserved.</footer>
    </main>
  </div>
</template>
