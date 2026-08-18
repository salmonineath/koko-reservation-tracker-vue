// Global toast queue — a Pinia store (not a local component) so any part of
// the app (currently just authStore's login/logout) can push a toast without
// needing a shared component instance passed down through props/provide.
import { ref } from 'vue'
import { defineStore } from 'pinia'

export type ToastType = 'success' | 'error'

export interface Toast {
  id: number
  type: ToastType
  message: string
}

const DEFAULT_DURATION_MS = 4000

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([])
  let nextId = 1

  function dismiss(id: number) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  function show(type: ToastType, message: string, durationMs = DEFAULT_DURATION_MS) {
    const id = nextId++
    toasts.value.push({ id, type, message })
    setTimeout(() => dismiss(id), durationMs)
  }

  function success(message: string) {
    show('success', message)
  }

  function error(message: string) {
    show('error', message)
  }

  return { toasts, success, error, dismiss }
})
