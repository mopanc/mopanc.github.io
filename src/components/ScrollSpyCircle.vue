<template>
  <nav class="cards-toc" :class="{ 'is-visible': isVisible }" aria-label="Page sections">
    <!-- Vertical line -->
    <div class="cards-toc__line">
      <div class="cards-toc__circle" ref="circleEl"></div>
    </div>

    <!-- TOC items -->
    <div class="cards-toc__wrapper">
      <a
        v-for="(section, index) in sections"
        :key="section.id"
        :href="`#${section.id}`"
        class="cards-toc__link"
        :class="{ 'is-current': activeIndex === index }"
        @click.prevent="scrollTo(section.id)"
      >
        <div class="cards-toc__bullet"></div>
        <div class="cards-toc__label">{{ section.label }}</div>
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  sections: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(0)
const isVisible = ref(false)
const circleEl = ref(null)
let scrollTriggerInstance = null

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function updateActive() {
  const vh = window.innerHeight
  const scrollY = window.scrollY
  const docHeight = document.documentElement.scrollHeight

  isVisible.value = scrollY > vh * 0.3

  // Bottom of page → last section
  if (scrollY + vh >= docHeight - 50) {
    activeIndex.value = props.sections.length - 1
    return
  }

  let current = 0
  for (let i = 0; i < props.sections.length; i++) {
    const el = document.getElementById(props.sections[i].id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= vh * 0.45) {
        current = i
      }
    }
  }
  activeIndex.value = current
}

onMounted(() => {
  window.addEventListener('scroll', updateActive, { passive: true })
  updateActive()

  // GSAP: animate circle along the line synced to page scroll
  nextTick(() => {
    if (!circleEl.value) return

    // Find the first and last section to define the scroll range
    const firstSection = document.getElementById(props.sections[0]?.id)
    const lastSection = document.getElementById(props.sections[props.sections.length - 1]?.id)
    if (!firstSection || !lastSection) return

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: firstSection,
      start: 'top center',
      endTrigger: lastSection,
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
        if (circleEl.value) {
          const lineParent = circleEl.value.parentElement
          if (lineParent) {
            const lineH = lineParent.getBoundingClientRect().height
            circleEl.value.style.top = (self.progress * (lineH - 10)) + 'px'
          }
        }
      }
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActive)
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }
})
</script>

<style scoped>
.cards-toc {
  position: fixed;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  gap: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.cards-toc.is-visible {
  opacity: 1;
  pointer-events: auto;
}

/* Vertical gradient line */
.cards-toc__line {
  position: relative;
  width: 1.5px;
  background-image: linear-gradient(rgb(92, 147, 189), rgb(48, 78, 100) 20%);
  flex-shrink: 0;
  align-self: stretch;
}

/* Sliding circle */
.cards-toc__circle {
  position: absolute;
  left: -4.25px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(127, 200, 255);
  transition: top 0.1s linear;
  z-index: 2;
}

/* TOC wrapper */
.cards-toc__wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-left: -0.3125rem; /* align bullets on the line */
  padding-left: 0;
}

/* Each TOC item */
.cards-toc__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  opacity: 0.4;
  transition: opacity 0.3s ease;
  padding: 0.2rem 0;
  cursor: pointer;
}

.cards-toc__link:hover {
  opacity: 0.7;
}

.cards-toc__link.is-current {
  opacity: 1;
}

/* Bullet dot */
.cards-toc__bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(127, 200, 255);
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cards-toc__link.is-current .cards-toc__bullet {
  opacity: 1;
}

/* Label */
.cards-toc__label {
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(127, 200, 255);
  white-space: nowrap;
}

/* Hide on smaller screens */
@media screen and (max-width: 1280px) {
  .cards-toc {
    display: none;
  }
}
</style>
