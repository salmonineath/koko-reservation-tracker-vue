import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'
import './utils/fontawesome'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/authStore'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)

// Fire the session-restoration check as early as possible. App.vue shows a
// loading screen until this settles; the router guard awaits the same
// memoized promise before resolving the first navigation.
useAuthStore().ensureInitialized()

app.mount('#app')