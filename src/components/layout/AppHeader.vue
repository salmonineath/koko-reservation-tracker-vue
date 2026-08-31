<!-- AppHeader.vue — breadcrumb-style page header; right side is a named slot so
     pages like Dashboard can drop in the month picker while others stay
     breadcrumb-only. The first crumb is fixed ("KOKO Reservation Tracker" ->
     /dashboard); `title` is the current page's crumb (Dashboard, Reservations,
     System Settings, …) — rendered bold, dark, not clickable. -->
<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <header class="flex h-14 shrink-0 items-center justify-between border-b border-surface-border bg-white px-6">
    <nav class="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      <RouterLink to="/dashboard" class="font-medium text-text-body transition-colors hover:text-text-heading">
        KOKO Reservation Tracker
      </RouterLink>
      <span class="text-text-muted" aria-hidden="true">»</span>
      <span class="font-semibold text-text-heading">{{ title }}</span>
    </nav>
    <div>
      <slot name="actions" />
    </div>
  </header>
</template>
