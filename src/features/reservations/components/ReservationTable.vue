<!-- ReservationTable.vue — presentational: renders rows + pagination controls,
     emits events for the parent view to act on (navigation is done directly
     via RouterLink; delete/page-change bubble up so the view owns the
     confirm-modal and the actual API calls). -->
<script setup lang="ts">
import { computed } from 'vue'
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import ReservationStatusBadge from './ReservationStatusBadge.vue'
import type { Pagination, Reservation } from '../types'
import { SOURCE_LABELS, formatDate, formatDateTime, formatTime } from '../utils/reservationFormatter'

const props = defineProps<{
  reservations: Reservation[]
  pagination: Pagination
  isLoading: boolean
}>()

const emit = defineEmits<{
  'page-change': [page: number]
  delete: [reservation: Reservation]
}>()

const rangeStart = computed(() =>
  props.pagination.total === 0 ? 0 : (props.pagination.page - 1) * props.pagination.limit + 1,
)
const rangeEnd = computed(() => Math.min(props.pagination.page * props.pagination.limit, props.pagination.total))

// A handful of page numbers around the current one, plus first/last — keeps
// the pager usable even with 100+ pages without a scrolling row of buttons.
const pageNumbers = computed(() => {
  const { page, totalPages } = props.pagination
  const pages = new Set<number>([1, totalPages, page, page - 1, page + 1].filter((p) => p >= 1 && p <= totalPages))
  return Array.from(pages).sort((a, b) => a - b)
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[900px] text-left text-sm">
      <thead>
        <tr class="border-b border-surface-border text-text-muted">
          <th class="px-5 py-3 font-medium">Customer Name</th>
          <th class="px-5 py-3 font-medium">Phone</th>
          <th class="px-5 py-3 font-medium">Date</th>
          <th class="px-5 py-3 font-medium">Time</th>
          <th class="px-5 py-3 font-medium">Guests</th>
          <th class="px-5 py-3 font-medium">Source</th>
          <th class="px-5 py-3 font-medium">Status</th>
          <th class="px-5 py-3 font-medium">Created At</th>
          <th class="px-5 py-3 font-medium">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoading">
          <td colspan="9" class="px-5 py-10 text-center text-text-muted">Loading reservations…</td>
        </tr>
        <tr v-else-if="reservations.length === 0">
          <td colspan="9" class="px-5 py-10 text-center text-text-muted">No reservations match your filters.</td>
        </tr>
        <tr v-for="r in reservations" :key="r.id" class="border-b border-surface-border last:border-0 hover:bg-surface-page/60">
          <td class="px-5 py-3.5 text-text-heading">{{ r.customerName }}</td>
          <td class="px-5 py-3.5 text-text-body">{{ r.phone }}</td>
          <td class="px-5 py-3.5 text-text-body">{{ formatDate(r.date) }}</td>
          <td class="px-5 py-3.5 text-text-body">{{ formatTime(r.date) }}</td>
          <td class="px-5 py-3.5 text-text-body">{{ r.guests }}</td>
          <td class="px-5 py-3.5 text-text-body">{{ SOURCE_LABELS[r.source] }}</td>
          <td class="px-5 py-3.5"><ReservationStatusBadge :status="r.status" /></td>
          <td class="px-5 py-3.5 text-text-body">{{ formatDateTime(r.createdAt) }}</td>
          <td class="px-5 py-3.5">
            <div class="flex items-center gap-3 text-text-muted">
              <RouterLink :to="`/reservations/${r.id}`" aria-label="View" class="hover:text-brand-navy">
                <FontAwesomeIcon :icon="faEye" class="h-4 w-4" />
              </RouterLink>
              <RouterLink :to="`/reservations/${r.id}/edit`" aria-label="Edit" class="hover:text-brand-navy">
                <FontAwesomeIcon :icon="faPenToSquare" class="h-4 w-4" />
              </RouterLink>
              <button type="button" aria-label="Delete" class="hover:text-brand-red" @click="emit('delete', r)">
                <FontAwesomeIcon :icon="faTrash" class="h-4 w-4" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex flex-col gap-3 border-t border-surface-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
    <p class="text-sm text-text-muted">
      Showing {{ rangeStart }} to {{ rangeEnd }} of {{ pagination.total }} reservations
    </p>
    <div class="flex items-center gap-1">
      <button
        type="button"
        class="rounded-lg border border-surface-border px-2.5 py-1.5 text-text-muted hover:bg-surface-page disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="pagination.page <= 1"
        @click="emit('page-change', pagination.page - 1)"
      >
        ‹
      </button>
      <template v-for="(p, i) in pageNumbers" :key="p">
        <span v-if="i > 0 && p - pageNumbers[i - 1] > 1" class="px-1 text-text-muted">…</span>
        <button
          type="button"
          class="h-8 w-8 rounded-lg text-sm font-medium"
          :class="p === pagination.page ? 'bg-brand-red text-white' : 'text-text-body hover:bg-surface-page'"
          @click="emit('page-change', p)"
        >
          {{ p }}
        </button>
      </template>
      <button
        type="button"
        class="rounded-lg border border-surface-border px-2.5 py-1.5 text-text-muted hover:bg-surface-page disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="pagination.page >= pagination.totalPages"
        @click="emit('page-change', pagination.page + 1)"
      >
        ›
      </button>
    </div>
  </div>
</template>
