import { ref, computed } from 'vue'
import { useCookieConsent } from './useCookieConsent'

// Estado global simples
const { safeLocalStorage, COOKIE_CATEGORIES } = useCookieConsent()
let globalIsAuthenticated = ref(false)
let globalAccessExpiry = ref(null)

export function useAccessControlSimple() {
  const isAuthenticated = globalIsAuthenticated
  const accessExpiry = globalAccessExpiry

  const isAccessValid = computed(() => {
    if (!isAuthenticated.value || !accessExpiry.value) return false

    const now = new Date().getTime()
    if (now >= accessExpiry.value) {
      isAuthenticated.value = false
      accessExpiry.value = null
      return false
    }
    return true
  })

  const timeRemaining = computed(() => {
    if (!accessExpiry.value) return 0

    const now = new Date().getTime()
    const remaining = Math.max(0, accessExpiry.value - now)
    return Math.floor(remaining / (1000 * 60)) // em minutos
  })

  const validateAccessCode = (code) => {
    const now = new Date()
    const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
    const currentDay = String(now.getDate()).padStart(2, '0')

    // Códigos de teste simples
    const validCodes = [
      `272${currentMonth}${currentDay}`,
      `272${currentDay}${currentMonth}`,
      `DEMO${currentMonth}${currentDay}`,
      `PORTFOLIO${currentMonth}${currentDay}`,
      'DEMO2024',
      'TEST123'
    ]

    const codeToCheck = code.toUpperCase()
    const isValid = validCodes.includes(codeToCheck)

    if (isValid) {
      const now = new Date().getTime()
      const expiryTime = now + (24 * 60 * 60 * 1000) // 24 horas

      isAuthenticated.value = true
      accessExpiry.value = expiryTime

      safeLocalStorage.setItem('portfolioAccessCode', codeToCheck, COOKIE_CATEGORIES.FUNCTIONAL)
      safeLocalStorage.setItem('portfolioAccessExpiry', expiryTime.toString(), COOKIE_CATEGORIES.FUNCTIONAL)

      console.log('Authentication successful!', {
        isAuthenticated: isAuthenticated.value,
        isAccessValid: isAccessValid.value
      })

      // Disparar eventos
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('portfolio-access-granted'))
        window.dispatchEvent(new CustomEvent('portfolio-access-state-changed'))
        window.dispatchEvent(new CustomEvent('vue-force-update'))
      }, 100)

      return true
    }
    return false
  }

  const revokeAccess = () => {
    isAuthenticated.value = false
    accessExpiry.value = null
    safeLocalStorage.removeItem('portfolioAccessCode', COOKIE_CATEGORIES.FUNCTIONAL)
    safeLocalStorage.removeItem('portfolioAccessExpiry', COOKIE_CATEGORIES.FUNCTIONAL)
  }

  // Verificar localStorage na inicialização
  const checkStoredAccess = () => {
    const storedCode = safeLocalStorage.getItem('portfolioAccessCode', COOKIE_CATEGORIES.FUNCTIONAL)
    const storedExpiry = safeLocalStorage.getItem('portfolioAccessExpiry', COOKIE_CATEGORIES.FUNCTIONAL)

    if (storedCode && storedExpiry) {
      const now = new Date().getTime()
      const expiryTime = parseInt(storedExpiry)

      if (now < expiryTime) {
        isAuthenticated.value = true
        accessExpiry.value = expiryTime
        return true
      } else {
        revokeAccess()
      }
    }
    return false
  }

  // Inicializar
  checkStoredAccess()

  return {
    isAuthenticated,
    isAccessValid,
    timeRemaining,
    validateAccessCode,
    revokeAccess
  }
}