<template>
  <div class="dc-page">
    <!-- Header -->
    <section class="dc-header">
      <div class="container-wide">
        <router-link to="/codigo-mental" class="dc-back">
          <i class="ri-arrow-left-line"></i> Código Mental
        </router-link>
        <h1 class="dc-page-title">Ciclo Diário</h1>
        <p class="dc-page-subtitle" v-if="hasProfile">
          {{ todayFormatted }} — Olá, {{ profile?.name }}
        </p>
      </div>
    </section>

    <!-- Loading -->
    <div class="dc-loading" v-if="isLoading">
      <i class="ri-loader-4-line dc-spinner"></i>
      <span>A carregar...</span>
    </div>

    <!-- Onboarding -->
    <OnboardingSetup v-else-if="!hasProfile" @complete="handleOnboardingComplete" />

    <!-- Cycle -->
    <template v-else>
      <!-- Progress Stepper -->
      <section class="dc-progress-section">
        <div class="container-wide">
          <CycleProgress
            :current="currentStep"
            :completed="dayData.stepsCompleted"
            @go="goToStep"
          />
        </div>
      </section>

      <!-- Steps Content -->
      <section class="dc-content">
        <div class="container-wide">
          <!-- Step 1: Breathing -->
          <BreathingTimer
            v-if="currentStep === 1"
            @complete="handleBreathingComplete"
          />

          <!-- Step 2: Statements -->
          <StatementsReader
            v-if="currentStep === 2"
            :profile="profile"
            @complete="handleStatementsComplete"
          />

          <!-- Step 3: Intentions -->
          <IntentionsSetter
            v-if="currentStep === 3"
            :initial-actions="dayData.actions"
            :initial-gratitude="dayData.gratitude"
            @complete="handleIntentionsComplete"
            @draft="handleDraft"
          />

          <!-- Step 4: Evening Reflection -->
          <EveningReflection
            v-if="currentStep === 4"
            :initial-data="dayData"
            @complete="handleReflectionComplete"
          />

          <!-- Step 5: Day Complete -->
          <DayComplete
            v-if="currentStep === 5"
            :day-data="dayData"
            :today-formatted="todayFormatted"
            :streak="currentStreak"
          />

          <!-- Morning complete banner -->
          <div class="dc-morning-done" v-if="isMorningComplete && currentStep === 4 && !isStepComplete(4)">
            <i class="ri-sun-line"></i>
            <div>
              <strong>Manhã completa!</strong>
              <p>Regressa à noite para a reflexão do dia.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Settings link -->
      <section class="dc-settings-section" v-if="currentStep !== 5">
        <div class="container-wide">
          <button class="dc-settings-btn" @click="showSettings = !showSettings">
            <i class="ri-settings-3-line"></i>
            Editar Perfil
          </button>

          <div v-if="showSettings" class="dc-settings-panel">
            <div class="dc-settings-field">
              <label>Nome</label>
              <input v-model="editName" type="text" class="dc-settings-input" />
            </div>

            <div class="dc-settings-field">
              <label>Objectivos</label>
              <div v-for="(obj, i) in editObjectives" :key="i" class="dc-settings-obj">
                <input v-model="obj.text" type="text" class="dc-settings-input" :placeholder="`Objectivo ${i + 1}`" />
              </div>
            </div>

            <div class="dc-settings-field">
              <label>EU SOU</label>
              <div v-for="(s, i) in editEuSou" :key="i" class="dc-settings-eu">
                <input v-model="editEuSou[i]" type="text" class="dc-settings-input" />
                <button v-if="editEuSou.length > 1" class="dc-settings-remove" @click="editEuSou.splice(i, 1)">
                  <i class="ri-close-line"></i>
                </button>
              </div>
              <button class="dc-settings-add" @click="editEuSou.push('')" v-if="editEuSou.length < 10">
                <i class="ri-add-line"></i> Adicionar
              </button>
            </div>

            <button class="dc-settings-save" @click="saveSettings">
              <i class="ri-check-line"></i> Guardar
            </button>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useOnboarding } from '@/composables/useOnboarding'
import { useDailyCycle } from '@/composables/useDailyCycle'
import { useStreaks } from '@/composables/useStreaks'
import { migrateIfNeeded } from '@/composables/useMigration'

import OnboardingSetup from '@/components/codigo-mental/OnboardingSetup.vue'
import CycleProgress from '@/components/codigo-mental/CycleProgress.vue'
import BreathingTimer from '@/components/codigo-mental/BreathingTimer.vue'
import StatementsReader from '@/components/codigo-mental/StatementsReader.vue'
import IntentionsSetter from '@/components/codigo-mental/IntentionsSetter.vue'
import EveningReflection from '@/components/codigo-mental/EveningReflection.vue'
import DayComplete from '@/components/codigo-mental/DayComplete.vue'

const {
  profile, isLoading, hasProfile,
  loadProfile, saveOnboarding, updateProfile,
} = useOnboarding()

const {
  currentStep, dayData, todayFormatted,
  loadToday, completeBreathing, completeStatements,
  completeIntentions, completeReflection,
  goToStep, saveDraft, isMorningComplete, isStepComplete,
} = useDailyCycle()

const { currentStreak, loadDays } = useStreaks()

const showSettings = ref(false)
const editName = ref('')
const editObjectives = ref([])
const editEuSou = ref([])

async function handleOnboardingComplete(data) {
  await saveOnboarding(data)
  await loadToday()
  await loadDays()
}

async function handleBreathingComplete(completed) {
  await completeBreathing(completed)
}

async function handleStatementsComplete() {
  await completeStatements()
}

async function handleIntentionsComplete(data) {
  await completeIntentions(data)
}

async function handleReflectionComplete(data) {
  await completeReflection(data)
  await loadDays() // Refresh streaks
}

async function handleDraft(data) {
  dayData.actions = data.actions
  dayData.gratitude = data.gratitude
  await saveDraft()
}

async function saveSettings() {
  await updateProfile({
    name: editName.value,
    objectives: editObjectives.value.filter(o => o.text.trim()),
    euSou: editEuSou.value.filter(s => s.trim()),
  })
  showSettings.value = false
}

onMounted(async () => {
  await migrateIfNeeded()
  await loadProfile()
  if (hasProfile.value) {
    await loadToday()
    await loadDays()
    // Populate settings form
    editName.value = profile.value?.name || ''
    editObjectives.value = [...(profile.value?.objectives || [])]
    editEuSou.value = [...(profile.value?.euSou || [])]
  }
})
</script>

<style scoped>
.dc-page {
  min-height: 100vh;
  padding-top: 10rem;
  padding-bottom: 6rem;
}

.dc-header {
  padding: 2rem 0 3rem;
}

.dc-back {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--fs-sm);
  color: var(--color-muted);
  text-decoration: none;
  margin-bottom: 2rem;
}

.dc-back:hover {
  color: var(--color-primary);
}

.dc-page-title {
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.6rem;
}

.dc-page-subtitle {
  font-size: var(--fs-md);
  color: var(--color-muted);
}

.dc-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 8rem 2rem;
  color: var(--color-muted);
}

.dc-spinner {
  font-size: 3rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.dc-progress-section {
  padding-bottom: 2rem;
}

.dc-content {
  padding-bottom: 4rem;
}

/* Morning complete banner */
.dc-morning-done {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem 2.4rem;
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 1rem;
  margin-top: 2rem;
}

.dc-morning-done i {
  font-size: 2.4rem;
  color: #c9a84c;
}

.dc-morning-done strong {
  font-size: var(--fs-sm);
  color: var(--color-white);
  display: block;
  margin-bottom: 0.2rem;
}

.dc-morning-done p {
  font-size: 1.2rem;
  color: var(--color-muted);
}

/* Settings */
.dc-settings-section {
  padding-top: 4rem;
  border-top: 1px solid var(--color-border);
}

.dc-settings-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.4rem;
  font-size: 1.2rem;
  color: var(--color-muted);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}

.dc-settings-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.dc-settings-panel {
  margin-top: 2rem;
  padding: 2.4rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  max-width: 50rem;
}

.dc-settings-field {
  margin-bottom: 2rem;
}

.dc-settings-field label {
  display: block;
  font-size: 1.3rem;
  color: var(--color-muted);
  font-weight: var(--fw-semibold);
  margin-bottom: 0.8rem;
}

.dc-settings-input {
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: var(--fs-sm);
  font-family: inherit;
  margin-bottom: 0.6rem;
}

.dc-settings-input:focus {
  border-color: var(--color-primary);
  outline: none;
}

.dc-settings-obj,
.dc-settings-eu {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-bottom: 0.4rem;
}

.dc-settings-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  flex-shrink: 0;
}

.dc-settings-remove:hover {
  border-color: var(--color-danger);
  color: var(--color-danger);
}

.dc-settings-add {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 1.2rem;
  color: var(--color-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.dc-settings-add:hover {
  color: var(--color-primary);
}

.dc-settings-save {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 2rem;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}

.dc-settings-save:hover {
  filter: brightness(1.1);
}
</style>
