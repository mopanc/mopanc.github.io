<template>
  <div class="contact-page">
    <div class="container">
      <!-- Header Section -->
      <div class="contact-header">
        <h1 class="contact-title" ref="contact_title">Get In Touch</h1>
        <p class="contact-subtitle" ref="contact_subtitle">
          Ready to bring your next project to life? Let's discuss how we can work together.
        </p>
      </div>

      <div class="contact-content">
        <!-- Main Contact Form - Full Width & Prominent -->
        <div class="main-contact-form">
          <div class="form-header">
            <h2 ref="contact_form_title">Send Message</h2>
            <p class="form-subtitle" ref="form_subtitle">Let's discuss your project and how I can help bring it to life.</p>
          </div>
          <ContactForm />
        </div>

        <!-- Secondary Information Grid -->
        <div class="info-grid">
          <!-- Quick Contact Info -->
          <div class="info-card contact-info">
            <div class="info-header">
              <i class="ri-user-line"></i>
              <h4 ref="contact_professional">Professional Contact</h4>
            </div>
            <div class="info-items">
              <div class="info-item">
                <i class="ri-map-pin-line"></i>
                <span ref="location_value">Braga, Portugal</span>
              </div>
              <div class="info-item">
                <i class="ri-timer-2-line"></i>
                <span ref="response_time">Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="info-card social-links">
            <div class="info-header">
              <i class="ri-links-line"></i>
              <h4 ref="connect_title">Connect With Me</h4>
            </div>
            <div class="social-compact-grid">
              <a href="https://www.linkedin.com/in/jorge-mopanc/" class="social-compact" target="_blank" rel="noopener noreferrer">
                <i class="ri-linkedin-fill"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/mopanc" class="social-compact" target="_blank" rel="noopener noreferrer">
                <i class="ri-github-fill"></i>
                <span>GitHub</span>
              </a>
              <a href="https://codepen.io/mopanc" class="social-compact" target="_blank" rel="noopener noreferrer">
                <i class="ri-codepen-line"></i>
                <span>CodePen</span>
              </a>
              <a href="https://twitter.com/JorgeMo56542670" class="social-compact" target="_blank" rel="noopener noreferrer">
                <i class="ri-twitter-fill"></i>
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <!-- Services Overview -->
          <div class="info-card services-overview">
            <div class="info-header">
              <i class="ri-tools-line"></i>
              <h4 ref="services_title">What I Can Help With</h4>
            </div>
            <div class="services-compact">
              <div class="service-compact">
                <i class="ri-code-s-slash-line"></i>
                <div>
                  <span class="service-name" ref="fullstack_title">FullStack Development</span>
                  <span class="service-tech" ref="fullstack_tech">React • Node.js • TypeScript</span>
                </div>
              </div>
              <div class="service-compact">
                <i class="ri-cpu-line"></i>
                <div>
                  <span class="service-name" ref="systems_title">Systems Engineering</span>
                  <span class="service-tech" ref="systems_tech">C • IoT • Industrial Protocols</span>
                </div>
              </div>
              <div class="service-compact">
                <i class="ri-robot-line"></i>
                <div>
                  <span class="service-name" ref="ai_title">AI/ML Solutions</span>
                  <span class="service-tech" ref="ai_tech">Python • Analytics • Patterns</span>
                </div>
              </div>
              <div class="service-compact">
                <i class="ri-stock-line"></i>
                <div>
                  <span class="service-name" ref="trading_title">Trading Systems</span>
                  <span class="service-tech" ref="trading_tech">Algorithms • ML • Risk Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Location Map -->
      <div class="map-section">
        <h3 ref="location_title">Location</h3>
        <div class="map-container">
          <iframe
            width="100%"
            height="300"
            src="https://maps.google.com/maps?q=braga,portugal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            style="border-radius: 12px;"
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'ContactPage',
  components: {
    ContactForm
  },
  mounted() {
    this.loadTranslations();

    // Listen for language changes from LanguageSelector
    this.handleLanguageChange = () => {
      this.loadTranslations();
    };

    window.addEventListener('languageChanged', this.handleLanguageChange);
    window.addEventListener('storage', this.handleLanguageChange);
  },

  beforeUnmount() {
    // Clean up event listeners
    if (this.handleLanguageChange) {
      window.removeEventListener('languageChanged', this.handleLanguageChange);
      window.removeEventListener('storage', this.handleLanguageChange);
    }
  },

  methods: {
    loadTranslations() {
      const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

      import(`../languages/${selectedLanguage}.js`).then((module) => {
        const expressions = module.default;

        // Helper function to safely set text content
        const setTextContent = (refName, value) => {
          if (this.$refs[refName]) {
            this.$refs[refName].textContent = value;
          }
        };

        // Set page content
        setTextContent('contact_title', expressions.contact_title || 'Get In Touch');
        setTextContent('contact_subtitle', expressions.contact_subtitle || 'Ready to bring your next project to life? Let\'s discuss how we can work together.');
        setTextContent('contact_professional', expressions.contact_professional || 'Professional Contact');
        setTextContent('email_label', expressions.email_label || 'Email');
        setTextContent('phone_label', expressions.phone_label || 'Phone');
        setTextContent('location_label', expressions.location_label || 'Location');
        setTextContent('availability_label', expressions.availability_label || 'Availability');
        setTextContent('response_time', expressions.response_time || 'Usually responds within 24 hours');
        setTextContent('connect_title', expressions.connect_title || 'Connect With Me');
        setTextContent('linkedin_desc', expressions.linkedin_desc || 'Professional network');
        setTextContent('github_desc', expressions.github_desc || 'Code repositories');
        setTextContent('codepen_desc', expressions.codepen_desc || 'Creative projects');
        setTextContent('twitter_desc', expressions.twitter_desc || 'Tech insights');
        setTextContent('services_title', expressions.services_title || 'What I Can Help With');
        setTextContent('fullstack_title', expressions.fullstack_title || 'FullStack Development');
        setTextContent('fullstack_desc', expressions.fullstack_desc || 'Complete web applications with React, Node.js, and modern technologies.');
        setTextContent('systems_title', expressions.systems_title || 'Systems Engineering');
        setTextContent('systems_desc', expressions.systems_desc || 'Low-level C programming, industrial protocols (ccTalk, MQTT), and critical systems.');
        setTextContent('ai_title', expressions.ai_title || 'AI/ML Solutions');
        setTextContent('ai_desc', expressions.ai_desc || 'Machine learning systems with Python, predictive analytics, and pattern recognition.');
        setTextContent('trading_title', expressions.trading_title || 'Trading Systems');
        setTextContent('trading_desc', expressions.trading_desc || 'Algorithmic trading with machine learning models, statistical analysis, and risk management.');
        setTextContent('quick_contact_title', expressions.quick_contact_title || 'Quick Contact');
        setTextContent('quick_contact_desc', expressions.quick_contact_desc || 'For detailed discussions, please use the contact form on the homepage or reach out directly via email.');
        setTextContent('go_homepage', expressions.go_homepage || 'Go to Homepage');
        setTextContent('send_email', expressions.send_email || 'Send Email');
        setTextContent('location_title', expressions.location_title || 'Location');
        setTextContent('contact_form_title', expressions.contact_form_title || 'Send Message');
        setTextContent('form_subtitle', expressions.form_subtitle || 'Let\'s discuss your project and how I can help bring it to life.');
        setTextContent('location_value', expressions.location_value || 'Braga, Portugal');
        setTextContent('fullstack_tech', expressions.fullstack_tech || 'React • Node.js • TypeScript');
        setTextContent('systems_tech', expressions.systems_tech || 'C • IoT • Industrial Protocols');
        setTextContent('ai_tech', expressions.ai_tech || 'Python • Analytics • Patterns');
        setTextContent('trading_tech', expressions.trading_tech || 'Algorithms • ML • Risk Management');
      });
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 4rem 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-title {
  font-size: 3.5rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 1.5rem;
}

.contact-subtitle {
  font-size: 1.25rem;
  color: var(--color-text);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Main Contact Form - Prominent */
.main-contact-form {
  background: var(--color-bg-secondary);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.form-header h2 {
  color: var(--color-white);
  font-size: 2rem;
  font-weight: var(--fw-bold);
  margin-bottom: 0.75rem;
}

.form-subtitle {
  color: var(--color-text);
  font-size: 1.1rem;
  line-height: 1.5;
  max-width: 500px;
  margin: 0 auto;
}

/* Information Grid - Compact */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: var(--color-bg-secondary);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.info-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.info-header i {
  font-size: 1.25rem;
  color: var(--color-primary);
}

.info-header h4 {
  color: var(--color-white);
  font-size: 1.1rem;
  font-weight: var(--fw-semibold);
  margin: 0;
}

/* Contact Info */
.info-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  font-size: 0.95rem;
}

.info-item i {
  font-size: 1rem;
  color: var(--color-primary);
  flex-shrink: 0;
}

/* Social Links - Compact */
.social-compact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.social-compact {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(195, 176, 145, 0.05);
  border-radius: 8px;
  text-decoration: none;
  transition: var(--transition);
  border: 1px solid transparent;
}

.social-compact:hover {
  background: rgba(195, 176, 145, 0.1);
  border-color: var(--color-primary);
  transform: translateY(-1px);
}

.social-compact i {
  font-size: 1.1rem;
  color: var(--color-primary);
}

.social-compact span {
  color: var(--color-white);
  font-size: 0.9rem;
  font-weight: var(--fw-medium);
}

/* Services Overview - Compact */
.services-compact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-compact {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(195, 176, 145, 0.03);
  border-radius: 8px;
  transition: var(--transition);
}

.service-compact:hover {
  background: rgba(195, 176, 145, 0.08);
}

.service-compact i {
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.service-compact div {
  flex: 1;
}

.service-name {
  display: block;
  color: var(--color-white);
  font-size: 0.95rem;
  font-weight: var(--fw-semibold);
  margin-bottom: 0.25rem;
}

.service-tech {
  display: block;
  color: var(--color-text);
  font-size: 0.8rem;
  opacity: 0.9;
}

/* Map Section */
.map-section {
  text-align: center;
}

.map-section h3 {
  color: var(--color-white);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.map-container {
  background: var(--color-bg-secondary);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .contact-subtitle {
    font-size: 1.1rem;
  }

  .main-contact-form {
    padding: 2rem;
  }

  .form-header h2 {
    font-size: 1.75rem;
  }

  .form-subtitle {
    font-size: 1rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .info-card {
    padding: 1.25rem;
  }

  .social-compact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .main-contact-form {
    padding: 1.5rem;
  }

  .form-header {
    margin-bottom: 2rem;
  }

  .form-header h2 {
    font-size: 1.5rem;
  }

  .info-header h4 {
    font-size: 1rem;
  }

  .service-compact {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .service-compact i {
    margin-top: 0;
  }
}

/* Theme adjustments */
.theme-light .info-card,
.theme-light .main-contact-form,
.theme-light .map-container {
  background: var(--color-bg-secondary);
  border-color: var(--color-border);
}

.theme-light .social-compact,
.theme-light .service-compact {
  background: rgba(139, 122, 94, 0.05);
}

.theme-light .social-compact:hover,
.theme-light .service-compact:hover {
  background: rgba(139, 122, 94, 0.1);
}
</style>