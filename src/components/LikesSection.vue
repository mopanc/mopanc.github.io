<template>
  <div class="likes-section">
    <button @click="toggleLike" :class="['like-btn', { liked: isLiked }]" :disabled="isLoading">
      <i :class="isLiked ? 'ri-heart-fill' : 'ri-heart-line'"></i>
      <span class="like-count">{{ formattedCount }}</span>
      <span class="like-label">{{ isLiked ? 'Gostei' : 'Gostar' }}</span>
    </button>

    <transition name="heart-burst">
      <div v-if="showHeartAnimation" class="heart-burst" aria-hidden="true">
        <i class="ri-heart-fill"></i>
      </div>
    </transition>

    <span v-if="isPopular" class="popular-badge">
      <i class="ri-fire-fill"></i>
      Popular
    </span>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useCookieConsent } from '../composables/useCookieConsent'
import { useArticles } from '../composables/useArticles'

export default {
  name: 'LikesSection',
  props: {
    articleId:    { type: [String, Number], required: true },
    articleSlug:  { type: String, required: true },
    initialLikes: { type: Number, default: 0 }
  },
  setup(props) {
    const { safeLocalStorage, COOKIE_CATEGORIES } = useCookieConsent()
    const { incrementLikes, decrementLikes } = useArticles()

    const likes = ref(props.initialLikes)
    const isLiked = ref(false)
    const isLoading = ref(false)
    const showHeartAnimation = ref(false)

    const getFingerprint = () => {
      let fp = safeLocalStorage.getItem('user_fingerprint', COOKIE_CATEGORIES.FUNCTIONAL)
      if (!fp) {
        const c = document.createElement('canvas')
        const ctx = c.getContext('2d')
        ctx.fillText('fp', 2, 2)
        fp = btoa([navigator.userAgent, navigator.language, screen.width + 'x' + screen.height, c.toDataURL()].join('|')).slice(0, 16)
        safeLocalStorage.setItem('user_fingerprint', fp, COOKIE_CATEGORIES.FUNCTIONAL)
      }
      return fp
    }

    const loadData = () => {
      const fp = getFingerprint()
      const userLikes = safeLocalStorage.getItem(`user_likes_${fp}`, COOKIE_CATEGORIES.FUNCTIONAL)
      if (userLikes) isLiked.value = JSON.parse(userLikes).includes(props.articleId)
    }

    const saveLocalState = () => {
      const fp = getFingerprint()
      let userLikes = []
      const stored = safeLocalStorage.getItem(`user_likes_${fp}`, COOKIE_CATEGORIES.FUNCTIONAL)
      if (stored) userLikes = JSON.parse(stored)
      if (isLiked.value) {
        if (!userLikes.includes(props.articleId)) userLikes.push(props.articleId)
      } else {
        userLikes = userLikes.filter(id => id !== props.articleId)
      }
      safeLocalStorage.setItem(`user_likes_${fp}`, JSON.stringify(userLikes), COOKIE_CATEGORIES.FUNCTIONAL)
    }

    const toggleLike = async () => {
      if (isLoading.value) return
      isLoading.value = true
      try {
        if (isLiked.value) {
          likes.value--
          isLiked.value = false
          await decrementLikes(props.articleSlug)
        } else {
          likes.value++
          isLiked.value = true
          showHeartAnimation.value = true
          setTimeout(() => { showHeartAnimation.value = false }, 900)
          await incrementLikes(props.articleSlug)
        }
        saveLocalState()
      } catch (e) {
        console.warn('toggleLike error', e)
      } finally {
        isLoading.value = false
      }
    }

    const formattedCount = computed(() => {
      if (likes.value >= 1000000) return (likes.value / 1000000).toFixed(1) + 'M'
      if (likes.value >= 1000) return (likes.value / 1000).toFixed(1) + 'K'
      return likes.value.toString()
    })

    const isPopular = computed(() => likes.value >= 50)

    watch(() => props.initialLikes, (v) => { if (v !== likes.value) likes.value = v })

    onMounted(loadData)

    return { likes, isLiked, isLoading, showHeartAnimation, formattedCount, isPopular, toggleLike }
  }
}
</script>

<style scoped>
.likes-section {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
}

/* ── Like Button ──────────────────────────────────────── */
.like-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border: 1.5px solid var(--color-border);
  background: var(--color-bg-secondary);
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  transition: all 0.25s ease;
  font-family: inherit;
  position: relative;
  overflow: hidden;
}

.like-btn i {
  font-size: 1.1rem;
  transition: transform 0.25s ease;
  color: var(--color-muted);
}

.like-btn:hover:not(:disabled) {
  border-color: #ff4d6d;
  color: #ff4d6d;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(255, 77, 109, 0.2);
}

.like-btn:hover:not(:disabled) i {
  transform: scale(1.2);
  color: #ff4d6d;
}

.like-btn.liked {
  background: linear-gradient(135deg, #ff4d6d, #ff758c);
  border-color: #ff4d6d;
  color: #fff;
  box-shadow: 0 4px 16px rgba(255, 77, 109, 0.3);
  animation: likePop 0.5s ease;
}

.like-btn.liked i {
  color: #fff;
  animation: heartBeat 0.5s ease;
}

.like-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.like-count {
  font-weight: 700;
  min-width: 16px;
  text-align: center;
}

.like-label { font-size: 0.875rem; }

/* ── Popular Badge ────────────────────────────────────── */
.popular-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.8rem;
  background: linear-gradient(135deg, #ff6b35, #f7c59f);
  color: #fff;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  animation: pulse 2.5s ease infinite;
}

/* ── Heart Burst ──────────────────────────────────────── */
.heart-burst {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 10;
}

.heart-burst i {
  font-size: 2.5rem;
  color: #ff4d6d;
  animation: burstOut 0.9s ease forwards;
}

/* ── Keyframes ────────────────────────────────────────── */
@keyframes likePop {
  0% { transform: scale(1); }
  40% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  30% { transform: scale(1.35); }
  60% { transform: scale(1.1); }
}

@keyframes burstOut {
  0%   { transform: translateY(-50%) scale(0); opacity: 1; }
  50%  { transform: translateY(-120%) scale(1.4); opacity: 0.8; }
  100% { transform: translateY(-200%) scale(1.8); opacity: 0; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}

/* ── Transition ───────────────────────────────────────── */
.heart-burst-enter-active { animation: burstOut 0.9s ease; }
.heart-burst-leave-active  { opacity: 0; }

/* ── Light Mode ───────────────────────────────────────── */
.theme-light .like-btn {
  background: #fff;
  border-color: #dee2e6;
  color: #444;
}

/* Override: ensure liked state always wins over light-mode base */
.theme-light .like-btn.liked {
  background: linear-gradient(135deg, #ff4d6d, #ff758c);
  border-color: #ff4d6d;
  color: #fff;
}

.theme-light .like-btn.liked i {
  color: #fff;
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 480px) {
  .like-btn { padding: 0.5rem 0.9rem; font-size: 0.8rem; }
  .like-label { display: none; }
}
</style>
