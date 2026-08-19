import type { ReservationSource, ReservationStatus } from '../types'

export const SOURCE_LABELS: Record<ReservationSource, string> = {
  FACEBOOK: 'Facebook',
  INSTAGRAM: 'Instagram',
  TIKTOK: 'TikTok',
  TELEGRAM: 'Telegram',
}

export const STATUS_LABELS: Record<ReservationStatus, string> = {
  PENDING: 'Pending',
  CONFIRMED: 'Confirmed',
  CANCELLED: 'Cancelled',
}

// Matches the soft-pill tones already defined on StatusBadge.
export const STATUS_TONES: Record<ReservationStatus, 'success' | 'warning' | 'danger' | 'info'> = {
  PENDING: 'warning',
  CONFIRMED: 'success',
  CANCELLED: 'danger',
}

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' })
const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
})

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso))
}

export function formatTime(iso: string): string {
  return timeFormatter.format(new Date(iso))
}

export function formatDateTime(iso: string): string {
  return dateTimeFormatter.format(new Date(iso))
}

// The backend stores one combined DateTime, but the form (matching the
// design) shows separate date/time inputs — combine them right before
// sending the request.
export function combineDateAndTime(date: string, time: string): string {
  // date: "2026-08-15" (from <input type="date">), time: "19:00" (from <input type="time">)
  return new Date(`${date}T${time}`).toISOString()
}

// Inverse, used to populate the edit form's separate inputs from a
// reservation's single `date` field.
export function splitDateAndTime(iso: string): { date: string; time: string } {
  const d = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, '0')
  return {
    date: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
    time: `${pad(d.getHours())}:${pad(d.getMinutes())}`,
  }
}
