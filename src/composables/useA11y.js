import { ref, onMounted, onUnmounted } from 'vue'

export function useA11y() {
  const isReducedMotion = ref(false)
  const isHighContrast = ref(false)
  const focusVisible = ref(false)

  // Detect user preferences
  const detectA11yPreferences = () => {
    if (typeof window !== 'undefined') {
      // Reduced motion preference
      const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      isReducedMotion.value = motionMediaQuery.matches

      motionMediaQuery.addEventListener('change', (e) => {
        isReducedMotion.value = e.matches
        updateMotionSettings()
      })

      // High contrast preference
      const contrastMediaQuery = window.matchMedia('(prefers-contrast: high)')
      isHighContrast.value = contrastMediaQuery.matches

      contrastMediaQuery.addEventListener('change', (e) => {
        isHighContrast.value = e.matches
        updateContrastSettings()
      })

      // Focus visible detection
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleMouseDown)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      focusVisible.value = true
      document.body.classList.add('focus-visible')
    }
  }

  const handleMouseDown = () => {
    focusVisible.value = false
    document.body.classList.remove('focus-visible')
  }

  // Update motion settings
  const updateMotionSettings = () => {
    if (typeof document !== 'undefined') {
      if (isReducedMotion.value) {
        document.body.classList.add('reduce-motion')
        // Disable ScrollReveal animations
        if (typeof window !== 'undefined' && window.ScrollReveal) {
          window.ScrollReveal().clean()
        }
      } else {
        document.body.classList.remove('reduce-motion')
      }
    }
  }

  // Update contrast settings
  const updateContrastSettings = () => {
    if (typeof document !== 'undefined') {
      if (isHighContrast.value) {
        document.body.classList.add('high-contrast')
      } else {
        document.body.classList.remove('high-contrast')
      }
    }
  }

  // Skip to content functionality
  const skipToContent = (targetId = 'main-content') => {
    const target = document.getElementById(targetId)
    if (target) {
      target.focus()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Announce to screen readers
  const announceToScreenReader = (message, priority = 'polite') => {
    if (typeof document !== 'undefined') {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', priority)
      announcement.setAttribute('aria-atomic', 'true')
      announcement.setAttribute('class', 'sr-only')
      announcement.textContent = message

      document.body.appendChild(announcement)

      // Remove after announcement
      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    }
  }

  // Trap focus within element
  const trapFocus = (element) => {
    if (!element) return

    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    const handleTrapFocus = (event) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusable) {
            event.preventDefault()
            lastFocusable.focus()
          }
        } else {
          if (document.activeElement === lastFocusable) {
            event.preventDefault()
            firstFocusable.focus()
          }
        }
      }
    }

    element.addEventListener('keydown', handleTrapFocus)

    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTrapFocus)
    }
  }

  // Initialize on mount
  onMounted(() => {
    detectA11yPreferences()
    updateMotionSettings()
    updateContrastSettings()
  })

  // Cleanup on unmount
  onUnmounted(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  })

  return {
    isReducedMotion,
    isHighContrast,
    focusVisible,
    skipToContent,
    announceToScreenReader,
    trapFocus,
    updateMotionSettings,
    updateContrastSettings
  }
}