<template>
  <div class="dc-container">
    <div class="dc-celebration">
      <div class="dc-icon">
        <i class="ri-trophy-line"></i>
      </div>
      <h2 class="dc-title">Dia Completo!</h2>
      <p class="dc-subtitle">{{ todayFormatted }}</p>
    </div>

    <!-- Summary -->
    <div class="dc-summary">
      <div class="dc-summary-item" v-if="dayData.breathingCompleted">
        <i class="ri-heart-pulse-line"></i>
        <span>Respiração concluída</span>
      </div>
      <div class="dc-summary-item" v-if="dayData.breathingSkipped">
        <i class="ri-skip-forward-line"></i>
        <span>Respiração saltada</span>
      </div>
      <div class="dc-summary-item" v-if="dayData.statementsRead">
        <i class="ri-eye-line"></i>
        <span>Objectivos e EU SOU lidos</span>
      </div>
      <div class="dc-summary-item" v-if="dayData.actions?.some(a => a)">
        <i class="ri-lightbulb-line"></i>
        <span>{{ dayData.actions.filter(a => a).length }} intenções definidas</span>
      </div>
      <div class="dc-summary-item" v-if="dayData.dayRating">
        <i class="ri-star-fill"></i>
        <span>Dia avaliado: {{ dayData.dayRating }}/5</span>
      </div>
      <div class="dc-summary-item" v-if="dayData.journal">
        <i class="ri-book-open-line"></i>
        <span>Diário escrito</span>
      </div>
    </div>

    <!-- Streak -->
    <div class="dc-streak" v-if="streak > 0">
      <div class="dc-streak__fire">
        <i class="ri-fire-line"></i>
      </div>
      <div class="dc-streak__info">
        <span class="dc-streak__num">{{ streak }}</span>
        <span class="dc-streak__label">{{ streak === 1 ? 'dia seguido' : 'dias seguidos' }}</span>
      </div>
    </div>

    <!-- Actions -->
    <div class="dc-actions">
      <router-link to="/codigo-mental/desafio-90-dias" class="dc-btn dc-btn--outline">
        <i class="ri-calendar-check-line"></i> Ver Dashboard
      </router-link>
      <router-link to="/codigo-mental" class="dc-btn dc-btn--ghost">
        <i class="ri-arrow-left-line"></i> Código Mental
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  dayData: { type: Object, required: true },
  todayFormatted: { type: String, default: '' },
  streak: { type: Number, default: 0 },
})
</script>

<style scoped>
.dc-container {
  padding: 4rem 0;
  text-align: center;
}

.dc-celebration {
  margin-bottom: 3rem;
}

.dc-icon {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #c9a84c, #b8943e);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dc-icon i {
  font-size: 3.6rem;
  color: #0c1118;
}

@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.dc-title {
  font-size: 3rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.4rem;
}

.dc-subtitle {
  font-size: var(--fs-md);
  color: var(--color-muted);
}

.dc-summary {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 36rem;
  margin: 0 auto 3rem;
}

.dc-summary-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.6rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 0.8rem;
  font-size: var(--fs-sm);
  color: var(--color-text);
}

.dc-summary-item i {
  color: var(--color-success);
  font-size: 1.6rem;
}

.dc-streak {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 3rem;
  padding: 1.6rem 2.4rem;
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 1rem;
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
}

.dc-streak__fire i {
  font-size: 3rem;
  color: #c9a84c;
}

.dc-streak__info {
  display: flex;
  flex-direction: column;
}

.dc-streak__num {
  font-size: 2.8rem;
  font-weight: var(--fw-bold);
  color: #c9a84c;
  font-family: 'JetBrains Mono', monospace;
  line-height: 1;
}

.dc-streak__label {
  font-size: 1.2rem;
  color: var(--color-muted);
}

.dc-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.dc-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: all 0.2s;
  font-family: inherit;
}

.dc-btn--outline {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  background: transparent;
}

.dc-btn--outline:hover {
  background: rgba(74, 134, 232, 0.08);
}

.dc-btn--ghost {
  color: var(--color-muted);
  background: transparent;
  border: 1px solid var(--color-border);
}

.dc-btn--ghost:hover {
  border-color: var(--color-muted);
  color: var(--color-white);
}
</style>
