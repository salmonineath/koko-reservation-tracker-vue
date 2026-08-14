<!-- ReservationListView.vue — search/filter/paginate + delete. Create/View/Edit
     are separate routes (ReservationCreateView/DetailView/EditView). -->
<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppModal from '@/components/common/AppModal.vue'
import ReservationFilters, { type ReservationFiltersValue } from '../components/ReservationFilters.vue'
import ReservationTable from '../components/ReservationTable.vue'
import { deleteReservation, listReservations } from '../services/reservationService'
import type { Pagination, Reservation } from '../types'
import { ApiError } from '@/services/api'

const router = useRouter()

const filters = reactive<ReservationFiltersValue>({ search: '', source: '', status: '', dateFrom: '', dateTo: '' })
const page = ref(1)
const limit = ref(12)

const reservations = ref<Reservation[]>([])
const pagination = ref<Pagination>({ page: 1, limit: 12, total: 0, totalPages: 1 })
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
      dateFrom: filters.dateFrom || undefined,
      dateTo: filters.dateTo || undefined,
      page: page.value,
      limit: limit.value,
    })
    reservations.value = result.data
    pagination.value = result.pagination
  } catch (err) {
    loadError.value = err instanceof ApiError ? err.message : 'Unable to load reservations. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Filter/limit changes reset to page 1; page changes just reload.
watch([() => filters.source, () => filters.status, () => filters.dateFrom, () => filters.dateTo, limit], () => {
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

load()

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
        <AppButton @click="router.push('/reservations/new')">
          <FontAwesomeIcon :icon="faPlus" class="h-3.5 w-3.5" />
          Add Reservation
        </AppButton>
      </template>
    </AppHeader>

    <main class="min-h-0 flex-1 space-y-4 overflow-y-auto p-8">
      <div class="rounded-xl border border-surface-border bg-surface-card p-4">
        <ReservationFilters v-model="filters" />
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
          @limit-change="limit = $event"
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
