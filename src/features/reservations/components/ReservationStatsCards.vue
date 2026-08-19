<!-- ReservationStatsCards.vue — the 4 KPI tiles above the reservations table.
     All real numbers from the API (see ReservationListView's loadStats),
     scoped to the current date-range filter only — not source/status/search,
     since those are exactly what the breakdown cards summarize. Colors reuse
     STATUS_TONES (same success/warning/danger as the table's status pills)
     so a "Confirmed" count here reads the same green as a Confirmed row. -->
<script setup lang="ts">
import { computed } from 'vue'

export interface ReservationStats {
  total: number
  confirmed: number
  pending: number
  cancelled: number
}

const props = defineProps<{
  stats: ReservationStats | null
  dateRangeLabel: string
}>()

function percentOfTotal(count: number | undefined): string {
  const total = props.stats?.total
  if (!total || !count) return '0.0'
  return ((count / total) * 100).toFixed(1)
}

const confirmedPercent = computed(() => percentOfTotal(props.stats?.confirmed))
const pendingPercent = computed(() => percentOfTotal(props.stats?.pending))
const cancelledPercent = computed(() => percentOfTotal(props.stats?.cancelled))
</script>

<template>
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
    <div class="rounded-xl border border-surface-border bg-surface-card p-5">
      <p class="text-sm text-text-muted">Total Reservations</p>
      <p class="mt-2 text-3xl font-bold text-text-heading">{{ stats?.total ?? '—' }}</p>
      <p class="mt-2 text-xs text-text-muted">{{ dateRangeLabel }}</p>
    </div>

    <div class="rounded-xl border border-surface-border bg-surface-card p-5">
      <p class="text-sm text-text-muted">Confirmed</p>
      <p class="mt-2 text-3xl font-bold text-text-heading">{{ stats?.confirmed ?? '—' }}</p>
      <p class="mt-2 flex items-center gap-1 text-sm">
        <svg viewBox="0 0 10 10" class="h-2.5 w-2.5 fill-trend-up">
          <path d="M5 0 10 10H0Z" />
        </svg>
        <span class="font-semibold text-trend-up">{{ confirmedPercent }}%</span>
        <span class="text-text-muted">of total</span>
      </p>
    </div>

    <div class="rounded-xl border border-surface-border bg-surface-card p-5">
      <p class="text-sm text-text-muted">Pending</p>
      <p class="mt-2 text-3xl font-bold text-text-heading">{{ stats?.pending ?? '—' }}</p>
      <p class="mt-2 flex items-center gap-1.5 text-sm">
        <span class="h-2 w-2 rounded-full bg-amber-500" />
        <span class="font-semibold text-amber-600">{{ pendingPercent }}%</span>
        <span class="text-text-muted">of total</span>
      </p>
    </div>

    <div class="rounded-xl border border-surface-border bg-surface-card p-5">
      <p class="text-sm text-text-muted">Cancelled</p>
      <p class="mt-2 text-3xl font-bold text-text-heading">{{ stats?.cancelled ?? '—' }}</p>
      <p class="mt-2 flex items-center gap-1 text-sm">
        <svg viewBox="0 0 10 10" class="h-2.5 w-2.5 rotate-180 fill-trend-down">
          <path d="M5 0 10 10H0Z" />
        </svg>
        <span class="font-semibold text-trend-down">{{ cancelledPercent }}%</span>
        <span class="text-text-muted">of total</span>
      </p>
    </div>
  </div>
</template>
