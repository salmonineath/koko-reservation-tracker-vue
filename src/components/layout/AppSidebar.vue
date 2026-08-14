<!-- AppSidebar.vue — dark navy primary nav matching the SKAI dashboard mockup -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  faHouse,
  faCalendarDays,
  faShareNodes,
  faPenToSquare,
  faChartColumn,
  faGear,
  faChevronDown,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { onClickOutside } from '@/utils/onClickOutside'
import { useAuthStore } from '@/stores/authStore'
import skaiLogo from '@/assets/images/skai_white_text_logo.webp'

interface NavItem {
  to: string
  label: string
  icon: IconDefinition
}

const NAV_ITEMS: NavItem[] = [
  { to: '/dashboard', label: 'Dashboard', icon: faHouse },
  { to: '/reservations', label: 'Reservations', icon: faCalendarDays },
  { to: '/social-media', label: 'Social Media', icon: faShareNodes },
  { to: '/content', label: 'Content', icon: faPenToSquare },
  { to: '/reports', label: 'Reports', icon: faChartColumn },
  { to: '/settings', label: 'Settings', icon: faGear },
]

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const isProfileMenuOpen = ref(false)
const profileRoot = ref<HTMLElement | null>(null)
onClickOutside(profileRoot, () => (isProfileMenuOpen.value = false))

function isActive(to: string) {
  return route.path === to || route.path.startsWith(`${to}/`)
}

// Backend has no name/role field on User (see prisma schema) — just email.
const initials = computed(() => (auth.user?.email ?? '?').slice(0, 2).toUpperCase())

async function handleLogout() {
  isProfileMenuOpen.value = false
  await auth.logout()
  router.replace('/login')
}
</script>

<template>
  <aside class="flex h-full w-52 shrink-0 flex-col bg-brand-navy">
    <!-- Logo -->
    <div class="px-6 py-7">
      <img :src="skaiLogo" alt="SKAI" class="h-8 w-auto" />
    </div>

    <!-- Nav -->
    <nav class="flex-1 space-y-1 px-3">
      <RouterLink
        v-for="item in NAV_ITEMS"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
        :class="isActive(item.to) ? 'bg-brand-red text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'"
      >
        <FontAwesomeIcon :icon="item.icon" class="h-4 w-4 shrink-0" fixed-width />
        {{ item.label }}
      </RouterLink>
    </nav>

    <!-- Profile -->
    <div ref="profileRoot" class="relative border-t border-white/10 px-4 py-4">
      <div
        v-if="isProfileMenuOpen"
        class="absolute bottom-16 left-4 right-4 overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <button
          type="button"
          class="w-full px-4 py-2.5 text-left text-sm text-text-body hover:bg-surface-page"
          @click="handleLogout"
        >
          Log out
        </button>
      </div>
      <button
        type="button"
        class="flex w-full items-center gap-3 rounded-lg px-1 py-1 text-left hover:bg-white/5"
        @click="isProfileMenuOpen = !isProfileMenuOpen"
      >
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
          {{ initials }}
        </span>
        <span class="min-w-0 flex-1">
          <span class="block truncate text-sm font-semibold text-white">{{ auth.user?.email ?? 'Unknown user' }}</span>
        </span>
        <FontAwesomeIcon :icon="faChevronDown" class="h-3.5 w-3.5 shrink-0 text-white/50" />
      </button>
    </div>
  </aside>
</template>
