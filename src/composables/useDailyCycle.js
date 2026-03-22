import { ref, computed, reactive } from 'vue'
import { getDay, saveDay } from './useIndexedDB'

const STEPS = {
  BREATHING: 1,
  STATEMENTS: 2,
  INTENTIONS: 3,
  REFLECTION: 4,
  COMPLETE: 5,
}

export function useDailyCycle() {
  const currentStep = ref(1)
  const isLoading = ref(true)

  const today = computed(() => new Date().toISOString().split('T')[0])

  const todayFormatted = computed(() => {
    const d = new Date()
    return d
      .toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })
      .replace(/^\w/, c => c.toUpperCase())
  })

  const dayData = reactive({
    date: '',
    breathingCompleted: false,
    breathingSkipped: false,
    statementsRead: false,
    actions: ['', '', ''],
    gratitude: '',
    wentWell: ['', '', ''],
    wentWrong: '',
    protocol: '',
    dayRating: 0,
    journal: '',
    stepsCompleted: [],
    dayCompleted: 0,
  })

  // ── Load today's data ──
  async function loadToday() {
    isLoading.value = true
    try {
      dayData.date = today.value
      const existing = await getDay(today.value)
      if (existing) {
        Object.assign(dayData, existing)
        // Resume at the next incomplete step
        currentStep.value = getNextStep()
      } else {
        resetDayData()
      }
    } catch (err) {
      console.error('Failed to load daily cycle:', err)
      resetDayData()
    } finally {
      isLoading.value = false
    }
  }

  function resetDayData() {
    dayData.date = today.value
    dayData.breathingCompleted = false
    dayData.breathingSkipped = false
    dayData.statementsRead = false
    dayData.actions = ['', '', '']
    dayData.gratitude = ''
    dayData.wentWell = ['', '', '']
    dayData.wentWrong = ''
    dayData.protocol = ''
    dayData.dayRating = 0
    dayData.journal = ''
    dayData.stepsCompleted = []
    dayData.dayCompleted = 0
    currentStep.value = 1
  }

  // ── Step completion ──
  function markStepComplete(step) {
    if (!dayData.stepsCompleted.includes(step)) {
      dayData.stepsCompleted.push(step)
    }
  }

  function isStepComplete(step) {
    return dayData.stepsCompleted.includes(step)
  }

  function getNextStep() {
    if (dayData.dayCompleted) return STEPS.COMPLETE
    for (let s = 1; s <= 4; s++) {
      if (!dayData.stepsCompleted.includes(s)) return s
    }
    return STEPS.COMPLETE
  }

  // ── Step 1: Breathing ──
  async function completeBreathing(completed = true) {
    dayData.breathingCompleted = completed
    dayData.breathingSkipped = !completed
    markStepComplete(STEPS.BREATHING)
    await save()
    currentStep.value = STEPS.STATEMENTS
  }

  // ── Step 2: Statements ──
  async function completeStatements() {
    dayData.statementsRead = true
    markStepComplete(STEPS.STATEMENTS)
    await save()
    currentStep.value = STEPS.INTENTIONS
  }

  // ── Step 3: Intentions ──
  async function completeIntentions(data) {
    dayData.actions = data.actions || dayData.actions
    dayData.gratitude = data.gratitude || dayData.gratitude
    markStepComplete(STEPS.INTENTIONS)
    await save()
    // After morning steps, stop — evening reflection later
    currentStep.value = STEPS.REFLECTION
  }

  // ── Step 4: Reflection ──
  async function completeReflection(data) {
    dayData.wentWell = data.wentWell || dayData.wentWell
    dayData.wentWrong = data.wentWrong || dayData.wentWrong
    dayData.protocol = data.protocol || dayData.protocol
    dayData.dayRating = data.dayRating || dayData.dayRating
    dayData.journal = data.journal || dayData.journal
    markStepComplete(STEPS.REFLECTION)
    await save()
    await completeDay()
  }

  // ── Step 5: Day Complete ──
  async function completeDay() {
    markStepComplete(STEPS.COMPLETE)
    dayData.dayCompleted = 1
    await save()
    currentStep.value = STEPS.COMPLETE
  }

  // ── Navigation ──
  function goToStep(step) {
    if (step >= 1 && step <= 5) {
      currentStep.value = step
    }
  }

  // ── Persistence ──
  async function save() {
    try {
      dayData.date = today.value
      await saveDay({ ...dayData })
    } catch (err) {
      console.error('Failed to save daily cycle:', err)
    }
  }

  // Auto-save on field changes
  async function saveDraft() {
    await save()
  }

  // ── Computed ──
  const isMorningComplete = computed(() => {
    return [STEPS.BREATHING, STEPS.STATEMENTS, STEPS.INTENTIONS].every(s =>
      dayData.stepsCompleted.includes(s)
    )
  })

  const isEveningComplete = computed(() => {
    return dayData.stepsCompleted.includes(STEPS.REFLECTION)
  })

  const isDayComplete = computed(() => {
    return dayData.dayCompleted === 1
  })

  const completionPercentage = computed(() => {
    return Math.round((dayData.stepsCompleted.length / 5) * 100)
  })

  return {
    STEPS,
    currentStep,
    isLoading,
    today,
    todayFormatted,
    dayData,
    loadToday,
    completeBreathing,
    completeStatements,
    completeIntentions,
    completeReflection,
    completeDay,
    goToStep,
    saveDraft,
    isStepComplete,
    isMorningComplete,
    isEveningComplete,
    isDayComplete,
    completionPercentage,
  }
}
