<!-- DateRangeFilter.vue — "Period: ‹ August 2026 ›" + from/to date pickers +
     Apply/Reset. Reads/writes useDateRangeFilterStore directly (no props) so
     dropping this on any screen automatically shares state with every other
     screen that also has it — see dateRangeFilterStore.ts. -->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import AppDatePicker from './AppDatePicker.vue'
import AppButton from './AppButton.vue'
import { useDateRangeFilterStore } from '@/stores/dateRangeFilterStore'

const dateRange = useDateRangeFilterStore()

// Staged locally so free-typing a date doesn't refetch on every keystroke -
// on every screen that embeds this, only Apply/Reset/the period arrows
// commit back to the shared store the pages actually query against.
const stagedFrom = ref(dateRange.dateFrom)
const stagedTo = ref(dateRange.dateTo)

watch(
  () => [dateRange.dateFrom, dateRange.dateTo],
  ([from, to]) => {
    stagedFrom.value = from
    stagedTo.value = to
  },
)

const periodLabel = computed(() => {
  if (!stagedFrom.value) return ''
  const [y, m, d] = stagedFrom.value.split('-').map(Number)
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(y, m - 1, d))
})

function shiftPeriod(delta: number) {
  // Writes straight to the shared store (a discrete click, not a keystroke
  // stream) - the watch above then syncs the staged inputs to match.
  dateRange.shiftPeriodMonths(delta)
}

function apply() {
  dateRange.setRange(stagedFrom.value, stagedTo.value)
}

function reset() {
  dateRange.resetToDefault()
}
</script>

<template>
  <div class="flex flex-wrap items-end gap-2">
    <div>
      <!-- <label class="mb-2 block text-sm font-semibold text-text-heading">Period:</label> -->
      <div class="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-card px-2 py-2.5">
        <button
          type="button"
          aria-label="Previous month"
          class="text-text-muted hover:text-text-heading"
          @click="shiftPeriod(-1)"
        >
          <FontAwesomeIcon :icon="faChevronLeft" class="h-3.5 w-3.5" />
        </button>
        <span class="w-28 text-center text-sm font-medium text-text-heading">{{ periodLabel }}</span>
        <button
          type="button"
          aria-label="Next month"
          class="text-text-muted hover:text-text-heading"
          @click="shiftPeriod(1)"
        >
          <FontAwesomeIcon :icon="faChevronRight" class="h-3.5 w-3.5" />
        </button>
      </div>
    </div>

    <AppDatePicker v-model="stagedFrom" class="w-36" />
    <FontAwesomeIcon :icon="faArrowRight" class="mb-2.5 h-3.5 w-3.5 shrink-0 text-text-muted" />
    <AppDatePicker v-model="stagedTo" placeholder="No end date" class="w-36" />

    <AppButton variant="secondary" type="button" @click="apply">Apply</AppButton>
    <AppButton variant="secondary" type="button" @click="reset">Reset</AppButton>
  </div>
</template>
