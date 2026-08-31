<!-- AppPageTitle.vue — shared page-content title, sits below AppHeader's
     breadcrumb and above a page's own content (Dashboard's "Dashboard",
     Reservations' "Reservations", …). One place to style so every page's
     title stays visually consistent instead of each view hand-rolling its
     own heading classes. -->
<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h1 class="mb-4 flex items-center gap-2 text-2xl font-bold text-text-heading">
    {{ title }}
    <slot name="trailing" />
  </h1>
</template>
