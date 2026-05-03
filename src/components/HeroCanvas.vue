<template>
  <canvas ref="canvas" class="hero-canvas" aria-hidden="true"></canvas>
</template>

<script>
export default {
  name: 'HeroCanvas',
  props: {
    spacing: { type: Number, default: 64 },
    proximity: { type: Number, default: 150 },
    linkDist: { type: Number, default: 110 },
    color: { type: Array, default: () => [126, 184, 247] }, // rgb
  },
  mounted() {
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    this.dpr = Math.min(window.devicePixelRatio || 1, 2)
    this.mouse = { x: -9999, y: -9999, active: false }
    this.ripples = []
    this.dots = []
    this.visible = true

    this.resize()
    this.bind()
    if (this.reduced) this.draw()
    else this.loop()
  },
  beforeUnmount() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('pointermove', this.onPointerMove)
    window.removeEventListener('resize', this.onResize)
    if (this.parent) this.parent.removeEventListener('click', this.onClick)
    if (this.io) this.io.disconnect()
  },
  methods: {
    resize() {
      const r = this.canvas.getBoundingClientRect()
      this.canvas.width = Math.max(1, Math.floor(r.width * this.dpr))
      this.canvas.height = Math.max(1, Math.floor(r.height * this.dpr))
      this.ctx.setTransform(1, 0, 0, 1, 0, 0)
      this.ctx.scale(this.dpr, this.dpr)
      this.w = r.width
      this.h = r.height
      this.buildDots()
    },
    buildDots() {
      this.dots = []
      const cols = Math.ceil(this.w / this.spacing) + 1
      const rows = Math.ceil(this.h / this.spacing) + 1
      const offX = (this.w - (cols - 1) * this.spacing) / 2
      const offY = (this.h - (rows - 1) * this.spacing) / 2
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offX + c * this.spacing
          const y = offY + r * this.spacing
          this.dots.push({
            ox: x, oy: y, x, y,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.4,
          })
        }
      }
    },
    bind() {
      this.onPointerMove = (e) => {
        const r = this.canvas.getBoundingClientRect()
        const inside = e.clientX >= r.left && e.clientX <= r.right &&
                       e.clientY >= r.top && e.clientY <= r.bottom
        this.mouse.active = inside
        this.mouse.x = e.clientX - r.left
        this.mouse.y = e.clientY - r.top
      }
      this.onResize = () => this.resize()
      this.onClick = (e) => {
        const r = this.canvas.getBoundingClientRect()
        if (e.clientX < r.left || e.clientX > r.right ||
            e.clientY < r.top || e.clientY > r.bottom) return
        this.ripples.push({
          x: e.clientX - r.left,
          y: e.clientY - r.top,
          t: 0,
          life: 1.6,
          maxR: Math.max(this.w, this.h) * 0.9,
        })
        if (this.ripples.length > 6) this.ripples.shift()
      }
      window.addEventListener('pointermove', this.onPointerMove, { passive: true })
      window.addEventListener('resize', this.onResize)
      this.parent = this.canvas.parentElement
      if (this.parent) this.parent.addEventListener('click', this.onClick)

      this.io = new IntersectionObserver(([entry]) => {
        this.visible = entry.isIntersecting
      }, { threshold: 0 })
      this.io.observe(this.canvas)
    },
    loop() {
      this.last = performance.now()
      const tick = (now) => {
        const dt = Math.min(0.05, (now - this.last) / 1000)
        this.last = now
        if (this.visible) {
          this.update(dt)
          this.draw()
        }
        this.raf = requestAnimationFrame(tick)
      }
      this.raf = requestAnimationFrame(tick)
    },
    update(dt) {
      this.ripples = this.ripples.filter(rp => {
        rp.t += dt
        return rp.t < rp.life
      })
    },
    draw() {
      const { ctx, w, h, mouse, dots, proximity, linkDist, color } = this
      const [cr, cg, cb] = color
      ctx.clearRect(0, 0, w, h)
      const t = performance.now() * 0.001
      const prox2 = proximity * proximity
      const link2 = linkDist * linkDist

      // Update positions (subtle drift) + pre-compute proximity for lines
      const near = []
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]
        d.x = d.ox + Math.cos(t * d.speed + d.phase) * 3
        d.y = d.oy + Math.sin(t * d.speed * 0.85 + d.phase) * 3

        const dx = d.x - mouse.x
        const dy = d.y - mouse.y
        const dist2 = dx * dx + dy * dy

        let proxI = 0
        if (mouse.active && dist2 < prox2) {
          proxI = 1 - Math.sqrt(dist2) / proximity
        }
        // ripple band
        let rippleI = 0
        for (const rp of this.ripples) {
          const rx = d.x - rp.x
          const ry = d.y - rp.y
          const rd = Math.sqrt(rx * rx + ry * ry)
          const wave = (rp.t / rp.life) * rp.maxR
          const band = 80
          const delta = Math.abs(rd - wave)
          if (delta < band) {
            const closeness = 1 - delta / band
            const fade = 1 - rp.t / rp.life
            const v = closeness * fade
            if (v > rippleI) rippleI = v
          }
        }
        const intensity = Math.min(1, proxI + rippleI * 0.95)
        d._i = intensity
        if (intensity > 0.02) {
          const radius = 1 + intensity * 2.4
          const alpha = intensity * 0.9
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`
          ctx.beginPath()
          ctx.arc(d.x, d.y, radius, 0, Math.PI * 2)
          ctx.fill()
        }

        if (mouse.active && dist2 < prox2) near.push(d)
      }

      // Connection lines: only between dots near the cursor
      if (near.length) {
        ctx.lineWidth = 0.8
        for (let i = 0; i < near.length; i++) {
          const a = near[i]
          for (let j = i + 1; j < near.length; j++) {
            const b = near[j]
            const ddx = a.x - b.x
            const ddy = a.y - b.y
            const dd = ddx * ddx + ddy * ddy
            if (dd > link2) continue
            const k = 1 - Math.sqrt(dd) / linkDist
            const alpha = 0.18 * k * Math.max(a._i, b._i)
            if (alpha < 0.01) continue
            ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
    },
  },
}
</script>

<style scoped>
.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  display: block;
}
</style>
