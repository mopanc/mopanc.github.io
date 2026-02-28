<template>
  <section class="comments-section">

    <!-- Header -->
    <div class="comments-header">
      <div class="comments-header__left">
        <h3 class="comments-title">
          <i class="ri-message-3-line"></i>
          Comentários
          <span v-if="comments.length > 0" class="comments-count">{{ comments.length }}</span>
        </h3>
        <p class="comments-subtitle">Partilha a tua opinião sobre este artigo.</p>
      </div>
    </div>

    <!-- Comments List (first) -->
    <div v-if="comments.length > 0" class="comments-list">
      <transition-group name="comment-fade" tag="div" class="comments-list__inner">
        <div v-for="comment in sortedComments" :key="comment.id" class="comment-card">

          <div class="comment-card__header">
            <div :class="['comment-avatar', `comment-avatar--${getAvatarColor(comment.name)}`]">
              {{ getInitials(comment.name) }}
            </div>
            <div class="comment-meta">
              <span class="comment-author">{{ comment.name }}</span>
              <time class="comment-date">{{ formatDate(comment.date) }}</time>
            </div>
            <button @click="reportComment" class="comment-report" title="Denunciar">
              <i class="ri-flag-line"></i>
            </button>
          </div>

          <p class="comment-text">{{ comment.content }}</p>

          <div class="comment-actions">
            <button
              @click="likeComment(comment.id)"
              :class="['comment-action-btn', { 'is-liked': likedComments.includes(comment.id) }]"
            >
              <i :class="likedComments.includes(comment.id) ? 'ri-thumb-up-fill' : 'ri-thumb-up-line'"></i>
              {{ comment.likes || 0 }}
            </button>
            <button @click="replyToComment(comment)" class="comment-action-btn">
              <i class="ri-reply-line"></i>
              Responder
            </button>
          </div>

          <!-- Replies -->
          <div v-if="comment.replies && comment.replies.length > 0" class="replies-list">
            <div v-for="reply in comment.replies" :key="reply.id" class="reply-card">
              <div class="comment-card__header">
                <div :class="['comment-avatar', 'comment-avatar--sm', `comment-avatar--${getAvatarColor(reply.name)}`]">
                  {{ getInitials(reply.name) }}
                </div>
                <div class="comment-meta">
                  <span class="comment-author">{{ reply.name }}</span>
                  <time class="comment-date">{{ formatDate(reply.date) }}</time>
                </div>
              </div>
              <p class="comment-text">{{ reply.content }}</p>
            </div>
          </div>

          <!-- Inline Reply Form -->
          <div v-if="replyingTo === comment.id" class="reply-form-container">
            <form @submit.prevent="submitReply(comment.id)" class="comment-form">
              <div class="form-row">
                <div class="form-group">
                  <input v-model="replyForm.name" type="text" required :placeholder="`Nome *`" />
                </div>
                <div class="form-group">
                  <input
                    v-model="replyForm.email"
                    type="email"
                    required
                    placeholder="Email *"
                    :class="{ 'is-invalid': replyEmailError }"
                    @input="replyEmailError = ''"
                  />
                  <span v-if="replyEmailError" class="form-error">
                    <i class="ri-error-warning-line"></i>
                    {{ replyEmailError }}
                  </span>
                </div>
              </div>
              <div class="form-group">
                <textarea v-model="replyForm.content" rows="3" required :placeholder="`Responder a ${comment.name}...`"></textarea>
              </div>
              <div class="form-footer">
                <button type="button" @click="cancelReply" class="btn btn--ghost btn--sm">
                  <i class="ri-close-line"></i>
                  Cancelar
                </button>
                <button type="submit" class="btn btn--primary btn--sm" :disabled="isSubmitting">
                  <i v-if="isSubmitting" class="ri-loader-4-line spin"></i>
                  <i v-else class="ri-reply-line"></i>
                  Responder
                </button>
              </div>
            </form>
          </div>

        </div>
      </transition-group>
    </div>

    <!-- Empty State -->
    <div v-else class="comments-empty">
      <i class="ri-chat-smile-3-line comments-empty__icon"></i>
      <div>
        <p class="comments-empty__title">Ainda sem comentários</p>
        <p class="comments-empty__sub">Sê o primeiro a partilhar a tua opinião.</p>
      </div>
    </div>

    <!-- Comment Form (at the bottom) -->
    <div class="comment-form-card">
      <p class="form-section-title">
        <i class="ri-edit-line"></i>
        Deixa o teu comentário
      </p>
      <form @submit.prevent="submitComment" class="comment-form">
        <div class="form-row">
          <div class="form-group">
            <label for="c-name">Nome</label>
            <input id="c-name" v-model="commentForm.name" type="text" required placeholder="O teu nome" />
          </div>
          <div class="form-group">
            <label for="c-email">Email <span class="label-hint">(não publicado)</span></label>
            <input
              id="c-email"
              v-model="commentForm.email"
              type="email"
              required
              placeholder="teu@gmail.com"
              :class="{ 'is-invalid': emailError }"
              @input="emailError = ''"
            />
            <span v-if="emailError" class="form-error">
              <i class="ri-error-warning-line"></i>
              {{ emailError }}
            </span>
          </div>
        </div>
        <div class="form-group">
          <label for="c-content">Comentário</label>
          <textarea
            id="c-content"
            v-model="commentForm.content"
            rows="4"
            required
            placeholder="Partilha a tua opinião..."
          ></textarea>
        </div>
        <div class="form-footer">
          <button type="submit" class="btn btn--primary" :disabled="isSubmitting">
            <i v-if="isSubmitting" class="ri-loader-4-line spin"></i>
            <i v-else class="ri-send-plane-2-line"></i>
            {{ isSubmitting ? 'A publicar...' : 'Publicar comentário' }}
          </button>
        </div>
      </form>
    </div>

  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useCookieConsent } from '../composables/useCookieConsent'

export default {
  name: 'CommentsSection',
  props: {
    articleId: { type: [String, Number], required: true },
    articleSlug: { type: String, required: true }
  },
  setup(props) {
    const { safeLocalStorage, COOKIE_CATEGORIES } = useCookieConsent()

    const comments      = ref([])
    const isSubmitting  = ref(false)
    const replyingTo    = ref(null)
    const likedComments = ref([])
    const emailError    = ref('')
    const replyEmailError = ref('')

    const commentForm = ref({ name: '', email: '', content: '' })
    const replyForm   = ref({ name: '', email: '', content: '' })

    // Known disposable / temp-mail domains — extended list
    const DISPOSABLE_DOMAINS = new Set([
      'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org',
      'guerrillamail.biz', 'guerrillamail.de', 'guerrillamailblock.com',
      'trashmail.com', 'trashmail.me', 'trashmail.net', 'trashmail.at',
      'trashmail.io', 'trashmail.xyz', 'trashmail.org',
      'tempmail.com', 'temp-mail.org', 'temp-mail.io', 'tempmail.net',
      'throwam.com', 'throwam.net', 'throwaway.email',
      'dispostable.com', 'mailnull.com', 'spamgourmet.com',
      'yopmail.com', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf',
      'spam4.me', 'spoofmail.de', 'maildrop.cc', 'sharklasers.com',
      'guerrillamail.info', 'grr.la', 'guerrillamailblock.com',
      'spam.la', 'spaml.com', 'spaml.de', 'mailnew.com',
      'fakeinbox.com', 'mailnesia.com', 'mailnull.com',
      'discard.email', 'spamfree24.org', 'spamfree24.de',
      'spamgap.com', 'spamoff.de', 'trbvm.com', 'kurzepost.de',
      'objectmail.com', 'rejectmail.com', 'jetable.net', 'jetable.org',
      'mailzilla.org', 'filzmail.com', 'der-kombi.de',
      'emlhub.com', 'emltmp.com', 'tpwlj.com',
      '10minutemail.com', '10minutemail.net', '10minutemail.org', '10minemail.com',
      '20minutemail.com', 'mintemail.com', 'mintinbox.com',
      'binkmail.com', 'boximail.com', 'clrmail.com', 'dcctb.com',
      'discard.email', 'discardmail.com', 'discardmail.de',
      'einrot.com', 'emailondeck.com', 'emkei.cz',
      'fakemailgenerator.com', 'fakemail.fr', 'fakemail.net', 'fakemail.com',
      'getnada.com', 'getonemail.com', 'ghosttexter.de',
      'givmail.com', 'gowikibooks.com', 'gowikicampus.com',
      'incognitomail.com', 'incognitomail.net', 'incognitomail.org',
      'inoutmail.eu', 'inoutmail.net',
      'kasmail.com', 'koszmail.pl',
      'lackmail.ru', 'lakemail.com',
      'mt2009.com', 'mt2014.com',
      'nwldx.com', 'objectmail.com',
      'pjjkp.com', 'plexolan.de',
      'qq.com' /* often used disposably */,
      'rcpt.at', 'rmqkr.net',
      's0ny.net', 'safe-mail.net', 'sandelf.de',
      'sharklasers.com', 'shiftmail.com', 'shortmail.net', 'sibmail.com',
      'sofort-mail.de', 'sogetthis.com', 'soisz.com',
      'tafmail.com', 'teewars.org', 'teleworm.com', 'teleworm.us',
      'tempalias.com', 'tempe-mail.com', 'tempemail.biz', 'tempemail.com',
      'tempemail.net', 'tempinbox.co.uk', 'tempinbox.com',
      'temporary-mail.net', 'temporaryemail.net', 'temporaryemail.us',
      'temporaryforwarding.com', 'temporaryinbox.com',
      'thanksnospam.com', 'tittbit.in',
      'uroid.com', 'veryrealemail.com',
      'we.lovebitco.in', 'weg-werf-email.de', 'wetrainbayarea.org',
      'wh4f.org', 'whyspam.me', 'willhackforfood.biz',
      'willselfdestruct.com', 'wilemail.com',
      'xagloo.com', 'xoxy.net', 'xtenz.com',
      'yapped.net', 'yeah.net', 'yep.it', 'yogamaven.com',
      'zippymail.info', 'zoaxe.com', 'zoemail.net', 'zoemail.org',
    ])

    // Basic email validation — format check + disposable domain block
    const validateEmail = (email) => {
      const trimmed = email.trim()
      if (!trimmed) return 'Email é obrigatório'
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
      if (!re.test(trimmed)) return 'Formato inválido — ex: nome@gmail.com'
      const domain = trimmed.split('@')[1].toLowerCase()
      if (DISPOSABLE_DOMAINS.has(domain)) {
        return 'Emails temporários não são permitidos. Usa um email real (Gmail, Outlook, iCloud, etc.)'
      }
      return ''
    }

    const loadComments = () => {
      const stored = safeLocalStorage.getItem(`comments_${props.articleId}`, COOKIE_CATEGORIES.FUNCTIONAL)
      if (stored) comments.value = JSON.parse(stored)
      const likedStored = localStorage.getItem(`liked_comments_${props.articleId}`)
      if (likedStored) likedComments.value = JSON.parse(likedStored)
    }

    const saveComments = () => {
      safeLocalStorage.setItem(`comments_${props.articleId}`, JSON.stringify(comments.value), COOKIE_CATEGORIES.FUNCTIONAL)
    }

    const sortedComments = computed(() =>
      [...comments.value].sort((a, b) => new Date(b.date) - new Date(a.date))
    )

    const getInitials = (name) =>
      name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

    // Simple hash → one of 6 colour variants for visual variety
    const AVATAR_COLORS = ['blue', 'purple', 'green', 'orange', 'pink', 'teal']
    const getAvatarColor = (name) => {
      const hash = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
      return AVATAR_COLORS[hash % AVATAR_COLORS.length]
    }

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      const now  = new Date()
      const diffMs    = now - date
      const diffMins  = Math.floor(diffMs / 60000)
      const diffHours = Math.floor(diffMs / 3600000)
      const diffDays  = Math.floor(diffMs / 86400000)

      if (diffMins  <  1) return 'Agora mesmo'
      if (diffMins  < 60) return `Há ${diffMins} min`
      if (diffHours < 24) return `Há ${diffHours}h`
      if (diffDays  ===1) return 'Ontem'
      if (diffDays  <  7) return `Há ${diffDays} dias`
      return date.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
    }

    const submitComment = async () => {
      emailError.value = validateEmail(commentForm.value.email)
      if (emailError.value) return
      if (isSubmitting.value) return
      isSubmitting.value = true
      try {
        await new Promise(r => setTimeout(r, 400))
        comments.value.push({
          id: Date.now(),
          name:    commentForm.value.name.trim(),
          email:   commentForm.value.email.trim(),
          content: commentForm.value.content.trim(),
          date:    new Date().toISOString(),
          likes:   0,
          replies: []
        })
        saveComments()
        commentForm.value = { name: '', email: '', content: '' }
      } finally {
        isSubmitting.value = false
      }
    }

    const submitReply = async (parentId) => {
      replyEmailError.value = validateEmail(replyForm.value.email)
      if (replyEmailError.value) return
      if (isSubmitting.value) return
      isSubmitting.value = true
      try {
        await new Promise(r => setTimeout(r, 400))
        const parent = comments.value.find(c => c.id === parentId)
        if (parent) {
          if (!parent.replies) parent.replies = []
          parent.replies.push({
            id:      Date.now(),
            name:    replyForm.value.name.trim(),
            email:   replyForm.value.email.trim(),
            content: replyForm.value.content.trim(),
            date:    new Date().toISOString()
          })
          saveComments()
        }
        replyForm.value  = { name: '', email: '', content: '' }
        replyingTo.value = null
      } finally {
        isSubmitting.value = false
      }
    }

    const likeComment = (commentId) => {
      const comment = comments.value.find(c => c.id === commentId)
      if (!comment) return
      if (likedComments.value.includes(commentId)) {
        comment.likes = Math.max(0, (comment.likes || 0) - 1)
        likedComments.value = likedComments.value.filter(id => id !== commentId)
      } else {
        comment.likes = (comment.likes || 0) + 1
        likedComments.value.push(commentId)
      }
      saveComments()
      localStorage.setItem(`liked_comments_${props.articleId}`, JSON.stringify(likedComments.value))
    }

    const replyToComment = (comment) => {
      replyingTo.value = comment.id
      replyForm.value.name  = commentForm.value.name
      replyForm.value.email = commentForm.value.email
    }

    const cancelReply = () => {
      replyingTo.value = null
      replyForm.value  = { name: '', email: '', content: '' }
    }

    const reportComment = () => {
      if (confirm('Denunciar este comentário?')) {
        alert('Comentário denunciado. Obrigado pela ajuda na moderação.')
      }
    }

    onMounted(loadComments)

    return {
      comments, isSubmitting, replyingTo, likedComments,
      emailError, replyEmailError,
      commentForm, replyForm, sortedComments,
      getInitials, getAvatarColor, formatDate,
      submitComment, submitReply, likeComment,
      replyToComment, cancelReply, reportComment
    }
  }
}
</script>

<style scoped>
/* ── Section ──────────────────────────────────────────── */
.comments-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: left;
}

/* ── Header ───────────────────────────────────────────── */
.comments-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.comments-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: 'Space Grotesk', sans-serif;
}

.comments-title i {
  font-size: 2rem;
  color: var(--color-primary);
}

.comments-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.2rem;
  height: 2.2rem;
  padding: 0 0.6rem;
  background: var(--color-primary);
  color: #fff;
  border-radius: 999px;
  font-size: 1.15rem;
  font-weight: 700;
}

.comments-subtitle {
  font-size: 1.45rem;
  color: var(--color-muted);
  margin: 0;
}

/* ── Comments List ────────────────────────────────────── */
.comments-list__inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ── Comment Card ─────────────────────────────────────── */
.comment-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.2s ease;
}

.comment-card:hover {
  border-color: rgba(74, 134, 232, 0.35);
}

.comment-card__header {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}

/* ── Avatar ───────────────────────────────────────────── */
.comment-avatar {
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.4rem;
  flex-shrink: 0;
  color: #fff;
}

.comment-avatar--sm {
  width: 3.2rem;
  height: 3.2rem;
  font-size: 1.15rem;
}

/* Avatar colour variants */
.comment-avatar--blue   { background: linear-gradient(135deg, #4a86e8, #4facfe); }
.comment-avatar--purple { background: linear-gradient(135deg, #7c3aed, #a78bfa); }
.comment-avatar--green  { background: linear-gradient(135deg, #059669, #34d399); }
.comment-avatar--orange { background: linear-gradient(135deg, #d97706, #fbbf24); }
.comment-avatar--pink   { background: linear-gradient(135deg, #db2777, #f472b6); }
.comment-avatar--teal   { background: linear-gradient(135deg, #0891b2, #22d3ee); }

/* ── Comment Meta ─────────────────────────────────────── */
.comment-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.comment-author {
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-white);
  line-height: 1.2;
}

.comment-date {
  font-size: 1.2rem;
  color: var(--color-muted);
}

.comment-report {
  background: none;
  border: none;
  color: var(--color-muted);
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 6px;
  font-size: 1.3rem;
  opacity: 0;
  transition: opacity 0.2s, color 0.2s, background 0.2s;
  flex-shrink: 0;
}

.comment-card:hover .comment-report { opacity: 1; }
.comment-report:hover {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.1);
}

/* ── Comment Text ─────────────────────────────────────── */
.comment-text {
  font-size: 1.55rem;
  line-height: 1.75;
  color: var(--color-text);
  margin: 0 0 1.4rem;
  white-space: pre-wrap;
  word-break: break-word;
}

/* ── Actions ──────────────────────────────────────────── */
.comment-actions {
  display: flex;
  gap: 0.7rem;
}

.comment-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.1rem;
  border: 1px solid var(--color-border);
  background: transparent;
  border-radius: 999px;
  font-size: 1.25rem;
  color: var(--color-muted);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  font-weight: 500;
}

.comment-action-btn i { font-size: 1.4rem; }

.comment-action-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(74, 134, 232, 0.06);
}

.comment-action-btn.is-liked {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(74, 134, 232, 0.1);
}

/* ── Replies ──────────────────────────────────────────── */
.replies-list {
  margin-top: 1.6rem;
  padding-left: 1.6rem;
  border-left: 2px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.reply-card {
  background: var(--color-bg-primary);
  border-radius: 12px;
  padding: 1.4rem 1.6rem;
}

.reply-card .comment-text { margin-bottom: 0; }
.reply-card .comment-card__header { margin-bottom: 0.8rem; }

/* ── Reply Form ───────────────────────────────────────── */
.reply-form-container {
  margin-top: 1.6rem;
  padding: 1.6rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

/* ── Form Card ────────────────────────────────────────── */
.comment-form-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.4rem;
}

.form-section-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.form-section-title i {
  color: var(--color-primary);
  font-size: 1.7rem;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.form-group label {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text);
}

.label-hint {
  font-weight: 400;
  font-size: 1.15rem;
  color: var(--color-muted);
}

.form-group input,
.form-group textarea {
  padding: 1rem 1.2rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  font-size: 1.45rem;
  color: var(--color-text);
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;
  resize: vertical;
  line-height: 1.5;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(74, 134, 232, 0.12);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-muted);
  opacity: 0.6;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 0.4rem;
}

/* ── Empty State ──────────────────────────────────────── */
.comments-empty {
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 2rem 2.2rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-primary);
  border-radius: 12px;
}

.comments-empty__icon {
  font-size: 2.2rem;
  color: var(--color-primary);
  opacity: 0.75;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.comments-empty__title {
  font-size: 1.55rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.3rem;
}

.comments-empty__sub {
  font-size: 1.35rem;
  color: var(--color-muted);
  margin: 0;
}

/* ── Form error ───────────────────────────────────────── */
.form-error {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 1.2rem;
  color: #dc3545;
  font-weight: 500;
}

.form-error i { font-size: 1.3rem; }

.form-group input.is-invalid {
  border-color: #dc3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.form-group input.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.15);
}

/* ── Ghost button (cancel reply) ─────────────────────── */
.btn--ghost {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
}

.btn--ghost:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* ── Spinner ──────────────────────────────────────────── */
.spin { animation: spin 0.8s linear infinite; }

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ── Transitions ──────────────────────────────────────── */
.comment-fade-enter-active,
.comment-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.comment-fade-enter-from,
.comment-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* ── Light Mode ───────────────────────────────────────── */
.theme-light .comment-form-card,
.theme-light .comment-card {
  background: #fff;
}

.theme-light .reply-card,
.theme-light .reply-form-container {
  background: #f8fafc;
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 600px) {
  .form-row             { grid-template-columns: 1fr; }
  .comment-form-card    { padding: 1.8rem; }
  .comment-card         { padding: 1.6rem; }
  .comments-section     { gap: 2rem; }
}
</style>
