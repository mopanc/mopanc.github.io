<template>
  <!-- WhatsApp Floating Button -->
  <div class="whatsapp-widget">
    <!-- Chat Button -->
    <Transition name="bounce">
      <button
        v-if="showButton"
        @click="toggleChat"
        class="whatsapp-button"
        :class="{ 'has-notification': showNotification && !isChatOpen }"
        :title="translations.whatsapp_title || 'Chat on WhatsApp'"
      >
        <i class="ri-whatsapp-line"></i>
        <span v-if="showNotification && !isChatOpen" class="notification-badge">1</span>
      </button>
    </Transition>

    <!-- Chat Box -->
    <Transition name="slide-up">
      <div v-if="isChatOpen" class="whatsapp-chat-box" @click.stop>
        <!-- Chat Header -->
        <div class="chat-header">
          <div class="chat-header-info">
            <img
              src="https://avatars.githubusercontent.com/u/45471030?v=4"
              alt="Jorge Morais"
              class="chat-avatar"
            >
            <div class="chat-header-text">
              <h4>Jorge Morais</h4>
              <p class="status">
                <span class="status-dot"></span>
                {{ translations.usually_replies || 'Usually replies within hours' }}
              </p>
            </div>
          </div>
          <button @click="toggleChat" class="close-chat-btn">
            <i class="ri-close-line"></i>
          </button>
        </div>

        <!-- Chat Body -->
        <div class="chat-body">
          <div class="welcome-message">
            <p>{{ translations.whatsapp_welcome || "👋 Hi there! I'm Jorge Morais, Full Stack Developer." }}</p>
            <p>{{ translations.whatsapp_intro || "How can I help you today?" }}</p>
          </div>

          <div class="quick-options">
            <button
              v-for="option in quickOptions"
              :key="option.id"
              @click="selectQuickOption(option)"
              class="quick-option-btn"
            >
              {{ option.text }}
            </button>
          </div>
        </div>

        <!-- Chat Footer -->
        <div class="chat-footer">
          <div class="input-group">
            <input
              v-model="message"
              @keyup.enter="sendMessage"
              type="text"
              :placeholder="translations.type_message || 'Type a message...'"
              class="chat-input"
            >
            <button @click="sendMessage" class="send-btn" :disabled="!message.trim()">
              <i class="ri-send-plane-fill"></i>
            </button>
          </div>
          <p class="powered-by">
            <i class="ri-whatsapp-line"></i>
            {{ translations.powered_by || 'Powered by WhatsApp' }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'WhatsAppChat',
  setup() {
    const { translations, initialize } = useLanguage()
    return { translations, initialize }
  },
  data() {
    return {
      showButton: false,
      showNotification: false,
      isChatOpen: false,
      message: '',
      timeOnSite: 0,
      timer: null,
      notificationTimer: null,
      phoneNumber: '351910559307', // Teu número sem + ou espaços
      quickOptions: [
        { id: 1, text: '💼 Project Discussion' },
        { id: 2, text: '🤝 Job Opportunity' },
        { id: 3, text: '📧 General Inquiry' },
        { id: 4, text: '🔐 Portfolio Access' }
      ]
    }
  },
  async mounted() {
    await this.initialize()
    this.startTimer()
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    if (this.notificationTimer) {
      clearTimeout(this.notificationTimer)
    }
  },
  methods: {
    startTimer() {
      // Show button after 10 seconds
      setTimeout(() => {
        this.showButton = true
      }, 10000)

      // Show notification after 20 seconds
      setTimeout(() => {
        if (!this.isChatOpen) {
          this.showNotification = true
        }
      }, 20000)

      // Track time on site
      this.timer = setInterval(() => {
        this.timeOnSite++
      }, 1000)
    },

    toggleChat() {
      this.isChatOpen = !this.isChatOpen
      if (this.isChatOpen) {
        this.showNotification = false
        this.$nextTick(() => {
          const input = document.querySelector('.chat-input')
          if (input) input.focus()
        })
      }
    },

    selectQuickOption(option) {
      this.message = option.text
      this.sendMessage()
    },

    sendMessage() {
      if (!this.message.trim()) return

      // Format WhatsApp URL
      const encodedMessage = encodeURIComponent(this.message)
      const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank')

      // Close chat and reset
      this.message = ''
      this.isChatOpen = false
    }
  }
}
</script>

<style scoped>
/* WhatsApp Widget Container */
.whatsapp-widget {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 9998;
}

/* WhatsApp Button */
.whatsapp-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.2);
}

.whatsapp-button:active {
  transform: scale(0.95);
}

.whatsapp-button.has-notification {
  animation: pulse-whatsapp 2s infinite;
}

@keyframes pulse-whatsapp {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.3);
  }
}

/* Notification Badge */
.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #FF3B30;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  border: 2px solid white;
  animation: bounce-badge 1s infinite;
}

@keyframes bounce-badge {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Chat Box */
.whatsapp-chat-box {
  position: fixed;
  bottom: 150px;
  right: 20px;
  width: 360px;
  max-width: calc(100vw - 40px);
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Chat Header */
.chat-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-header-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.chat-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
}

.chat-header-text h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.status {
  margin: 4px 0 0;
  font-size: 0.75rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 6px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #4CAF50;
  border-radius: 50%;
  display: inline-block;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.close-chat-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.2s ease;
}

.close-chat-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Chat Body */
.chat-body {
  padding: 20px;
  background: #ECE5DD;
  min-height: 200px;
  max-height: 300px;
  overflow-y: auto;
}

.welcome-message {
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.welcome-message p {
  margin: 0 0 8px;
  color: #333;
  font-size: 0.9rem;
  line-height: 1.4;
}

.welcome-message p:last-child {
  margin-bottom: 0;
}

/* Quick Options */
.quick-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quick-option-btn {
  background: white;
  border: 1px solid #e0e0e0;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #667eea;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  font-weight: 500;
}

.quick-option-btn:hover {
  background: #f3f4ff;
  border-color: #667eea;
  transform: translateX(4px);
}

/* Chat Footer */
.chat-footer {
  background: white;
  padding: 12px;
  border-top: 1px solid #e0e0e0;
}

.input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease;
}

.chat-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.send-btn:hover:not(:disabled) {
  transform: scale(1.05);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.powered-by {
  text-align: center;
  font-size: 0.7rem;
  color: #999;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

/* Transitions */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-out 0.3s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

.slide-up-enter-active {
  animation: slide-up-in 0.3s ease-out;
}

.slide-up-leave-active {
  animation: slide-up-out 0.2s ease-in;
}

@keyframes slide-up-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-up-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .whatsapp-widget {
    bottom: 70px;
    right: 15px;
  }

  .whatsapp-button {
    width: 48px;
    height: 48px;
    font-size: 1.85rem;
  }

  .whatsapp-chat-box {
    bottom: 130px;
    right: 15px;
    width: calc(100vw - 30px);
  }
}

@media (max-width: 480px) {
  .whatsapp-chat-box {
    bottom: 130px;
    right: 10px;
    width: calc(100vw - 20px);
  }

  .chat-body {
    max-height: 250px;
  }
}

/* Scrollbar */
.chat-body::-webkit-scrollbar {
  width: 6px;
}

.chat-body::-webkit-scrollbar-track {
  background: #F0F0F0;
}

.chat-body::-webkit-scrollbar-thumb {
  background: #667eea;
  border-radius: 3px;
}

.chat-body::-webkit-scrollbar-thumb:hover {
  background: #764ba2;
}
</style>
