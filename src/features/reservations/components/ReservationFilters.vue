<!-- ReservationFilters.vue — search + source/status filters, plus the shared
     date-range Period picker (see DateRangeFilter.vue / dateRangeFilterStore)
     that Dashboard also uses — changing it here changes it there too. -->
<script setup lang="ts">
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import AppInput from '@/components/common/AppInput.vue'
import AppSelect from '@/components/common/AppSelect.vue'
import DateRangeFilter from '@/components/common/DateRangeFilter.vue'
import type { ReservationSource, ReservationStatus } from '../types'
import { SOURCE_LABELS, STATUS_LABELS } from '../utils/reservationFormatter'

export interface ReservationFiltersValue {
  search: string
  source: ReservationSource | ''
  status: ReservationStatus | ''
}

const model = defineModel<ReservationFiltersValue>({ required: true })

// "All ..." is a real, selectable option here (not AppSelect's disabled
// placeholder) so users can click back to it once they've picked a filter —
// unlike ReservationForm's source/status selects, '' is a valid, meaningful
// value for a filter (it just means "don't filter on this").
const SOURCE_OPTIONS = [
  { value: '', label: 'All Sources' },
  ...(Object.keys(SOURCE_LABELS) as ReservationSource[]).map((value) => ({
    value,
    label: SOURCE_LABELS[value],
  })),
]
const STATUS_OPTIONS = [
  { value: '', label: 'All Statuses' },
  ...(Object.keys(STATUS_LABELS) as ReservationStatus[]).map((value) => ({
    value,
    label: STATUS_LABELS[value],
  })),
]

</script>

<template>
  <div class="flex flex-wrap items-end gap-3">
    <div class="min-w-[220px] flex-1 basis-64">
      <AppInput v-model="model.search" :icon="faMagnifyingGlass" placeholder="Search by name or phone" />
    </div>

    <DateRangeFilter />

    <AppSelect v-model="model.source" class="w-40" :options="SOURCE_OPTIONS" />
    <AppSelect v-model="model.status" class="w-40" :options="STATUS_OPTIONS" />
  </div>
</template>
