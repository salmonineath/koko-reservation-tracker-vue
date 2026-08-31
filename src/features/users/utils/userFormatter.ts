import type { TeamMember } from '../types'

// Same initials fallback shape used for the logged-in user elsewhere
// (AppSidebar.vue, SettingsView.vue's own profile card) — first letter of
// first + second word, falling back to the email when there's no name.
// Those two call sites are left untouched (each scoped to `auth.user`
// specifically); this is the shared version for rendering *any* team
// member (used by UserTable.vue, the Team table on System Settings).
export function getInitials(member: Pick<TeamMember, 'fullName' | 'email'>): string {
  const name = member.fullName?.trim()
  if (!name) return (member.email ?? '?').slice(0, 2).toUpperCase()
  const parts = name.split(/\s+/)
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? parts[0]?.[1] ?? '')).toUpperCase()
}

export function displayName(member: TeamMember): string {
  return member.fullName || member.email
}
