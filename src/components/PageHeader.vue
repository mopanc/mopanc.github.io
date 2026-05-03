 <!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Announcement Banner -->
  <div class="announce-banner" v-if="showBanner">
    <div class="announce-banner__inner">
      <span class="announce-banner__text">
        {{ translations.nav_announce_text || 'Available for new projects and remote opportunities' }}
      </span>
      <a href="/contact" class="announce-banner__cta">
        {{ translations.nav_announce_cta || 'Get in touch' }}
        <i class="ri-arrow-right-up-line"></i>
      </a>
    </div>
  </div>

  <!-- Navbar -->
  <header id="header" class="lc-header" :class="{ 'lc-header--scrolled': isScrolled }">
    <div class="lc-header__outer">
      <div class="lc-navbar">
        <!-- Logo -->
        <a href="/" class="lc-navbar__logo">
          <LogoVue :isScrolled="isScrolled" />
        </a>

        <!-- Center Navigation -->
        <div class="lc-navbar__nav" :class="{ 'lc-navbar__nav--open': isNavMenuOpen }">
          <ul class="lc-navbar__list">
            <!-- Home — direct link -->
            <li class="lc-navbar__item" @click="closeNavMenu">
              <a href="/" class="lc-navbar__link" :class="{ 'is-active': currentRoute.home }" id="home"></a>
            </li>

            <!-- Projects — direct link -->
            <li class="lc-navbar__item" @click="closeNavMenu">
              <a href="/projects" class="lc-navbar__link" :class="{ 'is-active': currentRoute.projects }">
                <span id="projects"></span>
              </a>
            </li>

            <!-- About — direct link -->
            <li class="lc-navbar__item" @click="closeNavMenu">
              <a href="/about" class="lc-navbar__link" :class="{ 'is-active': currentRoute.certificates }" id="certificates"></a>
            </li>

            <!-- Blog — direct link -->
            <li class="lc-navbar__item" @click="closeNavMenu">
              <a href="/blog" class="lc-navbar__link" :class="{ 'is-active': currentRoute.blog }" id="blog"></a>
            </li>

            <!-- Contact — direct link -->
            <li class="lc-navbar__item" @click="closeNavMenu">
              <a href="/contact" class="lc-navbar__link" :class="{ 'is-active': currentRoute.contact }" id="contact"></a>
            </li>

            <!-- Mobile only -->
            <li class="lc-navbar__item lc-navbar__item--mobile-only">
              <language-selector />
            </li>
            <li class="lc-navbar__item lc-navbar__item--mobile-only">
              <div class="lc-navbar__mobile-actions">
                <a href="/contact" class="lc-btn lc-btn--filled" @click="closeNavMenu">
                  {{ translations.contact || 'Contact' }}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: CTA Buttons -->
        <div class="lc-navbar__actions">
          <language-selector />
          <a
            href="/cv/jorge-morais-cv.pdf"
            download="Jorge-Morais-CV.pdf"
            class="lc-cv-btn"
            :class="{ 'lc-cv-btn--downloading': cvDownloading }"
            aria-label="Download CV"
            @click="onCvDownload"
          >
            <span class="lc-cv-btn__icon" aria-hidden="true">
              <i class="ri-download-line lc-cv-btn__arrow"></i>
              <i class="ri-check-line lc-cv-btn__check"></i>
            </span>
            <span class="lc-cv-btn__label">CV</span>
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button class="lc-navbar__toggle" @click="toggleNavMenu" :aria-label="isNavMenuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="isNavMenuOpen">
          <i :class="navToggleIcon"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- ── Mobile Drawer (Teleport to body to escape header containing block) ─── -->
  <Teleport to="body">
    <transition name="drawer-bd">
      <div v-if="isNavMenuOpen" class="lc-drawer-bd" @click="closeNavMenu" aria-hidden="true"></div>
    </transition>
    <transition name="drawer">
      <aside
        v-if="isNavMenuOpen"
        class="lc-drawer"
        role="dialog"
        aria-modal="true"
        :aria-label="translations.nav_menu_title || 'Navigation menu'"
      >
        <header class="lc-drawer__head">
          <span class="lc-drawer__brand">
            <span>jorge</span>
            <span class="lc-drawer__brand-sep">·</span>
            <span>morais</span>
          </span>
          <button class="lc-drawer__close" @click="closeNavMenu" aria-label="Close">
            <i class="ri-close-line"></i>
          </button>
        </header>

        <nav class="lc-drawer__nav">
          <a href="/" class="lc-drawer__item" @click="closeNavMenu">
            <span class="lc-drawer__num">/01</span>
            <span class="lc-drawer__label">{{ translations.home || 'Home' }}</span>
            <i class="ri-arrow-right-line lc-drawer__arrow"></i>
          </a>

          <a href="/projects" class="lc-drawer__item" @click="closeNavMenu">
            <span class="lc-drawer__num">/02</span>
            <span class="lc-drawer__label">{{ translations.projects || 'Projects' }}</span>
            <i class="ri-arrow-right-line lc-drawer__arrow"></i>
          </a>

          <a href="/about" class="lc-drawer__item" @click="closeNavMenu">
            <span class="lc-drawer__num">/03</span>
            <span class="lc-drawer__label">{{ translations.about || 'About' }}</span>
            <i class="ri-arrow-right-line lc-drawer__arrow"></i>
          </a>

          <a href="/blog" class="lc-drawer__item" @click="closeNavMenu">
            <span class="lc-drawer__num">/04</span>
            <span class="lc-drawer__label">{{ translations.blog || 'Blog' }}</span>
            <i class="ri-arrow-right-line lc-drawer__arrow"></i>
          </a>

          <a href="/contact" class="lc-drawer__item" @click="closeNavMenu">
            <span class="lc-drawer__num">/05</span>
            <span class="lc-drawer__label">{{ translations.contact || 'Contact' }}</span>
            <i class="ri-arrow-right-line lc-drawer__arrow"></i>
          </a>
        </nav>

        <footer class="lc-drawer__foot">
          <language-selector />
          <a
            href="/cv/jorge-morais-cv.pdf"
            download="Jorge-Morais-CV.pdf"
            class="lc-drawer__cv"
            @click="closeNavMenu"
          >
            <i class="ri-download-line"></i>
            <span>CV</span>
          </a>
        </footer>
      </aside>
    </transition>
  </Teleport>

  <!-- Terminal Modal (hidden, kept for future) -->
  <Teleport to="body">
    <TerminalModal
      :isOpen="showTerminalModal"
      @close="closeTerminalModal"
      @downloadPDF="handleDownload"
    />
  </Teleport>
</template>

<script setup>
import LogoVue from "./LogoVue-v2-minimalist.vue"
import LanguageSelector from "./LanguageSelector.vue"
import TerminalModal from "./TerminalModal.vue"
import { ref, onMounted, reactive, computed, onUnmounted, watch } from "vue"
import { useRoute } from "vue-router"
import { useLanguage } from '../composables/useLanguage.js'

const route = useRoute()
const { translations, initialize, loadTranslations } = useLanguage()
const isNavMenuOpen = ref(false)
const showTerminalModal = ref(false)
const isScrolled = ref(false)
const showBanner = ref(false)
const cvDownloading = ref(false)
let cvDownloadTimeout = null

const onCvDownload = () => {
  cvDownloading.value = true
  clearTimeout(cvDownloadTimeout)
  cvDownloadTimeout = setTimeout(() => { cvDownloading.value = false }, 1800)
}

const currentRoute = reactive({
  home: false,
  projects: false,
  certificates: false,
  contact: false,
  blog: false
})

const navToggleIcon = computed(() =>
  isNavMenuOpen.value ? 'ri-close-line' : 'ri-menu-3-line'
)

const toggleNavMenu = () => {
  isNavMenuOpen.value = !isNavMenuOpen.value
}

const closeNavMenu = () => {
  if (isNavMenuOpen.value) isNavMenuOpen.value = false
}

// Body scroll lock
watch(isNavMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

// Esc key closes the drawer
const handleEsc = (e) => {
  if (e.key === 'Escape' && isNavMenuOpen.value) closeNavMenu()
}

// Auto-close on route change
watch(() => route.fullPath, () => closeNavMenu())

const handleScroll = () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
  isScrolled.value = scrollPosition > 40
}

const closeTerminalModal = () => {
  showTerminalModal.value = false
}

const handleDownload = async () => {
  try {
    const link = document.createElement('a')
    link.href = '/cv/jorge-morais-cv.pdf'
    link.download = 'Jorge-Morais-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Download failed:', error)
  }
}

const updateNavText = async (language) => {
  try {
    const expressions = language ? await loadTranslations(language) : await initialize()
    document.querySelector('#home').textContent = expressions.home
    document.querySelector('#projects').textContent = expressions.projects
    document.querySelector('#certificates').textContent = expressions.about
    document.querySelector('#contact').textContent = expressions.contact
    document.querySelector('#blog').textContent = expressions.blog
  } catch (error) {
    console.error('Failed to load navigation translations:', error)
  }
}

let handleLanguageChange

onMounted(async () => {
  await updateNavText()

  const path = window.location.pathname
  if (path === '/') currentRoute.home = true
  else if (path === '/projects' || path.startsWith('/projects/')) currentRoute.projects = true
  else if (path === '/certificates' || path === '/about') currentRoute.certificates = true
  else if (path === '/contact') currentRoute.contact = true
  else if (path.startsWith('/blog')) currentRoute.blog = true
  else currentRoute.home = true

  handleLanguageChange = (e) => updateNavText(e.detail?.language)
  window.addEventListener('languageChanged', handleLanguageChange)
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('languageChanged', handleLanguageChange)
  window.removeEventListener('keydown', handleEsc)
  document.body.style.overflow = ''
})
</script>

<style src="../assets/main.css"></style>

<style scoped>
/* ═══════════════════════════════════════
   LANGCHAIN-STYLE HEADER
   ═══════════════════════════════════════ */

/* === ANNOUNCEMENT BANNER === */
.announce-banner { background: #006DDD; width: 100%; z-index: 1001; }
.announce-banner__inner { display: flex; align-items: center; justify-content: center; gap: 1.2rem; padding: 0.65rem 2rem; max-width: 1400px; margin: 0 auto; }
.announce-banner__text { font-size: 0.85rem; font-weight: 400; color: rgb(204, 233, 255); }
.announce-banner__cta { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.85rem; font-weight: 500; color: rgb(242, 250, 255); text-decoration: none; transition: opacity 0.2s ease; }
.announce-banner__cta:hover { opacity: 0.85; color: rgb(242, 250, 255); }
.announce-banner__cta i { font-size: 0.9em; transition: transform 0.2s ease; }
.announce-banner__cta:hover i { transform: translate(2px, -2px); }

/* === HEADER === */
.lc-header { position: sticky; top: 0; z-index: 999; padding: 8px 24px 0; pointer-events: none; }
.lc-header__outer { max-width: 1360px; margin: 0 auto; pointer-events: auto; }

/* === NAVBAR (glassmorphism pill) === */
.lc-navbar {
  display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 16px;
  background: rgba(3, 7, 16, 0.45); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 6px;
  padding: 0 10px 0 20px; height: 62px;
  transition: background 0.3s ease, border-color 0.3s ease;
}
.lc-header--scrolled .lc-navbar { background: rgba(3, 7, 16, 0.65); border-color: rgba(255, 255, 255, 0.08); }

/* === LOGO === */
.lc-navbar__logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }

/* === NAV CENTER === */
.lc-navbar__nav { display: flex; justify-content: center; }
.lc-navbar__list { display: flex; align-items: center; gap: 4px; list-style: none; margin: 0; padding: 0; }
.lc-navbar__item { position: relative; }
.lc-navbar__item--mobile-only { display: none; }

/* Nav links */
.lc-navbar__link {
  display: flex; align-items: center; gap: 0.25rem;
  padding: 0.55rem 0.85rem; font-size: 14px; font-weight: 400;
  color: rgb(200, 216, 240); text-decoration: none; border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap; background: none; border: none;
  cursor: pointer; font-family: inherit; line-height: 1;
  min-height: auto; min-width: auto;
}
.lc-navbar__link:hover { color: #ffffff; background: rgba(255, 255, 255, 0.06); }
.lc-navbar__link.is-active { color: #ffffff; }

/* Dropdown trigger chevron */
.lc-navbar__chevron {
  font-size: 0.85em;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  color: rgba(200, 216, 240, 0.5);
}

.lc-navbar__link--dropdown.is-open .lc-navbar__chevron {
  transform: rotate(180deg);
}

/* === DROPDOWN PANEL === */
.lc-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  min-width: 220px;
  background: rgba(3, 7, 16, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 100;
}

.lc-dropdown.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

/* Bridge: invisible area between trigger and dropdown to prevent close on mouse move */
.lc-navbar__item--has-dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 12px;
}

/* Dropdown items */
.lc-dropdown__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  font-size: 14px;
  font-weight: 400;
  color: rgb(180, 200, 225);
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.15s ease, color 0.15s ease;
  white-space: nowrap;
}

.lc-dropdown__item i {
  font-size: 11px;
  color: #ffffff;
  background: rgba(126, 184, 247, 0.8);
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-shrink: 0;
  width: 18px;
  text-align: center;
  flex-shrink: 0;
}

.lc-dropdown__item:hover {
  background: rgba(255, 255, 255, 0.07);
  color: #ffffff;
}

.lc-dropdown__item:hover i {
  background: rgb(126, 184, 247);
  color: #ffffff;
}

/* === CTA BUTTONS === */
.lc-navbar__actions { display: flex; align-items: center; gap: 8px; justify-self: end; }

.lc-btn {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.55rem 1rem; font-size: 0.82rem; font-weight: 400; font-family: inherit;
  border-radius: 6px; cursor: pointer; text-decoration: none; white-space: nowrap;
  transition: all 0.2s ease; line-height: 1; min-height: auto; min-width: auto;
}
.lc-btn i { font-size: 1em; }
.lc-btn--outline {
  background: transparent; color: rgb(200, 216, 240);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.lc-btn--outline:hover { border-color: rgba(255, 255, 255, 0.4); color: #ffffff; }

.lc-btn--filled { background: rgb(229, 244, 255); color: rgb(3, 7, 16); border: none; }
.lc-btn--filled:hover { background: #ffffff; color: rgb(3, 7, 16); }

/* === CV DOWNLOAD BUTTON (animated pill) === */
.lc-cv-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.48rem 0.95rem 0.48rem 0.7rem;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(220, 232, 248, 0.92);
  background: rgba(126, 184, 247, 0.06);
  border: 1px solid rgba(126, 184, 247, 0.2);
  border-radius: 100px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.lc-cv-btn:hover {
  background: rgba(126, 184, 247, 0.14);
  border-color: rgba(126, 184, 247, 0.45);
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px -4px rgba(126, 184, 247, 0.4);
}

.lc-cv-btn__icon {
  position: relative;
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.lc-cv-btn__arrow,
.lc-cv-btn__check {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  transition:
    transform 0.35s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.25s ease;
}

.lc-cv-btn__arrow {
  color: #7eb8f7;
}

.lc-cv-btn:hover .lc-cv-btn__arrow {
  animation: cvArrowBounce 0.7s ease-in-out;
}
@keyframes cvArrowBounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(2px); }
}

.lc-cv-btn__check {
  color: #a8d0ff;
  transform: translateY(-14px);
  opacity: 0;
}

.lc-cv-btn__label {
  font-feature-settings: "ss01";
}

/* Downloading state — arrow drops away, check slides in, progress fills */
.lc-cv-btn--downloading {
  background: rgba(126, 184, 247, 0.18);
  border-color: rgba(126, 184, 247, 0.55);
  color: #ffffff;
  box-shadow: 0 0 18px -4px rgba(126, 184, 247, 0.55);
}
.lc-cv-btn--downloading .lc-cv-btn__arrow {
  transform: translateY(14px);
  opacity: 0;
  animation: none;
}
.lc-cv-btn--downloading .lc-cv-btn__check {
  transform: translateY(0);
  opacity: 1;
}

/* Bottom progress bar */
.lc-cv-btn::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1.5px;
  width: 0;
  background: linear-gradient(90deg, #7eb8f7, #a8d0ff);
  transition: width 1.2s cubic-bezier(0.65, 0, 0.35, 1);
  pointer-events: none;
}
.lc-cv-btn--downloading::after {
  width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .lc-cv-btn:hover .lc-cv-btn__arrow { animation: none; }
  .lc-cv-btn::after { transition: none; }
}

/* === MOBILE TOGGLE === */
.lc-navbar__toggle {
  display: none;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgb(200, 216, 240);
  font-size: 1.5rem;
  cursor: pointer;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  z-index: 1000;
  position: relative;
}
.lc-navbar__toggle:hover,
.lc-navbar__toggle:active {
  color: #ffffff;
  background: rgba(126, 184, 247, 0.15);
  border-color: rgba(126, 184, 247, 0.4);
}

/* === MOBILE === */
@media screen and (max-width: 968px) {
  .lc-header { padding: 6px 12px 0; }
  .lc-navbar { grid-template-columns: auto 1fr auto; height: 56px; padding: 0 8px 0 14px; }
  .lc-navbar__toggle { display: flex; justify-self: end; }
  .lc-navbar__actions { display: none; }

  /* Strip backdrop-filter on mobile navbar — would create a containing block
     that could trap any fixed-positioned descendant. */
  .lc-navbar {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(3, 7, 16, 0.85);
  }

  /* The inline desktop nav is replaced by the side drawer on mobile */
  .lc-navbar__nav { display: none; }
}

@media screen and (max-width: 480px) {
  .announce-banner__inner { flex-direction: column; gap: 0.3rem; text-align: center; padding: 0.5rem 1rem; }
  .announce-banner__text { font-size: 0.75rem; }
}

/* === LOGO OVERRIDES === */
:deep(.logo-container--scrolled) { transform: scale(0.93); }

/* === LANGUAGE SELECTOR OVERRIDES === */
:deep(.language-selector) { display: flex; gap: 2px; }
:deep(.language-option) { background: transparent; border: none; padding: 3px; border-radius: 4px; cursor: pointer; transition: background 0.2s ease; }
:deep(.language-option:hover) { background: rgba(255, 255, 255, 0.08); }
:deep(.language-option img) { width: 20px; height: auto; display: block; }
:deep(.language-option.selected img) { border-bottom: 2px solid #7eb8f7; transform: none; width: 20px; }
</style>

<style>
/* ═══════════════════════════════════════
   MOBILE SIDE DRAWER (Teleported to body)
   Global styles — Teleport target lives outside the scoped tree.
   ═══════════════════════════════════════ */

.lc-drawer-bd {
  position: fixed;
  inset: 0;
  background: rgba(3, 7, 16, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 1000;
}

.lc-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(86vw, 360px);
  background: rgba(8, 12, 22, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-left: 1px solid rgba(126, 184, 247, 0.14);
  box-shadow: -16px 0 60px -20px rgba(0, 0, 0, 0.6);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  color: #c8d8f0;
}

/* Header */
.lc-drawer__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.lc-drawer__brand {
  display: inline-flex;
  align-items: baseline;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #c8d8f0;
  letter-spacing: -0.01em;
}

.lc-drawer__brand-sep {
  color: #7eb8f7;
  margin: 0 0.4em;
  font-weight: 500;
}

.lc-drawer__close {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #c8d8f0;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.lc-drawer__close:hover,
.lc-drawer__close:active {
  background: rgba(126, 184, 247, 0.14);
  border-color: rgba(126, 184, 247, 0.4);
  color: #ffffff;
}

/* Nav */
.lc-drawer__nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
}

.lc-drawer__item {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.6rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  color: #e6efff;
  font-family: inherit;
  font-size: 1.05rem;
  text-decoration: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background 0.2s ease, padding-left 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

.lc-drawer__item:hover,
.lc-drawer__item:active,
.lc-drawer__item:focus-visible {
  background: rgba(126, 184, 247, 0.06);
  padding-left: 2rem;
  outline: none;
}

.lc-drawer__num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  color: #7eb8f7;
  font-weight: 600;
}

.lc-drawer__label {
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #ffffff;
}

.lc-drawer__arrow {
  font-size: 1.1rem;
  color: rgba(200, 216, 240, 0.4);
  transition: transform 0.3s ease, color 0.2s ease;
}

.lc-drawer__item:hover .lc-drawer__arrow {
  color: #7eb8f7;
  transform: translateX(3px);
}

.lc-drawer__chevron {
  font-size: 1.2rem;
  color: rgba(200, 216, 240, 0.4);
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease;
}

.lc-drawer__item--has-sub.is-open .lc-drawer__chevron {
  transform: rotate(180deg);
  color: #7eb8f7;
}

/* Sub-nav (Projects dropdown) */
.lc-drawer__sub {
  max-height: 0;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  transition: max-height 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.lc-drawer__sub.is-open {
  max-height: 320px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.lc-drawer__sub-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.85rem 1.6rem 0.85rem 3rem;
  font-family: inherit;
  font-size: 0.95rem;
  color: #c8d8f0;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.2s ease, color 0.2s ease, padding-left 0.3s ease;
}

.lc-drawer__sub-item:last-child { border-bottom: none; }

.lc-drawer__sub-item:hover,
.lc-drawer__sub-item:active {
  background: rgba(126, 184, 247, 0.06);
  color: #ffffff;
  padding-left: 3.4rem;
}

.lc-drawer__sub-item i {
  font-size: 1rem;
  color: #7eb8f7;
  width: 18px;
  text-align: center;
}

/* Footer */
.lc-drawer__foot {
  padding: 1.4rem 1.6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.2);
}

.lc-drawer__cv {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.65rem 1.1rem;
  background: rgba(126, 184, 247, 0.1);
  border: 1px solid rgba(126, 184, 247, 0.3);
  border-radius: 100px;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #ffffff;
  text-decoration: none;
  transition: background 0.22s ease, border-color 0.22s ease, transform 0.18s ease;
}

.lc-drawer__cv:hover,
.lc-drawer__cv:active {
  background: rgba(126, 184, 247, 0.2);
  border-color: rgba(126, 184, 247, 0.55);
  transform: translateY(-1px);
}

/* Transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.drawer-bd-enter-active,
.drawer-bd-leave-active {
  transition: opacity 0.32s ease;
}
.drawer-bd-enter-from,
.drawer-bd-leave-to {
  opacity: 0;
}

/* Hide drawer on desktop — defensive (only rendered when isNavMenuOpen) */
@media screen and (min-width: 969px) {
  .lc-drawer,
  .lc-drawer-bd { display: none !important; }
}
</style>
