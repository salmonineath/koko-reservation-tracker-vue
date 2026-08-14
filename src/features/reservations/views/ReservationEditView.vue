<!-- ReservationEditView.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppButton from '@/components/common/AppButton.vue'
import ReservationForm from '../components/ReservationForm.vue'
import { getReservation, updateReservation } from '../services/reservationService'
import type { Reservation, ReservationInput } from '../types'
import { ApiError } from '@/services/api'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const reservation = ref<Reservation | null>(null)
const loadError = ref('')
const isLoading = ref(true)
const isSubmitting = ref(false)
const serverError = ref('')

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

async function handleSubmit(payload: ReservationInput) {
  isSubmitting.value = true
  serverError.value = ''
  try {
    const updated = await updateReservation(id, payload)
    router.push(`/reservations/${updated.id}`)
  } catch (err) {
    serverError.value = err instanceof ApiError ? err.message : 'Unable to save this reservation. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <header class="flex shrink-0 items-center justify-between border-b border-surface-border bg-white px-8 py-6">
      <p class="text-sm text-text-muted">
        <RouterLink to="/reservations" class="hover:text-text-heading">Reservations</RouterLink>
        <span class="mx-2">›</span>
        <span class="font-semibold text-text-heading">Edit Reservation</span>
      </p>
    </header>

    <main class="min-h-0 flex-1 overflow-y-auto p-8">
      <p v-if="isLoading" class="text-sm text-text-muted">Loading reservation…</p>
      <div v-else-if="loadError" class="rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
        {{ loadError }}
      </div>
      <ReservationForm
        v-else-if="reservation"
        :initial-value="reservation"
        submit-label="Save Changes"
        :is-submitting="isSubmitting"
        :server-error="serverError"
        @submit="handleSubmit"
      >
        <template #actions-before>
          <AppButton variant="secondary" type="button" :disabled="isSubmitting" @click="router.push(`/reservations/${id}`)">
            Cancel
          </AppButton>
        </template>
      </ReservationForm>
    </main>
  </div>
</template>
