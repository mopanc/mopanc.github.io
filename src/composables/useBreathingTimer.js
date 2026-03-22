import { ref, computed, onBeforeUnmount } from 'vue'
import { addBreathingSession } from './useIndexedDB'

export function useBreathingTimer(options = {}) {
  const duration = options.duration || 300 // 5 minutes
  const phaseTime = options.phaseTime || 5000 // 5 seconds per phase

  const running = ref(false)
  const phase = ref('idle') // 'idle' | 'inhale' | 'exhale'
  const elapsed = ref(0)
  const cycle = ref(0)
  const completed = ref(false)
  const skipped = ref(false)

  let mainTimer = null
  let phaseTimer = null
  const startedAt = ref(null)

  const display = computed(() => {
    const remaining = duration - elapsed.value
    if (remaining <= 0) return '0:00'
    const m = Math.floor(remaining / 60)
    const s = remaining % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  })

  const progress = computed(() => {
    return Math.min(100, (elapsed.value / duration) * 100)
  })

  const phaseLabel = computed(() => {
    if (phase.value === 'inhale') return 'Inspira'
    if (phase.value === 'exhale') return 'Expira'
    return 'Preparar'
  })

  function start() {
    if (completed.value) reset()
    running.value = true
    phase.value = 'inhale'
    startedAt.value = startedAt.value || new Date().toISOString()

    mainTimer = setInterval(() => {
      elapsed.value++
      if (elapsed.value >= duration) {
        complete()
      }
    }, 1000)

    phaseTimer = setInterval(() => {
      phase.value = phase.value === 'inhale' ? 'exhale' : 'inhale'
      if (phase.value === 'inhale') {
        cycle.value++
      }
    }, phaseTime)
  }

  function pause() {
    running.value = false
    clearInterval(mainTimer)
    clearInterval(phaseTimer)
  }

  function toggle() {
    running.value ? pause() : start()
  }

  function reset() {
    pause()
    elapsed.value = 0
    cycle.value = 0
    phase.value = 'idle'
    completed.value = false
    skipped.value = false
    startedAt.value = null
  }

  async function complete() {
    pause()
    completed.value = true
    elapsed.value = duration
    phase.value = 'idle'

    try {
      await addBreathingSession({
        date: new Date().toISOString().split('T')[0],
        startedAt: startedAt.value,
        duration,
        completed: true,
      })
    } catch (err) {
      console.error('Failed to save breathing session:', err)
    }
  }

  async function skip() {
    pause()
    skipped.value = true
    phase.value = 'idle'

    if (elapsed.value > 0) {
      try {
        await addBreathingSession({
          date: new Date().toISOString().split('T')[0],
          startedAt: startedAt.value,
          duration: elapsed.value,
          completed: false,
        })
      } catch (err) {
        console.error('Failed to save breathing session:', err)
      }
    }
  }

  onBeforeUnmount(() => {
    pause()
  })

  return {
    running,
    phase,
    elapsed,
    cycle,
    completed,
    skipped,
    display,
    progress,
    phaseLabel,
    start,
    pause,
    toggle,
    reset,
    complete,
    skip,
  }
}
