<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="terminal-modal-overlay" @click="closeModal">
      <div class="terminal-window" @click.stop>
        <!-- Terminal Window Frame -->
        <div class="terminal-header">
          <div class="terminal-controls">
            <button class="terminal-btn close" @click="closeModal">
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
            <span>jorge@portfolio:~$ cat cv.txt</span>
          </div>
          <div class="terminal-menu">
            <button @click="toggleFullscreen" class="fullscreen-btn">
              <i class="ri-fullscreen-line"></i>
            </button>
          </div>
        </div>

        <!-- Terminal Body -->
        <div class="terminal-body">
          <div class="terminal-loading" v-if="isLoading">
            <div class="loading-text">
              <span>jorge@portfolio:~$</span>
              <span class="cursor">|</span>
            </div>
            <div class="loading-progress">
              <div class="progress-bar" :style="{ width: loadingProgress + '%' }"></div>
            </div>
          </div>

          <iframe
            v-show="!isLoading"
            :src="cvUrl"
            class="terminal-iframe"
            @load="handleFrameLoad"
            frameborder="0"
          ></iframe>
        </div>

        <!-- Terminal Footer -->
        <div class="terminal-footer">
          <div class="terminal-status">
            <span class="status-indicator online"></span>
            <span>Connected to jorge-cv-server</span>
          </div>
          <div class="terminal-actions">
            <button @click="downloadPDF" class="action-btn">
              <i class="ri-download-line"></i>
              Download PDF
            </button>
            <button @click="closeModal" class="action-btn">
              <i class="ri-close-line"></i>
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'TerminalModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'downloadPDF'],
  data() {
    return {
      isLoading: true,
      loadingProgress: 0,
      isFullscreen: false
    }
  },
  computed: {
    cvUrl() {
      return '/cv/index.html'
    }
  },
  watch: {
    isOpen: {
      handler(newValue) {
        if (newValue) {
          this.isLoading = true
          this.startLoadingAnimation()
          // Prevent body scroll
          document.body.style.overflow = 'hidden'
        } else {
          // Restore body scroll
          document.body.style.overflow = ''
        }
      },
      immediate: true
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  unmounted() {
    document.removeEventListener('keydown', this.handleKeyDown)
    // Restore body scroll
    document.body.style.overflow = ''
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },

    downloadPDF() {
      this.$emit('downloadPDF')
    },

    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen
      // Add fullscreen logic here if needed
    },

    handleFrameLoad() {
      // Simulate terminal loading
      setTimeout(() => {
        this.isLoading = false
        this.setupAutoScroll()
      }, 1500)
    },

    setupAutoScroll() {
      // Enable auto scroll for iframe content - but only when user is at bottom
      const iframe = this.$el.querySelector('.terminal-iframe')
      if (iframe) {
        let isUserScrolling = false
        let scrollTimeout = null

        const scrollToBottom = () => {
          try {
            if (iframe.contentWindow && !isUserScrolling) {
              const doc = iframe.contentWindow.document
              const scrollTop = iframe.contentWindow.pageYOffset || doc.documentElement.scrollTop
              const scrollHeight = doc.body.scrollHeight
              const clientHeight = iframe.contentWindow.innerHeight

              // Only auto-scroll if user is already at or near the bottom (within 100px)
              if (scrollHeight - scrollTop - clientHeight < 100) {
                iframe.contentWindow.scrollTo({
                  top: scrollHeight,
                  behavior: 'smooth'
                })
              }
            }
          } catch (error) {
            console.log('Cross-origin iframe scroll limitation')
          }
        }

        // Detect user scrolling
        if (iframe.contentWindow) {
          iframe.contentWindow.addEventListener('scroll', () => {
            isUserScrolling = true
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
              isUserScrolling = false
            }, 2000) // Allow auto-scroll again after 2 seconds of no user scrolling
          })
        }

        // Initial scroll to bottom when iframe loads
        iframe.addEventListener('load', () => {
          setTimeout(scrollToBottom, 500) // Initial scroll after content loads

          try {
            if (iframe.contentDocument) {
              const observer = new MutationObserver(() => {
                // Only observe changes if not actively scrolling
                if (!isUserScrolling) {
                  setTimeout(scrollToBottom, 100)
                }
              })
              observer.observe(iframe.contentDocument.body, {
                childList: true,
                subtree: true,
                characterData: true
              })
            }
          } catch (error) {
            console.log('MutationObserver setup failed')
          }
        })
      }
    },

    startLoadingAnimation() {
      if (!this.isOpen) return

      this.loadingProgress = 0
      const interval = setInterval(() => {
        this.loadingProgress += Math.random() * 15
        if (this.loadingProgress >= 100) {
          this.loadingProgress = 100
          clearInterval(interval)
        }
      }, 100)
    },

    // Handle ESC key
    handleKeyDown(event) {
      if (event.key === 'Escape' && this.isOpen) {
        this.closeModal()
      }
    }
  }
}
</script>

<style scoped>
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
  width: 800px;
  height: 800px;
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

.terminal-menu {
  display: flex;
  gap: 0.5rem;
}

.fullscreen-btn {
  background: none;
  border: none;
  color: #c7c7c7;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.fullscreen-btn:hover {
  background: #404040;
  color: white;
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

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
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

.terminal-iframe {
  width: 100%;
  height: 100%;
  background: transparent;
  overflow-y: auto;
  scroll-behavior: smooth;
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
  background: #28ca42;
  animation: pulse 2s infinite;
}

@keyframes pulse {
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

/* Responsive */
@media (max-width: 768px) {
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

  /* Increase button sizes for mobile touch */
  .terminal-btn {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .terminal-header {
    padding: 0.5rem 1rem;
    min-height: 50px;
  }

  .terminal-controls {
    gap: 0.5rem;
  }

  .fullscreen-btn {
    padding: 0.25rem;
    font-size: 1rem;
  }

  .terminal-title span {
    font-size: 0.75rem;
  }

  .terminal-footer {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
    padding: 0.5rem 1rem;
    min-height: 60px;
  }

  .terminal-actions {
    justify-content: center;
    gap: 1.5rem;
  }

  .action-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    min-height: 44px;
    border-radius: 8px;
  }

  .loading-progress {
    width: 250px;
  }
}

@media (max-width: 480px) {
  /* Further optimize for small screens */
  .terminal-btn {
    width: 28px;
    height: 28px;
  }

  .terminal-header {
    padding: 0.4rem 0.75rem;
    min-height: 45px;
  }

  .terminal-controls {
    gap: 0.4rem;
  }

  .terminal-title span {
    font-size: 0.65rem;
  }

  .fullscreen-btn {
    padding: 0.2rem;
    font-size: 0.9rem;
  }

  .action-btn {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    flex: 1;
    max-width: 140px;
    min-height: 40px;
  }

  .terminal-footer {
    padding: 0.4rem 0.75rem;
    min-height: 55px;
  }

  .loading-progress {
    width: 200px;
  }

  .loading-text {
    font-size: 1rem;
  }
}
</style>