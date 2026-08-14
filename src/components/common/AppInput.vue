<!-- AppInput.vue — labeled text input with optional icon + inline error, used
     throughout the reservation form and list search box. -->
<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  label?: string
  type?: string
  placeholder?: string
  error?: string
  disabled?: boolean
  required?: boolean
  icon?: IconDefinition
}>()

// Vue's runtime v-model helper auto-casts to Number for a *dynamically*
// bound type="number"/"range" (the cast doesn't happen for a static
// type="number" literal) — accept both so that's not a prop-type warning.
const model = defineModel<string | number>({ default: '' })
const id = `input-${Math.random().toString(36).slice(2, 9)}`
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="mb-2 block text-sm font-semibold text-text-heading">
      {{ label }}
      <span v-if="required" class="text-brand-red">*</span>
    </label>
    <div
      class="flex items-center gap-3 rounded-lg border bg-surface-card px-4 py-2.5 focus-within:border-brand-navy"
      :class="error ? 'border-brand-red' : 'border-surface-border'"
    >
      <FontAwesomeIcon v-if="icon" :icon="icon" class="h-4 w-4 shrink-0 text-text-muted" />
      <input
        :id="id"
        v-model="model"
        :type="type ?? 'text'"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-full min-w-0 text-sm text-text-heading placeholder:text-text-muted focus:outline-none disabled:cursor-not-allowed"
      />
    </div>
    <p v-if="error" class="mt-1.5 text-xs text-brand-red">{{ error }}</p>
  </div>
</template>
