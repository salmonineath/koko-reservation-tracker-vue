<!-- AppToastContainer.vue — fixed top-right toast stack, mounted once in
     App.vue (so it works pre-login too, e.g. LoginForm's toasts). Reads
     useToastStore directly, no props - drop it once, every push() shows up. -->
<script setup lang="ts">
import { faCircleCheck, faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useToastStore } from '@/stores/toastStore'

const toast = useToastStore()
</script>

<template>
  <Teleport to="body">
    <div class="fixed right-4 top-4 z-[100] flex w-full max-w-sm flex-col gap-2">
      <TransitionGroup name="toast">
        <div
          v-for="t in toast.toasts"
          :key="t.id"
          class="flex items-start gap-3 rounded-lg border bg-surface-card p-4 text-sm shadow-lg"
          :class="t.type === 'success' ? 'border-trend-up/30' : 'border-brand-red/30'"
        >
          <FontAwesomeIcon
            :icon="t.type === 'success' ? faCircleCheck : faCircleExclamation"
            class="mt-0.5 h-4 w-4 shrink-0"
            :class="t.type === 'success' ? 'text-trend-up' : 'text-brand-red'"
          />
          <p class="flex-1 text-text-heading">{{ t.message }}</p>
          <button
            type="button"
            aria-label="Dismiss"
            class="shrink-0 text-text-muted hover:text-text-heading"
            @click="toast.dismiss(t.id)"
          >
            <FontAwesomeIcon :icon="faXmark" class="h-3.5 w-3.5" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
