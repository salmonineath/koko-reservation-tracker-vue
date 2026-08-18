<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import AppToastContainer from '@/components/common/AppToastContainer.vue'

const auth = useAuthStore()
const route = useRoute()
const router = useRouter()

// Handles the one case the router guard can't: a session that dies *while
// the user is already sitting on a protected page* (a future API call 401s,
// the transparent refresh fails, services/api.ts flips authStatus via
// clearSession). The guard only runs on navigation, so this reactive watcher
// is what actually sends them to /login when that happens mid-session.
watch(
  () => auth.authStatus,
  (status) => {
    if (status === 'unauthenticated' && !route.meta.public) {
      router.replace('/login')
    }
  },
)
</script>

<template>
  <div v-if="auth.authStatus === 'loading'" class="flex h-screen items-center justify-center bg-surface-page">
    <p class="text-sm text-text-muted">Loading…</p>
  </div>
  <RouterView v-else />
  <AppToastContainer />
</template>
