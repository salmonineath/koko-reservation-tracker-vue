<!-- StatusBadge.vue — soft-colored pill. Generic (label + tone), so anything
     with a small set of states (reservation status today) can reuse it. -->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
}>()

const TONE_CLASS: Record<string, string> = {
  success: 'bg-trend-up/10 text-trend-up',
  warning: 'bg-amber-500/10 text-amber-600',
  danger: 'bg-brand-red/10 text-brand-red',
  info: 'bg-blue-500/10 text-blue-600',
  neutral: 'bg-text-muted/10 text-text-muted',
}

const classes = computed(() => TONE_CLASS[props.tone ?? 'neutral'])
</script>

<template>
  <span class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold" :class="classes">
    {{ label }}
  </span>
</template>
