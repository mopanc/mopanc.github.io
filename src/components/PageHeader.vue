 <!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header id="header" class="header">
        <div class="container-wide">
            <nav class="nav">
                <!-- Logo Left -->
                <a href="/" class="nav__brand">
                    <LogoVue :isScrolled="isScrolled" />
                </a>

                <!-- Center Navigation -->
                <div class="nav__menu" :class="{ 'nav__menu--open': isNavMenuOpen }">
                    <ul class="nav__list">
                        <li class="nav__item" @click="closeNavMenu">
                            <a href="/" class="nav__link" :class="{ 'green-text': currentRoute.home }" id="home"></a>
                        </li>
                        <li class="nav__item" @click="closeNavMenu">
                            <a href="/projects" class="nav__link" :class="{ 'green-text': currentRoute.projects }" id="projects"></a>
                        </li>
                        <li class="nav__item" @click="closeNavMenu">
                            <a href="/certificates" class="nav__link" :class="{ 'green-text': currentRoute.certificates }" id="certificates"></a>
                        </li>
                        <li class="nav__item" @click="closeNavMenu">
                            <a href="/blog" class="nav__link" :class="{ 'green-text': currentRoute.blog }" id="blog"></a>
                        </li>
                        <li class="nav__item" @click="closeNavMenu">
                            <a href="/contact" class="nav__link" :class="{ 'green-text': currentRoute.contact }" id="contact"></a>
                        </li>
                        <!-- Mobile only - Language and Terminal -->
                        <li class="nav__item nav__item--mobile">
                            <language-selector />
                        </li>
                        <li class="nav__item nav__item--mobile">
                            <button @click="openTerminalCV" class="terminal-btn-header">
                                <i class="ri-terminal-line"></i>
                            </button>
                        </li>
                    </ul>
                </div>

                <!-- Right Actions -->
                <div class="nav__actions">
                    <language-selector />
                    <ThemeToggle />
                    <button @click="openTerminalCV" class="terminal-btn-header">
                        <i class="ri-terminal-line"></i>
                    </button>
                </div>

                <!-- Mobile Toggle -->
                <div class="nav__toggle" @click="toggleNavMenu">
                    <i :class="navToggleIcon"></i>
                </div>
            </nav>
        </div>
  </header>

  <!-- Terminal Modal - Teleport to body to avoid CSS conflicts -->
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
import ThemeToggle from "./ThemeToggle.vue"
import TerminalModal from "./TerminalModal.vue"
import { ref, onMounted, reactive, computed, onUnmounted } from "vue"
import { useLanguage } from '../composables/useLanguage.js'
const { initialize, loadTranslations } = useLanguage()
const isNavMenuOpen = ref(false)
const showTerminalModal = ref(false)
const isScrolled = ref(false)

const currentRoute = reactive({
  home: false,
  projects: false,
  certificates: false,
  contact: false,
  blog: false
})

// Computed property for navigation toggle icon
const navToggleIcon = computed(() =>
  isNavMenuOpen.value ? 'ri-close-line' : 'ri-menu-3-line'
)

// Navigation methods
const toggleNavMenu = () => {
  isNavMenuOpen.value = !isNavMenuOpen.value
}

const closeNavMenu = () => {
  if (isNavMenuOpen.value) {
    isNavMenuOpen.value = false
  }
}

// Scroll handler
const handleScroll = () => {
  const header = document.querySelector("header")
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

  if (scrollPosition > 40) {
    header?.classList.add("header--scroll")
    isScrolled.value = true
  } else {
    header?.classList.remove("header--scroll")
    isScrolled.value = false
  }
}

// Terminal modal functions
const openTerminalCV = () => {
  showTerminalModal.value = true
  closeNavMenu() // Close mobile menu if open
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
    document.querySelector('#certificates').textContent = expressions.certificates
    document.querySelector('#contact').textContent = expressions.contact
    document.querySelector('#blog').textContent = expressions.blog
  } catch (error) {
    console.error('Failed to load navigation translations:', error)
  }
}

let handleLanguageChange

onMounted(async () => {
  await updateNavText()

  // Update current route highlighting
  const path = window.location.pathname
  if (path === '/') currentRoute.home = true
  else if (path === '/projects') currentRoute.projects = true
  else if (path === '/certificates') currentRoute.certificates = true
  else if (path === '/contact') currentRoute.contact = true
  else if (path.startsWith('/blog')) currentRoute.blog = true
  else currentRoute.home = true

  // React to language changes
  handleLanguageChange = (e) => updateNavText(e.detail?.language)
  window.addEventListener('languageChanged', handleLanguageChange)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('languageChanged', handleLanguageChange)
})
</script>

<style src="../assets/main.css"></style>

<style scoped>
/* Modern Header Layout - Logo Left, Menu Center, Actions Right */
.nav {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
}

.nav__brand {
  justify-self: start;
}


.nav__menu {
  justify-self: center;
}

.nav__actions {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Hide mobile items on desktop */
.nav__item--mobile {
  display: none;
}

/* Terminal Button */
.terminal-btn-header {
  background: none;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
}

.terminal-btn-header:hover {
  background: var(--color-primary);
  color: var(--color-bg-primary);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.terminal-btn-header:active {
  transform: translateY(0);
}

.terminal-btn-header i {
  font-size: 1.2rem;
}


/* Light mode terminal button */
:global(.theme-light) .terminal-btn-header {
  background: rgba(63, 118, 210, 0.06);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

:global(.theme-light) .terminal-btn-header:hover {
  background: var(--color-primary);
  color: #fff;
  box-shadow: 0 4px 12px rgba(63, 118, 210, 0.3);
}

/* Pulse animation for access required */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Mobile responsive */
@media screen and (max-width: 968px) {
  .nav {
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }

  .nav__menu {
    grid-column: 1 / -1;
    justify-self: stretch;
  }

  .nav__actions {
    display: none; /* Hide desktop actions on mobile */
  }

  .nav__item--mobile {
    display: flex; /* Show mobile items in menu */
    justify-content: center;
  }

  .terminal-btn-header {
    width: 32px;
    height: 32px;
    padding: 0.4rem;
  }

  .terminal-btn-header i {
    font-size: 1rem;
  }
}
</style>
