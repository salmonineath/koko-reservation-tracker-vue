<!-- DashboardCard.vue — one Overview stat tile (value + up/down trend vs. prior month) -->
<script setup lang="ts">
import type { OverviewStat } from '../types'

defineProps<{ stat: OverviewStat; comparisonLabel: string }>()
</script>

<template>
  <div class="rounded-xl border border-surface-border bg-surface-card p-5">
    <p class="text-sm text-text-muted">{{ stat.label }}</p>
    <p class="mt-2 text-3xl font-bold text-text-heading">{{ stat.value }}</p>
    <p v-if="stat.direction === null" class="mt-2 text-sm text-text-muted">No prior period to compare</p>
    <p v-else class="mt-2 flex items-center gap-1 text-sm">
      <svg
        viewBox="0 0 10 10"
        class="h-2.5 w-2.5"
        :class="stat.direction === 'up' ? 'fill-trend-up' : 'rotate-180 fill-trend-down'"
      >
        <path d="M5 0 10 10H0Z" />
      </svg>
      <span class="font-semibold" :class="stat.direction === 'up' ? 'text-trend-up' : 'text-trend-down'">
        {{ stat.percent }}%
      </span>
      <span class="text-text-muted">{{ comparisonLabel }}</span>
    </p>
  </div>
</template>
