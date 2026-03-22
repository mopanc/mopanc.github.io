<template>
  <div class="sr-container">
    <h2 class="sr-title">
      <i class="ri-eye-line"></i> Lê os Teus Objectivos e "EU SOU"
    </h2>
    <p class="sr-desc">
      Toca em cada card depois de o leres em voz alta. Internaliza.
    </p>

    <!-- Objectives -->
    <div class="sr-section" v-if="profile?.objectives?.length">
      <h3 class="sr-section-title">Objectivos a 5 Anos</h3>
      <div class="sr-cards">
        <div
          v-for="(obj, i) in profile.objectives"
          :key="'obj-' + i"
          class="sr-card"
          :class="{ 'sr-card--read': readItems.has('obj-' + i) }"
          @click="markRead('obj-' + i)"
        >
          <div class="sr-card__num">{{ i + 1 }}</div>
          <div class="sr-card__content">
            <p class="sr-card__text">{{ obj.text }}</p>
            <div class="sr-card__meta" v-if="obj.deadline || obj.metric">
              <span v-if="obj.deadline"><i class="ri-calendar-line"></i> {{ obj.deadline }}</span>
              <span v-if="obj.metric"><i class="ri-bar-chart-line"></i> {{ obj.metric }}</span>
            </div>
          </div>
          <i class="ri-check-line sr-card__check" v-if="readItems.has('obj-' + i)"></i>
        </div>
      </div>
    </div>

    <!-- EU SOU Statements -->
    <div class="sr-section" v-if="profile?.euSou?.length">
      <h3 class="sr-section-title">Declarações "EU SOU"</h3>
      <div class="sr-cards">
        <div
          v-for="(s, i) in profile.euSou"
          :key="'eu-' + i"
          class="sr-card sr-card--eu"
          :class="{ 'sr-card--read': readItems.has('eu-' + i) }"
          @click="markRead('eu-' + i)"
        >
          <span class="sr-card__prefix">EU SOU</span>
          <span class="sr-card__statement">{{ s }}</span>
          <i class="ri-check-line sr-card__check" v-if="readItems.has('eu-' + i)"></i>
        </div>
      </div>
    </div>

    <!-- Progress -->
    <div class="sr-progress">
      <span>{{ readItems.size }} / {{ totalItems }} lidos</span>
      <div class="sr-progress-track">
        <div
          class="sr-progress-fill"
          :style="{ width: (readItems.size / Math.max(totalItems, 1)) * 100 + '%' }"
        ></div>
      </div>
    </div>

    <!-- Actions -->
    <div class="sr-actions">
      <button
        class="sr-btn sr-btn--gold"
        :disabled="readItems.size < totalItems"
        @click="$emit('complete')"
      >
        <i class="ri-check-double-line"></i> Todos Lidos — Continuar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  profile: { type: Object, required: true },
})

defineEmits(['complete'])

const readItems = ref(new Set())

const totalItems = computed(() => {
  return (props.profile?.objectives?.length || 0) + (props.profile?.euSou?.length || 0)
})

function markRead(key) {
  const newSet = new Set(readItems.value)
  if (newSet.has(key)) {
    newSet.delete(key)
  } else {
    newSet.add(key)
  }
  readItems.value = newSet
}
</script>

<style scoped>
.sr-container {
  padding: 2rem 0;
}

.sr-title {
  font-size: 2rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.6rem;
  text-align: center;
}

.sr-title i {
  color: var(--color-primary);
}

.sr-desc {
  font-size: var(--fs-sm);
  color: var(--color-muted);
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
}

.sr-section {
  margin-bottom: 2.4rem;
}

.sr-section-title {
  font-size: 1.4rem;
  font-weight: var(--fw-semibold);
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.2rem;
}

.sr-cards {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.sr-card {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem 2rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
}

.sr-card:hover {
  border-color: var(--color-primary);
}

.sr-card--read {
  border-color: var(--color-success);
  background: rgba(52, 195, 143, 0.05);
}

.sr-card__num {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--color-bg-primary);
  border: 2px solid var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: var(--fw-bold);
  color: var(--color-primary);
  font-family: 'JetBrains Mono', monospace;
  flex-shrink: 0;
}

.sr-card__content {
  flex: 1;
}

.sr-card__text {
  font-size: var(--fs-sm);
  color: var(--color-white);
  font-weight: var(--fw-semibold);
}

.sr-card__meta {
  display: flex;
  gap: 1.2rem;
  margin-top: 0.4rem;
  font-size: 1.2rem;
  color: var(--color-muted);
}

.sr-card__meta span {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.sr-card__check {
  font-size: 2rem;
  color: var(--color-success);
  flex-shrink: 0;
}

/* EU SOU card */
.sr-card--eu {
  padding: 1.4rem 2rem;
}

.sr-card__prefix {
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
  color: #c9a84c;
  white-space: nowrap;
}

.sr-card__statement {
  flex: 1;
  font-size: var(--fs-sm);
  color: var(--color-white);
  font-weight: var(--fw-semibold);
}

.sr-progress {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin: 2rem 0;
  font-size: 1.3rem;
  color: var(--color-muted);
}

.sr-progress-track {
  flex: 1;
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
}

.sr-progress-fill {
  height: 100%;
  background: var(--color-success);
  border-radius: 2px;
  transition: width 0.3s;
}

.sr-actions {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.sr-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.4rem;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.sr-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.sr-btn--gold {
  background: linear-gradient(135deg, #c9a84c, #b8943e);
  color: #0c1118;
}

.sr-btn--gold:hover:not(:disabled) {
  background: linear-gradient(135deg, #d4b65c, #c9a84c);
}
</style>
