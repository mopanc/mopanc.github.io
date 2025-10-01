<template>
  <SEOHead 
    v-if="caseStudy"
    :title="caseStudy.metaTitle" 
    :description="caseStudy.metaDescription"
    :canonical="`https://jorgemopanc.com/projects/${caseStudy.slug}`"
    :ogImage="caseStudy.heroImage"
  />
  <div class="project-detail-page">
    <div class="container">
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading case study...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <i class="ri-error-warning-line"></i>
        <h2>Case Study Not Found</h2>
        <p>{{ error }}</p>
        <router-link to="/projects" class="btn btn--primary">
          <i class="ri-arrow-left-line"></i>
          Back to Projects
        </router-link>
      </div>

      <!-- Case Study Content -->
      <article v-else-if="caseStudy" class="case-study">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">/</span>
          <router-link to="/projects">Projects</router-link>
          <span class="separator">/</span>
          <span class="current">{{ caseStudy.title }}</span>
        </nav>

        <!-- Hero Section -->
        <header class="case-study-hero">
          <div class="hero-content">
            <h1 class="hero-title">{{ caseStudy.title }}</h1>
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
            <OptimizedImage
              v-if="caseStudy.heroImage"
              :src="caseStudy.heroImage"
              :alt="`${caseStudy.title} preview`"
              width="800"
              height="500"
              loading="eager"
              img-class="hero-img"
            />
          </div>
        </header>

        <!-- Context Section -->
        <section class="case-study-section context-section">
          <div class="section-header">
            <i class="ri-file-list-line section-icon"></i>
            <h2>Context</h2>
          </div>
          <div class="section-content">
            <p class="context-text">{{ caseStudy.context }}</p>
          </div>
        </section>

        <!-- Challenge Section -->
        <section class="case-study-section challenge-section">
          <div class="section-header">
            <i class="ri-focus-2-line section-icon"></i>
            <h2>Technical Challenges</h2>
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
            <h2>The Solution</h2>
          </div>
          <div class="section-content">
            <!-- Architecture Diagram -->
            <div v-if="caseStudy.architectureDiagram" class="architecture">
              <h3>System Architecture</h3>
              <OptimizedImage
                :src="caseStudy.architectureDiagram"
                alt="System architecture diagram"
                img-class="architecture-diagram"
              />
            </div>

            <!-- Tech Stack -->
            <div class="tech-stack-details">
              <h3>Technology Stack</h3>
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
              <h3>Code Example</h3>
              <p class="code-description">{{ caseStudy.codeDescription }}</p>
              <CodeHighlight
                :language="caseStudy.codeLanguage || 'javascript'"
                :code="caseStudy.codeExample"
              />
            </div>

            <!-- Key Decisions -->
            <div v-if="caseStudy.keyDecisions" class="key-decisions">
              <h3>Key Technical Decisions</h3>
              <div
                v-for="(decision, index) in caseStudy.keyDecisions"
                :key="index"
                class="decision-card"
              >
                <h4>{{ decision.decision }}</h4>
                <div class="decision-details">
                  <div class="decision-item">
                    <strong>Rationale:</strong> {{ decision.rationale }}
                  </div>
                  <div class="decision-item">
                    <strong>Trade-off:</strong> {{ decision.tradeoff }}
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
            <h2>Measurable Results</h2>
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
              <h3>Business Impact</h3>
              <p>{{ caseStudy.businessImpact }}</p>
            </div>

            <div v-if="caseStudy.technicalWins" class="technical-wins">
              <h3>Technical Achievements</h3>
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
            <h2>Key Learnings</h2>
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
            Back to Projects
          </router-link>
          <router-link to="/contact" class="btn btn--primary">
            <i class="ri-mail-line"></i>
            Work with Me
          </router-link>
        </footer>
      </article>
    </div>
  </div>
</template>

<script>
import OptimizedImage from '../components/OptimizedImage.vue';
import CodeHighlight from '../components/CodeHighlight.vue';
import SEOHead from '../components/SEOHead.vue';
import { getCaseStudy } from '../data/case-studies';

export default {
  name: 'ProjectDetail',
  components: {
    OptimizedImage,
    CodeHighlight,
    SEOHead
  },

  data() {
    return {
      caseStudy: null,
      loading: true,
      error: null
    };
  },

  async mounted() {
    await this.loadCaseStudy();

    // Listen for language changes
    window.addEventListener('storage', this.handleLanguageChange);
    window.addEventListener('languageChanged', this.handleLanguageChange);
  },

  beforeUnmount() {
    window.removeEventListener('storage', this.handleLanguageChange);
    window.removeEventListener('languageChanged', this.handleLanguageChange);
  },

  watch: {
    '$route.params.slug': 'loadCaseStudy'
  },

  methods: {
    async loadCaseStudy() {
      this.loading = true;
      this.error = null;

      try {
        const slug = this.$route.params.slug;
        const language = localStorage.getItem('selectedLanguage') || 'pt';
        const caseStudyData = await getCaseStudy(slug, language);

        if (!caseStudyData) {
          this.error = `Case study "${slug}" not found.`;
          return;
        }

        this.caseStudy = caseStudyData;

        // Update page title
        if (caseStudyData.metaTitle) {
          document.title = caseStudyData.metaTitle;
        }
      } catch (err) {
        console.error('Failed to load case study:', err);
        this.error = 'Failed to load case study. Please try again later.';
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
    }
  }
};
</script>

<style scoped src="../styles/ProjectDetailStyles.css"></style>
