// Central HTTP client. Every backend call in the app goes through
// `apiRequest` (or `performRefresh` for the one special case) — nothing else
// in the codebase should call `fetch` directly against the API.
//
// Token storage model (see doc/FRONTEND auth notes):
//   - Both the access token and the refresh token are HttpOnly cookies set
//     by the backend (`accessToken` scoped to `/`, `refreshToken` scoped to
//     `/api/auth`). JS never reads or stores either one - not in a module
//     variable, not in Pinia, not in localStorage/sessionStorage. The
//     browser attaches whichever cookie a request needs automatically,
//     because every request below sends `credentials: 'include'`.
//   - This means a full page reload (F5) does NOT need a POST /auth/refresh
//     just to "restore" a session - the accessToken cookie survives the
//     reload on its own. Session restoration is just making a normal
//     protected request (see authStore.checkSession); refresh only fires
//     reactively, from the 401 handling below, when the access token has
//     actually expired.
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
  // Required by requireAuth's CSRF check: since the access token rides in an
  // HttpOnly cookie the browser attaches automatically, mutating requests
  // must prove they're an XHR, not a form/plain-link submission that just
  // happened to carry the cookie along. GETs are unaffected server-side, so
  // no need to special-case them here.
  const method = (options.method ?? 'GET').toUpperCase()
  if (method !== 'GET' && method !== 'HEAD') {
    headers.set('X-Requested-With', 'XMLHttpRequest')
  }

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    credentials: 'include', // let the browser attach the HttpOnly access/refresh cookies
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
        if (!res.ok) return null
        // Backend also rotates the accessToken/refreshToken cookies via
        // Set-Cookie here - nothing for the client to do with them. The
        // body is still returned for callers that want the refreshed user.
        return (await res.json()) as AuthSession
      } catch {
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
