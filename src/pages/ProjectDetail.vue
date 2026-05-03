<template>
  <SEOHead 
    v-if="caseStudy"
    :title="caseStudy.metaTitle" 
    :description="caseStudy.metaDescription"
    :canonical="`https://jorgemopanc.com/projects/${caseStudy.slug}`"
    :ogImage="caseStudy.heroImage"
  />
  <div class="project-detail-page">
    <div class="container-wide">
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>{{ translations.loading_case_study || 'Loading case study...' }}</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <i class="ri-error-warning-line"></i>
        <h2>{{ translations.case_study_not_found || 'Case Study Not Found' }}</h2>
        <p>{{ error }}</p>
        <router-link to="/projects" class="btn btn--primary">
          <i class="ri-arrow-left-line"></i>
          {{ translations.back_to_projects || 'Back to Projects' }}
        </router-link>
      </div>

      <!-- Case Study Content -->
      <article v-else-if="caseStudy" class="case-study">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <router-link to="/">{{ translations.home || 'Home' }}</router-link>
          <span class="separator">/</span>
          <router-link to="/projects">{{ translations.projects || 'Projects' }}</router-link>
          <span class="separator">/</span>
          <span class="current">{{ caseStudy.title }}</span>
        </nav>

        <!-- Hero Section -->
        <header class="case-study-hero">
          <div class="hero-content">
            <h2 class="hero-title">{{ caseStudy.title }}</h2>
            <p class="hero-subtitle">{{ caseStudy.subtitle }}</p>

            <div class="hero-meta">
              <div class="meta-item">
                <i class="ri-time-line"></i>
                <span>{{ caseStudy.duration }}</span>
              </div>
              <div class="meta-item">
                <i class="ri-user-line"></i>
                <span>{{ caseStudy.role }}</span>
              </div>
              <div class="meta-item">
                <i class="ri-calendar-line"></i>
                <span>{{ caseStudy.year }}</span>
              </div>
            </div>

            <div class="tech-stack">
              <span
                v-for="tech in caseStudy.tech"
                :key="tech"
                class="tech-badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="hero-image">
            <img
              v-if="caseStudy.heroImage"
              :src="caseStudy.heroImage"
              :alt="`${caseStudy.title} preview`"
              width="800"
              height="500"
              loading="eager"
              class="hero-img"
            />
          </div>
        </header>

        <!-- Public artifacts (live site, repo, npm, ...) -->
        <section v-if="caseStudy.links && Object.keys(caseStudy.links).length" class="case-study-links" aria-label="Project links">
          <a v-if="caseStudy.links.website"
             :href="caseStudy.links.website"
             target="_blank" rel="noopener noreferrer"
             class="cs-link">
            <i class="ri-external-link-line"></i>
            <span>{{ translations.proj_cta_visit_site || 'Visit site' }}</span>
          </a>
          <a v-if="caseStudy.links.github"
             :href="caseStudy.links.github"
             target="_blank" rel="noopener noreferrer"
             class="cs-link">
            <i class="ri-github-fill"></i>
            <span>GitHub</span>
          </a>
          <a v-if="caseStudy.links.npm"
             :href="caseStudy.links.npm"
             target="_blank" rel="noopener noreferrer"
             class="cs-link">
            <i class="ri-npmjs-fill"></i>
            <span>npm</span>
          </a>
          <a v-if="caseStudy.links.glama"
             :href="caseStudy.links.glama"
             target="_blank" rel="noopener noreferrer"
             class="cs-link">
            <i class="ri-rocket-line"></i>
            <span>Glama</span>
          </a>
        </section>

        <!-- Context Section -->
        <section class="case-study-section context-section">
          <div class="section-header">
            <i class="ri-file-list-line section-icon"></i>
            <h2>{{ translations.case_study_context || 'Context' }}</h2>
          </div>
          <div class="section-content">
            <p class="context-text">{{ caseStudy.context }}</p>
          </div>
        </section>

        <!-- Challenge Section -->
        <section class="case-study-section challenge-section">
          <div class="section-header">
            <i class="ri-focus-2-line section-icon"></i>
            <h2>{{ translations.technical_challenges || 'Technical Challenges' }}</h2>
          </div>
          <div class="section-content">
            <div class="challenges-grid">
              <div
                v-for="(challenge, index) in caseStudy.challenges"
                :key="index"
                class="challenge-card"
              >
                <i :class="challenge.icon" class="challenge-icon"></i>
                <h3>{{ challenge.title }}</h3>
                <p>{{ challenge.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Solution Section -->
        <section class="case-study-section solution-section">
          <div class="section-header">
            <i class="ri-lightbulb-line section-icon"></i>
            <h2>{{ translations.the_solution || 'The Solution' }}</h2>
          </div>
          <div class="section-content">
            <!-- Architecture Diagram -->
            <div v-if="caseStudy.architectureDiagram" class="architecture">
              <h3>{{ translations.system_architecture || 'System Architecture' }}</h3>
              <OptimizedImage
                :src="caseStudy.architectureDiagram"
                alt="System architecture diagram"
                img-class="architecture-diagram"
              />
            </div>

            <!-- Tech Stack -->
            <div class="tech-stack-details">
              <h3>{{ translations.technology_stack || 'Technology Stack' }}</h3>
              <div class="stack-grid">
                <div
                  v-for="(technologies, category) in caseStudy.stack"
                  :key="category"
                  class="stack-category"
                >
                  <h4>{{ formatCategory(category) }}</h4>
                  <ul>
                    <li v-for="tech in technologies" :key="tech">
                      <i class="ri-checkbox-circle-line"></i>
                      {{ tech }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Code Example -->
            <div v-if="caseStudy.codeExample" class="code-example">
              <h3>{{ translations.code_example || 'Code Example' }}</h3>
              <p class="code-description">{{ caseStudy.codeDescription }}</p>
              <CodeHighlight
                :language="caseStudy.codeLanguage || 'javascript'"
                :code="caseStudy.codeExample"
              />
            </div>

            <!-- Key Decisions -->
            <div v-if="caseStudy.keyDecisions" class="key-decisions">
              <h3>{{ translations.key_technical_decisions || 'Key Technical Decisions' }}</h3>
              <div
                v-for="(decision, index) in caseStudy.keyDecisions"
                :key="index"
                class="decision-card"
              >
                <h4>{{ decision.decision }}</h4>
                <div class="decision-details">
                  <div class="decision-item">
                    <strong>{{ translations.decision_rationale || 'Rationale:' }}</strong> {{ decision.rationale }}
                  </div>
                  <div class="decision-item">
                    <strong>{{ translations.decision_tradeoff || 'Trade-off:' }}</strong> {{ decision.tradeoff }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Results Section -->
        <section class="case-study-section results-section">
          <div class="section-header">
            <i class="ri-line-chart-line section-icon"></i>
            <h2>{{ translations.measurable_results || 'Measurable Results' }}</h2>
          </div>
          <div class="section-content">
            <div class="metrics-grid">
              <div
                v-for="metric in caseStudy.metrics"
                :key="metric.label"
                class="metric-card"
              >
                <span class="metric-value">{{ metric.value }}</span>
                <span class="metric-label">{{ metric.label }}</span>
              </div>
            </div>

            <div v-if="caseStudy.businessImpact" class="business-impact">
              <h3>{{ translations.business_impact || 'Business Impact' }}</h3>
              <p>{{ caseStudy.businessImpact }}</p>
            </div>

            <div v-if="caseStudy.technicalWins" class="technical-wins">
              <h3>{{ translations.technical_achievements || 'Technical Achievements' }}</h3>
              <ul>
                <li v-for="win in caseStudy.technicalWins" :key="win">
                  <i class="ri-check-double-line"></i>
                  {{ win }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Learnings Section -->
        <section class="case-study-section learnings-section">
          <div class="section-header">
            <i class="ri-brain-line section-icon"></i>
            <h2>{{ translations.key_learnings || 'Key Learnings' }}</h2>
          </div>
          <div class="section-content">
            <ul class="learnings-list">
              <li v-for="(learning, index) in caseStudy.learnings" :key="index">
                <span class="learning-number">{{ index + 1 }}</span>
                <span class="learning-text">{{ learning }}</span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Testimonial (if available) -->
        <section
          v-if="caseStudy.testimonial"
          class="case-study-section testimonial-section"
        >
          <div class="testimonial-card">
            <i class="ri-double-quotes-l quote-icon"></i>
            <blockquote>
              <p>{{ caseStudy.testimonial.quote }}</p>
              <cite>
                <strong>{{ caseStudy.testimonial.author }}</strong>
                <span>{{ caseStudy.testimonial.role }}</span>
              </cite>
            </blockquote>
          </div>
        </section>

        <!-- Navigation Footer -->
        <footer class="case-study-footer">
          <router-link to="/projects" class="btn btn--secondary">
            <i class="ri-arrow-left-line"></i>
            {{ translations.back_to_projects || 'Back to Projects' }}
          </router-link>
          <router-link to="/contact" class="btn btn--primary">
            <i class="ri-mail-line"></i>
            {{ translations.work_with_me || 'Work with Me' }}
          </router-link>
        </footer>
      </article>

      <!-- ── LIGHTWEIGHT VIEW (project without case study) ────────────── -->
      <article v-else-if="lightweightProject" class="lite-detail">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <router-link to="/">{{ translations.home || 'Home' }}</router-link>
          <span class="separator">/</span>
          <router-link to="/projects">{{ translations.projects || 'Projects' }}</router-link>
          <span class="separator">/</span>
          <span class="current">{{ lightweightProject.title }}</span>
        </nav>

        <header class="lite-header">
          <div class="lite-header__meta">
            <span class="lite-badge lite-badge--type">{{ lightweightProject.projectType }}</span>
            <span v-if="lightweightProject.status" class="lite-badge lite-badge--status">{{ lightweightProject.status }}</span>
          </div>
          <h1 class="lite-title">{{ lightweightProject.title }}</h1>
          <p class="lite-description">{{ lightweightProject.description }}</p>

          <div class="lite-actions" v-if="lightweightProject.githubLink || lightweightProject.websiteLink">
            <a v-if="lightweightProject.websiteLink"
               :href="lightweightProject.websiteLink"
               target="_blank" rel="noopener noreferrer"
               class="btn btn--primary">
              <i class="ri-external-link-line"></i>
              {{ translations.proj_cta_visit_site || 'Visit site' }}
            </a>
            <a v-if="lightweightProject.githubLink"
               :href="lightweightProject.githubLink"
               target="_blank" rel="noopener noreferrer"
               class="btn btn--secondary">
              <i class="ri-github-fill"></i>
              {{ translations.proj_cta_github || 'View on GitHub' }}
            </a>
          </div>
        </header>

        <!-- Metrics -->
        <section v-if="lightweightProject.metrics && lightweightProject.metrics.length" class="lite-metrics">
          <div v-for="(m, i) in lightweightProject.metrics" :key="i" class="lite-metric">
            <span class="lite-metric__value">{{ m.value }}</span>
            <span class="lite-metric__label">{{ m.label }}</span>
          </div>
        </section>

        <!-- Tech stack -->
        <section v-if="lightweightProject.technologies && lightweightProject.technologies.length" class="lite-tech">
          <h2 class="lite-section-title">{{ translations.technology_stack || 'Technology Stack' }}</h2>
          <div class="lite-tech__list">
            <span v-for="t in lightweightProject.technologies" :key="t.name" class="lite-tech__pill">
              {{ t.name }}
            </span>
          </div>
        </section>

        <!-- Gallery -->
        <section v-if="lightweightProject.gallery && lightweightProject.gallery.length" class="lite-gallery">
          <h2 class="lite-section-title">{{ translations.proj_lite_gallery || 'Gallery' }}</h2>
          <div class="lite-gallery__grid">
            <figure
              v-for="(img, i) in lightweightProject.gallery"
              :key="i"
              class="lite-gallery__item"
              tabindex="0"
              role="button"
              :aria-label="img.title || img.alt"
              @click="openLightbox(i)"
              @keydown.enter="openLightbox(i)"
              @keydown.space.prevent="openLightbox(i)"
            >
              <img :src="img.src" :alt="img.alt" loading="lazy" />
              <figcaption v-if="img.title">{{ img.title }}</figcaption>
            </figure>
          </div>
        </section>

        <!-- Footer nav -->
        <footer class="lite-footer">
          <router-link to="/projects" class="btn btn--secondary">
            <i class="ri-arrow-left-line"></i>
            {{ translations.back_to_projects || 'Back to Projects' }}
          </router-link>
          <router-link to="/contact" class="btn btn--primary">
            <i class="ri-mail-line"></i>
            {{ translations.work_with_me || 'Work with Me' }}
          </router-link>
        </footer>
      </article>
    </div>

    <!-- ── Lightbox modal ─────────────────────────────────────── -->
    <Teleport to="body">
      <transition name="lb-fade">
        <div
          v-if="lightboxIndex !== null && currentLightboxImage"
          class="lb"
          @click.self="closeLightbox"
          role="dialog"
          aria-modal="true"
        >
          <button class="lb__close" @click="closeLightbox" aria-label="Close">
            <i class="ri-close-line"></i>
          </button>

          <button
            v-if="galleryLength > 1"
            class="lb__nav lb__nav--prev"
            @click.stop="prevImage"
            aria-label="Previous image"
          >
            <i class="ri-arrow-left-s-line"></i>
          </button>

          <button
            v-if="galleryLength > 1"
            class="lb__nav lb__nav--next"
            @click.stop="nextImage"
            aria-label="Next image"
          >
            <i class="ri-arrow-right-s-line"></i>
          </button>

          <figure class="lb__figure" @click.self="closeLightbox">
            <img
              :src="currentLightboxImage.src"
              :alt="currentLightboxImage.alt"
              :key="lightboxIndex"
            />
            <figcaption class="lb__caption" v-if="currentLightboxImage.title || galleryLength > 1">
              <span v-if="currentLightboxImage.title">{{ currentLightboxImage.title }}</span>
              <span v-if="galleryLength > 1" class="lb__counter">{{ lightboxIndex + 1 }} / {{ galleryLength }}</span>
            </figcaption>
          </figure>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script>
import OptimizedImage from '../components/OptimizedImage.vue';
import CodeHighlight from '../components/CodeHighlight.vue';
import SEOHead from '../components/SEOHead.vue';
import { getCaseStudy } from '../data/case-studies';
import { useLanguage } from '../composables/useLanguage';
import { useProjects } from '../composables/useProjects';

export default {
  name: 'ProjectDetail',
  components: {
    OptimizedImage,
    CodeHighlight,
    SEOHead
  },

  setup() {
    const { translations, initialize, getCurrentLanguage } = useLanguage();
    const { projects, loadProjects } = useProjects();
    return { translations, initialize, getCurrentLanguage, projects, loadProjects };
  },

  data() {
    return {
      caseStudy: null,
      lightweightProject: null,
      loading: true,
      error: null,
      lightboxIndex: null
    };
  },

  computed: {
    currentLightboxImage() {
      if (this.lightboxIndex === null || !this.lightweightProject) return null;
      return this.lightweightProject.gallery[this.lightboxIndex] || null;
    },
    galleryLength() {
      return this.lightweightProject?.gallery?.length || 0;
    }
  },

  async mounted() {
    await this.initialize();
    await this.loadCaseStudy();

    // Listen for language changes
    window.addEventListener('storage', this.handleLanguageChange);
    window.addEventListener('languageChanged', this.handleLanguageChange);
    window.addEventListener('keydown', this.handleLightboxKey);
  },

  beforeUnmount() {
    window.removeEventListener('storage', this.handleLanguageChange);
    window.removeEventListener('languageChanged', this.handleLanguageChange);
    window.removeEventListener('keydown', this.handleLightboxKey);
    document.body.style.overflow = '';
  },

  watch: {
    '$route.params.slug': 'loadCaseStudy'
  },

  methods: {
    async loadCaseStudy() {
      this.loading = true;
      this.error = null;
      this.caseStudy = null;
      this.lightweightProject = null;

      try {
        const slug = this.$route.params.slug;
        const language = this.getCurrentLanguage();

        // 1. Try rich case study first
        const caseStudyData = await getCaseStudy(slug, language);
        if (caseStudyData) {
          this.caseStudy = caseStudyData;
          if (caseStudyData.metaTitle) {
            document.title = caseStudyData.metaTitle;
          }
          return;
        }

        // 2. Fallback: lightweight project lookup by id
        if (!this.projects || this.projects.length === 0) {
          await this.loadProjects(language);
        }
        const project = this.projects.find(p => p.id === slug);
        if (project) {
          this.lightweightProject = project;
          document.title = project.title;
          return;
        }

        // 3. Not found
        const template = this.translations.case_study_not_found_msg || 'Case study "{slug}" not found.';
        this.error = template.replace('{slug}', slug);
      } catch (err) {
        console.error('Failed to load:', err);
        this.error = this.translations.case_study_load_failed || 'Failed to load case study. Please try again later.';
      } finally {
        this.loading = false;
      }
    },

    handleLanguageChange() {
      // Reload case study when language changes
      this.loadCaseStudy();
    },

    formatCategory(category) {
      const categoryMap = {
        backend: 'Backend',
        frontend: 'Frontend',
        realtime: 'Real-time',
        protocol: 'Protocol',
        database: 'Database',
        devops: 'DevOps',
        testing: 'Testing'
      };

      return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
    },

    // ── Lightbox ────────────────────────────────────────────
    openLightbox(index) {
      this.lightboxIndex = index;
      document.body.style.overflow = 'hidden';
    },

    closeLightbox() {
      this.lightboxIndex = null;
      document.body.style.overflow = '';
    },

    nextImage() {
      if (this.galleryLength === 0) return;
      this.lightboxIndex = (this.lightboxIndex + 1) % this.galleryLength;
    },

    prevImage() {
      if (this.galleryLength === 0) return;
      this.lightboxIndex = (this.lightboxIndex - 1 + this.galleryLength) % this.galleryLength;
    },

    handleLightboxKey(e) {
      if (this.lightboxIndex === null) return;
      if (e.key === 'Escape') this.closeLightbox();
      else if (e.key === 'ArrowRight') this.nextImage();
      else if (e.key === 'ArrowLeft') this.prevImage();
    }
  }
};
</script>

<style scoped src="../styles/ProjectDetailStyles.css"></style>

<style scoped>
/* ── Case study public artifacts strip (under hero) ── */
.case-study-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0 0 4rem;
}

.cs-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.1rem;
  border-radius: 8px;
  border: 1px solid rgba(126, 184, 247, 0.25);
  background: rgba(126, 184, 247, 0.05);
  color: #d6dfec;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease, color 0.2s ease;
}

.cs-link:hover {
  border-color: rgba(126, 184, 247, 0.55);
  background: rgba(126, 184, 247, 0.12);
  color: #fff;
  transform: translateY(-1px);
}

.cs-link i {
  font-size: 1rem;
  color: #7eb8f7;
}

/* ── Lightweight detail — inherits width from .container-wide for parity with case study ── */
.lite-detail {
  width: 100%;
  color: #c8d8f0;
}

/* Header block */
.lite-header {
  margin: 2rem 0 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.lite-header__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.lite-badge {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  font-family: var(--ff-mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  font-weight: 500;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #c8d8f0;
}

.lite-badge--type {
  color: #7eb8f7;
  border-color: rgba(126, 184, 247, 0.2);
  background: rgba(126, 184, 247, 0.06);
}

.lite-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #ffffff;
  margin: 0 0 1.5rem;
}

.lite-description {
  font-size: 17px;
  line-height: 1.7;
  color: #c8d8f0;
  max-width: 75ch;
  margin: 0 0 2.5rem;
}

.lite-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.lite-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

/* Metrics row */
.lite-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0;
  margin-bottom: 4rem;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.lite-metric {
  padding: 1.8rem 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.lite-metric:last-child {
  border-right: none;
}

.lite-metric__value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
  line-height: 1;
}

.lite-metric__label {
  font-family: var(--ff-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5a6a82;
}

/* Section titles — match rich case study */
.lite-section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin: 0 0 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

/* Tech */
.lite-tech {
  margin-bottom: 4rem;
}

.lite-tech__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.lite-tech__pill {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  font-family: var(--ff-mono);
  font-size: 12px;
  color: #c8d8f0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
}

/* Gallery */
.lite-gallery {
  margin-bottom: 4rem;
}

.lite-gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
}

.lite-gallery__item {
  margin: 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(126, 184, 247, 0.12);
  border-radius: 14px;
  overflow: hidden;
  cursor: zoom-in;
  transition:
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.22s ease,
    box-shadow 0.22s ease;
}

.lite-gallery__item:hover,
.lite-gallery__item:focus-visible {
  transform: translateY(-3px);
  border-color: rgba(126, 184, 247, 0.4);
  box-shadow: 0 8px 30px rgba(126, 184, 247, 0.08);
  outline: none;
}

.lite-gallery__item img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.lite-gallery__item:hover img {
  transform: scale(1.04);
}

.lite-gallery__item figcaption {
  padding: 0.7rem 1rem;
  font-family: var(--ff-mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #5a6a82;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

/* Footer */
.lite-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 2rem;
  flex-wrap: wrap;
}

.lite-footer .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 720px) {
  .lite-header { margin: 1.5rem 0 2.5rem; padding-bottom: 2.5rem; }
  .lite-metric { border-right: none; border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
  .lite-metric:last-child { border-bottom: none; }
  .lite-footer { flex-direction: column; }
  .lite-footer .btn { width: 100%; justify-content: center; }
}

/* ── Lightbox ───────────────────────────────────────────────── */
.lb {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(5, 8, 14, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.lb__figure {
  margin: 0;
  max-width: min(1400px, 100%);
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.lb__figure img {
  max-width: 100%;
  max-height: calc(100vh - 10rem);
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  cursor: zoom-out;
}

.lb__caption {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  font-family: var(--ff-mono);
  font-size: 13px;
  letter-spacing: 0.06em;
  color: #c8d8f0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
}

.lb__counter {
  color: #5a6a82;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding-left: 1rem;
  font-variant-numeric: tabular-nums;
}

.lb__close,
.lb__nav {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  cursor: pointer;
  border-radius: 50%;
  transition:
    background 0.22s ease,
    border-color 0.22s ease,
    transform 0.18s ease;
}

.lb__close:hover,
.lb__nav:hover {
  background: rgba(126, 184, 247, 0.18);
  border-color: rgba(126, 184, 247, 0.45);
  transform: scale(1.05);
}

.lb__close {
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  font-size: 1.5rem;
}

.lb__nav {
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  font-size: 2rem;
}

.lb__nav:hover { transform: translateY(-50%) scale(1.05); }

.lb__nav--prev { left: 1.5rem; }
.lb__nav--next { right: 1.5rem; }

/* Transitions */
.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.22s ease;
}
.lb-fade-enter-active .lb__figure,
.lb-fade-leave-active .lb__figure {
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.22s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}
.lb-fade-enter-from .lb__figure,
.lb-fade-leave-to .lb__figure {
  transform: scale(0.96);
  opacity: 0;
}

@media (max-width: 720px) {
  .lb { padding: 3rem 0.8rem; }
  .lb__close { top: 0.8rem; right: 0.8rem; width: 38px; height: 38px; }
  .lb__nav { width: 42px; height: 42px; font-size: 1.6rem; }
  .lb__nav--prev { left: 0.6rem; }
  .lb__nav--next { right: 0.6rem; }
  .lb__figure img { max-height: calc(100vh - 8rem); }
}
</style>
