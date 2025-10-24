<template>
  <div class="certificates-page">
    <!-- Hero Section -->
    <section class="certificates-hero">
      <div class="container-wide">
        <div class="hero-content">
          <h1 class="hero-title">Professional Certifications</h1>
          <p class="hero-subtitle">Continuous learning journey in software development</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">{{ totalCertificates }}+</span>
              <span class="stat-label">Certificates</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ totalSkills }}+</span>
              <span class="stat-label">Skills</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ totalHours }}+</span>
              <span class="stat-label">Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters & Search -->
    <section class="certificates-controls">
      <div class="container-wide">
        <div class="controls-wrapper">
          <!-- Search -->
          <div class="search-container">
            <i class="ri-search-line"></i>
            <input
              type="text"
              v-model="searchTerm"
              placeholder="Search certificates..."
              class="search-input"
            />
          </div>

          <!-- Category Filters -->
          <div class="filters-container">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="['filter-btn', { active: selectedCategory === category }]"
            >
              {{ category }}
            </button>
          </div>

          <!-- View Toggle -->
          <div class="view-toggle">
            <button
              @click="viewMode = 'grid'"
              :class="['view-btn', { active: viewMode === 'grid' }]"
            >
              <i class="ri-grid-line"></i>
            </button>
            <button
              @click="viewMode = 'list'"
              :class="['view-btn', { active: viewMode === 'list' }]"
            >
              <i class="ri-list-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Certificates Showcase -->
    <section class="certificates-showcase">
      <div class="container-wide">
        <!-- Grid View -->
        <div v-if="viewMode === 'grid'" class="certificates-grid">
          <div
            v-for="(cert, index) in filteredCertificates"
            :key="cert.id"
            class="certificate-card"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
            @click="openCertificate(cert)"
          >
            <div class="certificate-image">
              <img :src="cert.image" :alt="cert.title" />
              <div class="certificate-overlay">
                <div class="overlay-content">
                  <div class="certificate-provider">{{ cert.provider }}</div>
                  <button class="view-btn-overlay">
                    <i class="ri-eye-line"></i>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>

            <div class="certificate-content">
              <div class="certificate-header">
                <h3 class="certificate-title">{{ cert.title }}</h3>
                <div class="certificate-meta">
                  <span class="certificate-year">{{ cert.year }}</span>
                  <span class="certificate-status" :class="cert.status">{{ cert.status }}</span>
                </div>
              </div>

              <p class="certificate-description">{{ cert.description }}</p>

              <!-- Skills Gained -->
              <div class="skills-section">
                <div class="skills-label">Skills:</div>
                <div class="skills-tags">
                  <span v-for="skill in cert.skills" :key="skill" class="skill-tag">
                    <img v-if="getSkillIcon(skill)" :src="getSkillIcon(skill)" :alt="skill" class="skill-icon" />
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Certificate Details -->
              <div class="certificate-footer">
                <div class="certificate-info">
                  <span class="duration">
                    <i class="ri-time-line"></i>
                    {{ cert.duration }}
                  </span>
                  <span class="level" :class="cert.level">
                    <i class="ri-medal-line"></i>
                    {{ cert.level }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- List View -->
        <div v-else class="certificates-list">
          <div
            v-for="(cert, index) in filteredCertificates"
            :key="cert.id"
            class="certificate-list-item"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 50"
            @click="openCertificate(cert)"
          >
            <div class="list-item-image">
              <img :src="cert.image" :alt="cert.title" />
            </div>

            <div class="list-item-content">
              <div class="list-item-header">
                <h3 class="list-item-title">{{ cert.title }}</h3>
                <div class="list-item-meta">
                  <span class="provider">{{ cert.provider }}</span>
                  <span class="year">{{ cert.year }}</span>
                  <span class="status" :class="cert.status">{{ cert.status }}</span>
                </div>
              </div>

              <p class="list-item-description">{{ cert.description }}</p>

              <div class="list-item-footer">
                <div class="list-item-skills">
                  <span v-for="skill in cert.skills.slice(0, 3)" :key="skill" class="skill-tag-small">
                    <img v-if="getSkillIcon(skill)" :src="getSkillIcon(skill)" :alt="skill" class="skill-icon-small" />
                    {{ skill }}
                  </span>
                  <span v-if="cert.skills.length > 3" class="more-skills">
                    +{{ cert.skills.length - 3 }}
                  </span>
                </div>

                <div class="list-item-info">
                  <span class="duration">{{ cert.duration }}</span>
                  <span class="level" :class="cert.level">{{ cert.level }}</span>
                </div>
              </div>
            </div>

            <div class="list-item-action">
              <button class="action-btn">
                <i class="ri-external-link-line"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="load-more-section" v-if="canLoadMore">
          <button @click="loadMore" class="load-more-btn">
            <span>Load More Certificates</span>
            <i class="ri-arrow-down-line"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Skills Summary -->
    <section class="skills-summary">
      <div class="container-wide">
        <h2 class="section-title">Skills & Expertise</h2>
        <div class="skills-categories">
          <div class="skill-category" v-for="category in skillsCategories" :key="category.name">
            <h3 class="category-title">{{ category.name }}</h3>
            <div class="category-skills">
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="skill-item"
                :data-level="skill.level"
              >
                <div class="skill-name-with-icon">
                  <img v-if="getSkillIcon(skill.name)" :src="getSkillIcon(skill.name)" :alt="skill.name" class="skill-progress-icon" />
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certificate Modal -->
    <div v-if="selectedCertificate" class="certificate-modal" @click="closeCertificate">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeCertificate">
          <i class="ri-close-line"></i>
        </button>
        <div class="modal-image">
          <img :src="selectedCertificate.image" :alt="selectedCertificate.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificatesPageModern',
  data() {
    return {
      searchTerm: '',
      selectedCategory: 'All',
      viewMode: 'grid', // 'grid' or 'list'
      displayedCount: 5,
      selectedCertificate: null
    }
  },

  computed: {
    certificates() {
      return [
        {
          id: 1,
          title: 'SQL - A Practical Introduction for Querying Databases',
          provider: 'IBM - Coursera',
          description: 'Comprehensive course covering SQL fundamentals, advanced queries, and database management. Completed with Honors.',
          image: require('../assets/img/certificates/48-coursera.png'),
          category: 'Database',
          year: '2023',
          status: 'completed',
          level: 'intermediate',
          duration: '40 hours',
          skills: ['SQL', 'Database Management', 'Data Analysis', 'Query Optimization']
        },
        {
          id: 2,
          title: 'HTML5 Complete Course',
          provider: 'Curso em Vídeo - Gustavo Guanabara',
          description: 'Complete HTML5 course covering semantic markup, forms, multimedia, and modern web standards.',
          image: require('../assets/img/certificates/1-cursoemvideohtml5.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '30 hours',
          skills: ['HTML5', 'Semantic Web', 'Web Standards', 'Accessibility']
        },
        {
          id: 3,
          title: 'DoWhile Conference',
          provider: 'Rocketseat',
          description: 'Participation in DoWhile developer conference focusing on modern web technologies and React.js.',
          image: require('../assets/img/certificates/2-dowhile.png'),
          category: 'Conference',
          year: '2021',
          status: 'completed',
          level: 'intermediate',
          duration: '8 hours',
          skills: ['React', 'Web Development', 'Career Development', 'Networking']
        },
        {
          id: 4,
          title: 'Advanced Systems Architecture',
          provider: 'Digital Innovation One',
          description: 'Advanced concepts in software architecture, microservices, and scalable system design.',
          image: require('../assets/img/certificates/3-arquiteturasistemasavancada.png'),
          category: 'Architecture',
          year: '2022',
          status: 'completed',
          level: 'advanced',
          duration: '60 hours',
          skills: ['System Design', 'Microservices', 'Architecture Patterns', 'Scalability']
        },
        {
          id: 5,
          title: 'Android Studio Development',
          provider: 'Digital Innovation One',
          description: 'Working with Android Studio and its development tools for mobile applications.',
          image: require('../assets/img/certificates/4-androidstudio.png'),
          category: 'Mobile',
          year: '2021',
          status: 'completed',
          level: 'intermediate',
          duration: '45 hours',
          skills: ['Android Development', 'Kotlin', 'Mobile UI', 'App Deployment']
        },
        {
          id: 6,
          title: 'Data Structures and Algorithms',
          provider: 'Digital Innovation One',
          description: 'Introduction to Data Structures and Algorithms with comprehensive problem-solving techniques.',
          image: require('../assets/img/certificates/5-estruturadedadosalgoritmos.png'),
          category: 'Computer Science',
          year: '2022',
          status: 'completed',
          level: 'advanced',
          duration: '50 hours',
          skills: ['Data Structures', 'Algorithms', 'Big O Notation', 'Problem Solving']
        },
        {
          id: 7,
          title: 'Fundamentals of Systems Architecture',
          provider: 'Digital Innovation One',
          description: 'Fundamentals of web systems architecture and design patterns.',
          image: require('../assets/img/certificates/6-fundamentosarquiteturasistemas.png'),
          category: 'Architecture',
          year: '2022',
          status: 'completed',
          level: 'intermediate',
          duration: '35 hours',
          skills: ['System Architecture', 'Design Patterns', 'Web Architecture']
        },
        {
          id: 8,
          title: 'Debugging and Exception Handling',
          provider: 'Digital Innovation One',
          description: 'Debugging techniques and error handling strategies for robust applications.',
          image: require('../assets/img/certificates/7-debuggingcatcherrorsexeptions.png'),
          category: 'Programming',
          year: '2022',
          status: 'completed',
          level: 'intermediate',
          duration: '25 hours',
          skills: ['Debugging', 'Exception Handling', 'Testing', 'Quality Assurance']
        },
        {
          id: 9,
          title: 'EcmaScript 6 Essential',
          provider: 'Digital Innovation One',
          description: 'Learning essential concepts of ES6 and modern JavaScript features.',
          image: require('../assets/img/certificates/8-es6essencial.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'intermediate',
          duration: '30 hours',
          skills: ['JavaScript', 'ES6', 'Modern JavaScript', 'Web Development']
        },
        {
          id: 10,
          title: 'EcmaScript 6 Advanced',
          provider: 'Digital Innovation One',
          description: 'Advanced concepts of EcmaScript 6 including async programming and modules.',
          image: require('../assets/img/certificates/9-es6avancado.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'advanced',
          duration: '40 hours',
          skills: ['JavaScript', 'ES6', 'Async Programming', 'Modules']
        },
        {
          id: 11,
          title: 'Introduction to JavaScript',
          provider: 'Digital Innovation One',
          description: 'Introduction to JavaScript programming language and web development.',
          image: require('../assets/img/certificates/10-introducaojavascript.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '25 hours',
          skills: ['JavaScript', 'Programming Logic', 'Web Development']
        },
        {
          id: 12,
          title: 'Web Development with React.js',
          provider: 'Digital Innovation One',
          description: 'Learning web application development with React.js framework.',
          image: require('../assets/img/certificates/12-introducaoreactjs.png'),
          category: 'Frontend',
          year: '2022',
          status: 'completed',
          level: 'advanced',
          duration: '55 hours',
          skills: ['React', 'JSX', 'Component Architecture', 'State Management']
        },
        {
          id: 13,
          title: 'Introduction to React.js',
          provider: 'Digital Innovation One',
          description: 'Learning introduction to React.js and component-based development.',
          image: require('../assets/img/certificates/13-intrreact.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'intermediate',
          duration: '35 hours',
          skills: ['React', 'Components', 'JSX', 'Virtual DOM']
        },
        {
          id: 14,
          title: 'Introduction to Vue.js',
          provider: 'Digital Innovation One',
          description: 'Learning introduction to Vue.js framework and reactive programming.',
          image: require('../assets/img/certificates/14-intrvuejs.png'),
          category: 'Frontend',
          year: '2022',
          status: 'completed',
          level: 'intermediate',
          duration: '40 hours',
          skills: ['Vue.js', 'Reactive Programming', 'Templates', 'Directives']
        },
        {
          id: 15,
          title: 'Introduction to jQuery',
          provider: 'Digital Innovation One',
          description: 'Learning introduction to jQuery library for DOM manipulation.',
          image: require('../assets/img/certificates/15-intrjquery.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '20 hours',
          skills: ['jQuery', 'DOM Manipulation', 'AJAX', 'Event Handling']
        },
        {
          id: 16,
          title: 'Web Development with JavaScript',
          provider: 'Digital Innovation One',
          description: 'Learning web development with JavaScript and modern practices.',
          image: require('../assets/img/certificates/16-javascript.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'intermediate',
          duration: '45 hours',
          skills: ['JavaScript', 'Web Development', 'DOM', 'Event Handling']
        },
        {
          id: 17,
          title: 'Programming Logic',
          provider: 'Digital Innovation One',
          description: 'Learning programming logic and problem-solving fundamentals.',
          image: require('../assets/img/certificates/17-logicadeprogramacao.png'),
          category: 'Programming',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '30 hours',
          skills: ['Programming Logic', 'Problem Solving', 'Algorithms', 'Critical Thinking']
        },
        {
          id: 18,
          title: 'Essential Programming Logic',
          provider: 'Digital Innovation One',
          description: 'Learning essential programming logic concepts and methodologies.',
          image: require('../assets/img/certificates/18-logicaprogramacaoessencial.png'),
          category: 'Programming',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '25 hours',
          skills: ['Programming Logic', 'Algorithms', 'Pseudocode', 'Flowcharts']
        },
        {
          id: 19,
          title: 'First Steps in Development',
          provider: 'Digital Innovation One',
          description: 'Learning the first steps in software development career.',
          image: require('../assets/img/certificates/19-primeirospassospregramacao.png'),
          category: 'Career',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '15 hours',
          skills: ['Career Development', 'Software Development', 'Best Practices']
        },
        {
          id: 20,
          title: 'Introduction to JavaScript',
          provider: 'Digital Innovation One',
          description: 'Introduction to JavaScript programming language.',
          image: require('../assets/img/certificates/20-intrjavascript.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '25 hours',
          skills: ['JavaScript', 'Programming Fundamentals', 'Syntax']
        },
        {
          id: 21,
          title: 'Introduction to GitHub',
          provider: 'Digital Innovation One',
          description: 'Introduction to GitHub for version control and collaboration.',
          image: require('../assets/img/certificates/21-intrgitgithub.png'),
          category: 'Tools',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '20 hours',
          skills: ['Git', 'GitHub', 'Version Control', 'Collaboration']
        },
        {
          id: 22,
          title: 'HTML for Web Development',
          provider: 'Digital Innovation One',
          description: 'Learning HTML for web development and semantic markup.',
          image: require('../assets/img/certificates/22-htmlwebdeveloper.png'),
          category: 'Frontend',
          year: '2021',
          status: 'completed',
          level: 'beginner',
          duration: '25 hours',
          skills: ['HTML5', 'Web Development', 'Semantic Markup']
        },
        {
          id: 23,
          title: 'Async/Await in JavaScript',
          provider: 'Digital Innovation One',
          description: 'Learning how Async/Await works in JavaScript for asynchronous programming.',
          image: require('../assets/img/certificates/23-asyncawait.png'),
          category: 'Frontend',
          year: '2022',
          status: 'completed',
          level: 'advanced',
          duration: '30 hours',
          skills: ['JavaScript', 'Async/Await', 'Promises', 'Asynchronous Programming']
        },
        {
          id: 24,
          title: 'Becoming Remote',
          provider: 'Digital Innovation One',
          description: 'Learning to work better in remote work environments.',
          image: require('../assets/img/certificates/24-becameremote.png'),
          category: 'Career',
          year: '2021',
          status: 'completed',
          level: 'intermediate',
          duration: '20 hours',
          skills: ['Remote Work', 'Productivity', 'Communication', 'Time Management']
        },
        {
          id: 25,
          title: 'Santander Bootcamp',
          provider: 'Digital Innovation One - Santander',
          description: 'Completion of Santander bootcamp with Kotlin and mobile application development.',
          image: require('../assets/img/certificates/25-bootcampsantander.png'),
          category: 'Mobile',
          year: '2022',
          status: 'completed',
          level: 'advanced',
          duration: '80 hours',
          skills: ['Kotlin', 'Android Development', 'Mobile UI', 'App Development']
        },
        {
          id: 26,
          title: 'Arrays and Lists Concepts',
          provider: 'Digital Innovation One',
          description: 'Working with arrays, lists, and collections concepts.',
          image: require('../assets/img/certificates/26-arrayslistasdatearray.png'),
          category: 'Computer Science',
          year: '2022',
          status: 'completed',
          level: 'intermediate',
          duration: '30 hours',
          skills: ['Data Structures', 'Arrays', 'Collections', 'Algorithm Design']
        }
      ]
    },

    categories() {
      const cats = ['All', ...new Set(this.certificates.map(cert => cert.category))]
      return cats
    },

    filteredCertificates() {
      let filtered = this.certificates

      // Filter by category
      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(cert => cert.category === this.selectedCategory)
      }

      // Filter by search term
      if (this.searchTerm) {
        filtered = filtered.filter(cert =>
          cert.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          cert.provider.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          cert.skills.some(skill => skill.toLowerCase().includes(this.searchTerm.toLowerCase()))
        )
      }

      return filtered.slice(0, this.displayedCount)
    },

    canLoadMore() {
      let filtered = this.certificates
      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(cert => cert.category === this.selectedCategory)
      }
      if (this.searchTerm) {
        filtered = filtered.filter(cert =>
          cert.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          cert.provider.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          cert.skills.some(skill => skill.toLowerCase().includes(this.searchTerm.toLowerCase()))
        )
      }
      return this.displayedCount < filtered.length
    },

    totalCertificates() {
      return this.certificates.length
    },

    totalSkills() {
      const allSkills = new Set()
      this.certificates.forEach(cert => {
        cert.skills.forEach(skill => allSkills.add(skill))
      })
      return allSkills.size
    },

    totalHours() {
      return this.certificates.reduce((total, cert) => {
        const hours = parseInt(cert.duration.split(' ')[0])
        return total + hours
      }, 0)
    },

    skillsCategories() {
      return [
        {
          name: 'Frontend Development',
          skills: [
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
            { name: 'JavaScript', level: 90 },
            { name: 'React', level: 85 },
            { name: 'Vue.js', level: 80 }
          ]
        },
        {
          name: 'Backend Development',
          skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Python', level: 75 },
            { name: 'C Programming', level: 80 },
            { name: 'API Design', level: 85 }
          ]
        },
        {
          name: 'Database & Systems',
          skills: [
            { name: 'SQL', level: 80 },
            { name: 'PostgreSQL', level: 75 },
            { name: 'System Architecture', level: 70 },
            { name: 'Data Structures', level: 85 }
          ]
        }
      ]
    }
  },

  methods: {
    openCertificate(cert) {
      this.selectedCertificate = cert
      document.body.style.overflow = 'hidden'
    },

    closeCertificate() {
      this.selectedCertificate = null
      document.body.style.overflow = ''
    },

    loadMore() {
      this.displayedCount += 5
    },

    getSkillIcon(skill) {
      const iconMap = {
        'SQL': require('../assets/icons/mysql-official.svg'),
        'Database Management': require('../assets/icons/mysql-official.svg'),
        'HTML5': require('../assets/icons/w3_html5-icon.svg'),
        'JavaScript': require('../assets/icons/js.svg'),
        'React': require('../assets/icons/reactjs-icon.svg'),
        'Vue.js': require('../assets/icons/vuejs-icon.svg'),
        'Node.js': require('../assets/icons/nodejs-icon.svg'),
        'Python': require('../assets/icons/python-icon.svg'),
        'Android Development': require('../assets/icons/android.svg'),
        'Kotlin': require('../assets/icons/kotlin.svg'),
        'Mobile UI': require('../assets/icons/android.svg'),
        'Git': require('../assets/icons/git-scm-icon.svg'),
        'GitHub': require('../assets/icons/github-icon.svg'),
        'CSS3': require('../assets/icons/w3_css-icon.svg'),
        'TypeScript': require('../assets/icons/typescriptlang-icon.svg'),
        'Express': require('../assets/icons/expressjs.svg'),
        'Docker': require('../assets/icons/docker-icon.svg'),
        'MySQL': require('../assets/icons/mysql-official.svg'),
        'PostgreSQL': require('../assets/icons/mysql-official.svg'),
        'PHP': require('../assets/icons/php-icon.svg'),
        'C Programming': require('../assets/icons/visualstudio_code-icon.svg'),
        'API Design': require('../assets/icons/nodejs-icon.svg'),
        'System Architecture': require('../assets/icons/docker-icon.svg'),
        'Data Structures': require('../assets/icons/js.svg')
      }
      return iconMap[skill] || null
    }
  },

  unmounted() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* Modern Certificates Page Styles */
.certificates-page {
  min-height: 100vh;
  padding-top: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.certificates-hero {
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
  border-radius: 20px;
  margin-bottom: 4rem;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--color-text);
  margin: 0 0 3rem 0;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Controls */
.certificates-controls {
  margin-bottom: 4rem;
}

.controls-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.search-container {
  position: relative;
  min-width: 300px;
}

.search-container i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text);
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border);
  border-radius: 50px;
  color: var(--color-white);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
}

.filters-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid var(--color-border);
  color: var(--color-text);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg-primary);
}

.view-toggle {
  display: flex;
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border);
  border-radius: 50px;
  overflow: hidden;
}

.view-btn {
  padding: 0.8rem 1rem;
  background: transparent;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.view-btn.active {
  background: var(--color-primary);
  color: var(--color-bg-primary);
}

/* Certificates Grid */
.certificates-showcase {
  margin-bottom: 4rem;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

.certificate-card {
  background: var(--color-bg-primary);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.certificate-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-color: var(--color-primary);
}

.certificate-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.certificate-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.certificate-card:hover .certificate-image img {
  transform: scale(1.1);
}

.certificate-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(79, 172, 254, 0.9), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.certificate-card:hover .certificate-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.certificate-provider {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.view-btn-overlay {
  padding: 0.8rem 1.5rem;
  background: white;
  color: var(--color-dark);
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.view-btn-overlay:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.certificate-content {
  padding: 2rem;
}

.certificate-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.certificate-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0;
  line-height: 1.3;
  flex: 1;
  margin-right: 1rem;
}

.certificate-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.certificate-year {
  color: var(--color-text);
  font-size: 0.9rem;
}

.certificate-status {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.certificate-status.completed {
  background: rgba(79, 172, 254, 0.2);
  color: var(--color-primary);
}

.certificate-description {
  color: var(--color-text);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
}

.skills-section {
  margin-bottom: 1.5rem;
}

.skills-label {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-tag {
  background: rgba(79, 172, 254, 0.1);
  color: var(--color-primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(79, 172, 254, 0.2);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.skill-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.certificate-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.certificate-info {
  display: flex;
  gap: 1rem;
}

.duration,
.level {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--color-text);
  font-size: 0.85rem;
}

.level.beginner {
  color: #28ca42;
}

.level.intermediate {
  color: var(--color-primary);
}

.level.advanced {
  color: #ff5f57;
}

/* List View */
.certificates-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.certificate-list-item {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.certificate-list-item:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.list-item-image {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
}

.list-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.list-item-content {
  flex: 1;
}

.list-item-header {
  margin-bottom: 0.8rem;
}

.list-item-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-white);
  margin: 0 0 0.5rem 0;
}

.list-item-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--color-text);
}

.list-item-description {
  color: var(--color-text);
  line-height: 1.5;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.list-item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-item-skills {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.skill-tag-small {
  background: rgba(79, 172, 254, 0.1);
  color: var(--color-primary);
  padding: 0.2rem 0.6rem;
  border-radius: 15px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.skill-icon-small {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.more-skills {
  color: var(--color-text);
  font-size: 0.8rem;
}

.list-item-info {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
}

.list-item-action {
  flex-shrink: 0;
}

.action-btn {
  background: none;
  border: 2px solid var(--color-border);
  color: var(--color-text);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg-primary);
}

/* Load More Button */
.load-more-section {
  text-align: center;
  margin-top: 4rem;
}

.load-more-btn {
  padding: 1rem 2rem;
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background: var(--color-primary);
  color: var(--color-bg-primary);
  transform: translateY(-2px);
}

/* Skills Summary */
.skills-summary {
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%);
  border-radius: 20px;
  margin: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 3rem 0;
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.skill-category {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-white);
  margin: 0 0 2rem 0;
}

.category-skills {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-name-with-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 140px;
}

.skill-progress-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.skill-name {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 500;
}

.skill-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), #4facfe);
  border-radius: 3px;
  transition: width 0.8s ease;
}

.skill-percentage {
  min-width: 35px;
  text-align: right;
  color: var(--color-text);
  font-size: 0.8rem;
}

/* Certificate Modal */
.certificate-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
}

.modal-content {
  position: relative;
  max-width: 70vw;
  max-height: 80vh;
  background: var(--color-bg-primary);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-image {
  max-height: 80vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.9);
}

.modal-image img {
  width: 100%;
  height: auto;
  display: block;
  min-height: auto;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .controls-wrapper {
    flex-direction: column;
    align-items: stretch;
  }

  .search-container {
    min-width: auto;
  }

  .certificates-grid {
    grid-template-columns: 1fr;
  }

  .certificate-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .certificate-meta {
    align-items: flex-start;
    flex-direction: row;
    gap: 1rem;
  }

  .certificate-list-item {
    flex-direction: column;
    text-align: center;
  }

  .list-item-image {
    align-self: center;
  }

  .skills-categories {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 480px) {
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .certificate-content {
    padding: 1.5rem;
  }

  .filters-container {
    justify-content: center;
  }

  .view-toggle {
    justify-self: center;
  }
}
</style>