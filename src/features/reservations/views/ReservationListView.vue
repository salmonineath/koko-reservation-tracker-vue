<!-- ReservationListView.vue — search/filter/paginate + delete. Create/View/Edit
     are separate routes (ReservationCreateView/DetailView/EditView). -->
<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { faPlus, faDownload } from '@fortawesome/free-solid-svg-icons'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppPageTitle from '@/components/common/AppPageTitle.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppModal from '@/components/common/AppModal.vue'
import ReservationFilters, { type ReservationFiltersValue } from '../components/ReservationFilters.vue'
import ReservationTable from '../components/ReservationTable.vue'
import ReservationStatsCards, { type ReservationStats } from '../components/ReservationStatsCards.vue'
import { countReservations, deleteReservation, listReservations } from '../services/reservationService'
import { downloadReservationsCsv } from '../utils/reservationExport'
import { formatDate } from '../utils/reservationFormatter'
import type { Pagination, Reservation } from '../types'
import { ApiError } from '@/services/api'
import { useDateRangeFilterStore } from '@/stores/dateRangeFilterStore'

const router = useRouter()

// The date range itself lives in the shared store (see DateRangeFilter.vue) -
// search/source/status stay local, they're reservations-only concepts.
const dateRange = useDateRangeFilterStore()
const filters = reactive<ReservationFiltersValue>({ search: '', source: '', status: '' })
const page = ref(1)
// Fixed - the per-page picker was removed from the table (ReservationTable.vue).
const PAGE_SIZE = 12

const reservations = ref<Reservation[]>([])
const pagination = ref<Pagination>({ page: 1, limit: PAGE_SIZE, total: 0, totalPages: 1 })
const isLoading = ref(true)
const loadError = ref('')

const deleteTarget = ref<Reservation | null>(null)
const isDeleting = ref(false)
const deleteError = ref('')

async function load() {
  isLoading.value = true
  loadError.value = ''
  try {
    const result = await listReservations({
      search: filters.search || undefined,
      source: filters.source || undefined,
      status: filters.status || undefined,
      dateFrom: dateRange.dateFrom || undefined,
      dateTo: dateRange.dateTo || undefined,
      page: page.value,
      limit: PAGE_SIZE,
    })
    reservations.value = result.data
    pagination.value = result.pagination
  } catch (err) {
    loadError.value = err instanceof ApiError ? err.message : 'Unable to load reservations. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Filter changes reset to page 1; page changes just reload.
watch([() => filters.source, () => filters.status, () => dateRange.dateFrom, () => dateRange.dateTo], () => {
  page.value = 1
  load()
})
watch(page, load)

// Debounce the free-text search separately so we don't fire a request per keystroke.
let searchDebounce: ReturnType<typeof setTimeout> | undefined
watch(
  () => filters.search,
  () => {
    clearTimeout(searchDebounce)
    searchDebounce = setTimeout(() => {
      page.value = 1
      load()
    }, 300)
  },
)

// ---- Stats cards ----
// Scoped to the date-range filter only (not source/status/search) - those
// are exactly what the breakdown cards summarize, so filtering by status
// would defeat the point of a "how many are Confirmed/Pending/Cancelled"
// card. Real numbers throughout: `total`/`confirmed`/`pending`/`cancelled`
// are cheap count-only requests (see countReservations) - no full row fetch
// needed now that Total Guests (the one card that couldn't be a count-only
// request) has been removed.
const stats = ref<ReservationStats | null>(null)
const dateRangeLabel = computed(() => {
  if (dateRange.dateFrom && dateRange.dateTo) {
    return `From ${formatDate(dateRange.dateFrom)} to ${formatDate(dateRange.dateTo)}`
  }
  if (dateRange.dateFrom) return `Since ${formatDate(dateRange.dateFrom)}`
  if (dateRange.dateTo) return `Through ${formatDate(dateRange.dateTo)}`
  return 'All reservations'
})

async function loadStats() {
  const dateRangeQuery = { dateFrom: dateRange.dateFrom || undefined, dateTo: dateRange.dateTo || undefined }
  try {
    const [total, confirmed, pending, cancelled] = await Promise.all([
      countReservations(dateRangeQuery),
      countReservations({ ...dateRangeQuery, status: 'CONFIRMED' }),
      countReservations({ ...dateRangeQuery, status: 'PENDING' }),
      countReservations({ ...dateRangeQuery, status: 'CANCELLED' }),
    ])
    stats.value = { total, confirmed, pending, cancelled }
  } catch {
    // Non-critical decoration above the table - fail quietly and just leave
    // the cards showing "—" rather than piling another error banner on top
    // of the table's own loadError.
    stats.value = null
  }
}
watch([() => dateRange.dateFrom, () => dateRange.dateTo], loadStats)

load()
loadStats()

// ---- Export ----
const isExporting = ref(false)
const exportError = ref('')

async function handleExport() {
  isExporting.value = true
  exportError.value = ''
  try {
    const query = {
      search: filters.search || undefined,
      source: filters.source || undefined,
      status: filters.status || undefined,
      dateFrom: dateRange.dateFrom || undefined,
      dateTo: dateRange.dateTo || undefined,
    }
    const total = await countReservations(query)
    if (total === 0) {
      exportError.value = 'No reservations match the current filters.'
      return
    }
    const { data } = await listReservations({ ...query, page: 1, limit: total })
    downloadReservationsCsv(data)
  } catch (err) {
    exportError.value = err instanceof ApiError ? err.message : 'Unable to export reservations. Please try again.'
  } finally {
    isExporting.value = false
  }
}

function requestDelete(reservation: Reservation) {
  deleteError.value = ''
  deleteTarget.value = reservation
}

async function confirmDelete() {
  if (!deleteTarget.value) return
  isDeleting.value = true
  deleteError.value = ''
  try {
    await deleteReservation(deleteTarget.value.id)
    deleteTarget.value = null
    // If we just deleted the last row on a page beyond page 1, step back.
    if (reservations.value.length === 1 && page.value > 1) {
      page.value -= 1
    } else {
      await load()
    }
    loadStats()
  } catch (err) {
    deleteError.value = err instanceof ApiError ? err.message : 'Unable to delete this reservation. Please try again.'
  } finally {
    isDeleting.value = false
  }
}
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <AppHeader title="Reservations">
      <template #actions>
        <div class="flex items-center gap-3">
          <AppButton variant="secondary" :loading="isExporting" :disabled="isExporting" @click="handleExport">
            <FontAwesomeIcon :icon="faDownload" class="h-3.5 w-3.5" />
            {{ isExporting ? 'Exporting…' : 'Export as CSV' }}
          </AppButton>
          <AppButton @click="router.push('/reservations/new')">
            <FontAwesomeIcon :icon="faPlus" class="h-3.5 w-3.5" />
            Add Reservation
          </AppButton>
        </div>
      </template>
    </AppHeader>

    <main class="min-h-0 flex-1 space-y-4 overflow-y-auto p-8">

      <AppPageTitle title="Reservations" />

      <ReservationStatsCards :stats="stats" :date-range-label="dateRangeLabel" />
      
      <div class="rounded-xl border border-surface-border bg-surface-card p-4">
        <ReservationFilters v-model="filters" />
      </div>

      <div v-if="exportError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
        {{ exportError }}
      </div>

      <div v-if="loadError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
        {{ loadError }}
      </div>

      <div class="rounded-xl border border-surface-border bg-surface-card">
        <ReservationTable
          :reservations="reservations"
          :pagination="pagination"
          :is-loading="isLoading"
          @page-change="page = $event"
          @delete="requestDelete"
        />
      </div>
    </main>

    <AppModal :model-value="!!deleteTarget" title="Delete reservation?" @update:model-value="deleteTarget = null">
      <p class="text-sm text-text-body">
        This will permanently delete the reservation for
        <span class="font-semibold text-text-heading">{{ deleteTarget?.customerName }}</span>. This cannot be undone.
      </p>
      <p v-if="deleteError" class="mt-3 text-sm text-brand-red">{{ deleteError }}</p>
      <div class="mt-5 flex justify-end gap-3">
        <AppButton variant="secondary" :disabled="isDeleting" @click="deleteTarget = null">Cancel</AppButton>
        <AppButton variant="danger" :loading="isDeleting" :disabled="isDeleting" @click="confirmDelete">
          {{ isDeleting ? 'Deleting…' : 'Delete' }}
        </AppButton>
      </div>
    </AppModal>
  </div>
</template>
