<!-- ReservationSummary.vue — donut chart + legend, reused for both
     "Reservations by Source" and "Reservation Status" panels. -->
<script setup lang="ts">
import { computed } from 'vue'
import type { DonutSegment } from '../types'

const props = defineProps<{ title: string; segments: DonutSegment[] }>()

// A conic-gradient built entirely from 0%-0% stops (every segment's count is
// zero for the period) renders as an invisible/blank circle, not an empty
// ring - which reads as "this is broken," not "the API call succeeded and
// there's just nothing here." A flat neutral ring says the latter.
const hasData = computed(() => props.segments.some((segment) => segment.count > 0))

const gradient = computed(() => {
  if (!hasData.value) return 'conic-gradient(var(--color-chart-mist) 0% 100%)'

  let cursor = 0
  const stops = props.segments.map((segment) => {
    const start = cursor
    cursor += segment.percent
    return `${segment.color} ${start}% ${cursor}%`
  })
  return `conic-gradient(${stops.join(', ')})`
})
</script>

<template>
  <div class="rounded-xl border border-surface-border bg-surface-card p-5">
    <h3 class="mb-5 font-semibold text-text-heading">{{ title }}</h3>
    <div class="flex items-center gap-4">
      <div class="relative h-24 w-24 shrink-0 rounded-full" :style="{ backgroundImage: gradient }">
        <div class="absolute inset-[22%] rounded-full bg-surface-card"></div>
      </div>
      <ul class="min-w-0 flex-1 space-y-2.5">
        <li v-for="segment in segments" :key="segment.label" class="flex items-center gap-2 text-sm whitespace-nowrap">
          <span class="h-2 w-2 shrink-0 rounded-full" :style="{ backgroundColor: segment.color }"></span>
          <span class="flex-1 text-text-body">{{ segment.label }}</span>
          <span class="shrink-0 font-medium text-text-heading">{{ segment.count }} ({{ segment.percent }}%)</span>
        </li>
      </ul>
    </div>
  </div>
</template>
