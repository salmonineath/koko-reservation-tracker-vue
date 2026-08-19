<!-- AppDatePicker.vue — a native <input type="date">'s calendar popup can't be
     restyled at all (browser shadow DOM), so this is a hand-built popover
     calendar in the app's own look instead. Emits the same "YYYY-MM-DD"
     string a native date input would, so it's a drop-in v-model replacement
     anywhere one was used. -->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { faCalendarDays, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { onClickOutside } from '@/utils/onClickOutside'

const props = defineProps<{ placeholder?: string }>()
const model = defineModel<string>({ default: '' })

const root = ref<HTMLElement | null>(null)
const isOpen = ref(false)
onClickOutside(root, () => (isOpen.value = false))

function pad(n: number): string {
  return String(n).padStart(2, '0')
}
// "YYYY-MM-DD" -> local Date at midnight - NOT `new Date(str)`, which parses
// as UTC and can roll back a day depending on the browser's timezone.
function parseValue(value: string): Date | null {
  if (!value) return null
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d)
}
function toValue(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}
function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

const today = new Date()
// The month currently shown in the grid - starts on the selected date's
// month (or this month, if nothing's selected yet) and only moves via the
// ‹ › buttons, so re-opening the popover doesn't lose your place.
const viewDate = ref(parseValue(model.value) ?? new Date(today.getFullYear(), today.getMonth(), 1))
watch(model, (value) => {
  const parsed = parseValue(value)
  if (parsed) viewDate.value = new Date(parsed.getFullYear(), parsed.getMonth(), 1)
})

const monthLabel = computed(() =>
  new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(viewDate.value),
)
const displayValue = computed(() => {
  const d = parseValue(model.value)
  return d ? new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(d) : ''
})

function shiftMonth(delta: number) {
  viewDate.value = new Date(viewDate.value.getFullYear(), viewDate.value.getMonth() + delta, 1)
}

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

// A fixed 6x7 grid (42 cells), including grayed-out leading/trailing days
// from the adjacent months - keeps the popover's height constant whether
// the month needs 4 or 6 rows, instead of jumping around as you page through.
const days = computed(() => {
  const first = new Date(viewDate.value.getFullYear(), viewDate.value.getMonth(), 1)
  const gridStart = new Date(first)
  gridStart.setDate(gridStart.getDate() - first.getDay())

  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(gridStart)
    date.setDate(gridStart.getDate() + i)
    return {
      value: toValue(date),
      label: date.getDate(),
      inMonth: date.getMonth() === viewDate.value.getMonth(),
      isToday: isSameDay(date, today),
    }
  })
})

function select(value: string) {
  model.value = value
  isOpen.value = false
}
function clear() {
  model.value = ''
}
function goToday() {
  const value = toValue(today)
  viewDate.value = new Date(today.getFullYear(), today.getMonth(), 1)
  model.value = value
  isOpen.value = false
}
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="flex w-full items-center gap-2 rounded-lg border border-surface-border bg-surface-card px-3 py-2.5 text-left text-sm focus:outline-none"
      :class="isOpen ? 'border-brand-navy' : 'hover:border-brand-navy'"
      @click="isOpen = !isOpen"
    >
      <FontAwesomeIcon :icon="faCalendarDays" class="h-3.5 w-3.5 shrink-0 text-text-muted" />
      <span class="truncate" :class="displayValue ? 'text-text-heading' : 'text-text-muted'">
        {{ displayValue || placeholder || 'Select date' }}
      </span>
    </button>

    <div
      v-if="isOpen"
      class="absolute left-0 z-20 mt-2 w-64 rounded-xl border border-surface-border bg-surface-card p-3 shadow-lg"
    >
      <div class="mb-2 flex items-center justify-between">
        <span class="text-sm font-semibold text-text-heading">{{ monthLabel }}</span>
        <div class="flex items-center gap-1">
          <button
            type="button"
            aria-label="Previous month"
            class="rounded p-1 text-text-muted hover:bg-surface-page hover:text-text-heading"
            @click="shiftMonth(-1)"
          >
            <FontAwesomeIcon :icon="faChevronLeft" class="h-3 w-3" />
          </button>
          <button
            type="button"
            aria-label="Next month"
            class="rounded p-1 text-text-muted hover:bg-surface-page hover:text-text-heading"
            @click="shiftMonth(1)"
          >
            <FontAwesomeIcon :icon="faChevronRight" class="h-3 w-3" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-7 gap-y-1">
        <span v-for="(w, i) in WEEKDAYS" :key="i" class="text-center text-[11px] font-medium text-text-muted">
          {{ w }}
        </span>

        <button
          v-for="day in days"
          :key="day.value"
          type="button"
          class="mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors hover:bg-surface-page"
          :class="[
            day.inMonth ? 'text-text-body' : 'text-text-muted/40',
            day.value === model && 'bg-brand-red font-semibold text-white hover:bg-brand-red',
            day.isToday && day.value !== model && 'font-semibold text-brand-navy ring-1 ring-inset ring-brand-navy',
          ]"
          @click="select(day.value)"
        >
          {{ day.label }}
        </button>
      </div>

      <div class="mt-3 flex items-center justify-between border-t border-surface-border pt-2 text-xs font-semibold">
        <button type="button" class="text-text-muted hover:text-text-heading" @click="clear">Clear</button>
        <button type="button" class="text-brand-navy hover:text-brand-red" @click="goToday">Today</button>
      </div>
    </div>
  </div>
</template>
