<!-- DashboardView.vue — Overview stats + reservation breakdown donuts for the
     month selected in the header. Social/content KPIs, the trend chart and
     the top-content table were removed — none of that data exists in the
     backend yet (Auth + Reservations CRUD is the entire API surface today);
     see the dashboard scope review this was trimmed against. -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import DashboardMonthPicker from '../components/DashboardMonthPicker.vue'
import DashboardCard from '../components/DashboardCard.vue'
import ReservationSummary from '../components/ReservationSummary.vue'
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

      <footer class="pt-4 text-center text-xs text-text-muted">© 2025 SKAI. All rights reserved.</footer>
    </main>
  </div>
</template>
