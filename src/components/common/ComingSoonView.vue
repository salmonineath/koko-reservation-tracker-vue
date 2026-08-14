<!-- ComingSoonView.vue — placeholder page for sidebar routes not yet built -->
<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'

defineProps<{ title: string }>()
</script>

<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <AppHeader :title="title" />
    <main class="flex min-h-0 flex-1 items-center justify-center overflow-y-auto p-8">
      <p class="text-text-muted">{{ title }} is coming soon.</p>
    </main>
  </div>
</template>
