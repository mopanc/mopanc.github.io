import { ref, watch, onMounted } from 'vue'
import { useCookieConsent } from './useCookieConsent'

// Global theme state
const { safeLocalStorage, COOKIE_CATEGORIES } = useCookieConsent()
const isDarkMode = ref(true) // Default to dark mode (current theme)
const systemPreference = ref('dark')

export function useTheme() {
  // Theme colors definition
  const themes = {
    dark: {
      '--color-primary': '#c3b091',
      '--color-primary-dark': '#8b7a5e',
      '--color-bg-primary': '#121212',
      '--color-bg-primary-bk': '#0a0a0a',
      '--color-bg-secondary': '#2d2d2d',
      '--color-bg-footer': '#1f1f1f',
      '--color-white': '#fdfbee',
      '--color-text': '#d2b48c',
      '--color-border': '#8b7a5e'
    },
    light: {
      '--color-primary': '#8b7a5e',
      '--color-primary-dark': '#6d5d47',
      '--color-bg-primary': '#fdfbee',
      '--color-bg-primary-bk': '#f8f6e9',
      '--color-bg-secondary': '#f0ede0',
      '--color-bg-footer': '#e8e4d5',
      '--color-white': '#2d2d2d',
      '--color-text': '#2d2d2d',
      '--color-border': '#8b7a5e'
    }
  }

  // Detect system preference
  const detectSystemPreference = () => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      systemPreference.value = mediaQuery.matches ? 'dark' : 'light'

      // Listen for system preference changes
      mediaQuery.addEventListener('change', (e) => {
        systemPreference.value = e.matches ? 'dark' : 'light'
        if (!hasUserPreference()) {
          setTheme(systemPreference.value)
        }
      })
    }
  }

  // Check if user has saved preference
  const hasUserPreference = () => {
    return safeLocalStorage.getItem('theme-preference', COOKIE_CATEGORIES.FUNCTIONAL) !== null
  }

  // Apply theme to CSS variables
  const applyTheme = (theme) => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      const colors = themes[theme]

      Object.entries(colors).forEach(([property, value]) => {
        root.style.setProperty(property, value)
      })

      // Update body class for additional styling
      document.body.className = document.body.className.replace(/theme-\w+/g, '')
      document.body.classList.add(`theme-${theme}`)

      // Update meta theme-color for mobile browsers
      let metaThemeColor = document.querySelector('meta[name="theme-color"]')
      if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta')
        metaThemeColor.name = 'theme-color'
        document.head.appendChild(metaThemeColor)
      }
      metaThemeColor.content = colors['--color-bg-primary']
    }
  }

  // Set theme and save preference
  const setTheme = (theme) => {
    isDarkMode.value = theme === 'dark'

    safeLocalStorage.setItem('theme-preference', theme, COOKIE_CATEGORIES.FUNCTIONAL)

    applyTheme(theme)
  }

  // Toggle between themes
  const toggleTheme = () => {
    const newTheme = isDarkMode.value ? 'light' : 'dark'
    setTheme(newTheme)

    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'theme_change', {
        'event_category': 'UX',
        'event_label': newTheme,
        'value': 1
      })
    }
  }

  // Get current theme name
  const getCurrentTheme = () => {
    return isDarkMode.value ? 'dark' : 'light'
  }

  // Initialize theme
  const initializeTheme = () => {
    detectSystemPreference()

    const savedTheme = safeLocalStorage.getItem('theme-preference', COOKIE_CATEGORIES.FUNCTIONAL)

    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme)
    } else {
      // Use system preference as default
      setTheme(systemPreference.value)
    }
  }

  // Watch for theme changes
  watch(isDarkMode, (newValue) => {
    applyTheme(newValue ? 'dark' : 'light')
  })

  // Initialize on mount
  onMounted(() => {
    initializeTheme()
  })

  return {
    isDarkMode,
    systemPreference,
    setTheme,
    toggleTheme,
    getCurrentTheme,
    initializeTheme,
    themes
  }
}