<template>
  <canvas ref="canvas" class="home-bg-canvas" aria-hidden="true"></canvas>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'HomeBackground',
  setup() {
    const canvas = ref(null)
    let ctx = null
    let raf = null
    let balls = []
    let mouse = { x: -999, y: -999 }
    let W = 0, H = 0

    const COLORS = [
      { r: 74,  g: 134, b: 232 },  // azul
      { r: 124, g: 92,  b: 255 },  // roxo
      { r: 119, g: 167, b: 255 },  // azul claro
    ]

    const MOUSE_RADIUS  = 140
    const MOUSE_FORCE   = 6
    const FRICTION      = 0.96
    const MAX_SPEED     = 5
    const RESTITUTION   = 0.80

    const BALL_CONFIGS = [
      // preenchidas (fill + outline)
      { r: 26, style: 'fill',    ci: 0 },
      { r: 20, style: 'fill',    ci: 1 },
      { r: 32, style: 'fill',    ci: 2 },
      { r: 18, style: 'fill',    ci: 1 },
      { r: 28, style: 'fill',    ci: 0 },
      // outline apenas
      { r: 48, style: 'outline', ci: 0 },
      { r: 58, style: 'outline', ci: 1 },
      { r: 40, style: 'outline', ci: 2 },
      { r: 52, style: 'outline', ci: 0 },
      { r: 44, style: 'outline', ci: 1 },
      { r: 36, style: 'outline', ci: 2 },
    ]

    function createBalls() {
      balls = []
      BALL_CONFIGS.forEach(cfg => {
        let x, y, tries = 0
        do {
          x = cfg.r * 2 + Math.random() * (W - cfg.r * 4)
          y = cfg.r * 2 + Math.random() * (H - cfg.r * 4)
          tries++
        } while (tries < 30 && balls.some(b => Math.hypot(b.x - x, b.y - y) < b.r + cfg.r + 8))
        balls.push({
          x, y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: cfg.r,
          style: cfg.style,
          color: COLORS[cfg.ci],
        })
      })
    }

    function resizeCanvas() {
      W = canvas.value.width  = window.innerWidth
      H = canvas.value.height = window.innerHeight
      createBalls()
    }

    function onMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function resolveCollision(a, b) {
      const dx   = b.x - a.x
      const dy   = b.y - a.y
      const dist = Math.hypot(dx, dy)
      const min  = a.r + b.r
      if (dist >= min || dist === 0) return

      const overlap = (min - dist) / 2
      const nx = dx / dist
      const ny = dy / dist
      a.x -= nx * overlap
      a.y -= ny * overlap
      b.x += nx * overlap
      b.y += ny * overlap

      const dvx = a.vx - b.vx
      const dvy = a.vy - b.vy
      const dot = dvx * nx + dvy * ny
      if (dot > 0) return

      const imp = dot * RESTITUTION
      a.vx -= imp * nx
      a.vy -= imp * ny
      b.vx += imp * nx
      b.vy += imp * ny
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)

      const isDark = !document.documentElement.classList.contains('theme-light')

      // update velocities + positions
      balls.forEach(b => {
        const dx   = b.x - mouse.x
        const dy   = b.y - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * MOUSE_FORCE
          b.vx += (dx / dist) * force
          b.vy += (dy / dist) * force
        }

        b.vx *= FRICTION
        b.vy *= FRICTION

        const spd = Math.hypot(b.vx, b.vy)
        if (spd > MAX_SPEED) {
          b.vx = (b.vx / spd) * MAX_SPEED
          b.vy = (b.vy / spd) * MAX_SPEED
        }

        b.x += b.vx
        b.y += b.vy

        if (b.x - b.r < 0)  { b.x = b.r;     b.vx =  Math.abs(b.vx) * RESTITUTION }
        if (b.x + b.r > W)  { b.x = W - b.r;  b.vx = -Math.abs(b.vx) * RESTITUTION }
        if (b.y - b.r < 0)  { b.y = b.r;     b.vy =  Math.abs(b.vy) * RESTITUTION }
        if (b.y + b.r > H)  { b.y = H - b.r;  b.vy = -Math.abs(b.vy) * RESTITUTION }
      })

      // ball-ball collisions
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          resolveCollision(balls[i], balls[j])
        }
      }

      // draw
      balls.forEach(b => {
        const { r, g, b: bl } = b.color
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)

        if (b.style === 'fill') {
          ctx.fillStyle   = isDark
            ? `rgba(${r},${g},${bl},0.22)`
            : `rgba(${r},${g},${bl},0.14)`
          ctx.fill()
          ctx.strokeStyle = isDark
            ? `rgba(${r},${g},${bl},0.80)`
            : `rgba(${r},${g},${bl},0.60)`
          ctx.lineWidth = 1.5
          ctx.stroke()
        } else {
          ctx.strokeStyle = isDark
            ? `rgba(${r},${g},${bl},0.40)`
            : `rgba(${r},${g},${bl},0.28)`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      })

      raf = requestAnimationFrame(animate)
    }

    const isMobile = () => window.innerWidth < 768 || !window.matchMedia('(pointer: fine)').matches

    onMounted(() => {
      if (!canvas.value) return
      ctx = canvas.value.getContext('2d')

      if (isMobile()) {
        // em mobile: apenas 4 bolas estáticas sem animação de física
        W = canvas.value.width  = window.innerWidth
        H = canvas.value.height = window.innerHeight
        balls = BALL_CONFIGS.slice(0, 4).map(cfg => ({
          x: cfg.r * 2 + Math.random() * (W - cfg.r * 4),
          y: cfg.r * 2 + Math.random() * (H - cfg.r * 4),
          vx: 0, vy: 0,
          r: cfg.r, style: cfg.style, color: COLORS[cfg.ci],
        }))
        const isDark = !document.documentElement.classList.contains('theme-light')
        balls.forEach(b => {
          const { r, g, b: bl } = b.color
          ctx.beginPath()
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
          if (b.style === 'fill') {
            ctx.fillStyle = isDark ? `rgba(${r},${g},${bl},0.18)` : `rgba(${r},${g},${bl},0.12)`
            ctx.fill()
            ctx.strokeStyle = isDark ? `rgba(${r},${g},${bl},0.70)` : `rgba(${r},${g},${bl},0.50)`
            ctx.lineWidth = 1.5
            ctx.stroke()
          } else {
            ctx.strokeStyle = isDark ? `rgba(${r},${g},${bl},0.35)` : `rgba(${r},${g},${bl},0.22)`
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        })
        return
      }

      resizeCanvas()
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      document.addEventListener('mousemove', onMouseMove, { passive: true })
      window.addEventListener('resize', resizeCanvas)
      raf = requestAnimationFrame(animate)
    })

    onUnmounted(() => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(raf)
    })

    return { canvas }
  }
}
</script>

<style scoped>
.home-bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>
