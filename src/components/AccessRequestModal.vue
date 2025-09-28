<template>
  <Transition name="modal" appear>
    <div v-if="visible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-icon">
            <i class="ri-lock-unlock-line"></i>
          </div>
          <h3 class="modal-title">{{ translations.access_required_title || 'Premium Content Access Required' }}</h3>
          <button @click="closeModal" class="modal-close">
            <i class="ri-close-line"></i>
          </button>
        </div>

        <div class="modal-body">
          <p class="modal-description">
            {{ translations.access_required_description || 'This content contains premium professional information and requires authorized access.' }}
          </p>

          <div class="access-options">
            <div class="access-option primary">
              <div class="option-icon">
                <i class="ri-mail-line"></i>
              </div>
              <div class="option-content">
                <h4>{{ translations.contact_for_access || 'Request Access' }}</h4>
                <p>{{ translations.contact_description || 'Contact me directly to discuss access to premium content and portfolio details.' }}</p>
              </div>
            </div>

            <div class="access-option secondary">
              <div class="option-icon">
                <i class="ri-key-line"></i>
              </div>
              <div class="option-content">
                <h4>{{ translations.have_access_code || 'Have an Access Code?' }}</h4>
                <p>{{ translations.access_code_description || 'If you already have an access code, use the authentication terminal.' }}</p>
              </div>
            </div>
          </div>

          <div class="contact-info">
            <div class="contact-item">
              <i class="ri-mail-line"></i>
              <span>jorgemopanc@icloud.com</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button @click="goToContact" class="btn btn-primary">
            <i class="ri-send-plane-line"></i>
            {{ translations.go_to_contact || 'Go to Contact Page' }}
          </button>
          <button @click="showAuth" class="btn btn-secondary">
            <i class="ri-terminal-line"></i>
            {{ translations.use_access_code || 'Use Access Code' }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { useLanguage } from '../composables/useLanguage'

export default {
  name: 'AccessRequestModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    contentType: {
      type: String,
      default: 'content' // 'content', 'project', 'experience'
    }
  },
  setup() {
    const { translations } = useLanguage()
    return { translations }
  },
  emits: ['close', 'goToContact', 'showAuth'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
    goToContact() {
      this.$emit('goToContact')
      this.closeModal()
    },
    showAuth() {
      this.$emit('showAuth')
      this.closeModal()
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 520px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  padding: 30px 30px 20px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
}

.modal-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 8px 25px rgba(106, 90, 205, 0.3);
}

.modal-icon i {
  font-size: 2rem;
  color: white;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin: 0 0 10px;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f8f9fa;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #666;
}

.modal-close:hover {
  background: #e9ecef;
  color: var(--color-primary);
  transform: scale(1.1);
}

.modal-close i {
  font-size: 1.2rem;
}

.modal-body {
  padding: 20px 30px;
}

.modal-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  text-align: center;
  margin: 0 0 30px;
}

.access-options {
  display: grid;
  gap: 16px;
  margin-bottom: 30px;
}

.access-option {
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.access-option.primary {
  background: linear-gradient(135deg, #f8f9ff, #f0f2ff);
  border: 2px solid rgba(106, 90, 205, 0.1);
}

.access-option.secondary {
  background: linear-gradient(135deg, #f8fffe, #f0fffd);
  border: 2px solid rgba(0, 200, 180, 0.1);
}

.access-option:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.access-option.primary:hover {
  border-color: rgba(106, 90, 205, 0.3);
}

.access-option.secondary:hover {
  border-color: rgba(0, 200, 180, 0.3);
}

.option-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.access-option.primary .option-icon {
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  color: white;
}

.access-option.secondary .option-icon {
  background: linear-gradient(135deg, #00c8b4, #00a693);
  color: white;
}

.option-icon i {
  font-size: 1.3rem;
}

.option-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-dark);
  margin: 0 0 8px;
}

.option-content p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.contact-info {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1rem;
  color: var(--color-dark);
  font-weight: 500;
}

.contact-item i {
  color: var(--color-primary);
  font-size: 1.2rem;
}

.modal-footer {
  padding: 20px 30px 30px;
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn {
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  color: white;
  box-shadow: 0 4px 15px rgba(106, 90, 205, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(106, 90, 205, 0.4);
}

.btn-secondary {
  background: #f8f9fa;
  color: var(--color-dark);
  border: 2px solid #e9ecef;
}

.btn-secondary:hover {
  background: #e9ecef;
  border-color: #dee2e6;
  transform: translateY(-2px);
}

.btn i {
  font-size: 1rem;
}

/* Transitions */
.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 15px;
  }

  .modal-content {
    border-radius: 16px;
  }

  .modal-header {
    padding: 25px 20px 15px;
  }

  .modal-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }

  .modal-icon i {
    font-size: 1.7rem;
  }

  .modal-title {
    font-size: 1.3rem;
  }

  .modal-body {
    padding: 15px 20px;
  }

  .modal-description {
    font-size: 0.95rem;
    margin-bottom: 25px;
  }

  .access-option {
    padding: 16px;
    gap: 12px;
  }

  .option-icon {
    width: 45px;
    height: 45px;
  }

  .option-content h4 {
    font-size: 1rem;
  }

  .option-content p {
    font-size: 0.85rem;
  }

  .modal-footer {
    padding: 15px 20px 25px;
    flex-direction: column;
  }

  .btn {
    padding: 16px 20px;
    min-width: auto;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 10px;
    align-items: stretch;
  }

  .modal-content {
    border-radius: 12px;
    margin: auto 0;
  }

  .modal-header {
    padding: 20px 15px 12px;
  }

  .modal-body {
    padding: 12px 15px;
  }

  .modal-footer {
    padding: 12px 15px 20px;
  }

  .contact-info {
    padding: 16px;
  }

  .access-option {
    padding: 14px;
  }
}
</style>