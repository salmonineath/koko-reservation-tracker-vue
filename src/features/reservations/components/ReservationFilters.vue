<!-- ReservationFilters.vue — search + source/status/date-range filters for the
     list view. Two plain <input type="date"> fields stand in for the
     mockup's single date-range popover — same result, far less code for an
     internal MVP. -->
<script setup lang="ts">
import { computed } from 'vue'
import { faMagnifyingGlass, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import AppInput from '@/components/common/AppInput.vue'
import AppSelect from '@/components/common/AppSelect.vue'
import type { ReservationSource, ReservationStatus } from '../types'
import { SOURCE_LABELS, STATUS_LABELS } from '../utils/reservationFormatter'

export interface ReservationFiltersValue {
  search: string
  source: ReservationSource | ''
  status: ReservationStatus | ''
  dateFrom: string
  dateTo: string
}

const model = defineModel<ReservationFiltersValue>({ required: true })

const SOURCE_OPTIONS = (Object.keys(SOURCE_LABELS) as ReservationSource[]).map((value) => ({
  value,
  label: SOURCE_LABELS[value],
}))
const STATUS_OPTIONS = (Object.keys(STATUS_LABELS) as ReservationStatus[]).map((value) => ({
  value,
  label: STATUS_LABELS[value],
}))

const hasActiveFilters = computed(
  () => !!(model.value.search || model.value.source || model.value.status || model.value.dateFrom || model.value.dateTo),
)

function clear() {
  model.value = { search: '', source: '', status: '', dateFrom: '', dateTo: '' }
}
</script>

<template>
  <div class="grid grid-cols-1 gap-3 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] md:items-end">
    <AppInput v-model="model.search" :icon="faMagnifyingGlass" placeholder="Search by name or phone" />
    <AppInput v-model="model.dateFrom" type="date" />
    <AppInput v-model="model.dateTo" type="date" />
    <AppSelect v-model="model.source" placeholder="All Sources" :options="SOURCE_OPTIONS" />
    <AppSelect v-model="model.status" placeholder="All Statuses" :options="STATUS_OPTIONS" />
    <button
      type="button"
      class="flex items-center gap-2 whitespace-nowrap px-2 py-2.5 text-sm font-medium text-text-muted hover:text-text-heading disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="!hasActiveFilters"
      @click="clear"
    >
      <FontAwesomeIcon :icon="faRotateLeft" class="h-3.5 w-3.5" />
      Clear Filters
    </button>
  </div>
</template>
