<template>
  <div class="blog-admin">
    <SEOHead
      title="Blog Admin | Jorge Morais"
      description="Painel administrativo do blog"
      robots="noindex, nofollow"
    />
    <ToastNotification ref="toast" />

    <!-- Admin Header -->
    <header class="admin-header">
      <div class="container-wide">
        <div class="admin-header__content">
          <div class="admin-header__left">
            <div class="admin-logo">
              <i class="ri-quill-pen-line"></i>
            </div>
            <div>
              <h1 class="admin-header__title">Blog Admin</h1>
              <p class="admin-header__subtitle">Gestão de conteúdo</p>
            </div>
          </div>
          <div class="admin-header__right">
            <div class="admin-info">
              <span class="admin-badge">
                <i class="ri-shield-check-line"></i>
                ADMIN
              </span>
              <span class="time-remaining">
                <i class="ri-time-line"></i>
                {{ formatTimeRemaining(timeRemaining) }}
              </span>
            </div>
            <button @click="logout" class="btn btn--secondary btn--sm">
              <i class="ri-logout-box-r-line"></i>
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="container-wide admin-wrapper">
      <!-- Sidebar -->
      <aside class="admin-sidebar">
        <nav class="admin-nav">
          <button
            v-for="section in sections"
            :key="section.id"
            :class="['admin-nav-btn', { active: activeSection === section.id }]"
            @click="switchSection(section.id)"
          >
            <i :class="section.icon"></i>
            <span>{{ section.name }}</span>
            <span v-if="section.badge" class="nav-badge">{{ section.badge }}</span>
          </button>
        </nav>

        <!-- Quick Stats in Sidebar -->
        <div class="sidebar-stats">
          <div class="sidebar-stat">
            <span class="sidebar-stat__value">{{ publishedCount }}</span>
            <span class="sidebar-stat__label">Publicados</span>
          </div>
          <div class="sidebar-stat">
            <span class="sidebar-stat__value">{{ draftCount }}</span>
            <span class="sidebar-stat__label">Rascunhos</span>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="admin-main">

        <!-- ── ARTICLES SECTION ─────────────────────── -->
        <section v-if="activeSection === 'articles'" class="admin-section">
          <div class="section-header">
            <div>
              <h2>Artigos</h2>
              <p class="section-subtitle">{{ filteredArticles.length }} de {{ articles.length }} artigos</p>
            </div>
            <div class="section-header__actions">
              <button @click="openNewArticleModal" class="btn btn--primary">
                <i class="ri-add-line"></i>
                Novo Artigo
              </button>
            </div>
          </div>

          <!-- Controls -->
          <div class="admin-controls">
            <div class="search-box">
              <i class="ri-search-line"></i>
              <input v-model="searchQuery" type="text" placeholder="Pesquisar artigos..." />
              <button v-if="searchQuery" @click="searchQuery = ''" class="search-clear">
                <i class="ri-close-line"></i>
              </button>
            </div>
            <select v-model="statusFilter" class="filter-select">
              <option value="">Todos</option>
              <option value="published">Publicados</option>
              <option value="draft">Rascunhos</option>
            </select>
          </div>

          <!-- Articles Table -->
          <div class="table-container">
            <table class="articles-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Métricas</th>
                  <th class="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="filteredArticles.length === 0">
                  <td colspan="5" class="empty-cell">
                    <i class="ri-file-search-line"></i>
                    <p>Nenhum artigo encontrado.</p>
                  </td>
                </tr>
                <tr v-for="article in filteredArticles" :key="article.id" class="article-row">
                  <td>
                    <div class="article-title-cell">
                      <span class="article-title">{{ article.titlePt || article.title }}</span>
                      <span class="article-slug">
                        <i class="ri-link"></i>
                        /{{ article.slug }}
                      </span>
                    </div>
                  </td>
                  <td>
                    <StatusToggle :status="article.status" @toggle="handleStatusToggle(article)" />
                  </td>
                  <td class="date-cell">{{ formatDate(article.date) }}</td>
                  <td>
                    <div class="article-metrics">
                      <span class="metric"><i class="ri-eye-line"></i>{{ article.views || 0 }}</span>
                      <span class="metric"><i class="ri-heart-line"></i>{{ article.likes || 0 }}</span>
                      <span class="metric"><i class="ri-message-3-line"></i>{{ getCommentCount(article.id) }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="article-actions">
                      <a :href="`/blog/${article.slug}`" target="_blank" class="btn-icon" title="Ver artigo">
                        <i class="ri-external-link-line"></i>
                      </a>
                      <button @click="editArticle(article)" class="btn-icon" title="Editar">
                        <i class="ri-edit-line"></i>
                      </button>
                      <button @click="duplicateArticle(article)" class="btn-icon" title="Duplicar">
                        <i class="ri-file-copy-line"></i>
                      </button>
                      <button @click="deleteArticle(article.id)" class="btn-icon btn-icon--danger" title="Apagar">
                        <i class="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- ── STATS SECTION ───────────────────────── -->
        <section v-if="activeSection === 'stats'" class="admin-section">
          <div class="section-header">
            <div>
              <h2>Estatísticas</h2>
              <p class="section-subtitle">Visão geral do blog</p>
            </div>
          </div>

          <!-- Metric Cards -->
          <div class="stats-grid">
            <div class="stat-card stat-card--articles">
              <div class="stat-card__icon"><i class="ri-article-line"></i></div>
              <div class="stat-card__body">
                <div class="stat-card__value">{{ totalArticles }}</div>
                <div class="stat-card__label">Artigos</div>
              </div>
              <div class="stat-card__sub">{{ publishedCount }} publicados · {{ draftCount }} rascunhos</div>
            </div>
            <div class="stat-card stat-card--views">
              <div class="stat-card__icon"><i class="ri-eye-line"></i></div>
              <div class="stat-card__body">
                <div class="stat-card__value">{{ totalViews }}</div>
                <div class="stat-card__label">Visualizações</div>
              </div>
              <div class="stat-card__sub">Total acumulado</div>
            </div>
            <div class="stat-card stat-card--likes">
              <div class="stat-card__icon"><i class="ri-heart-line"></i></div>
              <div class="stat-card__body">
                <div class="stat-card__value">{{ totalLikes }}</div>
                <div class="stat-card__label">Gostos</div>
              </div>
              <div class="stat-card__sub">Total nos artigos</div>
            </div>
            <div class="stat-card stat-card--comments">
              <div class="stat-card__icon"><i class="ri-message-3-line"></i></div>
              <div class="stat-card__body">
                <div class="stat-card__value">{{ allComments.length }}</div>
                <div class="stat-card__label">Comentários</div>
              </div>
              <div class="stat-card__sub">Em todos os artigos</div>
            </div>
          </div>

          <!-- Publication Breakdown -->
          <div class="stats-section-block">
            <h3 class="stats-block-title">Estado de Publicação</h3>
            <div class="pub-bar-container">
              <div class="pub-bar">
                <div
                  class="pub-bar__fill pub-bar__fill--published"
                  :style="{ width: totalArticles > 0 ? (publishedCount / totalArticles * 100) + '%' : '0%' }"
                ></div>
              </div>
              <div class="pub-bar-labels">
                <span class="pub-label pub-label--published">
                  <span class="pub-dot"></span>
                  {{ publishedCount }} Publicados
                  ({{ totalArticles > 0 ? Math.round(publishedCount / totalArticles * 100) : 0 }}%)
                </span>
                <span class="pub-label pub-label--draft">
                  <span class="pub-dot pub-dot--draft"></span>
                  {{ draftCount }} Rascunhos
                </span>
              </div>
            </div>
          </div>

          <!-- Popular Articles -->
          <div v-if="popularArticles.length > 0" class="stats-section-block">
            <h3 class="stats-block-title">Artigos Mais Populares</h3>
            <div class="popular-list">
              <div
                v-for="article in popularArticles"
                :key="article.id"
                class="popular-item"
              >
                <span class="popular-rank">#{{ article.rank }}</span>
                <div class="popular-info">
                  <span class="popular-title">{{ article.titlePt || article.title }}</span>
                  <div class="popular-metrics">
                    <span><i class="ri-eye-line"></i> {{ article.views || 0 }} views</span>
                    <span><i class="ri-heart-line"></i> {{ article.likes || 0 }} gostos</span>
                    <span><i class="ri-message-3-line"></i> {{ getCommentCount(article.id) }} comentários</span>
                  </div>
                </div>
                <span :class="['popular-status', article.status === 'published' ? 'popular-status--pub' : 'popular-status--draft']">
                  {{ article.status === 'published' ? 'Publicado' : 'Rascunho' }}
                </span>
              </div>
            </div>
          </div>

          <!-- Tags Cloud -->
          <div v-if="allTagStats.length > 0" class="stats-section-block">
            <h3 class="stats-block-title">Tags Mais Usadas</h3>
            <div class="tags-cloud">
              <span
                v-for="tag in allTagStats.slice(0, 20)"
                :key="tag.name"
                class="tag-bubble"
                :style="{ fontSize: (0.7 + tag.count * 0.06) + 'rem' }"
              >
                {{ tag.name }}
                <span class="tag-bubble__count">{{ tag.count }}</span>
              </span>
            </div>
          </div>
        </section>

        <!-- ── COMMENTS SECTION ────────────────────── -->
        <section v-if="activeSection === 'comments'" class="admin-section">
          <div class="section-header">
            <div>
              <h2>Comentários</h2>
              <p class="section-subtitle">{{ allComments.length }} comentários no total</p>
            </div>
            <button @click="loadAllComments" class="btn btn--secondary btn--sm">
              <i class="ri-refresh-line"></i>
              Atualizar
            </button>
          </div>

          <!-- Comments Table -->
          <div v-if="allComments.length > 0" class="comments-admin-list">
            <div v-for="comment in allComments" :key="comment.id" class="comment-admin-card">
              <div class="comment-admin-header">
                <div class="comment-admin-avatar">{{ getInitials(comment.name) }}</div>
                <div class="comment-admin-meta">
                  <span class="comment-admin-author">{{ comment.name }}</span>
                  <span class="comment-admin-date">{{ formatDate(comment.date) }}</span>
                </div>
                <a :href="`/blog/${comment.articleSlug}`" target="_blank" class="comment-admin-article">
                  <i class="ri-article-line"></i>
                  {{ comment.articleTitle }}
                </a>
                <button @click="deleteComment(comment)" class="btn-icon btn-icon--danger" title="Apagar">
                  <i class="ri-delete-bin-line"></i>
                </button>
              </div>
              <p class="comment-admin-text">{{ comment.content }}</p>
              <div class="comment-admin-stats">
                <span><i class="ri-thumb-up-line"></i> {{ comment.likes || 0 }} gostos</span>
                <span v-if="comment.replies && comment.replies.length > 0">
                  <i class="ri-reply-line"></i> {{ comment.replies.length }} respostas
                </span>
              </div>
            </div>
          </div>

          <!-- Empty -->
          <div v-else class="empty-cell empty-cell--lg">
            <i class="ri-chat-smile-3-line"></i>
            <p>Ainda sem comentários em nenhum artigo.</p>
          </div>
        </section>

      </main>
    </div>

    <!-- ── Modal New/Edit Article ──────────────────────── -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showNewArticleModal" class="modal-overlay" @click.self="closeArticleModal">
          <div class="modal-content modal--large">
            <div class="modal-header">
              <h3>
                <i :class="editingArticle ? 'ri-edit-line' : 'ri-add-circle-line'"></i>
                {{ editingArticle ? 'Editar Artigo' : 'Novo Artigo' }}
              </h3>
              <button @click="closeArticleModal" class="modal-close">
                <i class="ri-close-line"></i>
              </button>
            </div>

            <div class="modal-body">
              <form @submit.prevent="saveArticle" class="article-form">
                <div class="form-row">
                  <div class="form-group">
                    <label>Título (PT)</label>
                    <input v-model="articleForm.title" type="text" required placeholder="Título em português" />
                  </div>
                  <div class="form-group">
                    <label>Título (EN)</label>
                    <input v-model="articleForm.titleEn" type="text" required placeholder="Title in English" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Slug</label>
                    <input v-model="articleForm.slug" type="text" required placeholder="meu-artigo-slug" />
                  </div>
                  <div class="form-group">
                    <label>Status</label>
                    <select v-model="articleForm.status">
                      <option value="draft">Rascunho</option>
                      <option value="published">Publicado</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Excerto (PT)</label>
                    <textarea v-model="articleForm.excerpt" rows="3" required placeholder="Descrição breve em português..."></textarea>
                  </div>
                  <div class="form-group">
                    <label>Excerto (EN)</label>
                    <textarea v-model="articleForm.excerptEn" rows="3" required placeholder="Brief description in English..."></textarea>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Tags <small>(separadas por vírgula)</small></label>
                    <input v-model="articleForm.tags" type="text" placeholder="Node.js, Performance, C" />
                  </div>
                  <div class="form-group">
                    <label>Tempo de leitura</label>
                    <input v-model="articleForm.readTime" type="text" placeholder="5 min read" />
                  </div>
                </div>

                <!-- Hero Image -->
                <div class="form-group">
                  <label>Imagem de Capa</label>
                  <div class="hero-image-field">

                    <div class="hero-image-input">
                      <i class="ri-image-line"></i>
                      <input
                        v-model="articleForm.heroImage"
                        type="text"
                        placeholder="https://exemplo.com/imagem.jpg  ou  /imgs_blog/ficheiro.jpg"
                      />
                      <button
                        v-if="articleForm.heroImage"
                        type="button"
                        class="hero-image-clear"
                        @click="articleForm.heroImage = ''"
                        title="Remover"
                      >
                        <i class="ri-close-line"></i>
                      </button>
                    </div>

                    <!-- Preview -->
                    <transition name="fade">
                      <div v-if="articleForm.heroImage" class="hero-image-preview">
                        <img
                          :src="articleForm.heroImage"
                          alt="Preview"
                          @error="$event.target.parentElement.style.display='none'"
                          @load="$event.target.parentElement.style.display='block'"
                        />
                        <span class="hero-image-preview__label">
                          <i class="ri-check-line"></i> Preview
                        </span>
                      </div>
                    </transition>

                  </div>
                </div>

                <div class="form-group">
                  <label>Conteúdo (Markdown)</label>
                  <MarkdownEditor
                    v-model="articleForm.content"
                    placeholder="Escreve o conteúdo em markdown..."
                    height="380px"
                  />
                </div>

                <div class="form-actions">
                  <button type="button" @click="closeArticleModal" class="btn btn--secondary" :disabled="isSaving">
                    Cancelar
                  </button>
                  <button type="submit" :disabled="isSaving" class="btn btn--primary">
                    <i :class="isSaving ? 'ri-loader-4-line' : 'ri-save-3-line'"></i>
                    {{ isSaving ? 'A guardar...' : (editingArticle ? 'Guardar Alterações' : 'Criar Artigo') }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useAccessControlSimple } from '../composables/useAccessControlSimple'
import { useArticles } from '../composables/useArticles'
import SEOHead from '../components/SEOHead.vue'
import MarkdownEditor from '../components/MarkdownEditor.vue'
import ToastNotification from '../components/ToastNotification.vue'
import StatusToggle from '../components/StatusToggle.vue'
import { articles as initialArticles } from '../data/articles.js'
import TurndownService from 'turndown'

export default {
  name: 'BlogAdmin',
  components: { SEOHead, MarkdownEditor, ToastNotification, StatusToggle },

  setup() {
    const { isAdmin, timeRemaining, revokeAccess } = useAccessControlSimple()
    const { articles, addArticle, updateArticle, deleteArticle: removeArticle } = useArticles()
    const toast = ref(null)
    const isSaving = ref(false)
    const isSeedingFirebase = ref(false)
    const seedProgress = ref('')

    const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' })

    // Apenas o login master (isAdmin) dá acesso — sem verificação de expiração
    if (!isAdmin.value) {
      window.location.href = '/'
    }

    const activeSection = ref('articles')
    const searchQuery   = ref('')
    const statusFilter  = ref('')
    const showNewArticleModal = ref(false)
    const editingArticle = ref(null)
    const allComments = ref([])

    const sections = computed(() => [
      { id: 'articles', name: 'Artigos',       icon: 'ri-article-line', badge: null },
      { id: 'stats',    name: 'Estatísticas',  icon: 'ri-bar-chart-2-line', badge: null },
      { id: 'comments', name: 'Comentários',   icon: 'ri-message-3-line', badge: allComments.value.length > 0 ? allComments.value.length : null }
    ])

    const initialFormState = {
      id: null, title: '', titlePt: '', titleEn: '', slug: '',
      excerpt: '', excerptPt: '', excerptEn: '', content: '', contentPt: '',
      tags: '', status: 'draft', heroImage: '', readTime: '5 min read', readTimePt: '5 min de leitura'
    }
    const articleForm = ref({ ...initialFormState })

    // ── Computed ──────────────────────────────────────────
    const publishedCount = computed(() => articles.value.filter(a => a.status === 'published').length)
    const draftCount     = computed(() => articles.value.filter(a => a.status === 'draft').length)
    const totalArticles  = computed(() => articles.value.length)
    const totalLikes     = computed(() => articles.value.reduce((s, a) => s + (a.likes || 0), 0))
    const totalViews     = computed(() => articles.value.reduce((s, a) => s + (a.views || 0), 0))

    const filteredArticles = computed(() =>
      articles.value
        .filter(a => !statusFilter.value || a.status === statusFilter.value)
        .filter(a => {
          const q = searchQuery.value.toLowerCase()
          return !q || (a.titlePt || a.title || '').toLowerCase().includes(q) || (a.slug || '').toLowerCase().includes(q)
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    )

    const popularArticles = computed(() =>
      articles.value
        .slice()
        .sort((a, b) => (b.views || 0) + (b.likes || 0) * 2 - ((a.views || 0) + (a.likes || 0) * 2))
        .slice(0, 5)
        .map((a, i) => ({ ...a, rank: i + 1 }))
    )

    const allTagStats = computed(() => {
      const map = {}
      articles.value.forEach(a => (a.tags || []).forEach(t => { map[t] = (map[t] || 0) + 1 }))
      return Object.entries(map).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count)
    })

    // ── Comments from localStorage ─────────────────────
    const loadAllComments = () => {
      const list = []
      articles.value.forEach(article => {
        try {
          const stored = localStorage.getItem(`comments_${article.id}`)
          if (!stored) return
          const comments = JSON.parse(stored)
          comments.forEach(c => {
            list.push({ ...c, articleTitle: article.titlePt || article.title, articleSlug: article.slug, articleId: article.id })
            ;(c.replies || []).forEach(r => {
              list.push({ ...r, articleTitle: article.titlePt || article.title, articleSlug: article.slug, articleId: article.id, isReply: true, parentName: c.name })
            })
          })
        } catch (_e) { /* skip invalid article data */ }
      })
      allComments.value = list.sort((a, b) => new Date(b.date) - new Date(a.date))
    }

    const getCommentCount = (articleId) => {
      try {
        const stored = localStorage.getItem(`comments_${articleId}`)
        if (!stored) return 0
        const comments = JSON.parse(stored)
        return comments.reduce((s, c) => s + 1 + ((c.replies || []).length), 0)
      } catch { return 0 }
    }

    const deleteComment = (comment) => {
      if (!confirm('Apagar este comentário?')) return
      try {
        const stored = localStorage.getItem(`comments_${comment.articleId}`)
        if (!stored) return
        let comments = JSON.parse(stored)
        if (comment.isReply) {
          comments = comments.map(c => ({ ...c, replies: (c.replies || []).filter(r => r.id !== comment.id) }))
        } else {
          comments = comments.filter(c => c.id !== comment.id)
        }
        localStorage.setItem(`comments_${comment.articleId}`, JSON.stringify(comments))
        loadAllComments()
        toast.value.show('Comentário apagado.', 'info')
      } catch (e) { console.error(e) }
    }

    const getInitials = (name) =>
      (name || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

    const switchSection = (id) => {
      activeSection.value = id
      if (id === 'comments') loadAllComments()
    }

    // ── Helpers ───────────────────────────────────────────
    const formatTimeRemaining = (minutes) => {
      if (!minutes) return '–'
      if (minutes < 60) return `${minutes}min`
      return `${Math.floor(minutes / 60)}h`
    }

    const formatDate = (dateString) => {
      if (!dateString) return '–'
      return new Date(dateString).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' })
    }

    // ── Status Toggle ─────────────────────────────────────
    const handleStatusToggle = async (article) => {
      const newStatus = article.status === 'published' ? 'draft' : 'published'
      try {
        await updateArticle({ ...article, status: newStatus })
        toast.value.show(newStatus === 'published' ? 'Artigo publicado.' : 'Artigo movido para rascunhos.', newStatus === 'published' ? 'success' : 'info')
      } catch (e) {
        console.error('handleStatusToggle error', e)
        toast.value.show('Erro ao alterar o estado do artigo.', 'error')
      }
    }

    // ── Article CRUD ──────────────────────────────────────
    const editArticle = (article) => {
      editingArticle.value = article
      articleForm.value = {
        id: article.id,
        title: article.titlePt || article.title,
        titlePt: article.titlePt || article.title,
        titleEn: article.title,
        slug: article.slug,
        excerpt: article.excerptPt || article.excerpt,
        excerptPt: article.excerptPt || article.excerpt,
        excerptEn: article.excerpt,
        content: article.contentPt || article.content,
        contentPt: article.contentPt || article.content,
        tags: (article.tags || []).join(', '),
        status: article.status,
        heroImage: article.heroImage || '',
        readTime: article.readTime || '5 min read',
        readTimePt: article.readTimePt || '5 min de leitura',
      }
      showNewArticleModal.value = true
    }

    const duplicateArticle = async (article) => {
      try {
        await addArticle({
          ...article,
          id: Date.now(),
          title: `${article.title} (cópia)`,
          titlePt: `${article.titlePt || article.title} (cópia)`,
          slug: `${article.slug}-${Date.now()}`,
          status: 'draft',
          likes: 0, comments: 0, views: 0,
          date: new Date().toISOString().split('T')[0]
        })
        toast.value.show('Artigo duplicado como rascunho.', 'info')
      } catch (e) {
        console.error('duplicateArticle error', e)
        toast.value.show('Erro ao duplicar o artigo.', 'error')
      }
    }

    const deleteArticle = async (id) => {
      if (confirm('Apagar este artigo? Esta ação é irreversível.')) {
        try {
          await removeArticle(id)
          toast.value.show('Artigo apagado.', 'error')
        } catch (e) {
          console.error('deleteArticle error', e)
          toast.value.show('Erro ao apagar o artigo.', 'error')
        }
      }
    }

    const closeArticleModal = () => { showNewArticleModal.value = false }

    const saveArticle = async () => {
      if (isSaving.value) return
      isSaving.value = true
      try {
        const isEditing = !!editingArticle.value
        const f = articleForm.value
        const readTimePt = f.readTime ? f.readTime.replace('min read', 'min de leitura') : '5 min de leitura'
        const slug = f.slug || (f.title || '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

        const data = {
          id: f.id || Date.now(),
          slug,
          title: f.titleEn,
          titlePt: f.title,
          date: isEditing ? editingArticle.value.date : new Date().toISOString().split('T')[0],
          readTime: f.readTime || '5 min read',
          readTimePt,
          tags: f.tags.split(',').map(t => t.trim()).filter(Boolean),
          excerpt: f.excerptEn,
          excerptPt: f.excerpt,
          content: f.content,
          contentPt: f.content,
          status: f.status,
          heroImage: f.heroImage,
          likes: isEditing ? (editingArticle.value.likes || 0) : 0,
          comments: isEditing ? (editingArticle.value.comments || 0) : 0,
          views: isEditing ? (editingArticle.value.views || 0) : 0,
        }

        if (isEditing) await updateArticle(data)
        else await addArticle(data)
        closeArticleModal()
        toast.value.show(isEditing ? 'Artigo atualizado com sucesso!' : 'Artigo criado com sucesso!', 'success')
      } catch (e) {
        console.error('saveArticle error', e)
        toast.value.show('Erro ao guardar o artigo.', 'error')
      } finally {
        isSaving.value = false
      }
    }

    const openNewArticleModal = () => {
      editingArticle.value = null
      articleForm.value = { ...initialFormState }
      showNewArticleModal.value = true
    }

    const seedFirebase = async () => {
      if (isSeedingFirebase.value) return
      if (!confirm(`Vai adicionar ${initialArticles.length} artigos ao Firebase. Artigos existentes serão sobrescritos. Continuar?`)) return
      isSeedingFirebase.value = true
      let done = 0
      for (const article of initialArticles) {
        try {
          seedProgress.value = `${done + 1}/${initialArticles.length}`
          await addArticle({
            ...article,
            content:   turndown.turndown(article.content   || ''),
            contentPt: turndown.turndown(article.contentPt || ''),
          })
          done++
        } catch (e) {
          console.error('Seed error for', article.slug, e)
        }
      }
      isSeedingFirebase.value = false
      seedProgress.value = ''
      toast.value.show(`${done} artigos adicionados ao Firebase!`, 'success')
    }

    const logout = () => {
      revokeAccess()
      window.location.href = '/'
    }

    onMounted(loadAllComments)

    return {
      activeSection, sections, searchQuery, statusFilter,
      showNewArticleModal, editingArticle, articleForm,
      articles, filteredArticles, timeRemaining,
      publishedCount, draftCount, totalArticles, totalLikes, totalViews,
      popularArticles, allTagStats, allComments,
      formatTimeRemaining, formatDate, getInitials,
      getCommentCount, deleteComment, loadAllComments,
      editArticle, duplicateArticle, deleteArticle,
      closeArticleModal, saveArticle, logout,
      openNewArticleModal, toast, handleStatusToggle, switchSection,
      // async state
      isSaving, isSeedingFirebase, seedProgress,
      // seed
      seedFirebase,
    }
  }
}
</script>

<style scoped>
/* ── Base ─────────────────────────────────────────────── */
.blog-admin { min-height: 100vh; background: var(--color-bg-primary); }

/* ── Header ───────────────────────────────────────────── */
.admin-header {
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
  padding: 1.2rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.admin-header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.admin-header__left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.admin-logo {
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
  flex-shrink: 0;
}

.admin-header__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-heading, var(--color-white));
  margin: 0;
}

.admin-header__subtitle {
  font-size: 0.78rem;
  color: var(--color-muted);
  margin: 0;
}

.admin-header__right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.admin-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.admin-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.time-remaining {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: var(--color-muted);
}

/* ── Layout ───────────────────────────────────────────── */
.admin-wrapper {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 1.75rem;
  padding-top: 1.75rem;
  padding-bottom: 3rem;
  align-items: start;
}

/* ── Sidebar ──────────────────────────────────────────── */
.admin-sidebar {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.2rem;
  position: sticky;
  top: 80px;
}

.admin-nav {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
}

.admin-nav-btn {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.65rem 0.9rem;
  border: none;
  background: transparent;
  border-radius: 9px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  text-align: left;
  transition: all 0.2s ease;
  font-family: inherit;
  width: 100%;
}

.admin-nav-btn i { font-size: 1rem; flex-shrink: 0; }

.admin-nav-btn:hover {
  background: var(--color-bg-primary);
  color: var(--color-primary);
}

.admin-nav-btn.active {
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
}

.nav-badge {
  margin-left: auto;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  padding: 0.1rem 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  min-width: 20px;
  text-align: center;
}

.admin-nav-btn:not(.active) .nav-badge {
  background: var(--color-primary);
  color: #fff;
}

/* ── Sidebar Stats ────────────────────────────────────── */
.sidebar-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}

.sidebar-stat {
  background: var(--color-bg-primary);
  border-radius: 8px;
  padding: 0.6rem;
  text-align: center;
}

.sidebar-stat__value {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-heading, var(--color-white));
  line-height: 1;
}

.sidebar-stat__label {
  display: block;
  font-size: 0.68rem;
  color: var(--color-muted);
  margin-top: 0.2rem;
}

/* ── Main ─────────────────────────────────────────────── */
.admin-main {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 2rem;
  min-height: 400px;
}

/* ── Section Header ───────────────────────────────────── */
.admin-section { display: flex; flex-direction: column; gap: 1.5rem; }

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.section-header__actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
}

.section-header h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-heading, var(--color-white));
  margin: 0;
}

.section-subtitle {
  font-size: 0.82rem;
  color: var(--color-muted);
  margin: 0.2rem 0 0;
}

/* ── Controls ─────────────────────────────────────────── */
.admin-controls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 380px;
}

.search-box i:first-child {
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-muted);
  font-size: 0.9rem;
  pointer-events: none;
}

.search-box input {
  width: 100%;
  padding: 0.65rem 2.5rem 0.65rem 2.4rem;
  border: 1px solid var(--color-border);
  border-radius: 9px;
  background: var(--color-bg-primary);
  color: var(--color-text);
  font-size: 0.875rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.search-box input:focus { outline: none; border-color: var(--color-primary); }
.search-box input::placeholder { color: var(--color-muted); }

.search-clear {
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-muted);
  cursor: pointer;
  padding: 0.2rem;
  display: flex;
  align-items: center;
}

.filter-select {
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 9px;
  background: var(--color-bg-primary);
  color: var(--color-text);
  font-size: 0.875rem;
  font-family: inherit;
  cursor: pointer;
}

/* ── Table ────────────────────────────────────────────── */
.table-container {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.articles-table {
  width: 100%;
  border-collapse: collapse;
}

.articles-table th,
.articles-table td {
  padding: 0.9rem 1.1rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  vertical-align: middle;
}

.articles-table th {
  background: var(--color-bg-primary);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--color-muted);
}

.articles-table tr:last-child td { border-bottom: none; }

.article-row {
  transition: background 0.15s ease;
}

.article-row:hover td {
  background: rgba(74, 134, 232, 0.04);
}

.article-title-cell {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.article-title {
  font-weight: 600;
  color: var(--color-heading, var(--color-white));
  font-size: 0.9rem;
}

.article-slug {
  font-size: 0.75rem;
  color: var(--color-muted);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'Space Mono', monospace;
}

.date-cell {
  font-size: 0.83rem;
  color: var(--color-muted);
  white-space: nowrap;
}

.article-metrics {
  display: flex;
  gap: 0.8rem;
}

.metric {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: var(--color-muted);
}

.metric i { font-size: 0.85rem; }

.article-actions {
  display: flex;
  gap: 0.35rem;
  justify-content: flex-end;
}

.btn-icon {
  background: transparent;
  border: 1px solid transparent;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 0.95rem;
}

.btn-icon:hover {
  background: var(--color-bg-primary);
  color: var(--color-heading, var(--color-white));
  border-color: var(--color-border);
}

.btn-icon--danger:hover {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  border-color: rgba(220, 53, 69, 0.3);
}

.text-right { text-align: right; }

.empty-cell {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--color-muted);
}

.empty-cell i { font-size: 2.5rem; display: block; margin-bottom: 0.75rem; opacity: 0.5; }
.empty-cell p { margin: 0; font-size: 0.9rem; }
.empty-cell--lg { padding: 4rem 2rem; }

/* ── Stats Grid ───────────────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.stat-card__icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}

.stat-card--articles .stat-card__icon { background: rgba(74, 134, 232, 0.15); color: #4a86e8; }
.stat-card--views    .stat-card__icon { background: rgba(16, 185, 129, 0.15); color: #10b981; }
.stat-card--likes    .stat-card__icon { background: rgba(255, 77, 109, 0.15); color: #ff4d6d; }
.stat-card--comments .stat-card__icon { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }

.stat-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-card__value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-heading, var(--color-white));
  line-height: 1;
  font-family: 'Space Grotesk', sans-serif;
}

.stat-card__label {
  font-size: 0.82rem;
  color: var(--color-muted);
  font-weight: 500;
}

.stat-card__sub {
  font-size: 0.75rem;
  color: var(--color-muted);
  opacity: 0.7;
}

/* ── Stats Blocks ─────────────────────────────────────── */
.stats-section-block {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.5rem;
}

.stats-block-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-heading, var(--color-white));
  margin: 0 0 1.2rem;
}

/* ── Publication Bar ──────────────────────────────────── */
.pub-bar-container { display: flex; flex-direction: column; gap: 0.75rem; }

.pub-bar {
  height: 10px;
  background: var(--color-bg-secondary);
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.pub-bar__fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s ease;
}

.pub-bar__fill--published { background: linear-gradient(90deg, #10b981, #34d399); }

.pub-bar-labels {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.pub-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: var(--color-text);
}

.pub-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  flex-shrink: 0;
}

.pub-dot--draft { background: var(--color-border); }

/* ── Popular Articles ─────────────────────────────────── */
.popular-list { display: flex; flex-direction: column; gap: 0.6rem; }

.popular-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  transition: border-color 0.2s;
}

.popular-item:hover { border-color: rgba(74, 134, 232, 0.4); }

.popular-rank {
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-primary);
  min-width: 28px;
  text-align: center;
}

.popular-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.popular-title {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-heading, var(--color-white));
}

.popular-metrics {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.popular-metrics span {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.78rem;
  color: var(--color-muted);
}

.popular-status {
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  flex-shrink: 0;
}

.popular-status--pub   { background: rgba(16, 185, 129, 0.15); color: #10b981; }
.popular-status--draft { background: rgba(107, 114, 128, 0.15); color: #9ca3af; }

/* ── Tags Cloud ───────────────────────────────────────── */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
}

.tag-bubble {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.85rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-text);
  font-weight: 500;
  transition: border-color 0.2s, color 0.2s;
  cursor: default;
}

.tag-bubble:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.tag-bubble__count {
  background: var(--color-primary);
  color: #fff;
  border-radius: 999px;
  padding: 0.05rem 0.4rem;
  font-size: 0.65rem;
  font-weight: 700;
}

/* ── Comments Admin ───────────────────────────────────── */
.comments-admin-list { display: flex; flex-direction: column; gap: 0.9rem; }

.comment-admin-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.2rem;
  transition: border-color 0.2s;
}

.comment-admin-card:hover { border-color: rgba(74, 134, 232, 0.3); }

.comment-admin-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
  flex-wrap: wrap;
}

.comment-admin-avatar {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.78rem;
  flex-shrink: 0;
}

.comment-admin-meta {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex: 1;
}

.comment-admin-author {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-heading, var(--color-white));
}

.comment-admin-date {
  font-size: 0.75rem;
  color: var(--color-muted);
}

.comment-admin-article {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.78rem;
  color: var(--color-primary);
  text-decoration: none;
  background: rgba(74, 134, 232, 0.1);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: background 0.2s;
}

.comment-admin-article:hover { background: rgba(74, 134, 232, 0.2); }

.comment-admin-text {
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--color-text);
  margin: 0 0 0.75rem;
}

.comment-admin-stats {
  display: flex;
  gap: 1rem;
}

.comment-admin-stats span {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.78rem;
  color: var(--color-muted);
}

/* ── Hero Image Field ─────────────────────────────────── */
.hero-image-field { display: flex; flex-direction: column; gap: 0.9rem; }

/* Tabs */
.img-tabs {
  display: flex;
  gap: 0.4rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 9px;
  padding: 0.3rem;
  width: fit-content;
}

.img-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  border: none;
  background: transparent;
  border-radius: 7px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-muted);
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
}

.img-tab.active {
  background: var(--color-bg-secondary);
  color: var(--color-heading, var(--color-white));
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

/* Dropzone */
.dropzone {
  border: 2px dashed var(--color-border);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.dropzone:hover, .dropzone--active {
  border-color: var(--color-primary);
  background: rgba(74, 134, 232, 0.04);
}

.dropzone i {
  font-size: 2.2rem;
  color: var(--color-muted);
  margin-bottom: 0.25rem;
}

.dropzone p {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}

.dropzone small {
  font-size: 0.75rem;
  color: var(--color-muted);
}

/* Upload result */
.upload-result {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-bg-primary);
}

.upload-result__preview {
  height: 140px;
  overflow: hidden;
  flex-shrink: 0;
}

.upload-result__preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.upload-result__info {
  padding: 1rem 1rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
}

.upload-result__filename {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--color-heading, var(--color-white));
}

.upload-result__filename i { color: var(--color-primary); }

.upload-result__size {
  font-size: 0.75rem;
  color: var(--color-muted);
  margin-left: 0.2rem;
}

.upload-result__url {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.upload-result__url-label {
  font-size: 0.75rem;
  color: var(--color-muted);
  white-space: nowrap;
}

.upload-result__url code {
  font-size: 0.78rem;
  background: rgba(74, 134, 232, 0.1);
  color: var(--color-primary);
  padding: 0.15rem 0.5rem;
  border-radius: 5px;
  border: 1px solid rgba(74, 134, 232, 0.2);
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
}

.upload-instruction {
  display: flex;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--color-muted);
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  line-height: 1.5;
}

.upload-instruction i {
  color: #f59e0b;
  font-size: 0.95rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.upload-instruction code {
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.75rem;
}

/* URL input */
.hero-image-input {
  position: relative;
  display: flex;
  align-items: center;
}

.hero-image-input > i {
  position: absolute;
  left: 0.85rem;
  color: var(--color-muted);
  font-size: 1rem;
  pointer-events: none;
}

.hero-image-input input {
  width: 100%;
  padding: 0.7rem 2.5rem 0.7rem 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: 9px;
  background: var(--color-bg-primary);
  color: var(--color-text);
  font-size: 0.875rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.hero-image-input input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(74, 134, 232, 0.12);
}

.hero-image-input input::placeholder { color: var(--color-muted); opacity: 0.7; }

.hero-image-clear {
  position: absolute;
  right: 0.6rem;
  background: none;
  border: none;
  color: var(--color-muted);
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  transition: color 0.2s, background 0.2s;
}

.hero-image-clear:hover { color: #dc3545; background: rgba(220, 53, 69, 0.1); }

/* URL Preview */
.hero-image-preview {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
}

.hero-image-preview img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  display: block;
}

.hero-image-preview__label {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.65) 0%, transparent 100%);
  padding: 0.75rem 1rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── Modal ────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1.5rem;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  max-width: 860px;
  width: 100%;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
}

.modal--large { max-width: 1100px; }

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 1.75rem;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.modal-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-heading, var(--color-white));
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--color-muted);
  padding: 0.4rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}

.modal-close:hover {
  background: var(--color-bg-primary);
  color: var(--color-heading, var(--color-white));
}

.modal-body {
  padding: 1.75rem;
  overflow-y: auto;
}

/* ── Article Form ─────────────────────────────────────── */
.article-form { display: grid; gap: 1.3rem; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group { display: flex; flex-direction: column; gap: 0.45rem; }

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text);
}

.form-group label small {
  font-weight: 400;
  color: var(--color-muted);
  margin-left: 0.3rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 9px;
  background: var(--color-bg-primary);
  color: var(--color-text);
  font-size: 0.875rem;
  font-family: inherit;
  transition: border-color 0.2s;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(74, 134, 232, 0.12);
}

.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--color-muted); opacity: 0.7; }

.form-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  padding-top: 0.5rem;
  border-top: 1px solid var(--color-border);
}

/* ── Modal Transition ─────────────────────────────────── */
.modal-enter-active, .modal-leave-active { transition: all 0.25s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; transform: scale(0.96) translateY(8px); }

/* ── Container ────────────────────────────────────────── */
.container-wide { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }

/* ── Btn helpers ──────────────────────────────────────── */
.btn--sm { padding: 0.5rem 1rem; font-size: 0.82rem; }

/* ── Light Mode ───────────────────────────────────────── */
.theme-light .admin-main,
.theme-light .admin-sidebar { background: #fff; }
.theme-light .stat-card,
.theme-light .stats-section-block { background: #f8fafc; }
.theme-light .popular-item,
.theme-light .comment-admin-card { background: #fff; }

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 900px) {
  .admin-wrapper { grid-template-columns: 1fr; }
  .admin-sidebar { position: static; }
  .admin-nav { flex-direction: row; overflow-x: auto; gap: 0.3rem; }
  .admin-nav-btn { white-space: nowrap; flex-shrink: 0; width: auto; }
  .sidebar-stats { display: none; }
}

@media (max-width: 640px) {
  .form-row { grid-template-columns: 1fr; }
  .admin-main { padding: 1.2rem; }
  .modal-body { padding: 1.2rem; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
}
</style>
