<!-- ReservationStatusBadge.vue — maps a ReservationStatus enum value onto the
     generic StatusBadge's label + tone. -->
<script setup lang="ts">
import StatusBadge from '@/components/common/StatusBadge.vue'
import type { ReservationStatus } from '../types'
import { STATUS_LABELS, STATUS_TONES } from '../utils/reservationFormatter'

defineProps<{ status: ReservationStatus }>()
</script>

<template>
  <StatusBadge :label="STATUS_LABELS[status]" :tone="STATUS_TONES[status]" />
</template>
