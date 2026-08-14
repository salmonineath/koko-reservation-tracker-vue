<!-- ReservationCreateView.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppButton from '@/components/common/AppButton.vue'
import ReservationForm from '../components/ReservationForm.vue'
import { createReservation } from '../services/reservationService'
import type { ReservationInput } from '../types'
import { ApiError } from '@/services/api'

const router = useRouter()
const isSubmitting = ref(false)
const serverError = ref('')

async function handleSubmit(payload: ReservationInput) {
  isSubmitting.value = true
  serverError.value = ''
  try {
    const created = await createReservation(payload)
    router.push(`/reservations/${created.id}`)
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
        <span class="font-semibold text-text-heading">Add Reservation</span>
      </p>
    </header>

    <main class="min-h-0 flex-1 overflow-y-auto p-8">
      <ReservationForm submit-label="Save Reservation" :is-submitting="isSubmitting" :server-error="serverError" @submit="handleSubmit">
        <template #actions-before>
          <AppButton variant="secondary" type="button" :disabled="isSubmitting" @click="router.push('/reservations')">
            Cancel
          </AppButton>
        </template>
      </ReservationForm>
    </main>
  </div>
</template>
