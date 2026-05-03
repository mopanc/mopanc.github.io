<template>
  <section id="contact" class="cf-section">
    <div class="cf-shell">
      <form
        @submit.prevent="handleSubmit"
        class="cf-form"
        :class="{ 'cf-form--sending': isSending, 'cf-form--sent': sent }"
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        novalidate
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <p class="cf-honeypot" aria-hidden="true">
          <label>Don't fill this out: <input name="bot-field" tabindex="-1" /></label>
        </p>

        <!-- Subject as segmented control -->
        <fieldset class="cf-segmented" :class="{ 'cf-field--invalid': false }">
          <legend class="cf-legend">
            <span class="cf-legend__num">01</span>
            {{ translations.subject || 'What is this about' }}
          </legend>
          <div class="cf-seg" role="radiogroup">
            <button
              v-for="opt in subjectOptions"
              :key="opt.value"
              type="button"
              role="radio"
              :aria-checked="form.subject === opt.value"
              class="cf-seg__btn"
              :class="{ 'cf-seg__btn--active': form.subject === opt.value }"
              @click="setSubject(opt.value)"
            >
              <i :class="opt.icon"></i>
              <span>{{ opt.label }}</span>
            </button>
          </div>
        </fieldset>

        <!-- Name + Email row -->
        <div class="cf-row">
          <!-- Name -->
          <div class="cf-field" :class="{ 'cf-field--filled': form.name, 'cf-field--invalid': errors.name }">
            <label for="cf-name" class="cf-field__label">
              <span class="cf-field__num">02</span>
              {{ translations.name || 'Your name' }}
            </label>
            <input
              id="cf-name"
              name="name"
              v-model="form.name"
              type="text"
              autocomplete="name"
              class="cf-field__input"
              required
              @focus="touched.name = true"
            />
            <span class="cf-field__line" aria-hidden="true"></span>
            <span v-if="errors.name" class="cf-field__error">{{ errors.name }}</span>
          </div>

          <!-- Email -->
          <div class="cf-field" :class="{ 'cf-field--filled': form.email, 'cf-field--invalid': errors.email }">
            <label for="cf-email" class="cf-field__label">
              <span class="cf-field__num">03</span>
              {{ translations.email || 'Email' }}
            </label>
            <input
              id="cf-email"
              name="email"
              v-model="form.email"
              type="email"
              autocomplete="email"
              class="cf-field__input"
              required
              @focus="touched.email = true"
            />
            <span class="cf-field__line" aria-hidden="true"></span>
            <span v-if="errors.email" class="cf-field__error">{{ errors.email }}</span>
          </div>
        </div>

        <!-- Access-request conditional fields -->
        <transition name="cf-collapse">
          <div v-if="form.subject === 'access_request'" class="cf-extra">
            <p class="cf-extra__hint">
              <i class="ri-lock-2-line"></i>
              {{ translations.access_request_info || 'Sensitive portfolio content. Verification required.' }}
            </p>
            <div class="cf-row">
              <div class="cf-field" :class="{ 'cf-field--filled': form.company, 'cf-field--invalid': errors.company }">
                <label for="cf-company" class="cf-field__label">
                  <span class="cf-field__num">·</span>
                  {{ translations.company || 'Company' }}
                </label>
                <input
                  id="cf-company"
                  name="company"
                  v-model="form.company"
                  type="text"
                  autocomplete="organization"
                  class="cf-field__input"
                />
                <span class="cf-field__line" aria-hidden="true"></span>
                <span v-if="errors.company" class="cf-field__error">{{ errors.company }}</span>
              </div>
              <div class="cf-field" :class="{ 'cf-field--filled': form.position, 'cf-field--invalid': errors.position }">
                <label for="cf-position" class="cf-field__label">
                  <span class="cf-field__num">·</span>
                  {{ translations.position || 'Your role' }}
                </label>
                <input
                  id="cf-position"
                  name="position"
                  v-model="form.position"
                  type="text"
                  autocomplete="organization-title"
                  class="cf-field__input"
                />
                <span class="cf-field__line" aria-hidden="true"></span>
                <span v-if="errors.position" class="cf-field__error">{{ errors.position }}</span>
              </div>
            </div>
            <div class="cf-field" :class="{ 'cf-field--filled': form.reason, 'cf-field--invalid': errors.reason }">
              <label for="cf-reason" class="cf-field__label">
                <span class="cf-field__num">·</span>
                {{ translations.access_reason || 'Reason for access' }}
              </label>
              <select id="cf-reason" name="reason" v-model="form.reason" class="cf-field__input cf-field__select">
                <option value="">—</option>
                <option value="recruitment">{{ translations.recruitment || 'Recruitment / Hiring' }}</option>
                <option value="project_evaluation">{{ translations.project_evaluation || 'Project Evaluation' }}</option>
                <option value="partnership">{{ translations.partnership || 'Partnership Discussion' }}</option>
                <option value="reference_check">{{ translations.reference_check || 'Reference Check' }}</option>
                <option value="other">{{ translations.other || 'Other' }}</option>
              </select>
              <span class="cf-field__line" aria-hidden="true"></span>
              <span v-if="errors.reason" class="cf-field__error">{{ errors.reason }}</span>
            </div>
          </div>
        </transition>

        <!-- Message -->
        <div class="cf-field cf-field--ta" :class="{ 'cf-field--filled': form.message, 'cf-field--invalid': errors.message }">
          <label for="cf-message" class="cf-field__label">
            <span class="cf-field__num">04</span>
            {{ translations.message || 'Message' }}
          </label>
          <textarea
            id="cf-message"
            name="message"
            v-model="form.message"
            class="cf-field__input cf-field__textarea"
            rows="5"
            required
            :maxlength="charLimit"
            :placeholder="getMessagePlaceholder()"
          ></textarea>
          <span class="cf-field__line" aria-hidden="true"></span>
          <div class="cf-field__meta">
            <span class="cf-field__error" v-if="errors.message">{{ errors.message }}</span>
            <span class="cf-counter" :class="{ 'cf-counter--warn': form.message.length > charLimit * 0.85 }">
              {{ form.message.length }} / {{ charLimit }}
            </span>
          </div>
        </div>

        <!-- Submit -->
        <div class="cf-submit-row">
          <button
            type="submit"
            class="cf-submit"
            :class="{
              'cf-submit--sending': isSending,
              'cf-submit--done': sent,
              'cf-submit--error': errored
            }"
            :disabled="isSending || sent"
          >
            <span class="cf-submit__progress" aria-hidden="true"></span>
            <span class="cf-submit__label">
              <template v-if="sent">
                <i class="ri-check-line"></i>
                {{ translations.message_sent_short || 'delivered.' }}
              </template>
              <template v-else-if="errored">
                <i class="ri-error-warning-line"></i>
                {{ translations.error_title || 'try again' }}
              </template>
              <template v-else-if="isSending">
                <i class="ri-loader-4-line cf-spin"></i>
                {{ translations.sending || 'Sending...' }}
              </template>
              <template v-else>
                {{ translations.send_message || 'Send Message' }}
                <i class="ri-arrow-right-up-line"></i>
              </template>
            </span>
          </button>
          <p class="cf-submit__note">
            <i class="ri-time-line"></i>
            {{ translations.response_time || 'Replies within 24h · Braga, CET' }}
          </p>
        </div>
      </form>

      <!-- Inline success block (replaces toast — feels more editorial) -->
      <transition name="cf-success">
        <div v-if="showSuccessBlock" class="cf-success-block" :class="{ 'cf-success-block--access': isAccessRequest }">
          <div class="cf-success-block__num">✓</div>
          <div class="cf-success-block__body">
            <h3>{{ messageTitle }}</h3>
            <p style="white-space: pre-line">{{ messageText }}</p>
            <button class="cf-success-block__close" @click="closeMessage">
              {{ translations.send_another || 'Send another' }}
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { translations, initialize } = useLanguage()

const charLimit = 1500

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

const touched = reactive({
  name: false,
  email: false,
  message: false
})

const isSending = ref(false)
const sent = ref(false)
const errored = ref(false)
const showSuccessBlock = ref(false)
const messageType = ref('success')
const messageText = ref('')
const isAccessRequest = ref(false)

const subjectOptions = computed(() => [
  { value: 'project_discussion', icon: 'ri-rocket-line', label: translations.project_discussion || 'Project' },
  { value: 'job_opportunity', icon: 'ri-briefcase-line', label: translations.job_opportunity || 'Hiring' },
  { value: 'collaboration', icon: 'ri-team-line', label: translations.collaboration || 'Collab' },
  { value: 'other', icon: 'ri-chat-3-line', label: translations.other || 'Other' }
])

const messageTitle = computed(() =>
  messageType.value === 'success'
    ? (translations.success_title || 'Message Sent!')
    : (translations.error_title || 'Error')
)

const setSubject = (val) => {
  form.subject = form.subject === val ? '' : val
  // clear conditional errors when subject changes
  errors.company = ''
  errors.position = ''
  errors.reason = ''
}

const validateForm = () => {
  Object.keys(errors).forEach(key => errors[key] = '')
  let isValid = true

  if (!form.name.trim()) {
    errors.name = translations.name_required || 'Name is required'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = translations.name_min_length || 'Name must be at least 2 characters'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = translations.email_required || 'Email is required'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = translations.email_invalid || 'Invalid email'
    isValid = false
  }

  if (form.subject === 'access_request') {
    if (!form.company.trim()) {
      errors.company = translations.company_required || 'Company required'
      isValid = false
    }
    if (!form.position.trim()) {
      errors.position = translations.position_required || 'Position required'
      isValid = false
    }
    if (!form.reason) {
      errors.reason = translations.reason_required || 'Reason required'
      isValid = false
    }
  }

  if (!form.message.trim()) {
    errors.message = translations.message_required || 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = translations.message_min_length || 'Message must be at least 10 characters'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    // shake the form on invalid
    const formEl = document.querySelector('.cf-form')
    if (formEl) {
      formEl.classList.remove('cf-form--shake')
      // force reflow
      void formEl.offsetWidth
      formEl.classList.add('cf-form--shake')
    }
    return
  }

  isSending.value = true
  errored.value = false
  showSuccessBlock.value = false

  try {
    const formData = new FormData()
    formData.append('form-name', 'contact-form')
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('subject', form.subject)
    formData.append('message', form.message)
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

    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    isAccessRequest.value = form.subject === 'access_request'
    messageType.value = 'success'
    if (isAccessRequest.value) {
      messageText.value = (translations.access_request_confirmation
        || 'Your request was sent. You will receive an access code via email if approved.')
        + '\n\n'
        + (translations.access_request_note || 'Please check your email within 24-48 hours.')
    } else {
      messageText.value = translations.message_sent || 'Message sent. I will get back to you soon.'
    }

    sent.value = true
    // Wait a beat to let the button "delivered" state breathe before showing block
    setTimeout(() => {
      showSuccessBlock.value = true
    }, 600)
  } catch (error) {
    console.error('Form submission error:', error)
    errored.value = true
    messageType.value = 'error'
    messageText.value = translations.message_error || 'Something went wrong. Please try again.'
    showSuccessBlock.value = true
    // Auto-clear error state on submit button after 2s so user can retry
    setTimeout(() => {
      errored.value = false
    }, 2400)
  } finally {
    isSending.value = false
  }
}

const closeMessage = () => {
  showSuccessBlock.value = false
  if (messageType.value === 'success') {
    // Reset form for "send another"
    Object.keys(form).forEach(key => form[key] = '')
    sent.value = false
  }
}

const getMessagePlaceholder = () => {
  if (form.subject === 'access_request') {
    return translations.access_message_placeholder
      || 'Provide additional context: timeline, role, what you want to evaluate.'
  }
  return translations.message_placeholder
    || 'Tell me about your project, scope, deadlines.'
}

// re-validate live once a field has been touched & is non-empty
watch(() => form.name, () => { if (touched.name && errors.name) errors.name = '' })
watch(() => form.email, () => { if (touched.email && errors.email) errors.email = '' })
watch(() => form.message, () => { if (errors.message && form.message.trim().length >= 10) errors.message = '' })

onMounted(async () => {
  await initialize()
})
</script>

<style scoped>
/* ── Section shell ─────────────────────────────────────── */
.cf-section {
  padding: 0;
}

.cf-shell {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  position: relative;
}

.cf-honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* ── Form ──────────────────────────────────────────────── */
.cf-form {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 0;
  position: relative;
}

.cf-form--sending {
  pointer-events: none;
}

.cf-form--shake {
  animation: cfShake 0.45s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

@keyframes cfShake {
  10%, 90% { transform: translateX(-1px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-4px); }
  40%, 60% { transform: translateX(4px); }
}

/* ── Segmented (subject) ───────────────────────────────── */
.cf-segmented {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.cf-legend {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-text);
  padding: 0;
}

.cf-legend__num {
  color: var(--color-primary);
  font-weight: 600;
}

.cf-seg {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.cf-seg__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 1.3rem;
  font-family: inherit;
  font-size: 1.35rem;
  font-weight: 500;
  background: transparent;
  color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 0;
  cursor: pointer;
  transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease, transform 0.18s ease;
  position: relative;
  overflow: hidden;
}

.cf-seg__btn i {
  font-size: 1.5rem;
  color: var(--color-text);
  transition: color 0.22s ease;
}

.cf-seg__btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-white);
  transform: translateY(101%);
  transition: transform 0.32s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: -1;
}

.cf-seg__btn:hover:not(.cf-seg__btn--active) {
  border-color: var(--color-white);
}

.cf-seg__btn--active {
  color: var(--color-bg-primary);
  border-color: var(--color-white);
}

.cf-seg__btn--active::before {
  transform: translateY(0);
}

.cf-seg__btn--active i {
  color: var(--color-primary);
}

/* ── Field (universal) ─────────────────────────────────── */
.cf-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
}

.cf-field {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 1.8rem;
}

.cf-field__label {
  position: absolute;
  top: 1.8rem;
  left: 0;
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  font-family: inherit;
  font-size: 1.5rem;
  color: var(--color-text);
  pointer-events: none;
  transform-origin: left top;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
              color 0.22s ease,
              opacity 0.22s ease;
  letter-spacing: 0;
}

.cf-field__num {
  font-family: var(--ff-mono);
  font-size: 1.05rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: 600;
  position: relative;
  top: -1px;
}

.cf-field__input {
  width: 100%;
  padding: 0.7rem 0 1rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  color: var(--color-white);
  font-size: 1.7rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.4;
  outline: none;
  position: relative;
  z-index: 1;
}

.cf-field__input::placeholder {
  color: var(--color-text);
  opacity: 0.5;
}

.cf-field__input::-webkit-outer-spin-button,
.cf-field__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.cf-field__textarea {
  resize: vertical;
  min-height: 130px;
  line-height: 1.55;
  padding-bottom: 1.2rem;
}

.cf-field__select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23999' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0 center;
  background-repeat: no-repeat;
  background-size: 1.6em 1.6em;
  padding-right: 2.5rem;
}

/* Bottom border (resting) */
.cf-field::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--color-border);
  z-index: 0;
}

/* Animated focus underline (draws from left) */
.cf-field__line {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.42s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: 1;
  pointer-events: none;
}

.cf-field:focus-within .cf-field__line {
  transform: scaleX(1);
}

/* Floating label states */
.cf-field:focus-within .cf-field__label,
.cf-field--filled .cf-field__label {
  transform: translateY(-2.2rem) scale(0.78);
  color: var(--color-text);
}

.cf-field:focus-within .cf-field__label .cf-field__num,
.cf-field--filled .cf-field__label .cf-field__num {
  color: var(--color-primary);
}

.cf-field:focus-within .cf-field__label {
  color: var(--color-white);
}

/* Invalid state */
.cf-field--invalid::after {
  background: #d4365e;
}

.cf-field--invalid .cf-field__line {
  background: #d4365e;
  transform: scaleX(1);
}

.cf-field__error {
  margin-top: 0.5rem;
  font-family: var(--ff-mono);
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  color: #d4365e;
  text-transform: lowercase;
}

.cf-field__meta {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.cf-counter {
  font-family: var(--ff-mono);
  font-size: 1.1rem;
  color: var(--color-text);
  letter-spacing: 0.06em;
  font-variant-numeric: tabular-nums;
  margin-left: auto;
}

.cf-counter--warn {
  color: var(--color-warning);
}

/* ── Conditional access-request block ──────────────────── */
.cf-extra {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2rem 0 0;
  border-top: 1px solid var(--color-border);
  position: relative;
}

.cf-extra::before {
  content: "ACCESS";
  position: absolute;
  top: -0.6rem;
  left: 0;
  background: var(--color-bg-primary);
  font-family: var(--ff-mono);
  font-size: 1rem;
  letter-spacing: 0.22em;
  color: var(--color-primary);
  padding-right: 0.8rem;
}

.cf-extra__hint {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0;
  font-size: 1.3rem;
  color: var(--color-text);
}

.cf-extra__hint i {
  color: var(--color-primary);
  font-size: 1.5rem;
}

/* Collapse transition */
.cf-collapse-enter-active,
.cf-collapse-leave-active {
  overflow: hidden;
  transition: max-height 0.38s cubic-bezier(0.22, 1, 0.36, 1),
              opacity 0.28s ease,
              margin 0.38s ease;
}
.cf-collapse-enter-from,
.cf-collapse-leave-to {
  max-height: 0;
  opacity: 0;
  margin-top: -2rem;
}
.cf-collapse-enter-to,
.cf-collapse-leave-from {
  max-height: 600px;
  opacity: 1;
  margin-top: 0;
}

/* ── Submit button ─────────────────────────────────────── */
.cf-submit-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.cf-submit {
  --c-bg: #1A1A1A;
  --c-fg: #FAFAF8;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  padding: 1.4rem 2.2rem;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--c-fg);
  background: var(--c-bg);
  border: 1px solid var(--c-bg);
  border-radius: 0;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease, transform 0.18s ease;
}

.cf-submit:hover:not(:disabled):not(.cf-submit--sending):not(.cf-submit--done) {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.cf-submit:disabled {
  cursor: not-allowed;
}

.cf-submit__label {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.cf-submit__label i {
  font-size: 1.5rem;
  transition: transform 0.25s ease;
}

.cf-submit:hover .cf-submit__label i.ri-arrow-right-up-line {
  transform: translate(2px, -2px);
}

.cf-submit__progress {
  position: absolute;
  inset: 0;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left center;
  z-index: 1;
  pointer-events: none;
}

.cf-submit--sending .cf-submit__progress {
  animation: cfProgress 1.4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}

@keyframes cfProgress {
  0% { transform: scaleX(0); transform-origin: left center; }
  50% { transform: scaleX(1); transform-origin: left center; }
  50.01% { transform: scaleX(1); transform-origin: right center; }
  100% { transform: scaleX(0); transform-origin: right center; }
}

.cf-submit--done {
  --c-bg: #16a34a;
  --c-fg: #FAFAF8;
  border-color: #16a34a;
}
.cf-submit--done .cf-submit__progress {
  background: #16a34a;
  transform: scaleX(1);
  animation: cfBurst 0.6s ease forwards;
}
@keyframes cfBurst {
  0% { transform: scaleX(0); opacity: 1; }
  60% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(1); opacity: 1; }
}

.cf-submit--error {
  --c-bg: #d4365e;
  --c-fg: #FAFAF8;
  border-color: #d4365e;
  animation: cfShake 0.45s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

.cf-spin {
  animation: cfSpin 0.9s linear infinite;
  display: inline-block;
}
@keyframes cfSpin {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

.cf-submit__note {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text);
}

.cf-submit__note i {
  font-size: 1.3rem;
  color: var(--color-primary);
}

/* ── Success block ─────────────────────────────────────── */
.cf-success-block {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: flex-start;
  padding: 2.4rem;
  border: 1px solid var(--color-border);
  border-left: 3px solid #16a34a;
  background: rgba(22, 163, 74, 0.04);
  position: relative;
}

.cf-success-block--access {
  border-left-color: var(--color-primary);
  background: rgba(37, 99, 235, 0.04);
}

.cf-success-block__num {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  color: #16a34a;
  font-family: var(--ff-mono);
}

.cf-success-block--access .cf-success-block__num {
  color: var(--color-primary);
}

.cf-success-block__body h3 {
  margin: 0 0 0.6rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.01em;
}

.cf-success-block__body p {
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.65;
  color: var(--color-text);
}

.cf-success-block__close {
  margin-top: 1.4rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: none;
  padding: 0;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-white);
  cursor: pointer;
  position: relative;
}

.cf-success-block__close::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(1);
  transform-origin: left center;
  transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.cf-success-block__close:hover {
  color: var(--color-primary);
}
.cf-success-block__close:hover::after {
  transform-origin: right center;
  transform: scaleX(0);
}

.cf-success-block__close i {
  transition: transform 0.25s ease;
}
.cf-success-block__close:hover i {
  transform: translateX(3px);
}

.cf-success-enter-active,
.cf-success-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.cf-success-enter-from,
.cf-success-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 720px) {
  .cf-form { gap: 2.6rem; }
  .cf-row { grid-template-columns: 1fr; gap: 2.6rem; }
  .cf-seg { gap: 0.5rem; }
  .cf-seg__btn { padding: 0.7rem 1rem; font-size: 1.25rem; flex: 1 1 calc(50% - 0.3rem); justify-content: center; }
  .cf-submit-row { flex-direction: column; align-items: stretch; gap: 1.2rem; }
  .cf-submit { width: 100%; }
  .cf-submit__note { justify-content: center; }
}
</style>
