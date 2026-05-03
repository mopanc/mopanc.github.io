<template>
  <main class="projects-edt">

    <!-- ═══ HERO ═══ -->
    <section class="pe-hero">
      <div class="container-wide">
        <div class="pe-hero__top">
          <div class="pe-hero__meta">
            <span class="pe-hero__vol">{{ volumeLabel }}</span>
            <span class="pe-hero__sep">·</span>
            <span>{{ projects.length.toString().padStart(2, '0') }} {{ translations.proj_overview_label || 'PROJECTS' }}</span>
          </div>
        </div>

        <h1 class="pe-hero__title">
          <span class="pe-hero__title-line">{{ translations.proj_overview_title_1 || 'Selected' }}</span>
          <span class="pe-hero__title-line pe-hero__title-line--accent">
            {{ translations.proj_overview_title_2 || 'work.' }}
          </span>
        </h1>

        <div class="pe-hero__bottom">
          <p class="pe-hero__lede">
            {{ translations.proj_overview_lede || 'Production enterprise systems, personal projects, and open source contributions. Each one solved a concrete problem. Click to see the how and the measured impact.' }}
          </p>
          <div class="pe-hero__stats">
            <span class="pe-stat">
              <span class="pe-stat__num">{{ professionalCount.toString().padStart(2, '0') }}</span>
              <span class="pe-stat__label">enterprise</span>
            </span>
            <span class="pe-stat">
              <span class="pe-stat__num">{{ personalCount.toString().padStart(2, '0') }}</span>
              <span class="pe-stat__label">{{ translations.proj_overview_personal || 'personal' }}</span>
            </span>
            <span class="pe-stat">
              <span class="pe-stat__num">{{ openSourceCount.toString().padStart(2, '0') }}</span>
              <span class="pe-stat__label">open&nbsp;source</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ FILTERS NAV ═══ -->
    <section class="pe-filters">
      <div class="container-wide">
        <nav class="pe-filters__nav">
          <button
            v-for="opt in filterOptions"
            :key="opt.value"
            class="pe-filter"
            :class="{ 'pe-filter--active': activeFilter === opt.value }"
            @click="setFilter(opt.value, $event)"
            type="button"
          >
            <span>{{ opt.label }}</span>
            <span class="pe-filter__count">{{ opt.count }}</span>
          </button>
          <span
            class="pe-filter__underline"
            :style="{ left: underline.left + 'px', width: underline.width + 'px', opacity: underline.width ? 1 : 0 }"
            aria-hidden="true"
          ></span>
        </nav>
      </div>
    </section>

    <!-- ═══ EDITORIAL LIST (zig-zag) ═══ -->
    <section class="pe-list-wrap">
      <div class="container-wide">
        <transition-group name="pe-list" tag="div" class="pe-list">
          <component
            v-for="(project, idx) in filteredProjects"
            :is="cardCtaTag(project).tag"
            v-bind="cardCtaTag(project).attrs"
            :key="project.id"
            class="pe-list-item"
            :class="{ 'pe-list-item--reverse': idx % 2 === 1 }"
          >
            <div class="pe-list-item__num">{{ String(idx + 1).padStart(2, '0') }}</div>

            <div class="pe-list-item__media" v-if="project.imageSrc">
              <img
                :src="project.imageSrc"
                :alt="project.imageAlt || project.projectName"
                :loading="idx === 0 ? 'eager' : 'lazy'"
              />
            </div>

            <div class="pe-list-item__body">
              <div class="pe-list-item__meta">
                <span class="pe-list-item__type" :data-type="categoryOf(project)">{{ typeLabelOf(project) }}</span>
                <span v-if="project.status" class="pe-list-item__sep">·</span>
                <span v-if="project.status" class="pe-list-item__status">{{ project.status }}</span>
              </div>

              <h2 class="pe-list-item__title">{{ project.projectName }}</h2>

              <p class="pe-list-item__excerpt">{{ truncate(project.projectDescription, 280) }}</p>

              <div class="pe-list-item__metrics" v-if="project.metrics?.length">
                <span v-for="(m, i) in project.metrics.slice(0, 3)" :key="i" class="pe-list-item__metric">
                  <strong>{{ m.value }}</strong>
                  <span>{{ m.label }}</span>
                </span>
              </div>

              <div class="pe-list-item__tech" v-if="project.technologies?.length">
                <span v-for="t in project.technologies.slice(0, 6)" :key="t.name">{{ t.name }}</span>
              </div>

              <span class="pe-list-item__cta">
                {{ cardCtaLabel(project) }}
                <i :class="cardCtaIcon(project)"></i>
              </span>
            </div>
          </component>
        </transition-group>

        <div v-if="filteredProjects.length === 0" class="pe-empty">
          <i class="ri-folder-open-line"></i>
          <p>{{ translations.proj_overview_empty || 'No projects in this filter.' }}</p>
          <button class="pe-empty__btn" @click="setFilter('all', $event)" type="button">
            <span>{{ translations.proj_overview_view_all || 'View all' }}</span>
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProjects } from '../composables/useProjects.js'
import { useLanguage } from '../composables/useLanguage.js'
import { useSEO, seoConfigs } from '../composables/useSEO.js'

const route = useRoute()
const { translations, initialize, selectedLanguage } = useLanguage()
const { projects, loadProjects } = useProjects()

useSEO(seoConfigs.projects)

const activeFilter = ref('personal')
const underline = reactive({ left: 0, width: 0 })

// ── Counts ──
const professionalCount = computed(() => projects.value.filter(p => p.category === 'professional').length)
const personalCount = computed(() => projects.value.filter(p => p.category === 'personal').length)
const openSourceCount = computed(() => projects.value.filter(p => p.category === 'open-source').length)

function isOpenSource(p) {
  return p.category === 'open-source'
}

function categoryOf(p) {
  if (p.category === 'professional') return 'enterprise'
  if (p.category === 'open-source') return 'oss'
  return 'personal'
}

function typeLabelOf(p) {
  const cat = categoryOf(p)
  if (cat === 'enterprise') return 'ENTERPRISE'
  if (cat === 'oss') return 'OPEN SOURCE'
  return translations.proj_overview_type_personal || 'PERSONAL'
}

// ── Filters ──
const filterOptions = computed(() => [
  { value: 'personal', label: translations.proj_overview_filter_personal || 'Personal', count: personalCount.value },
  { value: 'enterprise', label: 'Enterprise', count: professionalCount.value },
  { value: 'oss', label: 'Open Source', count: openSourceCount.value },
  { value: 'all', label: translations.proj_overview_filter_all || 'All', count: projects.value.length },
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value
  return projects.value.filter(p => categoryOf(p) === activeFilter.value)
})

const volumeLabel = computed(() => {
  const year = new Date().getFullYear()
  const vol = Math.max(1, year - 2024 + 1)
  return `Vol. ${vol.toString().padStart(2, '0')} / ${year}`
})

// ── CTA logic ──
// Every project routes to /projects/{caseStudySlug || id}; ProjectDetail decides rich vs. lightweight.
function cardCtaTag(project) {
  const slug = project.caseStudySlug || project.id
  if (slug) {
    return { tag: 'router-link', attrs: { to: `/projects/${slug}` } }
  }
  return { tag: 'div', attrs: {} }
}

function cardCtaLabel(project) {
  if (project.caseStudySlug) return translations.proj_cta_case_study || 'Read case study'
  if (isOpenSource(project)) return translations.proj_cta_github || 'View on GitHub'
  if (project.websiteLink) return translations.proj_cta_visit_site || 'Visit site'
  return translations.proj_cta_more_details || 'More details'
}

function cardCtaIcon(project) {
  if (project.caseStudySlug) return 'ri-arrow-right-line'
  return 'ri-arrow-right-line'
}

function truncate(str, n) {
  if (!str) return ''
  return str.length > n ? str.slice(0, n).trimEnd() + '…' : str
}

// ── Sliding underline ──
function updateUnderline(target) {
  if (!target) {
    underline.left = 0
    underline.width = 0
    return
  }
  const navEl = target.closest('.pe-filters__nav')
  if (!navEl) return
  const navRect = navEl.getBoundingClientRect()
  const btnRect = target.getBoundingClientRect()
  underline.left = btnRect.left - navRect.left
  underline.width = btnRect.width
}

async function setFilter(value, event) {
  activeFilter.value = value
  await nextTick()
  const navEl = document.querySelector('.pe-filters__nav')
  if (!navEl) return
  const target = event?.currentTarget?.classList?.contains('pe-filter')
    ? event.currentTarget
    : navEl.querySelector('.pe-filter--active')
  updateUnderline(target)
}

// ── Lifecycle ──
const onLangChange = (e) => {
  loadProjects(e.detail?.language || selectedLanguage.value)
}

onMounted(async () => {
  await initialize()
  await loadProjects(selectedLanguage.value)
  window.addEventListener('languageChanged', onLangChange)

  // Apply filter from query param if present (deep links from header dropdown / legacy redirects)
  const queryFilter = route.query.filter
  const valid = ['all', 'enterprise', 'personal', 'oss']
  if (typeof queryFilter === 'string' && valid.includes(queryFilter)) {
    activeFilter.value = queryFilter
  }

  setTimeout(() => {
    const navEl = document.querySelector('.pe-filters__nav')
    const active = navEl?.querySelector('.pe-filter--active')
    if (active) updateUnderline(active)
  }, 200)
})

// React to query changes (e.g., header dropdown click while already on /projects)
watch(() => route.query.filter, async (newVal) => {
  const valid = ['all', 'enterprise', 'personal', 'oss']
  if (typeof newVal === 'string' && valid.includes(newVal)) {
    activeFilter.value = newVal
    await nextTick()
    const navEl = document.querySelector('.pe-filters__nav')
    const active = navEl?.querySelector('.pe-filter--active')
    if (active) updateUnderline(active)
  }
})

onUnmounted(() => window.removeEventListener('languageChanged', onLangChange))

// Re-position underline if filter labels change (i18n)
watch(filterOptions, async () => {
  await nextTick()
  const navEl = document.querySelector('.pe-filters__nav')
  const active = navEl?.querySelector('.pe-filter--active')
  if (active) updateUnderline(active)
})
</script>

<style scoped>
.projects-edt {
  position: relative;
  background: var(--color-bg-primary);
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* ═══ HERO (dark band) ═══ */
.pe-hero {
  padding: 6rem 0 4rem;
  background: #0A0D14;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  position: relative;
  /* full-bleed dark band, even when wrapped in containers */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.pe-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px);
  background-size: calc(100% / 12) 100%;
  pointer-events: none;
  z-index: 0;
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
}

.pe-hero > * { position: relative; z-index: 1; }

.pe-hero__top {
  margin-bottom: 3rem;
}

.pe-hero__meta {
  display: inline-flex;
  align-items: baseline;
  gap: 0.7rem;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8a9ab5;
}

.pe-hero__vol {
  color: #7eb8f7;
  font-weight: 600;
}

.pe-hero__sep { opacity: 0.5; }

.pe-hero__title {
  margin: 0 0 3rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(5rem, 12vw, 14rem);
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: #FAFAF8;
}

.pe-hero__title-line {
  display: block;
}

.pe-hero__title-line--accent {
  font-style: italic;
  color: #7eb8f7;
}

.pe-hero__bottom {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) auto;
  gap: 4rem;
  align-items: end;
}

.pe-hero__lede {
  margin: 0;
  font-size: 1.7rem;
  line-height: 1.5;
  color: #c8d8f0;
  max-width: 60rem;
}

.pe-hero__stats {
  display: flex;
  gap: 2.5rem;
  align-items: baseline;
  border-left: 1px solid rgba(255,255,255,0.14);
  padding-left: 2.5rem;
}

.pe-stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.pe-stat__num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.4rem, 3vw, 3rem);
  font-weight: 700;
  line-height: 1;
  color: #FAFAF8;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.pe-stat__label {
  font-family: var(--ff-mono);
  font-size: 1rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8a9ab5;
}

/* ═══ FILTERS ═══ */
.pe-filters {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
}

.pe-filters__nav {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 1.6rem 0 0;
  align-items: center;
}

.pe-filter {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 1.4rem 1.1rem 0;
  margin-right: 0.4rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  background: transparent;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  transition: color 0.22s ease;
  white-space: nowrap;
}

.pe-filter:hover { color: var(--color-white); }

.pe-filter--active {
  color: var(--color-white);
  font-weight: 700;
}

.pe-filter__count {
  font-family: var(--ff-mono);
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  color: var(--color-primary);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  position: relative;
  top: -0.5em;
}

.pe-filter__underline {
  position: absolute;
  bottom: -1px;
  height: 2px;
  background: var(--color-white);
  transition: left 0.42s cubic-bezier(0.65, 0, 0.35, 1),
              width 0.42s cubic-bezier(0.65, 0, 0.35, 1),
              opacity 0.22s ease;
  pointer-events: none;
}

/* ═══ EDITORIAL LIST (zig-zag) ═══ */
.pe-list-wrap {
  padding: 5rem 0 0;
}

.pe-list {
  display: flex;
  flex-direction: column;
  gap: 7rem;
}

.pe-list-item {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 4rem;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding-top: 2.6rem;
  border-top: 1px solid var(--color-border);
  cursor: default;
}

.pe-list-item[href], .pe-list-item[to] { cursor: pointer; }

/* Zig-zag — even items flip image to right */
.pe-list-item--reverse {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
}
.pe-list-item--reverse .pe-list-item__media { order: 2; }
.pe-list-item--reverse .pe-list-item__body { order: 1; }
.pe-list-item--reverse .pe-list-item__num { left: auto; right: 0; }

/* Number plate */
.pe-list-item__num {
  position: absolute;
  top: -1.3rem;
  left: 0;
  padding: 0 0.6rem;
  background: var(--color-bg-primary);
  font-family: var(--ff-mono);
  font-size: 1.05rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

/* Media */
.pe-list-item__media {
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: var(--color-bg-secondary);
  border: 1px solid rgba(126, 184, 247, 0.12);
  border-radius: 8px;
  transition: border-color 0.32s ease, box-shadow 0.32s ease;
}

.pe-list-item:hover .pe-list-item__media {
  border-color: rgba(126, 184, 247, 0.32);
  box-shadow: 0 8px 30px -8px rgba(126, 184, 247, 0.18);
}

.pe-list-item__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Anchor crop to top-left so site logos/headers are preserved */
  object-position: top left;
  filter: grayscale(100%) contrast(1.05);
  transition: filter 0.6s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.pe-list-item:hover .pe-list-item__media img {
  filter: grayscale(0) contrast(1);
  transform: scale(1.03);
}

/* On touch devices (no hover) — show images in full color, no scale */
@media (hover: none) {
  .pe-list-item__media img {
    filter: none;
  }
}

/* Body */
.pe-list-item__body {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.pe-list-item__meta {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--ff-mono);
  font-size: 1.1rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text);
  margin: 0;
}

.pe-list-item__type {
  font-weight: 700;
  color: var(--color-primary);
}

.pe-list-item__type[data-type="enterprise"] { color: var(--color-primary); }
.pe-list-item__type[data-type="oss"] { color: #16a34a; }
.pe-list-item__type[data-type="personal"] { color: #d4365e; }

.pe-list-item__sep { opacity: 0.5; }
.pe-list-item__status { color: var(--color-text); }

.pe-list-item__title {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-white);
  transition: color 0.32s ease;
}

.pe-list-item:hover .pe-list-item__title { color: var(--color-primary); }

.pe-list-item__excerpt {
  margin: 0;
  font-size: 1.55rem;
  line-height: 1.55;
  color: var(--color-text);
}

/* Metrics row */
.pe-list-item__metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 2.2rem;
  padding: 1.3rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.pe-list-item__metric {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.pe-list-item__metric strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-white);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.pe-list-item__metric span {
  font-family: var(--ff-mono);
  font-size: 0.95rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text);
}

/* Tech badges */
.pe-list-item__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.pe-list-item__tech span {
  font-family: var(--ff-mono);
  font-size: 1rem;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.7rem;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

/* CTA */
.pe-list-item__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.4rem;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: 600;
  position: relative;
  width: fit-content;
}

.pe-list-item__cta::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.42s cubic-bezier(0.65, 0, 0.35, 1);
}

.pe-list-item:hover .pe-list-item__cta::after { transform: scaleX(1); }

.pe-list-item__cta i {
  font-size: 1.4rem;
  transition: transform 0.3s ease;
}

.pe-list-item:hover .pe-list-item__cta i.ri-arrow-right-line { transform: translateX(4px); }
.pe-list-item:hover .pe-list-item__cta i.ri-arrow-right-up-line { transform: translate(3px, -3px); }

/* ═══ EMPTY ═══ */
.pe-empty {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  padding: 6rem 2rem;
  color: var(--color-text);
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}

.pe-empty i { font-size: 3rem; opacity: 0.5; }
.pe-empty p { font-size: 1.5rem; margin: 0; }

.pe-empty__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.9rem 1.6rem;
  background: #1A1A1A;
  color: #FAFAF8;
  border: none;
  border-radius: 0;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.22s ease, transform 0.18s ease;
}

.pe-empty__btn:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
}

/* ═══ TRANSITIONS ═══ */
.pe-list-enter-active,
.pe-list-leave-active {
  transition: opacity 0.42s ease, transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}
.pe-list-enter-from,
.pe-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.pe-list-leave-active {
  position: absolute;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1024px) {
  .pe-hero__bottom { grid-template-columns: 1fr; gap: 2rem; }
  .pe-hero__stats { padding-left: 0; border-left: none; padding-top: 1.5rem; border-top: 1px solid var(--color-border); }
  .pe-list { gap: 5rem; }
  .pe-list-item { grid-template-columns: 1fr !important; gap: 2rem; }
  .pe-list-item--reverse .pe-list-item__media { order: 1; }
  .pe-list-item--reverse .pe-list-item__body { order: 2; }
}

@media (max-width: 720px) {
  .pe-hero { padding: 3rem 0 2.5rem; }
  .pe-hero__title { font-size: clamp(4rem, 18vw, 8rem); }
  .pe-hero__lede { font-size: 1.5rem; }
  .pe-hero__stats { gap: 1.6rem; }
  .pe-stat__num { font-size: 2rem; }
  .pe-list-wrap { padding: 3rem 0 0; }
  .pe-list { gap: 4rem; }
  .pe-list-item__title { font-size: clamp(2rem, 7vw, 2.8rem); }
  .pe-filter { font-size: 1.25rem; padding: 0.6rem 1rem 1rem 0; }
}
</style>
