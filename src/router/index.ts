import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import { useAuthStore } from '@/stores/authStore'

// Every route is protected by default; only routes explicitly marked
// `meta: { public: true }` are reachable while unauthenticated.
declare module 'vue-router' {
  interface RouteMeta {
    public?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { public: true },
      component: () => import('@/features/auth/views/LoginView.vue'),
    },
    {
      path: '/',
      component: AppLayout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/features/dashboard/views/DashboardView.vue'),
        },
        {
          path: 'reservations',
          name: 'reservations',
          component: () => import('@/features/reservations/views/ReservationListView.vue'),
        },
        {
          // Must precede 'reservations/:id' — vue-router ranks static
          // segments above dynamic ones regardless of array order, but
          // keeping literal routes first here too for readability.
          path: 'reservations/new',
          name: 'reservations-new',
          component: () => import('@/features/reservations/views/ReservationCreateView.vue'),
        },
        {
          path: 'reservations/:id',
          name: 'reservations-detail',
          component: () => import('@/features/reservations/views/ReservationDetailView.vue'),
        },
        {
          path: 'reservations/:id/edit',
          name: 'reservations-edit',
          component: () => import('@/features/reservations/views/ReservationEditView.vue'),
        },
        {
          // Team management (invite/edit/remove) lives inline at the bottom
          // of this page — see features/users's service/components, reused
          // here rather than on a separate route.
          path: 'settings',
          name: 'settings',
          component: () => import('@/features/settings/views/SettingsView.vue'),
        },
      ],
    },
  ],
})

// Single centralized auth gate — no per-page checks needed.
router.beforeEach(async (to) => {
  const auth = useAuthStore()
  await auth.ensureInitialized() // resolves instantly after the first call

  if (auth.authStatus !== 'authenticated' && !to.meta.public) {
    return { path: '/login', replace: true }
  }
  if (auth.authStatus === 'authenticated' && to.meta.public) {
    return { path: '/dashboard', replace: true }
  }
})

export default router
