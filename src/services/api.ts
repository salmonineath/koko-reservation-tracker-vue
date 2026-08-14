// Central HTTP client. Every backend call in the app goes through
// `apiRequest` (or `performRefresh` for the one special case) — nothing else
// in the codebase should call `fetch` directly against the API.
//
// Token storage model (see doc/FRONTEND auth notes):
//   - Refresh token: HttpOnly `refreshToken` cookie, scoped to /api/auth by
//     the backend. JS never reads it — the browser attaches it automatically
//     because every request below sends `credentials: 'include'`.
//   - Access token: kept ONLY in the module-level `accessToken` variable
//     below (i.e. application memory). Never written to localStorage,
//     sessionStorage, or logged to the console. It's gone on every full page
//     reload by design — that's what session restoration (POST /auth/refresh
//     on boot) is for.
import type { AuthSession } from '@/features/auth/types'

const API_URL = import.meta.env.VITE_API_URL

export class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

let accessToken: string | null = null

export function setAccessToken(token: string | null) {
  accessToken = token
}

export function getAccessToken(): string | null {
  return accessToken
}

// The auth store registers this once so this generic client can react to an
// unrecoverable session loss (failed transparent refresh) without importing
// Pinia here — keeps this file framework-state-agnostic.
let onSessionExpired: (() => void) | null = null
export function setOnSessionExpired(handler: () => void) {
  onSessionExpired = handler
}

// Requests that must never trigger the 401 -> refresh -> retry dance
// themselves: refreshing the refresh call would recurse, and retrying a
// failed login/logout makes no sense.
const AUTH_ENDPOINTS = new Set(['/auth/login', '/auth/refresh', '/auth/logout'])

async function rawRequest(path: string, options: RequestInit = {}): Promise<Response> {
  const headers = new Headers(options.headers)
  if (options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }
  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`)
  }

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    credentials: 'include', // let the browser attach the HttpOnly refresh cookie
  })
}

// One shared in-flight refresh call. Concurrent 401s (or a 401 racing the
// initial boot check) await this same promise instead of each firing their
// own POST /auth/refresh.
let refreshPromise: Promise<AuthSession | null> | null = null

export function performRefresh(): Promise<AuthSession | null> {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      try {
        const res = await rawRequest('/auth/refresh', { method: 'POST' })
        if (!res.ok) {
          setAccessToken(null)
          return null
        }
        const session = (await res.json()) as AuthSession
        setAccessToken(session.accessToken)
        return session
      } catch {
        setAccessToken(null)
        return null
      } finally {
        refreshPromise = null
      }
    })()
  }
  return refreshPromise
}

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  let res = await rawRequest(path, options)

  if (res.status === 401 && !AUTH_ENDPOINTS.has(path)) {
    const session = await performRefresh()
    if (session) {
      res = await rawRequest(path, options) // retry exactly once, never recurse
    } else {
      onSessionExpired?.()
      throw new ApiError(401, 'Session expired')
    }
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null)
    throw new ApiError(res.status, body?.error ?? 'Request failed')
  }

  if (res.status === 204) return undefined as T
  return (await res.json()) as T
}
