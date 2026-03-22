<template>
  <div class="bt-container">
    <h2 class="bt-title">
      <i class="ri-heart-pulse-line"></i> Respiração 5-5-5
    </h2>
    <p class="bt-desc">
      Inspira 5 segundos, expira 5 segundos, durante 5 minutos. Foca na respiração.
    </p>

    <div class="bt-widget">
      <!-- Animated Circle -->
      <div
        class="bt-circle"
        :class="{
          'bt-circle--inhale': phase === 'inhale' && running,
          'bt-circle--exhale': phase === 'exhale' && running,
        }"
      >
        <div class="bt-inner">
          <span class="bt-phase-text">{{ phaseLabel }}</span>
          <span class="bt-timer">{{ display }}</span>
          <span class="bt-cycle" v-if="cycle > 0">Ciclo {{ cycle }}</span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="bt-progress-track">
        <div class="bt-progress-fill" :style="{ width: progress + '%' }"></div>
      </div>

      <!-- Controls -->
      <div class="bt-controls">
        <button class="bt-btn bt-btn--primary" @click="toggle" v-if="!completed">
          <i :class="running ? 'ri-pause-line' : 'ri-play-line'"></i>
          {{ running ? 'Pausar' : (elapsed > 0 ? 'Retomar' : 'Começar') }}
        </button>
        <button class="bt-btn bt-btn--ghost" @click="reset" v-if="elapsed > 0 && !completed">
          <i class="ri-restart-line"></i>
        </button>
      </div>

      <!-- Completed state -->
      <div v-if="completed" class="bt-done">
        <i class="ri-check-double-line"></i>
        <span>Sessão completa!</span>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="bt-actions">
      <button class="bt-btn bt-btn--gold" @click="$emit('complete', true)" v-if="completed">
        Continuar <i class="ri-arrow-right-line"></i>
      </button>
      <button class="bt-btn bt-btn--ghost" @click="handleSkip" v-if="!completed">
        Saltar <i class="ri-skip-forward-line"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useBreathingTimer } from '@/composables/useBreathingTimer'

const emit = defineEmits(['complete'])

const {
  running, phase, elapsed, cycle, completed, display, progress, phaseLabel,
  toggle, reset, skip,
} = useBreathingTimer()

async function handleSkip() {
  await skip()
  emit('complete', false)
}
</script>

<style scoped>
.bt-container {
  text-align: center;
  padding: 2rem 0;
}

.bt-title {
  font-size: 2rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.6rem;
}

.bt-title i {
  color: var(--color-primary);
}

.bt-desc {
  font-size: var(--fs-sm);
  color: var(--color-muted);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.bt-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
}

.bt-circle {
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  border: 3px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 5s ease-in-out;
  position: relative;
}

.bt-circle--inhale {
  transform: scale(1.15);
  border-color: var(--color-primary);
  box-shadow: 0 0 40px rgba(74, 134, 232, 0.15);
}

.bt-circle--exhale {
  transform: scale(0.85);
  border-color: var(--color-accent);
  box-shadow: 0 0 20px rgba(119, 167, 255, 0.08);
}

.bt-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.bt-phase-text {
  font-size: 1.4rem;
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.bt-timer {
  font-size: 4rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  font-family: 'JetBrains Mono', monospace;
}

.bt-cycle {
  font-size: 1.2rem;
  color: var(--color-muted);
}

.bt-progress-track {
  width: 24rem;
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
}

.bt-progress-fill {
  height: 100%;
  background: var(--color-primary);
  border-radius: 2px;
  transition: width 1s linear;
}

.bt-controls {
  display: flex;
  gap: 1rem;
}

.bt-done {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  color: var(--color-success);
  font-weight: var(--fw-semibold);
}

.bt-done i {
  font-size: 2.4rem;
}

.bt-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
}

.bt-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.bt-btn--primary {
  background: var(--color-primary);
  color: #fff;
}

.bt-btn--primary:hover {
  filter: brightness(1.1);
}

.bt-btn--gold {
  background: linear-gradient(135deg, #c9a84c, #b8943e);
  color: #0c1118;
}

.bt-btn--gold:hover {
  background: linear-gradient(135deg, #d4b65c, #c9a84c);
}

.bt-btn--ghost {
  background: transparent;
  color: var(--color-muted);
  border: 1px solid var(--color-border);
}

.bt-btn--ghost:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 480px) {
  .bt-circle {
    width: 20rem;
    height: 20rem;
  }

  .bt-timer {
    font-size: 3rem;
  }

  .bt-progress-track {
    width: 20rem;
  }
}
</style>
