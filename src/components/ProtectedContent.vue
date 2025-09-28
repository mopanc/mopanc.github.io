<template>
  <div class="protected-content">
    <!-- Conteúdo público sempre visível -->
    <div v-if="$slots.public" class="public-content">
      <slot name="public"></slot>
    </div>

    <!-- Conteúdo protegido -->
    <div
      v-if="hasProtectedContent"
      class="sensitive-content"
      :class="{
        'blurred': !isAccessValid && blurMode,
        'hidden': !isAccessValid && !blurMode
      }"
    >
      <!-- Overlay de proteção -->
      <div
        v-if="!isAccessValid"
        class="protection-overlay"
        @click="showUnlockHint"
        @contextmenu="$event.preventDefault()"
        @selectstart="$event.preventDefault()"
        @dragstart="$event.preventDefault()"
      >
        <div class="protection-content">
          <i class="ri-lock-line protection-icon"></i>
          <h3>Conteúdo Protegido</h3>
          <p>Clique no 🔒 para inserir código</p>
        </div>
      </div>

      <!-- Conteúdo protegido com proteções adicionais -->
      <div
        v-if="isAccessValid"
        class="protected-slot"
        @contextmenu="$event.preventDefault()"
        @selectstart="$event.preventDefault()"
        @dragstart="$event.preventDefault()"
        @copy="$event.preventDefault()"
        @cut="$event.preventDefault()"
        @paste="$event.preventDefault()"
      >
        <slot name="protected"></slot>
      </div>

      <!-- Placeholder quando não autenticado - conteúdo nunca renderizado -->
      <div v-else class="protected-slot-placeholder">
        <!-- Conteúdo nunca é renderizado aqui -->
      </div>
    </div>
  </div>
</template>

<script>
import { useAccessControlSimple } from '../composables/useAccessControlSimple'

export default {
  name: 'ProtectedContent',
  props: {
    blurMode: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const { isAccessValid } = useAccessControlSimple()
    return { isAccessValid, forceUpdate }
  },
  computed: {
    hasProtectedContent() {
      return this.$slots.protected && this.$slots.protected().length > 0
    }
  },
  mounted() {
    // Proteção contra DevTools (detecção básica)
    this.setupDevToolsProtection()

    // Proteção contra teclas de atalho
    this.setupKeyboardProtection()

    // Proteção contra seleção de texto
    this.setupSelectionProtection()

    // Listener para mudanças no estado de acesso
    this.accessChangeListener = () => {
      this.$forceUpdate()
    }
    window.addEventListener('portfolio-access-state-changed', this.accessChangeListener)
    window.addEventListener('portfolio-access-granted', this.accessChangeListener)
    window.addEventListener('vue-force-update', this.accessChangeListener)
  },

  beforeUnmount() {
    // Limpeza dos event listeners
    if (this.devToolsInterval) {
      clearInterval(this.devToolsInterval)
    }
    document.removeEventListener('keydown', this.preventKeyboardShortcuts)
    document.removeEventListener('selectstart', this.preventSelection)
    window.removeEventListener('portfolio-access-state-changed', this.accessChangeListener)
    window.removeEventListener('portfolio-access-granted', this.accessChangeListener)
    window.removeEventListener('vue-force-update', this.accessChangeListener)
  },

  methods: {
    showUnlockHint() {
      // Fazer scroll até o toast ou destacá-lo
      const unlockToast = document.querySelector('.unlock-toast')
      if (unlockToast) {
        unlockToast.scrollIntoView({ behavior: 'smooth', block: 'center' })

        // Fazer piscar o toast para chamar atenção
        unlockToast.style.animation = 'pulse 0.6s ease-in-out 3'

        setTimeout(() => {
          unlockToast.style.animation = ''
        }, 2000)
      }
    },

    setupDevToolsProtection() {
      // Detecção básica de DevTools (pode ser contornada, mas adiciona uma camada)
      let devtools = { open: false, orientation: null }
      const threshold = 160

      this.devToolsInterval = setInterval(() => {
        if (
          window.outerHeight - window.innerHeight > threshold ||
          window.outerWidth - window.innerWidth > threshold
        ) {
          if (!devtools.open) {
            devtools.open = true
            this.handleDevToolsDetection()
          }
        } else {
          devtools.open = false
        }
      }, 500)
    },

    handleDevToolsDetection() {
      // Quando DevTools são detectadas, limpar localStorage (opcional)
      if (!this.isAccessValid) {
        console.clear()
        // Pode adicionar mais ações aqui se necessário
      }
    },

    setupKeyboardProtection() {
      this.preventKeyboardShortcuts = (e) => {
        // Bloquear F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.
        if (
          e.keyCode === 123 || // F12
          (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
          (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
          (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
          (e.ctrlKey && e.keyCode === 83) || // Ctrl+S
          (e.ctrlKey && e.keyCode === 65) || // Ctrl+A
          (e.ctrlKey && e.keyCode === 67) || // Ctrl+C
          (e.ctrlKey && e.keyCode === 86) || // Ctrl+V
          (e.ctrlKey && e.keyCode === 88) // Ctrl+X
        ) {
          if (!this.isAccessValid) {
            e.preventDefault()
            e.stopPropagation()
            return false
          }
        }
      }
      document.addEventListener('keydown', this.preventKeyboardShortcuts)
    },

    setupSelectionProtection() {
      this.preventSelection = (e) => {
        if (!this.isAccessValid) {
          e.preventDefault()
          return false
        }
      }
      document.addEventListener('selectstart', this.preventSelection)
    }
  }
}
</script>

<style scoped>
.protected-content {
  position: relative;
}

.sensitive-content {
  position: relative;
  transition: all 0.3s ease;
}

.sensitive-content.blurred {
  filter: blur(5px) contrast(0.3) brightness(0.4);
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.sensitive-content.hidden {
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  visibility: hidden;
}

.protection-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px) saturate(0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Proteção adicional contra inspect */
.protected-slot-placeholder {
  height: 300px;
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  border-radius: 8px;
  opacity: 0.1;
}

/* Anti-selection global quando não autenticado */
.sensitive-content:not(.authenticated) * {
  user-select: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  -webkit-touch-callout: none !important;
}

/* Proteção contra drag & drop */
.sensitive-content * {
  -webkit-user-drag: none !important;
  -khtml-user-drag: none !important;
  -moz-user-drag: none !important;
  -o-user-drag: none !important;
  user-drag: none !important;
}

.protection-overlay:hover {
  background: rgba(0, 0, 0, 0.8);
}

.protection-content {
  text-align: center;
  color: white;
  padding: 20px;
}

.protection-icon {
  font-size: 2rem;
  margin-bottom: 8px;
  color: var(--color-primary);
}

.protection-content h3 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: white;
}

.protection-content p {
  margin: 0;
  color: #ccc;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .protection-content {
    padding: 16px;
  }

  .protection-icon {
    font-size: 1.5rem;
  }

  .protection-content h3 {
    font-size: 1rem;
  }

  .protection-content p {
    font-size: 0.8rem;
  }
}

/* Animação de pulso para destacar toast */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>