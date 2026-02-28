<template>
  <div class="projects-page">
    <!-- Professional Compact Header -->
    <section class="projects-hero-modern">
      <div class="container-wide">
        <div class="hero-layout-compact">
          <!-- Left Side - Title & Description -->
          <div class="hero-content-compact">
            <h1 class="hero-title-compact">
              {{ translations.projects_page || 'Projetos' }} & <span class="title-highlight-compact">{{ translations.development || 'Desenvolvimento' }}</span>
            </h1>
            <p class="hero-description-compact">
              {{ translations.projects_page_subtitle || 'Algum do meu trabalho pessoal' }}
            </p>
          </div>

          <!-- Right Side - Search Only -->
          <div class="hero-controls-compact">
            <!-- Search Box -->
            <div class="search-compact" v-if="selectedCategory === 'all'">
              <i class="ri-search-line"></i>
              <input
                type="text"
                v-model="searchTerm"
                :placeholder="translations.projects_page_search_pl || 'Pesquisar projeto'"
                class="search-input-compact"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Filters Section -->
    <section class="filters-section">
      <div class="container-wide">

        <!-- Mobile Toggle Button -->
        <button class="filters-mobile-toggle" @click="mobileFiltersOpen = !mobileFiltersOpen">
          <i class="ri-filter-3-line"></i>
          <span>{{ translations.filters || 'Filtros' }}</span>
          <span v-if="selectedCategory !== 'all' || selectedStatus !== 'all' || showFeaturedOnly" class="filters-active-dot"></span>
          <i :class="mobileFiltersOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" class="filters-toggle-icon"></i>
        </button>

        <div class="filters-inline" :class="{ 'filters-mobile-open': mobileFiltersOpen }">
          <!-- Category Filter -->
          <div class="filter-group-inline">
            <span class="filter-group-label">{{ translations.category_label || 'Categoria:' }}</span>
            <button
              v-for="category in categoryFilters"
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="['filter-btn-modern', { 'active': selectedCategory === category.id }]"
            >
              <i :class="category.icon"></i>
              <span class="filter-text">{{ category.name }}</span>
              <span class="filter-count-modern">{{ getCategoryProjects(category.id).length }}</span>
            </button>
          </div>

          <!-- Status Filter -->
          <div class="filter-group-inline">
            <span class="filter-group-label">{{ translations.status_label || 'Status:' }}</span>
            <button
              v-for="status in statusFilters"
              :key="status.id"
              @click="selectedStatus = status.id"
              :class="['filter-btn-modern status-filter', { 'active': selectedStatus === status.id }]"
            >
              <i :class="status.icon"></i>
              <span class="filter-text">{{ status.name }}</span>
              <span class="filter-count-modern">{{ getStatusProjects(status.id).length }}</span>
            </button>
          </div>

          <!-- Featured Toggle -->
          <div class="filter-group-inline">
            <span class="filter-group-label">{{ translations.featured_label || 'Destacados:' }}</span>
            <button
              @click="showFeaturedOnly = !showFeaturedOnly"
              :class="['filter-btn-modern featured-filter', { 'active': showFeaturedOnly }]"
            >
              <i class="ri-star-fill"></i>
              <span class="filter-text">{{ translations.featured_only || 'Apenas Destacados' }}</span>
              <span class="filter-count-modern">{{ getFeaturedProjects().length }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid">
      <div class="container-wide">
        <div class="grid">
          <div
            v-for="(project, index) in displayedProjects"
            :key="index"
            class="project-card"
            :class="{ 'locked': !isAccessValid && !project.isPublic, 'featured': project.featured }"
            @click="openProjectModal(project)"
          >
            <!-- No more lock overlay - security is handled by conditional rendering -->

            <!-- Project Image -->
            <div class="project-image">
              <template v-if="project.isPublic || isAccessValid">
                <img :src="project.imageSrc" :alt="project.imageAlt" @error="handleImageError" />
                <div class="image-overlay">
                  <i class="ri-eye-line"></i>
                </div>
              </template>
              <template v-else>
                <div class="locked-project-image">
                  <i class="ri-lock-line"></i>
                  <span>Restricted</span>
                </div>
                <div class="image-overlay locked-overlay">
                  <i class="ri-lock-line"></i>
                </div>
              </template>
            </div>

            <!-- Featured Badge -->
            <div v-if="project.featured" class="featured-badge">
              <i class="ri-star-fill"></i>
              <span>Featured</span>
            </div>

            <!-- Project Info -->
            <div class="project-info">
              <!-- Show real content only if public OR access is valid -->
              <template v-if="project.isPublic || isAccessValid">
                <h3 class="project-title-clean">{{ project.projectName }}</h3>

                <!-- Metrics strip -->
                <div v-if="project.metrics && project.metrics.length" class="project-metrics">
                  <div v-for="(metric, mIdx) in project.metrics" :key="mIdx" class="metric-item">
                    <span class="metric-value">{{ metric.value }}</span>
                    <span class="metric-label">{{ metric.label }}</span>
                  </div>
                </div>

                <!-- Technologies (max 5) -->
                <div class="project-technologies-clean">
                  <span
                    v-for="(tech, idx) in project.technologies.slice(0, 5)"
                    :key="idx"
                    class="tech-tag-clean"
                  >
                    <img v-if="hasLocalIcon(tech.name)" :src="getLocalIcon(tech.name)" :alt="tech.name" class="tech-tag-icon local-tech-icon">
                    <i v-else-if="hasAnyIcon(tech.name)" :class="getIconClass(tech.name)" class="tech-tag-icon"></i>
                    {{ tech.name }}
                  </span>
                  <span v-if="project.technologies.length > 5" class="tech-more-clean">
                    +{{ project.technologies.length - 5 }}
                  </span>
                </div>

                <div>
                <!-- Case Study Button -->
                <router-link
                  v-if="project.caseStudySlug"
                  :to="`/projects/${project.caseStudySlug}`"
                  class="btn-case-study"
                  @click.stop
                >
                  <i class="ri-article-line"></i>
                  {{ translations.view_case_study || 'View Case Study' }}
                </router-link>

                <!-- Single Action Button -->
                <button class="btn-view-clean" @click.stop="openProjectModal(project)">
                  {{ translations.view_details || 'View Details' }}
                </button>
                </div>

              </template>

              <!-- Show placeholder content for locked projects -->
              <template v-else>
                <h3 class="project-title-clean locked-title">{{ getLockedTitle(project) }}</h3>

                <!-- Generic Technologies -->
                <div class="project-technologies-clean">
                  <span class="tech-tag-clean locked-tech-clean">Technology Stack</span>
                  <span class="tech-tag-clean locked-tech-clean">Framework</span>
                  <span class="tech-tag-clean locked-tech-clean">Database</span>
                  <span class="tech-more-clean">+{{ Math.floor(Math.random() * 3) + 2 }}</span>
                </div>

                <!-- Locked Action -->
                <button class="btn-view-clean locked-btn-clean" @click.stop="showUnlockTerminal">
                  <i class="ri-lock-line"></i>
                  Unlock to View
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Modern Project Modal -->
    <Transition name="modal">
      <div v-if="selectedProject" class="modern-modal-overlay" @click="closeProjectModal">
        <div class="modern-modal-container" @click.stop>

          <!-- Modal Header -->
          <div class="modern-modal-header">
            <div class="header-content">
              <div class="project-badges-modern">
                <template v-if="selectedProject.isPublic || isAccessValid">
                  <span class="badge-modern badge-status-modern" :class="getStatusClass(selectedProject.status)">
                    {{ selectedProject.status }}
                  </span>
                  <span class="badge-modern badge-type-modern" :class="getCategoryClass(selectedProject.category)">
                    {{ selectedProject.projectType }}
                  </span>
                  <span v-if="selectedProject.featured" class="badge-modern badge-featured-modern">
                    <i class="ri-star-fill"></i>
                    {{ translations.highlight || 'Destaque' }}
                  </span>
                </template>
                <template v-else>
                  <span class="badge-modern badge-locked-modern">🔒 Professional</span>
                  <span class="badge-modern badge-restricted-modern">Restricted</span>
                </template>
              </div>
              <h2 class="modern-modal-title">{{ selectedProject.isPublic || isAccessValid ? selectedProject.projectName : getLockedTitle(selectedProject) }}</h2>
            </div>
            <button class="modern-modal-close" @click="closeProjectModal">
              <i class="ri-close-line"></i>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="modern-modal-content">
            <template v-if="selectedProject.isPublic || isAccessValid">

              <!-- Left Side - Images -->
              <div class="images-section">
                <div class="main-image-container">
                  <!-- Main Image -->
                  <div class="main-image-wrapper">
                    <div class="main-image-display">
                      <img
                        :src="getCurrentImage().src"
                        :alt="getCurrentImage().alt"
                        class="main-project-image"
                        @click="showImagePreview = true"
                        @error="handleImageError"
                        title="Clique para ampliar"
                      />

                      <!-- Navigation Arrows -->
                      <div class="image-navigation-modern" v-if="selectedProject.gallery.length > 1">
                        <button
                          @click="previousImage"
                          class="nav-btn-modern nav-btn-left"
                          :disabled="currentImageIndex === 0"
                        >
                          <i class="ri-arrow-left-s-line"></i>
                        </button>
                        <button
                          @click="nextImage"
                          class="nav-btn-modern nav-btn-right"
                          :disabled="currentImageIndex === selectedProject.gallery.length - 1"
                        >
                          <i class="ri-arrow-right-s-line"></i>
                        </button>
                      </div>

                      <!-- Image Counter -->
                      <div class="image-counter-modern" v-if="selectedProject.gallery.length > 1">
                        {{ currentImageIndex + 1 }} / {{ selectedProject.gallery.length }}
                      </div>
                    </div>
                  </div>

                  <!-- Thumbnail Gallery -->
                  <div class="thumbnails-modern" v-if="selectedProject.gallery.length > 1">
                    <div
                      v-for="(image, index) in selectedProject.gallery"
                      :key="index"
                      class="thumbnail-modern"
                      :class="{ 'thumbnail-active': index === currentImageIndex }"
                      @click="currentImageIndex = index"
                    >
                      <img :src="image.src" :alt="image.alt" class="thumbnail-image" @error="handleImageError" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Side - Content -->
              <div class="content-section">
                <div class="content-scroll">
                  <!-- Project Description -->
                  <div class="description-section">
                    <h3 class="section-title-modern">
                      <div class="title-accent"></div>
                      {{ translations.about_project || 'Sobre o Projeto' }}
                    </h3>
                    <div class="description-content">
                      <p>{{ selectedProject.projectDescription }}</p>
                    </div>

                    <!-- Professional Project Disclaimer -->
                    <div v-if="selectedProject.category === 'professional'" class="professional-disclaimer">
                      <div class="disclaimer-header">
                        <i class="ri-building-line"></i>
                        <h4>{{ translations.professional_disclaimer_title || 'Propriedade Intelectual' }}</h4>
                      </div>
                      <div class="disclaimer-content">
                        <p>{{ translations.professional_disclaimer_text || 'Este projeto é propriedade total da empresa onde foi desenvolvido durante o meu período de colaboração como funcionário. Está presente no meu portfólio exclusivamente para demonstrar as minhas competências técnicas e experiência profissional adquirida.' }}</p>
                        <p class="disclaimer-note">
                          <i class="ri-information-line"></i>
                          {{ translations.professional_disclaimer_note || 'Nota: Toda a propriedade intelectual, código e assets pertencem integralmente à empresa empregadora.' }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Technologies -->
                  <div class="technologies-section">
                    <h3 class="section-title-modern">
                      <div class="title-accent"></div>
                      {{ translations.technologies_used || 'Tecnologias Utilizadas' }}
                    </h3>
                    <div class="tech-grid-modern">
                      <div
                        v-for="(tech, idx) in selectedProject.technologies"
                        :key="idx"
                        class="tech-card-modern"
                        :title="tech.name"
                      >
                        <div v-if="hasAnyIcon(tech.name)" class="tech-icon-modern">
                          <img v-if="hasLocalIcon(tech.name)" :src="getLocalIcon(tech.name)" :alt="tech.name" :title="tech.name" class="local-tech-icon">
                          <i v-else :class="getIconClass(tech.name)" :title="tech.name"></i>
                        </div>
                        <span class="tech-name-modern">{{ tech.name }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Project Links -->
                  <div class="links-section" v-if="selectedProject.githubLink || selectedProject.websiteLink">
                    <h3 class="section-title-modern">
                      <div class="title-accent"></div>
                      {{ translations.project_links || 'Links do Projeto' }}
                    </h3>
                    <div class="links-grid">
                      <a
                        v-if="selectedProject.githubLink"
                        :href="selectedProject.githubLink"
                        target="_blank"
                        class="link-btn-modern github-btn"
                      >
                        <i class="ri-github-line"></i>
                        {{ translations.repository || 'Repositório' }}
                      </a>
                      <a
                        v-if="selectedProject.websiteLink"
                        :href="selectedProject.websiteLink"
                        target="_blank"
                        class="link-btn-modern website-btn"
                      >
                        <i class="ri-external-link-line"></i>
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </template>

            <!-- Locked Project Content -->
            <template v-else>
              <div class="images-section locked-section">
                <div class="main-image-container">
                  <div class="main-image-wrapper">
                    <div class="locked-image-display">
                      <div class="locked-content">
                        <i class="ri-lock-line"></i>
                        <span>Acesso Requerido</span>
                        <p>Projeto comercial requer autenticação</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-section">
                <div class="content-scroll">
                  <div class="description-section">
                    <h3 class="section-title-modern">
                      <div class="title-accent"></div>
                      {{ translations.about_project || 'Sobre o Projeto' }}
                    </h3>
                    <div class="description-content">
                      <p>{{ getLockedDescription(selectedProject) }}</p>
                    </div>

                    <div class="access-required-simple">
                      <div class="access-icon">
                        <i class="ri-lock-line"></i>
                      </div>
                      <h4>{{ translations.access_required_title || '🔐 Conteúdo Profissional Restrito' }}</h4>
                      <p>{{ translations.restricted_modal_description || 'Este conteúdo contém informação profissional confidencial e requer autorização prévia para acesso.' }}</p>
                      <button @click="showRestrictedAccessModal" class="access-details-btn">
                        <i class="ri-information-line"></i>
                        {{ translations.how_to_request || '📧 Como Solicitar Acesso' }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Image Preview Overlay -->
    <Transition name="image-preview">
      <div v-if="showImagePreview" class="image-preview-overlay" @click="showImagePreview = false">
        <div class="image-preview-container" @click.stop>
          <button class="preview-close" @click="showImagePreview = false">
            <i class="ri-close-line"></i>
          </button>

          <!-- Navigation arrows for preview -->
          <div class="preview-navigation" v-if="selectedProject.gallery.length > 1">
            <button
              @click="previousImagePreview"
              class="preview-nav-btn preview-nav-left"
              :disabled="currentImageIndex === 0"
            >
              <i class="ri-arrow-left-s-line"></i>
            </button>
            <button
              @click="nextImagePreview"
              class="preview-nav-btn preview-nav-right"
              :disabled="currentImageIndex === selectedProject.gallery.length - 1"
            >
              <i class="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <img
            :src="getCurrentImage().src"
            :alt="getCurrentImage().alt"
            class="preview-image"
            @error="handleImageError"
          />

          <!-- Image counter for preview -->
          <div class="preview-counter" v-if="selectedProject.gallery.length > 1">
            {{ currentImageIndex + 1 }} / {{ selectedProject.gallery.length }}
          </div>

          <div class="preview-info">
            <h3>{{ getCurrentImage().title }}</h3>
            <p>{{ getCurrentImage().alt }}</p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Restricted Content Modal -->
    <RestrictedContentModal
      :visible="showRestrictedModal"
      :requestedContent="selectedProject ? selectedProject.projectName : ''"
      @close="closeRestrictedModal"
      @show-auth="handleShowAuth"
    />
  </div>
</template>

<script>
import { watch, computed } from 'vue'
import { useAccessControlSimple } from '../composables/useAccessControlSimple'
import { useProjects } from '../composables/useProjects'
import { useLanguage } from '../composables/useLanguage'
import RestrictedContentModal from '../components/RestrictedContentModal.vue'

export default {
    setup() {
      const { isAccessValid } = useAccessControlSimple()
      const { translations, selectedLanguage } = useLanguage()
      const {
        projects,
        loadProjects,
        projectsByCategory,
        totalProjectsCount,
        uniqueTechnologies,
        initializeProjects
      } = useProjects()

      // Watch for language changes and reload projects
      watch(selectedLanguage, async (newLanguage) => {
        await loadProjects(newLanguage)
      })

      // Computed properties for reactive translations
      const categoryFilters = computed(() => [
        {
          id: 'all',
          name: translations.filter_all || 'All',
          icon: 'ri-grid-line'
        },
        {
          id: 'personal',
          name: translations.filter_personal || 'Personal',
          icon: 'ri-user-line'
        },
        {
          id: 'professional',
          name: translations.filter_professional || 'Professional',
          icon: 'ri-building-line'
        }
      ])

      const statusFilters = computed(() => [
        {
          id: 'all',
          name: translations.filter_all || 'All',
          icon: 'ri-list-check-line'
        },
        {
          id: 'Completed',
          name: translations.filter_completed || 'Completed',
          icon: 'ri-checkbox-circle-line'
        },
        {
          id: 'In Development',
          name: translations.filter_in_development || 'In Development',
          icon: 'ri-loader-line'
        },
        {
          id: 'In Production',
          name: translations.filter_in_production || 'In Production',
          icon: 'ri-rocket-line'
        }
      ])

      return {
        isAccessValid,
        translations,
        selectedLanguage,
        projects,
        loadProjects,
        projectsByCategory,
        totalProjectsCount,
        uniqueTechnologies,
        initializeProjects,
        categoryFilters,
        statusFilters
      }
    },
    async mounted() {
      // Inicializar projetos dinâmicos
      await this.initializeProjects()

      const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
      if (selectedLanguage) {
        this.selectedLanguage = selectedLanguage;


        // Carregar projetos na língua correta
        await this.loadProjects(selectedLanguage)
      }
    },
  components: {
    RestrictedContentModal
  },
  data() {
    return {
      expressions: {},
      searchTerm: '',
      selectedProject: null,
      currentImageIndex: 0,
      showImagePreview: false,
      selectedCategory: 'all',
      selectedStatus: 'all',
      showFeaturedOnly: false,
      showRestrictedModal: false,
      mobileFiltersOpen: false,
    };
  },
  computed: {
    filteredProjects() {
      let projects = this.projects;

      // Filter by category if not showing all
      if (this.selectedCategory !== 'all') {
        projects = projects.filter(project => this.matchCategory(project.category, this.selectedCategory));
      }

      // Filter by status if not showing all
      if (this.selectedStatus !== 'all') {
        projects = projects.filter(project => this.matchStatus(project.status, this.selectedStatus));
      }

      // Filter by featured if enabled
      if (this.showFeaturedOnly) {
        projects = projects.filter(project => project.featured);
      }

      // Filter by search term if provided
      if (this.searchTerm) {
        const searchTermLowerCase = this.searchTerm.toLowerCase();
        projects = projects.filter(project => {
          const projectNameLowerCase = project.projectName.toLowerCase();
          return projectNameLowerCase.includes(searchTermLowerCase);
        });
      }

      return projects;
    },
    displayedProjects() {
      // Always show all filtered projects with visual protection
      return this.filteredProjects;
    },
    visibleProjectsCount() {
      return this.displayedProjects.length;
    },
    lockedProjectsCount() {
      return this.projects.filter(project => !project.isPublic).length;
    },
    hasLockedProjects() {
      return this.lockedProjectsCount > 0;
    }
  },
  methods: {
    getIconClass(techName) {
      // Mapeamento para DevIcons com classes colored
      const iconMap = {
        // Linguagens de programação
        'JavaScript': 'devicon-javascript-plain colored',
        'TypeScript': 'devicon-typescript-plain colored',
        'Python': 'devicon-python-plain colored',
        'Java': 'devicon-java-plain colored',
        'C++': 'devicon-cplusplus-plain colored',
        'C#': 'devicon-csharp-plain colored',
        'C': 'devicon-c-plain colored',
        'C Programming': 'devicon-c-plain colored',
        'PHP': 'devicon-php-plain colored',
        'Ruby': 'devicon-ruby-plain colored',
        'Go': 'devicon-go-plain colored',
        'Rust': 'devicon-rust-plain colored',
        'Swift': 'devicon-swift-plain colored',
        'Kotlin': 'devicon-kotlin-plain colored',
        'Dart': 'devicon-dart-plain colored',

        // Frontend
        'Html5': 'devicon-html5-plain colored',
        'HTML5': 'devicon-html5-plain colored',
        'Css3': 'devicon-css3-plain colored',
        'CSS3': 'devicon-css3-plain colored',
        'VueJs': 'devicon-vuejs-plain colored',
        'Vue.js': 'devicon-vuejs-plain colored',
        'ReactJs': 'devicon-react-original colored',
        'React': 'devicon-react-original colored',
        'Angular': 'devicon-angularjs-plain colored',
        'Svelte': 'devicon-svelte-plain colored',
        'jQuery': 'devicon-jquery-plain colored',
        'Bootstrap': 'devicon-bootstrap-plain colored',
        'TailwindCSS': 'devicon-tailwindcss-plain colored',
        'Sass': 'devicon-sass-original colored',
        'Less': 'devicon-less-plain-wordmark colored',

        // Backend & Runtime
        'Node.js': 'devicon-nodejs-plain colored',
        'Express': 'devicon-express-original colored',
        'Express.js': 'devicon-express-original colored',
        'ExpressJS': 'devicon-express-original colored',
        'NextJS': 'devicon-nextjs-original colored',
        'NuxtJS': 'devicon-nuxtjs-plain colored',
        'Django': 'devicon-django-plain colored',
        'Flask': 'devicon-flask-original colored',
        'Laravel': 'devicon-laravel-plain colored',
        'Spring': 'devicon-spring-plain colored',
        'Ejs': 'devicon-nodejs-plain colored', // Fallback para EJS

        // ORM/ODM
        'TypeORM': 'devicon-sequelize-plain colored', // Fallback melhor para TypeORM
        'Prisma': 'devicon-prisma-original colored',
        'Sequelize': 'devicon-sequelize-plain colored',

        // Mobile
        'Android': 'devicon-android-plain colored',
        'iOS': 'devicon-apple-original colored',
        'React Native': 'devicon-react-original colored',
        'Flutter': 'devicon-flutter-plain colored',
        'Ionic': 'devicon-ionic-original colored',

        // Databases
        'MySQL': 'devicon-mysql-plain colored',
        'PostgreSQL': 'devicon-postgresql-plain colored',
        'SQL Server': 'devicon-microsoftsqlserver-plain colored',
        'MongoDB': 'devicon-mongodb-plain colored',
        'SQLite': 'devicon-sqlite-plain colored',
        'Redis': 'devicon-redis-plain colored',
        'Firebase': 'devicon-firebase-plain colored',
        'Supabase': 'devicon-supabase-plain colored',

        // Tools & DevOps
        'Git': 'devicon-git-plain colored',
        'GitHub': 'devicon-github-original colored',
        'GitLab': 'devicon-gitlab-plain colored',
        'Docker': 'devicon-docker-plain colored',
        'Kubernetes': 'devicon-kubernetes-plain colored',
        'AWS': 'devicon-amazonwebservices-original colored',
        'Azure': 'devicon-azure-plain colored',
        'GoogleCloud': 'devicon-googlecloud-plain colored',

        // Build Tools
        'Webpack': 'devicon-webpack-plain colored',
        'Vite': 'devicon-vite-original colored',
        'Gulp': 'devicon-gulp-plain colored',
        'Grunt': 'devicon-grunt-line colored',
        'Rollup': 'devicon-rollup-original colored',
        'Parcel': 'devicon-parcel-plain colored',
        'InnoSetup': 'devicon-windows8-original colored', // Fallback para InnoSetup

        // Testing
        'Jest': 'devicon-jest-plain colored',
        'Cypress': 'devicon-cypressio-plain colored',
        'Mocha': 'devicon-mocha-plain colored',

        // Trading/Finance (usando ícones alternativos)
        'Indicadores Trade': 'devicon-python-plain colored', // Fallback
        'Trading': 'devicon-python-plain colored', // Fallback

        // Others
        'GraphQL': 'devicon-graphql-plain colored',
        'RESTful API': 'devicon-fastapi-plain colored', // Fallback para REST API
        'REST API': 'devicon-fastapi-plain colored', // Fallback para REST API
        'Linux': 'devicon-linux-plain colored',
        'Linux Embedded': 'devicon-linux-plain colored',
        'Ubuntu': 'devicon-ubuntu-plain colored',
        'VSCode': 'devicon-vscode-plain colored',
        'Figma': 'devicon-figma-plain colored',
        'Photoshop': 'devicon-photoshop-plain colored',
        'Jira': 'devicon-jira-plain colored',
        'Confluence': 'devicon-confluence-original colored',

        // APIs & Authentication
        'Binance API': 'devicon-bitcoin-original colored', // Fallback para crypto APIs
        'JWT Authentication': 'devicon-nodejs-plain colored', // Fallback para JWT

        // Embedded & IoT
        'MQTT Protocol': 'devicon-raspberrypi-line colored', // Melhor para MQTT/IoT
        'CCTalk Protocol': 'devicon-c-plain colored', // Fallback para protocolos binários
        'EID003 Protocol': 'devicon-c-plain colored', // Fallback para protocolos binários
        'Embedded Systems': 'devicon-raspberrypi-line colored', // Melhor para embedded
        'IoT Communication': 'devicon-raspberrypi-line colored', // Melhor para IoT
        'Real-time Systems': 'devicon-c-plain colored' // Fallback para real-time
      };

      // Buscar a classe do ícone no mapeamento
      const iconClass = iconMap[techName];

      if (iconClass) {
        return iconClass;
      } else {
        // Fallback: tentar o nome em lowercase
        const fallbackName = techName.toLowerCase().replace(/\s+/g, '').replace('.', '');
        console.warn(`Icon not mapped for "${techName}", trying fallback: devicon-${fallbackName}-plain colored`);
        return `devicon-${fallbackName}-plain colored`;
      }
    },

    hasLocalIcon(techName) {
      // Lista de tecnologias que têm ícones locais específicos
      const localIcons = [
        'MQTT Protocol',
        'IoT Communication',
        'C Programming',
        'CCTalk Protocol',
        'EID003 Protocol',
        'Embedded Systems',
        'Express.js',
        'Vite',
        'Binance API',
        'TypeORM',
        'HTML5',
        'CSS3',
        'JavaScript ES6+'
      ]
      return localIcons.includes(techName)
    },

    getLocalIcon(techName) {
      // Mapeamento para ícones locais
      const localIconMap = {
        'MQTT Protocol': require('../assets/icons/mqtt-icon-solid.svg'),
        'IoT Communication': require('../assets/icons/iot.svg'),
        'C Programming': require('../assets/icons/c-programming.svg'),
        'CCTalk Protocol': require('../assets/icons/binary-svgrepo-com.svg'),
        'EID003 Protocol': require('../assets/icons/binary-svgrepo-com.svg'),
        'Embedded Systems': require('../assets/icons/memory.svg'),
        'Express.js': require('../assets/icons/express-js.svg'),
        'Vite': require('../assets/icons/vite.svg'),
        'Binance API': require('../assets/icons/icons-black/binance.svg'),
        'TypeORM': require('../assets/icons/Typeorm--Streamline-Simple-Icons.svg'),
        'HTML5': require('../assets/icons/w3_html5-icon.svg'),
        'CSS3': require('../assets/icons/w3_css-icon.svg'),
        'JavaScript ES6+': require('../assets/icons/javascript.svg')
      }
      return localIconMap[techName]
    },

    matchCategory(projectCategory, filterCategory) {
      // Agora ambos os arquivos usam valores em inglês, comparação direta
      return projectCategory === filterCategory
    },

    matchStatus(projectStatus, filterStatus) {
      // Agora ambos os arquivos usam valores em inglês, comparação direta
      return projectStatus === filterStatus
    },

    hasAnyIcon(techName) {
      // Verifica se tem ícone local
      if (this.hasLocalIcon(techName)) {
        return true
      }

      // Verifica se tem DevIcon mapeado
      const iconMap = {
        // Linguagens de programação
        'JavaScript': true,
        'TypeScript': true,
        'Python': true,
        'Java': true,
        'C++': true,
        'C#': true,
        'C': true,
        'PHP': true,
        'Ruby': true,
        'Go': true,
        'Rust': true,
        'Swift': true,
        'Kotlin': true,
        'Dart': true,

        // Frontend
        'Vue.js': true,
        'React': true,
        'Angular': true,
        'Svelte': true,
        'jQuery': true,
        'Bootstrap': true,
        'TailwindCSS': true,
        'Sass': true,
        'Less': true,

        // Backend & Runtime
        'Node.js': true,
        'Express': true,
        'NextJS': true,
        'NuxtJS': true,
        'Django': true,
        'Flask': true,
        'Laravel': true,
        'Spring': true,

        // Databases
        'MySQL': true,
        'PostgreSQL': true,
        'SQL Server': true,
        'MongoDB': true,
        'SQLite': true,
        'Redis': true,
        'Firebase': true,
        'Supabase': true,

        // Tools & DevOps
        'Git': true,
        'GitHub': true,
        'GitLab': true,
        'Docker': true,
        'Kubernetes': true,
        'AWS': true,
        'Azure': true,
        'GoogleCloud': true,

        // Build Tools
        'Webpack': true,
        'Gulp': true,
        'Grunt': true,
        'Rollup': true,
        'Parcel': true,

        // Testing
        'Jest': true,
        'Cypress': true,
        'Mocha': true,

        // Others
        'GraphQL': true,
        'RESTful API': true,
        'REST API': true,
        'Linux': true,
        'Linux Embedded': true,
        'Ubuntu': true,
        'VSCode': true,
        'Figma': true,
        'Photoshop': true,
        'Jira': true,
        'Confluence': true,
        'Binance API': true,
        'JWT Authentication': true,
        'Socket.IO': true,
        'Real-time Systems': true
      }

      return iconMap[techName] || false
    },
    // Generate generic titles for locked projects
    getLockedTitle(project) {
      const projectIndex = this.projects.indexOf(project);
      const genericTitles = [
        "Enterprise Web Application",
        "Backend API System",
        "Frontend Dashboard",
        "Data Management Platform",
        "Real-time Analytics Tool",
        "Business Intelligence System",
        "Customer Portal",
        "Administrative Interface",
        "Integration Platform",
        "Workflow Management System"
      ];
      return genericTitles[projectIndex % genericTitles.length];
    },
    // Generate generic descriptions for locked projects
    getLockedDescription(project) {
      const projectIndex = this.projects.indexOf(project);
      const genericDescriptions = [
        "A comprehensive enterprise solution built with modern technologies and best practices.",
        "Scalable backend system designed for high-performance data processing and API management.",
        "Professional frontend application featuring responsive design and intuitive user experience.",
        "Advanced platform for data management, analysis, and business intelligence reporting.",
        "Real-time monitoring and analytics dashboard with interactive visualizations.",
        "Enterprise-grade system for business process automation and workflow optimization.",
        "Secure customer-facing portal with authentication and personalized features.",
        "Administrative interface for system management and configuration control.",
        "Integration platform connecting multiple services and third-party applications.",
        "Comprehensive workflow management system for enterprise operations."
      ];
      return genericDescriptions[projectIndex % genericDescriptions.length];
    },
    requestAccess() {
      // Redirecionar para página de contacto
      this.$router.push('/contact')
    },
    showUnlockTerminal() {
      // Encontrar e abrir o terminal
      const miniTerminal = document.querySelector('.terminal-toggle')
      if (miniTerminal) {
        // Scroll até o terminal
        miniTerminal.scrollIntoView({ behavior: 'smooth', block: 'center' })

        // Animação de destaque
        miniTerminal.style.animation = 'pulse 0.6s ease-in-out 3'

        // Abrir o terminal após a animação
        setTimeout(() => {
          miniTerminal.style.animation = ''
          miniTerminal.click()
        }, 1500)
      }
    },
    openProjectModal(project) {
      // Só abre modal se o projeto for público ou se tiver acesso válido
      if (project.isPublic || this.isAccessValid) {
        console.log('Opening project:', project.projectName, 'Category:', project.category);
        this.selectedProject = project;
        this.currentImageIndex = 0; // Reset image index
        document.body.style.overflow = 'hidden'; // Prevent scroll
      } else {
        // Se for projeto privado sem acesso, abrir terminal
        this.showUnlockTerminal();
      }
    },
    closeProjectModal() {
      this.selectedProject = null;
      this.currentImageIndex = 0;
      document.body.style.overflow = ''; // Restore scroll
    },
    getCurrentImage() {
      if (this.selectedProject && this.selectedProject.gallery) {
        return this.selectedProject.gallery[this.currentImageIndex] || this.selectedProject.gallery[0];
      }
      return { src: '', alt: '', title: '' };
    },
    nextImage() {
      if (this.selectedProject && this.selectedProject.gallery) {
        if (this.currentImageIndex < this.selectedProject.gallery.length - 1) {
          this.currentImageIndex++;
        }
      }
    },
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    // Navigation methods for image preview
    nextImagePreview() {
      if (this.selectedProject && this.selectedProject.gallery) {
        if (this.currentImageIndex < this.selectedProject.gallery.length - 1) {
          this.currentImageIndex++;
        }
      }
    },
    previousImagePreview() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    getStatusClass(status) {
      const classes = {
        'Completed': 'status-completed',
        'In Development': 'status-development',
        'In Progress': 'status-progress',
        'Planning': 'status-planning',
        'Restricted': 'status-restricted'
      };
      return classes[status] || 'status-default';
    },
    getCategoryProjects(categoryId) {
      if (categoryId === 'all') return this.projects;
      return this.projects.filter(project => project.category === categoryId);
    },
    getStatusProjects(statusId) {
      if (statusId === 'all') return this.projects;
      return this.projects.filter(project => project.status === statusId);
    },
    getFeaturedProjects() {
      return this.projects.filter(project => project.featured);
    },
    getCurrentCategory() {
      return this.categories.find(cat => cat.id === this.selectedCategory) || this.categories[0];
    },
    getCategoryClass(category) {
      const classes = {
        'personal': 'badge-personal',
        'commercial': 'badge-commercial',
        'academic': 'badge-academic',
        'games': 'badge-games'
      };
      return classes[category] || 'badge-default';
    },
    getCategoryName(category) {
      const names = {
        'personal': 'Personal',
        'commercial': 'Commercial',
        'academic': 'Academic',
        'games': 'Game'
      };
      return names[category] || 'Project';
    },
    handleImageError(event) {
      // Set fallback image when image fails to load
      event.target.src = require('@/data/projects/images/def.png');
    },
    showRestrictedAccessModal() {
      this.showRestrictedModal = true;
    },
    closeRestrictedModal() {
      this.showRestrictedModal = false;
    },
    handleShowAuth() {
      this.closeRestrictedModal();
      this.showUnlockTerminal();
    }
  },
  // Cleanup when component is destroyed
  beforeUnmount() {
    document.body.style.overflow = '';
  }
};
</script>
<style scoped>
/* ========================================
   PROJECTS PAGE - PROFESSIONAL DESIGN
======================================== */

/* Base Container */
.projects-page {
  min-height: 100vh;
  background: var(--color-bg-primary);
  background-image:
    radial-gradient(circle at 10% 20%, rgba(119, 167, 255, 0.18), transparent 35%),
    radial-gradient(circle at 85% 25%, rgba(74, 134, 232, 0.22), transparent 38%),
    radial-gradient(circle at 82% 78%, rgba(74, 134, 232, 0.16), transparent 45%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ========================================
   PROFESSIONAL COMPACT HEADER - MAX 90PX HEIGHT
======================================== */
.projects-hero-modern {
  background: linear-gradient(135deg, rgba(8, 12, 18, 0.95), rgba(6, 9, 14, 0.85));
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
}

.hero-layout-compact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 3rem;
}

/* Left Side - Title & Description */
.hero-content-compact {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
  max-width: 600px;
  text-align: left;
}

.hero-title-compact {
  font-size: clamp(2.6rem, 4vw, 3.8rem);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.15;
  margin: 0;
  text-align: left;
  font-family: var(--ff-heading);
}

.title-highlight-compact {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description-compact {
  font-size: 1.1rem;
  color: rgba(210, 217, 230, 0.8);
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

.theme-light .projects-hero-modern {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(238, 240, 244, 0.9));
  border-bottom-color: rgba(60, 100, 160, 0.15);
}

.theme-light .hero-title-compact {
  color: var(--color-bg-primary);
}

.theme-light .hero-description-compact {
  color: rgba(43, 58, 74, 0.75);
}

.theme-light .badge-status-modern {
  color: #0b1220;
  border-color: rgba(63, 118, 210, 0.15);
  background: rgba(255, 255, 255, 0.85);
}

.theme-light .badge-status-modern.status-development {
  background: rgba(74, 134, 232, 0.18);
  color: #0b1220;
  border-color: rgba(74, 134, 232, 0.3);
}

.theme-light .badge-status-modern.status-progress {
  background: rgba(255, 215, 0, 0.15);
  color: var(--color-bg-primary);
  border-color: rgba(255, 215, 0, 0.4);
}

.theme-light .badge-status-modern.status-planning,
.theme-light .badge-status-modern.status-default {
  background: rgba(63, 118, 210, 0.12);
  color: #0b1220;
  border-color: rgba(63, 118, 210, 0.25);
}

.theme-light .badge-status-modern.status-restricted {
  background: rgba(255, 99, 132, 0.18);
  color: var(--color-bg-primary);
  border-color: rgba(255, 99, 132, 0.35);
}

/* Right Side - Search & Filters */
.hero-controls-compact {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

/* Compact Search */
.search-compact {
  position: relative;
  display: flex;
  align-items: center;
}

.search-compact i {
  position: absolute;
  left: 0.8rem;
  color: var(--color-text);
  opacity: 0.6;
  font-size: 0.9rem;
  z-index: 2;
}

.search-input-compact {
  width: 200px;
  height: 32px;
  padding: 0 1rem 0 2.2rem;
  background: var(--color-bg-secondary);
  border: 1px solid rgba(195, 176, 145, 0.2);
  border-radius: 16px;
  color: var(--color-white);
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.search-input-compact:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(195, 176, 145, 0.1);
}

.search-input-compact::placeholder {
  color: var(--color-text);
  opacity: 0.6;
}

/* Compact Filters */
.filters-compact {
  display: flex;
  gap: 0.3rem;
}

.filter-btn-compact {
  position: relative;
  width: 32px;
  height: 32px;
  background: var(--color-bg-secondary);
  border: 1px solid rgba(195, 176, 145, 0.2);
  border-radius: 50%;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.filter-btn-compact:hover {
  border-color: var(--color-primary);
  background: rgba(195, 176, 145, 0.1);
  transform: translateY(-1px);
}

.filter-btn-compact.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg-primary);
  box-shadow: 0 2px 8px rgba(195, 176, 145, 0.3);
}

.filter-count-compact {
  position: absolute;
  top: -3px;
  right: -3px;
  background: var(--color-primary);
  color: var(--color-bg-primary);
  font-size: 0.6rem;
  font-weight: 600;
  min-width: 14px;
  height: 14px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-bg-primary);
}

.filter-btn-compact.active .filter-count-compact {
  background: var(--color-bg-primary);
  color: var(--color-primary);
}

/* ========================================
   ADVANCED FILTERS SECTION
======================================== */
.filters-section {
  background: var(--color-bg-primary);
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(195, 176, 145, 0.1);
}

/* Mobile toggle button — hidden on desktop */
.filters-mobile-toggle {
  display: none;
}

.filters-active-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
}

.filters-toggle-icon {
  margin-left: auto;
  font-size: 1.1rem;
}

.filters-inline {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.filter-group-inline {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.filter-group-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
  opacity: 0.8;
  flex-shrink: 0;
}

.filter-btn-modern {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.2rem;
  background: var(--color-bg-secondary);
  border: 1px solid rgba(195, 176, 145, 0.2);
  border-radius: 20px;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  font-weight: 500;
}

.filter-btn-modern:hover {
  border-color: var(--color-primary);
  background: rgba(195, 176, 145, 0.1);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(195, 176, 145, 0.2);
}

.filter-btn-modern.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg-primary);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(195, 176, 145, 0.3);
}

.theme-light .filter-btn-modern.active {
  color: var(--color-bg-primary);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-color: var(--color-primary);
}

.theme-light .filter-btn-modern {
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(43, 58, 74, 0.2);
  color: var(--color-text);
}

.theme-light .filter-btn-modern:hover {
  background: rgba(255, 255, 255, 1);
  color: var(--color-text);
  border-color: var(--color-primary);
}

.filter-btn-modern i {
  font-size: 1rem;
}

.filter-text {
  font-weight: 500;
}

.filter-count-modern {
  background: rgba(255, 255, 255, 0.15);
  color: inherit;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
}

/* Filter Type Variations */
.filter-btn-modern.status-filter.active {
  background: linear-gradient(135deg, rgba(74, 134, 232, 0.25), rgba(74, 134, 232, 0.08));
  border-color: rgba(74, 134, 232, 0.6);
  color: var(--color-primary);
  box-shadow: 0 10px 20px rgba(74, 134, 232, 0.25);
}

.filter-btn-modern.featured-filter.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-color: var(--color-primary);
  color: var(--color-bg-primary);
  box-shadow: 0 12px 24px rgba(74, 134, 232, 0.35);
}

.filter-btn-modern.status-filter:hover {
  border-color: rgba(0, 200, 150, 0.6);
  background: rgba(0, 200, 150, 0.1);
  color: var(--color-white);
}

.filter-btn-modern.featured-filter:hover {
  border-color: var(--color-primary);
  background: rgba(74, 134, 232, 0.15);
  min-width: 20px;
  text-align: center;
}

.filter-btn-modern.active .filter-count-modern {
  background: rgba(255, 255, 255, 0.2);
}

/* ========================================
   HERO SECTION
======================================== */
.projects-hero {
  background: linear-gradient(135deg, var(--color-bg-secondary), rgba(106, 90, 205, 0.05));
  padding: 8rem 0 4rem;
  text-align: center;
  border-bottom: 1px solid rgba(106, 90, 205, 0.1);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 3rem;
  opacity: 0.9;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.8;
}

/* ========================================
   CAREER JOURNEY SECTION
======================================== */
.career-journey {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(106, 90, 205, 0.02));
  border-bottom: 1px solid rgba(106, 90, 205, 0.1);
}

.journey-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-white);
  text-align: center;
  margin-bottom: 1rem;
}

.journey-subtitle {
  font-size: 1.2rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0.8;
}

.journey-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: var(--color-bg-secondary);
  border: 2px solid rgba(106, 90, 205, 0.2);
  border-radius: 15px;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tab-btn:hover {
  border-color: var(--color-primary);
  background: rgba(106, 90, 205, 0.1);
  transform: translateY(-2px);
}

.tab-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(106, 90, 205, 0.3);
}

.tab-btn i {
  font-size: 1.2rem;
}

.tab-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tab-btn.active .tab-count {
  background: rgba(255, 255, 255, 0.3);
}

/* ========================================
   CATEGORY HEADER
======================================== */
.category-header {
  padding: 3rem 0 2rem;
  background: var(--color-bg-primary);
}

.category-info {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.category-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-icon i {
  font-size: 2.5rem;
  color: white;
}

.category-details h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.5rem;
}

.category-details p {
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.9;
}

/* ========================================
   CONTROLS SECTION
======================================== */
.projects-controls {
  padding: 2rem 0;
  background: var(--color-bg-primary);
}

.search-container {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-container i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text);
  opacity: 0.6;
  font-size: 1.2rem;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: var(--color-bg-secondary);
  border: 2px solid transparent;
  border-radius: 50px;
  color: var(--color-white);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(106, 90, 205, 0.1);
}

.search-input::placeholder {
  color: var(--color-text);
  opacity: 0.6;
}

/* ========================================
   PROJECTS GRID
======================================== */
.projects-grid {
  padding: 2rem 0 6rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

/* ========================================
   PROJECT CARDS
======================================== */
.project-card {
  position: relative;
  background: linear-gradient(160deg, rgba(15, 18, 28, 0.95), rgba(10, 13, 20, 0.9));
  border-radius: 20px;
  overflow: hidden;
  transition: var(--transition);
  border: 1px solid rgba(74, 134, 232, 0.2);
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.65);
}

.project-card::before {
  content: "";
  position: absolute;
  inset: 6px;
  border-radius: 16px;
  border: 1px solid rgba(123, 176, 255, 0.2);
  pointer-events: none;
  opacity: 0.6;
}

/* Clean card hover effect - subtle like CV button */
.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-primary);
  box-shadow: 0 30px 55px rgba(74, 134, 232, 0.35);
}

.project-card.locked {
  filter: grayscale(20%);
  opacity: 0.8;
}

/* Locked project elements */
.locked-badge {
  background: rgba(255, 193, 7, 0.1) !important;
  color: var(--color-warning) !important;
  border: 1px solid rgba(255, 193, 7, 0.2);
}

.locked-tech {
  background: rgba(108, 117, 125, 0.1) !important;
  color: var(--color-muted) !important;
  border: 1px solid rgba(108, 117, 125, 0.2);
}

.locked-tech i {
  margin-right: 5px;
  opacity: 0.7;
}

.locked-btn {
  background: rgba(108, 117, 125, 0.1) !important;
  color: var(--color-muted) !important;
  border: 1px solid rgba(108, 117, 125, 0.2) !important;
  cursor: not-allowed;
  opacity: 0.6;
}

.locked-btn:hover {
  background: rgba(108, 117, 125, 0.2) !important;
  transform: none !important;
}

.locked-btn:disabled {
  pointer-events: none;
}

/* Locked modal styles */
.locked-modal {
  opacity: 0.8;
}

.locked-image {
  position: relative;
  background: rgba(108, 117, 125, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
}

.access-required {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--color-muted);
  font-size: 1.2rem;
  font-weight: 600;
}

.access-required i {
  font-size: 3rem;
  opacity: 0.5;
}

.locked-category {
  background: rgba(255, 193, 7, 0.1) !important;
  color: var(--color-warning) !important;
  border: 1px solid rgba(255, 193, 7, 0.2);
}

.access-info {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.2);
  border-radius: 8px;
}

.access-info p {
  margin: 5px 0;
  color: #856404;
}

.locked-technologies {
  opacity: 0.6;
}

.locked-tech-item {
  background: rgba(108, 117, 125, 0.1) !important;
  color: var(--color-muted) !important;
  border: 1px solid rgba(108, 117, 125, 0.2);
}

.locked-tech-item i {
  font-size: 1.2rem;
  margin-right: 8px;
}

.locked-tech-note {
  margin-top: 15px;
  font-style: italic;
  color: var(--color-muted);
  text-align: center;
}

/* Locked project image */
.locked-project-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(108, 117, 125, 0.1) 0%, rgba(108, 117, 125, 0.2) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  font-size: 1rem;
  font-weight: 600;
  gap: 10px;
}

.locked-project-image i {
  font-size: 2.5rem;
  opacity: 0.5;
}

.locked-overlay {
  background: rgba(108, 117, 125, 0.1) !important;
  color: var(--color-muted) !important;
}

.project-card.featured {
  border: 1px solid rgba(74, 134, 232, 0.4);
  box-shadow: 0 18px 40px rgba(74, 134, 232, 0.25);
}

.project-card.featured:hover {
  box-shadow: 0 25px 55px rgba(74, 134, 232, 0.3);
}

.theme-light .project-card {
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.96), rgba(241, 244, 248, 0.92));
  border-color: rgba(74, 134, 232, 0.12);
  box-shadow: 0 18px 40px rgba(15, 23, 33, 0.1);
}

.theme-light .project-card::before {
  border-color: rgba(74, 134, 232, 0.15);
  opacity: 0.9;
}

.theme-light .project-card.featured {
  border: 1px solid rgba(74, 134, 232, 0.25);
  box-shadow: 0 14px 30px rgba(74, 134, 232, 0.25);
}

.theme-light .project-card.featured:hover {
  box-shadow: 0 18px 36px rgba(74, 134, 232, 0.28);
}

/* Lock Overlay */
/* Lock overlay styles removed - using conditional rendering for security */

@keyframes pulse-gentle {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

/* Project Image */
.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(20, 28, 38, 0.9), rgba(10, 14, 20, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  filter: brightness(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.image-overlay i {
  font-size: 1.8rem;
  color: white;
  opacity: 0.9;
}

/* Featured Badge */
.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 5;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  animation: glow-featured 2s infinite alternate;
}

.featured-badge i {
  font-size: 0.9rem;
}

@keyframes glow-featured {
  0% { box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3); }
  100% { box-shadow: 0 4px 25px rgba(255, 215, 0, 0.5); }
}

/* Project Info */
.project-info {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 220px;
}

.project-category {
  margin-bottom: 1rem;
}

.category-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-personal {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

.badge-commercial {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
}

.badge-academic {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

.badge-games {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.badge-default {
  background: linear-gradient(135deg, var(--color-muted), #495057);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.project-description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

/* Technologies */
.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-tag {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  background: rgba(106, 90, 205, 0.1);
  border: 1px solid rgba(106, 90, 205, 0.3);
  border-radius: 15px;
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 500;
}

.tech-tag img {
  width: 16px;
  height: 16px;
}

.tech-more {
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.7;
}

/* Project Actions */
.project-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-view {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-view:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(106, 90, 205, 0.3);
}

.btn-github {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-github:hover {
  background: var(--color-text);
  color: var(--color-bg-primary);
  transform: translateY(-2px);
}

/* ========================================
   CLEAN PROJECT CARD STYLES
======================================== */
.project-title-clean {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0;
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.locked-title {
  color: var(--color-muted);
  opacity: 0.8;
}

/* Metrics Strip */
.project-metrics {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(74, 134, 232, 0.08);
  border: 1px solid rgba(74, 134, 232, 0.2);
  border-radius: 8px;
  padding: 0.35rem 0.65rem;
  min-width: 52px;
  text-align: center;
}

.metric-value {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.2;
}

.metric-label {
  font-size: 0.6rem;
  color: rgba(210, 217, 230, 0.65);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.2;
  white-space: nowrap;
}

.theme-light .metric-item {
  background: rgba(63, 118, 210, 0.07);
  border-color: rgba(63, 118, 210, 0.2);
}

.theme-light .metric-label {
  color: rgba(43, 58, 74, 0.6);
}

.project-technologies-clean {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.5rem 0;
}

.tech-tag-clean {
  padding: 0.3rem 0.7rem;
  background: rgba(74, 134, 232, 0.12);
  border: 1px solid rgba(74, 134, 232, 0.3);
  border-radius: 12px;
  color: var(--color-text);
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.tech-tag-icon {
  font-size: 10px;
  flex-shrink: 0;
}

.local-tech-icon {
  width: 12px;
  height: 12px;
  filter: brightness(1.1);
}

.locked-tech-clean {
  background: rgba(108, 117, 125, 0.1) !important;
  color: var(--color-muted) !important;
  border-color: rgba(108, 117, 125, 0.2) !important;
}

.tech-more-clean {
  padding: 0.3rem 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--color-text);
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.7;
}

.btn-view-clean {
  width: 100%;
  padding: 0.8rem 1rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.btn-view-clean:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(106, 90, 205, 0.3);
}

.theme-light .btn-view-clean {
  background: rgba(63, 118, 210, 0.12);
  color: var(--color-primary);
  border: 1px solid rgba(63, 118, 210, 0.45);
  box-shadow: none;
}

.theme-light .btn-view-clean:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: var(--color-bg-primary);
  box-shadow: 0 4px 15px rgba(63, 118, 210, 0.35);
}

.btn-case-study {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.7rem 1rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.btn-case-study:hover {
  background: linear-gradient(135deg, #ee5a6f, #ff6b6b);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  color: white;
}

.btn-case-study i {
  font-size: 1rem;
}

.locked-btn-clean {
  background: rgba(108, 117, 125, 0.2) !important;
  color: var(--color-muted) !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.locked-btn-clean:hover {
  background: rgba(108, 117, 125, 0.3) !important;
  transform: translateY(-1px);
}

/* ========================================
   MODERN PROJECT MODAL - INSPIRED BY REACT EXAMPLE
======================================== */

/* Modal Overlay */
.modern-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

/* Modal Container */
.modern-modal-container {
  position: relative;
  background: linear-gradient(135deg, var(--color-bg-secondary), rgba(195, 176, 145, 0.02));
  border-radius: 20px;
  max-width: 1200px;
  width: 100%;
  max-height: 85vh;
  border: 1px solid rgba(195, 176, 145, 0.2);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: modernModalSlideIn 0.3s ease-out;
}

@keyframes modernModalSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Modal Header */
.modern-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 2rem;
  background: var(--color-bg-primary);
  border-bottom: 1px solid rgba(195, 176, 145, 0.1);
  flex-shrink: 0;
}

.header-content {
  flex: 1;
}

.project-badges-modern {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.badge-modern {
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border: 1px solid transparent;
}

.badge-status-modern.status-completed {
  background: rgba(195, 176, 145, 0.2);
  color: var(--color-primary);
  border-color: rgba(195, 176, 145, 0.3);
}

.badge-status-modern.status-development {
  background: rgba(74, 134, 232, 0.2);
  color: #0b1220;
  border-color: rgba(74, 134, 232, 0.35);
}

.badge-status-modern.status-progress {
  background: rgba(255, 215, 0, 0.2);
  color: rgba(10, 13, 20, 0.95);
  border-color: rgba(255, 215, 0, 0.35);
}

.badge-status-modern.status-planning {
  background: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.25);
}

.badge-status-modern.status-restricted {
  background: rgba(255, 99, 132, 0.18);
  color: var(--color-white);
  border-color: rgba(255, 99, 132, 0.35);
}

.badge-status-modern.status-default {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.2);
}

.badge-type-modern {
  background: rgba(195, 176, 145, 0.1);
  color: var(--color-text);
  border-color: rgba(195, 176, 145, 0.2);
}

.badge-featured-modern {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: var(--color-bg-primary);
  border: none;
}

.badge-locked-modern,
.badge-restricted-modern {
  background: rgba(139, 122, 94, 0.1);
  color: var(--color-primary-dark);
  border-color: rgba(139, 122, 94, 0.2);
}

.modern-modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0;
  line-height: 1.3;
}

.modern-modal-close {
  width: 36px;
  height: 36px;
  background: rgba(195, 176, 145, 0.1);
  border: 1px solid rgba(195, 176, 145, 0.2);
  border-radius: 50%;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.modern-modal-close:hover {
  background: rgba(195, 176, 145, 0.2);
  color: var(--color-white);
  transform: scale(1.1);
  border-color: var(--color-primary);
}

.theme-light .modern-modal-overlay {
  background: rgba(30, 38, 52, 0.65);
}

.theme-light .modern-modal-container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(247, 249, 252, 0.9));
  border-color: rgba(74, 134, 232, 0.2);
  box-shadow: 0 18px 55px rgba(15, 23, 33, 0.12);
}

.theme-light .modern-modal-header {
  background: rgba(255, 255, 255, 0.9);
  border-bottom-color: rgba(74, 134, 232, 0.2);
}

.theme-light .modern-modal-title {
  color: var(--color-bg-primary);
}

.theme-light .modern-modal-close {
  background: rgba(63, 118, 210, 0.1);
  border-color: rgba(63, 118, 210, 0.3);
  color: var(--color-primary);
}

.theme-light .modern-modal-close:hover {
  background: rgba(63, 118, 210, 0.2);
  color: var(--color-bg-primary);
}

/* Modal Content Layout */
.modern-modal-content {
  flex: 1;
  display: flex;
  max-height: calc(85vh - 120px);
  overflow: hidden;
}

/* Images Section (Left Side) */
.images-section {
  width: 40%;
  padding: 1.5rem;
  border-right: 1px solid rgba(195, 176, 145, 0.1);
  display: flex;
  flex-direction: column;
}

.main-image-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image-wrapper {
  flex: 1;
}

.main-image-display {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(195, 176, 145, 0.05));
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(195, 176, 145, 0.1);
}

.main-project-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  cursor: zoom-in;
}

.main-project-image:hover {
  transform: scale(1.02);
}

/* Navigation Arrows */
.image-navigation-modern {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
}

.nav-btn-modern {
  width: 32px;
  height: 32px;
  background: rgba(195, 176, 145, 0.9);
  border: 1px solid rgba(195, 176, 145, 0.3);
  border-radius: 50%;
  color: var(--color-bg-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  pointer-events: auto;
  backdrop-filter: blur(10px);
}

.nav-btn-modern:hover:not(:disabled) {
  background: var(--color-primary);
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(195, 176, 145, 0.3);
}

.nav-btn-modern:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Image Counter */
.image-counter-modern {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(195, 176, 145, 0.9);
  color: var(--color-bg-primary);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(195, 176, 145, 0.3);
}

/* Thumbnails */
.thumbnails-modern {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  /* Hide scrollbar for webkit browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.thumbnails-modern::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.thumbnail-modern {
  flex-shrink: 0;
  width: 64px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(195, 176, 145, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbnail-modern.thumbnail-active {
  border-color: var(--color-primary);
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(195, 176, 145, 0.3);
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thumbnail-modern:hover .thumbnail-image {
  transform: scale(1.1);
}

.thumbnail-modern:hover {
  border-color: rgba(195, 176, 145, 0.5);
}

/* Content Section (Right Side) */
.content-section {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.content-scroll {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Section Titles */
.section-title-modern {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 1rem;
}

.title-accent {
  width: 4px;
  height: 24px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: 2px;
}

/* Description Section */
.description-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.description-content {
  background: rgba(195, 176, 145, 0.05);
  border: 1px solid rgba(195, 176, 145, 0.1);
  border-radius: 12px;
  padding: 1.2rem;
}

.description-content p {
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* Professional Project Disclaimer */
.professional-disclaimer {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 152, 0, 0.1) 100%);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 12px;
  padding: 1.2rem;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.professional-disclaimer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--color-warning), var(--color-warning-dark));
}

.disclaimer-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--color-warning-dark);
}

.disclaimer-header i {
  font-size: 1.25rem;
  color: var(--color-warning-dark);
}

.disclaimer-header h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
}

.disclaimer-content p {
  color: var(--color-text);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 0.75rem 0;
}

.disclaimer-content p:last-child {
  margin-bottom: 0;
}

.disclaimer-note {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-style: italic;
  font-size: 0.85rem !important;
  color: rgba(var(--color-text-rgb), 0.8) !important;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.75rem;
  border-radius: 8px;
  margin-top: 0.75rem !important;
}

.disclaimer-note i {
  font-size: 1rem;
  color: var(--color-warning-dark);
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.theme-light .professional-disclaimer {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(63, 118, 210, 0.2);
  box-shadow: 0 10px 25px rgba(43, 58, 74, 0.12);
}

.theme-light .professional-disclaimer::before {
  background: linear-gradient(180deg, var(--color-primary), var(--color-primary-dark));
}

.theme-light .disclaimer-header,
.theme-light .disclaimer-header h4,
.theme-light .disclaimer-content p,
.theme-light .disclaimer-note {
  color: #0b1220;
}

.theme-light .disclaimer-note {
  background: rgba(74, 134, 232, 0.08);
  color: #0b1220 !important;
}

.theme-light .disclaimer-note i {
  color: var(--color-primary-dark);
}

/* Modal secondary button in lightmode */
.theme-light .btn-secondary {
  border-color: rgba(63, 118, 210, 0.3);
  color: var(--color-text);
}
.theme-light .btn-secondary:hover {
  background: rgba(63, 118, 210, 0.08);
  border-color: var(--color-primary);
  color: var(--color-text);
}

/* Technologies Section */
.technologies-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-grid-modern {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.8rem;
}

.tech-card-modern {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: rgba(195, 176, 145, 0.05);
  border: 1px solid rgba(195, 176, 145, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-card-modern:hover {
  background: rgba(195, 176, 145, 0.1);
  border-color: rgba(195, 176, 145, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(195, 176, 145, 0.1);
}

.tech-icon-modern {
  width: 20px;
  height: 20px;
  background: rgba(195, 176, 145, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tech-icon-modern i {
  font-size: 14px;
  transition: all 0.3s ease;
}

.tech-name-modern {
  color: var(--color-text);
  font-size: 0.85rem;
  font-weight: 500;
}

.tech-card-modern:hover .tech-name-modern {
  color: var(--color-white);
}

/* Links Section */
.links-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.links-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.link-btn-modern {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.5rem;
  background: rgba(195, 176, 145, 0.1);
  color: var(--color-text);
  text-decoration: none;
  border: 1px solid rgba(195, 176, 145, 0.2);
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.link-btn-modern:hover {
  background: rgba(195, 176, 145, 0.2);
  color: var(--color-white);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(195, 176, 145, 0.3);
}

.github-btn:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: var(--color-bg-primary);
}

.website-btn:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: var(--color-bg-primary);
}

/* Locked Content Styles */
.locked-section {
  opacity: 0.6;
}

.locked-image-display {
  background: linear-gradient(135deg, rgba(139, 122, 94, 0.1), rgba(139, 122, 94, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.locked-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--color-primary-dark);
  text-align: center;
}

.locked-content i {
  font-size: 3rem;
  opacity: 0.5;
}

.locked-content span {
  font-size: 1.2rem;
  font-weight: 600;
}

.locked-content p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
}

/* Access Required Modern */
.access-required-modern {
  background: linear-gradient(135deg, rgba(195, 176, 145, 0.08) 0%, rgba(195, 176, 145, 0.03) 100%);
  border: 2px solid rgba(195, 176, 145, 0.25);
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.access-required-modern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), #c3b091);
}

.access-header-modern {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.access-header-modern i {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.access-titles h4 {
  color: var(--color-text);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
}

.access-subtitle {
  color: var(--color-primary);
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0;
  opacity: 0.9;
}

.access-description {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.2rem;
}

.access-description p {
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  opacity: 0.8;
}

.access-instructions {
  margin-bottom: 1.5rem;
}

.access-instructions h5 {
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.access-instructions ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.access-instructions li {
  color: var(--color-text);
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.6rem;
  padding-left: 1.5rem;
  position: relative;
}

.access-instructions li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.access-actions {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.request-access-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #c3b091 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.request-access-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(195, 176, 145, 0.3);
  text-decoration: none;
  color: white;
}

.request-access-btn i {
  font-size: 1.1rem;
}

.unlock-btn-modern {
  width: 100%;
  padding: 0.8rem 1.5rem;
  background: rgba(195, 176, 145, 0.1);
  border: 2px solid rgba(195, 176, 145, 0.3);
  color: var(--color-text);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 0.9rem;
}

.unlock-btn-modern:hover {
  background: rgba(195, 176, 145, 0.15);
  border-color: var(--color-primary);
}

.unlock-btn-modern:hover {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(195, 176, 145, 0.3);
}







/* Simplified Access Required */
.access-required-simple {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(195, 176, 145, 0.08) 0%, rgba(195, 176, 145, 0.03) 100%);
  border: 2px solid rgba(195, 176, 145, 0.15);
  border-radius: 16px;
  margin-top: 1rem;
}

.access-icon {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    text-shadow: 0 0 20px var(--color-primary);
  }
  50% {
    text-shadow: 0 0 30px var(--color-primary), 0 0 40px var(--color-primary);
  }
}

.access-required-simple h4 {
  color: var(--color-text);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.access-required-simple p {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.access-details-btn {
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
}

.access-details-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(195, 176, 145, 0.3);
}

/* Modal Header */
.modal-header {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.modal-image {
  border-radius: 15px;
  overflow: hidden;
  height: 200px;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-category {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.modal-description {
  color: var(--color-text);
  font-size: 1.4rem;
  line-height: 1.6;
  opacity: 0.9;
}

/* Technologies Grid */
.modal-technologies {
  margin-bottom: 3rem;
}

.modal-technologies h3 {
  color: var(--color-white);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(106, 90, 205, 0.1);
  border: 1px solid rgba(106, 90, 205, 0.3);
  border-radius: 10px;
  text-align: center;
}

.tech-item img {
  width: 32px;
  height: 32px;
}

.tech-item span {
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
}

/* Modal Details */
.modal-details {
  margin-bottom: 3rem;
}

.modal-details h3 {
  color: var(--color-white);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.details-grid {
  display: grid;
  gap: 1rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.detail-label {
  color: var(--color-text);
  font-weight: 500;
}

.detail-value {
  color: var(--color-white);
  font-weight: 600;
}

/* Modal Actions */
.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(106, 90, 205, 0.3);
}

.btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--color-text);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.3);
}

/* ========================================
   IMAGE PREVIEW OVERLAY
======================================== */
.clickable-image {
  cursor: zoom-in;
}

.clickable-image:hover {
  filter: brightness(1.1);
}

.image-preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.image-preview-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.preview-close {
  position: absolute;
  top: -3rem;
  right: 0;
  width: 40px;
  height: 40px;
  background: rgba(195, 176, 145, 0.2);
  border: 1px solid rgba(195, 176, 145, 0.3);
  border-radius: 50%;
  color: var(--color-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
}

.preview-close:hover {
  background: rgba(195, 176, 145, 0.3);
  color: var(--color-white);
  transform: scale(1.1);
  border-color: var(--color-primary);
}

/* Preview Navigation */
.preview-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  pointer-events: none;
  z-index: 10;
}

.preview-nav-btn {
  width: 50px;
  height: 50px;
  background: rgba(195, 176, 145, 0.9);
  border: 1px solid rgba(195, 176, 145, 0.3);
  border-radius: 50%;
  color: var(--color-bg-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  pointer-events: auto;
  backdrop-filter: blur(10px);
}

.preview-nav-btn:hover:not(:disabled) {
  background: var(--color-primary);
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(195, 176, 145, 0.4);
}

.preview-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.preview-nav-btn:disabled:hover {
  transform: none;
  box-shadow: none;
}

.preview-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
}

/* Preview Counter */
.preview-counter {
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(195, 176, 145, 0.9);
  color: var(--color-bg-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(195, 176, 145, 0.3);
}

.preview-info {
  text-align: center;
  color: white;
  max-width: 600px;
}

.preview-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.preview-info p {
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
}

/* ========================================
   MODAL TRANSITIONS
======================================== */
.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.image-preview-enter-active, .image-preview-leave-active {
  transition: all 0.3s ease;
}

.image-preview-enter-from, .image-preview-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* ========================================
   RESPONSIVE DESIGN
======================================== */

/* Professional Header Responsive */
@media (max-width: 1024px) {
  .hero-layout-compact {
    gap: 2rem;
  }

  .hero-title-compact {
    font-size: 2.1rem;
  }

  .search-input-compact {
    width: 180px;
  }
}

@media (max-width: 768px) {
  .projects-hero-modern {
    max-height: none;
    padding: 1rem 0;
  }

  .hero-layout-compact {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .hero-content-compact {
    width: 100%;
    max-width: none;
  }

  .hero-title-compact {
    font-size: 2rem;
  }

  .hero-description-compact {
    font-size: 0.85rem;
  }

  .hero-controls-compact {
    width: 100%;
    justify-content: space-between;
  }

  .search-input-compact {
    width: 160px;
    height: 30px;
    font-size: 0.75rem;
  }

  .filter-btn-compact {
    width: 30px;
    height: 30px;
    font-size: 0.75rem;
  }

  /* Advanced Filters — collapsible on mobile */
  .filters-mobile-toggle {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: var(--color-text);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .filters-mobile-toggle:hover {
    background: rgba(255, 255, 255, 0.09);
  }

  .theme-light .filters-mobile-toggle {
    background: rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.1);
    color: var(--color-bg-primary);
  }

  .filters-inline {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 1rem;
  }

  .filters-inline.filters-mobile-open {
    display: flex;
  }

  .filter-group-inline {
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;
  }

  .filter-group-label {
    font-size: 0.8rem;
    width: 100%;
    margin-bottom: 0.3rem;
  }

  .filter-btn-modern {
    font-size: 0.75rem;
    padding: 0.5rem 0.8rem;
  }

  .filter-count-compact {
    font-size: 0.55rem;
    min-width: 12px;
    height: 12px;
  }

  .filters-layout {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .filters-buttons {
    gap: 0.6rem;
  }
}

@media (max-width: 640px) {
  .hero-title-compact {
    font-size: 1.7rem;
  }

  .hero-description-compact {
    font-size: 0.8rem;
  }

  .hero-controls-compact {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
    width: 100%;
  }

  .search-compact {
    width: 100%;
  }

  .search-input-compact {
    width: 100%;
    flex: 1;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .journey-title {
    font-size: 2rem;
  }

  .journey-tabs {
    gap: 0.5rem;
  }

  .tab-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .tab-btn span:not(.tab-count) {
    display: none;
  }

  .category-info {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .category-icon {
    width: 60px;
    height: 60px;
  }

  .category-icon i {
    font-size: 2rem;
  }

  .category-details h3 {
    font-size: 1.5rem;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.2rem;
  }

  .project-info {
    height: 160px;
    padding: 1.2rem;
  }

  .project-title-clean {
    font-size: 1.1rem;
  }

  .tech-tag-clean {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }

  .tech-tag-icon {
    font-size: 9px;
  }

  /* Modern Modal Responsive */
  .modern-modal-container {
    max-height: 95vh;
    max-width: 95vw;
    flex-direction: column;
  }

  .modern-modal-header {
    padding: 1.2rem 1.5rem;
  }

  .modern-modal-title {
    font-size: 1.5rem;
  }

  .badge-modern {
    font-size: 0.65rem;
    padding: 0.3rem 0.6rem;
  }

  .modern-modal-content {
    flex-direction: column;
    max-height: calc(95vh - 100px);
  }

  .images-section {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(195, 176, 145, 0.1);
    padding: 1rem;
  }

  .content-section {
    width: 100%;
  }

  .main-image-display {
    height: 200px;
  }

  .thumbnails-modern {
    padding: 0.5rem 0;
  }

  .thumbnail-modern {
    width: 50px;
    height: 35px;
  }

  .thumbnail-image {
    object-fit: cover;
  }

  .nav-btn-modern {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }

  .image-counter-modern {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }

  .content-scroll {
    padding: 1rem;
    gap: 1.5rem;
  }

  .section-title-modern {
    font-size: 1.1rem;
  }

  .tech-grid-modern {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.6rem;
  }

  .tech-card-modern {
    padding: 0.6rem;
    gap: 0.6rem;
  }

  .tech-icon-modern {
    width: 18px;
    height: 18px;
  }

  .tech-icon-modern img {
    width: 12px;
    height: 12px;
  }

  .tech-name-modern {
    font-size: 0.8rem;
  }

  .link-btn-modern {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  /* Image Preview Mobile */
  .image-preview-overlay {
    padding: 1rem;
  }

  .preview-close {
    top: -2.5rem;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  .preview-navigation {
    padding: 0 1rem;
  }

  .preview-nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .preview-counter {
    top: -2.5rem;
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .preview-image {
    max-height: 70vh;
  }

  .preview-info h3 {
    font-size: 1.2rem;
  }

  .preview-info p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .projects-hero {
    padding: 6rem 0 3rem;
  }

  /* Professional Header Mobile */
  .projects-hero-modern {
    padding: 0.8rem 0;
    max-height: none;
  }

  .hero-layout-compact {
    flex-direction: column;
    gap: 0.8rem;
    align-items: flex-start;
  }

  .hero-content-compact {
    text-align: left;
  }

  .hero-title-compact {
    font-size: 1.7rem;
    text-align: left;
  }

  .hero-description-compact {
    font-size: 0.8rem;
    text-align: left;
  }

  .hero-controls-compact {
    align-self: center;
    justify-content: center;
    gap: 0.8rem;
  }

  .search-input-compact {
    width: 140px;
    height: 28px;
    font-size: 0.7rem;
  }

  .filters-compact {
    gap: 0.25rem;
  }

  .filter-btn-compact {
    width: 28px;
    height: 28px;
    font-size: 0.7rem;
  }

  .filter-count-compact {
    font-size: 0.5rem;
    min-width: 10px;
    height: 10px;
    top: -2px;
    right: -2px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .modern-modal-overlay {
    padding: 0.5rem;
  }

  .modern-modal-container {
    max-width: 100vw;
    max-height: 98vh;
    border-radius: 12px;
  }

  .modern-modal-header {
    padding: 1rem;
  }

  .modern-modal-title {
    font-size: 1.3rem;
  }

  .badge-modern {
    font-size: 0.6rem;
    padding: 0.25rem 0.5rem;
  }

  .images-section {
    padding: 0.8rem;
  }

  .main-image-display {
    height: 180px;
  }

  .thumbnail-modern {
    width: 45px;
    height: 32px;
  }

  .thumbnail-image {
    object-fit: cover;
  }

  .nav-btn-modern {
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
  }

  .image-counter-modern {
    font-size: 0.65rem;
    padding: 0.2rem 0.5rem;
  }

  .content-scroll {
    padding: 0.8rem;
    gap: 1.2rem;
  }

  .section-title-modern {
    font-size: 1rem;
  }

  .title-accent {
    width: 3px;
    height: 20px;
  }

  .description-content {
    padding: 1rem;
  }

  .professional-disclaimer {
    padding: 1rem;
    margin-top: 0.75rem;
  }

  .disclaimer-header {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .disclaimer-header h4 {
    font-size: 0.95rem;
  }

  .disclaimer-content p {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  .disclaimer-note {
    font-size: 0.8rem !important;
    padding: 0.6rem;
    gap: 0.4rem;
  }

  .disclaimer-note i {
    font-size: 0.9rem;
  }

  .tech-grid-modern {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .tech-card-modern {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .tech-icon-modern {
    width: 16px;
    height: 16px;
  }

  .tech-icon-modern img {
    width: 10px;
    height: 10px;
  }

  .tech-name-modern {
    font-size: 0.75rem;
  }

  .links-grid {
    flex-direction: column;
  }

  .link-btn-modern {
    width: 100%;
    justify-content: center;
    padding: 0.8rem;
    font-size: 0.8rem;
  }

  .access-required-modern {
    padding: 1.2rem;
  }

  .access-header-modern {
    gap: 0.8rem;
    margin-bottom: 1rem;
  }

  .access-header-modern i {
    font-size: 1.5rem;
  }

  .access-titles h4 {
    font-size: 1.1rem;
  }

  .access-subtitle {
    font-size: 0.9rem;
  }

  .access-description {
    padding: 0.8rem;
    margin-bottom: 1rem;
  }

  .access-description p {
    font-size: 0.9rem;
  }

  .access-instructions {
    margin-bottom: 1.2rem;
  }

  .access-instructions h5 {
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
  }

  .access-instructions li {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    padding-left: 1.2rem;
  }

  .access-actions {
    gap: 0.7rem;
  }

  .request-access-btn {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  .unlock-btn-modern {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  /* Image Preview Mobile Small */
  .image-preview-overlay {
    padding: 0.5rem;
  }

  .preview-close {
    top: -2rem;
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .preview-navigation {
    padding: 0 0.5rem;
  }

  .preview-nav-btn {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .preview-counter {
    top: -2rem;
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }

  .preview-info h3 {
    font-size: 1.1rem;
  }

  .preview-info p {
    font-size: 0.85rem;
  }
}
</style>
