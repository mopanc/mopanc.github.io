<template>
  <section class="download-cv-section">
    <div class="container-wide">
      <div class="cv-download-card">
        <div class="cv-content">
          <div class="cv-icon">
            <i class="ri-terminal-box-line"></i>
          </div>
          <div class="cv-text">
            <h3>{{ translations.download_cv || 'Access My CV' }}</h3>
            <p>{{ translations.cv_description || 'View my professional resume in an interactive terminal or download as PDF.' }}</p>
          </div>
        </div>
        <div class="cv-actions">
          <button
            @click="openTerminalCV"
            class="btn btn--outline btn--sm"
          >
            <i class="ri-terminal-line"></i>
            {{ translations.view_terminal || 'View CV' }}
          </button>
          <button
            @click="handleDownload"
            class="btn btn--secondary btn--sm"
            :disabled="isDownloading"
          >
            <span v-if="!isDownloading">
              <i class="ri-download-line"></i>
              {{ translations.download_pdf || 'Download PDF' }}
            </span>
            <span v-else>
              <i class="ri-loader-4-line animate-spin"></i>
              {{ translations.downloading || 'Downloading...' }}
            </span>
          </button>
        </div>
      </div>

      <!-- Alternative download options -->
      <div class="cv-alternatives">
        <p class="alternatives-text">{{ translations.or_view_online || 'Or view online:' }}</p>
        <div class="alternatives-links">
          <a
            href="https://www.linkedin.com/in/jorge-mopanc/"
            target="_blank"
            rel="noopener noreferrer"
            class="alternative-link"
          >
            <i class="ri-linkedin-fill"></i>
            {{ translations.linkedin_profile || 'LinkedIn Profile' }}
          </a>
          <a
            href="https://github.com/mopanc"
            target="_blank"
            rel="noopener noreferrer"
            class="alternative-link"
          >
            <i class="ri-github-fill"></i>
            {{ translations.github_profile || 'GitHub Profile' }}
          </a>
        </div>
      </div>

    </div>
  </section>

  <!-- Success/Error Toast - Teleport to body for fixed positioning -->
  <Teleport to="body">
    <div v-if="showToast" class="download-toast" :class="toastType">
      <div class="toast-content">
        <i :class="toastIcon"></i>
        <span>{{ toastMessage }}</span>
        <button @click="closeToast" class="toast-close">
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  </Teleport>

  <!-- Terminal Modal - Teleport to body to avoid CSS conflicts -->
  <Teleport to="body">
    <TerminalModal
      :isOpen="showTerminalModal"
      @close="closeTerminalModal"
      @downloadPDF="handleDownload"
    />
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { useDownload } from '../composables/useDownload.js'
import TerminalModal from './TerminalModal.vue'

const { translations, initialize } = useLanguage()
// const { } = useDownload() // Available for future use
useDownload() // Initialize for future use

const isDownloading = ref(false)
const showToast = ref(false)
const toastType = ref('success') // 'success' or 'error'
const toastMessage = ref('')
const showTerminalModal = ref(false)

const toastIcon = computed(() => {
  return toastType.value === 'success'
    ? 'ri-check-circle-line'
    : 'ri-error-warning-line'
})

const openTerminalCV = () => {
  showTerminalModal.value = true
}

const closeTerminalModal = () => {
  showTerminalModal.value = false
}

const handleDownload = async () => {
  isDownloading.value = true

  try {
    // Create a link to download the PDF
    const link = document.createElement('a')
    link.href = '/cv/jorge-morais-cv.pdf' // Path to your PDF
    link.download = 'Jorge-Morais-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toastType.value = 'success'
    toastMessage.value = translations.cv_downloaded || 'CV downloaded successfully!'
    showToast.value = true

    setTimeout(() => {
      showToast.value = false
    }, 3000)

  } catch (error) {
    console.error('Download failed:', error)
    toastType.value = 'error'
    toastMessage.value = translations.download_error || 'PDF not available yet. Please view the terminal CV or contact me directly.'
    showToast.value = true

    setTimeout(() => {
      showToast.value = false
    }, 5000)

  } finally {
    isDownloading.value = false
  }
}


const closeToast = () => {
  showToast.value = false
}

onMounted(async () => {
  await initialize()
})
</script>

<style scoped>
.download-cv-section {
  padding: 4rem 0;
  background: transparent;
}

.cv-download-card {
  position: relative;
  background: linear-gradient(160deg, rgba(20, 28, 38, 0.9), rgba(10, 14, 20, 0.95));
  border: 1px solid rgba(74, 134, 232, 0.25);
  border-radius: 18px;
  padding: 3rem;
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 2rem;
  transition: var(--transition);
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.cv-download-card::before {
  content: "";
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle at 20% 20%, rgba(74, 134, 232, 0.25), transparent 45%);
  opacity: 0.7;
  pointer-events: none;
}

.cv-download-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cv-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.cv-icon {
  font-size: 2.6rem;
  color: var(--color-primary);
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(74, 134, 232, 0.15);
  border: 1px solid rgba(74, 134, 232, 0.25);
}

.cv-text h3 {
  color: var(--color-white);
  font-size: clamp(1.4rem, 2.2vw, 1.8rem);
  margin-bottom: 0.5rem;
}

.cv-text p {
  color: var(--color-text);
  font-size: 1.1rem;
  line-height: 1.6;
}

.cv-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 220px;
}

/* btn--outline and btn--secondary styles from global design system */

/* Alternatives */
.cv-alternatives {
  text-align: center;
  margin-top: 2.5rem;
}

.alternatives-text {
  color: var(--color-text);
  margin-bottom: 1rem;
  font-size: var(--fs-sm);
}

.alternatives-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.alternative-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  text-decoration: none;
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  transition: var(--transition);
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.03);
}

.alternative-link:hover {
  color: var(--color-white);
  transform: translateY(-1px);
  border-color: var(--color-primary);
}

.alternative-link i {
  font-size: 1.2rem;
}

.theme-light .cv-download-card {
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.96), rgba(237, 241, 246, 0.92));
  border-color: rgba(63, 118, 210, 0.2);
  box-shadow: 0 26px 50px rgba(30, 42, 56, 0.12);
}

.theme-light .cv-icon {
  background: rgba(63, 118, 210, 0.12);
  border-color: rgba(63, 118, 210, 0.25);
  color: var(--color-primary);
}


.theme-light .alternative-link {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(63, 118, 210, 0.18);
  color: var(--color-primary);
}

/* Toast Notification */
.download-toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  z-index: 1000;
  animation: slideUp 0.3s ease-out;
  max-width: 350px;
}

.download-toast.success {
  background: #27ae60;
  color: white;
}

.download-toast.error {
  background: #e74c3c;
  color: white;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toast-content i {
  font-size: 1.2rem;
}

.toast-content span {
  flex: 1;
  font-size: var(--fs-sm);
}

.toast-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  font-size: 1.1rem;
  opacity: 0.8;
}

.toast-close:hover {
  opacity: 1;
}

/* Animations */
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .cv-download-card {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;
  }

  .cv-actions {
    width: 100%;
  }

  .alternatives-links {
    flex-direction: column;
    gap: 1rem;
  }

  .download-toast {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .cv-download-card {
    padding: 1.5rem;
  }

  .cv-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .cv-btn {
    padding: 0.8rem 1.2rem;
  }
}
</style>
