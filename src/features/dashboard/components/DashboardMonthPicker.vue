<!-- DashboardMonthPicker.vue — "May 2025 ▾" control in the header; picking a
     month re-renders the whole dashboard from that month's mock dataset. -->
<script setup lang="ts">
import { ref } from 'vue'
import { faCalendarDays, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { onClickOutside } from '@/utils/onClickOutside'

defineProps<{ modelValue: string; options: { key: string; label: string }[] }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const isOpen = ref(false)
const root = ref<HTMLElement | null>(null)
onClickOutside(root, () => (isOpen.value = false))

function select(key: string) {
  emit('update:modelValue', key)
  isOpen.value = false
}
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="flex items-center gap-2 rounded-lg border border-surface-border bg-white px-4 py-2 text-sm font-medium text-text-body shadow-sm hover:bg-surface-page"
      @click="isOpen = !isOpen"
    >
      <FontAwesomeIcon :icon="faCalendarDays" class="h-3.5 w-3.5 text-text-muted" />
      {{ options.find((o) => o.key === modelValue)?.label }}
      <FontAwesomeIcon :icon="faChevronDown" class="h-3 w-3 text-text-muted" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 w-40 overflow-hidden rounded-lg border border-surface-border bg-white py-1 shadow-lg"
    >
      <button
        v-for="option in options"
        :key="option.key"
        type="button"
        class="block w-full px-4 py-2 text-left text-sm hover:bg-surface-page"
        :class="option.key === modelValue ? 'font-semibold text-brand-red' : 'text-text-body'"
        @click="select(option.key)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>
