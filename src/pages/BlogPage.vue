<template>
  <div class="blog-page">
    <!-- Compact Header -->
    <section class="blog-hero">
      <div class="container-wide">
        <div class="blog-hero__layout">

          <!-- Left: title + description -->
          <div class="blog-hero__left">
            <p class="blog-hero__eyebrow">
              <i class="ri-quill-pen-line"></i>
              {{ isPt ? 'Pensamentos & Escrita' : 'Thoughts & Writing' }}
            </p>
            <div class="blog-hero__title-row">
              <h1 class="blog-hero__title">
                Blog &amp; <span class="blog-hero__accent">TIL</span>
              </h1>
              <router-link
                v-if="isAdmin"
                to="/blog/admin"
                class="blog-admin-btn"
                title="Blog Admin"
              >
                <i class="ri-settings-3-line"></i>
                {{ isPt ? 'Gerir' : 'Manage' }}
              </router-link>
            </div>
            <p class="blog-hero__desc">
              {{ isPt
                ? 'Tecnologia, IA, física, neurociência — tudo o que me faz pensar em voz alta.'
                : 'Technology, AI, physics, neuroscience — everything that makes me think out loud.'
              }}
            </p>
          </div>

          <!-- Right: stat chips -->
          <div class="blog-hero__chips">
            <div class="blog-chip">
              <i class="ri-article-line"></i>
              <strong>{{ articles.length }}</strong>
              <span>{{ isPt ? 'artigos' : 'articles' }}</span>
            </div>
            <div class="blog-chip">
              <i class="ri-time-line"></i>
              <strong>{{ totalReadTime }}</strong>
              <span>min</span>
            </div>
            <div class="blog-chip">
              <i class="ri-heart-line"></i>
              <strong>{{ totalLikes }}</strong>
              <span>likes</span>
            </div>
          </div>

        </div>

        <!-- Tag Filters inline -->
        <div class="blog-filters__row">
          <div class="blog-filters__inner">
            <button
              class="blog-filter-btn"
              :class="{ 'blog-filter-btn--active': activeTag === null }"
              @click="activeTag = null"
            >
              {{ isPt ? 'Todos' : 'All' }}
              <span class="blog-filter-btn__count">{{ articles.length }}</span>
            </button>
            <button
              v-for="tag in visibleTags"
              :key="tag"
              class="blog-filter-btn"
              :class="{ 'blog-filter-btn--active': activeTag === tag }"
              @click="activeTag = activeTag === tag ? null : tag"
            >
              {{ tag }}
              <span class="blog-filter-btn__count">{{ tagCount(tag) }}</span>
            </button>
          </div>
          <button
            v-if="hasMoreTags"
            class="blog-filters__expand"
            @click="filtersExpanded = !filtersExpanded"
          >
            <i :class="filtersExpanded ? 'ri-subtract-line' : 'ri-add-line'"></i>
            {{ filtersExpanded ? (isPt ? 'Ver menos' : 'Less') : `+${allTags.length - TAGS_LIMIT} ${isPt ? 'mais' : 'more'}` }}
          </button>
        </div>

      </div>
    </section>

    <!-- Articles Grid -->
    <section class="blog-articles section">
      <div class="container-wide">
        <transition-group name="article-fade" tag="div" class="blog-grid">
          <article
            v-for="article in filteredArticles"
            :key="article.id"
            class="article-card"
          >
            <!-- Thumbnail -->
            <router-link
              v-if="article.heroImage"
              :to="`/blog/${article.slug}`"
              class="article-card__thumb"
              tabindex="-1"
            >
              <img :src="article.heroImage" :alt="isPt ? article.titlePt : article.title" loading="lazy" />
              <span class="article-card__read-badge">
                <i class="ri-time-line"></i>
                {{ isPt ? article.readTimePt : article.readTime }}
              </span>
            </router-link>

            <!-- Content -->
            <div class="article-card__content">
              <div class="article-card__meta-top">
                <time class="article-card__date" :datetime="article.date">
                  {{ formatDate(article.date, isPt) }}
                </time>
                <span v-if="!article.heroImage" class="article-card__read-time">
                  <i class="ri-time-line"></i>
                  {{ isPt ? article.readTimePt : article.readTime }}
                </span>
              </div>

              <h2 class="article-card__title">
                <router-link :to="`/blog/${article.slug}`" class="article-card__title-link">
                  {{ isPt ? article.titlePt : article.title }}
                </router-link>
              </h2>

              <p class="article-card__excerpt">
                {{ isPt ? article.excerptPt : article.excerpt }}
              </p>
            </div>

            <!-- Stats row -->
            <div class="article-card__stats">
              <span class="article-stat" :title="isPt ? 'Visualizações' : 'Views'">
                <i class="ri-eye-line"></i>
                {{ formatCount(article.views || 0) }}
              </span>
              <button
                :class="['article-stat article-stat--like', { 'article-stat--liked': likedSet.has(article.id) }]"
                @click.prevent="toggleLike(article)"
                :title="likedSet.has(article.id) ? (isPt ? 'Remover gosto' : 'Unlike') : (isPt ? 'Gostar' : 'Like')"
              >
                <i :class="likedSet.has(article.id) ? 'ri-heart-fill' : 'ri-heart-line'"></i>
                {{ likeMap[article.id] ?? 0 }}
              </button>
              <router-link
                :to="`/blog/${article.slug}#comments`"
                class="article-stat"
                :title="isPt ? 'Comentários' : 'Comments'"
              >
                <i class="ri-chat-3-line"></i>
                {{ commentCountMap[article.id] ?? 0 }}
              </router-link>
            </div>

            <!-- Footer -->
            <div class="article-card__footer">
              <div class="article-card__tags">
                <span
                  v-for="tag in article.tags.slice(0, 2)"
                  :key="tag"
                  class="article-card__tag"
                  :class="{ 'article-card__tag--active': activeTag === tag }"
                  @click.stop="activeTag = activeTag === tag ? null : tag"
                >{{ tag }}</span>
              </div>
              <router-link :to="`/blog/${article.slug}`" class="article-card__cta">
                {{ isPt ? 'Ler artigo' : 'Read article' }}
                <i class="ri-arrow-right-line"></i>
              </router-link>
            </div>
          </article>
        </transition-group>

        <!-- Empty state -->
        <div v-if="filteredArticles.length === 0" class="blog-empty">
          <i class="ri-file-search-line"></i>
          <p>{{ isPt ? 'Nenhum artigo encontrado para este filtro.' : 'No articles found for this filter.' }}</p>
          <button class="btn btn--outline btn--sm" @click="activeTag = null">
            {{ isPt ? 'Ver todos' : 'View all' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useLanguage } from '../composables/useLanguage'
import { useArticles } from '../composables/useArticles'
import { useAccessControlSimple } from '../composables/useAccessControlSimple'
import { useSEO, seoConfigs } from '../composables/useSEO'
import { useBreadcrumbs, breadcrumbConfigs } from '../composables/useBreadcrumbs'
import { ref, computed, reactive, watch, onMounted } from 'vue'

export default {
  name: 'BlogPage',

  setup() {
    const { selectedLanguage, initialize } = useLanguage()
    const { articles: allArticles, incrementLikes, decrementLikes } = useArticles()
    const { isAdmin } = useAccessControlSimple()
    const activeTag = ref(null)
    const filtersExpanded = ref(false)
    const TAGS_LIMIT = 6

    // ── Engagement state ──────────────────────────────────
    const likeMap         = reactive({})   // articleId → like count
    const likedSet        = ref(new Set()) // article IDs liked by this user
    const commentCountMap = reactive({})   // articleId → comment count

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
          // Likes come from Firestore (article.likes is the source of truth)
          likeMap[article.id] = article.likes || 0

          // Comments still from localStorage
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

    const toggleLike = async (article) => {
      try {
        const fp = getFingerprint()
        const id = article.id
        const slug = article.slug
        const wasLiked = likedSet.value.has(id)
        const current = likeMap[id] ?? 0

        // Optimistic UI
        likeMap[id] = wasLiked ? Math.max(0, current - 1) : current + 1

        const newSet = new Set(likedSet.value)
        if (wasLiked) newSet.delete(id)
        else newSet.add(id)
        likedSet.value = newSet

        // Persist fingerprint locally
        const raw = localStorage.getItem(`user_likes_${fp}`)
        let userLikes = raw ? JSON.parse(raw) : []
        if (wasLiked) userLikes = userLikes.filter(x => x !== id)
        else if (!userLikes.includes(id)) userLikes.push(id)
        localStorage.setItem(`user_likes_${fp}`, JSON.stringify(userLikes))

        // Firestore update
        if (wasLiked) await decrementLikes(slug)
        else await incrementLikes(slug)
      } catch { /* ignore */ }
    }

    // ── SEO & Breadcrumbs ─────────────────────────────────
    useSEO(seoConfigs.blog)
    useBreadcrumbs(breadcrumbConfigs.blog)

    // ── Language ─────────────────────────────────────────
    onMounted(async () => {
      await initialize()
    })

    const isPt = computed(() => selectedLanguage.value === 'pt')

    // ── Articles ──────────────────────────────────────────
    const publishedArticles = computed(() =>
      allArticles.value
        .filter(a => a.status === 'published')
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    )

    const allTags = computed(() => {
      const tagSet = new Set()
      publishedArticles.value.forEach(a => a.tags.forEach(t => tagSet.add(t)))
      return Array.from(tagSet).sort()
    })

    const visibleTags = computed(() =>
      filtersExpanded.value ? allTags.value : allTags.value.slice(0, TAGS_LIMIT)
    )

    const hasMoreTags = computed(() => allTags.value.length > TAGS_LIMIT)

    const filteredArticles = computed(() => {
      if (!activeTag.value) return publishedArticles.value
      return publishedArticles.value.filter(a => a.tags.includes(activeTag.value))
    })

    const totalReadTime = computed(() =>
      publishedArticles.value.reduce((acc, a) => {
        const n = parseInt(a.readTime)
        return acc + (isNaN(n) ? 0 : n)
      }, 0)
    )

    const totalLikes = computed(() =>
      Object.values(likeMap).reduce((s, v) => s + (v || 0), 0)
    )

    const tagCount = (tag) => publishedArticles.value.filter(a => a.tags.includes(tag)).length

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

    // Keep likeMap in sync when Firestore snapshot updates
    watch(publishedArticles, (newArticles) => {
      newArticles.forEach(article => {
        likeMap[article.id] = article.likes || 0
      })
    })

    // Load engagement after articles are available
    onMounted(() => {
      if (publishedArticles.value.length) loadEngagement()
    })

    return {
      articles: publishedArticles,
      activeTag,
      allTags,
      visibleTags,
      hasMoreTags,
      filtersExpanded,
      TAGS_LIMIT,
      filteredArticles,
      totalReadTime,
      totalLikes,
      isPt,
      tagCount,
      formatDate,
      formatCount,
      // engagement
      likeMap,
      likedSet,
      commentCountMap,
      toggleLike,
      isAdmin,
    }
  }
}
</script>

<style scoped>
/* ── Hero compacto ────────────────────────────────────── */
.blog-hero {
  padding: 2.4rem 0 0;
  border-bottom: 1px solid var(--color-border);
}

.blog-hero__layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;
}

.blog-hero__left { flex: 1; min-width: 0; }

.blog-hero__eyebrow {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.15rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-bottom: 0.5rem;
}

.blog-hero__title-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-bottom: 0.6rem;
}

.blog-hero__title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.1;
  margin: 0;
}

.blog-hero__accent { color: var(--color-primary); }

.blog-hero__desc {
  font-size: 1.5rem;
  line-height: 1.65;
  color: var(--color-muted);
  margin: 0;
  max-width: 520px;
}

/* Stat chips */
.blog-hero__chips {
  display: flex;
  gap: 0.8rem;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.blog-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  font-size: 1.35rem;
  color: var(--color-muted);
}

.blog-chip i { font-size: 1.4rem; }
.blog-chip strong { color: var(--color-white); font-weight: 700; }

/* Admin button */
.blog-admin-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  background: rgba(74, 134, 232, 0.1);
  border: 1px solid rgba(74, 134, 232, 0.3);
  border-radius: 7px;
  color: var(--color-primary);
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
}
.blog-admin-btn:hover {
  background: rgba(74, 134, 232, 0.2);
  border-color: var(--color-primary);
}

/* ── Filters (dentro do hero) ─────────────────────────── */
.blog-filters__row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 0;
}
.blog-filters__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
}
.blog-filters__expand {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1px dashed var(--color-border);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: var(--transition);
  font-family: inherit;
}
.blog-filters__expand:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.blog-filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.8rem;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  transition: var(--transition);
  font-family: inherit;
}
.blog-filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.blog-filter-btn--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
}
.blog-filter-btn__count {
  font-size: 1.05rem;
  opacity: 0.7;
  background-color: rgba(255,255,255,0.12);
  border-radius: 999px;
  padding: 0.05rem 0.4rem;
}

/* ── Grid ─────────────────────────────────────────────── */
.blog-articles { padding: 4rem 0; }
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
}

/* ── Card ─────────────────────────────────────────────── */
.article-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
  overflow: hidden;
}
.article-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 12px 36px rgba(74, 134, 232, 0.13);
  transform: translateY(-4px);
}

/* Thumbnail */
.article-card__thumb {
  display: block;
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
}
.article-card__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
  display: block;
}
.article-card:hover .article-card__thumb img { transform: scale(1.05); }

.article-card__read-badge {
  position: absolute;
  bottom: 0.7rem;
  right: 0.7rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.7rem;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
  border-radius: 999px;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 500;
}

/* Content */
.article-card__content {
  padding: 1.75rem 1.75rem 1.25rem;
  flex: 1;
}
.article-card__meta-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.9rem;
}
.article-card__date {
  font-size: 1.3rem;
  color: var(--color-muted);
  font-weight: 500;
}
.article-card__read-time {
  font-size: 1.3rem;
  color: var(--color-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}
.article-card__title {
  font-size: clamp(1.8rem, 2vw, 2.2rem);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.4;
  margin: 0 0 0.85rem;
}
.article-card__title-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}
.article-card__title-link:hover { color: var(--color-primary); }
.article-card__excerpt {
  font-size: 1.5rem;
  line-height: 1.75;
  color: var(--color-text);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Stats row */
.article-card__stats {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.6rem 1.75rem;
  border-top: 1px solid var(--color-border);
}

.article-stat {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-muted);
  background: transparent;
  border: none;
  cursor: default;
  font-family: inherit;
  text-decoration: none;
  transition: all 0.2s ease;
}
.article-stat i { font-size: 1.4rem; }

.article-stat--like {
  cursor: pointer;
}
.article-stat--like:hover {
  color: #ff4d6d;
  background: rgba(255, 77, 109, 0.08);
}
.article-stat--liked {
  color: #ff4d6d;
}
.article-stat--liked i { color: #ff4d6d; }

a.article-stat:hover {
  color: var(--color-primary);
  background: rgba(74, 134, 232, 0.08);
}

/* Footer */
.article-card__footer {
  padding: 0.85rem 1.75rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  background: rgba(0,0,0,0.025);
  flex-shrink: 0;
}

/* Tags */
.article-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  flex: 1;
  min-width: 0;
}
.article-card__tag {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  background: transparent;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
}
.article-card__tag:hover,
.article-card__tag--active {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(74, 134, 232, 0.08);
}

/* Actions */
.article-card__actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
}


/* Read CTA */
.article-card__cta {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: var(--transition);
  padding: 0.35rem 0;
  white-space: nowrap;
}
.article-card__cta i { transition: transform 0.2s ease; }
.article-card__cta:hover { color: var(--color-primary-hover); }
.article-card__cta:hover i { transform: translateX(3px); }

/* ── Empty State ──────────────────────────────────────── */
.blog-empty {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 5rem 2rem;
  color: var(--color-muted);
  text-align: center;
}
.blog-empty i { font-size: 2.8rem; opacity: 0.5; }
.blog-empty p { font-size: 1.6rem; margin: 0; }

/* ── Transition ───────────────────────────────────────── */
.article-fade-enter-active, .article-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.article-fade-enter-from, .article-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

/* ── Light Mode ───────────────────────────────────────── */
.theme-light .article-card { background: #fff; }
.theme-light .blog-filters { background: #fff; }
.theme-light .article-card__footer { background: #f8fafc; }
.theme-light .article-card__stats { background: #f8fafc; }

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 900px) {
  .blog-grid { grid-template-columns: 1fr; }
}
@media (max-width: 680px) {
  .blog-hero__layout { flex-direction: column; align-items: flex-start; gap: 1.2rem; }
  .blog-hero__chips { width: 100%; }
  .article-card__content { padding: 1.4rem 1.4rem 1rem; }
  .article-card__footer { padding: 0.75rem 1.4rem; }
  .article-card__stats { padding: 0.5rem 1.4rem; }
}
@media (max-width: 400px) {
  .article-card__footer { flex-wrap: wrap; gap: 0.6rem; }
  .article-card__tags { width: 100%; }
}
</style>
