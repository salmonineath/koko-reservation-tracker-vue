<!-- DashboardTrendCard.vue — "Reservations Trend" line chart: solid "This Month"
     vs. dashed "Last Month". Hover a point for its exact value. -->
<script setup lang="ts">
import { computed } from 'vue'
import type { TrendPoint } from '../types'

const props = defineProps<{ axisLabels: string[]; points: TrendPoint[] }>()

const Y_TICKS = [0, 10, 20, 30, 40]
const MAX_Y = 40
const LEFT = 28
const RIGHT = 22
const TOP = 10
const BOTTOM = 24
const WIDTH = 440
const HEIGHT = 220
const CHART_W = WIDTH - LEFT - RIGHT
const CHART_H = HEIGHT - TOP - BOTTOM

function xAt(index: number) {
  return LEFT + (index / (props.points.length - 1)) * CHART_W
}
function yAt(value: number) {
  return TOP + CHART_H - (value / MAX_Y) * CHART_H
}

const thisMonthPath = computed(() =>
  props.points.map((p, i) => `${xAt(i)},${yAt(p.thisPeriod)}`).join(' '),
)
const lastMonthPath = computed(() =>
  props.points.map((p, i) => `${xAt(i)},${yAt(p.lastPeriod)}`).join(' '),
)
// Axis labels land every 2nd data point (5 labels across 9 points, e.g. "1 May" … "29 May").
const labelStep = computed(() => (props.points.length - 1) / (props.axisLabels.length - 1))
</script>

<template>
  <div class="rounded-xl border border-surface-border bg-surface-card p-5">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="font-semibold text-text-heading">Reservations Trend</h3>
      <div class="flex items-center gap-4 text-xs text-text-muted">
        <span class="flex items-center gap-1.5">
          <span class="h-0.5 w-4 bg-chart-navy"></span>
          This Month
        </span>
        <span class="flex items-center gap-1.5">
          <svg width="16" height="2" class="shrink-0">
            <line x1="0" y1="1" x2="16" y2="1" stroke="var(--color-chart-gray)" stroke-width="2" stroke-dasharray="3 2" />
          </svg>
          Last Month
        </span>
      </div>
    </div>

    <svg :viewBox="`0 0 ${WIDTH} ${HEIGHT}`" class="w-full">
      <!-- gridlines + y labels -->
      <g v-for="tick in Y_TICKS" :key="tick">
        <line :x1="LEFT" :x2="WIDTH - RIGHT" :y1="yAt(tick)" :y2="yAt(tick)" stroke="var(--color-surface-border)" stroke-width="1" />
        <text :x="LEFT - 8" :y="yAt(tick) + 3" text-anchor="end" font-size="10" fill="var(--color-text-muted)">{{ tick }}</text>
      </g>

      <!-- x labels -->
      <text
        v-for="(label, i) in axisLabels"
        :key="label"
        :x="xAt(i * labelStep)"
        :y="HEIGHT - 6"
        text-anchor="middle"
        font-size="10"
        fill="var(--color-text-muted)"
      >
        {{ label }}
      </text>

      <polyline :points="lastMonthPath" fill="none" stroke="var(--color-chart-gray)" stroke-width="2" stroke-dasharray="4 3" />
      <polyline :points="thisMonthPath" fill="none" stroke="var(--color-chart-navy)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />

      <circle
        v-for="(p, i) in points"
        :key="i"
        :cx="xAt(i)"
        :cy="yAt(p.thisPeriod)"
        r="6"
        fill="transparent"
        class="cursor-pointer hover:fill-chart-navy/10"
      >
        <title>This Month: {{ p.thisPeriod }} · Last Month: {{ p.lastPeriod }}</title>
      </circle>
    </svg>
  </div>
</template>
