<template>
  <div class="er-container">
    <h2 class="er-title">
      <i class="ri-moon-line"></i> Reflexão da Noite
    </h2>
    <p class="er-desc">
      Revê o teu dia. O que correu bem? O que podes melhorar?
    </p>

    <!-- What went well -->
    <div class="er-section">
      <h3 class="er-section-title">
        <i class="ri-thumb-up-line"></i> 3 coisas que correram bem
      </h3>
      <div class="er-items">
        <div v-for="(w, i) in wentWell" :key="i" class="er-item">
          <span class="er-item__num">{{ i + 1 }}</span>
          <input
            v-model="wentWell[i]"
            type="text"
            class="er-input"
            placeholder="O que correu bem?"
          />
        </div>
      </div>
    </div>

    <!-- What went wrong -->
    <div class="er-section">
      <h3 class="er-section-title">
        <i class="ri-bug-line"></i> O que posso melhorar
      </h3>
      <textarea
        v-model="wentWrong"
        class="er-textarea"
        rows="2"
        placeholder="Que bug encontrei hoje? O que ajustar amanhã?"
      ></textarea>
    </div>

    <!-- Protocol used -->
    <div class="er-section">
      <h3 class="er-section-title">
        <i class="ri-shield-check-line"></i> Protocolo usado
      </h3>
      <input
        v-model="protocol"
        type="text"
        class="er-input er-input--full"
        placeholder="Ex: Respiração 5-5-5, Reframing, Protocolo de Crise..."
      />
    </div>

    <!-- Day Rating -->
    <div class="er-section">
      <h3 class="er-section-title">Como avalias o teu dia?</h3>
      <div class="er-rating">
        <button
          v-for="r in 5"
          :key="r"
          class="er-rating__star"
          :class="{ 'er-rating__star--active': dayRating >= r }"
          @click="dayRating = r"
        >
          <i :class="dayRating >= r ? 'ri-star-fill' : 'ri-star-line'"></i>
        </button>
        <span class="er-rating__label">{{ ratingLabel }}</span>
      </div>
    </div>

    <!-- Journal -->
    <div class="er-section">
      <h3 class="er-section-title">
        <i class="ri-book-open-line"></i> Diário (opcional)
      </h3>
      <textarea
        v-model="journal"
        class="er-textarea er-textarea--lg"
        rows="4"
        placeholder="Pensamentos livres sobre o dia..."
      ></textarea>
    </div>

    <!-- Actions -->
    <div class="er-actions">
      <button
        class="er-btn er-btn--gold"
        :disabled="!isValid"
        @click="submit"
      >
        <i class="ri-check-line"></i> Completar Dia
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  initialData: { type: Object, default: () => ({}) },
})

const emit = defineEmits(['complete'])

const wentWell = ref(['', '', ''])
const wentWrong = ref('')
const protocol = ref('')
const dayRating = ref(0)
const journal = ref('')

const ratingLabels = ['', 'Mau', 'Fraco', 'Normal', 'Bom', 'Excelente']
const ratingLabel = computed(() => ratingLabels[dayRating.value] || '')

const isValid = computed(() => {
  return wentWell.value.some(w => w.trim()) && dayRating.value > 0
})

function submit() {
  emit('complete', {
    wentWell: [...wentWell.value],
    wentWrong: wentWrong.value,
    protocol: protocol.value,
    dayRating: dayRating.value,
    journal: journal.value,
  })
}

onMounted(() => {
  if (props.initialData.wentWell) wentWell.value = [...props.initialData.wentWell]
  if (props.initialData.wentWrong) wentWrong.value = props.initialData.wentWrong
  if (props.initialData.protocol) protocol.value = props.initialData.protocol
  if (props.initialData.dayRating) dayRating.value = props.initialData.dayRating
  if (props.initialData.journal) journal.value = props.initialData.journal
})
</script>

<style scoped>
.er-container {
  padding: 2rem 0;
  max-width: 56rem;
  margin: 0 auto;
}

.er-title {
  font-size: 2rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.6rem;
  text-align: center;
}

.er-title i {
  color: #c9a84c;
}

.er-desc {
  font-size: var(--fs-sm);
  color: var(--color-muted);
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
}

.er-section {
  margin-bottom: 2rem;
}

.er-section-title {
  font-size: 1.4rem;
  font-weight: var(--fw-semibold);
  color: var(--color-muted);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.er-section-title i {
  color: var(--color-primary);
}

.er-items {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.er-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.er-item__num {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background: rgba(52, 195, 143, 0.1);
  border: 1px solid rgba(52, 195, 143, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
  color: var(--color-success);
  font-family: 'JetBrains Mono', monospace;
  flex-shrink: 0;
}

.er-input {
  flex: 1;
  padding: 1rem 1.4rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: var(--fs-sm);
  font-family: inherit;
}

.er-input--full {
  width: 100%;
}

.er-input:focus {
  border-color: var(--color-primary);
  outline: none;
}

.er-textarea {
  width: 100%;
  padding: 1rem 1.4rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: var(--fs-sm);
  font-family: inherit;
  resize: vertical;
}

.er-textarea--lg {
  min-height: 10rem;
}

.er-textarea:focus {
  border-color: var(--color-primary);
  outline: none;
}

/* Rating */
.er-rating {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.er-rating__star {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2.4rem;
  color: var(--color-border);
  transition: all 0.15s;
  padding: 0.2rem;
}

.er-rating__star--active {
  color: #c9a84c;
}

.er-rating__star:hover {
  transform: scale(1.2);
}

.er-rating__label {
  font-size: 1.3rem;
  color: var(--color-muted);
  margin-left: 0.8rem;
  font-weight: var(--fw-semibold);
}

/* Actions */
.er-actions {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.er-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1.2rem 3rem;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.er-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.er-btn--gold {
  background: linear-gradient(135deg, #c9a84c, #b8943e);
  color: #0c1118;
}

.er-btn--gold:hover:not(:disabled) {
  background: linear-gradient(135deg, #d4b65c, #c9a84c);
}
</style>
