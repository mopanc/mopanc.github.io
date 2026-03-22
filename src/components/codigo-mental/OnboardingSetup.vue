<template>
  <div class="ob-overlay">
    <div class="ob-card">
      <!-- Progress dots -->
      <div class="ob-dots">
        <span
          v-for="s in 3"
          :key="s"
          class="ob-dot"
          :class="{ 'ob-dot--active': step === s, 'ob-dot--done': step > s }"
        ></span>
      </div>

      <!-- Step 1: Name + Start Date -->
      <div v-if="step === 1" class="ob-step">
        <h2 class="ob-title">Bem-vindo ao Ciclo Diário</h2>
        <p class="ob-desc">Vamos configurar o teu perfil. Demora menos de 2 minutos.</p>

        <div class="ob-field">
          <label class="ob-label">O teu nome</label>
          <input
            v-model="form.name"
            type="text"
            class="ob-input"
            placeholder="Como te chamas?"
            autofocus
          />
        </div>

        <div class="ob-field">
          <label class="ob-label">Data de início</label>
          <input v-model="form.startDate" type="date" class="ob-input" />
        </div>

        <button class="ob-btn ob-btn--primary" :disabled="!form.name.trim()" @click="step = 2">
          Continuar <i class="ri-arrow-right-line"></i>
        </button>
      </div>

      <!-- Step 2: 5 Objectives -->
      <div v-if="step === 2" class="ob-step">
        <h2 class="ob-title">5 Objectivos a 5 Anos</h2>
        <p class="ob-desc">O que queres alcançar? Podes editar mais tarde.</p>

        <div
          v-for="(obj, i) in form.objectives"
          :key="i"
          class="ob-objective"
        >
          <div class="ob-obj-header">
            <span class="ob-obj-num">{{ i + 1 }}</span>
          </div>
          <input
            v-model="obj.text"
            type="text"
            class="ob-input"
            :placeholder="`Objectivo ${i + 1}`"
          />
          <div class="ob-obj-details">
            <input v-model="obj.deadline" type="text" class="ob-input ob-input--sm" placeholder="Prazo" />
            <input v-model="obj.metric" type="text" class="ob-input ob-input--sm" placeholder="Métrica" />
            <input v-model="obj.why" type="text" class="ob-input ob-input--sm" placeholder="Porquê" />
          </div>
        </div>

        <div class="ob-nav">
          <button class="ob-btn ob-btn--ghost" @click="step = 1">
            <i class="ri-arrow-left-line"></i> Voltar
          </button>
          <button
            class="ob-btn ob-btn--primary"
            :disabled="!form.objectives.some(o => o.text.trim())"
            @click="step = 3"
          >
            Continuar <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <!-- Step 3: EU SOU Statements -->
      <div v-if="step === 3" class="ob-step">
        <h2 class="ob-title">Declarações "EU SOU"</h2>
        <p class="ob-desc">
          Escreve afirmações que definem quem queres ser. Vais lê-las todos os dias.
        </p>

        <div class="ob-statements">
          <div v-for="(s, i) in form.euSou" :key="i" class="ob-statement-row">
            <span class="ob-statement-prefix">EU SOU</span>
            <input
              v-model="form.euSou[i]"
              type="text"
              class="ob-input"
              placeholder="disciplinado, focado, imparável..."
            />
            <button
              v-if="form.euSou.length > 1"
              class="ob-btn-icon"
              @click="form.euSou.splice(i, 1)"
            >
              <i class="ri-close-line"></i>
            </button>
          </div>
          <button
            v-if="form.euSou.length < 10"
            class="ob-btn ob-btn--ghost ob-btn--sm"
            @click="form.euSou.push('')"
          >
            <i class="ri-add-line"></i> Adicionar
          </button>
        </div>

        <div class="ob-nav">
          <button class="ob-btn ob-btn--ghost" @click="step = 2">
            <i class="ri-arrow-left-line"></i> Voltar
          </button>
          <button
            class="ob-btn ob-btn--gold"
            :disabled="!form.euSou.some(s => s.trim()) || saving"
            @click="finish"
          >
            <i class="ri-check-line"></i>
            {{ saving ? 'A guardar...' : 'Começar Ciclo' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['complete'])

const step = ref(1)
const saving = ref(false)

const form = reactive({
  name: '',
  startDate: new Date().toISOString().split('T')[0],
  objectives: Array.from({ length: 5 }, () => ({ text: '', deadline: '', metric: '', why: '' })),
  euSou: ['', '', ''],
})

async function finish() {
  saving.value = true
  try {
    emit('complete', {
      name: form.name.trim(),
      startDate: form.startDate,
      objectives: form.objectives.filter(o => o.text.trim()),
      euSou: form.euSou.filter(s => s.trim()),
    })
  } finally {
    saving.value = false
  }
}
</script>

<style scoped>
.ob-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(12, 17, 24, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
}

.ob-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1.6rem;
  padding: 3.2rem;
  max-width: 56rem;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.ob-dots {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.ob-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--color-border);
  transition: all 0.3s;
}

.ob-dot--active {
  background: var(--color-primary);
  transform: scale(1.3);
}

.ob-dot--done {
  background: var(--color-success);
}

.ob-step {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.ob-title {
  font-size: 2.4rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.8rem;
}

.ob-desc {
  font-size: var(--fs-sm);
  color: var(--color-muted);
  margin-bottom: 2.4rem;
  line-height: 1.6;
}

.ob-field {
  margin-bottom: 1.6rem;
}

.ob-label {
  display: block;
  font-size: 1.3rem;
  color: var(--color-muted);
  font-weight: var(--fw-semibold);
  margin-bottom: 0.6rem;
}

.ob-input {
  width: 100%;
  padding: 1rem 1.4rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: var(--fs-sm);
  font-family: inherit;
}

.ob-input:focus {
  border-color: var(--color-primary);
  outline: none;
}

.ob-input--sm {
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
}

.ob-objective {
  margin-bottom: 2rem;
  padding: 1.6rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
}

.ob-obj-header {
  margin-bottom: 0.8rem;
}

.ob-obj-num {
  font-size: 1.4rem;
  font-weight: var(--fw-bold);
  color: var(--color-primary);
  font-family: 'JetBrains Mono', monospace;
}

.ob-obj-details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.8rem;
  margin-top: 0.8rem;
}

.ob-statements {
  margin-bottom: 2rem;
}

.ob-statement-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.ob-statement-prefix {
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
  color: #c9a84c;
  white-space: nowrap;
  min-width: 5rem;
}

.ob-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  flex-shrink: 0;
}

.ob-btn-icon:hover {
  border-color: var(--color-danger);
  color: var(--color-danger);
}

.ob-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}

.ob-btn {
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

.ob-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.ob-btn--primary {
  background: var(--color-primary);
  color: #fff;
}

.ob-btn--primary:hover:not(:disabled) {
  filter: brightness(1.1);
}

.ob-btn--gold {
  background: linear-gradient(135deg, #c9a84c, #b8943e);
  color: #0c1118;
}

.ob-btn--gold:hover:not(:disabled) {
  background: linear-gradient(135deg, #d4b65c, #c9a84c);
}

.ob-btn--ghost {
  background: transparent;
  color: var(--color-muted);
}

.ob-btn--ghost:hover {
  color: var(--color-white);
}

.ob-btn--sm {
  padding: 0.6rem 1.2rem;
  font-size: 1.2rem;
}

@media (max-width: 600px) {
  .ob-card {
    padding: 2rem;
  }

  .ob-obj-details {
    grid-template-columns: 1fr;
  }

  .ob-statement-row {
    flex-wrap: wrap;
  }
}
</style>
