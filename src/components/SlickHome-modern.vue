<template>
  <div class="projects-showcase">
    <!-- Project Cards Grid -->
    <div class="projects-grid">

      <!-- Project 1: Q-scope AI Trading Platform -->
      <div class="project-card" data-aos="fade-up" data-aos-delay="100">
        <div class="project-image">
          <img src="../assets/imgs-bck/login.png" alt="Q-scope AI Trading Platform" />
          <div class="project-overlay">
            <div class="project-category">AI Trading Platform</div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title" ref="qscope_ai_title">Q-scope AI Trading Platform</h3>
          <p class="project-description" ref="qscope_ai_description">
            Plataforma avançada de trading algorítmico que combina IA com análise técnica moderna.
          </p>
          <div class="tech-stack">
            <span class="tech-badge">
              <img src="../assets/icons/python-icon.svg" alt="Python" />
              Python
            </span>
            <span class="tech-badge">
              <img src="../assets/icons/nodejs-icon.svg" alt="Node.js" />
              Node.js
            </span>
            <span class="tech-badge">
              <img src="../assets/icons/reactjs-icon.svg" alt="React" />
              React
            </span>
            <span class="tech-badge tech-badge--text">IA</span>
          </div>
        </div>
      </div>

      <!-- Project 2: DataConvert -->
      <div class="project-card" data-aos="fade-up" data-aos-delay="200">
        <div class="project-image">
          <img src="../assets/imgs-bck/Landing_page.png" alt="DataConvert Platform" />
          <div class="project-overlay">
            <div class="project-category">SaaS Platform</div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title" ref="dataconvert_title">DataConvert - Professional Data Processing Platform</h3>
          <p class="project-description" ref="dataconvert_description">
            Plataforma SaaS para automatização de processamento de dados corporativos com sistema multi-tenant.
          </p>
          <div class="tech-stack">
            <span class="tech-badge">
              <img src="../assets/icons/reactjs-icon.svg" alt="React" />
              React
            </span>
            <span class="tech-badge">
              <img src="../assets/icons/nodejs-icon.svg" alt="Node.js" />
              Node.js
            </span>
            <span class="tech-badge">
              <img src="../assets/icons/python-icon.svg" alt="Python" />
              Python
            </span>
            <span class="tech-badge tech-badge--text">SaaS</span>
          </div>
        </div>
      </div>


    </div>

    <!-- View All Projects Link -->
    <div class="projects-footer">
      <a href="/projects" class="view-all-btn">
        <span>View All Projects</span>
        <i class="ri-arrow-right-line"></i>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SlickHomeModern',
  mounted() {
    const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage;
    }

    this.$nextTick(() => {
      import(`../languages/${this.selectedLanguage}.js`).then((module) => {
        const expressions = module.default;
        if (this.$refs.qscope_ai_title) {
          this.$refs.qscope_ai_title.textContent = expressions.qscope_ai_title;
        }
        if (this.$refs.qscope_ai_description) {
          this.$refs.qscope_ai_description.textContent = expressions.qscope_ai_description;
        }
        if (this.$refs.dataconvert_title) {
          this.$refs.dataconvert_title.textContent = expressions.dataconvert_title;
        }
        if (this.$refs.dataconvert_description) {
          this.$refs.dataconvert_description.textContent = expressions.dataconvert_description;
        }
      });
    });
  },
};
</script>

<style scoped>
.projects-showcase {
  padding: 2rem 0;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Project Card */
.project-card {
  background: var(--color-bg-primary);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-border);
  position: relative;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(79, 172, 254, 0.1);
  border-color: var(--color-primary);
}

/* Project Image */
.project-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(79, 172, 254, 0.9), rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-category {
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* Project Content */
.project-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 1rem 0;
  line-height: 1.3;
  font-family: 'Inter', system-ui, sans-serif;
}

.project-description {
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(79, 172, 254, 0.1);
  color: var(--color-primary);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(79, 172, 254, 0.2);
  transition: all 0.2s ease;
}

.tech-badge:hover {
  background: rgba(79, 172, 254, 0.2);
  transform: translateY(-1px);
}

.tech-badge img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.tech-badge--text {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  border-color: rgba(255, 255, 255, 0.1);
}

.tech-badge--text:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
}

/* Projects Footer */
.projects-footer {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--color-primary);
  text-decoration: none;
  border: 2px solid var(--color-primary);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.view-all-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  transition: left 0.3s ease;
  z-index: -1;
}

.view-all-btn:hover::before {
  left: 0;
}

.view-all-btn:hover {
  color: var(--color-bg-primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
}

.view-all-btn i {
  transition: transform 0.3s ease;
}

.view-all-btn:hover i {
  transform: translateX(4px);
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .project-card {
    max-width: 100%;
  }

  .project-image {
    height: 200px;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .tech-stack {
    gap: 0.4rem;
  }

  .tech-badge {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}

@media screen and (max-width: 480px) {
  .projects-showcase {
    padding: 1rem 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .project-content {
    padding: 1rem;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .view-all-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* Dark/Light mode adjustments */
[data-theme="light"] .project-card {
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

[data-theme="light"] .project-card:hover {
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(79, 172, 254, 0.1);
}

[data-theme="light"] .project-title {
  color: var(--color-dark);
}

[data-theme="light"] .tech-badge--text {
  background: rgba(0, 0, 0, 0.05);
  color: var(--color-dark);
  border-color: rgba(0, 0, 0, 0.1);
}

[data-theme="light"] .tech-badge--text:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>