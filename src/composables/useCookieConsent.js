// useCookieConsent.js
import { ref, computed } from 'vue'

// Global state for cookie consent
const consentGiven = ref(null) // null = not set, true = accepted, false = rejected
const consentTimestamp = ref(null)
const showBanner = ref(false)

// Cookie categories
const COOKIE_CATEGORIES = {
  ESSENTIAL: 'essential',
  FUNCTIONAL: 'functional',
  ANALYTICS: 'analytics'
}

// Check if consent was previously given
const initializeConsent = () => {
  try {
    // Check for existing consent (this is essential, so we can check without consent)
    const consent = localStorage.getItem('cookie-consent')
    const timestamp = localStorage.getItem('cookie-consent-timestamp')

    if (consent && timestamp) {
      const consentAge = Date.now() - parseInt(timestamp)
      const oneYear = 365 * 24 * 60 * 60 * 1000 // 1 year in milliseconds

      if (consentAge < oneYear) {
        consentGiven.value = consent === 'true'
        consentTimestamp.value = parseInt(timestamp)
      } else {
        // Consent expired, show banner again
        showBanner.value = true
      }
    } else {
      // No previous consent, show banner
      showBanner.value = true
    }
  } catch (error) {
    console.warn('Could not read cookie consent from localStorage:', error)
    showBanner.value = true
  }
}

// Safe localStorage wrapper that respects consent
const safeLocalStorage = {
  getItem: (key, category = COOKIE_CATEGORIES.FUNCTIONAL) => {
    if (category === COOKIE_CATEGORIES.ESSENTIAL || consentGiven.value === true) {
      try {
        return localStorage.getItem(key)
      } catch (error) {
        console.warn('localStorage not available:', error)
        return null
      }
    }
    return null
  },

  setItem: (key, value, category = COOKIE_CATEGORIES.FUNCTIONAL) => {
    if (category === COOKIE_CATEGORIES.ESSENTIAL || consentGiven.value === true) {
      try {
        localStorage.setItem(key, value)
        return true
      } catch (error) {
        console.warn('localStorage not available:', error)
        return false
      }
    }
    return false
  },

  removeItem: (key, category = COOKIE_CATEGORIES.FUNCTIONAL) => {
    if (category === COOKIE_CATEGORIES.ESSENTIAL || consentGiven.value === true) {
      try {
        localStorage.removeItem(key)
        return true
      } catch (error) {
        console.warn('localStorage not available:', error)
        return false
      }
    }
    return false
  }
}

export function useCookieConsent() {
  const acceptCookies = () => {
    consentGiven.value = true
    consentTimestamp.value = Date.now()
    showBanner.value = false

    try {
      // Store consent (this is essential)
      localStorage.setItem('cookie-consent', 'true')
      localStorage.setItem('cookie-consent-timestamp', consentTimestamp.value.toString())
    } catch (error) {
      console.warn('Could not store cookie consent:', error)
    }
  }

  const rejectCookies = () => {
    consentGiven.value = false
    consentTimestamp.value = Date.now()
    showBanner.value = false

    try {
      // Store rejection (this is essential)
      localStorage.setItem('cookie-consent', 'false')
      localStorage.setItem('cookie-consent-timestamp', consentTimestamp.value.toString())

      // Clear existing functional cookies
      const keysToRemove = ['selectedLanguage', 'theme-preference', 'portfolioAccessCode', 'portfolioAccessExpiry']
      keysToRemove.forEach(key => {
        localStorage.removeItem(key)
      })
    } catch (error) {
      console.warn('Could not store cookie rejection:', error)
    }
  }

  const resetConsent = () => {
    consentGiven.value = null
    consentTimestamp.value = null
    showBanner.value = true

    try {
      localStorage.removeItem('cookie-consent')
      localStorage.removeItem('cookie-consent-timestamp')
    } catch (error) {
      console.warn('Could not reset cookie consent:', error)
    }
  }

  const isConsentGiven = computed(() => consentGiven.value === true)
  const isConsentRejected = computed(() => consentGiven.value === false)
  const needsConsent = computed(() => consentGiven.value === null)

  return {
    // State
    consentGiven,
    consentTimestamp,
    showBanner,
    isConsentGiven,
    isConsentRejected,
    needsConsent,

    // Actions
    acceptCookies,
    rejectCookies,
    resetConsent,
    initializeConsent,

    // Safe storage
    safeLocalStorage,

    // Categories
    COOKIE_CATEGORIES
  }
}