// Central role registry for this feature. The backend treats `role` as a
// free-form string, not an enum (see user.schema.ts) — it doesn't gate
// anything yet — so this allowlist is purely a frontend picker concern.
// Today there's exactly one role; add another entry here and both the
// invite/edit role <select> (see SettingsView.vue's Team section) and every
// label lookup (roleLabel below) pick it up with no other code changes.
export const ROLE_OPTIONS = [{ value: 'ADMIN', label: 'Administrator' }] as const

export const ROLE_LABELS: Record<string, string> = Object.fromEntries(
  ROLE_OPTIONS.map((role) => [role.value, role.label]),
)

// A role not in ROLE_OPTIONS (e.g. added on the backend before the frontend
// catches up) still shows *something* reasonable instead of blank/crashing.
export function roleLabel(role: string | null | undefined): string {
  if (!role) return 'Unknown'
  return ROLE_LABELS[role] ?? role.charAt(0) + role.slice(1).toLowerCase()
}
