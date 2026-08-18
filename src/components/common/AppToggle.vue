<!-- AppToggle.vue — labeled on/off pill switch (Settings > Account Preferences'
     "Email Notifications" today). Plain button + aria-checked rather than a
     hidden checkbox — no native <input type="checkbox"> styling to fight. -->
<script setup lang="ts">
defineProps<{ disabled?: boolean }>()
const model = defineModel<boolean>({ default: false })

function toggle() {
  model.value = !model.value
}
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="model"
    :disabled="disabled"
    class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-60"
    :class="model ? 'bg-brand-red' : 'bg-surface-border'"
    @click="toggle"
  >
    <span
      class="inline-block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow transition-transform"
      :class="model ? 'translate-x-[22px]' : 'translate-x-0.5'"
    />
  </button>
</template>
