<!-- AppHeader.vue — page title bar; right side is a named slot so pages like
     Dashboard can drop in the month picker while others stay title-only. -->
<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <header class="flex shrink-0 items-center justify-between border-b border-surface-border bg-white px-8 py-6">
    <h1 class="text-2xl font-bold text-text-heading">{{ title }}</h1>
    <div>
      <slot name="actions" />
    </div>
  </header>
</template>
