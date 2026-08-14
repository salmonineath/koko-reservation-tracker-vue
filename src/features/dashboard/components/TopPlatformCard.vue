<!-- TopPlatformCard.vue — "Top Platform by Reach" horizontal bar ranking -->
<script setup lang="ts">
import type { PlatformReach } from '../types'

defineProps<{ platforms: PlatformReach[] }>()
</script>

<template>
  <div class="rounded-xl border border-surface-border bg-surface-card p-5">
    <h3 class="mb-5 font-semibold text-text-heading">Top Platform by Reach</h3>
    <ul class="space-y-4">
      <li v-for="platform in platforms" :key="platform.label">
        <p class="mb-1.5 text-sm text-text-muted">{{ platform.label }}</p>
        <div class="flex items-center gap-3">
          <div class="h-2 flex-1 overflow-hidden rounded-full bg-surface-page">
            <div class="h-full rounded-full" :style="{ width: platform.percentOfMax + '%', backgroundColor: platform.color }"></div>
          </div>
          <span class="shrink-0 text-sm font-semibold text-text-heading">{{ platform.value }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
