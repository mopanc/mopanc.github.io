<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :class="{ 'theme-toggle--dark': isDarkMode }"
    :aria-label="toggleLabel"
    :title="toggleLabel"
  >
    <div class="theme-toggle__track">
      <div class="theme-toggle__thumb">
        <i class="theme-toggle__icon" :class="currentIcon"></i>
      </div>
    </div>
    <span class="theme-toggle__label">{{ currentLabel }}</span>
  </button>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useTheme } from '../composables/useTheme.js'
import { useLanguage } from '../composables/useLanguage.js'

const { isDarkMode, toggleTheme } = useTheme()
const { translations } = useLanguage()

const currentIcon = computed(() => {
  return isDarkMode.value ? 'ri-moon-fill' : 'ri-sun-fill'
})

const currentLabel = computed(() => {
  return isDarkMode.value
    ? (translations.light_mode || 'Light')
    : (translations.dark_mode || 'Dark')
})

const toggleLabel = computed(() => {
  return isDarkMode.value
    ? (translations.switch_to_light || 'Switch to light mode')
    : (translations.switch_to_dark || 'Switch to dark mode')
})

onMounted(() => {
  // Initialize theme on component mount
  // Theme composable will handle the actual initialization
})
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 25px;
  transition: var(--transition);
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-family: var(--ff-body);
}

.theme-toggle:hover {
  background: var(--color-bg-secondary);
  transform: translateY(-1px);
}

.theme-toggle:active {
  transform: translateY(0);
}

.theme-toggle__track {
  position: relative;
  width: 50px;
  height: 24px;
  background: var(--color-border);
  border-radius: 12px;
  transition: var(--transition);
  overflow: hidden;
}

.theme-toggle--dark .theme-toggle__track {
  background: var(--color-primary);
}

.theme-toggle__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: var(--color-white);
  border-radius: 10px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.theme-toggle--dark .theme-toggle__thumb {
  transform: translateX(26px);
  background: var(--color-bg-primary);
}

.theme-toggle__icon {
  font-size: 12px;
  color: var(--color-primary);
  transition: var(--transition);
}

.theme-toggle--dark .theme-toggle__icon {
  color: var(--color-white);
}

.theme-toggle__label {
  font-weight: var(--fw-medium);
  min-width: 35px;
  text-align: left;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .theme-toggle {
    gap: 0.5rem;
    padding: 0.25rem;
  }

  .theme-toggle__track {
    width: 40px;
    height: 20px;
  }

  .theme-toggle__thumb {
    width: 16px;
    height: 16px;
  }

  .theme-toggle--dark .theme-toggle__thumb {
    transform: translateX(20px);
  }

  .theme-toggle__label {
    font-size: 12px;
  }
}

/* Focus styles for accessibility */
.theme-toggle:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.theme-toggle:focus:not(:focus-visible) {
  outline: none;
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Animation enhancements */
.theme-toggle__track::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.theme-toggle:hover .theme-toggle__track::before {
  opacity: 1;
}

/* Special animation when switching themes */
@keyframes switchTheme {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.theme-toggle__thumb.switching {
  animation: switchTheme 0.3s ease;
}
</style>