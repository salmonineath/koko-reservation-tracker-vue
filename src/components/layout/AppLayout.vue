<!-- AppLayout.vue — app shell. The sidebar never scrolls; each routed page owns
     its own header + scrollable body (see the `flex flex-1 min-h-0 flex-col`
     + `flex-1 min-h-0 overflow-y-auto` pattern in DashboardView etc.), so only
     that inner content area scrolls while the sidebar and page header stay put. -->
<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-surface-page">
    <AppSidebar />
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <RouterView />
    </div>
  </div>
</template>
