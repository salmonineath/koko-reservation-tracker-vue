<!-- TopContentTable.vue — "Top Performing Content" table. "View" opens a
     detail modal (mock — there's no content-detail endpoint yet). -->
<script setup lang="ts">
import { ref } from 'vue'
import AppModal from '@/components/common/AppModal.vue'
import type { ContentRow } from '../types'

defineProps<{ rows: ContentRow[] }>()

const isModalOpen = ref(false)
const selectedRow = ref<ContentRow | null>(null)

function openRow(row: ContentRow) {
  selectedRow.value = row
  isModalOpen.value = true
}

const PLATFORM_CLASS: Record<ContentRow['platform'], string> = {
  Instagram: 'text-brand-red font-medium',
  Facebook: 'text-text-link font-medium',
  TikTok: 'font-semibold text-text-heading',
}
</script>

<template>
  <div class="rounded-xl border border-surface-border bg-surface-card">
    <h3 class="px-5 pt-5 font-semibold text-text-heading">Top Performing Content</h3>
    <div class="overflow-x-auto">
      <table class="mt-4 w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr class="border-y border-surface-border text-text-muted">
            <th class="px-5 py-3 font-medium">Content</th>
            <th class="px-5 py-3 font-medium">Platform</th>
            <th class="px-5 py-3 font-medium">Type</th>
            <th class="px-5 py-3 font-medium">Reach</th>
            <th class="px-5 py-3 font-medium">Interactions</th>
            <th class="px-5 py-3 font-medium">Views</th>
            <th class="px-5 py-3 font-medium">Date</th>
            <th class="px-5 py-3 font-medium">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id" class="border-b border-surface-border last:border-0 hover:bg-surface-page/60">
            <td class="px-5 py-3.5 text-text-heading">{{ row.title }}</td>
            <td class="px-5 py-3.5" :class="PLATFORM_CLASS[row.platform]">{{ row.platform }}</td>
            <td class="px-5 py-3.5 text-text-body">{{ row.type }}</td>
            <td class="px-5 py-3.5 text-text-body">{{ row.reach }}</td>
            <td class="px-5 py-3.5 text-text-body">{{ row.interactions }}</td>
            <td class="px-5 py-3.5 text-text-body">{{ row.views }}</td>
            <td class="px-5 py-3.5 text-text-body">{{ row.date }}</td>
            <td class="px-5 py-3.5">
              <button type="button" class="font-medium text-text-link hover:underline" @click="openRow(row)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <AppModal v-model="isModalOpen" :title="selectedRow?.title">
      <dl v-if="selectedRow" class="space-y-2 text-sm">
        <div class="flex justify-between"><dt class="text-text-muted">Platform</dt><dd class="font-medium text-text-heading">{{ selectedRow.platform }}</dd></div>
        <div class="flex justify-between"><dt class="text-text-muted">Type</dt><dd class="font-medium text-text-heading">{{ selectedRow.type }}</dd></div>
        <div class="flex justify-between"><dt class="text-text-muted">Reach</dt><dd class="font-medium text-text-heading">{{ selectedRow.reach }}</dd></div>
        <div class="flex justify-between"><dt class="text-text-muted">Interactions</dt><dd class="font-medium text-text-heading">{{ selectedRow.interactions }}</dd></div>
        <div class="flex justify-between"><dt class="text-text-muted">Views</dt><dd class="font-medium text-text-heading">{{ selectedRow.views }}</dd></div>
        <div class="flex justify-between"><dt class="text-text-muted">Published</dt><dd class="font-medium text-text-heading">{{ selectedRow.date }}</dd></div>
      </dl>
    </AppModal>
  </div>
</template>
