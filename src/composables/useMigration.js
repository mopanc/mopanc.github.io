import { saveProfile, saveDay, addBreathingSession, getProfile, getDay } from './useIndexedDB'

const MIGRATION_FLAG = 'cm_migrated'

export async function migrateIfNeeded() {
  if (typeof window === 'undefined') return false

  // Already migrated
  if (localStorage.getItem(MIGRATION_FLAG)) return false

  let migrated = false

  try {
    // Check if there's already a profile in IndexedDB (avoid double-migration)
    const existing = await getProfile()
    if (existing) {
      localStorage.setItem(MIGRATION_FLAG, '1')
      return false
    }

    // ── Migrate Kit Mental config → profile ──
    const kitData = safeJsonParse(localStorage.getItem('cm_kit'))
    if (kitData?.config) {
      await saveProfile({
        name: kitData.config.name || '',
        startDate: kitData.config.startDate || new Date().toISOString().split('T')[0],
        objectives: [], // Old format didn't have structured objectives
        euSou: [],
      })
      migrated = true
    }

    // ── Migrate daily entries → days store ──
    const dailyData = safeJsonParse(localStorage.getItem('cm_daily'))
    if (dailyData && typeof dailyData === 'object') {
      for (const [date, entry] of Object.entries(dailyData)) {
        if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) continue

        const hasMorning = entry.morning?.some(Boolean)
        const hasEvening = entry.evening?.some(e => e && e.trim())
        const dayCompleted = hasMorning && hasEvening

        await saveDay({
          date,
          breathingCompleted: entry.morning?.[0] || false, // "3 respirações profundas"
          breathingSkipped: false,
          statementsRead: entry.morning?.[3] || false, // "Ler os meus objectivos"
          actions: entry.actions || ['', '', ''],
          gratitude: entry.gratitude || '',
          wentWell: entry.evening || ['', '', ''],
          wentWrong: '',
          protocol: '',
          dayRating: 0,
          journal: entry.observer || '',
          stepsCompleted: buildStepsCompleted(entry),
          dayCompleted: dayCompleted ? 1 : 0,
        })
      }
      migrated = true
    }

    // ── Migrate desafio 90 dias ──
    const desafioData = safeJsonParse(localStorage.getItem('cm_desafio'))
    if (desafioData?.days && desafioData.startDate) {
      const start = new Date(desafioData.startDate)
      for (let i = 0; i < desafioData.days.length; i++) {
        if (!desafioData.days[i]) continue
        const d = new Date(start)
        d.setDate(d.getDate() + i)
        const date = d.toISOString().split('T')[0]
        const existingDay = await getDay(date)
        if (!existingDay) {
          await saveDay({
            date,
            breathingCompleted: false,
            breathingSkipped: false,
            statementsRead: false,
            actions: ['', '', ''],
            gratitude: '',
            wentWell: ['', '', ''],
            wentWrong: '',
            protocol: '',
            dayRating: 0,
            journal: desafioData.notes?.[i] || '',
            stepsCompleted: [5],
            dayCompleted: 1,
          })
        }
      }
      migrated = true
    }

    // ── Migrate breathing sessions count ──
    const breatheSessions = parseInt(localStorage.getItem('cm_breathe_sessions') || '0', 10)
    if (breatheSessions > 0) {
      for (let i = 0; i < breatheSessions; i++) {
        await addBreathingSession({
          date: new Date().toISOString().split('T')[0],
          startedAt: new Date().toISOString(),
          duration: 300,
          completed: true,
        })
      }
      migrated = true
    }

    // Mark migration complete
    localStorage.setItem(MIGRATION_FLAG, '1')
  } catch (err) {
    console.error('Migration error:', err)
  }

  return migrated
}

function buildStepsCompleted(entry) {
  const steps = []
  if (entry.morning?.some(Boolean)) steps.push(1, 2)
  if (entry.actions?.some(a => a?.trim())) steps.push(3)
  if (entry.evening?.some(e => e?.trim())) steps.push(4)
  if (steps.length >= 4) steps.push(5)
  return steps
}

function safeJsonParse(str) {
  try {
    return JSON.parse(str)
  } catch {
    return null
  }
}
