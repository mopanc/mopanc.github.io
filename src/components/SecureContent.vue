<template>
  <div class="secure-content">
    <div v-if="isContentVisible" class="content-wrapper">
      <component
        :is="contentComponent"
        v-bind="contentProps"
        @mounted="onContentMounted"
      />
    </div>

    <!-- Decoy content para confundir inspect element -->
    <div v-else class="decoy-content" style="display: none;">
      <div class="fake-projects">
        <h2>Projetos Fictícios</h2>
        <div class="fake-project">
          <h3>Sistema de Login</h3>
          <p>Sistema básico de autenticação</p>
        </div>
        <div class="fake-project">
          <h3>Dashboard Admin</h3>
          <p>Painel administrativo simples</p>
        </div>
        <div class="fake-project">
          <h3>API REST</h3>
          <p>API básica em Node.js</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAccessControlSimple } from '../composables/useAccessControlSimple'

export default {
  name: 'SecureContent',
  props: {
    contentComponent: {
      type: [String, Object],
      required: true
    },
    contentProps: {
      type: Object,
      default: () => ({})
    },
    securityLevel: {
      type: String,
      default: 'high', // low, medium, high, maximum
      validator: value => ['low', 'medium', 'high', 'maximum'].includes(value)
    }
  },

  setup() {
    const { isAccessValid } = useAccessControlSimple()
    return { isAccessValid }
  },

  data() {
    return {
      isContentVisible: false,
      contentCheckInterval: null,
      securityChecks: {
        devTools: false,
        domManipulation: false,
        consoleAccess: false
      }
    }
  },

  computed: {
    shouldShowContent() {
      return this.isAccessValid && this.passesSecurityChecks()
    }
  },

  watch: {
    shouldShowContent: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.showContentSecurely()
        } else {
          this.hideContent()
        }
      }
    }
  },

  mounted() {
    this.startSecurityMonitoring()
    this.obfuscateHTML()
  },

  beforeUnmount() {
    this.stopSecurityMonitoring()
  },

  methods: {
    passesSecurityChecks() {
      if (this.securityLevel === 'low') return true

      // Para níveis mais altos, verificar condições de segurança
      return !this.securityChecks.devTools &&
             !this.securityChecks.domManipulation
    },

    showContentSecurely() {
      // Delay aleatório para dificultar automação
      const delay = Math.random() * 1000 + 500

      setTimeout(() => {
        this.isContentVisible = true
        this.$nextTick(() => {
          this.protectRenderedContent()
        })
      }, delay)
    },

    hideContent() {
      this.isContentVisible = false
    },

    startSecurityMonitoring() {
      if (this.securityLevel === 'low') return

      // Monitor DevTools
      this.monitorDevTools()

      // Monitor DOM changes
      this.monitorDOMChanges()

      // Monitor console access
      this.monitorConsoleAccess()
    },

    stopSecurityMonitoring() {
      if (this.contentCheckInterval) {
        clearInterval(this.contentCheckInterval)
      }
    },

    monitorDevTools() {
      let devtools = { open: false }

      this.contentCheckInterval = setInterval(() => {
        const widthThreshold = window.outerWidth - window.innerWidth > 160
        const heightThreshold = window.outerHeight - window.innerHeight > 160

        if (widthThreshold || heightThreshold) {
          if (!devtools.open) {
            devtools.open = true
            this.securityChecks.devTools = true
            this.handleSecurityBreach('devtools')
          }
        } else {
          devtools.open = false
          this.securityChecks.devTools = false
        }
      }, 1000)
    },

    monitorDOMChanges() {
      if (!this.$el) return

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // Detectar manipulações suspeitas
          if (mutation.type === 'attributes' &&
              (mutation.attributeName === 'style' ||
               mutation.attributeName === 'class')) {
            this.securityChecks.domManipulation = true
            this.handleSecurityBreach('dom_manipulation')
          }
        })
      })

      observer.observe(this.$el, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeOldValue: true
      })
    },

    monitorConsoleAccess() {
      // Detectar se console está sendo usado
      const originalLog = console.log
      const originalError = console.error
      const originalWarn = console.warn

      console.log = (...args) => {
        this.securityChecks.consoleAccess = true
        return originalLog.apply(console, args)
      }

      console.error = (...args) => {
        this.securityChecks.consoleAccess = true
        return originalError.apply(console, args)
      }

      console.warn = (...args) => {
        this.securityChecks.consoleAccess = true
        return originalWarn.apply(console, args)
      }
    },

    handleSecurityBreach(type) {
      if (this.securityLevel === 'maximum') {
        // Em modo máximo, ocultar conteúdo imediatamente
        this.hideContent()

        // Limpar localStorage como medida adicional
        localStorage.removeItem('portfolioAccessCode')
        localStorage.removeItem('portfolioAccessExpiry')
      }

      console.clear()
    },

    protectRenderedContent() {
      if (!this.$el) return

      // Adicionar proteções dinâmicas ao conteúdo renderizado
      const protectedElements = this.$el.querySelectorAll('*')

      protectedElements.forEach(el => {
        // Prevenir right-click
        el.addEventListener('contextmenu', e => e.preventDefault())

        // Prevenir seleção
        el.addEventListener('selectstart', e => e.preventDefault())

        // Prevenir drag
        el.addEventListener('dragstart', e => e.preventDefault())

        // Adicionar propriedades CSS dinâmicas
        el.style.userSelect = 'none'
        el.style.webkitUserSelect = 'none'
        el.style.mozUserSelect = 'none'
      })
    },

    obfuscateHTML() {
      // Adicionar elementos falsos ao DOM para confundir inspect
      const decoyElements = [
        'data-project="fake-login-system"',
        'data-tech="React, Node.js"',
        'data-secret="not-the-real-content"',
        'class="hidden-project"',
        'id="decoy-container"'
      ]

      // Inserir comentários HTML falsos
      const fakeComments = [
        '<!-- Real content starts here -->',
        '<!-- Protected section -->',
        '<!-- End of secure content -->'
      ]

      // Isso pode ser expandido para ser mais sofisticado
    },

    onContentMounted() {
      // Callback quando o conteúdo é montado
      this.$emit('content-ready')
    }
  }
}
</script>

<style scoped>
.secure-content {
  position: relative;
}

.content-wrapper {
  transition: all 0.3s ease;
}

.decoy-content {
  opacity: 0;
  position: absolute;
  top: -9999px;
  left: -9999px;
  visibility: hidden;
}

.fake-projects {
  padding: 20px;
}

.fake-project {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Proteção contra CSS injection */
.secure-content * {
  content: none !important;
}

.secure-content *::before,
.secure-content *::after {
  content: none !important;
}
</style>