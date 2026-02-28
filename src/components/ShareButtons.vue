<template>
  <div :class="['share-section', { 'share-section--vertical': vertical }]">

    <div :class="['share-buttons', { 'share-buttons--vertical': vertical }]">

      <!-- LinkedIn — opens share dialog + auto-copies post text to clipboard -->
      <a
        :href="linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        :class="['share-btn', 'linkedin-btn', { 'linkedin-copied': linkedinCopied }]"
        @click="handleLinkedIn"
      >
        <i :class="linkedinCopied ? 'ri-check-line' : 'ri-linkedin-fill'"></i>
        <span>{{ linkedinCopied ? 'Texto copiado!' : 'LinkedIn' }}</span>
      </a>
      <p v-if="linkedinCopied" class="linkedin-hint">
        <i class="ri-information-line"></i>
        Cola o texto no LinkedIn para um post completo
      </p>

      <!-- Copy link -->
      <button
        @click="copyLink"
        :class="['share-btn', 'copy-btn', { copied: linkCopied }]"
        :disabled="isCopying"
        type="button"
      >
        <i :class="linkCopied ? 'ri-check-line' : 'ri-links-line'"></i>
        <span>{{ linkCopied ? 'Copiado!' : 'Copiar link' }}</span>
      </button>

    </div>

    <!-- Stats (only in non-vertical mode) -->
    <div v-if="showStats && !vertical" class="share-stats">
      <span class="share-stat">
        <i class="ri-share-forward-line"></i>
        {{ shareCount }} {{ shareCount === 1 ? 'partilha' : 'partilhas' }}
      </span>
    </div>

  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useCookieConsent } from '../composables/useCookieConsent'

export default {
  name: 'ShareButtons',
  props: {
    title:     { type: String, required: true },
    excerpt:   { type: String, default: '' },
    url:       { type: String, required: true },
    showStats: { type: Boolean, default: true },
    vertical:  { type: Boolean, default: false }
  },
  setup(props) {
    const { safeLocalStorage, COOKIE_CATEGORIES } = useCookieConsent()

    const linkCopied  = ref(false)
    const isCopying   = ref(false)
    const shareCount  = ref(0)

    const currentUrl = computed(() => props.url || window.location.href)
    const enc = (t) => encodeURIComponent(t)

    // LinkedIn: share-offsite is the current standard endpoint.
    // LinkedIn crawls the URL for OG tags — but since this is a SPA on GitHub Pages,
    // the bot may see generic tags. To compensate, clicking the button also copies
    // a ready-made post text so the user can paste it into the LinkedIn text box.
    const linkedinUrl = computed(() =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${enc(currentUrl.value)}`
    )

    const linkedinCopied = ref(false)

    const handleLinkedIn = async () => {
      trackShare('linkedin')
      const postText = [
        props.title,
        props.excerpt ? `\n${props.excerpt}` : '',
        `\n👉 ${currentUrl.value}`
      ].join('')
      try {
        await navigator.clipboard.writeText(postText)
        linkedinCopied.value = true
        setTimeout(() => { linkedinCopied.value = false }, 4000)
      } catch (_) { /* clipboard not available */ }
    }

    const copyLink = async () => {
      if (isCopying.value) return
      isCopying.value = true
      try {
        await navigator.clipboard.writeText(currentUrl.value)
        linkCopied.value = true
        setTimeout(() => { linkCopied.value = false }, 2200)
        trackShare('copy')
      } catch {
        // Fallback for older browsers
        const el = document.createElement('textarea')
        el.value = currentUrl.value
        el.style.cssText = 'position:fixed;opacity:0'
        document.body.appendChild(el)
        el.select()
        try {
          document.execCommand('copy')
          linkCopied.value = true
          trackShare('copy')
        } catch (_) { /* fallback failed */ }
        document.body.removeChild(el)
        setTimeout(() => { linkCopied.value = false }, 2200)
      } finally {
        isCopying.value = false
      }
    }

    const trackShare = (platform) => {
      const key = `share_stats_${currentUrl.value}`
      let stats = { shares: 0, platforms: {} }
      try {
        const stored = safeLocalStorage.getItem(key, COOKIE_CATEGORIES.ANALYTICS)
        if (stored) stats = JSON.parse(stored)
        stats.shares++
        stats.platforms[platform] = (stats.platforms[platform] || 0) + 1
        stats.lastShared = new Date().toISOString()
        safeLocalStorage.setItem(key, JSON.stringify(stats), COOKIE_CATEGORIES.ANALYTICS)
        shareCount.value = stats.shares
      } catch { /* ignore */ }
    }

    onMounted(() => {
      try {
        const shareKey = `share_stats_${currentUrl.value}`
        const stored = safeLocalStorage.getItem(shareKey, COOKIE_CATEGORIES.ANALYTICS)
        if (stored) shareCount.value = JSON.parse(stored).shares || 0
      } catch { /* ignore */ }
    })

    return {
      linkCopied, isCopying, shareCount, linkedinCopied,
      linkedinUrl,
      copyLink, trackShare, handleLinkedIn
    }
  }
}
</script>

<style scoped>
/* ── Base: horizontal layout (default) ───────────────── */
.share-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.share-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  color: #fff;
  font-family: inherit;
  white-space: nowrap;
}

.share-btn i { font-size: 1.5rem; }

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.share-btn:active  { transform: translateY(0); }
.share-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

/* Platform colours */
.linkedin-btn             { background: #0077b5; }
.linkedin-btn:hover       { background: #005f91; }
.linkedin-btn.linkedin-copied { background: #28a745; }

.linkedin-hint {
  font-size: 1.15rem;
  color: var(--color-muted);
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  padding: 0.7rem 0.9rem;
  background: rgba(40, 167, 69, 0.08);
  border: 1px solid rgba(40, 167, 69, 0.25);
  border-radius: 8px;
  line-height: 1.4;
  margin-top: -0.1rem;
}

.linkedin-hint i {
  color: #28a745;
  font-size: 1.3rem;
  flex-shrink: 0;
  margin-top: 0.05rem;
}

.copy-btn { background: var(--color-bg-secondary); color: var(--color-text); border: 1px solid var(--color-border); }
.copy-btn:hover { border-color: var(--color-primary); color: var(--color-primary); }
.copy-btn.copied { background: #28a745; color: #fff; border-color: #28a745; }

/* ── Stats ────────────────────────────────────────────── */
.share-stats {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.share-stat {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.2rem;
  color: var(--color-muted);
}

.share-stat i { color: var(--color-primary); font-size: 1.3rem; }

/* ── Vertical layout (sidebar) ────────────────────────── */
.share-buttons--vertical {
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 0.6rem;
}

.share-buttons--vertical .share-btn {
  justify-content: flex-start;
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  font-size: 1.3rem;
}

.share-buttons--vertical .share-btn i {
  font-size: 1.6rem;
  flex-shrink: 0;
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 480px) {
  .share-btn { padding: 0.55rem 0.9rem; font-size: 1.2rem; }
}
</style>
