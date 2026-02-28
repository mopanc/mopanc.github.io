<template>
  <transition name="toast">
    <div v-if="visible" :class="['toast', currentType]">
      <i :class="iconClass"></i>
      <span>{{ currentMessage }}</span>
    </div>
  </transition>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'ToastNotification',
  setup() {
    const visible = ref(false);
    const currentMessage = ref('');
    const currentType = ref('success');
    let timer = null;

    const iconClass = computed(() => {
      const icons = {
        success: 'ri-checkbox-circle-fill',
        error: 'ri-close-circle-fill',
        info: 'ri-information-fill',
        warning: 'ri-alert-fill',
      };
      return icons[currentType.value] || icons.info;
    });

    const show = (message, type = 'success', duration = 3500) => {
      currentMessage.value = message;
      currentType.value = type;
      visible.value = true;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        visible.value = false;
      }, duration);
    };

    return {
      visible,
      currentMessage,
      currentType,
      iconClass,
      show,
    };
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  z-index: 10001;
  max-width: 360px;
  backdrop-filter: blur(10px);
}

.toast.success { background: linear-gradient(135deg, #28a745, #20c958); }
.toast.error   { background: linear-gradient(135deg, #dc3545, #e85262); }
.toast.info    { background: linear-gradient(135deg, #0077b5, #1a96d4); }
.toast.warning { background: linear-gradient(135deg, #f59e0b, #fbbf24); }

.toast i { font-size: 1.2rem; flex-shrink: 0; }

.toast-enter-active,
.toast-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>
