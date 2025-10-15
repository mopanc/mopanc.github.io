<template>
  <div class="contact-page">
    <div class="container">
      <!-- Header Section -->
      <div class="contact-header">
        <h1 class="contact-title" ref="contact_title">Get In Touch</h1>
        <p class="contact-subtitle" ref="contact_subtitle">
          Ready to bring your next project to life? Let's discuss how we can work together.
        </p>

        <!-- Call to Action Buttons -->
        <div class="cta-buttons">
          <button @click="openSchedule" class="cta-btn cta-primary">
            <i class="ri-calendar-line"></i>
            <span ref="schedule_meeting">Schedule a Meeting</span>
          </button>
          <a href="mailto:jorgemopanc@icloud.com" class="cta-btn cta-secondary">
            <i class="ri-mail-line"></i>
            <span ref="send_email_cta">Send Email</span>
          </a>
        </div>
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

    <!-- Schedule Meeting Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showScheduleModal" class="schedule-modal-overlay" @click="closeSchedule">
          <div class="schedule-modal" @click.stop>
            <div class="schedule-header">
              <h3 ref="schedule_modal_title">Schedule a Meeting</h3>
              <button @click="closeSchedule" class="close-modal-btn">
                <i class="ri-close-line"></i>
              </button>
            </div>

            <div class="schedule-body">
              <!-- Option 1: Calendly Integration (if you have a Calendly account) -->
              <div class="schedule-option" v-if="calendlyUrl">
                <p ref="schedule_calendly_desc">Select a convenient time slot from my calendar:</p>
                <a :href="calendlyUrl" target="_blank" rel="noopener noreferrer" class="schedule-calendly-btn">
                  <i class="ri-calendar-check-line"></i>
                  <span ref="open_calendar">Open Calendar</span>
                </a>
              </div>

              <!-- Option 2: Meeting Request Form -->
              <div class="schedule-option" v-if="!calendlyUrl">
                <p ref="schedule_form_desc">Fill in your details and preferred time, and I'll get back to you shortly:</p>

                <form
                  @submit.prevent="submitMeetingRequest"
                  class="meeting-request-form"
                  name="meeting-request"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <!-- Hidden fields for Netlify -->
                  <input type="hidden" name="form-name" value="meeting-request" />
                  <div style="display: none;">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>
                  <div class="form-group">
                    <label ref="meeting_name_label">Your Name *</label>
                    <input
                      name="name"
                      v-model="meetingRequest.name"
                      type="text"
                      required
                      :placeholder="$refs.meeting_name_placeholder?.textContent || 'John Doe'"
                    >
                  </div>

                  <div class="form-group">
                    <label ref="meeting_email_label">Email *</label>
                    <input
                      name="email"
                      v-model="meetingRequest.email"
                      type="email"
                      required
                      :placeholder="$refs.meeting_email_placeholder?.textContent || 'john@example.com'"
                    >
                  </div>

                  <div class="form-group">
                    <label ref="meeting_company_label">Company/Organization</label>
                    <input
                      name="company"
                      v-model="meetingRequest.company"
                      type="text"
                      :placeholder="$refs.meeting_company_placeholder?.textContent || 'Your Company'"
                    >
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label ref="meeting_date_label">Preferred Date *</label>
                      <input
                        name="date"
                        v-model="meetingRequest.date"
                        type="date"
                        required
                        :min="minDate"
                      >
                    </div>

                    <div class="form-group">
                      <label ref="meeting_time_label">Preferred Time *</label>
                      <select name="time" v-model="meetingRequest.time" required>
                        <option value="" disabled ref="meeting_select_time">Select time</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label ref="meeting_duration_label">Duration</label>
                    <select name="duration" v-model="meetingRequest.duration">
                      <option value="30" ref="meeting_30min">30 minutes</option>
                      <option value="60" ref="meeting_60min">60 minutes</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label ref="meeting_topic_label">Meeting Topic *</label>
                    <textarea
                      name="topic"
                      v-model="meetingRequest.topic"
                      required
                      rows="4"
                      :placeholder="$refs.meeting_topic_placeholder?.textContent || 'What would you like to discuss?'"
                    ></textarea>
                  </div>

                  <button type="submit" class="submit-meeting-btn" :disabled="isSubmitting">
                    <i v-if="!isSubmitting" class="ri-send-plane-fill"></i>
                    <i v-else class="ri-loader-4-line animate-spin"></i>
                    <span ref="submit_meeting">{{ isSubmitting ? 'Sending...' : 'Request Meeting' }}</span>
                  </button>
                </form>
              </div>

              <!-- Success Message -->
              <div v-if="showSuccess" class="success-message">
                <i class="ri-checkbox-circle-line"></i>
                <p ref="meeting_success">Meeting request sent successfully! I'll get back to you within 24 hours.</p>
              </div>

              <!-- Hidden translation refs -->
              <span ref="meeting_name_placeholder" style="display: none;">Your full name</span>
              <span ref="meeting_email_placeholder" style="display: none;">your.email@example.com</span>
              <span ref="meeting_company_placeholder" style="display: none;">Your Company</span>
              <span ref="meeting_topic_placeholder" style="display: none;">What would you like to discuss?</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'ContactPage',
  components: {
    ContactForm
  },
  data() {
    return {
      showScheduleModal: false,
      isSubmitting: false,
      showSuccess: false,
      // Set to null to show form, or add your Calendly URL to use Calendly
      calendlyUrl: null, // Example: 'https://calendly.com/jorgemopanc/30min'
      meetingRequest: {
        name: '',
        email: '',
        company: '',
        date: '',
        time: '',
        duration: '30',
        topic: ''
      },
      minDate: new Date().toISOString().split('T')[0]
    }
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
    openSchedule() {
      this.showScheduleModal = true
      this.showSuccess = false
      // Reset form
      this.meetingRequest = {
        name: '',
        email: '',
        company: '',
        date: '',
        time: '',
        duration: '30',
        topic: ''
      }
    },

    closeSchedule() {
      this.showScheduleModal = false
      this.showSuccess = false
    },

    async submitMeetingRequest() {
      this.isSubmitting = true

      try {
        // Create FormData for Netlify
        const formData = new FormData()
        formData.append('form-name', 'meeting-request')
        formData.append('name', this.meetingRequest.name)
        formData.append('email', this.meetingRequest.email)
        formData.append('company', this.meetingRequest.company)
        formData.append('date', this.meetingRequest.date)
        formData.append('time', this.meetingRequest.time)
        formData.append('duration', this.meetingRequest.duration)
        formData.append('topic', this.meetingRequest.topic)

        // Submit to Netlify
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        // Show success message
        this.showSuccess = true

        // Auto close after 3 seconds
        setTimeout(() => {
          this.closeSchedule()
        }, 3000)

      } catch (error) {
        console.error('Error submitting meeting request:', error)
        alert('Sorry, there was an error. Please try again or contact me directly.')
      } finally {
        this.isSubmitting = false
      }
    },

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
  margin: 0 auto 2rem;
  line-height: 1.6;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: var(--fw-semibold);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.cta-primary {
  background: linear-gradient(135deg, var(--color-primary), #9d8660);
  color: var(--color-bg-primary);
  box-shadow: 0 4px 20px rgba(195, 176, 145, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(195, 176, 145, 0.4);
}

.cta-secondary {
  background: var(--color-bg-secondary);
  color: var(--color-white);
  border: 2px solid var(--color-border);
}

.cta-secondary:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cta-btn i {
  font-size: 1.3rem;
}

.cta-btn:active {
  transform: translateY(0);
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

/* Schedule Meeting Modal */
.schedule-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 2rem;
  overflow-y: auto;
}

.schedule-modal {
  background: var(--color-bg-secondary);
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--color-border);
  position: relative;
  z-index: 100000;
  display: flex;
  flex-direction: column;
}

.schedule-header {
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: var(--color-bg-secondary);
  z-index: 1;
}

.schedule-header h3 {
  color: var(--color-white);
  font-size: 1.75rem;
  font-weight: var(--fw-bold);
  margin: 0;
}

.close-modal-btn {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.75rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.close-modal-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
}

.schedule-body {
  padding: 2rem;
  overflow-y: auto;
  flex: 1;
  /* Hide scrollbar for Chrome, Safari and Opera */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.schedule-body::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.schedule-option p {
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

/* Calendly Button */
.schedule-calendly-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--color-primary), #9d8660);
  color: var(--color-bg-primary);
  text-decoration: none;
  border-radius: 12px;
  font-weight: var(--fw-semibold);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(195, 176, 145, 0.3);
}

.schedule-calendly-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(195, 176, 145, 0.4);
}

.schedule-calendly-btn i {
  font-size: 1.3rem;
}

/* Meeting Request Form */
.meeting-request-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: var(--color-white);
  font-weight: var(--fw-medium);
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.875rem 1.25rem;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  color: var(--color-white);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(195, 176, 145, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-text);
  opacity: 0.6;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.submit-meeting-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--color-primary), #9d8660);
  color: var(--color-bg-primary);
  border: none;
  border-radius: 12px;
  font-weight: var(--fw-semibold);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  box-shadow: 0 4px 20px rgba(195, 176, 145, 0.3);
}

.submit-meeting-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(195, 176, 145, 0.4);
}

.submit-meeting-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-meeting-btn i {
  font-size: 1.2rem;
}

/* Success Message */
.success-message {
  background: rgba(46, 213, 115, 0.1);
  border: 1px solid #2ed573;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.success-message i {
  font-size: 2rem;
  color: #2ed573;
  flex-shrink: 0;
}

.success-message p {
  color: var(--color-white);
  margin: 0;
  line-height: 1.5;
}

/* Animation */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active .schedule-modal,
.modal-fade-leave-active .schedule-modal {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .schedule-modal,
.modal-fade-leave-to .schedule-modal {
  transform: scale(0.9);
  opacity: 0;
}

/* Responsive Modal */
@media (max-width: 768px) {
  .schedule-modal-overlay {
    padding: 1rem;
  }

  .schedule-modal {
    max-height: 95vh;
  }

  .schedule-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .schedule-header h3 {
    font-size: 1.5rem;
  }

  .schedule-body {
    padding: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .schedule-header {
    padding: 1.25rem;
  }

  .schedule-header h3 {
    font-size: 1.25rem;
  }

  .schedule-body {
    padding: 1.25rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.75rem 1rem;
  }

  .submit-meeting-btn,
  .schedule-calendly-btn {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>