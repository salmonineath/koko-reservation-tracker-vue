<!-- AppButton.vue — shared button primitive. Variants cover every button used
     across reservations (primary action, secondary/cancel, destructive, ghost icon). -->
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
    type?: 'button' | 'submit'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
    loading: false,
  },
)

const VARIANT_CLASS: Record<string, string> = {
  primary: 'bg-brand-red text-white hover:bg-brand-red-dark',
  secondary: 'border border-surface-border bg-surface-card text-text-heading hover:bg-surface-page',
  danger: 'border border-brand-red/30 bg-brand-red/5 text-brand-red hover:bg-brand-red/10',
  ghost: 'text-text-muted hover:bg-surface-page hover:text-text-heading',
}

const classes = computed(() => VARIANT_CLASS[props.variant])
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60"
    :class="classes"
  >
    <slot />
  </button>
</template>
