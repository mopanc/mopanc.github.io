<template>
  <div class="cp-bar">
    <div
      v-for="s in steps"
      :key="s.num"
      class="cp-step"
      :class="{
        'cp-step--active': s.num === current,
        'cp-step--done': completed.includes(s.num),
        'cp-step--clickable': completed.includes(s.num) || s.num <= current,
      }"
      @click="goTo(s.num)"
    >
      <div class="cp-step__icon">
        <i v-if="completed.includes(s.num)" class="ri-check-line"></i>
        <i v-else :class="s.icon"></i>
      </div>
      <span class="cp-step__label">{{ s.label }}</span>
    </div>
    <!-- Connecting lines -->
    <div class="cp-lines">
      <div
        v-for="i in 4"
        :key="i"
        class="cp-line"
        :class="{ 'cp-line--filled': completed.includes(i) }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  current: { type: Number, default: 1 },
  completed: { type: Array, default: () => [] },
})

const emit = defineEmits(['go'])

const steps = [
  { num: 1, icon: 'ri-heart-pulse-line', label: 'Respirar' },
  { num: 2, icon: 'ri-eye-line', label: 'Ler' },
  { num: 3, icon: 'ri-lightbulb-line', label: 'Intenção' },
  { num: 4, icon: 'ri-moon-line', label: 'Reflexão' },
  { num: 5, icon: 'ri-trophy-line', label: 'Completo' },
]

function goTo(step) {
  if (props.completed.includes(step) || step <= props.current) {
    emit('go', step)
  }
}
</script>

<style scoped>
.cp-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 1rem;
  margin-bottom: 3rem;
}

.cp-lines {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  padding: 0 4rem;
  gap: 0;
  z-index: 0;
  pointer-events: none;
}

.cp-line {
  flex: 1;
  height: 2px;
  background: var(--color-border);
  transition: background 0.3s;
}

.cp-line--filled {
  background: var(--color-primary);
}

.cp-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  z-index: 1;
  cursor: default;
}

.cp-step--clickable {
  cursor: pointer;
}

.cp-step__icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--color-muted);
  transition: all 0.3s;
}

.cp-step--active .cp-step__icon {
  border-color: var(--color-primary);
  color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(74, 134, 232, 0.15);
}

.cp-step--done .cp-step__icon {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.cp-step__label {
  font-size: 1.1rem;
  color: var(--color-muted);
  font-weight: var(--fw-semibold);
  transition: color 0.3s;
}

.cp-step--active .cp-step__label {
  color: var(--color-primary);
}

.cp-step--done .cp-step__label {
  color: var(--color-white);
}

@media (max-width: 480px) {
  .cp-step__label {
    font-size: 1rem;
  }

  .cp-step__icon {
    width: 3.2rem;
    height: 3.2rem;
    font-size: 1.3rem;
  }

  .cp-lines {
    padding: 0 2.8rem;
  }
}
</style>
