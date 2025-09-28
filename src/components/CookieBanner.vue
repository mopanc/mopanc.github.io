<template>
  <Transition name="cookie-banner" appear>
    <div v-if="showBanner" class="cookie-banner">
      <div class="cookie-content">
        <div class="cookie-icon">
          <i class="ri-shield-check-line"></i>
        </div>
        <div class="cookie-text">
          <h4>{{ translations.cookie_title || 'Privacy & Cookies' }}</h4>
          <p>{{ translations.cookie_description || 'We use essential cookies for language preferences and authentication. Your privacy matters to us.' }}</p>
        </div>
        <div class="cookie-actions">
          <button @click="acceptCookies" class="btn btn-accept">
            <i class="ri-check-line"></i>
            {{ translations.accept_cookies || 'Accept' }}
          </button>
          <button @click="rejectCookies" class="btn btn-reject">
            <i class="ri-close-line"></i>
            {{ translations.reject_cookies || 'Reject' }}
          </button>
          <button @click="showDetails = !showDetails" class="btn btn-details">
            <i class="ri-information-line"></i>
            {{ translations.cookie_details || 'Details' }}
          </button>
        </div>
      </div>

      <!-- Expandable details -->
      <Transition name="cookie-details">
        <div v-if="showDetails" class="cookie-details">
          <div class="detail-section">
            <h5>
              <i class="ri-shield-check-fill"></i>
              {{ translations.essential_cookies || 'Essential Cookies' }}
            </h5>
            <p>{{ translations.essential_description || 'Required for basic functionality like language preferences and security.' }}</p>
          </div>
          <div class="detail-section">
            <h5>
              <i class="ri-settings-3-line"></i>
              {{ translations.functional_cookies || 'Functional Cookies' }}
            </h5>
            <p>{{ translations.functional_description || 'Store your preferences like theme and authentication status for better experience.' }}</p>
          </div>

          <div class="impact-warning">
            <div class="warning-icon">
              <i class="ri-information-line"></i>
            </div>
            <div class="warning-content">
              <h6>{{ translations.rejection_impact_title || 'Impact of Rejecting Functional Cookies' }}</h6>
              <p>{{ translations.rejection_impact || 'If you reject functional cookies: theme preferences won\'t be saved, authentication codes won\'t persist, but language selection will still work.' }}</p>
            </div>
          </div>
          <div class="privacy-link">
            <router-link to="/privacy" class="privacy-btn">
              <i class="ri-file-text-line"></i>
              {{ translations.privacy_policy || 'Privacy Policy' }}
            </router-link>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script>
import { ref } from 'vue'
import { useCookieConsent } from '../composables/useCookieConsent'
import { useLanguage } from '../composables/useLanguage'

export default {
  name: 'CookieBanner',
  setup() {
    const { translations } = useLanguage()
    const {
      showBanner,
      acceptCookies: accept,
      rejectCookies: reject
    } = useCookieConsent()

    const showDetails = ref(false)

    const acceptCookies = () => {
      accept()
      showDetails.value = false
    }

    const rejectCookies = () => {
      reject()
      showDetails.value = false
    }

    return {
      translations,
      showBanner,
      showDetails,
      acceptCookies,
      rejectCookies
    }
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0;
  max-height: 80vh;
  overflow-y: auto;
}

.cookie-content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.cookie-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cookie-icon i {
  font-size: 1.5rem;
  color: white;
}

.cookie-text {
  flex: 1;
  min-width: 0;
}

.cookie-text h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-dark);
  margin: 0 0 8px;
}

.cookie-text p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.cookie-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.btn-accept {
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  color: white;
  box-shadow: 0 4px 15px rgba(106, 90, 205, 0.3);
}

.btn-accept:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(106, 90, 205, 0.4);
}

.btn-reject {
  background: #f8f9fa;
  color: var(--color-dark);
  border: 1px solid #e9ecef;
}

.btn-reject:hover {
  background: #e9ecef;
  border-color: #dee2e6;
}

.btn-details {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid rgba(106, 90, 205, 0.3);
}

.btn-details:hover {
  background: rgba(106, 90, 205, 0.1);
  border-color: rgba(106, 90, 205, 0.5);
}

.cookie-details {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(248, 249, 250, 0.8);
}

.detail-section {
  margin-bottom: 20px;
}

.detail-section:last-of-type {
  margin-bottom: 15px;
}

.detail-section h5 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-dark);
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.detail-section h5 i {
  color: var(--color-primary);
  font-size: 1.1rem;
}

.detail-section p {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
  padding-left: 28px;
}

.impact-warning {
  background: linear-gradient(135deg, #fff4e6, #fff0db);
  border: 1px solid rgba(255, 152, 0, 0.3);
  border-radius: 12px;
  padding: 16px;
  margin: 20px 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.warning-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff9800, #f57c00);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.warning-icon i {
  color: white;
  font-size: 1.2rem;
}

.warning-content h6 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #e65100;
  margin: 0 0 8px;
}

.warning-content p {
  font-size: 0.85rem;
  color: #f57c00;
  line-height: 1.5;
  margin: 0;
}

.privacy-link {
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.privacy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.privacy-btn:hover {
  background: rgba(106, 90, 205, 0.1);
  text-decoration: none;
}

/* Transitions */
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: all 0.4s ease;
}

.cookie-banner-enter-from,
.cookie-banner-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.cookie-details-enter-active,
.cookie-details-leave-active {
  transition: all 0.3s ease;
}

.cookie-details-enter-from,
.cookie-details-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  .cookie-icon {
    width: 45px;
    height: 45px;
    align-self: flex-start;
  }

  .cookie-icon i {
    font-size: 1.3rem;
  }

  .cookie-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    justify-content: center;
    padding: 14px 20px;
  }

  .cookie-details {
    padding: 15px 20px;
  }

  .detail-section p {
    padding-left: 24px;
  }

  .impact-warning {
    margin: 15px 0;
    padding: 12px;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }

  .warning-icon {
    width: 35px;
    height: 35px;
    margin: 0 auto;
  }

  .warning-content h6 {
    font-size: 0.9rem;
  }

  .warning-content p {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .cookie-content {
    padding: 15px;
  }

  .cookie-details {
    padding: 12px 15px;
  }

  .cookie-text h4 {
    font-size: 1rem;
  }

  .cookie-text p {
    font-size: 0.85rem;
  }

  .btn {
    font-size: 0.85rem;
    padding: 12px 16px;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .cookie-banner {
    background: rgba(30, 30, 30, 0.98);
    border-top-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3);
  }

  .cookie-text h4 {
    color: #fff;
  }

  .cookie-text p {
    color: #ccc;
  }

  .btn-reject {
    background: #2a2a2a;
    color: #fff;
    border-color: #444;
  }

  .btn-reject:hover {
    background: #333;
    border-color: #555;
  }

  .cookie-details {
    background: rgba(40, 40, 40, 0.8);
    border-top-color: rgba(255, 255, 255, 0.1);
  }

  .detail-section h5 {
    color: #fff;
  }

  .detail-section p {
    color: #ccc;
  }

  .privacy-link {
    border-top-color: rgba(255, 255, 255, 0.1);
  }
}
</style>