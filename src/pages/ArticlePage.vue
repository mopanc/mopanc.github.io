<template>
  <div class="article-page">
    <!-- ── 404 / Not Found ────────────────────────────── -->
    <div v-if="!article" class="article-not-found">
      <div class="container-narrow">
        <i class="ri-file-unknow-line"></i>
        <h1>{{ isPt ? 'Artigo não encontrado' : 'Article not found' }}</h1>
        <p>{{ isPt ? 'O artigo que procuras não existe ou foi movido.' : 'The article you are looking for does not exist or has been moved.' }}</p>
        <router-link to="/blog" class="btn btn--primary">
          <i class="ri-arrow-left-line"></i>
          {{ isPt ? 'Voltar ao Blog' : 'Back to Blog' }}
        </router-link>
      </div>
    </div>

    <!-- ── Article ─────────────────────────────────────── -->
    <article v-else class="article-wrapper">

      <!-- Breadcrumb -->
      <nav class="article-breadcrumb" aria-label="breadcrumb">
        <div class="container-wide">
          <div class="breadcrumb-inner">
            <router-link to="/" class="breadcrumb-link">
              <i class="ri-home-4-line"></i>
              {{ isPt ? 'Início' : 'Home' }}
            </router-link>
            <i class="ri-arrow-right-s-line breadcrumb-sep"></i>
            <router-link to="/blog" class="breadcrumb-link">Blog</router-link>
            <i class="ri-arrow-right-s-line breadcrumb-sep"></i>
            <span class="breadcrumb-current">{{ isPt ? article.titlePt : article.title }}</span>
          </div>
        </div>
      </nav>

      <!-- ── Two-column grid (starts right after breadcrumb) ── -->
      <div class="article-layout">
        <div class="article-layout__inner">

          <!-- Main content column -->
          <main class="article-main">

            <!-- Article header inside the main column -->
            <header class="article-header">
              <div class="article-header__tags">
                <span v-for="tag in article.tags" :key="tag" class="article-tag">{{ tag }}</span>
              </div>
              <h1 class="article-header__title">
                {{ isPt ? article.titlePt : article.title }}
              </h1>
              <div class="article-header__meta">
                <div class="article-meta-item">
                  <i class="ri-user-line"></i>
                  <span>Jorge Morais</span>
                </div>
                <div class="article-meta-item">
                  <i class="ri-calendar-line"></i>
                  <time :datetime="article.date">{{ formatDate(article.date, isPt) }}</time>
                </div>
                <div class="article-meta-item">
                  <i class="ri-time-line"></i>
                  <span>{{ isPt ? article.readTimePt : article.readTime }}</span>
                </div>
              </div>
              <p class="article-header__excerpt">
                {{ isPt ? article.excerptPt : article.excerpt }}
              </p>
            </header>

            <!-- Hero Image — below title/excerpt, before article body -->
            <div v-if="article.heroImage" class="article-hero-image">
              <img :src="article.heroImage" :alt="isPt ? article.titlePt : article.title" loading="eager" />
            </div>

            <div class="article-content" v-html="renderedContent"></div>

            <!-- Footer content -->
            <div class="article-footer-section">
              <router-link to="/blog" class="btn btn--secondary article-back-btn">
                <i class="ri-arrow-left-line"></i>
                {{ isPt ? 'Voltar ao Blog' : 'Back to Blog' }}
              </router-link>

              <!-- Related articles -->
              <div v-if="relatedArticles.length > 0" class="related-articles">
                <h3 class="related-articles__title">
                  {{ isPt ? 'Artigos relacionados' : 'Related articles' }}
                </h3>
                <div class="related-articles__grid">
                  <router-link
                    v-for="related in relatedArticles"
                    :key="related.id"
                    :to="`/blog/${related.slug}`"
                    class="related-article-card"
                  >
                    <span class="related-article-card__title">
                      {{ isPt ? related.titlePt : related.title }}
                    </span>
                    <span class="related-article-card__read-time">
                      <i class="ri-time-line"></i>
                      {{ isPt ? related.readTimePt : related.readTime }}
                    </span>
                  </router-link>
                </div>
              </div>

              <!-- Comments -->
              <CommentsSection
                :article-id="article.id"
                :article-slug="article.slug"
              />
            </div>
          </main>

          <!-- ── Sidebar ──────────────────────────────── -->
          <aside class="article-sidebar">

            <!-- Author card -->
            <div class="sidebar-card sidebar-author">
              <img src="/avatar.webp" alt="Jorge Morais" class="sidebar-author__avatar" />
              <div class="sidebar-author__info">
                <p class="sidebar-author__name">Jorge Morais</p>
                <p class="sidebar-author__role">Full Stack Developer</p>
              </div>
              <div class="sidebar-author__social">
                <a href="https://github.com/mopanc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="sidebar-social-btn">
                  <i class="ri-github-fill"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/jorge-mopanc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="sidebar-social-btn sidebar-social-btn--linkedin">
                  <i class="ri-linkedin-fill"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <!-- Stats card -->
            <div class="sidebar-card sidebar-stats">
              <p class="sidebar-card__label">
                <i class="ri-bar-chart-2-line"></i>
                {{ isPt ? 'Estatísticas' : 'Stats' }}
              </p>
              <div class="sidebar-stats__grid">
                <div class="sidebar-stat">
                  <i class="ri-eye-line"></i>
                  <span class="sidebar-stat__value">{{ formatCount(article.views || 0) }}</span>
                  <span class="sidebar-stat__label">{{ isPt ? 'views' : 'views' }}</span>
                </div>
                <div class="sidebar-stat">
                  <i class="ri-heart-line"></i>
                  <span class="sidebar-stat__value">{{ formatCount(article.likes || 0) }}</span>
                  <span class="sidebar-stat__label">likes</span>
                </div>
                <div class="sidebar-stat">
                  <i class="ri-message-3-line"></i>
                  <span class="sidebar-stat__value">{{ commentsCount }}</span>
                  <span class="sidebar-stat__label">{{ isPt ? 'comentários' : 'comments' }}</span>
                </div>
              </div>
            </div>

            <!-- Likes card -->
            <div class="sidebar-card sidebar-likes">
              <p class="sidebar-card__label">
                <i class="ri-heart-line"></i>
                {{ isPt ? 'Gostar do artigo' : 'Like this article' }}
              </p>
              <LikesSection
                :article-id="article.id"
                :article-slug="article.slug"
                :initial-likes="article.likes || 0"
              />
            </div>

            <!-- Share card -->
            <div class="sidebar-card sidebar-share">
              <p class="sidebar-card__label">
                <i class="ri-share-forward-line"></i>
                {{ isPt ? 'Partilhar' : 'Share' }}
              </p>
              <ShareButtons
                :title="isPt ? article.titlePt : article.title"
                :excerpt="isPt ? article.excerptPt : article.excerpt"
                :url="`https://jorgemopanc.com/blog/${article.slug}`"
                :show-stats="false"
                :vertical="true"
              />
            </div>

          </aside>
        </div>
      </div>

    </article>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { useArticles } from '../composables/useArticles'
import { useCookieConsent } from '../composables/useCookieConsent'
import LikesSection from '../components/LikesSection.vue'
import ShareButtons from '../components/ShareButtons.vue'
import CommentsSection from '../components/CommentsSection.vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-tomorrow.css'

marked.use({ breaks: true, gfm: true })

export default {
  name: 'ArticlePage',
  components: { LikesSection, ShareButtons, CommentsSection },

  setup() {
    const route  = useRoute()
    const router = useRouter()
    const { selectedLanguage, initialize } = useLanguage()
    const { articles, isLoading, incrementViews } = useArticles()
    const { safeLocalStorage, COOKIE_CATEGORIES } = useCookieConsent()

    const isPt = computed(() => selectedLanguage.value === 'pt')

    const article = computed(() =>
      articles.value.find(a => a.slug === route.params.slug) || null
    )

    const renderedContent = computed(() => {
      if (!article.value) return ''
      const raw = isPt.value ? article.value.contentPt : article.value.content
      if (!raw) return ''
      return marked.parse(raw)
    })

    // Redirect to 404 only after Firestore has finished loading
    watch([article, isLoading], ([val, loading]) => {
      if (!loading && val === null && route.params.slug) router.replace('/404')
    }, { immediate: true })

    const relatedArticles = computed(() => {
      if (!article.value) return []
      const current = article.value
      return articles.value
        .filter(a => a.id !== current.id && a.status === 'published')
        .filter(a => a.tags.some(t => current.tags.includes(t)))
        .slice(0, 3)
    })

    // ── Comments count ──────────────────────────────────
    const commentsCount = ref(0)

    const loadCommentsCount = () => {
      if (!article.value) return
      try {
        const stored = safeLocalStorage.getItem(`comments_${article.value.id}`, COOKIE_CATEGORIES.FUNCTIONAL)
        commentsCount.value = stored ? JSON.parse(stored).length : 0
      } catch {
        commentsCount.value = 0
      }
    }

    // ── Format count (K/M) ──────────────────────────────
    const formatCount = (n) => {
      if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
      if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
      return String(n)
    }

    // ── Dynamic OG / Twitter meta tags ─────────────────
    const updateArticleOgMeta = () => {
      if (!article.value) return
      const title     = isPt.value ? article.value.titlePt  : article.value.title
      const desc      = isPt.value ? article.value.excerptPt : article.value.excerpt
      const url       = `https://jorgemopanc.com/blog/${article.value.slug}`
      const image     = article.value.heroImage || 'https://jorgemopanc.com/avatar.jpg'
      const fullTitle = `${title} | Jorge Morais`

      document.title = fullTitle

      const setMeta = (attr, val, content) => {
        let el = document.querySelector(`meta[${attr}="${val}"]`)
        if (!el) {
          el = document.createElement('meta')
          el.setAttribute(attr, val)
          document.head.appendChild(el)
        }
        el.setAttribute('content', content || '')
      }

      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', url)

      setMeta('name',     'description',              desc)
      setMeta('property', 'og:type',                  'article')
      setMeta('property', 'og:title',                 fullTitle)
      setMeta('property', 'og:description',           desc)
      setMeta('property', 'og:url',                   url)
      setMeta('property', 'og:image',                 image)
      setMeta('property', 'og:image:alt',             title)
      setMeta('property', 'og:site_name',             'Jorge Morais')
      setMeta('property', 'og:locale',                isPt.value ? 'pt_PT' : 'en_GB')
      setMeta('property', 'article:author',           'https://www.linkedin.com/in/jorge-mopanc/')
      setMeta('property', 'article:published_time',   article.value.date || '')
      setMeta('name',     'twitter:card',             'summary_large_image')
      setMeta('name',     'twitter:title',            fullTitle)
      setMeta('name',     'twitter:description',      desc)
      setMeta('name',     'twitter:image',            image)
    }

    // ── Doc title ───────────────────────────────────────
    const updateDocTitle = () => {
      if (!article.value) return
      const title = isPt.value ? article.value.titlePt : article.value.title
      document.title = `${title} | Jorge Morais`
    }

    const highlightCode = () => { nextTick(() => { Prism.highlightAll() }) }

    // ── Lifecycle ───────────────────────────────────────
    onMounted(async () => {
      await initialize()
      updateDocTitle()
      updateArticleOgMeta()
      highlightCode()
      loadCommentsCount()
      if (route.params.slug) incrementViews(route.params.slug)
      window.addEventListener('languageChanged', updateDocTitle)
    })

    onUnmounted(() => {
      window.removeEventListener('languageChanged', updateDocTitle)
    })

    watch([article, isPt], () => {
      updateDocTitle()
      updateArticleOgMeta()
      highlightCode()
      loadCommentsCount()
    })

    watch(renderedContent, highlightCode)

    // ── Date format ─────────────────────────────────────
    const formatDate = (dateStr, pt) => {
      const date = new Date(dateStr)
      if (isNaN(date.getTime())) return dateStr
      return date.toLocaleDateString(pt ? 'pt-PT' : 'en-GB', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    }

    return {
      article,
      relatedArticles,
      renderedContent,
      isPt,
      formatDate,
      formatCount,
      commentsCount
    }
  }
}
</script>

<style scoped>
/* ── 404 / Not Found ─────────────────────────────────── */
.article-not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
}

.article-not-found i {
  font-size: 3.5rem;
  color: var(--color-muted);
  display: block;
  margin-bottom: 1.5rem;
}

.article-not-found h1 {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin-bottom: 1rem;
  color: var(--color-white);
}

.article-not-found p {
  color: var(--color-text);
  margin-bottom: 2rem;
}

/* ── Breadcrumb ───────────────────────────────────────── */
.article-breadcrumb {
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--color-border);
}

.breadcrumb-inner {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.3rem;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover { color: var(--color-primary); }

.breadcrumb-sep { color: var(--color-border); font-size: 1rem; }

.breadcrumb-current {
  font-size: 1.3rem;
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 320px;
}

/* ── Article Header (inside main column) ────────────── */
.article-header {
  margin-bottom: 2.5rem;
}

/* ── Hero Image — 80% centred, between header and body  */
.article-hero-image {
  width: 80%;
  margin: 0 auto 3rem;
}

.article-hero-image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.article-header__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.4rem;
}

.article-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid rgba(74, 134, 232, 0.4);
  color: var(--color-primary);
  background: rgba(74, 134, 232, 0.08);
}

.article-header__title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.2;
  margin: 0 0 1.6rem;
}

.article-header__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  margin-bottom: 1.8rem;
}

.article-meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.35rem;
  color: var(--color-muted);
}

.article-meta-item i { font-size: 1.4rem; }

.article-header__excerpt {
  font-size: 1.8rem;
  line-height: 1.75;
  color: var(--color-text);
  font-style: italic;
  border-left: 3px solid var(--color-primary);
  padding-left: 1.2rem;
  margin: 0;
}

/* ── Two-column layout ───────────────────────────────── */
.article-layout {
  padding: 2.5rem 0 6rem;
}

.article-layout__inner {
  width: 92%;
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 29rem;
  gap: 0 4.5rem;
  align-items: start;
}

/* ── Main content column ─────────────────────────────── */
.article-main {
  min-width: 0;   /* prevent grid overflow from code blocks */
}

/* ── Article prose styles ────────────────────────────── */
.article-content {
  font-size: 1.7rem;
  line-height: 1.85;
  color: var(--color-text);
}

.article-content :deep(h2) {
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-white);
  margin: 3rem 0 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--color-border);
  line-height: 1.3;
}

.article-content :deep(h3) {
  font-size: clamp(1.8rem, 2.5vw, 2.2rem);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: var(--color-white);
  margin: 2.2rem 0 0.8rem;
  line-height: 1.35;
}

.article-content :deep(p) {
  margin: 0 0 1.4rem;
  font-size: 1.7rem;
  line-height: 1.85;
}

.article-content :deep(ul),
.article-content :deep(ol) {
  padding-left: 1.5rem;
  margin: 0 0 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.article-content :deep(li) {
  font-size: 1.7rem;
  line-height: 1.8;
}

.article-content :deep(ol) { list-style-type: decimal; }
.article-content :deep(ul) { list-style-type: disc; }
.article-content :deep(li::marker) { color: var(--color-primary); }

.article-content :deep(strong) { color: var(--color-white); font-weight: 600; }
.article-content :deep(em) { color: var(--color-text); font-style: italic; }

.article-content :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: opacity 0.2s;
}
.article-content :deep(a:hover) { opacity: 0.8; }

.article-content :deep(blockquote) {
  border-left: 3px solid var(--color-primary);
  padding: 0.8rem 1.4rem;
  margin: 1.5rem 0;
  background: rgba(74, 134, 232, 0.05);
  border-radius: 0 8px 8px 0;
  color: var(--color-text);
  font-style: italic;
}

.article-content :deep(pre) {
  background: #0d1117;
  border: 1px solid rgba(74, 134, 232, 0.2);
  border-radius: 10px;
  padding: 1.4rem 1.6rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-size: 0.83rem;
  line-height: 1.65;
  position: relative;
}

.article-content :deep(pre)::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 10px 10px 0 0;
}

.article-content :deep(pre code) {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: inherit;
  color: #e6edf3;
  background: transparent;
  padding: 0;
  border-radius: 0;
  white-space: pre;
  tab-size: 2;
}

.article-content :deep(code:not(pre code)) {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 0.83em;
  color: var(--color-accent);
  background: rgba(74, 134, 232, 0.1);
  padding: 0.15em 0.45em;
  border-radius: 4px;
  border: 1px solid rgba(74, 134, 232, 0.2);
}

.article-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 1.5rem;
}

.article-content :deep(th) {
  background: rgba(74, 134, 232, 0.1);
  color: var(--color-white);
  font-weight: 600;
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid var(--color-border);
}

.article-content :deep(td) {
  padding: 0.65rem 1rem;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  vertical-align: top;
}

.article-content :deep(tr:nth-child(even) td) {
  background: rgba(255, 255, 255, 0.02);
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
}

.article-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 2rem 0;
}

/* ── Footer section (inside main) ───────────────────── */
.article-footer-section {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.article-back-btn {
  align-self: flex-start;
}

/* ── Related Articles ────────────────────────────────── */
.related-articles__title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 1.2rem;
}

.related-articles__grid {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.related-article-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  text-decoration: none;
  transition: var(--transition);
}

.related-article-card:hover {
  border-color: var(--color-primary);
  background: rgba(74, 134, 232, 0.05);
}

.related-article-card__title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-text);
  flex: 1;
  transition: color 0.2s ease;
}

.related-article-card:hover .related-article-card__title { color: var(--color-primary); }

.related-article-card__read-time {
  font-size: 1.3rem;
  color: var(--color-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  flex-shrink: 0;
}

/* ── Sidebar ──────────────────────────────────────────── */
.article-sidebar {
  position: sticky;
  top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 29rem;
}


/* ── Sidebar Card ────────────────────────────────────── */
.sidebar-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.6rem;
}

.sidebar-card__label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted);
  margin: 0 0 1.2rem;
}

.sidebar-card__label i { font-size: 1.2rem; color: var(--color-primary); }

/* ── Author Card ──────────────────────────────────────── */
.sidebar-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
}

.sidebar-author__avatar {
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid var(--color-primary);
  display: block;
}

.sidebar-author__info { flex: 1; }

.sidebar-author__name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 0.3rem;
}

.sidebar-author__role {
  font-size: 1.15rem;
  color: var(--color-muted);
  margin: 0;
  line-height: 1.4;
}

.sidebar-author__social {
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}

.sidebar-social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-primary);
  color: var(--color-muted);
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.sidebar-social-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.sidebar-social-btn--linkedin:hover {
  border-color: #0077b5;
  color: #0077b5;
}

.sidebar-social-btn i { font-size: 1.5rem; }

/* ── Stats Card ───────────────────────────────────────── */
.sidebar-stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}

.sidebar-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
}

.sidebar-stat i {
  font-size: 1.8rem;
  color: var(--color-primary);
}

.sidebar-stat__value {
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
}

.sidebar-stat__label {
  font-size: 1.05rem;
  color: var(--color-muted);
  line-height: 1.2;
}

/* ── Light Mode ──────────────────────────────────────── */
.theme-light .article-content :deep(pre) {
  background: #1c2333;
  border-color: rgba(63, 118, 210, 0.25);
}

.theme-light .article-content :deep(code:not(pre code)) {
  background: rgba(63, 118, 210, 0.08);
  color: var(--color-primary);
}

.theme-light .related-article-card,
.theme-light .sidebar-card {
  background: rgba(255, 255, 255, 0.9);
}

/* ── Responsive: collapse grid at 900px ─────────────── */
@media (max-width: 900px) {
  .article-layout__inner {
    grid-template-columns: 1fr;
  }

  .article-main {
    order: 1;
  }

  .article-sidebar {
    order: 2;
    position: static;
    width: 100%;
    max-height: none;
    overflow: visible;
    border-top: 1px solid var(--color-border);
    padding-top: 2.5rem;
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .sidebar-author { grid-column: 1 / -1; }
  .sidebar-stats  { grid-column: 1 / -1; }
}

/* ── Mobile ──────────────────────────────────────────── */
@media (max-width: 600px) {
  .article-header-inner,
  .article-layout__inner { padding: 0 1.5rem; }

  .article-sidebar {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .article-sidebar > * { grid-column: auto; }

  .breadcrumb-current { max-width: 160px; }

  .article-content :deep(pre) {
    padding: 1rem;
    font-size: 0.78rem;
  }

  .article-content :deep(table) { font-size: 1.3rem; }
}
</style>
