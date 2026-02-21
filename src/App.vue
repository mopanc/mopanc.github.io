<template>
  <div id="app">
    <LoadingScreen :visible="isLoading" />
    <PageHeader />
    <router-view></router-view>
    <FooterPage />

    <!-- Terminal de Autenticação -->
    <MiniTerminal />

    <!-- WhatsApp Chat Widget -->
    <WhatsAppChat />

    <!-- Cookie Banner -->
    <CookieBanner />
  </div>
</template>

<script>
import '../firebase.js';
import PageHeader from './components/PageHeader';
import FooterPage from './components/FooterPage.vue';
import MiniTerminal from './components/MiniTerminal.vue';
import WhatsAppChat from './components/WhatsAppChat.vue';
import CookieBanner from './components/CookieBanner.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import { useCookieConsent } from './composables/useCookieConsent';
import { ref, onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    FooterPage,
    MiniTerminal,
    WhatsAppChat,
    CookieBanner,
    LoadingScreen,
  },
  setup() {
    const { initializeConsent } = useCookieConsent()
    const isLoading = ref(true)

    // Initialize cookie consent on app startup
    initializeConsent()

    onMounted(() => {
      const minDelay = 1200
      const startTime = performance.now()

      const finish = () => {
        const elapsed = performance.now() - startTime
        const remaining = Math.max(0, minDelay - elapsed)
        setTimeout(() => {
          isLoading.value = false
        }, remaining)
      }

      if (document.readyState === 'complete') {
        finish()
      } else {
        window.addEventListener('load', finish, { once: true })
        setTimeout(finish, 5000)
      }
    })

    return { isLoading }
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
