<template>
  <div id="app">
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
import { useCookieConsent } from './composables/useCookieConsent';

export default {
  name: 'App',
  components: {
    PageHeader,
    FooterPage,
    MiniTerminal,
    WhatsAppChat,
    CookieBanner,
  },
  setup() {
    const { initializeConsent } = useCookieConsent()

    // Initialize cookie consent on app startup
    initializeConsent()

    return {}
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
