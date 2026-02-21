<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container-wide">
        <div class="hero-content">
          <div class="hero-text">
<!--            <h1 class="hero-title">Jorge Morais</h1>-->
            <h1 class="hero-title" ref="about_hero_title">Experience & Skills</h1>
            <p class="hero-description">
              <span ref="about_hero_description">From military leadership to software innovation. A journey of continuous learning, technical excellence, and diverse professional experience that brings unique value to every development project.</span>
            </p>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">4+</span>
              <span class="stat-label" ref="years_dev">Years Dev</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label" ref="years_experience">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">3</span>
              <span class="stat-label" ref="career_paths">Career Paths</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">26+</span>
              <span class="stat-label" ref="certifications">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Navigation Tabs -->
    <section class="about-navigation">
      <div class="container-wide">
        <div class="nav-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="handleTabClick(tab.id, $event)"
            :class="['nav-tab', {
              active: activeTab === tab.id,
              locked: tab.requiresAccess && !isAccessValid
            }]"
            :disabled="false"
            :data-requires-access="tab.requiresAccess"
            :data-tab-id="tab.id"
          >
            <i :class="tab.icon"></i>
            <div class="tab-info">
              <span class="tab-label">{{ tab.label }}</span>
              <span class="tab-years">{{ tab.years }}</span>
            </div>
            <!-- Enhanced lock indicator for restricted tabs -->
            <div v-if="tab.requiresAccess && !isAccessValid" class="tab-lock-enhanced">
              <div class="lock-icon">
                <i class="ri-lock-line"></i>
              </div>
              <div class="lock-tooltip">
                <div class="tooltip-title">{{ translations.access_required_title || '🔐 Conteúdo Restrito' }}</div>
                <div class="tooltip-subtitle">{{ translations.access_required_subtitle || 'Experiência profissional detalhada disponível' }}</div>
                <div class="tooltip-action">{{ translations.request_access_cta || '📧 Clique para solicitar acesso' }}</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Tab Content -->
    <section class="about-content">
      <div class="container-wide">
        <!-- Technical Expertise -->
        <div v-if="activeTab === 'technical'" class="tab-content">
          <div class="content-header">
            <h2 class="section-title" ref="technical_expertise">Technical Expertise</h2>
            <p class="section-subtitle" ref="technical_subtitle">Competências técnicas, soft skills e experiência profissional</p>
          </div>

          <div class="skills-summary">
            <div class="skills-categories">
              <div class="skill-category" v-for="category in skillsCategories" :key="category.name" data-aos="fade-up">
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
        </div>

        <!-- Militar 2004-2008 -->
        <div v-if="activeTab === 'military'" class="tab-content">
          <!-- Show real content only if access is valid -->
          <template v-if="isAccessValid">
            <div class="content-header">
              <h2 class="section-title" ref="military_experience">{{ militaryTitle }}</h2>
              <p class="section-subtitle" ref="military_subtitle">{{ militarySubtitle }}</p>
            </div>
          </template>

          <!-- Show locked content -->
          <template v-else>
            <div class="content-header">
              <h2 class="section-title" ref="locked_military_title">🔒 Military Experience</h2>
              <p class="section-subtitle" ref="locked_military_subtitle">Professional military background - Access required</p>
            </div>
            <div class="locked-content">
              <div class="access-warning">
                <i class="ri-lock-line"></i>
                <h3 ref="access_required">Access Required</h3>
                <p ref="access_required_description">This section contains detailed military experience and achievements. Please authenticate to view complete information.</p>
                <div class="access-features">
                  <span class="feature-tag" ref="military_service"></span>
                  <span class="feature-tag" ref="international_missions"></span>
                  <span class="feature-tag" ref="specialized_training"></span>
                  <span class="feature-tag" ref="achievements"></span>
                </div>
              </div>
            </div>
          </template>

          <!-- Military Experience - Only show if access is valid -->
          <template v-if="isAccessValid">
          <div class="military-experience">

            <!-- Main Story Section -->
            <div class="military-story">
              <div class="story-content">
                <div class="story-text">
                  <div class="intro-section">
                    <p class="military-intro">
                      <span ref="military_intro" v-html="militaryContent.intro"></span>
                    </p>
                  </div>

                  <div class="journey-description">
                    <p>
                      <span ref="military_journey_1" v-html="militaryContent.journey1"></span>
                    </p>

                    <p>
                      <span ref="military_journey_2" v-html="militaryContent.journey2"></span>
                    </p>
                  </div>
                </div>

                <div class="story-image">
                  <div class="military-photo-placeholder">
                    <picture>
                      <source srcset="../assets/imgs-bck/exercito.webp" type="image/webp">
                      <img src="../assets/imgs-bck/exercito.jpg" alt="Jorge Mopanc - Exército Português" class="military-photo">
                    </picture>
                    <div class="photo-caption">
                      <span ref="military_photo_caption">{{ militaryContent.photoCaption }}</span>
                      <small>2006</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional Timeline -->
            <div class="military-timeline-professional">
              <h3 ref="military_timeline_title">{{ militaryContent.timelineTitle }}</h3>
              <div class="timeline-professional">

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">2004-2005</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="military_basic_title">{{ militaryContent.basicTitle }}</h4>
                    <p ref="military_basic_description">{{ militaryContent.basicDescription }}</p>
                  </div>
                </div>

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">2005-2006</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="military_specialized_title">{{ militaryContent.specializedTitle }}</h4>
                    <p ref="military_specialized_description">{{ militaryContent.specializedDescription }}</p>
                  </div>
                </div>

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">2005-2006</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="military_preparation_title">{{ militaryContent.preparationTitle }}</h4>
                    <p ref="military_preparation_description">{{ militaryContent.preparationDescription }}</p>
                  </div>
                </div>

                <div class="timeline-milestone highlight">
                  <div class="milestone-marker">
                    <span class="year">2006-2007</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="military_deployment_title">{{ militaryContent.deploymentTitle }}</h4>
                    <p ref="military_deployment_description">{{ militaryContent.deploymentDescription }}</p>
                  </div>
                </div>

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">2007-2008</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="military_conclusion_title">{{ militaryContent.conclusionTitle }}</h4>
                    <p ref="military_conclusion_description">{{ militaryContent.conclusionDescription }}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
          </template>
        </div>

        <!-- McDonald's Gerente 2008-2015 -->
        <div v-if="activeTab === 'manager'" class="tab-content">
          <div class="content-header">
            <h2 class="section-title" ref="manager_experience">{{ mcdonaldsTitle }}</h2>
            <p class="section-subtitle" ref="manager_subtitle">{{ mcdonaldsSubtitle }}</p>
          </div>

          <!-- Manager Experience - Professional Portfolio Style -->
          <div class="manager-experience">

            <!-- Main Story Section -->
            <div class="manager-story">
              <div class="story-content">
                <div class="story-text">
                  <div class="intro-section">
                    <p class="manager-intro">
                      <span ref="mcdonalds_intro" v-html="mcdonaldsContent.intro"></span>
                    </p>
                  </div>

                  <div class="journey-description">
                    <p>
                      {{ mcdonaldsContent.journey1 }}
                    </p>

                    <p>
                      {{ mcdonaldsContent.journey2 }}
                    </p>
                  </div>
                </div>

                <div class="story-image">
                  <div class="manager-photo-placeholder">
                    <picture>
                      <source srcset="../assets/imgs-bck/mcdonalds.webp" type="image/webp">
                      <img src="../assets/imgs-bck/mcdonalds.jpg" alt="Jorge Mopanc - McDonald's Manager" class="manager-photo">
                    </picture>
                    <div class="photo-caption">
                      <span ref="mcdonalds_photo_caption">{{ mcdonaldsContent.photoCaption }}</span>
                      <small>2010-2015</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional Progression Timeline -->
            <div class="manager-timeline-professional">
              <h3 ref="mcdonalds_progression_title">{{ mcdonaldsContent.progressionTitle }}</h3>
              <div class="progression-professional">

                <div class="progression-milestone">
                  <div class="progression-marker employee">
                    <i class="ri-user-line"></i>
                  </div>
                  <div class="progression-content">
                    <h4 ref="mcdonalds_employee_title">{{ mcdonaldsContent.employeeTitle }}</h4>
                    <span class="timeline-period" ref="mcdonalds_employee_period">{{ mcdonaldsContent.employeePeriod }}</span>
                    <p ref="mcdonalds_employee_description">{{ mcdonaldsContent.employeeDescription }}</p>
                  </div>
                </div>

                <div class="progression-milestone">
                  <div class="progression-marker coordinator">
                    <i class="ri-settings-line"></i>
                  </div>
                  <div class="progression-content">
                    <h4 ref="mcdonalds_coordinator_title">{{ mcdonaldsContent.coordinatorTitle }}</h4>
                    <span class="timeline-period" ref="mcdonalds_coordinator_period">{{ mcdonaldsContent.coordinatorPeriod }}</span>
                    <p ref="mcdonalds_coordinator_description">{{ mcdonaldsContent.coordinatorDescription }}</p>
                  </div>
                </div>

                <div class="progression-milestone highlight">
                  <div class="progression-marker manager">
                    <i class="ri-user-star-line"></i>
                  </div>
                  <div class="progression-content">
                    <h4 ref="mcdonalds_manager_title">{{ mcdonaldsContent.managerTitle }}</h4>
                    <span class="timeline-period" ref="mcdonalds_manager_period">{{ mcdonaldsContent.managerPeriod }}</span>
                    <p ref="mcdonalds_manager_description">{{ mcdonaldsContent.managerDescription }}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <!-- Agente Imobiliário 2015-2019 -->
        <div v-if="activeTab === 'realestate'" class="tab-content">
          <div class="content-header">
            <h2 class="section-title" ref="realestate_experience">{{ realestateTitle }}</h2>
            <p class="section-subtitle" ref="realestate_subtitle">{{ realestateSubtitle }}</p>
          </div>

          <!-- Real Estate Experience - Professional Portfolio Style -->
          <div class="realestate-experience">

            <!-- Main Story Section -->
            <div class="realestate-story">
              <div class="story-content">
                <div class="story-text">
                  <div class="intro-section">
                    <p class="realestate-intro">
                      <span ref="realestate_intro" v-html="realestateContent.intro"></span>
                    </p>
                  </div>

                  <div class="journey-description">
                    <p v-html="realestateContent.journey1">
                    </p>

                    <p v-html="realestateContent.journey2">
                    </p>
                  </div>
                </div>

                <div class="story-image">
                  <div class="realestate-photo-placeholder">
                    <picture>
                      <source srcset="../assets/imgs-bck/realstate.webp" type="image/webp">
                      <img src="../assets/imgs-bck/realstate.jpg" alt="Jorge Mopanc - Corretor Imobiliário" class="realestate-photo">
                    </picture>
                    <div class="photo-caption">
                      <span ref="realestate_photo_caption">{{ realestateContent.photoCaption }}</span>
                      <small>2015-2019</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional Development Areas -->
            <div class="realestate-timeline-professional">
              <h3 ref="realestate_development_areas_title">{{ realestateContent.developmentAreasTitle }}</h3>
              <div class="development-professional">

                <div class="development-milestone">
                  <div class="development-marker negotiation">
                    <i class="ri-handshake-line"></i>
                  </div>
                  <div class="development-content">
                    <h4 ref="realestate_negotiation_title">{{ realestateContent.negotiationTitle }}</h4>
                    <span class="development-focus" ref="realestate_negotiation_focus">{{ realestateContent.negotiationFocus }}</span>
                    <p ref="realestate_negotiation_description">{{ realestateContent.negotiationDescription }}</p>
                  </div>
                </div>

                <div class="development-milestone">
                  <div class="development-marker prospection">
                    <i class="ri-search-line"></i>
                  </div>
                  <div class="development-content">
                    <h4 ref="realestate_prospection_title">{{ realestateContent.prospectionTitle }}</h4>
                    <span class="development-focus" ref="realestate_prospection_focus">{{ realestateContent.prospectionFocus }}</span>
                    <p ref="realestate_prospection_description">{{ realestateContent.prospectionDescription }}</p>
                  </div>
                </div>

                <div class="development-milestone highlight">
                  <div class="development-marker relationship">
                    <i class="ri-user-heart-line"></i>
                  </div>
                  <div class="development-content">
                    <h4 ref="realestate_relationship_title">{{ realestateContent.relationshipTitle }}</h4>
                    <span class="development-focus" ref="realestate_relationship_focus">{{ realestateContent.relationshipFocus }}</span>
                    <p ref="realestate_relationship_description">{{ realestateContent.relationshipDescription }}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <!-- Web Developer 2021-2022 -->
        <div v-if="activeTab === 'webdev'" class="tab-content">
          <div class="content-header">
            <h2 class="section-title" ref="webdev_experience">{{ webdevTitle }}</h2>
            <p class="section-subtitle" ref="webdev_subtitle">{{ webdevSubtitle }}</p>
          </div>

          <div class="webdev-experience">
            <!-- Main Story Section -->
            <div class="webdev-story">
              <div class="story-content">
                <div class="story-text">
                  <div class="intro-section">
                    <p class="webdev-intro">
                      <span ref="webdev_intro_1" v-html="webdevContent.intro"></span>
                    </p>
                  </div>

                  <div class="journey-description">
                    <p v-html="webdevContent.journey1">
                    </p>

                    <p v-html="webdevContent.journey2">
                    </p>
                  </div>
                </div>

                <div class="story-image">
                  <div class="webdev-visual">
                    <div class="tech-stack-visual">
                      <div class="stack-item">
                        <i class="ri-html5-line"></i>
                        <span>HTML5</span>
                      </div>
                      <div class="stack-item">
                        <i class="ri-css3-line"></i>
                        <span>SASS</span>
                      </div>
                      <div class="stack-item">
                        <i class="ri-code-line"></i>
                        <span>JavaScript</span>
                      </div>
                      <div class="stack-item">
                        <i class="ri-code-line"></i>
                        <span>PHP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional Timeline -->
            <div class="webdev-timeline-professional">
              <h3 ref="webdev_timeline_title">{{ webdevContent.timelineTitle }}</h3>
              <div class="timeline-professional">

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">2019-2021</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="webdev_timeline_title_1">{{ webdevContent.timeline1Title }}</h4>
                    <p ref="webdev_timeline_description_1">{{ webdevContent.timeline1Description }}</p>
                  </div>
                </div>

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">2021</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="webdev_timeline_title_2">{{ webdevContent.timeline2Title }}</h4>
                    <p ref="webdev_timeline_description_2">{{ webdevContent.timeline2Description }}</p>
                  </div>
                </div>

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">2021-2022</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="webdev_timeline_title_3">{{ webdevContent.timeline3Title }}</h4>
                    <p ref="webdev_timeline_description_3">{{ webdevContent.timeline3Description }}</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Key Competencies Developed -->
            <div class="webdev-competencies">
              <h3 ref="webdev_competencies_title">{{ webdevContent.competenciesTitle }}</h3>
              <div class="competencies-grid">

                <div class="competency-area">
                  <div class="competency-header">
                    <i class="ri-server-line"></i>
                    <h4 ref="webdev_backend_title">{{ webdevContent.backendTitle }}</h4>
                  </div>
                  <div class="competency-skills">
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="webdev_backend_php">{{ webdevContent.backendPhp }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 85%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="webdev_backend_mysql">{{ webdevContent.backendMysql }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 75%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="competency-area">
                  <div class="competency-header">
                    <i class="ri-palette-line"></i>
                    <h4 ref="webdev_frontend_title">{{ webdevContent.frontendTitle }}</h4>
                  </div>
                  <div class="competency-skills">
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="webdev_frontend_html">{{ webdevContent.frontendHtml }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 90%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="webdev_frontend_css">{{ webdevContent.frontendCss }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 80%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="webdev_frontend_js">{{ webdevContent.frontendJs }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 70%"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Professional Impact -->
            <div class="webdev-impact">
              <h3 ref="webdev_impact_title">{{ webdevContent.impactTitle }}</h3>
              <div class="impact-metrics">
                <div class="metric-card">
                  <div class="metric-number">5+</div>
                  <div class="metric-label" ref="webdev_websites_developed">{{ webdevContent.websitesDeveloped }}</div>
                  <div class="metric-description" ref="webdev_websites_description">{{ webdevContent.websitesDescription }}</div>
                </div>
                <div class="metric-card">
                  <div class="metric-number">100%</div>
                  <div class="metric-label" ref="webdev_mobile_responsive">{{ webdevContent.mobileResponsive }}</div>
                  <div class="metric-description" ref="webdev_mobile_description">{{ webdevContent.mobileDescription }}</div>
                </div>
                <div class="metric-card">
                  <div class="metric-number">400+</div>
                  <div class="metric-label" ref="webdev_server_management">{{ webdevContent.serverManagement }}</div>
                  <div class="metric-description" ref="webdev_server_description">{{ webdevContent.serverDescription }}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Frontend Developer 2022-2023 -->
        <div v-if="activeTab === 'frontend'" class="tab-content">
          <div class="content-header">
            <h2 class="section-title" ref="frontend_experience">{{ frontendTitle }}</h2>
            <p class="section-subtitle" ref="frontend_subtitle">{{ frontendSubtitle }}</p>
          </div>

          <div class="frontend-experience">
            <!-- Main Story Section -->
            <div class="frontend-story">
              <div class="story-content">
                <div class="story-text">
                  <div class="intro-section">
                    <p class="frontend-intro">
                      <span ref="frontend_intro" v-html="frontendContent.intro"></span>
                    </p>
                  </div>

                  <div class="journey-description">
                    <p v-html="frontendContent.journey1">
                    </p>

                    <p v-html="frontendContent.journey2">
                    </p>
                  </div>
                </div>

                <div class="story-image">
                  <div class="frontend-visual">
                    <div class="international-badge">
                      <div class="remote-work">
                        <span ref="frontend_international_badge">{{ frontendContent.international }}</span>
                      </div>
                    </div>
                    <div class="modern-stack-visual">
                      <div class="stack-item modern">
                        <i class="ri-reactjs-line"></i>
                        <span>React</span>
                      </div>
                      <div class="stack-item modern">
                        <i class="ri-pages-line"></i>
                        <span>Next.js</span>
                      </div>
                      <div class="stack-item modern">
                        <i class="ri-vuejs-line"></i>
                        <span>Vue.js</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional Timeline -->
            <div class="frontend-timeline-professional">
              <h3 ref="frontend_timeline_title">{{ frontendContent.timelineTitle }}</h3>
              <div class="timeline-professional">

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">Early 2022</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="frontend_transition_title">{{ frontendContent.transitionTitle }}</h4>
                    <p ref="frontend_transition_description" v-html="frontendContent.transitionDescription"></p>
                  </div>
                </div>

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">Mid 2022</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="frontend_integration_title">{{ frontendContent.integrationTitle }}</h4>
                    <p ref="frontend_integration_description" v-html="frontendContent.integrationDescription"></p>
                  </div>
                </div>

                <div class="timeline-milestone">
                  <div class="milestone-marker">
                    <span class="year">2022-2023</span>
                  </div>
                  <div class="milestone-content">
                    <h4 ref="frontend_specialization_title">{{ frontendContent.specializationTitle }}</h4>
                    <p ref="frontend_specialization_description" v-html="frontendContent.specializationDescription"></p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Technology Evolution -->
            <div class="frontend-evolution">
              <h3 ref="frontend_tech_evolution_title">{{ frontendContent.techEvolutionTitle }}</h3>
              <div class="evolution-comparison">
                <div class="evolution-from">
                  <h4 ref="frontend_from_stack_title">{{ frontendContent.fromStackTitle }}</h4>
                  <div class="tech-list old">
                    <span>PHP Procedural</span>
                    <span>jQuery</span>
                    <span>SASS</span>
                  </div>
                </div>
                <div class="evolution-arrow">→</div>
                <div class="evolution-to">
                  <h4 ref="frontend_to_stack_title">{{ frontendContent.toStackTitle }}</h4>
                  <div class="tech-list new">
                    <span>React.js</span>
                    <span>Next.js</span>
                    <span>Vue.js</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Competencies Developed -->
            <div class="frontend-competencies">
              <h3 ref="frontend_competencies_title">{{ frontendContent.competenciesTitle }}</h3>
              <div class="competencies-grid">

                <div class="competency-area">
                  <div class="competency-header">
                    <i class="ri-reactjs-line"></i>
                    <h4 ref="frontend_react_ecosystem_title">{{ frontendContent.reactEcosystemTitle }}</h4>
                  </div>
                  <div class="competency-skills">
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="frontend_react_components">{{ frontendContent.reactComponents }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 85%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="frontend_hooks_context">{{ frontendContent.hooksContext }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 80%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="frontend_nextjs">{{ frontendContent.nextjs }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 75%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="competency-area">
                  <div class="competency-header">
                    <i class="ri-vuejs-line"></i>
                    <h4 ref="frontend_vue_development_title">{{ frontendContent.vueDelopmentTitle }}</h4>
                  </div>
                  <div class="competency-skills">
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="frontend_vue3_composition">{{ frontendContent.vue3Composition }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 85%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="frontend_vue_router">{{ frontendContent.vueRouter }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 80%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="frontend_state_management">{{ frontendContent.stateManagement }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 75%"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Professional Impact -->
            <div class="frontend-impact">
              <h3 ref="frontend_impact_title">{{ frontendContent.impactTitle }}</h3>
              <div class="impact-metrics">
                <div class="metric-card">
                  <div class="metric-number">3+</div>
                  <div class="metric-label" ref="frontend_projects_label">{{ frontendContent.projectsLabel }}</div>
                  <div class="metric-description" ref="frontend_projects_description">{{ frontendContent.projectsDescription }}</div>
                </div>
                <div class="metric-card">
                  <div class="metric-number">3</div>
                  <div class="metric-label" ref="frontend_frameworks_label">{{ frontendContent.frameworksLabel }}</div>
                  <div class="metric-description" ref="frontend_frameworks_description">{{ frontendContent.frameworksDescription }}</div>
                </div>
                <div class="metric-card">
                  <div class="metric-number">🇳🇴</div>
                  <div class="metric-label" ref="frontend_international_label">{{ frontendContent.internationalLabel }}</div>
                  <div class="metric-description" ref="frontend_international_description">{{ frontendContent.internationalDescription }}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- FullStack Developer 2023-Presente -->
        <div v-if="activeTab === 'fullstack'" class="tab-content">
          <div class="content-header">
            <h2 class="section-title" ref="fullstack_experience">{{ fullstackTitle }}</h2>
            <p class="section-subtitle" ref="fullstack_subtitle">{{ fullstackSubtitle }}</p>
          </div>

          <div class="fullstack-experience">
            <!-- Main Story Section -->
            <div class="fullstack-story">
              <div class="story-content">
                <div class="story-text">
                  <div class="intro-section">
                    <p class="fullstack-intro">
                      <span ref="fullstack_intro" v-html="fullstackContent.intro"></span>
                    </p>
                  </div>

                  <div class="journey-description">
                    <p v-html="fullstackContent.journey1"></p>

                    <p v-html="fullstackContent.journey2"></p>
                  </div>
                </div>

                <div class="story-image">
                  <div class="fullstack-visual">
                    <div class="fullstack-photo-placeholder">
                      <picture>
                        <source srcset="../assets/imgs-bck/company-bm.webp" type="image/webp">
                        <img src="../assets/imgs-bck/company-bm.jpg" alt="Jorge Mopanc - FullStack Developer" class="fullstack-photo">
                      </picture>
                      <div class="photo-caption">
                        <span ref="fullstack_photo_caption">{{ fullstackContent.photoCaption }}</span>
                        <small>2023 - Presente</small>
                      </div>
                    </div>
                    <div class="current-position">
                      <div class="position-badge">
                        <div class="position-icon">
                          <i class="ri-stack-line"></i>
                        </div>
                        <div class="position-info">
                          <span ref="fullstack_current_position">{{ fullstackContent.currentPosition }}</span>
                          <small>2023 - Presente</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main Projects -->
            <div class="main-projects">
              <h3 ref="fullstack_main_projects_title">{{ fullstackContent.mainProjectsTitle }}</h3>

              <div class="project-showcase">
                <div class="project-card enterprise">
                  <div class="project-header">
                    <div class="project-icon">
                      <i class="ri-building-line"></i>
                    </div>
                    <div class="project-title">
                      <h4 ref="fullstack_enterprise_software_title">{{ fullstackContent.enterpriseSoftwareTitle }}</h4>
                      <span class="project-type" ref="fullstack_enterprise_software_type">{{ fullstackContent.enterpriseSoftwareType }}</span>
                    </div>
                  </div>

                  <div class="project-description">
                    <p ref="fullstack_enterprise_description" v-html="fullstackContent.enterpriseDescription"></p>
                  </div>

                  <div class="project-features">
                    <div class="feature-group">
                      <h5 ref="fullstack_frontend_react_title">{{ fullstackContent.frontendReactTitle }}</h5>
                      <ul>
                        <li ref="fullstack_frontend_feature1">{{ fullstackContent.frontendFeature1 }}</li>
                        <li ref="fullstack_frontend_feature2">{{ fullstackContent.frontendFeature2 }}</li>
                        <li ref="fullstack_frontend_feature3">{{ fullstackContent.frontendFeature3 }}</li>
                        <li ref="fullstack_frontend_feature4">{{ fullstackContent.frontendFeature4 }}</li>
                        <li ref="fullstack_frontend_feature5">{{ fullstackContent.frontendFeature5 }}</li>
                      </ul>
                    </div>

                    <div class="feature-group">
                      <h5 ref="fullstack_backend_nodejs_title">{{ fullstackContent.backendNodejsTitle }}</h5>
                      <ul>
                        <li ref="fullstack_backend_feature1">{{ fullstackContent.backendFeature1 }}</li>
                        <li ref="fullstack_backend_feature2">{{ fullstackContent.backendFeature2 }}</li>
                        <li ref="fullstack_backend_feature3">{{ fullstackContent.backendFeature3 }}</li>
                        <li ref="fullstack_backend_feature4">{{ fullstackContent.backendFeature4 }}</li>
                        <li ref="fullstack_backend_feature5">{{ fullstackContent.backendFeature5 }}</li>
                      </ul>
                    </div>
                  </div>

                  <div class="tech-stack-clean">
                    <div class="tech-group-clean">
                      <div class="tech-pill primary">Node.js</div>
                      <div class="tech-pill primary">React</div>
                    </div>
                    <div class="tech-group-clean">
                      <div class="tech-pill secondary">Socket.IO</div>
                      <div class="tech-pill secondary">REST API</div>
                      <div class="tech-pill secondary">PKG</div>
                    </div>
                    <div class="tech-group-clean">
                      <div class="tech-pill tertiary">Watchdog</div>
                      <div class="tech-pill tertiary">InnoSetup</div>
                      <div class="tech-pill tertiary">SysTray</div>
                    </div>
                  </div>
                </div>

                <div class="project-card hardware">
                  <div class="project-header">
                    <div class="project-icon">
                      <i class="ri-cpu-line"></i>
                    </div>
                    <div class="project-title">
                      <h4 ref="fullstack_payment_machines_title">{{ fullstackContent.paymentMachinesTitle }}</h4>
                      <span class="project-type" ref="fullstack_payment_machines_type">{{ fullstackContent.paymentMachinesType }}</span>
                    </div>
                  </div>

                  <div class="project-description">
                    <p ref="fullstack_payment_description" v-html="fullstackContent.paymentDescription"></p>
                  </div>

                  <div class="project-features">
                    <div class="feature-group">
                      <h5 ref="fullstack_hardware_components_title">{{ fullstackContent.hardwareComponentsTitle }}</h5>
                      <ul>
                        <li ref="fullstack_hardware_feature1">{{ fullstackContent.hardwareFeature1 }}</li>
                        <li ref="fullstack_hardware_feature2">{{ fullstackContent.hardwareFeature2 }}</li>
                        <li ref="fullstack_hardware_feature3">{{ fullstackContent.hardwareFeature3 }}</li>
                        <li ref="fullstack_hardware_feature4">{{ fullstackContent.hardwareFeature4 }}</li>
                        <li ref="fullstack_hardware_feature5">{{ fullstackContent.hardwareFeature5 }}</li>
                      </ul>
                    </div>

                    <div class="feature-group">
                      <h5 ref="fullstack_software_control_title">{{ fullstackContent.softwareControlTitle }}</h5>
                      <ul>
                        <li ref="fullstack_software_feature1">{{ fullstackContent.softwareFeature1 }}</li>
                        <li ref="fullstack_software_feature2">{{ fullstackContent.softwareFeature2 }}</li>
                        <li ref="fullstack_software_feature3">{{ fullstackContent.softwareFeature3 }}</li>
                        <li ref="fullstack_software_feature4">{{ fullstackContent.softwareFeature4 }}</li>
                        <li ref="fullstack_software_feature5">{{ fullstackContent.softwareFeature5 }}</li>
                      </ul>
                    </div>
                  </div>

                  <div class="tech-stack-clean">
                    <div class="tech-group-clean">
                      <div class="tech-pill primary">C Programming</div>
                      <div class="tech-pill primary">CCTalk Protocol</div>
                    </div>
                    <div class="tech-group-clean">
                      <div class="tech-pill secondary">MQTT</div>
                      <div class="tech-pill secondary">Hardware Control</div>
                    </div>
                    <div class="tech-group-clean">
                      <div class="tech-pill tertiary">Mobile Integration</div>
                      <div class="tech-pill tertiary">Real-time Systems</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Technical Competencies -->
            <div class="fullstack-competencies">
              <h3>{{ fullstackContent.competenciesTitle }}</h3>
              <div class="competencies-advanced">

                <div class="competency-area advanced">
                  <div class="competency-header">
                    <i class="ri-computer-line"></i>
                    <h4 ref="fullstack_frontend_development_title">{{ fullstackContent.frontendDevelopmentTitle }}</h4>
                  </div>
                  <div class="competency-skills">
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="fullstack_react_advanced">{{ fullstackContent.reactAdvanced }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 92%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="fullstack_socketio_realtime">{{ fullstackContent.socketioRealtime }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 88%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="fullstack_modern_javascript">{{ fullstackContent.modernJavascript }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 90%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="competency-area advanced">
                  <div class="competency-header">
                    <i class="ri-server-line"></i>
                    <h4 ref="fullstack_backend_development_title">{{ fullstackContent.backendDevelopmentTitle }}</h4>
                  </div>
                  <div class="competency-skills">
                    <div class="skill-progress-item">
                      <span class="skill-name" ref="fullstack_nodejs_expert">{{ fullstackContent.nodejsExpert }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 95%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name">{{ fullstackContent.restApiDesign }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 93%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name">{{ fullstackContent.enterpriseArchitecture }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 85%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="competency-area advanced">
                  <div class="competency-header">
                    <i class="ri-cpu-line"></i>
                    <h4>{{ fullstackContent.systemsProgrammingTitle }}</h4>
                  </div>
                  <div class="competency-skills">
                    <div class="skill-progress-item">
                      <span class="skill-name">{{ fullstackContent.cProgramming }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 80%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name">{{ fullstackContent.hardwareIntegration }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 75%"></div>
                      </div>
                    </div>
                    <div class="skill-progress-item">
                      <span class="skill-name">{{ fullstackContent.cctalkProtocol }}</span>
                      <div class="skill-level-bar">
                        <div class="skill-fill" style="width: 78%"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Professional Impact -->
            <div class="fullstack-impact">
              <h3>{{ fullstackContent.impactResponsibilitiesTitle }}</h3>
              <div class="impact-metrics-advanced">
                <div class="metric-card primary">
                  <div class="metric-content">
                    <div class="metric-number">{{ fullstackContent.impactEnterpriseLabel }}</div>
                    <div class="metric-label">{{ fullstackContent.impactEnterpriseTitle }}</div>
                    <div class="metric-description">{{ fullstackContent.impactEnterpriseDescription }}</div>
                  </div>
                </div>
                <div class="metric-card primary">
                  <div class="metric-content">
                    <div class="metric-number">{{ fullstackContent.impactHardwareLabel }}</div>
                    <div class="metric-label">{{ fullstackContent.impactHardwareTitle }}</div>
                    <div class="metric-description">{{ fullstackContent.impactHardwareDescription }}</div>
                  </div>
                </div>
                <div class="metric-card primary">
                  <div class="metric-content">
                    <div class="metric-number">{{ fullstackContent.impactRealtimeLabel }}</div>
                    <div class="metric-label">{{ fullstackContent.impactRealtimeTitle }}</div>
                    <div class="metric-description">{{ fullstackContent.impactRealtimeDescription }}</div>
                  </div>
                </div>
                <div class="metric-card primary">
                  <div class="metric-content">
                    <div class="metric-number">{{ fullstackContent.impactFullstackLabel }}</div>
                    <div class="metric-label">{{ fullstackContent.impactFullstackTitle }}</div>
                    <div class="metric-description">{{ fullstackContent.impactFullstackDescription }}</div>
                  </div>
                </div>
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

    <!-- Restricted Content Modal -->
    <RestrictedContentModal
      :visible="showAccessModal"
      :requestedContent="'About Page - Professional Experience'"
      @close="closeAccessModal"
      @show-auth="showAuthTerminal"
    />
  </div>
</template>

<script>
import { useAccessControlSimple } from '../composables/useAccessControlSimple.js'
import { useLanguage } from '../composables/useLanguage.js'
import RestrictedContentModal from '../components/RestrictedContentModal.vue'

export default {
  name: 'AboutPageModern',
  components: {
    RestrictedContentModal
  },
  setup() {
    const { isAccessValid } = useAccessControlSimple()
    const { translations, initialize } = useLanguage()

    // Initialize translations
    initialize()

    return {
      isAccessValid,
      translations
    }
  },
  data() {
    return {
      activeTab: 'technical',
      selectedCertificate: null,
      activeTimelineItem: null,
      expandedItem: null,
      timelineProgress: 0,
      showAccessModal: false,
      requestedTabId: null,
      militaryTitle: 'Exército Português',
      militarySubtitle: 'Atirador Especializado | Missão Internacional Bosnia Herzegovina',
      militaryContent: {
        intro: 'Entre 2004 e 2008, servi no Exército Português...',
        journey1: 'O meu percurso militar iniciou-se no Regimento de Infantaria 13...',
        journey2: 'O ponto alto desta experiência foi a participação na Missão de Apoio à Paz...',
        photoCaption: 'Operação Althea - Bosnia Herzegovina',
        timelineTitle: 'Marcos da Experiência Militar',
        basicTitle: 'Recruta e Treinamento Militar Básico',
        basicDescription: 'Formação fundamental no RI13 Vila Real...',
        specializedTitle: 'Treinamento Especializado de Atirador',
        specializedDescription: 'Especialização na Escola Prática de Infantaria...',
        preparationTitle: 'Preparação para Missão Internacional',
        preparationDescription: 'Treinos exaustivos e preparações militares...',
        deploymentTitle: 'Destacamento na Bosnia Herzegovina',
        deploymentDescription: 'Operação ALTHEA da EUFOR na base militar de Doboj...',
        conclusionTitle: 'Conclusão do Serviço Militar',
        conclusionDescription: 'Finalização da experiência militar...'
      },
      mcdonaldsTitle: 'McDonald\'s Portugal',
      mcdonaldsSubtitle: 'Funcionário → Coordenador → Gerente',
      mcdonaldsContent: {
        intro: 'Durante cerca de sete anos no McDonald\'s Portugal...',
        journey1: 'A minha progressão foi verdadeiramente excecional...',
        journey2: 'Como Gerente, assumi responsabilidades...',
        photoCaption: 'Manager McDonald\'s Portugal',
        progressionTitle: 'Progressão na Carreira',
        employeeTitle: 'Funcionário',
        employeePeriod: '2008-2009',
        employeeDescription: 'Início na cozinha com foco na preparação de hambúrgueres...',
        coordinatorTitle: 'Coordenador & Formador',
        coordinatorPeriod: '2009-2010',
        coordinatorDescription: 'Ao fim de cerca de um ano, foi-me dada a oportunidade...',
        managerTitle: 'Gerente',
        managerPeriod: '2010-2015',
        managerDescription: 'Aos 23 anos, tive a oportunidade de assumir funções de gerência...'
      },

      // Real Estate content
      realestateTitle: 'Agente Imobiliário',
      realestateSubtitle: 'Novo desafio focado em negociação, prospecção e desenvolvimento pessoal',
      realestateContent: {
        intro: 'Em 2015, tomei uma decisão corajosa que mudou o rumo da minha carreira: saí da segurança e estabilidade do <strong>McDonald\'s</strong> para abraçar um novo desafio no <strong>setor imobiliário</strong>. Esta transição representou não apenas uma mudança profissional, mas uma oportunidade de crescimento pessoal e desenvolvimento de competências comerciais que se revelariam fundamentais para o meu futuro.',
        journey1: 'Durante quatro anos como <strong>Agente Imobiliário</strong>, mergulhei num mundo completamente novo, onde a capacidade de comunicação, negociação e construção de relacionamentos se tornaram as minhas principais ferramentas de trabalho. Esta experiência ensinou-me que o sucesso não depende apenas de competências técnicas, mas da capacidade de compreender as necessidades das pessoas e criar soluções que beneficiem todas as partes envolvidas.',
        journey2: 'O setor imobiliário testou e fortaleceu a minha <strong>resiliência</strong>, <strong>adaptabilidade</strong> e capacidade de gerir pressão em situações comerciais complexas. Aprendi a analisar mercados, identificar oportunidades e, mais importante ainda, a desenvolver uma abordagem consultiva que coloca o cliente no centro de cada transação. Esta fase da minha carreira foi essencial para desenvolver soft skills que hoje aplico diariamente: comunicação clara, gestão de expectativas e capacidade de transformar desafios em oportunidades.',
        photoCaption: 'Agente Imobiliário',
        developmentAreasTitle: 'Áreas de Desenvolvimento',
        negotiationTitle: 'Negociação Avançada',
        negotiationFocus: 'Competência Core',
        negotiationDescription: 'Desenvolvimento de técnicas sofisticadas de negociação em contextos comerciais de alta complexidade. Aprendi a criar soluções win-win, gerir objeções com diplomacia e conduzir processos de venda que podem durar meses, mantendo sempre o foco no resultado e na satisfação do cliente.',
        prospectionTitle: 'Análise de Mercado & Prospecção',
        prospectionFocus: 'Visão Estratégica',
        prospectionDescription: 'Competências analíticas para identificar tendências de mercado, avaliar oportunidades de investimento e desenvolver estratégias de prospecção eficazes. Esta experiência desenvolveu o meu pensamento estratégico e capacidade de tomar decisões baseadas em dados.',
        relationshipTitle: 'Relacionamento & Comunicação',
        relationshipFocus: 'Soft Skills Excellence',
        relationshipDescription: 'Fortalecimento das competências interpessoais através da construção de relacionamentos de longa duração com clientes. Desenvolvi empatia, escuta ativa e capacidade de comunicar conceitos complexos de forma clara e acessível - competências que hoje aplico diariamente na interação com equipas e stakeholders tech.'
      },

      // Web Developer content
      webdevTitle: 'Web Developer - Primeira Experiência Tech',
      webdevSubtitle: 'Netgócio | E-commerce e Landing Pages B2C',
      webdevContent: {
        intro: 'Em 2021, após dois anos de estudos autodidactas intensivos, conquistei a minha <strong>primeira oportunidade profissional no mundo tech</strong> na Netegócio. Esta transição marcou o início de uma nova fase da minha carreira, onde pude aplicar paixão pela programação num contexto empresarial real, desenvolvendo soluções web para empresas B2C.',
        journey1: 'Na <strong>Netegócio</strong>, especializei-me no desenvolvimento de <strong>websites enterprise</strong>, focando em e-commerce e landing pages para empresas do sector B2C. Utilizando uma stack clássica mas robusta - <strong>PHP puro, HTML5, SASS e JavaScript/jQuery</strong> tive a oportunidade de construir alguns projetos, cada um adaptado às necessidades específicas dos clientes.',
        journey2: 'Esta experiência foi fundamental para solidificar os meus conhecimentos base em desenvolvimento web. Desde a estruturação semântica em HTML5, passando pelo desenvolvimento de funcionalidades dinâmicas em PHP, até à criação de interfaces responsivas com SASS e interatividade com jQuery, cada projeto contribuiu para formar uma base técnica sólida que ainda hoje valorizo.',
        timelineTitle: 'Web Developer',
        timeline1Title: 'Estudos Autodidactas Intensivos',
        timeline1Description: 'Período dedicado ao estudo de tecnologias web: HTML, CSS, JavaScript, PHP. Desenvolvimento de projetos pessoais e preparação para entrada no mercado tech.',
        timeline2Title: 'Primeira Oportunidade - Netegócio',
        timeline2Description: 'Integração na equipa como Web Developer. Início do desenvolvimento de websites enterprise com foco em e-commerce e landing pages.',
        timeline3Title: 'Especialização e Crescimento',
        timeline3Description: 'Especialização em PHP puro, SASS avançado e otimização de performance. Experiência com projetos de diferentes escalas e complexidades.',
        competenciesTitle: 'Competências Técnicas Desenvolvidas',
        backendTitle: 'Backend Development',
        backendPhp: 'PHP (Procedural)',
        backendMysql: 'MySQL',
        frontendTitle: 'Frontend Development',
        frontendHtml: 'HTML5 Semantic',
        frontendCss: 'SASS/CSS3',
        frontendJs: 'JavaScript/jQuery',
        impactTitle: 'Impacto e Resultados',
        websitesDeveloped: 'Websites Desenvolvidos',
        websitesDescription: 'E-commerce e landing pages para empresas B2C',
        mobileResponsive: 'Mobile-Responsive',
        mobileDescription: 'Todos os projetos otimizados para dispositivos móveis',
        serverManagement: 'Gestão de servidores',
        serverDescription: 'Suporte a cerca de 400 clientes com hospedagens nos servidores da empresa'
      },

      // Frontend Developer content
      frontendTitle: 'Frontend Developer - Internacional',
      frontendSubtitle: 'Frontkom (Noruega) | Trabalho Remoto',
      frontendContent: {
        intro: 'Em 2022, a minha carreira tech deu um salto significativo com a oportunidade de trabalhar remotamente para a <strong>Frontkom</strong>, uma empresa norueguesa especializada em soluções digitais. Esta experiência internacional marcou a minha evolução de web developer para frontend developer especializado, introduzindo-me ao ecossistema moderno de desenvolvimento frontend.',
        journey1: 'Na <strong>Frontkom</strong>, especializei-me no desenvolvimento com <strong>React.js, Next.js e Vue.js</strong>, trabalhando na construção e reformulação de websites para clientes internacionais. Esta transição do stack clássico (PHP/jQuery) para tecnologias modernas representou um marco na minha evolução profissional, permitindo-me dominar os frameworks mais procurados no mercado.',
        journey2: 'O trabalho remoto com uma empresa norueguesa proporcionou-me experiência valiosa em <strong>colaboração internacional</strong>, gestão de projetos distribuídos e adaptação a diferentes culturas empresariais. Desenvolvi alguns projetos, desde websites institucionais até aplicações web complexas, sempre com foco na performance, acessibilidade e experiência do utilizador.',
        internationalBadge: '🇳🇴 Remote Work',
        remoteWork: 'Remote Work',
        international: 'Internacional',
        // Additional timeline and competencies
        timelineTitle: 'Frontend Developer',
        transitionTitle: 'Transição para Frontend Moderno',
        transitionDescription: 'Início dos estudos em React.js e Vue.js...',
        integrationTitle: 'Integração na Frontkom',
        integrationDescription: 'Início do trabalho remoto para empresa norueguesa...',
        specializationTitle: 'Especialização e Crescimento',
        specializationDescription: 'Desenvolvimento de projetos com React, Next.js e Vue.js...',
        techEvolutionTitle: 'Evolução Tecnológica',
        fromStackTitle: 'De Stack Clássico',
        toStackTitle: 'Para Frontend Moderno',
        competenciesTitle: 'Competências Frontend Desenvolvidas',
        reactEcosystemTitle: 'React Ecosystem',
        vueDelopmentTitle: 'Vue.js Development',
        reactComponents: 'React Components',
        hooksContext: 'Hooks & Context',
        nextjs: 'Next.js',
        vue3Composition: 'Vue 3 Composition',
        vueRouter: 'Vue Router',
        stateManagement: 'State Management',
        impactTitle: 'Impacto Internacional',
        projectsLabel: 'Projetos',
        projectsDescription: 'Websites e aplicações para clientes internacionais',
        frameworksLabel: 'Frameworks',
        frameworksDescription: 'React, Next.js e Vue.js em produção',
        internationalLabel: 'Experiência Internacional',
        internationalDescription: 'Trabalho remoto com equipas multiculturais'
      },

      // FullStack Developer content
      fullstackTitle: 'FullStack Developer - Posição Atual',
      fullstackSubtitle: 'Balanças Marques | Desenvolvimento de Sistemas Industriais Enterprise',
      fullstackContent: {
        intro: 'Desde 2023, ocupo a posição de FullStack Developer na Balanças Marques...',
        journey1: 'A minha responsabilidade principal centra-se no desenvolvimento de um software enterprise...',
        journey2: 'Paralelamente, sou responsável pela programação e manutenção de máquinas de pagamento automático...',
        photoCaption: 'FullStack Developer - Balanças Marques',
        currentPosition: 'Posição Atual',
        // Additional project details
        mainProjectsTitle: 'Projetos Principais em Desenvolvimento',
        enterpriseSoftwareTitle: 'Software Enterprise de Gestão',
        enterpriseSoftwareType: 'Sistema Completo Frontend + Backend',
        enterpriseDescription: 'Software enterprise completo com licenciamento...',
        frontendReactTitle: 'Frontend (React)',
        frontendFeature1: 'Interface de gestão completa de negócios',
        frontendFeature2: 'Dashboard em tempo real com Socket.IO',
        frontendFeature3: 'Gestão de artigos, famílias e stocks',
        frontendFeature4: 'Sistema de utilizadores e permissões',
        frontendFeature5: 'Visualização de monitores e estatísticas',
        backendNodejsTitle: 'Backend (Node.js)',
        backendFeature1: 'REST API completa para todas as operações',
        backendFeature2: 'Sistema de licenciamento enterprise',
        backendFeature3: 'Conectividade IP/porta e cloud',
        backendFeature4: 'Gestão de vendas e relatórios',
        backendFeature5: 'Controlo de nutrientes e ingredientes',
        paymentMachinesTitle: 'Máquinas de Pagamento Automático',
        paymentMachinesType: 'Sistema de Hardware + Software Integrado',
        paymentDescription: 'Desenvolvimento e manutenção de máquinas de pagamento...',
        hardwareComponentsTitle: 'Componentes Hardware',
        hardwareFeature1: 'Noteiros e sistemas de validação',
        hardwareFeature2: 'Moedeiros com sorter hoppers',
        hardwareFeature3: 'Controladores de luzes e tapetes',
        hardwareFeature4: 'Validadores de notas e moedas',
        hardwareFeature5: 'Sistemas de troco automático',
        softwareControlTitle: 'Software de Controlo (C)',
        softwareFeature1: 'Comunicação CCTalk protocol',
        softwareFeature2: 'Controlo de componentes hardware',
        softwareFeature3: 'Gestão de transações e troco',
        softwareFeature4: 'MQTT para comunicação mobile',
        softwareFeature5: 'Sistema de diagnósticos e logs',
        // Additional competencies and impact
        competenciesTitle: 'Competências FullStack Avançadas',
        frontendDevelopmentTitle: 'Frontend Development',
        reactAdvanced: 'React.js (Advanced)',
        socketioRealtime: 'Socket.IO Real-time',
        modernJavascript: 'Modern JavaScript',
        backendDevelopmentTitle: 'Backend Development',
        nodejsExpert: 'Node.js (Expert)',
        restApiDesign: 'REST API Design',
        enterpriseArchitecture: 'Enterprise Architecture',
        systemsProgrammingTitle: 'Systems Programming',
        cProgramming: 'C Programming',
        hardwareIntegration: 'Hardware Integration',
        cctalkProtocol: 'CCTalk Protocol',
        impactResponsibilitiesTitle: 'Impacto e Responsabilidades Atuais',
        impactEnterpriseLabel: 'Enterprise',
        impactEnterpriseTitle: 'Software Completo',
        impactEnterpriseDescription: 'Sistema de gestão com licenciamento para negócios industriais',
        impactHardwareLabel: 'Hardware',
        impactHardwareTitle: 'Controlo Total',
        impactHardwareDescription: 'Programação C para máquinas de pagamento automático',
        impactRealtimeLabel: 'Real-time',
        impactRealtimeTitle: 'Comunicação',
        impactRealtimeDescription: 'Socket.IO, MQTT e protocolos industriais',
        impactFullstackLabel: 'Full-Stack',
        impactFullstackTitle: 'Responsabilidade',
        impactFullstackDescription: 'Frontend, Backend, Hardware e DevOps'
      },

      tabTranslations: {
        technical: { label: 'Technical Skills', years: 'Competências' },
        military: { label: 'Militar', years: '2004-2008' },
        manager: { label: 'Gerente', years: '2008-2015' },
        realestate: { label: 'Imobiliário', years: '2015-2019' },
        webdev: { label: 'Web Developer', years: '2021-2022' },
        frontend: { label: 'Frontend Dev', years: '2022-2023' },
        fullstack: { label: 'FullStack Dev', years: '2023-Presente' }
      },
      skillsCategoryTranslations: {
        core_stack: 'Core Stack Senior - JavaScript Ecosystem',
        devops_tools: 'DevOps & Development Tools',
        hardware_systems: 'Hardware & Systems (C/IoT)',
        emerging_tech: 'Experimentação & Emerging Tech',
        database_management: 'Database & Data Management',
        leadership_business: 'Leadership & Business Impact'
      }
    }
  },

  computed: {
    tabs() {
      return [
        {
          id: 'technical',
          label: this.tabTranslations.technical.label,
          years: this.tabTranslations.technical.years,
          icon: 'ri-code-s-slash-line',
          requiresAccess: false
        },
        {
          id: 'military',
          label: this.tabTranslations.military.label,
          years: this.tabTranslations.military.years,
          icon: 'ri-shield-star-line',
          requiresAccess: true
        },
        {
          id: 'manager',
          label: this.tabTranslations.manager.label,
          years: this.tabTranslations.manager.years,
          icon: 'ri-store-line',
          requiresAccess: true
        },
        {
          id: 'realestate',
          label: this.tabTranslations.realestate.label,
          years: this.tabTranslations.realestate.years,
          icon: 'ri-home-line',
          requiresAccess: true
        },
        {
          id: 'webdev',
          label: this.tabTranslations.webdev.label,
          years: this.tabTranslations.webdev.years,
          icon: 'ri-code-line',
          requiresAccess: true
        },
        {
          id: 'frontend',
          label: this.tabTranslations.frontend.label,
          years: this.tabTranslations.frontend.years,
          icon: 'ri-reactjs-line',
          requiresAccess: true
        },
        {
          id: 'fullstack',
          label: this.tabTranslations.fullstack.label,
          years: this.tabTranslations.fullstack.years,
          icon: 'ri-stack-line',
          requiresAccess: true
        }
      ]
    },

    lockTooltipMessage() {
      const selectedLanguage = localStorage.getItem('selectedLanguage') || "en"
      return selectedLanguage === 'pt'
        ? "🔒 Acesso Premium - Clique para mais informações sobre como desbloquear este conteúdo"
        : "🔒 Premium Access - Click for information on how to unlock this content"
    },

    skillsCategories() {
      return [
        {
          name: this.skillsCategoryTranslations.core_stack,
          skills: [
            { name: 'Node.js', level: 95 },
            { name: 'React.js', level: 92 },
            { name: 'TypeScript', level: 90 },
            { name: 'Express.js', level: 95 },
            { name: 'JavaScript ES6+', level: 95 },
            { name: 'RESTful APIs', level: 93 }
          ]
        },
        {
          name: this.skillsCategoryTranslations.devops_tools,
          skills: [
            { name: 'Docker & Containers', level: 80 },
            { name: 'Git & Version Control', level: 90 },
            { name: 'CI/CD Pipelines', level: 85 }
          ]
        },
        {
          name: this.skillsCategoryTranslations.hardware_systems,
          skills: [
            { name: 'C Programming', level: 85 },
            { name: 'MQTT Protocol', level: 80 },
            { name: 'ccTalk Protocol', level: 78 },
            { name: 'UART/Serial Comm', level: 82 },
            { name: 'Memory Management', level: 80 },
            { name: 'Payment Systems', level: 75 }
          ]
        },
        {
          name: this.skillsCategoryTranslations.emerging_tech,
          skills: [
            { name: 'Python & Data Science', level: 70 },
            { name: 'AI/Machine Learning', level: 65 },
            { name: 'Quantum Programming', level: 60 },
            { name: 'Blockchain Concepts', level: 65 },
            { name: 'IoT Integration', level: 75 }
          ]
        },
        {
          name: this.skillsCategoryTranslations.database_management,
          skills: [
            { name: 'PostgreSQL', level: 88 },
            { name: 'MySQL', level: 85 },
            { name: 'SQLite', level: 82 },
            { name: 'SQL Server', level: 80 },
            { name: 'SQL Optimization', level: 85 }
          ]
        },
        {
          name: this.skillsCategoryTranslations.leadership_business,
          skills: [
            { name: 'Team Leadership', level: 95 },
            { name: 'Technical Mentoring', level: 90 },
            { name: 'Project Management', level: 88 },
            { name: 'Code Review & Quality', level: 90 },
            { name: 'Agile Methodologies', level: 85 }
          ]
        }
      ]
    },

    careerJourney() {
      return [
        {
          id: 1,
          years: '2004-2008',
          duration: '4 anos',
          title: 'Exército Português - Atirador Especializado',
          company: 'Regimento de Infantaria 13 (RI13) - Vila Real | EPI - Mafra',
          category: 'military',
          icon: 'ri-shield-star-line',
          position: 8,
          description: 'Serviço militar no Exército Português como atirador especializado. Passei pelo RI13 em Vila Real e pela Escola Prática de Infantaria em Mafra. Em 2006 participei numa missão de apoio à paz na Bósnia Herzegovina após a guerra civil de 95, destacado pela EUFOR como parte da ALFACOY (Companhia de Atiradores).',
          achievements: [
            'Especialização em armamento e tiro - múltiplas armas e equipamentos',
            'Missão Internacional de Paz - Bósnia Herzegovina (2006) - 8 meses',
            'Membro da ALFACOY (Companhia de Atiradores) destacado pela EUFOR',
            'Experiências enriquecedoras em várias missões e treinos',
            'Liderança e coordenação de equipas em operações militares'
          ],
          certifications: [
            { name: 'Atirador Especializado', type: 'military', icon: 'ri-focus-line' },
            { name: 'Medalha Serviço Paz', type: 'award', icon: 'ri-global-line' },
            { name: 'EUFOR - ALFACOY', type: 'military', icon: 'ri-shield-star-line' }
          ],
          skillsGained: ['Liderança', 'Disciplina', 'Precisão', 'Experiência Internacional', 'Gestão de Crise', 'Trabalho em Equipa'],
          facts: [
            { label: 'Local da Missão', value: 'Bósnia Herzegovina', icon: 'ri-map-pin-line' },
            { label: 'Duração Missão', value: '8 meses', icon: 'ri-time-line' },
            { label: 'Especialidade', value: 'Atirador ALFACOY', icon: 'ri-focus-line' },
            { label: 'Organizações', value: 'EUFOR | RI13 | EPI', icon: 'ri-building-line' }
          ]
        },
        {
          id: 2,
          years: '2008-2015',
          duration: '7 anos',
          title: 'McDonald\'s - Progressão de Carreira Rápida',
          company: "McDonald's Portugal",
          category: 'corporate',
          icon: 'ri-store-line',
          position: 22,
          description: 'Comecei como funcionário a fazer hambúrgueres e em cerca de 1 ano subi diretamente para coordenador. Fiz o curso de formador e passado mais um ano subi para gerente, onde fiquei até 2015. Experiência completa de gestão de equipas e operações.',
          achievements: [
            'Progressão rápida: Funcionário → Coordenador (1 ano) → Gerente (2 anos)',
            'Gestão completa de restaurante com operações multimilionárias',
            'Liderança de equipas de 20+ funcionários em múltiplos turnos',
            'Formação e desenvolvimento de colaboradores',
            'Implementação de processos de melhoria operacional'
          ],
          certifications: [
            { name: 'Formador Certificado', type: 'professional', icon: 'ri-presentation-line' },
            { name: 'Coordenador Operacional', type: 'professional', icon: 'ri-settings-line' },
            { name: 'Gerente de Restaurante', type: 'management', icon: 'ri-user-star-line' }
          ],
          skillsGained: ['Liderança de Equipas', 'Gestão Operacional', 'Formação de Staff', 'Atendimento ao Cliente', 'Otimização de Processos'],
          facts: [
            { label: 'Tamanho da Equipa', value: '20+ funcionários', icon: 'ri-group-line' },
            { label: 'Progressão', value: 'Funcionário a Gerente em 2 anos', icon: 'ri-arrow-up-line' },
            { label: 'Funções', value: '4 posições diferentes', icon: 'ri-trophy-line' },
            { label: 'Certificações', value: 'Formador + Gestão', icon: 'ri-award-line' }
          ]
        },
        {
          id: 3,
          years: '2015-2019',
          duration: '4 anos',
          title: 'Corretor Imobiliário',
          company: 'Consultor Independente',
          category: 'sales',
          icon: 'ri-home-line',
          position: 36,
          description: 'Abracei um novo desafio como corretor imobiliário onde permaneci até 2019. Experiência rica em aprendizados: negociação, prospecção de mercado, avaliações, desenvolvimento pessoal, resiliência, vendas e gestão de clientes.',
          achievements: [
            'Desenvolvimento de competências avançadas em negociação',
            'Prospecção ativa de mercado e identificação de oportunidades',
            'Realização de avaliações imobiliárias precisas',
            'Construção de carteira sólida de clientes',
            'Desenvolvimento pessoal contínuo e resiliência profissional'
          ],
          certifications: [
            { name: 'Licença Imobiliária', type: 'professional', icon: 'ri-building-line' },
            { name: 'Técnicas de Vendas', type: 'professional', icon: 'ri-handshake-line' },
            { name: 'Avaliação Imobiliária', type: 'professional', icon: 'ri-calculator-line' }
          ],
          skillsGained: ['Negociação Avançada', 'Prospecção de Mercado', 'Avaliações', 'Desenvolvimento Pessoal', 'Resiliência', 'Vendas', 'Gestão de Clientes'],
          facts: [
            { label: 'Competências', value: 'Negociação + Vendas', icon: 'ri-handshake-line' },
            { label: 'Mercado', value: 'Prospecção + Avaliações', icon: 'ri-search-line' },
            { label: 'Desenvolvimento', value: 'Pessoal + Resiliência', icon: 'ri-plant-line' },
            { label: 'Clientes', value: 'Gestão + Relacionamento', icon: 'ri-customer-service-line' }
          ]
        },
        {
          id: 4,
          years: '2019-2021',
          duration: '2 anos',
          title: 'Transição para Desenvolvimento - Formação Intensiva',
          company: 'Curso Profissional + Autodidacta + Cursos Online',
          category: 'education',
          icon: 'ri-graduation-cap-line',
          position: 50,
          description: 'De dezembro de 2019 a agosto de 2021 dediquei-me completamente a estudar. Fiz um curso profissional de desenvolvimento e também vários cursos online, complementando com muito estudo autodidacta. Transição completa do setor comercial para a tecnologia.',
          achievements: [
            'Dedicação total aos estudos durante quase 2 anos',
            'Curso profissional de desenvolvimento concluído com sucesso',
            'Múltiplos cursos online em diversas tecnologias',
            'Estudo autodidacta intensivo - múltiplas linguagens e frameworks',
            'Transição bem-sucedida para área tecnológica'
          ],
          certifications: [
            { name: 'Curso Profissional Desenvolvimento', type: 'education', icon: 'ri-code-line' },
            { name: 'Múltiplos Cursos Online', type: 'education', icon: 'ri-global-line' },
            { name: 'Formação Autodidacta', type: 'education', icon: 'ri-brain-line' }
          ],
          skillsGained: ['Programação', 'Desenvolvimento Web', 'Base de Dados', 'Arquitetura Software', 'Resolução Problemas', 'Aprendizagem Autodidacta'],
          facts: [
            { label: 'Período Dedicado', value: 'Dez 2019 - Ago 2021', icon: 'ri-calendar-line' },
            { label: 'Tipo Formação', value: 'Profissional + Online + Autodidacta', icon: 'ri-book-line' },
            { label: 'Foco', value: '100% Estudos', icon: 'ri-focus-line' },
            { label: 'Resultado', value: 'Transição Completa Tech', icon: 'ri-rocket-line' }
          ]
        },
        {
          id: 5,
          years: '2021-2022',
          duration: '1 ano',
          title: 'Web Developer - Primeira Experiência Profissional',
          company: 'Netgócio',
          category: 'tech',
          icon: 'ri-code-line',
          position: 64,
          description: 'Primeira experiência profissional como programador em 2021. Fui construir sites e-commerce e landing pages para empresas e negócios B2C. Experiência valiosa no desenvolvimento de soluções web completas.',
          achievements: [
            'Desenvolvimento de 30+ sites responsivos desde o início',
            'Criação de plataformas e-commerce para negócios B2C',
            'Construção de landing pages de alta conversão',
            'Implementação de padrões web modernos e melhores práticas',
            'Colaboração eficaz com equipas de design e marketing'
          ],
          certifications: [
            { name: 'Desenvolvimento Vue.js', type: 'tech', icon: 'ri-vuejs-line' },
            { name: 'Desenvolvimento PHP', type: 'tech', icon: 'ri-server-line' },
            { name: 'Otimização Web', type: 'tech', icon: 'ri-speed-line' }
          ],
          skillsGained: ['Vue.js', 'PHP', 'MySQL', 'Bootstrap', 'E-commerce', 'Landing Pages', 'B2C'],
          facts: [
            { label: 'Sites Construídos', value: '30+ projetos', icon: 'ri-global-line' },
            { label: 'Tipo Projetos', value: 'E-commerce + Landing Pages', icon: 'ri-store-line' },
            { label: 'Setor', value: 'Empresas B2C', icon: 'ri-building-line' },
            { label: 'Tech Stack', value: 'Vue.js + PHP + MySQL', icon: 'ri-code-line' }
          ]
        },
        {
          id: 6,
          years: '2022-2023',
          duration: '1 ano',
          title: 'Frontend Developer - Experiência Internacional',
          company: 'Frontkom (Noruega)',
          category: 'tech-international',
          icon: 'ri-reactjs-line',
          position: 78,
          description: 'Em 2022 mudei para uma empresa da Noruega, trabalhando em remoto para a Frontkom como frontend developer. Experiência internacional valiosa com clientes internacionais e tecnologias de ponta.',
          achievements: [
            'Desenvolvimento de interfaces para 50+ clientes internacionais',
            'Migração de 15 sites legados com melhorias de performance',
            'Implementação de testes automatizados',
            'Trabalho com React e tecnologias headless CMS de vanguarda',
            'Segunda experiência de trabalho internacional (após missão militar)'
          ],
          certifications: [
            { name: 'React Avançado', type: 'tech', icon: 'ri-reactjs-line' },
            { name: 'Headless CMS', type: 'tech', icon: 'ri-database-line' },
            { name: 'Colaboração Internacional', type: 'professional', icon: 'ri-global-line' }
          ],
          skillsGained: ['React', 'Tailwind CSS', 'Drupal', 'Headless CMS', 'Colaboração Internacional', 'Trabalho Remoto'],
          facts: [
            { label: 'Clientes', value: '50+ projetos internacionais', icon: 'ri-global-line' },
            { label: 'Migrações', value: '15 sites legados', icon: 'ri-refresh-line' },
            { label: 'País', value: 'Noruega 🇳🇴', icon: 'ri-map-pin-line' },
            { label: 'Modalidade', value: 'Trabalho Remoto', icon: 'ri-computer-line' }
          ]
        },
        {
          id: 7,
          years: '2023-Presente',
          duration: 'Atual',
          title: 'FullStack Developer - Sistemas Industriais',
          company: 'Balanças Marques',
          category: 'tech-current',
          icon: 'ri-stack-line',
          position: 92,
          description: 'Desde 2023 trabalho na Balanças Marques como fullstack developer. Lidero o desenvolvimento de sistemas críticos para produtos industriais, arquitetando APIs robustas e mentorizando equipas técnicas. Stack completo: React, TypeScript, Node.js, C, PostgreSQL, Docker e AWS.',
          achievements: [
            'Liderança no desenvolvimento de sistemas industriais críticos',
            'Arquitetura de APIs RESTful robustas para aplicações industriais',
            'Mentoria de equipas técnicas implementando melhores práticas',
            'Redução de bugs do sistema em 60% através de melhor arquitetura',
            'Desenvolvimento full-stack com tecnologias modernas e C para sistemas embebidos'
          ],
          certifications: [
            { name: 'AWS Cloud Practitioner', type: 'tech', icon: 'ri-cloud-line' },
            { name: 'Docker & Containerização', type: 'tech', icon: 'ri-server-line' },
            { name: 'Arquitetura de Sistemas', type: 'tech', icon: 'ri-settings-2-line' }
          ],
          skillsGained: ['Desenvolvimento Full-Stack', 'Arquitetura de Sistemas', 'Mentoria Técnica', 'Programação C', 'Sistemas Industriais', 'DevOps'],
          facts: [
            { label: 'Redução Bugs', value: '60% melhoria', icon: 'ri-bug-line' },
            { label: 'Tech Stack', value: 'React, TypeScript, Node.js, C, PostgreSQL', icon: 'ri-stack-line' },
            { label: 'Função', value: 'Tech Lead & Mentor', icon: 'ri-user-star-line' },
            { label: 'Setor', value: 'Sistemas Industriais', icon: 'ri-settings-line' }
          ]
        }
      ]
    }
  },

  methods: {
    handleTabClick(tabId, event) {
      // Prevent event manipulation
      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      // Verify event target has correct data attributes (anti-tampering)
      if (event && event.target) {
        const targetTabId = event.target.closest('button')?.getAttribute('data-tab-id')
        const requiresAccess = event.target.closest('button')?.getAttribute('data-requires-access')

        if (targetTabId !== tabId) {
          console.warn('Security: Tab ID mismatch detected')
          return false
        }

        // If clicking on restricted content, show access request modal
        if (requiresAccess === 'true' && !this.isAccessValid) {
          this.showAccessRequestModal(tabId)
          return false
        }
      }

      // Double security check - verify both at runtime and data level
      const tab = this.tabs.find(t => t.id === tabId)

      // Prevent any manipulation via inspect element
      if (!tab || tab.requiresAccess === undefined) {
        console.warn('Security: Invalid tab access attempt')
        return false
      }

      // Only allow technical skills without authentication
      if (tabId !== 'technical' && !this.isAccessValid) {
        console.log('Requesting access for tab:', tabId)
        this.showAccessRequestModal(tabId)
        this.showUnlockTerminal()
        return false
      }

      // Additional runtime verification
      if (tab.requiresAccess && !this.isAccessValid) {
        console.warn('Security: Access denied - authentication required')
        this.showUnlockTerminal()
        return false
      }

      this.activeTab = tabId
      return true
    },

    showUnlockTerminal() {
      // Show professional access request modal
      this.showAccessModal = true
    },

    showAccessRequestModal(tabId) {
      // Instead of just showing unlock modal, we could create a specific modal
      // For now, we'll show the existing access modal with additional context
      this.requestedTabId = tabId
      this.showAccessModal = true
    },

    closeAccessModal() {
      this.showAccessModal = false
    },

    goToContactPage() {
      // Navigate to contact page
      this.$router.push({ path: '/contact' })
    },

    showAuthTerminal() {
      // Scroll to and highlight terminal in header
      const terminalBtn = document.querySelector('.terminal-btn-header')
      if (terminalBtn) {
        terminalBtn.scrollIntoView({ behavior: 'smooth', block: 'center' })
        terminalBtn.style.animation = 'pulse 2s infinite'
        setTimeout(() => {
          terminalBtn.style.animation = ''
        }, 4000)
      }
    },

    openCertificate(cert) {
      this.selectedCertificate = cert
      document.body.style.overflow = 'hidden'
    },

    closeCertificate() {
      this.selectedCertificate = null
      document.body.style.overflow = ''
    },

    toggleExpand(itemId) {
      this.expandedItem = this.expandedItem === itemId ? null : itemId
    },

    updateTimelineProgress() {
      // Simulate timeline progress based on scroll or time
      const currentYear = new Date().getFullYear()
      const startYear = 2004
      const progress = ((currentYear - startYear) / (2024 - startYear)) * 100
      this.timelineProgress = Math.min(progress, 100)
    },

    getSkillIcon(skill) {
      const iconMap = {
        // Core JavaScript Stack
        'Node.js': require('../assets/icons/nodejs-icon.svg'),
        'React.js': require('../assets/icons/reactjs-icon.svg'),
        'TypeScript': require('../assets/icons/typescriptlang-icon.svg'),
        'Express.js': require('../assets/icons/express-js.svg'),
        'JavaScript ES6+': require('../assets/icons/javascript.svg'),
        'RESTful APIs': require('../assets/icons/Server-Api-Setting--Streamline-Freehand.png'),

        // DevOps & Tools
        'Docker & Containers': require('../assets/icons/docker-icon.svg'),
        'Git & Version Control': require('../assets/icons/git-scm-icon.svg'),
        'CI/CD Pipelines': require('../assets/icons/icons-black/githubactions.svg'),

        // Hardware & Systems C/IoT
        'C Programming': require('../assets/icons/c-programming.svg'),
        'MQTT Protocol': require('../assets/icons/mqtt-icon-solid.svg'),
        'ccTalk Protocol': require('../assets/icons/binary-svgrepo-com.svg'),
        'UART/Serial Comm': require('../assets/icons/binary-svgrepo-com.svg'),
        'Memory Management': require('../assets/icons/memory.svg'),
        'Payment Systems': require('../assets/icons/binary-svgrepo-com.svg'),

        // Experimentation
        'Python & Data Science': require('../assets/icons/python-icon.svg'),
        'AI/Machine Learning': require('../assets/icons/icons-black/claude.svg'),
        'Quantum Programming': require('../assets/icons/quantum.svg'),
        'Blockchain Concepts': require('../assets/icons/blockchain-svgrepo-com.svg'),
        'IoT Integration': require('../assets/icons/iot.svg'),

        // Database
        'PostgreSQL': require('../assets/icons/postgresql.svg'),
        'MySQL': require('../assets/icons/mysql-official.svg'),
        'SQLite': require('../assets/icons/sqlitebrowser.svg'),
        'SQL Server': require('../assets/icons/microsoft-sql-server.svg'),
        'SQL Optimization': require('../assets/icons/postgresql.svg'),

        // Leadership (using generic icons)
        'Team Leadership': require('../assets/icons/atlassian_jira-icon.svg'),
        'Technical Mentoring': require('../assets/icons/icons-black/readme.svg'),
        'Project Management': require('../assets/icons/atlassian_jira-icon.svg'),
        'Stakeholder Comm': require('../assets/icons/slack-icon.svg'),
        'Code Review & Quality': require('../assets/icons/git-scm-icon.svg'),
        'Agile Methodologies': require('../assets/icons/atlassian_jira-icon.svg')
      }
      return iconMap[skill] || null
    },

    loadTranslations() {
      const selectedLanguage = localStorage.getItem('selectedLanguage') || "en";

      import(`../languages/${selectedLanguage}.js`).then((module) => {
        const expressions = module.default;

        const setTextContent = (refName, value) => {
          if (this.$refs[refName]) {
            if (typeof value === 'string' && value.includes('<strong>')) {
              this.$refs[refName].innerHTML = value;
            } else {
              this.$refs[refName].textContent = value;
            }
          }
        };

        // Hero section
        setTextContent('about_hero_title', expressions.about_hero_title);
        setTextContent('about_hero_description', expressions.about_hero_description);
        setTextContent('years_dev', expressions.years_dev);
        setTextContent('years_experience', expressions.years_experience);
        setTextContent('career_paths', expressions.career_paths);
        setTextContent('certifications', expressions.certifications);

        // Technical section
        setTextContent('technical_expertise', expressions.technical_expertise);
        setTextContent('technical_subtitle', expressions.technical_subtitle);

        // Military section
        this.militaryTitle = expressions.military_experience;
        this.militarySubtitle = expressions.military_subtitle;
        this.militaryContent = {
          intro: expressions.military_intro,
          journey1: expressions.military_journey_1,
          journey2: expressions.military_journey_2,
          photoCaption: expressions.military_photo_caption,
          timelineTitle: expressions.military_timeline_title,
          basicTitle: expressions.military_basic_title,
          basicDescription: expressions.military_basic_description,
          specializedTitle: expressions.military_specialized_title,
          specializedDescription: expressions.military_specialized_description,
          preparationTitle: expressions.military_preparation_title,
          preparationDescription: expressions.military_preparation_description,
          deploymentTitle: expressions.military_deployment_title,
          deploymentDescription: expressions.military_deployment_description,
          conclusionTitle: expressions.military_conclusion_title,
          conclusionDescription: expressions.military_conclusion_description
        };

        // McDonald's section
        this.mcdonaldsTitle = expressions.manager_experience;
        this.mcdonaldsSubtitle = expressions.manager_subtitle;
        this.mcdonaldsContent = {
          intro: expressions.mcdonalds_intro,
          journey1: expressions.mcdonalds_journey_1,
          journey2: expressions.mcdonalds_journey_2,
          photoCaption: expressions.mcdonalds_photo_caption,
          progressionTitle: expressions.mcdonalds_progression_title,
          employeeTitle: expressions.mcdonalds_employee_title,
          employeePeriod: expressions.mcdonalds_employee_period,
          employeeDescription: expressions.mcdonalds_employee_description,
          coordinatorTitle: expressions.mcdonalds_coordinator_title,
          coordinatorPeriod: expressions.mcdonalds_coordinator_period,
          coordinatorDescription: expressions.mcdonalds_coordinator_description,
          managerTitle: expressions.mcdonalds_manager_title,
          managerPeriod: expressions.mcdonalds_manager_period,
          managerDescription: expressions.mcdonalds_manager_description
        };

        // Real Estate section
        this.realestateTitle = expressions.realestate_experience;
        this.realestateSubtitle = expressions.realestate_subtitle;
        this.realestateContent = {
          intro: expressions.realestate_intro,
          journey1: expressions.realestate_journey,
          journey2: expressions.realestate_journey2,
          photoCaption: expressions.realestate_photo_caption,
          developmentAreasTitle: expressions.realestate_development_areas_title,
          negotiationTitle: expressions.realestate_negotiation_title,
          negotiationFocus: expressions.realestate_negotiation_focus,
          negotiationDescription: expressions.realestate_negotiation_description,
          prospectionTitle: expressions.realestate_prospection_title,
          prospectionFocus: expressions.realestate_prospection_focus,
          prospectionDescription: expressions.realestate_prospection_description,
          relationshipTitle: expressions.realestate_relationship_title,
          relationshipFocus: expressions.realestate_relationship_focus,
          relationshipDescription: expressions.realestate_relationship_description
        };

        // Web Developer section
        this.webdevTitle = expressions.webdev_experience;
        this.webdevSubtitle = expressions.webdev_subtitle;
        this.webdevContent = {
          intro: expressions.webdev_intro_1,
          journey1: expressions.webdev_journey,
          journey2: expressions.webdev_journey, // usando o mesmo por agora
          timelineTitle: expressions.webdev_experience,
          timeline1Title: expressions.webdev_timeline_title_1,
          timeline1Description: expressions.webdev_timeline_description_1,
          timeline2Title: expressions.webdev_timeline_title_2,
          timeline2Description: expressions.webdev_timeline_description_2,
          timeline3Title: expressions.webdev_timeline_title_3,
          timeline3Description: expressions.webdev_timeline_description_3,
          competenciesTitle: expressions.webdev_competencies_title,
          backendTitle: expressions.webdev_backend_title,
          backendPhp: expressions.webdev_backend_php,
          backendMysql: expressions.webdev_backend_mysql,
          frontendTitle: expressions.webdev_frontend_title,
          frontendHtml: expressions.webdev_frontend_html,
          frontendCss: expressions.webdev_frontend_css,
          frontendJs: expressions.webdev_frontend_js,
          impactTitle: expressions.webdev_impact_title,
          websitesDeveloped: expressions.webdev_websites_developed,
          websitesDescription: expressions.webdev_websites_description,
          mobileResponsive: expressions.webdev_mobile_responsive,
          mobileDescription: expressions.webdev_mobile_description,
          serverManagement: expressions.webdev_server_management,
          serverDescription: expressions.webdev_server_description
        };

        // Frontend Developer section
        this.frontendTitle = expressions.frontend_experience;
        this.frontendSubtitle = expressions.frontend_subtitle;
        this.frontendContent = {
          intro: expressions.frontend_intro,
          journey1: expressions.frontend_journey,
          journey2: expressions.frontend_journey,
          internationalBadge: expressions.frontend_international_badge,
          remoteWork: 'Remote Work',
          international: expressions.frontend_international_badge,
          // Additional translations
          timelineTitle: expressions.frontend_timeline_title,
          transitionTitle: expressions.frontend_transition_title,
          transitionDescription: expressions.frontend_transition_description,
          integrationTitle: expressions.frontend_integration_title,
          integrationDescription: expressions.frontend_integration_description,
          specializationTitle: expressions.frontend_specialization_title,
          specializationDescription: expressions.frontend_specialization_description,
          techEvolutionTitle: expressions.frontend_tech_evolution_title,
          fromStackTitle: expressions.frontend_from_stack_title,
          toStackTitle: expressions.frontend_to_stack_title,
          competenciesTitle: expressions.frontend_competencies_title,
          reactEcosystemTitle: expressions.frontend_react_ecosystem_title,
          vueDelopmentTitle: expressions.frontend_vue_development_title,
          reactComponents: expressions.frontend_react_components,
          hooksContext: expressions.frontend_hooks_context,
          nextjs: expressions.frontend_nextjs,
          vue3Composition: expressions.frontend_vue3_composition,
          vueRouter: expressions.frontend_vue_router,
          stateManagement: expressions.frontend_state_management,
          impactTitle: expressions.frontend_impact_title,
          projectsLabel: expressions.frontend_projects_label,
          projectsDescription: expressions.frontend_projects_description,
          frameworksLabel: expressions.frontend_frameworks_label,
          frameworksDescription: expressions.frontend_frameworks_description,
          internationalLabel: expressions.frontend_international_label,
          internationalDescription: expressions.frontend_international_description
        };

        // FullStack Developer section
        this.fullstackTitle = expressions.fullstack_experience;
        this.fullstackSubtitle = expressions.fullstack_subtitle;
        this.fullstackContent = {
          intro: expressions.fullstack_intro,
          journey1: expressions.fullstack_journey1,
          journey2: expressions.fullstack_journey2,
          photoCaption: expressions.fullstack_photo_caption,
          currentPosition: expressions.fullstack_current_position,
          // Additional project details
          mainProjectsTitle: expressions.fullstack_main_projects_title,
          enterpriseSoftwareTitle: expressions.fullstack_enterprise_software_title,
          enterpriseSoftwareType: expressions.fullstack_enterprise_software_type,
          enterpriseDescription: expressions.fullstack_enterprise_description,
          frontendReactTitle: expressions.fullstack_frontend_react_title,
          frontendFeature1: expressions.fullstack_frontend_feature1,
          frontendFeature2: expressions.fullstack_frontend_feature2,
          frontendFeature3: expressions.fullstack_frontend_feature3,
          frontendFeature4: expressions.fullstack_frontend_feature4,
          frontendFeature5: expressions.fullstack_frontend_feature5,
          backendNodejsTitle: expressions.fullstack_backend_nodejs_title,
          backendFeature1: expressions.fullstack_backend_feature1,
          backendFeature2: expressions.fullstack_backend_feature2,
          backendFeature3: expressions.fullstack_backend_feature3,
          backendFeature4: expressions.fullstack_backend_feature4,
          backendFeature5: expressions.fullstack_backend_feature5,
          paymentMachinesTitle: expressions.fullstack_payment_machines_title,
          paymentMachinesType: expressions.fullstack_payment_machines_type,
          paymentDescription: expressions.fullstack_payment_description,
          hardwareComponentsTitle: expressions.fullstack_hardware_components_title,
          hardwareFeature1: expressions.fullstack_hardware_feature1,
          hardwareFeature2: expressions.fullstack_hardware_feature2,
          hardwareFeature3: expressions.fullstack_hardware_feature3,
          hardwareFeature4: expressions.fullstack_hardware_feature4,
          hardwareFeature5: expressions.fullstack_hardware_feature5,
          softwareControlTitle: expressions.fullstack_software_control_title,
          softwareFeature1: expressions.fullstack_software_feature1,
          softwareFeature2: expressions.fullstack_software_feature2,
          softwareFeature3: expressions.fullstack_software_feature3,
          softwareFeature4: expressions.fullstack_software_feature4,
          softwareFeature5: expressions.fullstack_software_feature5,
          // Additional competencies and impact
          competenciesTitle: expressions.fullstack_competencies_title,
          frontendDevelopmentTitle: expressions.fullstack_frontend_development_title,
          reactAdvanced: expressions.fullstack_react_advanced,
          socketioRealtime: expressions.fullstack_socketio_realtime,
          modernJavascript: expressions.fullstack_modern_javascript,
          backendDevelopmentTitle: expressions.fullstack_backend_development_title,
          nodejsExpert: expressions.fullstack_nodejs_expert,
          restApiDesign: expressions.fullstack_rest_api_design,
          enterpriseArchitecture: expressions.fullstack_enterprise_architecture,
          systemsProgrammingTitle: expressions.fullstack_systems_programming_title,
          cProgramming: expressions.fullstack_c_programming,
          hardwareIntegration: expressions.fullstack_hardware_integration,
          cctalkProtocol: expressions.fullstack_cctalk_protocol,
          impactResponsibilitiesTitle: expressions.fullstack_impact_responsibilities_title,
          impactEnterpriseLabel: expressions.fullstack_impact_enterprise_label,
          impactEnterpriseTitle: expressions.fullstack_impact_enterprise_title,
          impactEnterpriseDescription: expressions.fullstack_impact_enterprise_description,
          impactHardwareLabel: expressions.fullstack_impact_hardware_label,
          impactHardwareTitle: expressions.fullstack_impact_hardware_title,
          impactHardwareDescription: expressions.fullstack_impact_hardware_description,
          impactRealtimeLabel: expressions.fullstack_impact_realtime_label,
          impactRealtimeTitle: expressions.fullstack_impact_realtime_title,
          impactRealtimeDescription: expressions.fullstack_impact_realtime_description,
          impactFullstackLabel: expressions.fullstack_impact_fullstack_label,
          impactFullstackTitle: expressions.fullstack_impact_fullstack_title,
          impactFullstackDescription: expressions.fullstack_impact_fullstack_description
        };

        setTextContent('military_experience', expressions.military_experience);
        setTextContent('military_subtitle', expressions.military_subtitle);
        setTextContent('locked_military_title', expressions.locked_military_title);
        setTextContent('locked_military_subtitle', expressions.locked_military_subtitle);
        setTextContent('access_required', expressions.access_required);
        setTextContent('access_required_description', expressions.access_required_description);
        setTextContent('military_service', expressions.military_service);
        setTextContent('international_missions', expressions.international_missions);
        setTextContent('specialized_training', expressions.specialized_training);
        setTextContent('achievements', expressions.achievements);
        setTextContent('military_intro', expressions.military_intro);
        setTextContent('military_journey_1', expressions.military_journey_1);
        setTextContent('military_journey_2', expressions.military_journey_2);
        setTextContent('military_photo_caption', expressions.military_photo_caption);
        setTextContent('military_timeline_title', expressions.military_timeline_title);
        setTextContent('military_basic_title', expressions.military_basic_title);
        setTextContent('military_basic_description', expressions.military_basic_description);
        setTextContent('military_specialized_title', expressions.military_specialized_title);
        setTextContent('military_specialized_description', expressions.military_specialized_description);
        setTextContent('military_preparation_title', expressions.military_preparation_title);
        setTextContent('military_preparation_description', expressions.military_preparation_description);
        setTextContent('military_deployment_title', expressions.military_deployment_title);
        setTextContent('military_deployment_description', expressions.military_deployment_description);
        setTextContent('military_conclusion_title', expressions.military_conclusion_title);
        setTextContent('military_conclusion_description', expressions.military_conclusion_description);

        // Manager section
        setTextContent('manager_experience', expressions.manager_experience);
        setTextContent('manager_subtitle', expressions.manager_subtitle);
        setTextContent('mcdonalds_intro', expressions.mcdonalds_intro);
        setTextContent('mcdonalds_photo_caption', expressions.mcdonalds_photo_caption);
        setTextContent('mcdonalds_progression_title', expressions.mcdonalds_progression_title);
        setTextContent('mcdonalds_employee_title', expressions.mcdonalds_employee_title);
        setTextContent('mcdonalds_employee_period', expressions.mcdonalds_employee_period);
        setTextContent('mcdonalds_employee_description', expressions.mcdonalds_employee_description);
        setTextContent('mcdonalds_coordinator_title', expressions.mcdonalds_coordinator_title);
        setTextContent('mcdonalds_coordinator_period', expressions.mcdonalds_coordinator_period);
        setTextContent('mcdonalds_coordinator_description', expressions.mcdonalds_coordinator_description);
        setTextContent('mcdonalds_manager_title', expressions.mcdonalds_manager_title);
        setTextContent('mcdonalds_manager_period', expressions.mcdonalds_manager_period);
        setTextContent('mcdonalds_manager_description', expressions.mcdonalds_manager_description);

        // Real Estate section
        setTextContent('realestate_experience', expressions.realestate_experience);
        setTextContent('realestate_subtitle', expressions.realestate_subtitle);

        // Frontend section
        setTextContent('frontend_experience', expressions.frontend_experience);
        setTextContent('frontend_subtitle', expressions.frontend_subtitle);

        // Update tab translations
        this.tabTranslations = {
          technical: { label: expressions.tab_technical_label, years: expressions.tab_technical_years },
          military: { label: expressions.tab_military_label, years: expressions.tab_military_years },
          manager: { label: expressions.tab_manager_label, years: expressions.tab_manager_years },
          realestate: { label: expressions.tab_realestate_label, years: expressions.tab_realestate_years },
          webdev: { label: expressions.tab_webdev_label, years: expressions.tab_webdev_years },
          frontend: { label: expressions.tab_frontend_label, years: expressions.tab_frontend_years },
          fullstack: { label: expressions.tab_fullstack_label, years: expressions.tab_fullstack_years }
        };

        // Update skills category translations
        this.skillsCategoryTranslations = {
          core_stack: expressions.skills_core_stack,
          devops_tools: expressions.skills_devops_tools,
          hardware_systems: expressions.skills_hardware_systems,
          emerging_tech: expressions.skills_emerging_tech,
          database_management: expressions.skills_database_management,
          leadership_business: expressions.skills_leadership_business
        };
      });
    }
  },

  mounted() {
    this.updateTimelineProgress()

    // Wait for DOM to be ready before loading translations
    this.$nextTick(() => {
      this.loadTranslations()
    })

    // Listen for language changes
    this.handleStorageChange = () => {
      this.$nextTick(() => {
        this.loadTranslations()
      })
    }
    window.addEventListener('storage', this.handleStorageChange)

    // Also listen for custom language change events
    this.handleLanguageChange = () => {
      this.$nextTick(() => {
        this.loadTranslations()
      })
    }
    window.addEventListener('languageChanged', this.handleLanguageChange)

    // Listen for access state changes
    this.handleAccessStateChange = () => {
      this.$forceUpdate()
      console.log('AboutPage: Access state changed, forcing update')
    }
    window.addEventListener('portfolio-access-state-changed', this.handleAccessStateChange)
    window.addEventListener('portfolio-access-granted', this.handleAccessStateChange)
    window.addEventListener('vue-force-update', this.handleAccessStateChange)
  },

  unmounted() {
    document.body.style.overflow = ''

    // Remove event listeners
    if (this.handleStorageChange) {
      window.removeEventListener('storage', this.handleStorageChange)
    }
    if (this.handleLanguageChange) {
      window.removeEventListener('languageChanged', this.handleLanguageChange)
    }
    if (this.handleAccessStateChange) {
      window.removeEventListener('portfolio-access-state-changed', this.handleAccessStateChange)
      window.removeEventListener('portfolio-access-granted', this.handleAccessStateChange)
      window.removeEventListener('vue-force-update', this.handleAccessStateChange)
    }
  }
}
</script>

<style scoped>
/* About Page Styles */
.about-page {
  min-height: 100vh;
  padding-top: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.about-hero {
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
  border-radius: 20px;
  margin-bottom: 2rem;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin: 0 0 1.5rem 0;
  font-weight: 600;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--color-text);
  margin: 0 0 3rem 0;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
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

/* Technical Skills Button */
.technical-skills-section {
  margin: 3rem 0;
}

.skills-button-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.skills-main-button {
  width: 100%;
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(79, 172, 254, 0.05));
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 2rem;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.skills-main-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(79, 172, 254, 0.1), transparent);
  transition: left 0.5s ease;
}

.skills-main-button:hover::before {
  left: 100%;
}

.skills-main-button:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent);
  box-shadow: 0 15px 35px rgba(79, 172, 254, 0.2);
}

.skills-main-button.active {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(79, 172, 254, 0.15));
  border-color: var(--color-accent);
  box-shadow: 0 10px 25px rgba(79, 172, 254, 0.3);
}

.skills-button-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.skills-button-content {
  flex: 1;
  position: relative;
  z-index: 2;
}

.skills-button-content h3 {
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.skills-button-content p {
  color: var(--color-text);
  margin: 0;
  font-size: 1.2rem;
}

.skills-button-arrow {
  font-size: 1.5rem;
  color: var(--color-primary);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.skills-main-button:hover .skills-button-arrow {
  transform: translateX(5px);
}

/* Experience Timeline Header */
.experience-timeline-header {
  text-align: center;
  margin-bottom: 2rem;
}

.experience-timeline-header h2 {
  color: var(--color-white);
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.experience-timeline-header p {
  color: var(--color-text);
  font-size: 1.2rem;
  margin: 0;
}

/* Navigation Tabs */
.about-navigation {
  margin-bottom: 3rem;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  border-bottom: 2px solid var(--color-border);
}

.nav-tab {
  padding: 1rem 1.5rem;
  background: transparent;
  border: 2px solid var(--color-border);
  color: var(--color-text);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  min-width: 140px;
}

.tab-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
}

.tab-label {
  font-size: 1.1rem;
  font-weight: 600;
}

.tab-years {
  font-size: 0.95rem;
  opacity: 0.8;
  font-weight: 400;
}

.nav-tab:hover,
.nav-tab.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg-primary);
  transform: translateY(-2px);
}

.nav-tab i {
  font-size: 1.2rem;
}

/* Tab Content */
.about-content {
  margin-bottom: 4rem;
}

.tab-content {
  min-height: 500px;
}

.content-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 1rem 0;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-text);
  margin: 0;
}

/* Technical Expertise Skills */
.skills-summary {
  padding: 2rem 0;
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.skill-category {
  background: var(--color-bg-primary);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 2.5rem 0;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-border);
}

.category-skills {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-name-with-icon {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 160px;
}

.skill-progress-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  padding: 6px;
  background: linear-gradient(135deg, #d2b48c 0%, #c9a876 100%);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(210, 180, 140, 0.3);
  transition: all 0.3s ease;
  object-fit: contain;
}

.skill-progress-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(210, 180, 140, 0.5);
}

.skill-name {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
}

.skill-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 4px;
  transition: width 1.2s ease;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.skill-percentage {
  min-width: 50px;
  text-align: right;
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 600;
}

/* Military Section */
.military-content {
  max-width: 800px;
  margin: 0 auto;
}

.military-hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  margin-bottom: 3rem;
  text-align: left;
}

.military-badge {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}

.military-info h3 {
  font-size: 1.8rem;
  color: var(--color-white);
  margin: 0 0 0.5rem 0;
}

.military-rank {
  color: var(--color-primary);
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.military-period {
  color: var(--color-text);
  margin: 0;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  text-align: center;
  transition: all 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
}

.achievement-icon {
  width: 60px;
  height: 60px;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
  font-size: 1.5rem;
  color: var(--color-primary);
}

.achievement-card h4 {
  font-size: 1.2rem;
  color: var(--color-white);
  margin: 0 0 1rem 0;
}

.achievement-card p {
  color: var(--color-text);
  line-height: 1.5;
  margin: 0;
}

/* Professional Timeline */
.professional-timeline {
  max-width: 700px;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
  padding-left: 4rem;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 50px;
  width: 2px;
  height: calc(100% + 1rem);
  background: var(--color-border);
}

.timeline-item:last-child::before {
  display: none;
}

.timeline-content {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.timeline-content h3 {
  font-size: 1.5rem;
  color: var(--color-white);
  margin: 0 0 1rem 0;
}

.timeline-roles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.role-badge {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.role-badge.manager {
  background: rgba(255, 95, 87, 0.2);
  color: var(--color-danger);
}

.role-badge.coordinator {
  background: rgba(79, 172, 254, 0.2);
  color: var(--color-primary);
}

.role-badge.trainer {
  background: rgba(40, 202, 66, 0.2);
  color: var(--color-success);
}

.role-badge.sales {
  background: rgba(255, 193, 7, 0.2);
  color: var(--color-warning);
}

.timeline-content p {
  color: var(--color-text);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.achievements-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.achievement {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-text);
  font-size: 0.9rem;
}

.achievement i {
  color: var(--color-primary);
  font-size: 1.2rem;
}

/* Awards Section */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.award-category {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.3rem;
  color: var(--color-white);
  margin: 0 0 2rem 0;
}

.category-title i {
  color: var(--color-primary);
}

.awards-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.award-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.award-medal {
  font-size: 2rem;
  flex-shrink: 0;
}

.award-info h4 {
  font-size: 1.2rem;
  color: var(--color-white);
  margin: 0 0 0.5rem 0;
}

.award-info p {
  color: var(--color-text);
  margin: 0;
  font-size: 0.9rem;
}


/* Interactive Career Journey Timeline */
.journey-timeline-interactive {
  position: relative;
  padding: 4rem 0;
  margin: 2rem 0;
  overflow-x: auto;
  min-height: 300px;
}

.timeline-year-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.year-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.timeline-progress {
  position: relative;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-bottom: 3rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.progress-line {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 2px;
  transition: width 2s ease;
}

.timeline-items {
  position: relative;
  height: 200px;
  z-index: 1;
  width: 100%;
  min-width: 800px;
}

.timeline-item-interactive {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-item-interactive:hover {
  transform: translateX(-50%) scale(1.1);
  z-index: 10;
}

.timeline-item-interactive.expanded {
  z-index: 20;
}

/* Timeline Points */
.timeline-point {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  position: relative;
  border: 4px solid var(--color-bg-primary);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.timeline-point.military {
  background: linear-gradient(135deg, var(--color-success), var(--color-success-dark));
}

.timeline-point.corporate {
  background: linear-gradient(135deg, var(--color-warning), var(--color-warning-dark));
}

.timeline-point.sales {
  background: linear-gradient(135deg, var(--color-danger), var(--color-danger-dark));
}

.timeline-point.education {
  background: linear-gradient(135deg, #9c27b0, #7b1fa2);
}

.timeline-point.tech {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

.timeline-point.tech-international {
  background: linear-gradient(135deg, #00bcd4, #0097a7);
}

.timeline-point.tech-current {
  background: linear-gradient(135deg, var(--color-warning-dark), #f57722);
  box-shadow: 0 0 20px rgba(255, 152, 0, 0.4);
}

.point-pulse {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  background: inherit;
  opacity: 0;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  70% {
    opacity: 0;
    transform: scale(1.4);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}

.timeline-item-interactive.active .point-pulse {
  animation: pulse 1s infinite;
}

/* Hover Content */
.timeline-content-hover {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-primary);
  border-radius: 12px;
  padding: 1.2rem;
  min-width: 250px;
  max-width: 300px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 15;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.timeline-item-interactive:hover .timeline-content-hover {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-10px);
}

.timeline-content-hover::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--color-border);
}

.timeline-preview {
  text-align: center;
}

.timeline-year {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
}

.timeline-title {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0 0.3rem 0;
}

.timeline-subtitle {
  color: var(--color-text);
  font-size: 0.85rem;
  margin: 0;
}

/* Expanded Content */
.timeline-expanded {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-bg-primary);
  border: 2px solid var(--color-primary);
  border-radius: 16px;
  width: 500px;
  max-height: 600px;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 25;
  animation: expandIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes expandIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
}

.expanded-header {
  display: flex;
  align-items: flex-start;
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid var(--color-border);
  position: relative;
}

.expanded-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
}

.expanded-info {
  flex: 1;
}

.expanded-title {
  font-size: 1.4rem;
  color: var(--color-white);
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.expanded-company {
  color: var(--color-primary);
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.expanded-period {
  color: var(--color-text);
  font-size: 0.9rem;
}

.close-expanded {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: 2px solid var(--color-border);
  color: var(--color-text);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-expanded:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.expanded-content {
  padding: 2rem;
}

.expanded-description {
  color: var(--color-text);
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.achievements-section,
.certifications-section,
.skills-gained-section,
.facts-section {
  margin-bottom: 2rem;
}

.achievements-section h5,
.certifications-section h5,
.skills-gained-section h5,
.facts-section h5 {
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievements-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  color: var(--color-text);
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

.achievements-list i {
  color: var(--color-primary);
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.cert-badge {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(79, 172, 254, 0.05);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 0.8rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.cert-badge:hover {
  background: rgba(79, 172, 254, 0.1);
  transform: translateY(-2px);
}

.cert-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
  flex-shrink: 0;
}

.cert-icon.military {
  background: linear-gradient(135deg, var(--color-success), var(--color-success-dark));
}

.cert-icon.professional {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

.cert-icon.management {
  background: linear-gradient(135deg, var(--color-warning), var(--color-warning-dark));
}

.cert-icon.education {
  background: linear-gradient(135deg, #9c27b0, #7b1fa2);
}

.cert-icon.tech {
  background: linear-gradient(135deg, #00bcd4, #0097a7);
}

.cert-icon.award {
  background: linear-gradient(135deg, var(--color-danger), var(--color-danger-dark));
}

.cert-name {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 500;
}

.skills-gained {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-gained-tag {
  background: rgba(79, 172, 254, 0.1);
  color: var(--color-primary);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(79, 172, 254, 0.2);
}

.facts-list {
  display: grid;
  gap: 0.8rem;
}

.fact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-text);
}

.fact-item i {
  color: var(--color-primary);
  width: 16px;
  flex-shrink: 0;
}

.fact-label {
  font-weight: 500;
  color: var(--color-white);
  min-width: 100px;
}

.fact-value {
  font-weight: 600;
}

/* Timeline Labels */
.timeline-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.timeline-label {
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
}

/* Journey Statistics */
.journey-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.stat-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--color-primary);
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.3rem;
}

.stat-label {
  color: var(--color-text);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* New Experience Styles */
.experience-details {
  margin: 2rem 0;
}

.detail-section {
  margin-bottom: 2rem;
}

.detail-section h4 {
  color: var(--color-white);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.detail-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-section li {
  color: var(--color-text);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.detail-section li::before {
  content: '▸';
  color: var(--color-primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Manager Experience Styles */
.manager-content {
  max-width: 900px;
  margin: 0 auto;
}

.career-progression {
  margin: 2rem 0;
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.progression-timeline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.progression-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 150px;
}

.step-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
}

.step-info h4 {
  color: var(--color-white);
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.step-info span {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.step-info p {
  color: var(--color-text);
  margin: 0;
  font-size: 0.85rem;
}

.progression-arrow {
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: bold;
}

.experience-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.highlight-card {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
}

.highlight-icon {
  width: 50px;
  height: 50px;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.highlight-card h4 {
  color: var(--color-white);
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
}

.highlight-card p {
  color: var(--color-text);
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.skills-developed {
  margin-top: 3rem;
}

.skills-developed h4 {
  color: var(--color-white);
  text-align: center;
  margin-bottom: 2rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.skill-badge {
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid transparent;
}

.skill-badge.leadership {
  background: rgba(255, 95, 87, 0.2);
  color: var(--color-danger);
  border-color: rgba(255, 95, 87, 0.3);
}

.skill-badge.operations {
  background: rgba(79, 172, 254, 0.2);
  color: var(--color-primary);
  border-color: rgba(79, 172, 254, 0.3);
}

.skill-badge.training {
  background: rgba(40, 202, 66, 0.2);
  color: var(--color-success);
  border-color: rgba(40, 202, 66, 0.3);
}

.skill-badge.service {
  background: rgba(255, 193, 7, 0.2);
  color: var(--color-warning);
  border-color: rgba(255, 193, 7, 0.3);
}

.skill-badge.optimization {
  background: rgba(156, 39, 176, 0.2);
  color: #9c27b0;
  border-color: rgba(156, 39, 176, 0.3);
}

.skill-badge.management {
  background: rgba(0, 188, 212, 0.2);
  color: #00bcd4;
  border-color: rgba(0, 188, 212, 0.3);
}

/* Real Estate Experience Styles */
.realestate-content {
  max-width: 900px;
  margin: 0 auto;
}

.career-transition {
  margin: 2rem 0;
}

.transition-hero {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.transition-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
}

.transition-info h3 {
  color: var(--color-white);
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
}

.transition-subtitle {
  color: var(--color-primary);
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.transition-description {
  color: var(--color-text);
  margin: 0;
}

.learning-areas {
  margin: 3rem 0;
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.learning-card {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.learning-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
}

.learning-icon {
  width: 50px;
  height: 50px;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.learning-card h4 {
  color: var(--color-white);
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
}

.learning-card p {
  color: var(--color-text);
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.experience-summary {
  margin-top: 3rem;
}

.summary-card {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  text-align: center;
}

.summary-card h4 {
  color: var(--color-white);
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
}

.summary-card p {
  color: var(--color-text);
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.key-takeaways {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.takeaway-badge {
  padding: 0.5rem 1rem;
  background: rgba(79, 172, 254, 0.1);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(79, 172, 254, 0.2);
}

/* Web Developer Styles */
.webdev-content, .frontend-content, .fullstack-content {
  max-width: 900px;
  margin: 0 auto;
}

.transition-to-tech, .international-experience, .current-role {
  margin: 2rem 0;
}

.tech-journey-hero, .intl-hero, .role-hero {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.journey-icon, .intl-flag, .role-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
}

.role-icon.current {
  background: linear-gradient(135deg, var(--color-warning-dark), #f57722);
  box-shadow: 0 0 20px rgba(255, 152, 0, 0.4);
}

.intl-flag {
  background: none;
  font-size: 4rem;
  border: none;
}

.journey-info h3, .intl-info h3, .role-info h3 {
  color: var(--color-white);
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
}

.journey-subtitle, .intl-subtitle, .role-subtitle {
  color: var(--color-primary);
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.journey-description, .intl-description, .role-description {
  color: var(--color-text);
  margin: 0;
}

.projects-overview {
  margin: 3rem 0;
}

.project-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-box {
  background: var(--color-bg-primary);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  text-align: center;
  transition: all 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-3px);
  border-color: var(--color-primary);
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text);
  font-weight: 500;
}

.tech-focus-areas, .tech-evolution, .tech-leadership {
  margin: 3rem 0;
}

.tech-focus-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.focus-card, .evolution-card, .leadership-card {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.focus-card:hover, .evolution-card:hover, .leadership-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
}

.focus-icon, .evolution-icon, .leadership-icon {
  width: 50px;
  height: 50px;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.first-job-learnings {
  margin-top: 3rem;
  text-align: center;
}

.first-job-learnings h4 {
  color: var(--color-white);
  margin-bottom: 2rem;
}

.learning-badges, .tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.learning-badge, .tech-badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid transparent;
}

.learning-badge.vue, .tech-badge.react {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  border-color: rgba(76, 175, 80, 0.3);
}

.learning-badge.php, .tech-badge.node {
  background: rgba(103, 58, 183, 0.2);
  color: #673ab7;
  border-color: rgba(103, 58, 183, 0.3);
}

.learning-badge.db, .tech-badge.postgres {
  background: rgba(0, 150, 136, 0.2);
  color: #009688;
  border-color: rgba(0, 150, 136, 0.3);
}

.learning-badge.css, .tech-badge.css {
  background: rgba(233, 30, 99, 0.2);
  color: #e91e63;
  border-color: rgba(233, 30, 99, 0.3);
}

.learning-badge.ecom, .tech-badge.ts {
  background: rgba(63, 81, 181, 0.2);
  color: #3f51b5;
  border-color: rgba(63, 81, 181, 0.3);
}

.learning-badge.b2c, .tech-badge.c {
  background: rgba(96, 125, 139, 0.2);
  color: #607d8b;
  border-color: rgba(96, 125, 139, 0.3);
}

.tech-badge.sql {
  background: rgba(255, 152, 0, 0.2);
  color: var(--color-warning-dark);
  border-color: rgba(255, 152, 0, 0.3);
}

.tech-badge.api {
  background: rgba(121, 85, 72, 0.2);
  color: #795548;
  border-color: rgba(121, 85, 72, 0.3);
}

.tech-badge.docker, .tech-badge.aws, .tech-badge.ci {
  background: rgba(0, 172, 193, 0.2);
  color: #00acc1;
  border-color: rgba(0, 172, 193, 0.3);
}

/* International Impact */
.international-impact {
  margin: 3rem 0;
  text-align: center;
}

.international-impact h4 {
  color: var(--color-white);
  margin-bottom: 2rem;
}

.impact-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.metric {
  background: var(--color-bg-primary);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.85rem;
  color: var(--color-text);
}

/* Leadership Areas */
.leadership-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Tech Stack */
.fullstack-tech-stack {
  margin: 3rem 0;
  text-align: center;
}

.fullstack-tech-stack h4 {
  color: var(--color-white);
  margin-bottom: 2rem;
}

.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stack-category {
  background: var(--color-bg-primary);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.stack-category h5 {
  color: var(--color-white);
  margin: 0 0 1rem 0;
  text-align: center;
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

.modal-image {
  max-height: 80vh;
  overflow-y: auto;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    justify-items: center;
  }

  .nav-tabs {
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    padding-bottom: 0.5rem;
  }

  .nav-tabs::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }

  .nav-tab {
    white-space: nowrap;
    min-width: fit-content;
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .military-hero {
    flex-direction: column;
    text-align: center;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .awards-grid {
    grid-template-columns: 1fr;
  }

  /* Timeline Responsive */
  .timeline-expanded {
    width: 90vw;
    max-width: 450px;
    left: 50%;
    transform: translateX(-50%);
  }

  .journey-stats {
    grid-template-columns: repeat(2, 1fr);
  }

}

@media screen and (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 1rem;
    margin: 1.5rem 0;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-items: center;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .timeline-item {
    padding-left: 3rem;
  }

  .timeline-marker {
    width: 40px;
    height: 40px;
  }

  .timeline-item::before {
    left: 19px;
  }

  /* Timeline Mobile */
  .timeline-expanded {
    width: 95vw;
    max-width: 350px;
    max-height: 70vh;
  }

  .expanded-header {
    padding: 1.5rem 1rem 1rem 1rem;
  }

  .expanded-content {
    padding: 1.5rem 1rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .journey-stats {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 1.5rem;
  }
}

/* Military Experience - Professional Portfolio Style CSS */
.military-experience {
  max-width: 1000px;
  margin: 0 auto;
}

/* Main Story Section */
.military-story {
  margin-bottom: 4rem;
}

.story-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.story-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.intro-section {
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(79, 172, 254, 0.05));
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
}

.military-intro {
  color: var(--color-text);
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0;
  text-align: justify;
}

.military-intro strong {
  color: var(--color-primary);
  font-weight: 600;
}

.journey-description {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.journey-description p {
  color: var(--color-text);
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
}

.journey-description strong {
  color: var(--color-white);
  font-weight: 600;
}

/* Story Image */
.story-image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.military-photo-placeholder {
  text-align: center;
}

.military-photo {
  width: 200px;
  height: 250px;
  object-fit: cover; /* corta para caber no quadro */
  border-radius: 16px;
  border: 3px solid var(--color-border);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}


.military-photo:hover {
  border-color: var(--color-primary);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(79, 172, 254, 0.2);
}

.photo-caption {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.photo-caption span {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 600;
}

.photo-caption small {
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 500;
}

/* Professional Timeline */
.military-timeline-professional {
  margin-top: 4rem;
}

.military-timeline-professional h3 {
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
}

.timeline-professional {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-professional::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--color-primary), rgba(79, 172, 254, 0.3));
  transform: translateX(-50%);
}

.timeline-milestone {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-milestone:nth-child(odd) {
  flex-direction: row;
}

.timeline-milestone:nth-child(even) {
  flex-direction: row-reverse;
}

.milestone-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-bg-primary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.timeline-milestone.highlight .milestone-marker {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-color: var(--color-accent);
  box-shadow: 0 0 20px rgba(79, 172, 254, 0.5);
}

.milestone-marker .year {
  color: var(--color-white);
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
}

.timeline-milestone.highlight .milestone-marker .year {
  color: white;
}

.milestone-content {
  width: calc(50% - 60px);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.timeline-milestone:nth-child(odd) .milestone-content {
  margin-right: 60px;
  text-align: right;
}

.timeline-milestone:nth-child(even) .milestone-content {
  margin-left: 60px;
  text-align: left;
}

.timeline-milestone.highlight .milestone-content {
  border-color: var(--color-primary);
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(79, 172, 254, 0.05));
}

.milestone-content:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 10px 25px rgba(79, 172, 254, 0.15);
}

.milestone-content h4 {
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.timeline-milestone.highlight .milestone-content h4 {
  color: var(--color-primary);
}

.milestone-content p {
  color: var(--color-text);
  line-height: 1.5;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .intro-section,
  .journey-description p {
    text-align: left;
  }

  .military-photo {
    width: 150px;
    height: 190px;
  }

  .timeline-professional::before {
    left: 30px;
  }

  .timeline-milestone {
    flex-direction: column !important;
    align-items: flex-start;
    padding-left: 60px;
  }

  .milestone-marker {
    left: 30px !important;
    width: 60px;
    height: 60px;
  }

  .milestone-marker .year {
    font-size: 0.7rem;
  }

  .milestone-content {
    width: calc(100% - 60px) !important;
    margin: 0 !important;
    text-align: left !important;
    margin-top: 1rem !important;
  }
}

/* Manager Experience - Professional Portfolio Style CSS */
.manager-experience {
  max-width: 1000px;
  margin: 0 auto;
}

/* Manager Story Section - same as military but with different colors */
.manager-story {
  margin-bottom: 4rem;
}

.manager-story .story-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.manager-story .story-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.manager-story .intro-section {
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(255, 193, 7, 0.05));
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
}

.manager-intro {
  color: var(--color-text);
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0;
  text-align: justify;
}

.manager-intro strong {
  color: var(--color-warning);
  font-weight: 600;
}

.manager-story .journey-description {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.manager-story .journey-description p {
  color: var(--color-text);
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
}

.manager-story .journey-description strong {
  color: var(--color-white);
  font-weight: 600;
}

/* Manager Photo */
.manager-story .story-image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.manager-photo-placeholder {
  text-align: center;
}

.manager-photo {
  width: 200px;
  height: 250px;
  border-radius: 16px;
  border: 3px solid var(--color-border);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.manager-photo:hover {
  border-color: var(--color-warning);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(255, 193, 7, 0.2);
}

.manager-story .photo-caption {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.manager-story .photo-caption span {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 600;
}

.manager-story .photo-caption small {
  color: var(--color-warning);
  font-size: 0.8rem;
  font-weight: 500;
}

/* Manager Professional Timeline */
.manager-timeline-professional {
  margin-top: 4rem;
}

.manager-timeline-professional h3 {
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
}

.progression-professional {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.progression-milestone {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
}

.progression-milestone:nth-child(even) {
  flex-direction: row-reverse;
}

.progression-milestone:nth-child(even) .progression-content {
  text-align: right;
}

.progression-marker {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.progression-marker.employee {
  background: linear-gradient(135deg, var(--color-muted), #5a6268);
  border: 3px solid var(--color-muted);
}

.progression-marker.coordinator {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border: 3px solid var(--color-primary);
}

.progression-marker.manager {
  background: linear-gradient(135deg, var(--color-warning), var(--color-warning-dark));
  border: 3px solid var(--color-warning);
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.4);
}

.progression-marker:hover {
  transform: scale(1.1);
}

.progression-content {
  flex: 1;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  max-width: 600px;
}

.progression-milestone.highlight .progression-content {
  border-color: var(--color-warning);
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(255, 193, 7, 0.05));
}

.progression-content:hover {
  transform: translateY(-5px);
  border-color: var(--color-warning);
  box-shadow: 0 10px 25px rgba(255, 193, 7, 0.15);
}

.progression-content h4 {
  color: var(--color-white);
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.progression-milestone.highlight .progression-content h4 {
  color: var(--color-warning);
}

.timeline-period {
  display: block;
  color: var(--color-warning);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.progression-content p {
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
}

/* Connect the milestones with a line */
.progression-professional::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 40px;
  bottom: -40px;
  width: 2px;
  background: linear-gradient(180deg, var(--color-muted), var(--color-primary), var(--color-warning));
  z-index: 1;
}

.progression-milestone:nth-child(even)::after {
  content: '';
  position: absolute;
  right: 40px;
  top: 40px;
  width: 2px;
  height: calc(100% + 3rem);
  background: transparent;
}

/* Responsive Design for Manager */
@media (max-width: 768px) {
  .manager-story .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .manager-story .intro-section,
  .manager-story .journey-description p {
    text-align: left;
  }

  .manager-photo {
    width: 150px;
    height: 190px;
  }

  .progression-professional::before {
    left: 30px;
  }

  .progression-milestone {
    flex-direction: column !important;
    align-items: flex-start;
    padding-left: 60px;
  }

  .progression-marker {
    position: absolute;
    left: 0;
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
  }

  .progression-content {
    width: calc(100% - 60px) !important;
    max-width: none;
    margin: 0 !important;
    text-align: left !important;
    margin-top: 1rem !important;
  }
}

/* Real Estate Experience - Professional Portfolio Style CSS */
.realestate-experience {
  max-width: 1000px;
  margin: 0 auto;
}

/* Real Estate Story Section */
.realestate-story {
  margin-bottom: 4rem;
}

.realestate-story .story-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.realestate-story .story-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.realestate-story .intro-section {
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(40, 202, 66, 0.05));
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
}

.realestate-intro {
  color: var(--color-text);
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0;
  text-align: justify;
}

.realestate-intro strong {
  color: var(--color-success);
  font-weight: 600;
}

.realestate-story .journey-description {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.realestate-story .journey-description p {
  color: var(--color-text);
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
}

.realestate-story .journey-description strong {
  color: var(--color-white);
  font-weight: 600;
}

/* Real Estate Photo */
.realestate-story .story-image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.realestate-photo-placeholder {
  text-align: center;
}

.realestate-photo {
  width: 200px;
  height: 250px;
  object-fit: cover; /* corta para caber no quadro */
  border-radius: 16px;
  border: 3px solid var(--color-border);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.realestate-photo:hover {
  border-color: var(--color-success);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(40, 202, 66, 0.2);
}

.realestate-story .photo-caption {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.realestate-story .photo-caption span {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: 600;
}

.realestate-story .photo-caption small {
  color: var(--color-success);
  font-size: 0.8rem;
  font-weight: 500;
}

/* Real Estate Professional Development Timeline */
.realestate-timeline-professional {
  margin-top: 4rem;
}

.realestate-timeline-professional h3 {
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
}

.development-professional {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.development-milestone {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
}

.development-milestone:nth-child(even) {
  flex-direction: row-reverse;
}

.development-milestone:nth-child(even) .development-content {
  text-align: right;
}

.development-marker {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.development-marker.negotiation {
  background: linear-gradient(135deg, var(--color-info), var(--color-info-dark));
  border: 3px solid var(--color-info);
}

.development-marker.prospection {
  background: linear-gradient(135deg, var(--color-purple), var(--color-purple-dark));
  border: 3px solid var(--color-purple);
}

.development-marker.relationship {
  background: linear-gradient(135deg, var(--color-success), var(--color-success-dark));
  border: 3px solid var(--color-success);
  box-shadow: 0 0 20px rgba(40, 202, 66, 0.4);
}

.development-marker:hover {
  transform: scale(1.1);
}

.development-content {
  flex: 1;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  max-width: 600px;
}

.development-milestone.highlight .development-content {
  border-color: var(--color-success);
  background: linear-gradient(135deg, var(--color-bg-primary), rgba(40, 202, 66, 0.05));
}

.development-content:hover {
  transform: translateY(-5px);
  border-color: var(--color-success);
  box-shadow: 0 10px 25px rgba(40, 202, 66, 0.15);
}

.development-content h4 {
  color: var(--color-white);
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.development-milestone.highlight .development-content h4 {
  color: var(--color-success);
}

.development-focus {
  display: block;
  color: var(--color-success);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-style: italic;
}

.development-content p {
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
}

/* Connect the milestones with a line */
.development-professional::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 40px;
  bottom: -40px;
  width: 2px;
  background: linear-gradient(180deg, var(--color-info), var(--color-purple), var(--color-success));
  z-index: 1;
}

/* Responsive Design for Real Estate */
@media (max-width: 768px) {
  .realestate-story .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .realestate-story .intro-section,
  .realestate-story .journey-description p {
    text-align: left;
  }

  .realestate-photo {
    width: 150px;
    height: 190px;
  }

  .development-professional::before {
    left: 30px;
  }

  .development-milestone {
    flex-direction: column !important;
    align-items: flex-start;
    padding-left: 60px;
  }

  .development-marker {
    position: absolute;
    left: 0;
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
  }

  .development-content {
    width: calc(100% - 60px) !important;
    max-width: none;
    margin: 0 !important;
    text-align: left !important;
    margin-top: 1rem !important;
  }
}

/* Web Developer Experience Styles */
.webdev-experience, .frontend-experience {
  max-width: 900px;
  margin: 0 auto;
}

.webdev-story, .frontend-story {
  margin-bottom: 3rem;
}

.webdev-intro, .frontend-intro {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: justify;
}

.webdev-intro strong, .frontend-intro strong {
  color: var(--color-text-primary);
}

.webdev-visual, .frontend-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.tech-stack-visual {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 200px;
}

.stack-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--color-bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.stack-item:hover {
  transform: translateY(-2px);
  border-color: var(--color-primary);
}

.stack-item i {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.stack-item span {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.modern-stack-visual {
  display: flex;
  gap: 1rem;
}

.stack-item.modern {
  flex-direction: row;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border: none;
  color: white;
}

.stack-item.modern i {
  color: white;
  font-size: 1.2rem;
}

.stack-item.modern span {
  color: white;
  font-size: 0.9rem;
}

.webdev-timeline-professional, .frontend-timeline-professional {
  margin: 3rem 0;
}

.webdev-timeline-professional h3, .frontend-timeline-professional h3 {
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.webdev-competencies, .frontend-competencies {
  margin: 3rem 0;
}

.webdev-competencies h3, .frontend-competencies h3 {
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.competencies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.competency-area {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.competency-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.competency-header i {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.competency-header h4 {
  color: var(--color-text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.competency-skills {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-progress-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.skill-level-bar {
  width: 100%;
  height: 6px;
  background: var(--color-bg-secondary);
  border-radius: 3px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 3px;
  transition: width 0.3s ease;
}

.webdev-impact, .frontend-impact {
  margin: 3rem 0;
}

.webdev-impact h3, .frontend-impact h3 {
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.impact-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.metric-card {
  text-align: center;
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.metric-description {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
}

.international-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-bg-secondary);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.country-flag {
  font-size: 1.5rem;
}

.remote-work span {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.remote-work small {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.frontend-evolution {
  margin: 3rem 0;
}

.frontend-evolution h3 {
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.evolution-comparison {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.evolution-from, .evolution-to {
  text-align: center;
  flex: 1;
}

.evolution-from h4, .evolution-to h4 {
  color: var(--color-text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tech-list span {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
}

.tech-list.old span {
  background: rgba(255, 152, 0, 0.1);
  color: var(--color-warning-dark);
  border: 1px solid rgba(255, 152, 0, 0.2);
}

.tech-list.new span {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.evolution-arrow {
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: bold;
}

@media (max-width: 768px) {
  .tech-stack-visual {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .modern-stack-visual {
    flex-direction: column;
    gap: 0.5rem;
  }

  .competencies-grid {
    grid-template-columns: 1fr;
  }

  .impact-metrics {
    grid-template-columns: 1fr;
  }

  .evolution-comparison {
    flex-direction: column;
    gap: 1rem;
  }

  .evolution-arrow {
    transform: rotate(90deg);
  }
}

/* FullStack Developer Advanced Styles */
.fullstack-experience {
  max-width: 900px;
  margin: 0 auto;
}

/* FullStack Photo */
.fullstack-photo-placeholder {
  text-align: center;
  margin-bottom: 2rem;
}

.fullstack-photo {
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
  border: 3px solid var(--color-border);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.fullstack-photo:hover {
  border-color: var(--color-primary);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(79, 172, 254, 0.2);
}

.fullstack-story {
  margin-bottom: 3rem;
}

.fullstack-intro {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: justify;
}

.fullstack-intro strong {
  color: var(--color-text-primary);
}

.fullstack-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.current-position {
  width: 100%;
}

.position-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  padding: 1rem 2rem;
  border-radius: 12px;
  color: white;
}

.position-icon i {
  font-size: 1.5rem;
}

.position-info {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.position-info span {
  font-size: 1rem;
  font-weight: 600;
}

.position-info small {
  font-size: 0.8rem;
  opacity: 0.9;
}

.tech-diversity {
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
}

.tech-section {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  flex: 1;
}

.tech-section:hover {
  transform: translateY(-3px);
  border-color: var(--color-primary);
  box-shadow: 0 10px 25px rgba(79, 172, 254, 0.1);
}

.tech-section.enterprise {
  border-color: rgba(79, 172, 254, 0.3);
}

.tech-section.hardware {
  border-color: rgba(255, 159, 67, 0.3);
}

.tech-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tech-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.tech-section.enterprise .tech-icon {
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(79, 172, 254, 0.2));
  color: var(--color-primary);
}

.tech-section.hardware .tech-icon {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.1), rgba(255, 159, 67, 0.2));
  color: #ff9f43;
}

.tech-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-white);
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.tech-item {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: flex-start;
}

.tech-item:hover {
  transform: translateX(5px);
}

.tech-item i {
  font-size: 1.1rem;
}

.tech-item.node {
  background: rgba(104, 160, 99, 0.15);
  color: #68a063;
  border: 1px solid rgba(104, 160, 99, 0.3);
}

.tech-item.node:hover {
  background: rgba(104, 160, 99, 0.2);
  box-shadow: 0 4px 12px rgba(104, 160, 99, 0.3);
}

.tech-item.react {
  background: rgba(97, 218, 251, 0.15);
  color: #61dafb;
  border: 1px solid rgba(97, 218, 251, 0.3);
}

.tech-item.react:hover {
  background: rgba(97, 218, 251, 0.2);
  box-shadow: 0 4px 12px rgba(97, 218, 251, 0.3);
}

.tech-item.typescript {
  background: rgba(49, 120, 198, 0.15);
  color: #3178c6;
  border: 1px solid rgba(49, 120, 198, 0.3);
}

.tech-item.typescript:hover {
  background: rgba(49, 120, 198, 0.2);
  box-shadow: 0 4px 12px rgba(49, 120, 198, 0.3);
}

.tech-item.c {
  background: rgba(0, 89, 162, 0.15);
  color: #0059a2;
  border: 1px solid rgba(0, 89, 162, 0.3);
}

.tech-item.c:hover {
  background: rgba(0, 89, 162, 0.2);
  box-shadow: 0 4px 12px rgba(0, 89, 162, 0.3);
}

.tech-item.iot {
  background: rgba(255, 152, 0, 0.15);
  color: var(--color-warning-dark);
  border: 1px solid rgba(255, 152, 0, 0.3);
}

.tech-item.iot:hover {
  background: rgba(255, 152, 0, 0.2);
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
}

.tech-item.hardware {
  background: rgba(255, 159, 67, 0.15);
  color: #ff9f43;
  border: 1px solid rgba(255, 159, 67, 0.3);
}

.tech-item.hardware:hover {
  background: rgba(255, 159, 67, 0.2);
  box-shadow: 0 4px 12px rgba(255, 159, 67, 0.3);
}

.main-projects {
  margin: 3rem 0;
}

.main-projects h3 {
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.project-showcase {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

.project-card.enterprise {
  border-left: 4px solid #4caf50;
}

.project-card.hardware {
  border-left: 4px solid var(--color-warning-dark);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.project-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.project-icon i {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.project-title h4 {
  color: var(--color-text-primary);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.project-type {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  background: var(--color-bg-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
}

.project-description {
  margin-bottom: 2rem;
}

.project-description p {
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
}

.project-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-group h5 {
  color: var(--color-text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.feature-group ul {
  max-width: 50%;
  margin: auto;
  list-style: none;
  padding: 0;
}

.feature-group li {
  padding: 0.5rem 0;
  color: var(--color-text-secondary);
  position: relative;
  padding-left: 1.5rem;
  font-size: 1rem;
}

.feature-group li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.tech-stack-project {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.tech-stack-project .tech-item {
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.tech-stack-project .tech-item.featured {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  border: none;
  font-weight: 600;
  transform: scale(1.05);
}

.fullstack-competencies {
  margin: 3rem 0;
}

.fullstack-competencies h3 {
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.competencies-advanced {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.competency-area.advanced {
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  border-top: 4px solid var(--color-primary);
}

.fullstack-impact {
  margin: 3rem 0;
}

.fullstack-impact h3 {
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.impact-metrics-advanced {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.metric-card.primary {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: var(--color-bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  border-left: 4px solid var(--color-primary);
}

.metric-card.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

.metric-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.metric-content {
  flex: 1;
}

.metric-content .metric-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.metric-content .metric-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
}

.metric-content .metric-description {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .tech-diversity {
    flex-direction: column;
    gap: 1rem;
  }

  .project-showcase {
    gap: 1.5rem;
  }

  .project-features {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .competencies-advanced {
    grid-template-columns: 1fr;
  }

  .impact-metrics-advanced {
    grid-template-columns: 1fr;
  }

  .metric-card.primary {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}

/* Locked tabs and content styles */
.nav-tab.locked {
  opacity: 0.9;
  background: rgba(255, 193, 7, 0.08);
  border-color: rgba(255, 193, 7, 0.3);
  cursor: pointer;
  position: relative;
  pointer-events: auto;
}

.nav-tab.locked:hover {
  background: rgba(255, 193, 7, 0.15);
  border-color: rgba(255, 193, 7, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);
  pointer-events: auto;
  cursor: pointer;
}

/* Enhanced Lock Indicator */
.tab-lock-enhanced {
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 10;
}

.lock-icon {
  background: linear-gradient(135deg, var(--color-warning), var(--color-warning-dark));
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.4);
  cursor: help;
  animation: pulse-lock 2s infinite;
}

.lock-icon i {
  font-size: 12px;
  font-weight: bold;
}

@keyframes pulse-lock {
  0%, 100% {
    box-shadow: 0 2px 8px rgba(255, 193, 7, 0.4);
  }
  50% {
    box-shadow: 0 4px 16px rgba(255, 193, 7, 0.6);
  }
}

.lock-tooltip {
  position: absolute;
  top: 30px;
  right: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.85));
  color: white;
  padding: 1rem;
  border-radius: 12px;
  min-width: 280px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  border: 1px solid rgba(255, 193, 7, 0.3);
}

.tab-lock-enhanced:hover .lock-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.tooltip-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-warning);
}

.tooltip-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.7rem;
  line-height: 1.4;
}

.tooltip-action {
  font-size: 0.75rem;
  color: var(--color-warning-dark);
  font-weight: 500;
  font-style: italic;
}

/* Arrow for tooltip */
.lock-tooltip::before {
  content: '';
  position: absolute;
  top: -8px;
  right: 12px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid rgba(0, 0, 0, 0.9);
}

.tab-lock {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 193, 7, 0.9);
  color: #000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  pointer-events: auto;
  cursor: help;
  z-index: 10;
  animation: pulse 2s infinite;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(108, 117, 125, 0.2);
}

.locked-content {
  padding: 3rem 0;
  text-align: center;
}

.access-warning {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%);
  border: 1px solid rgba(255, 193, 7, 0.2);
  border-radius: 12px;
}

.access-warning i {
  font-size: 4rem;
  color: var(--color-warning);
  margin-bottom: 1rem;
  opacity: 0.8;
}

.access-warning h3 {
  color: var(--color-warning);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.access-warning p {
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.access-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.feature-tag {
  background: rgba(108, 117, 125, 0.1);
  color: var(--color-muted);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(108, 117, 125, 0.2);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .tab-lock {
    top: 4px;
    right: 4px;
    width: 16px;
    height: 16px;
    font-size: 0.6rem;
  }

  .access-warning {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  .access-features {
    gap: 0.3rem;
  }

  .feature-tag {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}

/* Clean Tech Design Styles */
.tech-section-clean {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.tech-section-clean:hover {
  transform: translateY(-2px);
  border-color: var(--color-primary);
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.08);
}

.tech-section-clean.enterprise {
  border-color: rgba(79, 172, 254, 0.2);
}

.tech-section-clean.hardware {
  border-color: rgba(255, 159, 67, 0.2);
}

.section-title-clean {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.section-title-clean i {
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(79, 172, 254, 0.15));
  color: var(--color-primary);
}

.tech-section-clean.hardware .section-title-clean i {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.1), rgba(255, 159, 67, 0.15));
  color: #ff9f43;
}

.section-title-clean span {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.tech-pill i {
  font-size: 0.9rem;
}

.tech-pill.primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  box-shadow: 0 2px 8px rgba(79, 172, 254, 0.15);
}

.tech-pill.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 172, 254, 0.2);
}

.tech-pill.secondary {
  background: rgba(79, 172, 254, 0.08);
  color: var(--color-primary);
  border-color: rgba(79, 172, 254, 0.2);
}

.tech-pill.secondary:hover {
  background: rgba(79, 172, 254, 0.12);
  transform: translateY(-1px);
}

.tech-pill.tertiary {
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-secondary);
  border-color: var(--color-border);
}

.tech-pill.tertiary:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--color-text-primary);
  transform: translateY(-1px);
}

.tech-stack-clean {
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-border);
  margin-top: 1rem;
}

.tech-group-clean {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0.75rem;
}

.tech-group-clean:last-child {
  margin-bottom: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .tech-diversity {
    gap: 1rem;
  }

  .tech-section-clean {
    padding: 1rem;
  }

  .tech-pills {
    gap: 0.4rem;
  }

  .tech-pill {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>
