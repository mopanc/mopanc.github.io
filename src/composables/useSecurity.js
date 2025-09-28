// Proteção contra inspeção e manipulação
export function useSecurity() {

  // Detectar ferramentas de desenvolvimento
  const detectDevTools = () => {
    const threshold = 160

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold ||
          window.outerWidth - window.innerWidth > threshold) {
        // DevTools detectado - não fazer nada óbvio, apenas log silencioso
        console.clear()
      }
    }, 1000)
  }

  // Proteger contra copy-paste de código no console
  const protectConsole = () => {
    // Sobrescrever console comum
    const originalLog = console.log
    const originalWarn = console.warn
    const originalError = console.error

    console.log = (...args) => {
      // Manter logs legítimos mas limpar após um tempo
      originalLog(...args)
      setTimeout(() => console.clear(), 3000)
    }

    console.warn = (...args) => {
      originalWarn(...args)
      setTimeout(() => console.clear(), 3000)
    }

    console.error = (...args) => {
      originalError(...args)
      setTimeout(() => console.clear(), 3000)
    }
  }

  // Detectar tentativas de manipulação do DOM
  const protectDOM = () => {
    // Observer para mudanças suspeitas
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target

          // Detectar modificações suspeitas em elementos críticos
          if (target.classList?.contains('terminal-toggle') ||
              target.classList?.contains('admin-btn') ||
              target.id?.includes('admin')) {

            // Log silencioso da tentativa
            console.warn('DOM modification detected')

            // Reverter mudanças se necessário
            if (mutation.attributeName === 'style') {
              target.removeAttribute('style')
            }
          }
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['style', 'class', 'data-admin']
    })
  }

  // Proteger variáveis globais críticas
  const protectGlobals = () => {
    // Tornar variáveis críticas não enumeráveis
    Object.defineProperty(window, 'portfolioAdminAccess', {
      get() { return undefined },
      set() { /* Bloquear tentativas de modificação */ },
      enumerable: false,
      configurable: false
    })

    Object.defineProperty(window, 'portfolioAccessCode', {
      get() { return undefined },
      set() { /* Bloquear tentativas de modificação */ },
      enumerable: false,
      configurable: false
    })
  }

  // Detectar debugging attempts
  const antiDebug = () => {
    setInterval(() => {
      const start = performance.now()
      console.log('%c ', 'background: transparent')
      const end = performance.now()

      // Se demorou muito tempo, DevTools pode estar aberto
      if (end - start > 10) {
        console.clear()
      }
    }, 2000)
  }

  // Proteger contexto de clique direito
  const protectRightClick = () => {
    document.addEventListener('contextmenu', () => {
      // Permitir clique direito normal, mas limpar console
      setTimeout(() => console.clear(), 100)
    })
  }

  // Detectar tentativas de bypass
  const detectBypass = () => {
    // Monitorar calls para funções críticas
    const originalGetItem = localStorage.getItem
    const originalSetItem = localStorage.setItem

    localStorage.getItem = function(key) {
      if (key.includes('admin') || key.includes('portfolioAccessCode')) {
        console.log('Storage access detected')
      }
      return originalGetItem.call(this, key)
    }

    localStorage.setItem = function(key, value) {
      if (key.includes('admin') || key.includes('portfolioAccessCode')) {
        console.log('Storage modification attempt detected')
      }
      return originalSetItem.call(this, key, value)
    }
  }

  // Função principal de inicialização
  const initSecurity = () => {
    // Só ativar em produção
    if (process.env.NODE_ENV === 'production') {
      detectDevTools()
      protectConsole()
      protectDOM()
      protectGlobals()
      antiDebug()
      protectRightClick()
      detectBypass()
    }
  }

  return {
    initSecurity
  }
}