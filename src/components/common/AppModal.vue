<!-- AppModal.vue — minimal centered modal, v-model:modelValue controlled -->
<script setup lang="ts">
import { faXmark } from '@fortawesome/free-solid-svg-icons'

defineProps<{ modelValue: boolean; title?: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

function close() {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" @click.self="close">
      <div class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-text-heading">{{ title }}</h2>
          <button
            type="button"
            class="rounded-full p-1 text-text-muted hover:bg-surface-page hover:text-text-heading"
            aria-label="Close"
            @click="close"
          >
            <FontAwesomeIcon :icon="faXmark" class="h-4 w-4" />
          </button>
        </div>
        <slot />
      </div>
    </div>
  </Teleport>
</template>
