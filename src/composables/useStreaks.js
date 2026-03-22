import { ref, computed } from 'vue'
import { getAllDays } from './useIndexedDB'

export function useStreaks() {
  const days = ref([])
  const isLoading = ref(true)

  async function loadDays() {
    isLoading.value = true
    try {
      const allDays = await getAllDays()
      days.value = allDays.sort((a, b) => a.date.localeCompare(b.date))
    } catch (err) {
      console.error('Failed to load days:', err)
    } finally {
      isLoading.value = false
    }
  }

  const completedDaysCount = computed(() => {
    return days.value.filter(d => d.dayCompleted).length
  })

  const currentStreak = computed(() => {
    const completed = new Set(
      days.value.filter(d => d.dayCompleted).map(d => d.date)
    )
    if (completed.size === 0) return 0

    let streak = 0
    const now = new Date()
    now.setHours(0, 0, 0, 0)

    for (let i = 0; i < 365; i++) {
      const d = new Date(now)
      d.setDate(d.getDate() - i)
      const key = d.toISOString().split('T')[0]
      if (completed.has(key)) {
        streak++
      } else if (i > 0) {
        break
      }
      // Allow today to be incomplete (i === 0 and not found is ok)
    }
    return streak
  })

  const bestStreak = computed(() => {
    const sorted = days.value
      .filter(d => d.dayCompleted)
      .map(d => d.date)
      .sort()
    if (sorted.length === 0) return 0

    let best = 1
    let current = 1

    for (let i = 1; i < sorted.length; i++) {
      const prev = new Date(sorted[i - 1])
      const curr = new Date(sorted[i])
      const diff = (curr - prev) / (1000 * 60 * 60 * 24)

      if (diff === 1) {
        current++
        if (current > best) best = current
      } else {
        current = 1
      }
    }
    return best
  })

  const percentage = computed(() => {
    return Math.round((completedDaysCount.value / 90) * 100)
  })

  // Build a 90-day grid from start date
  function build90DayGrid(startDate) {
    const start = new Date(startDate)
    start.setHours(0, 0, 0, 0)
    const completedSet = new Set(
      days.value.filter(d => d.dayCompleted).map(d => d.date)
    )
    const notesMap = new Map(
      days.value.filter(d => d.journal).map(d => [d.date, d.journal])
    )

    const grid = []
    for (let i = 0; i < 90; i++) {
      const d = new Date(start)
      d.setDate(d.getDate() + i)
      const date = d.toISOString().split('T')[0]
      grid.push({
        day: i + 1,
        date,
        completed: completedSet.has(date),
        note: notesMap.get(date) || '',
      })
    }
    return grid
  }

  const milestoneMessage = computed(() => {
    const done = completedDaysCount.value
    if (done === 90) return 'Desafio completo! 90 dias. Parabéns.'
    if (done >= 60) return `${done}/90 — A recta final. Não pares agora.`
    if (done >= 30) return `${done}/90 — Um mês. O hábito está a formar-se.`
    if (done >= 21) return `${done}/90 — 21 dias. A ciência diz que um hábito começa aqui.`
    if (done >= 7) return `${done}/90 — Uma semana. O momentum está a construir-se.`
    if (done > 0) return `${done}/90 — Começaste. Isso já é mais do que a maioria.`
    return ''
  })

  // Last 7 days performance for trends
  const weekTrend = computed(() => {
    const now = new Date()
    const last7 = []
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now)
      d.setDate(d.getDate() - i)
      const date = d.toISOString().split('T')[0]
      const dayEntry = days.value.find(day => day.date === date)
      last7.push({
        date,
        weekday: d.toLocaleDateString('pt-PT', { weekday: 'short' }),
        completed: dayEntry?.dayCompleted || false,
        rating: dayEntry?.dayRating || 0,
      })
    }
    return last7
  })

  return {
    days,
    isLoading,
    loadDays,
    completedDaysCount,
    currentStreak,
    bestStreak,
    percentage,
    build90DayGrid,
    milestoneMessage,
    weekTrend,
  }
}
