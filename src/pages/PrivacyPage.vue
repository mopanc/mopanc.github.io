<template>
  <div class="privacy-page">
    <div class="container-narrow">
      <div class="privacy-header">
        <h1>{{ translations.privacy_policy || 'Privacy Policy' }}</h1>
        <p class="last-updated">{{ translations.last_updated || 'Last updated' }}: {{ lastUpdated }}</p>
      </div>

      <div class="privacy-content">
        <section class="privacy-section">
          <h2>{{ translations.data_collection_title || 'What Information We Collect' }}</h2>
          <p>{{ translations.data_collection_desc || 'This website collects minimal information to provide essential functionality:' }}</p>
          <ul>
            <li><strong>{{ translations.language_pref || 'Language Preference' }}:</strong> {{ translations.language_pref_desc || 'Stored locally to remember your language choice.' }}</li>
            <li><strong>{{ translations.theme_pref || 'Theme Preference' }}:</strong> {{ translations.theme_pref_desc || 'Stored locally to remember your dark/light theme choice.' }}</li>
            <li><strong>{{ translations.auth_tokens || 'Authentication Tokens' }}:</strong> {{ translations.auth_tokens_desc || 'Temporary access codes for premium content (expires after 4 hours).' }}</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>{{ translations.how_we_use_title || 'How We Use This Information' }}</h2>
          <p>{{ translations.how_we_use_desc || 'The information is used solely for:' }}</p>
          <ul>
            <li>{{ translations.use_functionality || 'Providing basic website functionality' }}</li>
            <li>{{ translations.use_preferences || 'Remembering your preferences between visits' }}</li>
            <li>{{ translations.use_security || 'Securing access to premium portfolio content' }}</li>
          </ul>
          <p>{{ translations.no_tracking || 'We do not use analytics, tracking, or advertising cookies.' }}</p>
        </section>

        <section class="privacy-section">
          <h2>{{ translations.cookie_types_title || 'Types of Cookies' }}</h2>

          <div class="cookie-type">
            <h3>
              <i class="ri-shield-check-fill"></i>
              {{ translations.essential_cookies || 'Essential Cookies' }}
            </h3>
            <p>{{ translations.essential_cookies_desc || 'Required for basic website functionality. These cannot be disabled.' }}</p>
            <ul>
              <li><code>cookie-consent</code> - {{ translations.consent_cookie || 'Stores your cookie preference' }}</li>
            </ul>
          </div>

          <div class="cookie-type">
            <h3>
              <i class="ri-settings-3-line"></i>
              {{ translations.functional_cookies || 'Functional Cookies' }}
            </h3>
            <p>{{ translations.functional_cookies_desc || 'Enhance your experience by remembering preferences. You can reject these.' }}</p>
            <div class="impact-note">
              <i class="ri-alert-line"></i>
              <span>{{ translations.functional_impact_note || 'Note: Rejecting functional cookies means theme and authentication preferences won\'t be saved between sessions.' }}</span>
            </div>
            <ul>
              <li><code>selectedLanguage</code> - {{ translations.language_cookie || 'Your preferred language (EN/PT)' }}</li>
              <li><code>theme-preference</code> - {{ translations.theme_cookie || 'Your preferred theme (light/dark)' }}</li>
              <li><code>portfolioAccessCode</code> - {{ translations.access_cookie || 'Temporary access token for premium content' }}</li>
              <li><code>portfolioAccessExpiry</code> - {{ translations.expiry_cookie || 'Expiration time for access token' }}</li>
            </ul>
          </div>
        </section>

        <section class="privacy-section">
          <h2>{{ translations.data_storage_title || 'Data Storage' }}</h2>
          <p>{{ translations.data_storage_desc || 'All data is stored locally in your browser (localStorage). We do not transmit or store this information on external servers.' }}</p>
        </section>

        <section class="privacy-section">
          <h2>{{ translations.third_party_title || 'Third-Party Services' }}</h2>
          <p>{{ translations.third_party_desc || 'This website does not use third-party analytics, advertising, or tracking services.' }}</p>
        </section>

        <section class="privacy-section">
          <h2>{{ translations.your_rights_title || 'Your Rights' }}</h2>
          <p>{{ translations.your_rights_desc || 'You have the right to:' }}</p>
          <ul>
            <li>{{ translations.right_access || 'Access the data stored about you (viewable in browser developer tools)' }}</li>
            <li>{{ translations.right_delete || 'Delete all stored data by clearing browser storage or clicking below' }}</li>
            <li>{{ translations.right_withdraw || 'Withdraw consent at any time' }}</li>
          </ul>

          <div class="action-buttons">
            <button @click="clearAllData" class="btn btn-danger">
              <i class="ri-delete-bin-line"></i>
              {{ translations.clear_all_data || 'Clear All Data' }}
            </button>
            <button @click="resetConsent" class="btn btn-primary">
              <i class="ri-refresh-line"></i>
              {{ translations.reset_consent || 'Reset Cookie Consent' }}
            </button>
          </div>
        </section>

        <section class="privacy-section">
          <h2>{{ translations.privacy_contact_title || 'Contact' }}</h2>
          <p>{{ translations.contact_desc || 'For privacy-related questions, contact:' }}</p>
          <div class="contact-info">
            <a href="mailto:jorgemopanc@icloud.com" class="contact-link">
              <i class="ri-mail-line"></i>
              jorgemopanc@icloud.com
            </a>
          </div>
        </section>
      </div>

      <div class="privacy-footer">
        <router-link to="/" class="back-link">
          <i class="ri-arrow-left-line"></i>
          {{ translations.back_home || 'Back to Home' }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { useCookieConsent } from '../composables/useCookieConsent'

export default {
  name: 'PrivacyPage',
  setup() {
    const { translations } = useLanguage()
    const { resetConsent } = useCookieConsent()

    const lastUpdated = computed(() => {
      const date = new Date('2024-09-27')
      return date.toLocaleDateString(translations.value.lang === 'pt' ? 'pt-PT' : 'en-GB')
    })

    const clearAllData = () => {
      if (confirm(translations.value.clear_data_confirm || 'Are you sure you want to clear all stored data? This will reset all preferences.')) {
        try {
          localStorage.clear()
          alert(translations.value.data_cleared || 'All data has been cleared.')
          window.location.reload()
        } catch (error) {
          console.error('Error clearing data:', error)
          alert(translations.value.clear_error || 'Error clearing data. Please clear manually in browser settings.')
        }
      }
    }

    return {
      translations,
      lastUpdated,
      clearAllData,
      resetConsent
    }
  }
}
</script>

<style scoped>
.privacy-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 80px 0 40px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.privacy-header {
  text-align: center;
  margin-bottom: 50px;
}

.privacy-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin: 0 0 15px;
}

.last-updated {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.privacy-content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.privacy-section {
  padding: 30px;
  border-bottom: 1px solid #f0f0f0;
}

.privacy-section:last-child {
  border-bottom: none;
}

.privacy-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-dark);
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.privacy-section h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-dark);
  margin: 25px 0 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.privacy-section h3 i {
  color: var(--color-primary);
  font-size: 1.3rem;
}

.privacy-section p {
  color: #555;
  line-height: 1.7;
  margin: 0 0 15px;
}

.privacy-section ul {
  color: #555;
  line-height: 1.7;
  margin: 15px 0;
  padding-left: 25px;
}

.privacy-section li {
  margin-bottom: 8px;
}

.cookie-type {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  border-left: 4px solid var(--color-primary);
}

.cookie-type code {
  background: #e9ecef;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.85rem;
  color: var(--color-primary);
}

.impact-note {
  background: linear-gradient(135deg, #fff3cd, #ffeaa7);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 8px;
  padding: 12px;
  margin: 15px 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: #856404;
}

.impact-note i {
  color: #f39c12;
  font-size: 1.1rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 25px;
  flex-wrap: wrap;
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
  gap: 8px;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  color: white;
  box-shadow: 0 4px 15px rgba(106, 90, 205, 0.3);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(106, 90, 205, 0.4);
}

.btn-danger {
  background: linear-gradient(135deg, #dc3545, #e85563);
  color: white;
  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
}

.btn-danger:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4);
}

.contact-info {
  margin-top: 15px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.contact-link:hover {
  background: rgba(106, 90, 205, 0.1);
  text-decoration: none;
}

.privacy-footer {
  text-align: center;
  margin-top: 40px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.back-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-decoration: none;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .privacy-page {
    padding: 60px 0 20px;
  }

  .container {
    padding: 0 15px;
  }

  .privacy-header h1 {
    font-size: 2rem;
  }

  .privacy-section {
    padding: 20px;
  }

  .privacy-section h2 {
    font-size: 1.3rem;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .privacy-header h1 {
    font-size: 1.8rem;
  }

  .privacy-section {
    padding: 15px;
  }

  .cookie-type {
    padding: 15px;
  }
}
</style>