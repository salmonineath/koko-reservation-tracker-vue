<!-- ReservationForm.vue — shared by the Create and Edit views. Validation
     mirrors the backend's zod schema exactly (see reservation-schema.ts):
     customerName/phone non-empty, date+time required, guests a positive
     integer, source/status required enum values, notes optional up to 500 chars. -->
<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import AppInput from '@/components/common/AppInput.vue'
import AppSelect from '@/components/common/AppSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
import type { Reservation, ReservationInput, ReservationSource, ReservationStatus } from '../types'
import { SOURCE_LABELS, STATUS_LABELS, combineDateAndTime, splitDateAndTime } from '../utils/reservationFormatter'

const props = defineProps<{
  initialValue?: Reservation
  submitLabel: string
  isSubmitting: boolean
  serverError?: string
}>()

const emit = defineEmits<{ submit: [payload: ReservationInput] }>()

const initialDateTime = props.initialValue ? splitDateAndTime(props.initialValue.date) : { date: '', time: '' }

const form = reactive({
  customerName: props.initialValue?.customerName ?? '',
  phone: props.initialValue?.phone ?? '',
  date: initialDateTime.date,
  time: initialDateTime.time,
  guests: props.initialValue?.guests ? String(props.initialValue.guests) : '',
  source: (props.initialValue?.source ?? '') as ReservationSource | '',
  status: (props.initialValue?.status ?? 'PENDING') as ReservationStatus,
  notes: props.initialValue?.notes ?? '',
})

const errors = ref<Record<string, string>>({})

const SOURCE_OPTIONS = (Object.keys(SOURCE_LABELS) as ReservationSource[]).map((value) => ({
  value,
  label: SOURCE_LABELS[value],
}))
const STATUS_OPTIONS = (Object.keys(STATUS_LABELS) as ReservationStatus[]).map((value) => ({
  value,
  label: STATUS_LABELS[value],
}))

const notesCount = computed(() => form.notes.length)

function validate(): boolean {
  const next: Record<string, string> = {}
  if (!form.customerName.trim()) next.customerName = 'Customer name is required'
  if (!form.phone.trim()) next.phone = 'Phone number is required'
  if (!form.date) next.date = 'Reservation date is required'
  if (!form.time) next.time = 'Reservation time is required'
  const guestsNum = Number(form.guests)
  if (!form.guests || !Number.isInteger(guestsNum) || guestsNum < 1) {
    next.guests = 'Enter a valid number of guests (1 or more)'
  }
  if (!form.source) next.source = 'Reservation source is required'
  if (!form.status) next.status = 'Reservation status is required'
  if (form.notes && form.notes.length > 500) next.notes = 'Notes must be 500 characters or fewer'
  errors.value = next
  return Object.keys(next).length === 0
}

function handleSubmit() {
  if (!validate()) return
  emit('submit', {
    customerName: form.customerName.trim(),
    phone: form.phone.trim(),
    date: combineDateAndTime(form.date, form.time),
    guests: Number(form.guests),
    source: form.source as ReservationSource,
    status: form.status,
    notes: form.notes.trim() || undefined,
  })
}
</script>

<template>
  <form novalidate @submit.prevent="handleSubmit">
    <div v-if="serverError" class="mb-6 rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red">
      {{ serverError }}
    </div>

    <section class="rounded-xl border border-surface-border bg-surface-card p-6">
      <h2 class="mb-5 font-semibold text-text-heading">Customer Information</h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <AppInput v-model="form.customerName" label="Customer Name" required placeholder="Enter customer name" :error="errors.customerName" :disabled="isSubmitting" />
        <AppInput v-model="form.phone" label="Phone Number" required placeholder="Enter phone number" :error="errors.phone" :disabled="isSubmitting" />
      </div>
    </section>

    <section class="mt-5 rounded-xl border border-surface-border bg-surface-card p-6">
      <h2 class="mb-5 font-semibold text-text-heading">Reservation Details</h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <AppInput v-model="form.date" type="date" label="Reservation Date" required :error="errors.date" :disabled="isSubmitting" />
        <AppInput v-model="form.time" type="time" label="Reservation Time" required :error="errors.time" :disabled="isSubmitting" />
        <AppInput v-model="form.guests" type="number" label="Number of Guests" required placeholder="e.g. 4" :error="errors.guests" :disabled="isSubmitting" />
      </div>
      <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <AppSelect v-model="form.source" label="Reservation Source" required placeholder="Select source" :options="SOURCE_OPTIONS" :error="errors.source" :disabled="isSubmitting" />
        <AppSelect v-model="form.status" label="Reservation Status" required placeholder="Select status" :options="STATUS_OPTIONS" :error="errors.status" :disabled="isSubmitting" />
      </div>
    </section>

    <section class="mt-5 rounded-xl border border-surface-border bg-surface-card p-6">
      <h2 class="mb-3 font-semibold text-text-heading">Notes</h2>
      <textarea
        v-model="form.notes"
        rows="4"
        maxlength="500"
        placeholder="Add any notes or special requests (optional)"
        class="w-full resize-y rounded-lg border border-surface-border px-4 py-3 text-sm text-text-heading placeholder:text-text-muted focus:outline-none focus:border-brand-navy"
        :disabled="isSubmitting"
      ></textarea>
      <div class="mt-1.5 flex items-center justify-between">
        <p v-if="errors.notes" class="text-xs text-brand-red">{{ errors.notes }}</p>
        <p class="ml-auto text-xs text-text-muted">{{ notesCount }} / 500</p>
      </div>
    </section>

    <div class="mt-6 flex justify-end gap-3">
      <slot name="actions-before" />
      <AppButton type="submit" :loading="isSubmitting" :disabled="isSubmitting">
        {{ isSubmitting ? 'Saving…' : submitLabel }}
      </AppButton>
    </div>
  </form>
</template>
