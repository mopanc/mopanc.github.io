<template>
  <div class="snav-float" ref="floatEl">
    <div class="snav" ref="navEl">
      <!-- Vertical line (two layers) -->
      <div class="snav__lines">
        <div class="snav__vline snav__vline--dark"></div>
        <div class="snav__vline snav__vline--light" :style="clipStyle"></div>
      </div>

      <!-- Labels: dark theme (default, always visible) -->
      <div class="snav__labels snav__labels--dark">
        <button
          v-for="(section, index) in sections"
          :key="section.id"
          class="snav__item"
          :class="{ 'is-active': activeIndex === index }"
          @click="scrollTo(section.id)"
        >
          <span class="snav__text">{{ section.label }}</span>
        </button>
      </div>

      <!-- Labels: light theme (clipped to light section boundaries) -->
      <div class="snav__labels snav__labels--light" :style="clipStyle" aria-hidden="true">
        <button
          v-for="(section, index) in sections"
          :key="'light-' + section.id"
          class="snav__item"
          :class="{ 'is-active': activeIndex === index }"
          tabindex="-1"
        >
          <span class="snav__text">{{ section.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'

const props = defineProps({
  sections: { type: Array, required: true }
})

const activeIndex = ref(0)
const floatEl = ref(null)
const navEl = ref(null)
const lightClipRegions = ref([]) // array of { top, bottom } in px relative to nav

// Build a clip-path that reveals only the areas overlapping light sections
const clipStyle = computed(() => {
  if (!lightClipRegions.value.length) {
    return { clipPath: 'inset(100% 0 0 0)' } // fully hidden
  }
  const regions = lightClipRegions.value
  // Merge all regions into one bounding clip (smallest top, smallest bottom)
  const minTop = Math.min(...regions.map(r => r.top))
  const minBottom = Math.min(...regions.map(r => r.bottom))
  return { clipPath: `inset(${Math.max(0, minTop)}px -20px ${Math.max(0, minBottom)}px -20px)` }
})

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function setFloatHeight() {
  if (!floatEl.value) return
  const floatTop = floatEl.value.getBoundingClientRect().top + window.scrollY
  const docHeight = document.documentElement.scrollHeight
  floatEl.value.style.height = Math.max(0, docHeight - floatTop) + 'px'
}

function updateClipRegions() {
  if (!navEl.value) return
  const navRect = navEl.value.getBoundingClientRect()
  const navTop = navRect.top
  const navHeight = navRect.height

  const regions = []
  const lightSections = document.querySelectorAll('.lc-section--light')

  for (const sec of lightSections) {
    const sr = sec.getBoundingClientRect()
    // Check overlap
    if (sr.bottom > navTop && sr.top < navTop + navHeight) {
      // Calculate clip in nav-relative coordinates
      const clipTop = Math.max(0, sr.top - navTop)
      const clipBottom = Math.max(0, (navTop + navHeight) - sr.bottom)
      regions.push({ top: clipTop, bottom: clipBottom })
    }
  }

  lightClipRegions.value = regions
}

function onScroll() {
  const vh = window.innerHeight
  const scrollY = window.scrollY
  const docH = document.documentElement.scrollHeight

  if (scrollY + vh >= docH - 50) {
    activeIndex.value = props.sections.length - 1
    updateClipRegions()
    return
  }

  let current = 0
  for (let i = 0; i < props.sections.length; i++) {
    const el = document.getElementById(props.sections[i].id)
    if (el && el.getBoundingClientRect().top <= vh * 0.45) current = i
  }
  activeIndex.value = current
  updateClipRegions()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  nextTick(() => {
    setFloatHeight()
    window.addEventListener('resize', setFloatHeight)
    setTimeout(setFloatHeight, 1000)
    setTimeout(setFloatHeight, 3000)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', setFloatHeight)
})
</script>

<style scoped>
.snav-float {
  float: left;
  width: 0;
  overflow: visible;
  position: relative;
  z-index: 90;
}

.snav {
  position: sticky;
  top: 100px;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  margin-left: 42px;
  width: max-content;
}

/* ═══ VERTICAL LINES (stacked) ═══ */
.snav__lines {
  position: relative;
  width: 1px;
  align-self: stretch;
  flex-shrink: 0;
}

.snav__vline {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
}

.snav__vline--dark {
  background: linear-gradient(
    180deg,
    rgba(92, 147, 189, 0.5) 0%,
    rgba(48, 78, 100, 0.1) 100%
  );
}

.snav__vline--light {
  background: linear-gradient(
    180deg,
    rgba(10, 13, 20, 0.3) 0%,
    rgba(10, 13, 20, 0.08) 100%
  );
  z-index: 1;
}

/* ═══ LABELS ═══ */
.snav__labels {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-left: 18px;
}

/* Light layer sits on top, clipped */
.snav__labels--light {
  position: absolute;
  top: 0;
  left: 1px; /* after the line */
  pointer-events: none;
}

.snav__item {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
  min-height: auto;
  min-width: auto;
}

.snav__text {
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
  display: block;
  line-height: 1;
}

/* Dark theme colors (default layer) */
.snav__labels--dark .snav__text {
  color: rgba(200, 216, 240, 0.7);
  transition: color 0.3s ease;
}

.snav__labels--dark .snav__item:hover .snav__text {
  color: rgba(200, 216, 240, 0.5);
}

.snav__labels--dark .snav__item.is-active .snav__text {
  color: rgb(127, 200, 255);
}

/* Light theme colors (clipped overlay layer) */
.snav__labels--light .snav__text {
  color: rgba(10, 13, 20, 0.75);
}

.snav__labels--light .snav__item.is-active .snav__text {
  color: rgb(0, 90, 220);
}

@media screen and (max-width: 1280px) {
  .snav-float { display: none; }
}
</style>
