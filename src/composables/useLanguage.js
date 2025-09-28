import { ref, reactive } from 'vue'
import { useCookieConsent } from './useCookieConsent'

// Global state for language management
const { safeLocalStorage, COOKIE_CATEGORIES } = useCookieConsent()
const selectedLanguage = ref(safeLocalStorage.getItem('selectedLanguage', COOKIE_CATEGORIES.ESSENTIAL) || 'en')
const translations = reactive({})
const isLoading = ref(false)

// Cache for loaded translations to avoid re-importing
const translationCache = new Map()

export function useLanguage() {
  const loadTranslations = async (language = selectedLanguage.value) => {
    // Return cached translations if available
    if (translationCache.has(language)) {
      Object.assign(translations, translationCache.get(language))
      return translations
    }

    isLoading.value = true

    try {
      const module = await import(`../languages/${language}.js`)
      const expressions = module.default

      // Cache the translations
      translationCache.set(language, expressions)

      // Update reactive state
      Object.assign(translations, expressions)

      isLoading.value = false
      return expressions
    } catch (error) {
      console.error(`Failed to load language: ${language}`, error)
      isLoading.value = false

      // Fallback to English if current language fails
      if (language !== 'en') {
        return loadTranslations('en')
      }

      throw error
    }
  }

  const setLanguage = (language) => {
    selectedLanguage.value = language
    safeLocalStorage.setItem('selectedLanguage', language, COOKIE_CATEGORIES.ESSENTIAL)

    // Update HTML lang attribute
    document.documentElement.lang = language

    return loadTranslations(language)
  }

  const getCurrentLanguage = () => selectedLanguage.value

  const isPortuguese = () => selectedLanguage.value === 'pt'

  // Auto-load translations on first use
  const initialize = async () => {
    if (Object.keys(translations).length === 0) {
      await loadTranslations()
    }
    return translations
  }

  return {
    selectedLanguage,
    translations,
    isLoading,
    loadTranslations,
    setLanguage,
    getCurrentLanguage,
    isPortuguese,
    initialize
  }
}