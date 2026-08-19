// Single source of truth for the "Period" date-range filter shown on both
// Dashboard and Reservations (see DateRangeFilter.vue) — a Pinia store is a
// singleton per app instance, so both screens reading/writing this one
// store is what makes the filter "shared": apply a range on one screen,
// navigate to the other, and it's still applied there.
import { defineStore } from 'pinia'
import { ref } from 'vue'

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

// `<input type="date">` value format (YYYY-MM-DD), always in the browser's
// local calendar day - not toISOString(), which would report UTC and can
// land on the wrong day depending on timezone.
function toDateInputValue(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

// "YYYY-MM-DD" -> local Date at midnight. Deliberately NOT `new Date(str)` -
// that parses as UTC midnight, which can roll back a calendar day once
// converted to a negative-UTC-offset local time.
function parseDateInput(value: string): Date {
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d)
}

// The default: the 1st of the current month, through today - matches
// shiftPeriodMonths below (stepping to the current month also lands on the
// 1st). dateTo defaults to today (not '') so the "to" picker always opens
// with a real day highlighted instead of looking unset/broken - still not
// some arbitrary far-future bound: reservations created for later today or
// upcoming dates are exactly what widening the range (or clearing "to"
// outright) is for.
function defaultRange(): { dateFrom: string; dateTo: string } {
  const today = new Date()
  const from = new Date(today.getFullYear(), today.getMonth(), 1)
  return { dateFrom: toDateInputValue(from), dateTo: toDateInputValue(today) }
}

export const useDateRangeFilterStore = defineStore('dateRangeFilter', () => {
  const defaults = defaultRange()
  const dateFrom = ref(defaults.dateFrom)
  const dateTo = ref(defaults.dateTo)

  function setRange(from: string, to: string) {
    dateFrom.value = from
    dateTo.value = to
  }

  function resetToDefault() {
    const { dateFrom: from, dateTo: to } = defaultRange()
    dateFrom.value = from
    dateTo.value = to
  }

  // Both blank means "no date filter at all" - reservationService/
  // dashboardService both treat an empty string as "omit this param", so
  // this is what backs the Reservations screen's "All Reservations" button.
  function clearRange() {
    dateFrom.value = ''
    dateTo.value = ''
  }

  function isAtDefault(): boolean {
    const { dateFrom: from, dateTo: to } = defaultRange()
    return dateFrom.value === from && dateTo.value === to
  }

  // "Period: ‹ August 2026 ›" - steps a full calendar month at a time,
  // anchored on the currently-selected range's start month. No longer
  // clamped to "not past today" - upcoming months are exactly what you'd
  // want to page into for a reservations app. Stepping back to the *current*
  // month, though, still caps "to" at today rather than the 31st - the rest
  // of the month hasn't happened yet, same reasoning as defaultRange above.
  function shiftPeriodMonths(delta: number) {
    const anchor = dateFrom.value ? parseDateInput(dateFrom.value) : new Date()
    const start = new Date(anchor.getFullYear(), anchor.getMonth() + delta, 1)
    const monthEnd = new Date(anchor.getFullYear(), anchor.getMonth() + delta + 1, 0)
    const today = new Date()
    const isCurrentMonth = start.getFullYear() === today.getFullYear() && start.getMonth() === today.getMonth()
    dateFrom.value = toDateInputValue(start)
    dateTo.value = toDateInputValue(isCurrentMonth ? today : monthEnd)
  }

  return { dateFrom, dateTo, setRange, resetToDefault, clearRange, isAtDefault, shiftPeriodMonths }
})
