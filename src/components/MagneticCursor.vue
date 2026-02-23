<template>
  <div v-if="active" aria-hidden="true">

    <!-- Glow leve: segue com lag, invisível sobre os cards target -->
    <div
      class="cursor-glow"
      :class="{ 'is-hidden': isOnTarget }"
      ref="glow"
    ></div>

    <!-- Mira: aparece só sobre os cards face2, segue o rato instantaneamente -->
    <div
      class="cursor-scope"
      :class="{ 'is-visible': isOnTarget, 'is-clicking': isClicking }"
      ref="scopeEl"
    >
      <svg
        width="80" height="80" viewBox="0 0 80 80"
        fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Círculo principal -->
        <circle cx="40" cy="40" r="22" stroke="currentColor" stroke-width="1.2"/>

        <!-- Braços sólidos: da borda até meio -->
        <line x1="40" y1="18" x2="40" y2="29" stroke="currentColor" stroke-width="1.2"/>
        <line x1="40" y1="62" x2="40" y2="51" stroke="currentColor" stroke-width="1.2"/>
        <line x1="18" y1="40" x2="29" y2="40" stroke="currentColor" stroke-width="1.2"/>
        <line x1="62" y1="40" x2="51" y2="40" stroke="currentColor" stroke-width="1.2"/>

        <!-- Tracejado: do meio até ao centro -->
        <line x1="40" y1="29" x2="40" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2.5"/>
        <line x1="40" y1="51" x2="40" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2.5"/>
        <line x1="29" y1="40" x2="40" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2.5"/>
        <line x1="51" y1="40" x2="40" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2.5"/>

        <!-- Ponto central -->
        <circle cx="40" cy="40" r="1.5" fill="currentColor"/>
      </svg>
    </div>

  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'MagneticCursor',
  setup() {
    const glow    = ref(null)
    const scopeEl = ref(null)
    const isOnTarget = ref(false)
    const isClicking = ref(false)
    const active  = ref(false)

    const PROXIMITY = 72 // px antes da borda do card

    let mouseX = 0, mouseY = 0
    let glowX  = 0, glowY  = 0
    let raf = null

    const distToRect = (rect) => {
      const dx = Math.max(rect.left - mouseX, 0, mouseX - rect.right)
      const dy = Math.max(rect.top  - mouseY, 0, mouseY - rect.bottom)
      return Math.sqrt(dx * dx + dy * dy)
    }

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // A mira segue o rato instantaneamente (substitui o cursor)
      if (scopeEl.value) {
        scopeEl.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }

      // Detectar proximidade às face2 (dentro OU perto da borda)
      const face2els = document.querySelectorAll('.face2')
      let minDist = Infinity
      face2els.forEach(el => {
        const d = distToRect(el.getBoundingClientRect())
        if (d < minDist) minDist = d
      })
      const near = minDist <= PROXIMITY
      isOnTarget.value = near
      // Esconder cursor nativo quando a mira está activa
      document.documentElement.style.cursor = near ? 'none' : ''
    }

    const animate = () => {
      // Glow segue com lag suave
      glowX += (mouseX - glowX) * 0.07
      glowY += (mouseY - glowY) * 0.07
      if (glow.value) {
        glow.value.style.transform = `translate(${glowX}px, ${glowY}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    const onMouseDown = () => { isClicking.value = true }
    const onMouseUp   = () => { isClicking.value = false }

    onMounted(() => {
      if (!window.matchMedia('(pointer: fine)').matches) return
      active.value = true
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mouseup',   onMouseUp)
      raf = requestAnimationFrame(animate)
    })

    onUnmounted(() => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup',   onMouseUp)
      cancelAnimationFrame(raf)
    })

    return { glow, scopeEl, isOnTarget, isClicking, active }
  }
}
</script>

<style scoped>
/* --- Glow leve: blob esfumaçado a seguir o cursor --- */
.cursor-glow {
  position: fixed;
  top: 0; left: 0;
  width: 110px; height: 110px;
  margin: -55px 0 0 -55px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(74, 134, 232, 0.13) 0%,
    rgba(74, 134, 232, 0.05) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 9998;
  will-change: transform;
  transition: opacity 0.3s ease;
}

.cursor-glow.is-hidden {
  opacity: 0;
}

:global(.theme-light) .cursor-glow {
  background: radial-gradient(
    circle at center,
    rgba(63, 118, 210, 0.09) 0%,
    rgba(63, 118, 210, 0.03) 40%,
    transparent 70%
  );
}

/* --- Mira: só visível sobre os cards face2 --- */
.cursor-scope {
  position: fixed;
  top: 0; left: 0;
  width: 80px; height: 80px;
  margin: -40px 0 0 -40px;
  pointer-events: none;
  z-index: 9999999;
  will-change: transform;
  opacity: 0;
  color: rgba(255, 255, 255, 0.82);
  transition: opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.cursor-scope.is-visible {
  opacity: 1;
}

.cursor-scope.is-clicking svg {
  transform: scale(0.82);
}

/* Animação da mira ao entrar no card */
.cursor-scope svg {
  transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1);
  transform-origin: center;
}

.cursor-scope.is-visible svg {
  animation: scope-breathe 3s ease-in-out infinite;
}

@keyframes scope-breathe {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.06); opacity: 0.85; }
}
</style>
