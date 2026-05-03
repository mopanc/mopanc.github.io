<template>
  <div class="blog-edt">

    <!-- ═══ EDITORIAL HERO ═══ -->
    <section class="be-hero">
      <div class="container-wide">
        <div class="be-hero__top">
          <div class="be-hero__meta">
            <span class="be-hero__vol">{{ volumeLabel }}</span>
            <span class="be-hero__sep">·</span>
            <span class="be-hero__issue">{{ translations.blog_issue || 'Issue' }} #{{ articles.length }}</span>
          </div>
          <router-link
            v-if="isAdmin"
            to="/blog/admin"
            class="be-admin-link"
            title="Blog Admin"
          >
            <i class="ri-settings-3-line"></i>
            <span>{{ translations.blog_admin || 'Admin' }}</span>
          </router-link>
        </div>

        <h1 class="be-hero__title">
          <span class="be-hero__title-main">Blog</span>
          <span class="be-hero__title-amp">&amp;</span>
          <span class="be-hero__title-til">TIL</span>
        </h1>

        <div class="be-hero__bottom">
          <p class="be-hero__lede">
            {{ translations.blog_lede || 'Technology, AI, physics, neuroscience. Everything that makes me think out loud.' }}
          </p>
          <div class="be-hero__stats">
            <span class="be-stat">
              <span class="be-stat__num">{{ articles.length.toString().padStart(2, '0') }}</span>
              <span class="be-stat__label">{{ translations.blog_articles || 'articles' }}</span>
            </span>
            <span class="be-stat">
              <span class="be-stat__num">{{ totalReadTime }}</span>
              <span class="be-stat__label">min</span>
            </span>
            <span class="be-stat">
              <span class="be-stat__num">{{ totalLikes }}</span>
              <span class="be-stat__label">{{ translations.blog_likes || 'likes' }}</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ FILTERS NAV (sticky) ═══ -->
    <section class="be-filters">
      <div class="container-wide">
        <nav class="be-filters__nav" :class="{ 'be-filters__nav--scrolled': filtersScrolled }">
          <button
            ref="filterAll"
            class="be-filter"
            :class="{ 'be-filter--active': activeTag === null }"
            @click="setTag(null, $event)"
          >
            <span>{{ translations.proj_overview_filter_all || 'All' }}</span>
            <span class="be-filter__count">{{ articles.length }}</span>
          </button>
          <button
            v-for="tag in visibleTags"
            :key="tag"
            class="be-filter"
            :class="{ 'be-filter--active': activeTag === tag }"
            @click="setTag(activeTag === tag ? null : tag, $event)"
          >
            <span>{{ tag }}</span>
            <span class="be-filter__count">{{ tagCount(tag) }}</span>
          </button>
          <button
            v-if="hasMoreTags"
            class="be-filter be-filter--toggle"
            @click="filtersExpanded = !filtersExpanded"
          >
            <i :class="filtersExpanded ? 'ri-subtract-line' : 'ri-add-line'"></i>
            <span>{{ filtersExpanded ? (translations.blog_filter_less || 'less') : `+${allTags.length - TAGS_LIMIT}` }}</span>
          </button>

          <!-- sliding underline -->
          <span
            class="be-filter__underline"
            :style="{ left: underline.left + 'px', width: underline.width + 'px', opacity: underline.width ? 1 : 0 }"
            aria-hidden="true"
          ></span>
        </nav>
      </div>
    </section>

    <!-- ═══ FEATURED ═══ -->
    <section v-if="featuredArticle && !activeTag" class="be-featured">
      <div class="container-wide">
        <router-link :to="`/blog/${featuredArticle.slug}`" class="be-feat">
          <div class="be-feat__num">01</div>
          <div class="be-feat__media" v-if="featuredArticle.heroImage">
            <img
              :src="featuredArticle.heroImage"
              :alt="isPt ? featuredArticle.titlePt : featuredArticle.title"
              loading="eager"
            />
          </div>
          <div class="be-feat__body">
            <div class="be-feat__meta">
              <span class="be-feat__tag" v-if="featuredArticle.tags && featuredArticle.tags[0]">
                {{ featuredArticle.tags[0] }}
              </span>
              <span class="be-feat__sep">·</span>
              <time :datetime="featuredArticle.date">{{ formatDate(featuredArticle.date, isPt) }}</time>
              <span class="be-feat__sep">·</span>
              <span>{{ isPt ? featuredArticle.readTimePt : featuredArticle.readTime }}</span>
            </div>
            <h2 class="be-feat__title">
              {{ isPt ? featuredArticle.titlePt : featuredArticle.title }}
            </h2>
            <p class="be-feat__excerpt">
              {{ isPt ? featuredArticle.excerptPt : featuredArticle.excerpt }}
            </p>
            <span class="be-feat__cta">
              {{ translations.blog_read_featured || 'Read the featured story' }}
              <i class="ri-arrow-right-up-line"></i>
            </span>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ═══ ARTICLES GRID ═══ -->
    <section class="be-articles">
      <div class="container-wide">

        <div class="be-articles__heading" v-if="!activeTag && featuredArticle">
          <span class="be-articles__num">/02</span>
          <h2 class="be-articles__title">{{ translations.blog_more_writing || 'More writing' }}</h2>
        </div>

        <transition-group name="be-card" tag="div" class="be-grid">
          <article
            v-for="(article, idx) in gridArticles"
            :key="article.id"
            class="be-card"
          >
            <div class="be-card__index">{{ String(idx + (featuredArticle && !activeTag ? 2 : 1)).padStart(2, '0') }}</div>

            <router-link
              v-if="article.heroImage"
              :to="`/blog/${article.slug}`"
              class="be-card__media"
              tabindex="-1"
            >
              <img :src="article.heroImage" :alt="isPt ? article.titlePt : article.title" loading="lazy" />
            </router-link>

            <div class="be-card__body">
              <div class="be-card__meta">
                <time :datetime="article.date">{{ formatDate(article.date, isPt) }}</time>
                <span class="be-card__meta-sep">·</span>
                <span>{{ isPt ? article.readTimePt : article.readTime }}</span>
              </div>

              <h3 class="be-card__title">
                <router-link :to="`/blog/${article.slug}`" class="be-card__link">
                  {{ isPt ? article.titlePt : article.title }}
                </router-link>
              </h3>

              <p class="be-card__excerpt">
                {{ isPt ? article.excerptPt : article.excerpt }}
              </p>

              <div class="be-card__tags">
                <button
                  v-for="tag in (article.tags || []).slice(0, 3)"
                  :key="tag"
                  class="be-card__tag"
                  :class="{ 'be-card__tag--active': activeTag === tag }"
                  @click.stop="setTag(activeTag === tag ? null : tag, $event)"
                  type="button"
                >{{ tag }}</button>
              </div>
            </div>

            <div class="be-card__foot">
              <span class="be-card__stat">
                <i class="ri-eye-line"></i>
                {{ formatCount(article.views || 0) }}
              </span>
              <button
                class="be-card__stat be-card__stat--like"
                :class="{ 'be-card__stat--liked': likedSet.has(article.id) }"
                @click.stop.prevent="toggleLike(article, $event)"
                :title="likedSet.has(article.id) ? (translations.blog_unlike || 'Unlike') : (translations.blog_like || 'Like')"
                type="button"
              >
                <i :class="likedSet.has(article.id) ? 'ri-heart-fill' : 'ri-heart-line'"></i>
                <span>{{ likeMap[article.id] ?? 0 }}</span>
              </button>
              <router-link
                :to="`/blog/${article.slug}#comments`"
                class="be-card__stat"
                :title="translations.blog_comments || 'Comments'"
              >
                <i class="ri-chat-3-line"></i>
                {{ commentCountMap[article.id] ?? 0 }}
              </router-link>
              <router-link :to="`/blog/${article.slug}`" class="be-card__read">
                {{ translations.blog_read || 'Read' }}
                <i class="ri-arrow-right-line"></i>
              </router-link>
            </div>
          </article>
        </transition-group>

        <div v-if="filteredArticles.length === 0" class="be-empty">
          <i class="ri-file-search-line"></i>
          <p>{{ translations.blog_empty || 'No articles found for this filter.' }}</p>
          <button class="be-empty__btn" @click="setTag(null, $event)" type="button">
            <span>{{ translations.proj_overview_view_all || 'View all' }}</span>
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- floating +1 likes layer -->
    <div class="be-likes-layer" aria-hidden="true">
      <span
        v-for="floater in likeFloaters"
        :key="floater.id"
        class="be-like-floater"
        :style="{ left: floater.x + 'px', top: floater.y + 'px' }"
      >+1</span>
    </div>
  </div>
</template>

<script>
import { useLanguage } from '../composables/useLanguage'
import { useArticles } from '../composables/useArticles'
import { useAccessControlSimple } from '../composables/useAccessControlSimple'
import { useSEO, seoConfigs } from '../composables/useSEO'
import { useBreadcrumbs, breadcrumbConfigs } from '../composables/useBreadcrumbs'
import { ref, computed, reactive, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

export default {
  name: 'BlogPage',

  setup() {
    const { translations, selectedLanguage, initialize } = useLanguage()
    const { articles: allArticles, incrementLikes, decrementLikes } = useArticles()
    const { isAdmin } = useAccessControlSimple()

    const activeTag = ref(null)
    const filtersExpanded = ref(false)
    const filtersScrolled = ref(false)
    const TAGS_LIMIT = 6

    // Engagement state
    const likeMap = reactive({})
    const likedSet = ref(new Set())
    const commentCountMap = reactive({})

    // Sliding underline state
    const underline = reactive({ left: 0, width: 0 })

    // +1 floating likes
    const likeFloaters = ref([])
    let floaterId = 0

    const filterAll = ref(null)

    const getFingerprint = () => {
      try {
        let fp = localStorage.getItem('user_fingerprint')
        if (!fp) {
          const c = document.createElement('canvas')
          c.getContext('2d').fillText('fp', 2, 2)
          fp = btoa([navigator.userAgent, navigator.language,
            screen.width + 'x' + screen.height, c.toDataURL()].join('|')).slice(0, 16)
          localStorage.setItem('user_fingerprint', fp)
        }
        return fp
      } catch { return 'anon' }
    }

    const loadEngagement = () => {
      try {
        const fp = getFingerprint()
        const userLikesRaw = localStorage.getItem(`user_likes_${fp}`)
        const userLikedIds = userLikesRaw ? JSON.parse(userLikesRaw) : []
        likedSet.value = new Set(userLikedIds)

        publishedArticles.value.forEach(article => {
          likeMap[article.id] = article.likes || 0
          try {
            const raw = localStorage.getItem(`comments_${article.id}`)
            if (raw) {
              const comments = JSON.parse(raw)
              commentCountMap[article.id] = comments.reduce(
                (s, c) => s + 1 + (c.replies?.length || 0), 0
              )
            } else {
              commentCountMap[article.id] = 0
            }
          } catch { commentCountMap[article.id] = 0 }
        })
      } catch { /* ignore */ }
    }

    const spawnLikeFloater = (event) => {
      const x = event?.clientX ?? window.innerWidth / 2
      const y = event?.clientY ?? window.innerHeight / 2
      const id = ++floaterId
      likeFloaters.value.push({ id, x, y })
      setTimeout(() => {
        likeFloaters.value = likeFloaters.value.filter(f => f.id !== id)
      }, 1100)
    }

    const toggleLike = async (article, event) => {
      try {
        const fp = getFingerprint()
        const id = article.id
        const slug = article.slug
        const wasLiked = likedSet.value.has(id)
        const current = likeMap[id] ?? 0

        if (!wasLiked) spawnLikeFloater(event)

        likeMap[id] = wasLiked ? Math.max(0, current - 1) : current + 1

        const newSet = new Set(likedSet.value)
        if (wasLiked) newSet.delete(id)
        else newSet.add(id)
        likedSet.value = newSet

        const raw = localStorage.getItem(`user_likes_${fp}`)
        let userLikes = raw ? JSON.parse(raw) : []
        if (wasLiked) userLikes = userLikes.filter(x => x !== id)
        else if (!userLikes.includes(id)) userLikes.push(id)
        localStorage.setItem(`user_likes_${fp}`, JSON.stringify(userLikes))

        if (wasLiked) await decrementLikes(slug)
        else await incrementLikes(slug)
      } catch { /* ignore */ }
    }

    useSEO(seoConfigs.blog)
    useBreadcrumbs(breadcrumbConfigs.blog)

    const isPt = computed(() => selectedLanguage.value === 'pt')

    const publishedArticles = computed(() =>
      allArticles.value
        .filter(a => a.status === 'published')
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    )

    const allTags = computed(() => {
      const tagSet = new Set()
      publishedArticles.value.forEach(a => (a.tags || []).forEach(t => tagSet.add(t)))
      return Array.from(tagSet).sort()
    })

    const visibleTags = computed(() =>
      filtersExpanded.value ? allTags.value : allTags.value.slice(0, TAGS_LIMIT)
    )

    const hasMoreTags = computed(() => allTags.value.length > TAGS_LIMIT)

    const filteredArticles = computed(() => {
      if (!activeTag.value) return publishedArticles.value
      return publishedArticles.value.filter(a => (a.tags || []).includes(activeTag.value))
    })

    const featuredArticle = computed(() =>
      !activeTag.value && filteredArticles.value.length > 0 ? filteredArticles.value[0] : null
    )

    const gridArticles = computed(() =>
      featuredArticle.value && !activeTag.value
        ? filteredArticles.value.slice(1)
        : filteredArticles.value
    )

    const totalReadTime = computed(() =>
      publishedArticles.value.reduce((acc, a) => {
        const n = parseInt(a.readTime)
        return acc + (isNaN(n) ? 0 : n)
      }, 0)
    )

    const totalLikes = computed(() =>
      Object.values(likeMap).reduce((s, v) => s + (v || 0), 0)
    )

    const tagCount = (tag) => publishedArticles.value.filter(a => (a.tags || []).includes(tag)).length

    const formatCount = (n) => {
      if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k'
      return n
    }

    const formatDate = (dateStr, pt) => {
      const date = new Date(dateStr)
      if (isNaN(date.getTime()) || !dateStr) return '...'
      return date.toLocaleDateString(pt ? 'pt-PT' : 'en-GB', {
        year: 'numeric', month: 'short', day: 'numeric'
      })
    }

    const volumeLabel = computed(() => {
      const year = new Date().getFullYear()
      // Volume = year offset from 2024 + 1
      const vol = Math.max(1, year - 2024 + 1)
      return `Vol. ${vol.toString().padStart(2, '0')} / ${year}`
    })

    // Sliding underline logic
    const updateUnderline = (target) => {
      if (!target) {
        underline.left = 0
        underline.width = 0
        return
      }
      const navEl = target.closest('.be-filters__nav')
      if (!navEl) return
      const navRect = navEl.getBoundingClientRect()
      const btnRect = target.getBoundingClientRect()
      underline.left = btnRect.left - navRect.left
      underline.width = btnRect.width
    }

    const setTag = async (tag, event) => {
      activeTag.value = tag
      await nextTick()
      // find the active button and animate underline to it
      const navEl = document.querySelector('.be-filters__nav')
      if (!navEl) return
      const activeBtn = event?.currentTarget?.classList?.contains('be-filter')
        ? event.currentTarget
        : navEl.querySelector('.be-filter--active')
      updateUnderline(activeBtn)
    }

    // sticky filter scroll detect
    let scrollHandler = null
    const onScroll = () => {
      filtersScrolled.value = window.scrollY > 220
    }

    onMounted(async () => {
      await initialize()
      scrollHandler = onScroll
      window.addEventListener('scroll', scrollHandler, { passive: true })

      // Initial underline position after first paint
      setTimeout(() => {
        const navEl = document.querySelector('.be-filters__nav')
        const activeBtn = navEl?.querySelector('.be-filter--active')
        if (activeBtn) updateUnderline(activeBtn)
      }, 200)

      if (publishedArticles.value.length) loadEngagement()
    })

    onBeforeUnmount(() => {
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
    })

    watch(publishedArticles, (newArticles) => {
      newArticles.forEach(article => {
        likeMap[article.id] = article.likes || 0
      })
    })

    watch(visibleTags, async () => {
      // re-position underline when tag list changes
      await nextTick()
      const navEl = document.querySelector('.be-filters__nav')
      const activeBtn = navEl?.querySelector('.be-filter--active')
      if (activeBtn) updateUnderline(activeBtn)
    })

    return {
      articles: publishedArticles,
      activeTag,
      allTags,
      visibleTags,
      hasMoreTags,
      filtersExpanded,
      filtersScrolled,
      TAGS_LIMIT,
      filteredArticles,
      featuredArticle,
      gridArticles,
      totalReadTime,
      totalLikes,
      translations,
      isPt,
      tagCount,
      formatDate,
      formatCount,
      likeMap,
      likedSet,
      commentCountMap,
      toggleLike,
      isAdmin,
      volumeLabel,
      setTag,
      underline,
      filterAll,
      likeFloaters,
    }
  }
}
</script>

<style scoped>
.blog-edt {
  position: relative;
  background: var(--color-bg-primary);
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* ═══ HERO (dark band) ═══ */
.be-hero {
  padding: 6rem 0 4rem;
  background: #0A0D14;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.be-hero::after {
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

.be-hero > * { position: relative; z-index: 1; }

.be-hero__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.be-hero__meta {
  display: inline-flex;
  align-items: baseline;
  gap: 0.7rem;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8a9ab5;
}

.be-hero__vol {
  color: #7eb8f7;
  font-weight: 600;
}

.be-hero__sep { opacity: 0.5; }

.be-admin-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  font-family: var(--ff-mono);
  font-size: 1.1rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #FAFAF8;
  border: 1px solid rgba(255,255,255,0.18);
  text-decoration: none;
  transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease;
}

.be-admin-link:hover {
  background: #FAFAF8;
  color: #0A0D14;
  border-color: #FAFAF8;
}

.be-hero__title {
  margin: 0 0 3rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(5rem, 12vw, 14rem);
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: #FAFAF8;
  display: flex;
  align-items: baseline;
  gap: 0.18em;
  flex-wrap: wrap;
}

.be-hero__title-amp {
  color: #7eb8f7;
  font-weight: 400;
  font-style: italic;
  font-size: 0.85em;
  position: relative;
  top: -0.05em;
}

.be-hero__title-til {
  font-style: italic;
}

.be-hero__bottom {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) auto;
  gap: 4rem;
  align-items: end;
}

.be-hero__lede {
  margin: 0;
  font-size: 1.7rem;
  line-height: 1.5;
  color: #c8d8f0;
  max-width: 60rem;
}

.be-hero__stats {
  display: flex;
  gap: 2.5rem;
  align-items: baseline;
  border-left: 1px solid rgba(255,255,255,0.14);
  padding-left: 2.5rem;
}

.be-stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.be-stat__num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.4rem, 3vw, 3rem);
  font-weight: 700;
  line-height: 1;
  color: #FAFAF8;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.be-stat__label {
  font-family: var(--ff-mono);
  font-size: 1rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8a9ab5;
}

/* ═══ FILTERS ═══ */
.be-filters {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  transition: padding 0.25s ease;
}

.be-filters__nav {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  padding: 1.6rem 0 0;
  align-items: center;
}

.be-filters__nav--scrolled {
  padding-top: 1.1rem;
}

.be-filter {
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

.be-filter:hover {
  color: var(--color-white);
}

.be-filter--active {
  color: var(--color-white);
  font-weight: 700;
}

.be-filter__count {
  font-family: var(--ff-mono);
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  color: var(--color-primary);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  position: relative;
  top: -0.5em;
}

.be-filter--toggle {
  color: var(--color-text);
  margin-left: auto;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.be-filter--toggle:hover { color: var(--color-primary); }

.be-filter--toggle i { font-size: 1.4rem; }

.be-filter__underline {
  position: absolute;
  bottom: -1px;
  height: 2px;
  background: var(--color-white);
  transition: left 0.42s cubic-bezier(0.65, 0, 0.35, 1),
              width 0.42s cubic-bezier(0.65, 0, 0.35, 1),
              opacity 0.22s ease;
  pointer-events: none;
}

/* ═══ FEATURED ═══ */
.be-featured {
  padding: 5rem 0 3rem;
  border-bottom: 1px solid var(--color-border);
}

.be-feat {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 4rem;
  text-decoration: none;
  color: inherit;
}

.be-feat__num {
  position: absolute;
  top: -2.6rem;
  left: 0;
  font-family: var(--ff-mono);
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  font-weight: 600;
}

.be-feat__media {
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: var(--color-bg-secondary);
}

.be-feat__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
  transition: filter 0.6s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.be-feat:hover .be-feat__media img {
  filter: grayscale(0) contrast(1);
  transform: scale(1.03);
}

.be-feat__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
}

.be-feat__meta {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text);
}

.be-feat__sep { opacity: 0.5; }

.be-feat__tag {
  color: var(--color-primary);
  font-weight: 600;
}

.be-feat__title {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.6rem, 4.5vw, 4.4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-white);
}

.be-feat:hover .be-feat__title { color: var(--color-primary); }

.be-feat__excerpt {
  margin: 0;
  font-size: 1.65rem;
  line-height: 1.55;
  color: var(--color-text);
}

.be-feat__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--ff-mono);
  font-size: 1.2rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: 600;
  position: relative;
  width: fit-content;
}

.be-feat__cta::after {
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

.be-feat:hover .be-feat__cta::after {
  transform: scaleX(1);
}

.be-feat__cta i { font-size: 1.5rem; transition: transform 0.3s ease; }

.be-feat:hover .be-feat__cta i {
  transform: translate(3px, -3px);
}

/* ═══ ARTICLES GRID ═══ */
.be-articles {
  padding: 5rem 0 0;
}

.be-articles__heading {
  display: flex;
  align-items: baseline;
  gap: 1.4rem;
  margin-bottom: 3rem;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid var(--color-border);
}

.be-articles__num {
  font-family: var(--ff-mono);
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  text-transform: uppercase;
  font-weight: 600;
}

.be-articles__title {
  margin: 0;
  font-size: clamp(1.8rem, 2.2vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-white);
}

.be-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 0;
  border-top: 1px solid var(--color-border);
}

/* card */
.be-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2.4rem 2rem;
  border-bottom: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  background: transparent;
  transition: background 0.32s ease;
}

/* Remove right border on last column */
@media (min-width: 1080px) {
  .be-card:nth-child(3n) { border-right: none; }
}

@media (min-width: 681px) and (max-width: 1079px) {
  .be-card:nth-child(2n) { border-right: none; }
}

@media (max-width: 680px) {
  .be-card { border-right: none; padding: 2rem 0; }
}

.be-card:hover {
  background: rgba(26, 26, 26, 0.025);
}

.be-card__index {
  font-family: var(--ff-mono);
  font-size: 1rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1.2rem;
}

.be-card__media {
  display: block;
  width: calc(100% + 4.8rem);
  margin: -1rem -2.4rem 1.4rem;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-bg-secondary);
}

@media (max-width: 680px) {
  .be-card__media { width: 100%; margin: -0.4rem 0 1.2rem; }
}

.be-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.04);
  transition: filter 0.55s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.be-card:hover .be-card__media img {
  filter: grayscale(0) contrast(1);
  transform: scale(1.05);
}

.be-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.be-card__meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--ff-mono);
  font-size: 1.05rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.be-card__meta-sep { opacity: 0.5; }

.be-card__title {
  margin: 0 0 1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.9rem, 1.8vw, 2.2rem);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.01em;
  color: var(--color-white);
}

.be-card__link {
  color: inherit;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-size: 0% 1px;
  background-repeat: no-repeat;
  transition: background-size 0.42s cubic-bezier(0.65, 0, 0.35, 1), color 0.22s ease;
  padding-bottom: 2px;
}

.be-card:hover .be-card__link {
  background-size: 100% 1px;
  color: var(--color-primary);
}

.be-card__excerpt {
  margin: 0 0 1.4rem;
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.be-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-bottom: 1.2rem;
}

.be-card__tag {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  font-family: var(--ff-mono);
  font-size: 1rem;
  letter-spacing: 0.06em;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  transition: border-color 0.22s ease, color 0.22s ease, background 0.22s ease;
}

.be-card__tag:hover,
.be-card__tag--active {
  border-color: var(--color-white);
  color: var(--color-white);
}

/* foot */
.be-card__foot {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--color-border);
  margin-top: 0.4rem;
}

.be-card__stat {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0;
  background: transparent;
  border: none;
  color: var(--color-text);
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.04em;
  font-variant-numeric: tabular-nums;
  cursor: default;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.be-card__stat i { font-size: 1.4rem; }

.be-card__stat--like {
  cursor: pointer;
}

.be-card__stat--like:hover {
  color: #d4365e;
}

.be-card__stat--liked {
  color: #d4365e;
}

.be-card__stat--liked i {
  animation: beHeartPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes beHeartPop {
  0% { transform: scale(1); }
  35% { transform: scale(1.45); }
  100% { transform: scale(1); }
}

a.be-card__stat:hover {
  color: var(--color-primary);
}

.be-card__read {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--ff-mono);
  font-size: 1.1rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}

.be-card__read::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.32s cubic-bezier(0.65, 0, 0.35, 1);
}

.be-card:hover .be-card__read::after {
  transform: scaleX(1);
}

.be-card__read:hover { color: var(--color-primary); }

.be-card__read i { transition: transform 0.25s ease; font-size: 1.3rem; }

.be-card:hover .be-card__read i {
  transform: translateX(4px);
}

/* ═══ EMPTY ═══ */
.be-empty {
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

.be-empty i { font-size: 3rem; opacity: 0.5; }

.be-empty p { font-size: 1.5rem; margin: 0; }

.be-empty__btn {
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

.be-empty__btn:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
}

/* ═══ TRANSITIONS ═══ */
.be-card-enter-active,
.be-card-leave-active {
  transition: opacity 0.42s ease, transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}
.be-card-enter-from,
.be-card-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.be-card-leave-active {
  position: absolute;
}

/* ═══ +1 FLOATER ═══ */
.be-likes-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}

.be-like-floater {
  position: absolute;
  transform: translate(-50%, -50%);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #d4365e;
  pointer-events: none;
  animation: beLikeFloat 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes beLikeFloat {
  0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
  15%  { opacity: 1; transform: translate(-50%, -70%) scale(1.05); }
  100% { opacity: 0; transform: translate(-50%, -180%) scale(0.9); }
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1024px) {
  .be-hero__bottom { grid-template-columns: 1fr; gap: 2rem; }
  .be-hero__stats { padding-left: 0; border-left: none; padding-top: 1.5rem; border-top: 1px solid var(--color-border); }
  .be-feat { grid-template-columns: 1fr; gap: 2.4rem; }
}

@media (max-width: 720px) {
  .be-hero { padding: 3rem 0 2.5rem; }
  .be-hero__title { font-size: clamp(4rem, 18vw, 8rem); gap: 0.1em; }
  .be-hero__lede { font-size: 1.5rem; }
  .be-hero__stats { gap: 1.6rem; }
  .be-stat__num { font-size: 2rem; }
  .be-featured { padding: 3rem 0 2rem; }
  .be-articles { padding: 3rem 0 0; }
  .be-grid { grid-template-columns: 1fr; }
  .be-filter { font-size: 1.25rem; padding: 0.6rem 1rem 1rem 0; }
}
</style>
