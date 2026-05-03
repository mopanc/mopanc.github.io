<template>
  <div id="app" :class="{ 'app--dark-page': isDarkPage }">
    <MagneticCursor />
    <PageHeader />
    <router-view></router-view>
    <FooterPage />

    <!-- Cookie Banner -->
    <CookieBanner />
  </div>
</template>

<script>
import '../firebase.js';
import PageHeader from './components/PageHeader';
import FooterPage from './components/FooterPage.vue';
// MiniTerminal removed — kept for future use
// import MiniTerminal from './components/MiniTerminal.vue';
import CookieBanner from './components/CookieBanner.vue';
import MagneticCursor from './components/MagneticCursor.vue';
import { useCookieConsent } from './composables/useCookieConsent';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    PageHeader,
    FooterPage,
    CookieBanner,
    MagneticCursor,
  },
  setup() {
    const { initializeConsent } = useCookieConsent()
    initializeConsent()

    const route = useRoute()
    const isDarkPage = computed(() => {
      const p = route.path
      return p === '/'
        || p.startsWith('/projects')
        || p === '/about'
        || p === '/certificates'
        || p === '/blog'
        || p === '/contact'
        || route.name === 'NotFound'
        || !route.matched.length
    })

    return { isDarkPage }
  }
}

</script>


<style>
#app {
  font-family: var(--ff-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #1A1A1A;
}

/* ═══ Dark page — homepage only ═══ */
.app--dark-page {
  background: #0a0d14;
}
</style>
