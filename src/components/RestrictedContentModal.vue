<template>
  <transition name="modal-fade">
    <div v-if="visible" class="restricted-modal-overlay">
      <!-- Close button in top left -->
      <button @click="closeModal" class="close-modal-btn">
        <i class="ri-close-line"></i>
      </button>

      <!-- Body structure similar to 404 page - full page black -->
      <div class="body_restricted">
          <!-- Lamp with enhanced movement -->
          <div class="lamp__wrap">
            <div class="lamp">
              <div class="cable"></div>
              <div class="cover"></div>
              <div class="in-cover">
                <div class="bulb"></div>
              </div>
            </div>
          </div>

          <!-- Content that appears only when illuminated -->
          <section class="error">
            <div class="error__content">
              <div class="error__message message">
                <h1 class="message__title illuminated-text" :data-text="translations.restricted_modal_title || '🔐 Conteúdo Privado'">{{ translations.restricted_modal_title || '🔐 Conteúdo Privado' }}</h1>
                <p class="message__text illuminated-text" :data-text="translations.restricted_modal_description || 'Se quiser consultar este conteúdo, por favor entre em contacto com o administrador do website.'">{{ translations.restricted_modal_description || 'Se quiser consultar este conteúdo, por favor entre em contacto com o administrador do website.' }}</p>
              </div>

              <div class="error__nav e-nav">
                <button
                  @click="goToContact"
                  class="btn btn--primary illuminated-button"
                >
                  {{ translations.go_to_contact_form || 'Contactar Administrador' }}
                </button>

                <button
                  @click="showAuthTerminal"
                  class="btn btn--secondary illuminated-button"
                >
                  {{ translations.already_have_code || 'Já tenho um código' }}
                </button>
              </div>
            </div>
          </section>
        </div>
    </div>
  </transition>
</template>

<script>
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'RestrictedContentModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    requestedContent: {
      type: String,
      default: ''
    }
  },
  emits: ['close', 'show-auth'],
  setup() {
    const { translations, initialize } = useLanguage()
    return { translations, initialize }
  },
  async mounted() {
    await this.initialize()
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    showAuthTerminal() {
      this.$emit('show-auth')
      this.closeModal()
    },
    goToContact() {
      // Close modal first
      this.closeModal()
      // Navigate to contact page
      this.$router.push('/contact')
    }
  }
}
</script>

<style scoped>
/* Import Remix Icons */
@import url('https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css');

/* Modal overlay - full page black */
.restricted-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: 9999;
}

.close-modal-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-modal-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

/* Dark room base */
.body_restricted {
  background: #000000;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Enhanced lamp animation */
.lamp {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  margin: 0px auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: center top;
  animation: move 6s ease-in-out infinite;
  z-index: 1;
}

@keyframes move {
  0% { transform: rotate(35deg); }
  25% { transform: rotate(-35deg); }
  50% { transform: rotate(40deg); }
  75% { transform: rotate(-40deg); }
  100% { transform: rotate(35deg); }
}

.cable {
  width: 6px;
  height: 130px;
  background: linear-gradient(to bottom, #333, #111);
  border-radius: 3px;
}

.cover {
  width: 140px;
  height: 60px;
  background: linear-gradient(to bottom, #2a2a2a, #000);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: relative;
  z-index: 200;
  box-shadow: 0 5px 20px rgba(0,0,0,0.8);
}

.in-cover {
  width: 100%;
  max-width: 140px;
  height: 15px;
  border-radius: 100%;
  background: #070808;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  bottom: -7px;
  z-index: 100;
}

.bulb {
  width: 35px;
  height: 35px;
  background: radial-gradient(circle, #d2b48c, #c9a876);
  border-radius: 50%;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -15px;
  margin: 0px auto;
  box-shadow:
    0 0 30px 10px rgba(210, 180, 140, 0.8),
    0 0 80px 50px rgba(210, 180, 140, 0.4),
    0 0 120px 80px rgba(210, 180, 140, 0.2),
    0 0 180px 120px rgba(210, 180, 140, 0.1);
  animation: bulbFlicker 2s ease-in-out infinite alternate;
}

@keyframes bulbFlicker {
  0% {
    box-shadow:
      0 0 40px 15px rgba(210, 180, 140, 0.6),
      0 0 120px 80px rgba(210, 180, 140, 0.3),
      0 0 200px 150px rgba(210, 180, 140, 0.15),
      0 0 300px 200px rgba(210, 180, 140, 0.05);
  }
  100% {
    box-shadow:
      0 0 40px 15px rgba(210, 180, 140, 0.9),
      0 0 120px 80px rgba(210, 180, 140, 0.5),
      0 0 200px 150px rgba(210, 180, 140, 0.25),
      0 0 300px 200px rgba(210, 180, 140, 0.15);
  }
}

.lamp__wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Content section */
.error {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.error__content {
  text-align: center;
  max-width: 500px;
  padding: 1.5rem;
}


/* Text that only appears when illuminated */
.illuminated-text {
  color: transparent;
  position: relative;
}

.illuminated-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.9);
  clip-path: circle(100px at 25% 0px);
  animation: lightReveal 6s ease-in-out infinite;
}

@keyframes lightReveal {
  0% { clip-path: circle(100px at 25% 0px); }
  25% { clip-path: circle(100px at 75% 0px); }
  50% { clip-path: circle(100px at 20% 0px); }
  75% { clip-path: circle(100px at 80% 0px); }
  100% { clip-path: circle(100px at 25% 0px); }
}

.message__title {
  font-size: 2.2rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.message__text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}


/* Enhanced buttons */
.error__nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.illuminated-button {
  background: rgba(210, 180, 140, 0.1);
  border: 2px solid rgba(210, 180, 140, 0.3);
  color: rgba(255, 255, 255, 0.8);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  font-size: 0.9rem;
  cursor: pointer;
}

.illuminated-button:hover {
  background: rgba(210, 180, 140, 0.2);
  border-color: rgba(210, 180, 140, 0.6);
  color: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(210, 180, 140, 0.3);
}

.btn--primary {
  background: rgba(210, 180, 140, 0.1) !important;
}

.btn--secondary {
  background: rgba(255, 255, 255, 0.05) !important;
}


.error__message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

/* Ambient particles */
.body_restricted::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(1px 1px at 20px 30px, rgba(210, 180, 140, 0.2), transparent),
    radial-gradient(1px 1px at 40px 70px, rgba(255, 255, 255, 0.05), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(210, 180, 140, 0.1), transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.02), transparent),
    radial-gradient(1px 1px at 160px 120px, rgba(210, 180, 140, 0.15), transparent);
  background-repeat: repeat;
  background-size: 200px 150px;
  animation: float 25s ease-in-out infinite;
  pointer-events: none;
  opacity: 0.4;
  z-index: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  33% { transform: translateY(-8px) translateX(4px); }
  66% { transform: translateY(4px) translateX(-6px); }
}

/* Transition animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Responsive design */
@media (max-width: 768px) {
  .message__title {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .message__text {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .lamp {
    zoom: 0.7;
  }

  .error__nav {
    flex-direction: column;
    align-items: center;
  }

  .illuminated-button {
    width: 200px;
    justify-content: center;
  }

  .restricted-modal-container {
    width: 95%;
    margin: 20px;
  }
}

@media (max-width: 480px) {
  .message__title {
    font-size: 2rem;
  }

  .lamp {
    zoom: 0.5;
  }

  .error__content {
    padding: 1rem;
  }

  .restricted-instructions {
    padding: 1rem;
  }
}
</style>