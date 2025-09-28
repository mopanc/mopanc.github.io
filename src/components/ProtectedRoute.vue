<template>
  <div class="protected-route">
    <div v-if="isAccessValid || showPreview" class="protected-content">
      <slot></slot>

      <!-- Preview mode: show authorization request section -->
      <div v-if="!isAccessValid && showPreview" class="preview-authorization">
        <div class="preview-authorization__container">
          <div class="preview-authorization__content">
            <div class="preview-authorization__header">
              <h3>
                <i class="ri-eye-line"></i>
                Quer ver mais projetos?
              </h3>
              <p>
                Mostrei apenas alguns projetos como exemplo. Tenho muito mais para partilhar!
              </p>
            </div>

            <div class="preview-authorization__info">
              <div class="preview-authorization__stats">
                <div class="stat-item">
                  <span class="stat-number">{{ totalProjects }}</span>
                  <span class="stat-label">Projetos Total</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ visibleProjects }}</span>
                  <span class="stat-label">Visíveis Agora</span>
                </div>
              </div>

              <div class="preview-authorization__actions">
                <button @click="requestAccess" class="btn btn--primary">
                  <i class="ri-mail-send-line"></i>
                  Solicitar Acesso Completo
                </button>

                <button @click="showUnlockToast" class="btn btn--secondary">
                  <i class="ri-key-line"></i>
                  Tenho um Código
                </button>
              </div>

              <div class="preview-authorization__note">
                <i class="ri-shield-check-line"></i>
                <span>Acesso garantido em menos de 24h através do formulário de contacto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="access-denied">
      <div class="access-denied__container">
        <div class="access-denied__content">
          <div class="access-denied__icon">
            🔒
          </div>

          <h1 class="access-denied__title">Conteúdo Protegido</h1>

          <p class="access-denied__message">
            Este conteúdo requer um código de acesso válido para visualização.
          </p>

          <div class="access-denied__actions">
            <button @click="showUnlockToast" class="btn btn--primary">
              <i class="ri-key-line"></i>
              Inserir Código
            </button>

            <button @click="goHome" class="btn btn--secondary">
              <i class="ri-home-line"></i>
              Voltar ao Início
            </button>
          </div>

          <div class="access-denied__info">
            <p>
              <i class="ri-information-line"></i>
              Não possui um código de acesso?
              <router-link to="/contact" class="access-link">Solicite aqui</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAccessControlSimple } from '../composables/useAccessControlSimple'
import { useRouter } from 'vue-router'

export default {
  name: 'ProtectedRoute',
  props: {
    showPreview: {
      type: Boolean,
      default: false
    },
    totalProjects: {
      type: Number,
      default: 0
    },
    visibleProjects: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const { isAccessValid } = useAccessControlSimple()
    const router = useRouter()

    const showUnlockToast = () => {
      const miniTerminal = document.querySelector('.terminal-toggle')
      if (miniTerminal) {
        miniTerminal.scrollIntoView({ behavior: 'smooth', block: 'center' })
        miniTerminal.style.animation = 'pulse 0.6s ease-in-out 3'

        setTimeout(() => {
          miniTerminal.style.animation = ''
          // Trigger terminal opening
          miniTerminal.click()
        }, 1500)
      }
    }

    const goHome = () => {
      router.push('/')
    }

    const requestAccess = () => {
      router.push('/contact')
    }

    return {
      isAccessValid,
      showUnlockToast,
      goHome,
      requestAccess,
      forceUpdate
    }
  }
}
</script>

<style scoped>
.protected-route {
  min-height: 100vh;
}

.protected-content {
  width: 100%;
}

.access-denied {
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.access-denied__container {
  max-width: 600px;
  width: 100%;
}

.access-denied__content {
  background: var(--color-bg-secondary);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  border: 1px solid var(--color-border);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.access-denied__icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.access-denied__title {
  color: var(--color-white);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.access-denied__message {
  color: var(--color-text);
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.access-denied__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn--primary {
  background: var(--color-primary);
  color: white;
}

.btn--primary:hover {
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(106, 90, 205, 0.3);
}

.btn--secondary {
  background: transparent;
  color: var(--color-text);
  border: 2px solid var(--color-border);
}

.btn--secondary:hover {
  background: var(--color-border);
  color: var(--color-white);
  transform: translateY(-2px);
}

.access-denied__info {
  color: var(--color-text);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.access-denied__info i {
  color: var(--color-primary);
}

.access-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.access-link:hover {
  text-decoration: underline;
}

/* Preview Authorization Section */
.preview-authorization {
  margin-top: 3rem;
  padding: 2rem 0;
}

.preview-authorization__container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.preview-authorization__content {
  background: linear-gradient(135deg, var(--color-bg-secondary), rgba(106, 90, 205, 0.05));
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  border: 2px solid var(--color-primary);
  box-shadow: 0 10px 40px rgba(106, 90, 205, 0.1);
  position: relative;
}

.preview-authorization__content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), #4facfe, var(--color-primary));
  border-radius: 20px 20px 0 0;
}

.preview-authorization__header h3 {
  color: var(--color-white);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.preview-authorization__header i {
  color: var(--color-primary);
  font-size: 2.2rem;
}

.preview-authorization__header p {
  color: var(--color-text);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.preview-authorization__stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
}

.preview-authorization__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.preview-authorization__note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-size: 0.9rem;
  padding: 1rem;
  background: rgba(106, 90, 205, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(106, 90, 205, 0.2);
}

.preview-authorization__note i {
  color: #27ae60;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .access-denied {
    padding: 1rem;
  }

  .access-denied__content {
    padding: 2rem;
  }

  .access-denied__title {
    font-size: 2rem;
  }

  .access-denied__message {
    font-size: 1rem;
  }

  .access-denied__actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 280px;
  }

  .access-denied__info {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .access-denied__content {
    padding: 1.5rem;
  }

  .access-denied__icon {
    font-size: 3rem;
  }

  .access-denied__title {
    font-size: 1.8rem;
  }
}
</style>