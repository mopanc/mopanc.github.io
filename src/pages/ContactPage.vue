<template>
  <div class="contact-edt">

    <!-- ═══ HERO ═══ -->
    <section class="ce-hero">
      <div class="container-wide">
        <p class="ce-hero__eyebrow">
          <span class="ce-hero__eyebrow-dot"></span>
          <span ref="eyebrow_meta">{{ translations.contact_hero_eyebrow || 'Braga · CET (GMT+1) · replies in <24h' }}</span>
        </p>
        <h1 class="ce-hero__title">
          <span class="ce-hero__title-line">{{ translations.contact_hero_title_1 || "let's" }}</span>
          <span class="ce-hero__title-line ce-hero__title-line--accent">
            {{ translations.contact_hero_title_2 || 'talk.' }}<span class="ce-hero__cursor" aria-hidden="true"></span>
          </span>
        </h1>
        <p class="ce-hero__lede" ref="contact_subtitle">
          {{ translations.contact_hero_lede || 'Hiring, projects, or technical conversation.' }}
        </p>
      </div>
    </section>

    <!-- ═══ CHANNELS RAIL ═══ -->
    <section class="ce-channels">
      <div class="container-wide">
        <div class="ce-channels__grid">

          <!-- Left: form (the prime channel) -->
          <div class="ce-channels__form">
            <div class="ce-channels__heading">
              <span class="ce-channels__num">/01</span>
              <h2 class="ce-channels__title">
                {{ translations.contact_drop_message || 'Drop a message' }}
              </h2>
            </div>
            <ContactForm />
          </div>

          <!-- Right: side rail -->
          <aside class="ce-side">

            <!-- Channels list -->
            <div class="ce-side__block">
              <div class="ce-channels__heading">
                <span class="ce-channels__num">/02</span>
                <h2 class="ce-channels__title">
                  {{ translations.contact_other_channels || 'Other channels' }}
                </h2>
              </div>
              <ul class="ce-list">
                <li class="ce-list__item">
                  <a href="mailto:jorgemopanc@icloud.com" class="ce-list__link">
                    <span class="ce-list__num">01</span>
                    <span class="ce-list__main">
                      <span class="ce-list__head">email</span>
                      <span class="ce-list__sub">jorgemopanc@icloud.com</span>
                    </span>
                    <i class="ri-arrow-right-up-line ce-list__arrow"></i>
                  </a>
                </li>
                <li class="ce-list__item">
                  <a href="https://www.linkedin.com/in/jorge-mopanc/" class="ce-list__link" target="_blank" rel="noopener noreferrer">
                    <span class="ce-list__num">02</span>
                    <span class="ce-list__main">
                      <span class="ce-list__head">linkedin</span>
                      <span class="ce-list__sub">/in/jorge-mopanc</span>
                    </span>
                    <i class="ri-arrow-right-up-line ce-list__arrow"></i>
                  </a>
                </li>
                <li class="ce-list__item">
                  <a href="https://github.com/mopanc" class="ce-list__link" target="_blank" rel="noopener noreferrer">
                    <span class="ce-list__num">03</span>
                    <span class="ce-list__main">
                      <span class="ce-list__head">github</span>
                      <span class="ce-list__sub">@mopanc</span>
                    </span>
                    <i class="ri-arrow-right-up-line ce-list__arrow"></i>
                  </a>
                </li>
                <li class="ce-list__item">
                  <button @click="openSchedule" class="ce-list__link ce-list__link--btn" type="button">
                    <span class="ce-list__num">04</span>
                    <span class="ce-list__main">
                      <span class="ce-list__head">{{ translations.contact_schedule_meeting_head || 'schedule meeting' }}</span>
                      <span class="ce-list__sub">{{ translations.contact_schedule_meeting_sub || '30 or 60 min · Google Meet' }}</span>
                    </span>
                    <i class="ri-calendar-line ce-list__arrow"></i>
                  </button>
                </li>
              </ul>
            </div>

            <!-- Timezone visualizer -->
            <div class="ce-side__block ce-tz">
              <div class="ce-channels__heading">
                <span class="ce-channels__num">/03</span>
                <h2 class="ce-channels__title">
                  {{ translations.contact_local_time || 'Local time' }}
                </h2>
              </div>

              <div class="ce-tz__readout">
                <span class="ce-tz__time">{{ localTime }}</span>
                <span class="ce-tz__zone">Braga · CET</span>
              </div>

              <div class="ce-tz__bar" aria-hidden="true">
                <span class="ce-tz__bar-asleep" :style="`left:${asleepStart}%; width:${asleepWidth}%`"></span>
                <span class="ce-tz__bar-awake" :style="`left:${awakeStart}%; width:${awakeWidth}%`"></span>
                <span class="ce-tz__bar-marker" :style="`left:${markerLeft}%`"></span>
                <span class="ce-tz__tick" v-for="t in [0,6,12,18]" :key="t" :style="`left:${(t/24)*100}%`">
                  <span class="ce-tz__tick-label">{{ t.toString().padStart(2,'0') }}</span>
                </span>
              </div>

              <p class="ce-tz__status" :class="{ 'ce-tz__status--awake': isAwake }">
                <span class="ce-tz__pulse"></span>
                {{ isAwake
                  ? (translations.contact_status_awake || 'probably awake right now.')
                  : (translations.contact_status_asleep || 'probably asleep. Drop a line, I\'ll reply in the morning.')
                }}
              </p>
            </div>

          </aside>
        </div>
      </div>
    </section>

    <!-- ═══ Schedule modal ═══ -->
    <Teleport to="body">
      <Transition name="ce-modal">
        <div v-if="showScheduleModal" class="ce-modal" @click.self="closeSchedule">
          <div class="ce-modal__panel" role="dialog" aria-modal="true">
            <header class="ce-modal__header">
              <span class="ce-modal__num">/agendar</span>
              <h3 ref="schedule_modal_title">{{ translations.schedule_modal_title || 'Schedule a Meeting' }}</h3>
              <button @click="closeSchedule" class="ce-modal__close" :aria-label="translations.meeting_modal_close || 'Close'">
                <i class="ri-close-line"></i>
              </button>
            </header>

            <div class="ce-modal__body">
              <!-- Calendly path -->
              <div v-if="calendlyUrl">
                <p class="ce-modal__hint">{{ translations.meeting_calendly_hint || 'Pick a slot from my calendar:' }}</p>
                <a :href="calendlyUrl" target="_blank" rel="noopener noreferrer" class="ce-modal__primary-btn">
                  <i class="ri-calendar-check-line"></i>
                  <span>{{ translations.open_calendar || 'Open Calendar' }}</span>
                </a>
              </div>

              <!-- Form path -->
              <form
                v-if="!calendlyUrl && !meetingSent"
                @submit.prevent="submitMeetingRequest"
                class="ce-meet-form"
                name="meeting-request"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="meeting-request" />
                <p class="ce-honeypot">
                  <label>Don't fill this out: <input name="bot-field" tabindex="-1" /></label>
                </p>
                <p class="ce-modal__hint">
                  {{ translations.meeting_form_hint || 'Fill in the details and your preferred window.' }}
                </p>

                <div class="ce-meet-row">
                  <label class="ce-meet-field">
                    <span>{{ translations.meeting_name_label || 'Your Name' }} *</span>
                    <input name="name" v-model="meetingRequest.name" type="text" required />
                  </label>
                  <label class="ce-meet-field">
                    <span>{{ translations.meeting_email_label || 'Email' }} *</span>
                    <input name="email" v-model="meetingRequest.email" type="email" required />
                  </label>
                </div>

                <label class="ce-meet-field">
                  <span>{{ translations.meeting_company_label || 'Company / Organization' }}</span>
                  <input name="company" v-model="meetingRequest.company" type="text" />
                </label>

                <div class="ce-meet-row">
                  <label class="ce-meet-field">
                    <span>{{ translations.meeting_date_label || 'Preferred Date' }} *</span>
                    <input name="date" v-model="meetingRequest.date" type="date" required :min="minDate" />
                  </label>
                  <label class="ce-meet-field">
                    <span>{{ translations.meeting_time_label || 'Preferred Time' }} *</span>
                    <select name="time" v-model="meetingRequest.time" required>
                      <option value="" disabled>—</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </label>
                </div>

                <label class="ce-meet-field">
                  <span>{{ translations.meeting_duration_label || 'Duration' }}</span>
                  <select name="duration" v-model="meetingRequest.duration">
                    <option value="30">30 min</option>
                    <option value="60">60 min</option>
                  </select>
                </label>

                <label class="ce-meet-field">
                  <span>{{ translations.meeting_topic_label || 'Meeting Topic' }} *</span>
                  <textarea
                    name="topic"
                    v-model="meetingRequest.topic"
                    required
                    rows="4"
                  ></textarea>
                </label>

                <button
                  type="submit"
                  class="ce-modal__primary-btn"
                  :class="{ 'ce-modal__primary-btn--sending': isSubmitting }"
                  :disabled="isSubmitting"
                >
                  <i v-if="!isSubmitting" class="ri-send-plane-line"></i>
                  <i v-else class="ri-loader-4-line ce-spin"></i>
                  <span>{{ isSubmitting ? (translations.sending || 'Sending...') : (translations.submit_meeting || 'Request Meeting') }}</span>
                </button>
              </form>

              <!-- Success -->
              <div v-if="meetingSent" class="ce-modal__success">
                <div class="ce-modal__success-num">✓</div>
                <h4>{{ translations.meeting_success_title || 'Request sent.' }}</h4>
                <p>{{ translations.meeting_success_msg || 'I will be in touch within 24h to confirm.' }}</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import { useLanguage } from '../composables/useLanguage'

export default {
  name: 'ContactPage',
  components: { ContactForm },

  setup() {
    const { translations, initialize } = useLanguage()
    return { translations, initialize }
  },

  data() {
    return {
      showScheduleModal: false,
      isSubmitting: false,
      meetingSent: false,
      calendlyUrl: null,
      meetingRequest: {
        name: '',
        email: '',
        company: '',
        date: '',
        time: '',
        duration: '30',
        topic: ''
      },
      minDate: new Date().toISOString().split('T')[0],
      // clock state
      now: new Date(),
      clockInterval: null
    }
  },

  computed: {
    localTime() {
      const h = this.now.getHours().toString().padStart(2, '0')
      const m = this.now.getMinutes().toString().padStart(2, '0')
      return `${h}:${m}`
    },
    fractionOfDay() {
      return (this.now.getHours() * 3600 + this.now.getMinutes() * 60 + this.now.getSeconds()) / 86400
    },
    markerLeft() {
      return (this.fractionOfDay * 100).toFixed(2)
    },
    // Awake window: 08:00 - 23:00 (15h block)
    awakeStart() { return (8 / 24) * 100 },
    awakeWidth() { return ((23 - 8) / 24) * 100 },
    asleepStart() { return 0 },
    asleepWidth() { return 100 },
    isAwake() {
      const h = this.now.getHours()
      return h >= 8 && h < 23
    }
  },

  async mounted() {
    await this.initialize()
    this.clockInterval = setInterval(() => {
      this.now = new Date()
    }, 30000) // update every 30s, smooth enough for the marker
  },

  beforeUnmount() {
    if (this.clockInterval) clearInterval(this.clockInterval)
    // Restore page scroll if modal was open when navigating away
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  },

  watch: {
    showScheduleModal(open) {
      // Lock both html and body to defeat any browser/wrapper scroll
      // surface that sits next to the modal's own overflow.
      const v = open ? 'hidden' : ''
      document.documentElement.style.overflow = v
      document.body.style.overflow = v
    },
  },

  methods: {
    openSchedule() {
      this.showScheduleModal = true
      this.meetingSent = false
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
      // delay reset of meetingSent so we don't see content swap during exit transition
      setTimeout(() => { this.meetingSent = false }, 350)
    },

    async submitMeetingRequest() {
      this.isSubmitting = true
      try {
        const formData = new FormData()
        formData.append('form-name', 'meeting-request')
        Object.entries(this.meetingRequest).forEach(([k, v]) => formData.append(k, v))

        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })

        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        this.meetingSent = true
        setTimeout(() => this.closeSchedule(), 3500)
      } catch (error) {
        console.error('Error submitting meeting request:', error)
        alert(this.translations.meeting_error || 'There was an error. Please try again or email me directly.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact-edt {
  position: relative;
  background: var(--color-bg-primary);
  min-height: 100vh;
  padding: 0 0 6rem;
  overflow: hidden;
}

/* ═══ HERO (dark band) ═══ */
.ce-hero {
  padding: 7rem 0 6rem;
  background: #0A0D14;
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.ce-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px);
  background-size: calc(100% / 12) 100%;
  pointer-events: none;
  z-index: 0;
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
}

.ce-hero > * { position: relative; z-index: 1; }

.ce-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin: 0 0 2.5rem;
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #8a9ab5;
}

.ce-hero__eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #7eb8f7;
  box-shadow: 0 0 0 4px rgba(126, 184, 247, 0.22);
  animation: ceDotPulse 2.4s ease-in-out infinite;
}

@keyframes ceDotPulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(126, 184, 247, 0.22); }
  50% { box-shadow: 0 0 0 8px rgba(126, 184, 247, 0); }
}

.ce-hero__title {
  margin: 0 0 2.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(5rem, 13vw, 14rem);
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: #FAFAF8;
}

.ce-hero__title-line {
  display: block;
}

.ce-hero__title-line--accent {
  position: relative;
  display: inline-block;
  padding-right: 0.4em;
}

.ce-hero__cursor {
  display: inline-block;
  width: 0.42em;
  height: 0.78em;
  background: #7eb8f7;
  margin-left: 0.05em;
  vertical-align: baseline;
  position: relative;
  top: 0.05em;
  animation: ceCursorBlink 1.05s steps(2) infinite;
}

@keyframes ceCursorBlink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}

.ce-hero__lede {
  max-width: 56rem;
  margin: 0;
  font-size: 1.7rem;
  line-height: 1.55;
  color: #c8d8f0;
}

/* ═══ CHANNELS ═══ */
.ce-channels {
  padding: 4rem 0 0;
  border-top: 1px solid var(--color-border);
}

.ce-channels__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(280px, 1fr);
  gap: 6rem;
  align-items: flex-start;
}

.ce-channels__heading {
  display: flex;
  align-items: baseline;
  gap: 1.4rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid var(--color-border);
}

.ce-channels__num {
  font-family: var(--ff-mono);
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  text-transform: uppercase;
  font-weight: 600;
}

.ce-channels__title {
  margin: 0;
  font-size: clamp(1.8rem, 2.4vw, 2.4rem);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.01em;
}

/* ═══ SIDE RAIL ═══ */
.ce-side {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: sticky;
  top: 9rem;
}

.ce-side__block {
  display: flex;
  flex-direction: column;
}

/* Channels list */
.ce-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.ce-list__item {
  border-bottom: 1px solid var(--color-border);
}

.ce-list__item:first-child {
  border-top: 1px solid var(--color-border);
}

.ce-list__link {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.6rem;
  padding: 1.8rem 0.4rem;
  text-decoration: none;
  color: var(--color-white);
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  text-align: left;
  transition: padding 0.32s cubic-bezier(0.65, 0, 0.35, 1);
  overflow: hidden;
}

.ce-list__link::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: var(--color-white);
  transform: translateX(-101%);
  transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: 0;
}

.ce-list__link > * { position: relative; z-index: 1; transition: color 0.32s ease; }

.ce-list__link:hover {
  padding-left: 1.6rem;
  padding-right: 1.6rem;
}

.ce-list__link:hover::before {
  transform: translateX(0);
}

.ce-list__link:hover .ce-list__num,
.ce-list__link:hover .ce-list__head,
.ce-list__link:hover .ce-list__sub,
.ce-list__link:hover .ce-list__arrow {
  color: var(--color-bg-primary);
}

.ce-list__num {
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.16em;
  color: var(--color-primary);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.ce-list__main {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.ce-list__head {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-white);
  font-family: 'Space Grotesk', sans-serif;
}

.ce-list__sub {
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.04em;
  color: var(--color-text);
  text-transform: lowercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ce-list__arrow {
  font-size: 1.7rem;
  color: var(--color-text);
  transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1), color 0.3s ease;
}

.ce-list__link:hover .ce-list__arrow {
  transform: translate(3px, -3px);
}

/* ═══ TIMEZONE VISUALIZER ═══ */
.ce-tz__readout {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.4rem;
}

.ce-tz__time {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.6rem, 4vw, 3.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-white);
  font-variant-numeric: tabular-nums;
}

.ce-tz__zone {
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text);
}

.ce-tz__bar {
  position: relative;
  width: 100%;
  height: 6px;
  background: transparent;
  margin: 1.6rem 0 2.6rem;
}

.ce-tz__bar-asleep {
  position: absolute;
  top: 0;
  height: 6px;
  background: repeating-linear-gradient(
    -45deg,
    var(--color-border),
    var(--color-border) 3px,
    transparent 3px,
    transparent 6px
  );
}

.ce-tz__bar-awake {
  position: absolute;
  top: 0;
  height: 6px;
  background: var(--color-white);
}

.ce-tz__bar-marker {
  position: absolute;
  top: -7px;
  width: 2px;
  height: 20px;
  background: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
  transform: translateX(-1px);
  transition: left 0.6s ease;
}

.ce-tz__bar-marker::after {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: ceMarkerPulse 2s ease-in-out infinite;
}

@keyframes ceMarkerPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.7; }
}

.ce-tz__tick {
  position: absolute;
  top: 6px;
  width: 1px;
  height: 4px;
  background: var(--color-text);
  opacity: 0.45;
}

.ce-tz__tick-label {
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--ff-mono);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  color: var(--color-text);
  white-space: nowrap;
}

.ce-tz__status {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 1.3rem;
  color: var(--color-text);
  line-height: 1.5;
}

.ce-tz__pulse {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-text);
  flex-shrink: 0;
}

.ce-tz__status--awake {
  color: var(--color-white);
}

.ce-tz__status--awake .ce-tz__pulse {
  background: #16a34a;
  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.18);
  animation: ceDotPulse 2.4s ease-in-out infinite;
}

/* ═══ MODAL ═══ */
.ce-modal {
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 26, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem 2rem;
  /* No overflow on the overlay — the panel below owns its own scroll
     when the form is taller than the viewport. Avoids double scrollbars. */
  overflow: hidden;
  z-index: 99999;
  overscroll-behavior: contain;
}

.ce-modal__panel {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  width: 100%;
  max-width: 640px;
  position: relative;
  /* Panel handles its own scroll when content exceeds viewport */
  max-height: calc(100vh - 10rem); /* viewport minus modal vertical padding */
  overflow-y: auto;
  overscroll-behavior: contain;
}

.ce-modal__header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.4rem;
  padding: 2rem 2.4rem;
  border-bottom: 1px solid var(--color-border);
}

.ce-modal__num {
  font-family: var(--ff-mono);
  font-size: 1.15rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  text-transform: uppercase;
  font-weight: 600;
}

.ce-modal__header h3 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-white);
}

.ce-modal__close {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--color-white);
  cursor: pointer;
  padding: 0.4rem;
  transition: color 0.2s ease, transform 0.2s ease;
  line-height: 1;
}

.ce-modal__close:hover {
  color: var(--color-primary);
  transform: rotate(90deg);
}

.ce-modal__body {
  padding: 2.4rem;
}

.ce-modal__hint {
  margin: 0 0 1.8rem;
  font-size: 1.4rem;
  color: var(--color-text);
}

/* Meeting form */
.ce-meet-form {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.ce-meet-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
}

.ce-meet-field {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.ce-meet-field span {
  font-family: var(--ff-mono);
  font-size: 1.05rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text);
}

.ce-meet-field input,
.ce-meet-field select,
.ce-meet-field textarea {
  width: 100%;
  padding: 0.95rem 1.1rem;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 0;
  color: var(--color-white);
  font-size: 1.4rem;
  font-family: inherit;
  transition: border-color 0.22s ease, box-shadow 0.22s ease;
}

.ce-meet-field input:focus,
.ce-meet-field select:focus,
.ce-meet-field textarea:focus {
  outline: none;
  border-color: var(--color-white);
}

.ce-meet-field textarea {
  resize: vertical;
  min-height: 110px;
  line-height: 1.55;
}

.ce-honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* Modal primary button */
.ce-modal__primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 1.3rem 2rem;
  width: 100%;
  margin-top: 1rem;
  background: #1A1A1A;
  color: #FAFAF8;
  border: 1px solid #1A1A1A;
  border-radius: 0;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.22s ease, border-color 0.22s ease, transform 0.18s ease;
}

.ce-modal__primary-btn:hover:not(:disabled):not(.ce-modal__primary-btn--sending) {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.ce-modal__primary-btn:disabled {
  cursor: not-allowed;
  opacity: 0.85;
}

.ce-modal__primary-btn--sending::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-primary);
  animation: cfProgress 1.4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  z-index: 0;
}

.ce-modal__primary-btn--sending span,
.ce-modal__primary-btn--sending i { position: relative; z-index: 1; }

@keyframes cfProgress {
  0% { transform: scaleX(0); transform-origin: left center; }
  50% { transform: scaleX(1); transform-origin: left center; }
  50.01% { transform: scaleX(1); transform-origin: right center; }
  100% { transform: scaleX(0); transform-origin: right center; }
}

.ce-spin {
  animation: ceSpin 0.9s linear infinite;
  display: inline-block;
}
@keyframes ceSpin {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

/* Modal success */
.ce-modal__success {
  text-align: center;
  padding: 2rem 0;
}

.ce-modal__success-num {
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  color: #16a34a;
  font-family: var(--ff-mono);
  margin-bottom: 1.4rem;
}

.ce-modal__success h4 {
  margin: 0 0 0.6rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-white);
}

.ce-modal__success p {
  margin: 0;
  font-size: 1.4rem;
  color: var(--color-text);
}

/* Modal transitions */
.ce-modal-enter-active,
.ce-modal-leave-active {
  transition: opacity 0.32s ease;
}
.ce-modal-enter-active .ce-modal__panel,
.ce-modal-leave-active .ce-modal__panel {
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.32s ease;
}
.ce-modal-enter-from,
.ce-modal-leave-to {
  opacity: 0;
}
.ce-modal-enter-from .ce-modal__panel,
.ce-modal-leave-to .ce-modal__panel {
  transform: translateY(24px);
  opacity: 0;
}

/* ═══ Responsive ═══ */
@media (max-width: 1024px) {
  .ce-channels__grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .ce-side {
    position: static;
  }
}

@media (max-width: 720px) {
  .contact-edt { padding: 2rem 0 5rem; }
  .ce-hero { padding: 4rem 0 3rem; }
  .ce-hero__title { font-size: clamp(4rem, 18vw, 8rem); }
  .ce-channels { padding: 3rem 0 0; }
  .ce-channels__grid { gap: 4rem; }
  .ce-meet-row { grid-template-columns: 1fr; }
  .ce-modal { padding: 2rem 1rem; }
  .ce-modal__header { padding: 1.6rem 1.6rem; }
  .ce-modal__body { padding: 1.6rem; }
}

@media (max-width: 480px) {
  .ce-list__link { padding: 1.4rem 0.2rem; }
  .ce-list__link:hover { padding-left: 1rem; padding-right: 1rem; }
  .ce-list__head { font-size: 1.55rem; }
  .ce-tz__time { font-size: 2.4rem; }
}
</style>
