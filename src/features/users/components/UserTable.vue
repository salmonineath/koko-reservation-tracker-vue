<!-- UserTable.vue — presentational: renders rows + pagination controls, emits
     events for the parent view to act on (mirrors
     features/reservations/components/ReservationTable.vue's split — the
     view owns the invite/edit modals, confirm-modal, and the actual API
     calls; this just renders and bubbles intent up). -->
<script setup lang="ts">
import { computed } from 'vue'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { roleLabel } from '../constants'
import { getInitials, displayName } from '../utils/userFormatter'
import type { Pagination, TeamMember } from '../types'

const props = defineProps<{
  members: TeamMember[]
  pagination: Pagination
  isLoading: boolean
  currentUserId?: number
}>()

const emit = defineEmits<{
  'page-change': [page: number]
  edit: [member: TeamMember]
  remove: [member: TeamMember]
}>()

const rangeStart = computed(() => (props.pagination.total === 0 ? 0 : (props.pagination.page - 1) * props.pagination.limit + 1))
const rangeEnd = computed(() => Math.min(props.pagination.page * props.pagination.limit, props.pagination.total))

// Same "a handful of pages around the current one, plus first/last" pager
// as ReservationTable.vue.
const pageNumbers = computed(() => {
  const { page, totalPages } = props.pagination
  const pages = new Set<number>([1, totalPages, page, page - 1, page + 1].filter((p) => p >= 1 && p <= totalPages))
  return Array.from(pages).sort((a, b) => a - b)
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[640px] text-left text-sm">
      <thead>
        <tr class="border-b border-surface-border text-text-muted">
          <th class="px-5 py-3 font-medium">Member</th>
          <th class="px-5 py-3 font-medium">Email</th>
          <th class="px-5 py-3 font-medium">Role</th>
          <th class="px-5 py-3 font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoading">
          <td colspan="4" class="px-5 py-10 text-center text-text-muted">Loading team members…</td>
        </tr>
        <tr v-else-if="members.length === 0">
          <td colspan="4" class="px-5 py-10 text-center text-text-muted">No team members match your search.</td>
        </tr>
        <tr v-for="member in members" :key="member.id" class="border-b border-surface-border last:border-0 hover:bg-surface-page/60">
          <td class="px-5 py-3.5">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-semibold text-white">
                {{ getInitials(member) }}
              </span>
              <span class="font-medium text-text-heading">{{ displayName(member) }}</span>
            </div>
          </td>
          <td class="px-5 py-3.5 text-text-body">{{ member.email }}</td>
          <td class="px-5 py-3.5"><StatusBadge :label="roleLabel(member.role)" tone="info" /></td>
          <td class="px-5 py-3.5">
            <div class="flex items-center gap-3 text-text-muted">
              <button type="button" aria-label="Edit" class="hover:text-brand-navy" @click="emit('edit', member)">
                <FontAwesomeIcon :icon="faPenToSquare" class="h-4 w-4" />
              </button>
              <!-- Removing your own account is rejected by the backend (would
                   lock you out of your own session) — hidden here rather
                   than shown disabled with a request that's guaranteed to
                   fail. -->
              <button
                v-if="member.id !== currentUserId"
                type="button"
                aria-label="Remove"
                class="hover:text-brand-red"
                @click="emit('remove', member)"
              >
                <FontAwesomeIcon :icon="faTrash" class="h-4 w-4" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex flex-col gap-3 border-t border-surface-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
    <p class="text-sm text-text-muted">Showing {{ rangeStart }} to {{ rangeEnd }} of {{ pagination.total }} members</p>
    <div class="flex items-center gap-1">
      <button
        type="button"
        class="rounded-lg border border-surface-border px-2.5 py-1.5 text-text-muted hover:bg-surface-page disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="pagination.page <= 1"
        @click="emit('page-change', pagination.page - 1)"
      >
        ‹
      </button>
      <template v-for="(p, i) in pageNumbers" :key="p">
        <span v-if="i > 0 && p - pageNumbers[i - 1] > 1" class="px-1 text-text-muted">…</span>
        <button
          type="button"
          class="h-8 w-8 rounded-lg text-sm font-medium"
          :class="p === pagination.page ? 'bg-brand-red text-white' : 'text-text-body hover:bg-surface-page'"
          @click="emit('page-change', p)"
        >
          {{ p }}
        </button>
      </template>
      <button
        type="button"
        class="rounded-lg border border-surface-border px-2.5 py-1.5 text-text-muted hover:bg-surface-page disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="pagination.page >= pagination.totalPages"
        @click="emit('page-change', pagination.page + 1)"
      >
        ›
      </button>
    </div>
  </div>
</template>
