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
            class="btn btn--primary cv-btn terminal-btn"
          >
            <i class="ri-terminal-line"></i>
            {{ translations.view_terminal || 'View CV' }}
          </button>
          <button
            @click="handleDownload"
            class="btn btn--secondary cv-btn"
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
  padding: 3rem 0;
  background: var(--color-bg-secondary);
}

.cv-download-card {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 3rem;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: var(--transition);
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
  font-size: 3rem;
  color: var(--color-primary);
}

.cv-text h3 {
  color: var(--color-white);
  font-size: var(--fs-xl);
  margin-bottom: 0.5rem;
}

.cv-text p {
  color: var(--color-text);
  font-size: var(--fs-md);
  line-height: 1.5;
}

.cv-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 200px;
}

.cv-btn {
  padding: 1rem 1.5rem;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.cv-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.terminal-btn {
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  border: 1px solid #4facfe;
  color: #4facfe;
  position: relative;
  overflow: hidden;
}

.terminal-btn:hover {
  background: linear-gradient(135deg, #2d2d2d 0%, #1e1e1e 100%);
  border-color: #4facfe;
  box-shadow: 0 0 20px rgba(66, 146, 168, 0.3);
  transform: translateY(-1px);
}

.terminal-btn:active {
  transform: translateY(0);
}

.terminal-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 196, 255, 0.1), transparent);
  transition: left 0.5s;
}

.terminal-btn:hover::before {
  left: 100%;
}

/* Alternatives */
.cv-alternatives {
  text-align: center;
  margin-top: 2rem;
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
}

.alternative-link:hover {
  color: var(--color-white);
  transform: translateY(-1px);
}

.alternative-link i {
  font-size: 1.2rem;
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
    flex-direction: column;
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