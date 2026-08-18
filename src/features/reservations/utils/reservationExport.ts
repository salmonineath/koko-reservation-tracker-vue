// Client-side CSV export for the "Export" button on ReservationListView —
// no backend export endpoint exists, so this just formats whatever rows the
// caller already fetched (matching the current filters) and triggers a
// browser download. Nothing is sent anywhere.
import type { Reservation } from '../types'
import { SOURCE_LABELS, STATUS_LABELS, formatDate, formatDateTime, formatTime } from './reservationFormatter'

const COLUMNS: { header: string; get: (r: Reservation) => string }[] = [
  { header: 'Customer Name', get: (r) => r.customerName },
  { header: 'Phone', get: (r) => r.phone },
  { header: 'Date', get: (r) => formatDate(r.date) },
  { header: 'Time', get: (r) => formatTime(r.date) },
  { header: 'Guests', get: (r) => String(r.guests) },
  { header: 'Source', get: (r) => SOURCE_LABELS[r.source] },
  { header: 'Status', get: (r) => STATUS_LABELS[r.status] },
  { header: 'Notes', get: (r) => r.notes ?? '' },
  { header: 'Created At', get: (r) => formatDateTime(r.createdAt) },
]

// Quote every field and double up embedded quotes — the simplest CSV
// encoding that's still correct for free-text fields like notes, without
// pulling in a dependency for 9 columns.
function escapeCsvField(value: string): string {
  return `"${value.replace(/"/g, '""')}"`
}

export function reservationsToCsv(reservations: Reservation[]): string {
  const header = COLUMNS.map((c) => escapeCsvField(c.header)).join(',')
  const rows = reservations.map((r) => COLUMNS.map((c) => escapeCsvField(c.get(r))).join(','))
  return [header, ...rows].join('\r\n')
}

export function downloadReservationsCsv(reservations: Reservation[]): void {
  const filename = `reservations-${new Date().toISOString().slice(0, 10)}.csv`
  const blob = new Blob([reservationsToCsv(reservations)], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  try {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    link.remove()
  } finally {
    URL.revokeObjectURL(url)
  }
}
