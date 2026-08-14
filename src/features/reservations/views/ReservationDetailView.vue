<!-- ReservationDetailView.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { faArrowLeft, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import AppButton from '@/components/common/AppButton.vue'
import AppModal from '@/components/common/AppModal.vue'
import ReservationStatusBadge from '../components/ReservationStatusBadge.vue'
import { deleteReservation, getReservation } from '../services/reservationService'
import type { Reservation } from '../types'
import { SOURCE_LABELS, formatDate, formatDateTime, formatTime } from '../utils/reservationFormatter'
import { ApiError } from '@/services/api'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const reservation = ref<Reservation | null>(null)
const loadError = ref('')
const isLoading = ref(true)

const isDeleteOpen = ref(false)
const isDeleting = ref(false)
const deleteError = ref('')

async function load() {
  isLoading.value = true
  loadError.value = ''
  try {
    reservation.value = await getReservation(id)
  } catch (err) {
    loadError.value = err instanceof ApiError ? err.message : 'Unable to load this reservation. Please try again.'
  } finally {
    isLoading.value = false
  }
}
load()

async function confirmDelete() {
  isDeleting.value = true
  deleteError.value = ''
  try {
    await deleteReservation(id)
    router.push('/reservations')
  } catch (err) {
    deleteError.value = err instanceof ApiError ? err.message : 'Unable to delete this reservation. Please try again.'
    isDeleting.value = false
  }
}
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <header class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-surface-border bg-white px-8 py-6">
      <p class="text-sm text-text-muted">
        <RouterLink to="/reservations" class="hover:text-text-heading">Reservations</RouterLink>
        <span class="mx-2">›</span>
        <span class="font-semibold text-text-heading">Reservation Detail</span>
      </p>
      <div class="flex gap-3">
        <AppButton variant="secondary" @click="router.push('/reservations')">
          <FontAwesomeIcon :icon="faArrowLeft" class="h-3.5 w-3.5" />
          Back
        </AppButton>
        <AppButton variant="secondary" :disabled="!reservation" @click="router.push(`/reservations/${id}/edit`)">
          <FontAwesomeIcon :icon="faPenToSquare" class="h-3.5 w-3.5" />
          Edit
        </AppButton>
        <AppButton variant="danger" :disabled="!reservation" @click="isDeleteOpen = true">
          <FontAwesomeIcon :icon="faTrash" class="h-3.5 w-3.5" />
          Delete
        </AppButton>
      </div>
    </header>

    <main class="min-h-0 flex-1 overflow-y-auto p-8">
      <p v-if="isLoading" class="text-sm text-text-muted">Loading reservation…</p>
      <div v-else-if="loadError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
        {{ loadError }}
      </div>

      <div v-else-if="reservation" class="max-w-3xl rounded-xl border border-surface-border bg-surface-card p-6">
        <div class="mb-6 flex items-center gap-3 border-b border-surface-border pb-5">
          <h1 class="text-lg font-bold text-text-heading">Booking #{{ reservation.id }}</h1>
          <ReservationStatusBadge :status="reservation.status" />
        </div>

        <dl class="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div>
            <dt class="text-xs text-text-muted">Customer Name</dt>
            <dd class="mt-1 font-semibold text-text-heading">{{ reservation.customerName }}</dd>
          </div>
          <div>
            <dt class="text-xs text-text-muted">Phone</dt>
            <dd class="mt-1 font-semibold text-text-heading">{{ reservation.phone }}</dd>
          </div>
          <div>
            <dt class="text-xs text-text-muted">Date</dt>
            <dd class="mt-1 font-semibold text-text-heading">{{ formatDate(reservation.date) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-text-muted">Time</dt>
            <dd class="mt-1 font-semibold text-text-heading">{{ formatTime(reservation.date) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-text-muted">Guests</dt>
            <dd class="mt-1 font-semibold text-text-heading">{{ reservation.guests }}</dd>
          </div>
          <div>
            <dt class="text-xs text-text-muted">Source</dt>
            <dd class="mt-1 font-semibold text-text-heading">{{ SOURCE_LABELS[reservation.source] }}</dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-xs text-text-muted">Notes</dt>
            <dd class="mt-1 whitespace-pre-wrap text-text-heading">{{ reservation.notes || '—' }}</dd>
          </div>
        </dl>

        <div class="mt-6 flex flex-wrap gap-x-8 gap-y-1 border-t border-surface-border pt-4 text-xs text-text-muted">
          <span>Created {{ formatDateTime(reservation.createdAt) }}</span>
          <span>Last updated {{ formatDateTime(reservation.updatedAt) }}</span>
        </div>
      </div>
    </main>

    <AppModal v-model="isDeleteOpen" title="Delete reservation?">
      <p class="text-sm text-text-body">
        This will permanently delete the reservation for
        <span class="font-semibold text-text-heading">{{ reservation?.customerName }}</span>. This cannot be undone.
      </p>
      <p v-if="deleteError" class="mt-3 text-sm text-brand-red">{{ deleteError }}</p>
      <div class="mt-5 flex justify-end gap-3">
        <AppButton variant="secondary" :disabled="isDeleting" @click="isDeleteOpen = false">Cancel</AppButton>
        <AppButton variant="danger" :loading="isDeleting" :disabled="isDeleting" @click="confirmDelete">
          {{ isDeleting ? 'Deleting…' : 'Delete' }}
        </AppButton>
      </div>
    </AppModal>
  </div>
</template>
