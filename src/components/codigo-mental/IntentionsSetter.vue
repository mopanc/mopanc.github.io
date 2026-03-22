<template>
  <div class="is-container">
    <h2 class="is-title">
      <i class="ri-lightbulb-line"></i> Intenções do Dia
    </h2>
    <p class="is-desc">
      Define 3 acções concretas para hoje e uma gratidão.
    </p>

    <!-- 3 Actions -->
    <div class="is-section">
      <h3 class="is-section-title">As minhas 3 acções de hoje</h3>
      <div class="is-actions">
        <div v-for="(a, i) in actions" :key="i" class="is-action">
          <span class="is-action__num">{{ i + 1 }}</span>
          <input
            v-model="actions[i]"
            type="text"
            class="is-input"
            :placeholder="placeholders[i]"
            @input="emitDraft"
          />
        </div>
      </div>
    </div>

    <!-- Gratitude -->
    <div class="is-section">
      <h3 class="is-section-title">
        <i class="ri-heart-line"></i> Sou grato por...
      </h3>
      <textarea
        v-model="gratitude"
        class="is-textarea"
        rows="3"
        placeholder="O que agradeces hoje?"
        @input="emitDraft"
      ></textarea>
    </div>

    <!-- Actions -->
    <div class="is-actions-bar">
      <button
        class="is-btn is-btn--gold"
        :disabled="!isValid"
        @click="submit"
      >
        <i class="ri-check-line"></i> Definir Intenções
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  initialActions: { type: Array, default: () => ['', '', ''] },
  initialGratitude: { type: String, default: '' },
})

const emit = defineEmits(['complete', 'draft'])

const actions = ref([...props.initialActions])
const gratitude = ref(props.initialGratitude)

const placeholders = [
  'Ex: Terminar o relatório do projecto X',
  'Ex: 30 min de exercício',
  'Ex: Ligar ao João',
]

const isValid = computed(() => {
  return actions.value.some(a => a.trim())
})

function emitDraft() {
  emit('draft', { actions: [...actions.value], gratitude: gratitude.value })
}

function submit() {
  emit('complete', {
    actions: [...actions.value],
    gratitude: gratitude.value,
  })
}

onMounted(() => {
  if (props.initialActions.some(a => a)) {
    actions.value = [...props.initialActions]
  }
  if (props.initialGratitude) {
    gratitude.value = props.initialGratitude
  }
})
</script>

<style scoped>
.is-container {
  padding: 2rem 0;
  max-width: 56rem;
  margin: 0 auto;
}

.is-title {
  font-size: 2rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.6rem;
  text-align: center;
}

.is-title i {
  color: #c9a84c;
}

.is-desc {
  font-size: var(--fs-sm);
  color: var(--color-muted);
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
}

.is-section {
  margin-bottom: 2.4rem;
}

.is-section-title {
  font-size: 1.4rem;
  font-weight: var(--fw-semibold);
  color: var(--color-muted);
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.is-section-title i {
  color: var(--color-danger);
}

.is-actions {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.is-action {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.is-action__num {
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

.is-input {
  flex: 1;
  padding: 1rem 1.4rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: var(--fs-sm);
  font-family: inherit;
}

.is-input:focus {
  border-color: var(--color-primary);
  outline: none;
}

.is-textarea {
  width: 100%;
  padding: 1rem 1.4rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: var(--fs-sm);
  font-family: inherit;
  resize: vertical;
  min-height: 8rem;
}

.is-textarea:focus {
  border-color: var(--color-primary);
  outline: none;
}

.is-actions-bar {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.is-btn {
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

.is-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.is-btn--gold {
  background: linear-gradient(135deg, #c9a84c, #b8943e);
  color: #0c1118;
}

.is-btn--gold:hover:not(:disabled) {
  background: linear-gradient(135deg, #d4b65c, #c9a84c);
}
</style>
