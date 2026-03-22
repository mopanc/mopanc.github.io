<template>
  <div class="d9-page">
    <!-- Header -->
    <section class="d9-header">
      <div class="container-wide">
        <router-link to="/codigo-mental" class="d9-back">
          <i class="ri-arrow-left-line"></i> Código Mental
        </router-link>
        <h1 class="d9-title">Desafio 90 Dias</h1>
        <p class="d9-subtitle">
          Dashboard do teu progresso. Dias são marcados automaticamente ao completar o ciclo diário.
        </p>
      </div>
    </section>

    <!-- Loading -->
    <div class="d9-loading" v-if="isLoading">
      <i class="ri-loader-4-line d9-spinner"></i>
    </div>

    <template v-else>
      <!-- Stats -->
      <section class="d9-stats-section">
        <div class="container-wide">
          <div class="d9-stats">
            <div class="d9-stat">
              <span class="d9-stat__value">{{ completedDaysCount }}</span>
              <span class="d9-stat__label">dias completos</span>
            </div>
            <div class="d9-stat">
              <span class="d9-stat__value">{{ currentStreak }}</span>
              <span class="d9-stat__label">streak actual</span>
            </div>
            <div class="d9-stat">
              <span class="d9-stat__value">{{ bestStreak }}</span>
              <span class="d9-stat__label">melhor streak</span>
            </div>
            <div class="d9-stat">
              <span class="d9-stat__value">{{ percentage }}%</span>
              <span class="d9-stat__label">progresso</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Milestone -->
      <section class="d9-milestone-section" v-if="milestoneMessage">
        <div class="container-wide">
          <div class="d9-milestone">
            <i class="ri-flag-line"></i>
            <span>{{ milestoneMessage }}</span>
          </div>
        </div>
      </section>

      <!-- Week Trend -->
      <section class="d9-trend-section" v-if="weekTrend.length">
        <div class="container-wide">
          <h2 class="d9-section-title">Últimos 7 Dias</h2>
          <div class="d9-trend">
            <div
              v-for="d in weekTrend"
              :key="d.date"
              class="d9-trend-day"
              :class="{ 'd9-trend-day--done': d.completed }"
            >
              <span class="d9-trend-day__label">{{ d.weekday }}</span>
              <div class="d9-trend-day__dot">
                <i v-if="d.completed" class="ri-check-line"></i>
              </div>
              <div class="d9-trend-day__rating" v-if="d.rating">
                <i v-for="r in d.rating" :key="r" class="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 90-Day Grid -->
      <section class="d9-grid-section">
        <div class="container-wide">
          <div class="d9-grid-header">
            <h2 class="d9-section-title">Progresso 90 Dias</h2>
            <div class="d9-grid-actions">
              <button class="d9-action-btn" @click="shareProgress" title="Partilhar">
                <i class="ri-share-line"></i> Partilhar
              </button>
            </div>
          </div>

          <div class="d9-grid-labels">
            <span v-for="w in 13" :key="w" class="d9-week-label">S{{ w }}</span>
          </div>

          <div class="d9-grid">
            <div
              v-for="cell in grid"
              :key="cell.day"
              class="d9-cell"
              :class="{
                'd9-cell--done': cell.completed,
                'd9-cell--today': cell.date === todayDate,
                'd9-cell--milestone': milestones.includes(cell.day),
                'd9-cell--future': cell.date > todayDate,
                'd9-cell--has-note': cell.note,
              }"
              :title="`Dia ${cell.day}${cell.completed ? ' ✓' : ''}${cell.note ? ' — ' + cell.note.substring(0, 50) : ''}`"
              @click="selectDay(cell)"
            >
              <span class="d9-cell__num">{{ cell.day }}</span>
              <i v-if="cell.completed" class="ri-check-line d9-cell__check"></i>
            </div>
          </div>

          <div class="d9-legend">
            <div class="d9-legend-item">
              <div class="d9-legend-box d9-legend-box--empty"></div>
              <span>Pendente</span>
            </div>
            <div class="d9-legend-item">
              <div class="d9-legend-box d9-legend-box--done"></div>
              <span>Completo</span>
            </div>
            <div class="d9-legend-item">
              <div class="d9-legend-box d9-legend-box--milestone"></div>
              <span>Marco</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Selected Day Note -->
      <section class="d9-note-section" v-if="selectedCell">
        <div class="container-wide">
          <div class="d9-note-panel">
            <div class="d9-note-panel__header">
              <h3>
                <i class="ri-sticky-note-line"></i>
                Dia {{ selectedCell.day }} — {{ formatDate(selectedCell.date) }}
              </h3>
              <button class="d9-action-btn" @click="selectedCell = null">
                <i class="ri-close-line"></i>
              </button>
            </div>
            <p class="d9-note-text" v-if="selectedCell.note">{{ selectedCell.note }}</p>
            <p class="d9-note-empty" v-else>Sem notas para este dia.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="d9-cta-section">
        <div class="container-wide">
          <router-link to="/codigo-mental/ciclo" class="d9-cta-btn">
            <i class="ri-play-circle-line"></i> Ir para o Ciclo Diário
          </router-link>
        </div>
      </section>
    </template>

    <canvas ref="shareCanvas" style="display: none;"></canvas>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useOnboarding } from '@/composables/useOnboarding'
import { useStreaks } from '@/composables/useStreaks'

const { profile, loadProfile } = useOnboarding()
const {
  isLoading, loadDays,
  completedDaysCount, currentStreak, bestStreak,
  percentage, milestoneMessage, weekTrend, build90DayGrid,
} = useStreaks()

const milestones = [7, 21, 30, 60, 90]
const shareCanvas = ref(null)
const selectedCell = ref(null)
const todayDate = new Date().toISOString().split('T')[0]

const grid = computed(() => {
  const startDate = profile.value?.startDate || todayDate
  return build90DayGrid(startDate)
})

function selectDay(cell) {
  if (cell.completed || cell.note) {
    selectedCell.value = selectedCell.value?.day === cell.day ? null : cell
  }
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('pt-PT', { weekday: 'short', day: 'numeric', month: 'short' })
}

async function shareProgress() {
  const canvas = shareCanvas.value
  if (!canvas) return

  const W = 800
  const H = 420
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#0c1118'
  ctx.beginPath()
  ctx.roundRect(0, 0, W, H, 16)
  ctx.fill()

  ctx.font = 'bold 28px Space Grotesk, sans-serif'
  ctx.fillStyle = '#f3f6fb'
  ctx.fillText('Desafio 90 Dias — Código Mental', 32, 48)

  ctx.font = '14px Space Grotesk, sans-serif'
  ctx.fillStyle = '#8a94a6'
  ctx.fillText(
    `${completedDaysCount.value}/90 dias · Streak: ${currentStreak.value} · Melhor: ${bestStreak.value}`,
    32,
    74
  )

  const cellSize = 28
  const gap = 4
  const cols = 15
  const startX = 32
  const startY = 100

  grid.value.forEach((cell, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const x = startX + col * (cellSize + gap)
    const y = startY + row * (cellSize + gap)

    ctx.fillStyle = cell.completed ? '#4a86e8' : '#243246'
    ctx.beginPath()
    ctx.roundRect(x, y, cellSize, cellSize, 4)
    ctx.fill()

    if (milestones.includes(cell.day)) {
      ctx.strokeStyle = '#77a7ff'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.roundRect(x, y, cellSize, cellSize, 4)
      ctx.stroke()
    }
  })

  ctx.font = '12px Space Grotesk, sans-serif'
  ctx.fillStyle = '#8a94a6'
  ctx.fillText('jorgemopanc.com/codigo-mental', 32, H - 20)

  try {
    canvas.toBlob(async (blob) => {
      if (navigator.share && navigator.canShare) {
        const file = new File([blob], 'desafio-90-dias.png', { type: 'image/png' })
        const shareData = { files: [file], title: 'Desafio 90 Dias — Código Mental' }
        if (navigator.canShare(shareData)) {
          await navigator.share(shareData)
          return
        }
      }
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'desafio-90-dias.png'
      a.click()
      URL.revokeObjectURL(url)
    }, 'image/png')
  } catch (e) {
    console.error('Share error:', e)
  }
}

onMounted(async () => {
  await loadProfile()
  await loadDays()
})
</script>

<style scoped>
.d9-page {
  min-height: 100vh;
  padding-top: 10rem;
  padding-bottom: 6rem;
}

.d9-header {
  padding: 2rem 0 4rem;
}

.d9-back {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--fs-sm);
  color: var(--color-muted);
  text-decoration: none;
  margin-bottom: 2rem;
}

.d9-back:hover {
  color: var(--color-primary);
}

.d9-title {
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.8rem;
}

.d9-subtitle {
  font-size: var(--fs-md);
  color: var(--color-muted);
  max-width: 56rem;
}

.d9-loading {
  display: flex;
  justify-content: center;
  padding: 6rem;
}

.d9-spinner {
  font-size: 3rem;
  color: var(--color-muted);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Stats */
.d9-stats-section {
  padding: 0 0 3rem;
}

.d9-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
}

.d9-stat {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

.d9-stat__value {
  display: block;
  font-size: 3.2rem;
  font-weight: var(--fw-bold);
  color: var(--color-primary);
  font-family: 'JetBrains Mono', monospace;
  line-height: 1;
  margin-bottom: 0.6rem;
}

.d9-stat__label {
  font-size: 1.2rem;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Milestone */
.d9-milestone-section {
  padding-bottom: 3rem;
}

.d9-milestone {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(74, 134, 232, 0.08);
  border: 1px solid rgba(74, 134, 232, 0.2);
  border-radius: var(--border-radius);
  padding: 1.2rem 2rem;
  font-size: var(--fs-sm);
  color: var(--color-accent);
}

.d9-milestone i {
  font-size: 1.8rem;
  color: var(--color-primary);
}

/* Section title */
.d9-section-title {
  font-size: 2rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 1.6rem;
}

/* Week Trend */
.d9-trend-section {
  padding-bottom: 3rem;
}

.d9-trend {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.d9-trend-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  min-width: 5rem;
}

.d9-trend-day__label {
  font-size: 1.1rem;
  color: var(--color-muted);
  text-transform: capitalize;
}

.d9-trend-day__dot {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: var(--color-muted);
  transition: all 0.3s;
}

.d9-trend-day--done .d9-trend-day__dot {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.d9-trend-day__rating {
  display: flex;
  gap: 0.1rem;
}

.d9-trend-day__rating i {
  font-size: 0.9rem;
  color: #c9a84c;
}

/* Grid */
.d9-grid-section {
  padding-bottom: 4rem;
}

.d9-grid-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
}

.d9-grid-actions {
  display: flex;
  gap: 0.8rem;
}

.d9-action-btn {
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
  transition: var(--transition);
  font-family: inherit;
}

.d9-action-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.d9-grid-labels {
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 0.4rem;
  margin-bottom: 0.6rem;
  padding: 0 0.2rem;
}

.d9-week-label {
  font-size: 1rem;
  color: var(--color-muted);
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
}

.d9-grid {
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 0.4rem;
}

.d9-cell {
  aspect-ratio: 1;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  position: relative;
  gap: 0.1rem;
}

.d9-cell--done,
.d9-cell--has-note {
  cursor: pointer;
}

.d9-cell--done:hover,
.d9-cell--has-note:hover {
  transform: scale(1.05);
}

.d9-cell--done {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.d9-cell--done .d9-cell__num {
  color: rgba(255, 255, 255, 0.8);
}

.d9-cell--today {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px rgba(119, 167, 255, 0.3);
}

.d9-cell--milestone {
  border-color: var(--color-warning);
}

.d9-cell--milestone.d9-cell--done {
  background: var(--color-warning);
  border-color: var(--color-warning);
}

.d9-cell--future {
  opacity: 0.4;
}

.d9-cell__num {
  font-size: 1rem;
  font-weight: var(--fw-semibold);
  color: var(--color-muted);
  font-family: 'JetBrains Mono', monospace;
  line-height: 1;
}

.d9-cell__check {
  font-size: 1.2rem;
  color: #fff;
  line-height: 1;
}

.d9-cell--has-note.d9-cell--done::after {
  content: '';
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  background: #c9a84c;
  border-radius: 50%;
}

/* Legend */
.d9-legend {
  display: flex;
  gap: 2rem;
  margin-top: 1.6rem;
}

.d9-legend-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.2rem;
  color: var(--color-muted);
}

.d9-legend-box {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 0.3rem;
}

.d9-legend-box--empty {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
}

.d9-legend-box--done {
  background: var(--color-primary);
}

.d9-legend-box--milestone {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-warning);
}

/* Note Panel */
.d9-note-section {
  padding-bottom: 2rem;
}

.d9-note-panel {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 50rem;
}

.d9-note-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}

.d9-note-panel__header h3 {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.5rem;
  font-weight: var(--fw-semibold);
  color: var(--color-white);
}

.d9-note-panel__header h3 i {
  color: var(--color-primary);
}

.d9-note-text {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.6;
  white-space: pre-wrap;
}

.d9-note-empty {
  font-size: var(--fs-sm);
  color: var(--color-muted);
  font-style: italic;
}

/* CTA */
.d9-cta-section {
  padding-top: 2rem;
  text-align: center;
}

.d9-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 3rem;
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  background: linear-gradient(135deg, #c9a84c, #b8943e);
  color: #0c1118;
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: all 0.2s;
}

.d9-cta-btn:hover {
  background: linear-gradient(135deg, #d4b65c, #c9a84c);
}

/* Responsive */
@media (max-width: 768px) {
  .d9-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .d9-grid,
  .d9-grid-labels {
    grid-template-columns: repeat(10, 1fr);
  }

  .d9-grid-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .d9-trend {
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .d9-grid,
  .d9-grid-labels {
    grid-template-columns: repeat(7, 1fr);
  }

  .d9-stat__value {
    font-size: 2.4rem;
  }
}
</style>
