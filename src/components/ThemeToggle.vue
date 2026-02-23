<template>
  <button class="theme-toggle" @click="toggleTheme($event)" :aria-pressed="isLight">
    <i :class="isLight ? 'ri-moon-line' : 'ri-sun-line'"></i>
    <span>{{ isLight ? 'Dark' : 'Light' }}</span>
  </button>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ThemeToggle',
  setup() {
    const isLight = ref(false)

    const applyTheme = (light) => {
      const root = document.documentElement
      root.classList.toggle('theme-light', light)
      isLight.value = light
      localStorage.setItem('theme', light ? 'light' : 'dark')
    }

    const toggleTheme = (event) => {
      const nextLight = !isLight.value

      // Set the circle origin to the button center
      const btn = event.currentTarget
      const rect = btn.getBoundingClientRect()
      document.documentElement.style.setProperty('--vt-x', `${Math.round(rect.left + rect.width / 2)}px`)
      document.documentElement.style.setProperty('--vt-y', `${Math.round(rect.top + rect.height / 2)}px`)

      if (!document.startViewTransition) {
        applyTheme(nextLight)
        return
      }
      document.startViewTransition(() => applyTheme(nextLight))
    }

    onMounted(() => {
      const saved = localStorage.getItem('theme')
      if (saved === 'light') {
        applyTheme(true)
        return
      }
      if (saved === 'dark') {
        applyTheme(false)
        return
      }
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
      applyTheme(prefersLight)
    })

    return {
      isLight,
      toggleTheme
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 600;
  transition: var(--transition);
}

.theme-toggle:hover {
  border-color: var(--color-primary);
  transform: translateY(-1px);
}

.theme-toggle i {
  font-size: 1rem;
  color: var(--color-primary);
}
</style>
