<template>
  <section id="contact" class="contact-form-section">
    <div class="container">
      <form
        @submit.prevent="handleSubmit"
        class="contact-form"
        :class="{ 'form--sending': isSending }"
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <!-- Hidden honeypot field for spam protection -->
        <input type="hidden" name="form-name" value="contact-form" />
        <div style="display: none;">
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </div>

        <div class="form-grid">
          <!-- Name Field -->
          <div class="form-field">
            <label for="name" class="form-label">{{ translations.name || 'Name' }} *</label>
            <input
              id="name"
              name="name"
              v-model="form.name"
              type="text"
              class="form-input"
              :class="{ 'error': errors.name }"
              required
              :placeholder="translations.name_placeholder || 'Your full name'"
            >
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>

          <!-- Email Field -->
          <div class="form-field">
            <label for="email" class="form-label">{{ translations.email || 'Email' }} *</label>
            <input
              id="email"
              name="email"
              v-model="form.email"
              type="email"
              class="form-input"
              :class="{ 'error': errors.email }"
              required
              :placeholder="translations.email_placeholder || 'your.email@example.com'"
            >
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <!-- Subject Field -->
          <div class="form-field form-field--full">
            <label for="subject" class="form-label">{{ translations.subject || 'Subject' }}</label>
            <select
              id="subject"
              name="subject"
              v-model="form.subject"
              class="form-input form-select"
              @change="onSubjectChange"
            >
              <option value="">{{ translations.select_subject || 'Select a subject' }}</option>
              <option value="access_request">{{ translations.portfolio_access || 'Portfolio Access Request' }}</option>
              <option value="job_opportunity">{{ translations.job_opportunity || 'Job Opportunity' }}</option>
              <option value="project_discussion">{{ translations.project_discussion || 'Project Discussion' }}</option>
              <option value="collaboration">{{ translations.collaboration || 'Collaboration' }}</option>
              <option value="other">{{ translations.other || 'Other' }}</option>
            </select>
          </div>

          <!-- Access Request Details (conditional) -->
          <div v-if="form.subject === 'access_request'" class="form-field form-field--full access-request-section">
            <div class="access-info-card">
              <h3>{{ translations.access_request_title || 'Portfolio Access Request' }}</h3>
              <p>{{ translations.access_request_info || 'To protect sensitive information, detailed portfolio content requires verification.' }}</p>
            </div>

            <div class="form-field">
              <label for="company" class="form-label">{{ translations.company || 'Company/Organization' }} *</label>
              <input
                id="company"
                name="company"
                v-model="form.company"
                type="text"
                class="form-input"
                :class="{ 'error': errors.company }"
                required
                :placeholder="translations.company_placeholder || 'Your company or organization'"
              >
              <span v-if="errors.company" class="error-message">{{ errors.company }}</span>
            </div>

            <div class="form-field">
              <label for="position" class="form-label">{{ translations.position || 'Your Position' }} *</label>
              <input
                id="position"
                name="position"
                v-model="form.position"
                type="text"
                class="form-input"
                :class="{ 'error': errors.position }"
                required
                :placeholder="translations.position_placeholder || 'HR Manager, Recruiter, CTO, etc.'"
              >
              <span v-if="errors.position" class="error-message">{{ errors.position }}</span>
            </div>

            <div class="form-field">
              <label for="reason" class="form-label">{{ translations.access_reason || 'Reason for Access' }} *</label>
              <select
                id="reason"
                name="reason"
                v-model="form.reason"
                class="form-input form-select"
                :class="{ 'error': errors.reason }"
                required
              >
                <option value="">{{ translations.select_reason || 'Select reason' }}</option>
                <option value="recruitment">{{ translations.recruitment || 'Recruitment/Hiring' }}</option>
                <option value="project_evaluation">{{ translations.project_evaluation || 'Project Evaluation' }}</option>
                <option value="partnership">{{ translations.partnership || 'Partnership Discussion' }}</option>
                <option value="reference_check">{{ translations.reference_check || 'Reference Check' }}</option>
                <option value="other">{{ translations.other || 'Other' }}</option>
              </select>
              <span v-if="errors.reason" class="error-message">{{ errors.reason }}</span>
            </div>
          </div>

          <!-- Message Field -->
          <div class="form-field form-field--full">
            <label for="message" class="form-label">{{ translations.message || 'Message' }} *</label>
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              class="form-textarea"
              :class="{ 'error': errors.message }"
              rows="6"
              required
              :placeholder="getMessagePlaceholder()"
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>

          <!-- Submit Button -->
          <div class="form-field form-field--full form-actions">
            <button
              type="submit"
              class="btn btn--primary btn--large"
              :disabled="isSending"
            >
              <span v-if="!isSending">
                <i class="ri-send-plane-line"></i>
                {{ translations.send_message || 'Send Message' }}
              </span>
              <span v-else>
                <i class="ri-loader-4-line animate-spin"></i>
                {{ translations.sending || 'Sending...' }}
              </span>
            </button>

          </div>
        </div>
      </form>

      <!-- Success/Error Messages -->
      <div v-if="showMessage" class="form-message" :class="messageType">
        <div class="message-content">
          <i :class="messageIcon"></i>
          <div>
            <h4>{{ messageTitle }}</h4>
            <p>{{ messageText }}</p>
          </div>
          <button @click="closeMessage" class="message-close">
            <i class="ri-close-line"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

// EmailJS - será configurado depois
// import emailjs from '@emailjs/browser'

const { translations, initialize } = useLanguage()

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  company: '',
  position: '',
  reason: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  company: '',
  position: '',
  reason: '',
  message: ''
})

const isSending = ref(false)
const showMessage = ref(false)
const messageType = ref('success') // 'success' or 'error'
const messageText = ref('')

// Message computed properties
const messageTitle = computed(() => {
  return messageType.value === 'success'
    ? (translations.success_title || 'Message Sent!')
    : (translations.error_title || 'Error')
})

const messageIcon = computed(() => {
  return messageType.value === 'success'
    ? 'ri-check-circle-line'
    : 'ri-error-warning-line'
})

// Validation
const validateForm = () => {
  // Clear previous errors
  Object.keys(errors).forEach(key => errors[key] = '')

  let isValid = true

  // Name validation
  if (!form.name.trim()) {
    errors.name = translations.name_required || 'Name is required'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = translations.name_min_length || 'Name must be at least 2 characters'
    isValid = false
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = translations.email_required || 'Email is required'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = translations.email_invalid || 'Please enter a valid email'
    isValid = false
  }

  // Additional validations for access requests
  if (form.subject === 'access_request') {
    if (!form.company.trim()) {
      errors.company = translations.company_required || 'Company is required for access requests'
      isValid = false
    }

    if (!form.position.trim()) {
      errors.position = translations.position_required || 'Position is required for access requests'
      isValid = false
    }

    if (!form.reason) {
      errors.reason = translations.reason_required || 'Reason is required for access requests'
      isValid = false
    }
  }

  // Message validation
  if (!form.message.trim()) {
    errors.message = translations.message_required || 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = translations.message_min_length || 'Message must be at least 10 characters'
    isValid = false
  }

  return isValid
}

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSending.value = true
  showMessage.value = false

  try {
    await submitToNetlify()

  } catch (error) {
    console.error('Form submission error:', error)
    messageType.value = 'error'
    messageText.value = translations.message_error || 'Sorry, there was an error sending your message. Please try again.'
    showMessage.value = true
  } finally {
    isSending.value = false

    // Auto-hide message after 8 seconds
    setTimeout(() => {
      showMessage.value = false
    }, 8000)
  }
}

// Submit form to Netlify
const submitToNetlify = async () => {
  const formData = new FormData()

  // Add all form fields
  formData.append('form-name', 'contact-form')
  formData.append('name', form.name)
  formData.append('email', form.email)
  formData.append('subject', form.subject)
  formData.append('message', form.message)

  // Add access request fields if present
  if (form.subject === 'access_request') {
    formData.append('company', form.company)
    formData.append('position', form.position)
    formData.append('reason', form.reason)
  }

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  // Handle success based on form type
  if (form.subject === 'access_request') {
    await handleAccessRequest()
  } else {
    handleRegularMessage()
  }
}

const handleAccessRequest = async () => {
  messageType.value = 'success'
  messageText.value = `
${translations.access_request_sent || 'Access request sent successfully!'}

${translations.access_request_confirmation || 'Your request has been sent. You will receive an access code via email if approved.'}

${translations.access_request_note || 'Please check your email within 24-48 hours for a response.'}
  `
  showMessage.value = true

  // Reset form
  resetForm()
}

const handleRegularMessage = () => {
  messageType.value = 'success'
  messageText.value = translations.message_sent || 'Message sent successfully! I\'ll get back to you soon.'
  showMessage.value = true

  // Reset form
  resetForm()
}


const resetForm = () => {
  Object.keys(form).forEach(key => form[key] = '')
}

const onSubjectChange = () => {
  // Clear message when changing subject
  form.message = ''
}

const getMessagePlaceholder = () => {
  if (form.subject === 'access_request') {
    return translations.access_message_placeholder ||
           'Please provide additional context about your request and timeline...'
  }
  return translations.message_placeholder ||
         'Tell me about your project or how I can help you...'
}


const closeMessage = () => {
  showMessage.value = false
}

onMounted(async () => {
  await initialize()
})
</script>


<style scoped>
/* Contact Form Section */
.contact-form-section {
  padding: 6rem 0;
}

.contact-form {
  max-width: 700px;
  margin: 0 auto;
  transition: var(--transition);
}

.form--sending {
  opacity: 0.7;
  pointer-events: none;
}

/* Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-field--full {
  grid-column: 1 / -1;
}

/* Form Fields */
.form-field {
  position: relative;
}

.form-label {
  display: block;
  color: var(--color-white);
  font-weight: var(--fw-medium);
  margin-bottom: 0.5rem;
  font-size: var(--fs-sm);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  color: var(--color-white);
  font-size: var(--fs-md);
  font-family: var(--ff-body);
  transition: var(--transition);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(195, 176, 145, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text);
  opacity: 0.7;
}

.form-input.error,
.form-textarea.error {
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  color: #e74c3c;
  font-size: var(--fs-sm);
  margin-top: 0.5rem;
  display: block;
}

/* Form Actions */
.form-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}

.btn--large {
  padding: 1.2rem 3rem;
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 200px;
  justify-content: center;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Contact Info */
.contact-info {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-size: var(--fs-sm);
}

.contact-info-item i {
  color: var(--color-primary);
  font-size: 1.2rem;
}

.contact-info-item a {
  color: var(--color-white);
  text-decoration: none;
  transition: var(--transition);
}

.contact-info-item a:hover {
  color: var(--color-primary);
}

/* Success/Error Messages */
.form-message {
  position: fixed;
  top: 2rem;
  right: 2rem;
  max-width: 400px;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
}

.form-message.success {
  background: #27ae60;
  color: white;
}

.form-message.error {
  background: #e74c3c;
  color: white;
}

.message-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.message-content i {
  font-size: 1.5rem;
  margin-top: 0.2rem;
}

.message-content h4 {
  margin: 0 0 0.5rem 0;
  font-size: var(--fs-md);
}

.message-content p {
  margin: 0;
  font-size: var(--fs-sm);
  line-height: 1.4;
}

.message-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  margin-left: auto;
}

/* Animations */
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Access Request Section */
.access-request-section {
  background: linear-gradient(135deg, rgba(106, 90, 205, 0.1), rgba(106, 90, 205, 0.05));
  border: 2px solid rgba(106, 90, 205, 0.2);
  border-radius: 12px;
  padding: 2rem;
  margin: 1.5rem 0;
}

.access-info-card {
  background: rgba(106, 90, 205, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid var(--color-primary);
}

.access-info-card h3 {
  color: var(--color-primary);
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.access-info-card p {
  color: var(--color-text);
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

.access-request-section .form-field {
  margin-bottom: 1.5rem;
}

.form-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  cursor: pointer;
}

.form-select:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236a5acd' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
}

/* Enhanced message styling for access codes */
.form-message.success {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  border-left: 4px solid #1e7e34;
}

.form-message .message-content {
  white-space: pre-line;
  line-height: 1.6;
}

.form-message .message-content strong {
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .access-request-section {
    padding: 1.5rem;
    margin: 1rem 0;
  }

  .access-info-card {
    padding: 1rem;
  }

  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }

  /* Contact Preview Styles */
  .contact-preview {
    color: #999;
    font-style: italic;
    font-family: monospace;
    letter-spacing: 1px;
  }

  .form-message {
    position: fixed;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    max-width: none;
  }

  .form-actions {
    gap: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  .contact-form-section {
    padding: 3rem 0;
  }

  .btn--large {
    width: 100%;
    padding: 1rem 2rem;
  }
}
</style>