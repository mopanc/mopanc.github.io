<template>
  <div v-if="hasError" class="error-boundary">
    <div class="error-content">
      <h2>⚠️ Something went wrong</h2>
      <p>We're sorry, but something unexpected happened.</p>
      <details v-if="errorInfo" class="error-details">
        <summary>Error details</summary>
        <pre>{{ errorInfo }}</pre>
      </details>
      <button @click="retry" class="retry-button">
        Try Again
      </button>
    </div>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)
const errorInfo = ref('')

onErrorCaptured((error, instance, info) => {
  hasError.value = true
  errorInfo.value = `${error.message}\n\nComponent: ${instance?.$options.name || 'Unknown'}\nInfo: ${info}`

  // Log error for debugging
  console.error('Error caught by boundary:', error, instance, info)

  // Prevent error from bubbling up
  return false
})

const retry = () => {
  hasError.value = false
  errorInfo.value = ''
  // Force component re-render
  location.reload()
}
</script>

<style scoped>
.error-boundary {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
  background: var(--color-bg-secondary);
  border-radius: 6px;
  margin: 1rem 0;
}

.error-content {
  text-align: center;
  color: var(--color-text);
  max-width: 500px;
}

.error-content h2 {
  color: var(--color-white);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.error-content p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.error-details {
  text-align: left;
  margin: 1rem 0;
  padding: 1rem;
  background: var(--color-bg-primary);
  border-radius: 4px;
}

.error-details summary {
  cursor: pointer;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.error-details pre {
  font-size: 0.85rem;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--color-text);
}

.retry-button {
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
}

.retry-button:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
}
</style>