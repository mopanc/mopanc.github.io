<template>
  <!-- Terminal Toggle Button -->
  <button
    v-if="!isAccessValid"
    @click="openTerminal"
    class="terminal-toggle"
    :title="translations.terminal_auth_access || 'Autenticação de Acesso'"
  >
    <i class="ri-terminal-line"></i>
    <span>{{ translations.authenticate || 'Authenticate' }}</span>
  </button>

  <!-- Authenticated Status Button -->
  <button
    v-if="isAccessValid"
    @click="showAuthInfo"
    class="terminal-toggle terminal-toggle--authenticated"
    :title="translations.terminal_system_authorized || 'Terminal de Sistema - Acesso Autorizado'"
  >
    <i class="ri-shield-check-line"></i>
    <span>{{ formatTime(timeRemaining) }}</span>
  </button>

  <!-- Terminal Modal -->
  <Transition name="modal-fade">
    <div v-if="isOpen" class="terminal-modal-overlay" @click="closeTerminal">
      <div class="terminal-window" @click.stop>
        <!-- Terminal Window Frame -->
        <div class="terminal-header">
          <div class="terminal-controls">
            <button class="terminal-btn close" @click="closeTerminal">
              <span></span>
            </button>
            <button class="terminal-btn minimize">
              <span></span>
            </button>
            <button class="terminal-btn maximize">
              <span></span>
            </button>
          </div>
          <div class="terminal-title">
            <span>jorge@portfolio:~$ auth --access-control</span>
          </div>
        </div>

        <!-- Terminal Body -->
        <div class="terminal-body" ref="terminalBody">
          <!-- Loading Animation -->
          <div v-if="isLoading" class="terminal-loading">
            <div class="loading-text">
              <span>jorge@portfolio:~$ </span>
              <span class="loading-dots">{{ translations.initializing_auth_system || 'Inicializando sistema de autenticação' }}</span>
              <span class="cursor">|</span>
            </div>
            <div class="loading-progress">
              <div class="progress-bar" :style="{ width: loadingProgress + '%' }"></div>
            </div>
          </div>

          <!-- Terminal Content -->
          <div v-else class="terminal-content">
            <!-- Terminal Output Lines -->
            <div class="terminal-output">
              <div
                v-for="(line, index) in terminalLines"
                :key="`line-${index}`"
                class="terminal-line"
                :class="line.type"
              >
                <span v-if="line.showPrompt" class="prompt">jorge@portfolio:~$ </span>
                <span class="line-text" v-html="line.text"></span>
                <span v-if="line.showCursor" class="cursor">█</span>
              </div>
            </div>

            <!-- Input Line (when active) -->
            <div v-if="showInput && !isProcessing" class="terminal-input-line">
              <span class="prompt">jorge@portfolio:~$ </span>
              <input
                ref="terminalInput"
                v-model="currentInput"
                @keyup.enter="handleEnter"
                @input="handleInput"
                class="terminal-input"
                :placeholder="inputPlaceholder"
                :disabled="isProcessing"
              />
              <span class="cursor">█</span>
            </div>

            <!-- Processing indicator -->
            <div v-if="isProcessing" class="processing-line">
              <span class="prompt">jorge@portfolio:~$ </span>
              <span>{{ currentInput }}</span>
              <span class="processing-dots">...</span>
            </div>
          </div>
        </div>

        <!-- Terminal Footer -->
        <div class="terminal-footer">
          <div class="terminal-status">
            <span class="status-indicator" :class="isAccessValid ? 'online' : 'offline'"></span>
            <span>{{ isAccessValid ? (translations.authenticated || 'Autenticado') : (translations.not_authenticated || 'Não autenticado') }} - auth-server</span>
          </div>
          <div class="terminal-actions">
            <button v-if="isAccessValid" @click="revokeAccess" class="action-btn">
              <i class="ri-logout-box-line"></i>
              {{ translations.revoke_access || 'Revogar Acesso' }}
            </button>
            <button @click="closeTerminal" class="action-btn">
              <i class="ri-close-line"></i>
              {{ translations.exit || 'Sair' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Expiry Warning Notification -->
  <Transition name="slide-down">
    <div v-if="showExpiryWarning" class="expiry-warning">
      <div class="warning-content">
        <i class="ri-time-line"></i>
        <div class="warning-text">
          <strong>{{ translations.expiry_warning || 'Aviso de Expiração' }}</strong>
          <span>{{ translations.access_expires_in || 'O seu acesso expira em' }} {{ formatTime(timeRemaining) }}!</span>
        </div>
        <button @click="dismissExpiryWarning" class="dismiss-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  </Transition>

  <!-- Access Expired Notification -->
  <Transition name="slide-down">
    <div v-if="showExpiredNotification" class="expired-notification">
      <div class="expired-content">
        <i class="ri-lock-line"></i>
        <div class="expired-text">
          <strong>{{ translations.access_expired || 'Acesso Expirado' }}</strong>
          <span>{{ translations.access_expired_message || 'O seu código de acesso expirou. Contacte o administrador para um novo código.' }}</span>
        </div>
        <button @click="dismissExpiredNotification" class="dismiss-btn">
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
import { onMounted } from 'vue'
import { useAccessControlSimple } from '../composables/useAccessControlSimple'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'MiniTerminal',
  setup() {
    const { isAccessValid, timeRemaining, validateAccessCode, revokeAccess } = useAccessControlSimple()
    const { translations, initialize } = useLanguage()

    onMounted(async () => {
      await initialize()
    })

    return { isAccessValid, timeRemaining, validateAccessCode, revokeAccess, translations }
  },
  data() {
    return {
      isOpen: false,
      isLoading: true,
      loadingProgress: 0,
      terminalLines: [],
      showInput: false,
      currentInput: '',
      inputPlaceholder: '',
      isProcessing: false,
      currentStep: 'init',
      showExpiryWarning: false,
      showExpiredNotification: false,
      warningTimer: null,
      checkTimer: null
    }
  },
  watch: {
    isOpen: {
      handler(newValue) {
        if (newValue) {
          // Prevent body scroll when modal is open
          document.body.style.overflow = 'hidden'
          this.startLoadingAnimation()
        } else {
          // Restore body scroll when modal closes
          document.body.style.overflow = ''
        }
      },
      immediate: true
    },
    isAccessValid(newVal, oldVal) {
      if (newVal && this.isOpen) {
        // Access granted while terminal is open - close after a delay
        setTimeout(() => {
          this.closeTerminal()
        }, 2000)
        // Start monitoring for expiry
        this.startExpiryMonitoring()
      } else if (oldVal && !newVal) {
        // Access just expired
        this.handleAccessExpired()
      }
    },
    timeRemaining(newVal) {
      // Show warning when less than 5 minutes remaining
      if (newVal <= 5 && newVal > 0 && this.isAccessValid && !this.showExpiryWarning) {
        this.showExpiryWarning = true
        this.showExpiryWarningNotification()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  unmounted() {
    document.removeEventListener('keydown', this.handleKeyDown)
    document.body.style.overflow = ''

    // Clear timers
    if (this.checkTimer) {
      clearInterval(this.checkTimer)
    }
    if (this.warningTimer) {
      clearTimeout(this.warningTimer)
    }
  },
  methods: {
    openTerminal() {
      this.isOpen = true
    },

    showAuthInfo() {
      this.isOpen = true
    },

    closeTerminal() {
      this.isOpen = false
      this.resetTerminal()
    },

    resetTerminal() {
      this.terminalLines = []
      this.showInput = false
      this.currentInput = ''
      this.isProcessing = false
      this.isLoading = true
      this.loadingProgress = 0
      this.currentStep = 'init'
    },

    startLoadingAnimation() {
      if (!this.isOpen) return

      // Skip loading animation entirely - instant like real terminal
      this.loadingProgress = 100
      this.isLoading = false
      this.initializeTerminal()
    },

    async initializeTerminal() {
      this.resetTerminal()
      this.isLoading = false

      // Fast terminal startup with typing effect
      await this.typeMessage('Last login: ' + new Date().toDateString() + ' on ttys000', 'system', false)
      await this.typeMessage('', 'system', false)
      await this.typeMessage('╔═══════════════════════════════════════════════════════════════╗', 'system', false)
      await this.typeMessage('║              Jorge Morais Portfolio - Secure Access          ║', 'system', false)
      await this.typeMessage('║                     Authentication Terminal                   ║', 'system', false)
      await this.typeMessage('╚═══════════════════════════════════════════════════════════════╝', 'system', false)
      await this.typeMessage('', 'system', false)

      if (this.isAccessValid) {
        // Already authenticated - show organized status
        await this.typeMessage('┌─ SESSION STATUS ──────────────────────────────────────────────┐', 'success', false)
        await this.typeMessage('│ ✓ Authenticated session active                                │', 'success', false)
        await this.typeMessage(`│ ✓ Administrator privileges granted                            │`, 'success', false)
        await this.typeMessage(`│ ⏰ Session expires in: ${this.formatTime(this.timeRemaining)}${' '.repeat(Math.max(0, 33 - this.formatTime(this.timeRemaining).length))}│`, 'info', false)
        await this.typeMessage('└───────────────────────────────────────────────────────────────┘', 'success', false)
        await this.typeMessage('', 'system', false)
        await this.typeMessage('Available commands: logout, extend, status', 'info', false)
        await this.typeMessage('', 'system', false)

        // Show command prompt
        this.inputPlaceholder = this.translations.enter_command || 'Enter command...'
        this.showInput = true
      } else {
        // Need authentication - fast typing flow
        await this.typeMessage('root@jorge-portfolio:~# authenticate', 'command', true)
        await this.typeMessage('', 'system', false)
        await this.typeMessage('┌─ AUTHENTICATION REQUIRED ────────────────────────────────────┐', 'warning', false)
        await this.typeMessage('│ 🔐 Secure Access Portal                                      │', 'warning', false)
        await this.typeMessage('│ 🔑 Authorization code required to proceed                    │', 'info', false)
        await this.typeMessage('│ 📧 Contact: jorgemopanc@icloud.com                           │', 'info', false)
        await this.typeMessage('└───────────────────────────────────────────────────────────────┘', 'warning', false)
        await this.typeMessage('', 'system', false)

        // Show authentication prompt
        this.inputPlaceholder = this.translations.enter_authorization_code || 'Enter authorization code...'
        this.showInput = true
      }

      this.$nextTick(() => {
        if (this.$refs.terminalInput) {
          this.$refs.terminalInput.focus()
        }
      })
    },

    async handleEnter() {
      if (!this.currentInput.trim() || this.isProcessing) return

      const code = this.currentInput.trim()
      this.isProcessing = true
      this.showInput = false

      // Show the entered command
      await this.typeMessage(`auth --code="${code}"`, 'command', true)

      // Verification process - fast typing
      await this.processAuthentication(code)
    },

    async processAuthentication(code) {
      await this.typeMessage('', 'system', false)
      await this.typeMessage('┌─ AUTHENTICATION PROCESS ──────────────────────────────────────┐', 'processing', false)
      await this.typeMessage('│ [AUTH] Initiating protocol...                                 │', 'processing', false)
      await this.typeMessage('│ [CONN] Connecting to auth server...                           │', 'processing', false)
      await this.typeMessage('│ [TLS] Secure tunnel established                               │', 'processing', false)
      await this.typeMessage('│ [VERIFY] Validating token...                                  │', 'processing', false)
      await this.typeMessage('│ [HASH] Computing verification...                              │', 'processing', false)

      // Check if code is valid
      const isValid = this.validateAccessCode(code)

      if (isValid) {
        await this.typeMessage('│ [✓] Token validated successfully                              │', 'success', false)
        await this.typeMessage('│ [✓] Administrator privileges granted                          │', 'success', false)
        await this.typeMessage('│ [✓] Session initialized (expires: 4h)                        │', 'success', false)
        await this.typeMessage('│ [✓] Security policies applied                                 │', 'success', false)
        await this.typeMessage('└───────────────────────────────────────────────────────────────┘', 'success', false)
        await this.typeMessage('', 'system', false)
        await this.typeMessage('╔═══════════════════════════════════════════════════════════════╗', 'success', false)
        await this.typeMessage('║                  ✅ AUTHENTICATION SUCCESSFUL                 ║', 'success', false)
        await this.typeMessage('║                     Welcome, Administrator                    ║', 'success', false)
        await this.typeMessage('╚═══════════════════════════════════════════════════════════════╝', 'success', false)

        // Close terminal after success - instant
        setTimeout(() => this.closeTerminal(), 400)

      } else {
        await this.typeMessage('│ [✗] Token validation failed                                   │', 'error', false)
        await this.typeMessage('│ [ERROR] Invalid or expired code                               │', 'error', false)
        await this.typeMessage('│ [DENIED] Access denied                                        │', 'error', false)
        await this.typeMessage('└───────────────────────────────────────────────────────────────┘', 'error', false)
        await this.typeMessage('', 'system', false)
        await this.typeMessage('⚠️  Contact administrator for valid credentials: jorgemopanc@icloud.com', 'info', false)
        await this.typeMessage('', 'system', false)

        // Reset for new attempt - instant
        setTimeout(() => {
          this.currentInput = ''
          this.isProcessing = false
          this.showInput = true
          this.$nextTick(() => {
            if (this.$refs.terminalInput) {
              this.$refs.terminalInput.focus()
            }
          })
        }, 100)
      }
    },

    async typeMessage(text, type = 'system', showPrompt = false) {
      // Create line with empty text initially
      const line = {
        text: '',
        type: type,
        showPrompt: showPrompt,
        showCursor: true
      }

      this.terminalLines.push(line)
      await this.$nextTick()

      // Fast typing effect - like real terminal speed
      let currentText = ''
      const words = text.split(' ')

      for (let i = 0; i < words.length; i++) {
        currentText += (i > 0 ? ' ' : '') + words[i]
        line.text = currentText

        // Very fast delay - terminal speed
        await this.wait(15) // 15ms between words = very fast
        this.scrollToBottom()
      }

      // Remove cursor when done
      line.showCursor = false
      await this.wait(20) // Small pause between lines

      return Promise.resolve()
    },

    handleInput() {
      // Optional: Add typing sound effects here
    },

    wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const body = this.$refs.terminalBody
        if (body) {
          body.scrollTop = body.scrollHeight
        }
      })
    },

    formatTime(minutes) {
      const hours = Math.floor(minutes / 60)
      const mins = minutes % 60
      if (hours > 0) {
        return `${hours}h ${mins}m`
      }
      return `${mins}m`
    },

    // Handle ESC key
    handleKeyDown(event) {
      if (event.key === 'Escape' && this.isOpen) {
        this.closeTerminal()
      }
    },

    // Start monitoring for access expiry
    startExpiryMonitoring() {
      // Clear existing timer
      if (this.checkTimer) {
        clearInterval(this.checkTimer)
      }

      // Check every 30 seconds
      this.checkTimer = setInterval(() => {
        if (!this.isAccessValid) {
          this.handleAccessExpired()
          clearInterval(this.checkTimer)
        }
      }, 30000)
    },

    // Handle when access expires
    handleAccessExpired() {
      this.showExpiredNotification = true

      // Auto-hide notification after 10 seconds
      setTimeout(() => {
        this.showExpiredNotification = false
      }, 10000)

      // Clear any existing timers
      if (this.checkTimer) {
        clearInterval(this.checkTimer)
        this.checkTimer = null
      }
      if (this.warningTimer) {
        clearTimeout(this.warningTimer)
        this.warningTimer = null
      }
    },

    // Show expiry warning notification
    showExpiryWarningNotification() {
      // Auto-hide warning after 30 seconds
      this.warningTimer = setTimeout(() => {
        this.showExpiryWarning = false
      }, 30000)
    },

    // Dismiss expiry warning
    dismissExpiryWarning() {
      this.showExpiryWarning = false
      if (this.warningTimer) {
        clearTimeout(this.warningTimer)
        this.warningTimer = null
      }
    },

    // Dismiss expired notification
    dismissExpiredNotification() {
      this.showExpiredNotification = false
    }
  }
}
</script>

<style scoped>
/* Terminal Toggle Button - Fixed Position */
.terminal-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1e1e1e;
  border: 1px solid #30363d;
  color: #00ff41;
  padding: 12px 16px;
  border-radius: 8px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.terminal-toggle:hover {
  background: #2d2d2d;
  border-color: #00ff41;
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 255, 65, 0.2);
}

.terminal-toggle i {
  font-size: 1.1rem;
}

.terminal-toggle--authenticated {
  background: linear-gradient(135deg, #238636, #2ea043);
  border-color: #2ea043;
  color: white;
}

.terminal-toggle--authenticated:hover {
  background: linear-gradient(135deg, #2ea043, #3fb950);
  border-color: #3fb950;
}

/* Modal Overlay */
.terminal-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

/* Terminal Window */
.terminal-window {
  background: #1e1e1e;
  border-radius: 8px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  max-width: 95vw;
  max-height: 90vh;
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Terminal Header */
.terminal-header {
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #404040;
  user-select: none;
}

.terminal-controls {
  display: flex;
  gap: 0.5rem;
}

.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.terminal-btn.close {
  background: #ff5f57;
}

.terminal-btn.close:hover {
  background: #ff3b30;
}

.terminal-btn.minimize {
  background: #ffbd2e;
}

.terminal-btn.minimize:hover {
  background: #ff9500;
}

.terminal-btn.maximize {
  background: #28ca42;
}

.terminal-btn.maximize:hover {
  background: #30d158;
}

.terminal-title {
  flex: 1;
  text-align: center;
  color: #c7c7c7;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Terminal Body */
.terminal-body {
  flex: 1;
  position: relative;
  background: #1e1e1e;
  overflow: hidden;
}

.terminal-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #00ff41;
}

.loading-text {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.loading-dots {
  animation: pulse 1.5s infinite;
}

.loading-progress {
  width: 300px;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #00ff41, #00cc33);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.terminal-content {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  font-size: 0.85rem;
  line-height: 1.4;
}

.terminal-output {
  min-height: 100%;
}

/* Terminal Lines */
.terminal-line {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  word-wrap: break-word;
}

.terminal-line.system {
  color: #7d8590;
}

.terminal-line.command {
  color: #f0f6fc;
}

.terminal-line.success {
  color: #00ff41;
}

.terminal-line.error {
  color: #ff5555;
}

.terminal-line.warning {
  color: #ffb86c;
}

.terminal-line.info {
  color: #8be9fd;
}

.terminal-line.processing {
  color: #bd93f9;
}

.prompt {
  color: #00ff41;
  margin-right: 8px;
  font-weight: 600;
}

.line-text {
  flex: 1;
}

.cursor {
  color: #00ff41;
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* Terminal Input */
.terminal-input-line {
  display: flex;
  align-items: center;
}

.terminal-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #f0f6fc;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  margin: 0 8px;
}

.terminal-input::placeholder {
  color: #6e7681;
}

/* Processing Line */
.processing-line {
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #f0f6fc;
}

.processing-dots {
  margin-left: 8px;
  color: #bd93f9;
  animation: pulse 1.5s infinite;
}

/* Terminal Footer */
.terminal-footer {
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #404040;
  font-size: 0.8rem;
}

.terminal-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #c7c7c7;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-indicator.online {
  background: #28ca42;
  animation: pulse-green 2s infinite;
}

.status-indicator.offline {
  background: #ff5555;
}

@keyframes pulse-green {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.terminal-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  background: none;
  border: 1px solid #555;
  color: #c7c7c7;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background: #404040;
  border-color: #777;
  color: white;
}

/* Modal Transitions */
.modal-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.modal-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Success Notification */
.success-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #238636, #2ea043);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(35, 134, 54, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  z-index: 1001;
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.success-notification i {
  font-size: 1.1rem;
}

.revoke-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
}

.revoke-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Scrollbar Styling */
.terminal-content::-webkit-scrollbar {
  width: 6px;
}

.terminal-content::-webkit-scrollbar-track {
  background: #1e1e1e;
}

.terminal-content::-webkit-scrollbar-thumb {
  background: #30363d;
  border-radius: 3px;
}

.terminal-content::-webkit-scrollbar-thumb:hover {
  background: #484f58;
}

/* Responsive */
@media (max-width: 768px) {
  .terminal-toggle {
    bottom: 15px;
    right: 15px;
  }

  .terminal-window {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }

  .terminal-modal-overlay {
    padding: 0;
  }

  .terminal-footer {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }

  .terminal-actions {
    justify-content: center;
  }

  .terminal-content {
    padding: 12px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .terminal-toggle {
    bottom: 10px;
    right: 10px;
  }

  .terminal-title span {
    font-size: 0.75rem;
  }

  .action-btn {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}

/* Expiry Warning Notification */
.expiry-warning {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 10000;
  max-width: 400px;
}

.warning-content {
  background: linear-gradient(135deg, #ff9500, #ffb86c);
  color: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(255, 149, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
}

.warning-content i {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.warning-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.warning-text strong {
  font-weight: 600;
}

.warning-text span {
  opacity: 0.9;
  font-size: 0.85rem;
}

/* Expired Notification */
.expired-notification {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 10001;
  max-width: 400px;
}

.expired-content {
  background: linear-gradient(135deg, #ff5555, #ff3b30);
  color: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(255, 85, 85, 0.3);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
}

.expired-content i {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.expired-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.expired-text strong {
  font-weight: 600;
}

.expired-text span {
  opacity: 0.9;
  font-size: 0.85rem;
  line-height: 1.3;
}

/* Dismiss Button */
.dismiss-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dismiss-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.dismiss-btn i {
  font-size: 1rem;
}

/* Slide Down Transitions */
.slide-down-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

/* Responsive notifications */
@media (max-width: 768px) {
  .expiry-warning,
  .expired-notification {
    right: 15px;
    left: 15px;
    max-width: none;
    top: 70px;
  }

  .warning-content,
  .expired-content {
    padding: 14px;
    font-size: 0.85rem;
  }

  .warning-text span,
  .expired-text span {
    font-size: 0.8rem;
  }
}
</style>