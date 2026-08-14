<!-- LoginView.vue — public route. The router guard redirects here whenever
     authStatus !== 'authenticated', and redirects away to /dashboard if
     already signed in (see router/index.ts). No registration, no forgot
     password, no remember-me — accounts are provisioned manually. -->
<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'
import skaiLogo from '@/assets/images/skai_white_text_logo.webp'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-surface-page px-4 py-12">
    <div class="w-full max-w-md rounded-2xl border border-surface-border bg-surface-card p-8 shadow-sm">
      <div class="mb-6 flex justify-center">
        <div class="inline-flex items-center justify-center rounded-xl bg-brand-navy px-5 py-3">
          <img :src="skaiLogo" alt="SKAI" class="h-6 w-auto" />
        </div>
      </div>

      <h1 class="text-center text-2xl font-bold text-text-heading">Welcome back</h1>
      <p class="mb-8 mt-1 text-center text-sm text-text-muted">Sign in to access the reservation tool</p>

      <LoginForm />

      <p class="mt-6 border-t border-surface-border pt-4 text-center text-xs text-text-muted">Internal use only</p>
    </div>
  </div>
</template>
