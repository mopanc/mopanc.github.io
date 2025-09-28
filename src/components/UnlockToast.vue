<template>
  <div
    v-if="!isAccessValid"
    class="unlock-toast"
    :class="{ 'expanded': isExpanded }"
  >
    <!-- Botão de toggle quando minimizado -->
    <button
      v-if="!isExpanded"
      @click="toggleExpanded"
      class="unlock-toggle"
      title="Inserir código de acesso"
    >
      <i class="ri-key-line"></i>
      <span class="unlock-toggle-text">Código</span>
    </button>

    <!-- Conteúdo expandido -->
    <div v-if="isExpanded" class="unlock-content">
      <div class="unlock-header">
        <div class="unlock-header-content">
          <i class="ri-key-line unlock-header-icon"></i>
          <span class="unlock-title">Código de Acesso</span>
        </div>
        <button @click="toggleExpanded" class="close-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>

      <div class="unlock-description">
        <p>Insira o código fornecido para aceder ao conteúdo completo</p>
      </div>

      <div class="unlock-form">
        <div class="input-wrapper">
          <input
            v-model="inputCode"
            type="text"
            placeholder="Exemplo: DEMO2024"
            class="unlock-input"
            @keyup.enter="validateCode"
            @input="clearError"
            maxlength="15"
          />
          <button
            @click="validateCode"
            class="unlock-btn"
            :disabled="!inputCode.trim()"
          >
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <div v-if="error" class="unlock-error">
        {{ error }}
      </div>

      <div class="unlock-info">
        <small>
          Não tens código? <button @click="showRequestForm" class="link-btn">Solicitar aqui</button>
        </small>
      </div>
    </div>

    <!-- Timer quando autenticado -->
    <div v-if="isAccessValid" class="access-timer-toast">
      <span>✅ {{ isAdmin ? 'Admin' : 'Autenticado' }}</span>
      <div class="timer-actions">
        <button @click="revokeAccess" class="revoke-btn" title="Revogar acesso">
          🚪
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import { useAccessControlSimple } from '../composables/useAccessControlSimple'

export default {
  name: 'UnlockToast',
  setup() {
    const { isAccessValid, validateAccessCode, revokeAccess, isAdmin } = useAccessControlSimple()
    return { isAccessValid, validateAccessCode, revokeAccess, isAdmin }
  },
  data() {
    return {
      isExpanded: false,
      inputCode: '',
      error: ''
    }
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded
      if (this.isExpanded) {
        this.$nextTick(() => {
          this.$el.querySelector('.unlock-input')?.focus()
        })
      }
    },

    async validateCode() {
      if (!this.inputCode.trim()) return

      try {
        const result = await this.validateAccessCode(this.inputCode.trim())

        if (result.success) {
          this.isExpanded = false
          this.inputCode = ''
          this.error = ''

          // Log para admin
          if (result.type === 'admin') {
            console.log('🔥 Admin detectado! isAdmin:', this.isAdmin)
          }

          // Forçar atualizações para garantir reatividade
          this.$forceUpdate()
          this.$nextTick(() => {
            this.$forceUpdate()
          })

          // Disparar evento personalizado para componentes que precisam reagir
          this.$emit('access-granted')
          window.dispatchEvent(new CustomEvent('portfolio-access-granted'))
        } else {
          this.error = result.message || 'Código inválido'
          setTimeout(() => {
            this.error = ''
          }, 3000)
        }
      } catch (error) {
        this.error = 'Erro ao validar código'
        console.error('Erro:', error)
        setTimeout(() => {
          this.error = ''
        }, 3000)
      }
    },

    clearError() {
      this.error = ''
    },

    showRequestForm() {
      // Scrollar para o formulário de contacto
      const contactSection = document.querySelector('#contact, .contact-form-section')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
        this.isExpanded = false
      }
    },

    formatTime(minutes) {
      const hours = Math.floor(minutes / 60)
      const mins = minutes % 60

      if (hours > 0) {
        return `${hours}h ${mins}m`
      }
      return `${mins}m`
    }
  },

  // Auto-minimizar quando clica fora
  mounted() {
    document.addEventListener('click', (e) => {
      if (this.isExpanded && !this.$el.contains(e.target)) {
        this.isExpanded = false
      }
    })

    // Debug: monitorizar mudanças no isAdmin
    this.$watch('isAdmin', (newVal) => {
      console.log('🔧 isAdmin changed:', newVal)
    })

    // Debug: estado inicial
    console.log('🔧 Initial state:', {
      isAdmin: this.isAdmin,
      isAuthenticated: this.isAuthenticated,
      isAccessValid: this.isAccessValid
    })
  }
}
</script>

<style scoped>
.unlock-toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
}

/* Botão toggle minimizado */
.unlock-toggle {
  min-width: 100px;
  height: 45px;
  border-radius: 22px;
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(106, 90, 205, 0.4);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 16px;
  font-weight: 600;
  font-size: 0.9rem;
}

.unlock-toggle i {
  font-size: 1.1rem;
}

.unlock-toggle-text {
  font-size: 0.85rem;
  font-weight: 600;
}

.unlock-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(106, 90, 205, 0.5);
}

/* Toast expandido */
.unlock-toast.expanded {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 20px;
  min-width: 320px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border: 2px solid var(--color-primary);
}

.unlock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.unlock-header-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.unlock-header-icon {
  color: var(--color-primary);
  font-size: 1.2rem;
}

.unlock-title {
  font-weight: 700;
  color: var(--color-dark);
  font-size: 1.1rem;
}

.unlock-description {
  margin-bottom: 16px;
}

.unlock-description p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 4px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #f0f0f0;
  color: var(--color-primary);
}

.close-btn i {
  font-size: 1.2rem;
}

.unlock-form {
  margin-bottom: 12px;
}

.input-wrapper {
  display: flex;
  gap: 0;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.input-wrapper:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.1);
}

.unlock-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  font-size: 0.95rem;
  background: white;
  color: var(--color-dark);
}

.unlock-input:focus {
  outline: none;
}

.unlock-input::placeholder {
  color: #999;
  font-style: italic;
}

.unlock-btn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
}

.unlock-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
}

.unlock-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.unlock-btn i {
  font-size: 1.1rem;
}

.unlock-error {
  background: #fee;
  color: #c33;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-bottom: 8px;
  border: 1px solid #fcc;
}

.unlock-info {
  text-align: center;
}

.unlock-info small {
  color: #666;
  font-size: 0.8rem;
}

.link-btn {
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  text-decoration: underline;
  font-size: inherit;
}

.link-btn:hover {
  color: #4facfe;
}

/* Timer de acesso */
.access-timer-toast {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.85rem;
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
}


.revoke-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.revoke-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Responsivo */
@media (max-width: 768px) {
  .unlock-toast {
    bottom: 15px;
    right: 15px;
  }

  .unlock-toast.expanded {
    min-width: 280px;
    padding: 16px;
    border-radius: 12px;
  }

  /* Keep text on mobile but make it smaller */
  .unlock-toggle {
    min-width: 85px;
    height: 48px;
    padding: 0 12px;
    border-radius: 24px;
  }

  .unlock-toggle i {
    font-size: 1rem;
  }

  .unlock-toggle-text {
    font-size: 0.8rem;
  }

  /* Improve touch targets */
  .close-btn {
    width: 32px;
    height: 32px;
    padding: 6px;
  }

  .close-btn i {
    font-size: 1.1rem;
  }

  .unlock-btn {
    min-width: 56px;
    padding: 14px 18px;
  }

  .unlock-input {
    padding: 14px 16px;
    font-size: 16px; /* Prevent zoom on iOS */
  }

  .input-wrapper {
    border-radius: 10px;
  }
}

@media (max-width: 480px) {
  .unlock-toast {
    bottom: 12px;
    right: 12px;
    left: 12px;
  }

  .unlock-toast.expanded {
    min-width: auto;
    width: calc(100vw - 24px);
    max-width: none;
    padding: 18px;
  }

  /* Larger toggle for small screens */
  .unlock-toggle {
    min-width: 90px;
    height: 50px;
    margin: 0 auto;
  }

  .unlock-header {
    margin-bottom: 18px;
  }

  .unlock-title {
    font-size: 1rem;
  }

  .unlock-description p {
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .unlock-form {
    margin-bottom: 16px;
  }

  .unlock-input {
    font-size: 16px;
    padding: 16px;
  }

  .unlock-btn {
    min-width: 60px;
    padding: 16px 20px;
  }

  .unlock-info small {
    font-size: 0.75rem;
  }

  /* Better access timer positioning */
  .access-timer-toast {
    padding: 10px 14px;
    font-size: 0.8rem;
    border-radius: 10px;
  }

  .revoke-btn {
    padding: 6px 10px;
    min-width: 40px;
    border-radius: 6px;
  }
}
</style>