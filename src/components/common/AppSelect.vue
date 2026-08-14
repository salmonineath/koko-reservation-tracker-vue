<!-- AppSelect.vue — labeled native <select>. A plain native element is
     intentional here: it's fully accessible/keyboard-operable for free and
     there's no need for custom dropdown styling on an internal MVP. -->
<script setup lang="ts">
export interface SelectOption {
  value: string
  label: string
}

withDefaults(
  defineProps<{
    label?: string
    options: SelectOption[]
    placeholder?: string
    error?: string
    disabled?: boolean
    required?: boolean
  }>(),
  { placeholder: undefined },
)

const model = defineModel<string>({ default: '' })
const id = `select-${Math.random().toString(36).slice(2, 9)}`
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="mb-2 block text-sm font-semibold text-text-heading">
      {{ label }}
      <span v-if="required" class="text-brand-red">*</span>
    </label>
    <select
      :id="id"
      v-model="model"
      :disabled="disabled"
      class="w-full rounded-lg border bg-surface-card px-4 py-2.5 text-sm text-text-heading focus:outline-none focus:border-brand-navy disabled:cursor-not-allowed"
      :class="error ? 'border-brand-red' : 'border-surface-border'"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <p v-if="error" class="mt-1.5 text-xs text-brand-red">{{ error }}</p>
  </div>
</template>
