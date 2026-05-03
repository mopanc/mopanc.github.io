<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="body_404">
    <!-- Lamp -->
    <div class="lamp__wrap">
      <div class="lamp">
        <div class="cable"></div>
        <div class="cover"></div>
        <div class="in-cover">
          <div class="bulb"></div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <section class="error">
      <div class="error__content">
        <div class="error__message">
          <h1 class="message__title illuminated-text" data-text="404">404</h1>
          <p class="message__sub illuminated-text" ref="not_found_title" data-text="Page Not Found">Page Not Found</p>
          <p class="message__text illuminated-text" ref="not_found_description" data-text="The page you were looking for doesn't exist or has been moved.">The page you were looking for doesn't exist or has been moved.</p>
        </div>
        <div class="error__nav">
          <a href="/" class="error__btn error__btn--primary" ref="home_page">
            <i class="ri-home-line"></i>
            Home
          </a>
          <a href="/projects" class="error__btn error__btn--outline">
            <i class="ri-folder-line"></i>
            Projects
          </a>
          <a href="/contact" class="error__btn error__btn--outline">
            <i class="ri-message-line"></i>
            Contact
          </a>
        </div>
      </div>
    </section>
</div>
</template>

<script>
import { useLanguage } from '../composables/useLanguage'

export default {
    setup() {
        const { translations, initialize } = useLanguage()
        return { translations, initialize }
    },
    async mounted() {
        await this.initialize()
        if (this.$refs.not_found_title) {
            this.$refs.not_found_title.textContent = this.translations.not_found_title || 'Page Not Found'
            this.$refs.not_found_title.dataset.text = this.$refs.not_found_title.textContent
        }
        if (this.$refs.not_found_description) {
            this.$refs.not_found_description.textContent = this.translations.not_found_description || "The page you were looking for doesn't exist or has been moved."
            this.$refs.not_found_description.dataset.text = this.$refs.not_found_description.textContent
        }
        if (this.$refs.home_page) {
            this.$refs.home_page.innerHTML = `<i class="ri-home-line"></i> ${this.translations.home_page || 'Home'}`
        }
    }
}
</script>

<style scoped>
.body_404 {
  background: #0a0d14;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: var(--ff-body);
}

/* ═══ LAMP ═══ */
.lamp {
  position: absolute;
  left: 0; right: 0; top: 0;
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: center top;
  animation: swing 6s ease-in-out infinite;
  z-index: 1;
}

@keyframes swing {
  0% { transform: rotate(30deg); }
  25% { transform: rotate(-30deg); }
  50% { transform: rotate(35deg); }
  75% { transform: rotate(-35deg); }
  100% { transform: rotate(30deg); }
}

.cable {
  width: 4px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(126,184,247,0.2), rgba(126,184,247,0.05));
  border-radius: 2px;
}

.cover {
  width: 180px;
  height: 70px;
  background: linear-gradient(to bottom, #151a24, #0a0d14);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: relative;
  z-index: 200;
  border: 1px solid rgba(126,184,247,0.08);
  border-bottom: none;
}

.in-cover {
  width: 100%;
  max-width: 180px;
  height: 18px;
  border-radius: 100%;
  background: #0c1018;
  position: absolute;
  left: 0; right: 0;
  margin: 0 auto;
  bottom: -8px;
  z-index: 100;
}

.bulb {
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, #7eb8f7, #3b6fd4);
  border-radius: 50%;
  position: absolute;
  left: 0; right: 0;
  bottom: -16px;
  margin: 0 auto;
  box-shadow:
    0 0 30px 10px rgba(126,184,247,0.6),
    0 0 100px 60px rgba(126,184,247,0.25),
    0 0 200px 120px rgba(126,184,247,0.1),
    0 0 300px 180px rgba(59,111,212,0.05);
  animation: glow 2.5s ease-in-out infinite alternate;
}

@keyframes glow {
  0% {
    box-shadow:
      0 0 30px 10px rgba(126,184,247,0.4),
      0 0 100px 60px rgba(126,184,247,0.15),
      0 0 200px 120px rgba(126,184,247,0.06);
  }
  100% {
    box-shadow:
      0 0 30px 10px rgba(126,184,247,0.7),
      0 0 100px 60px rgba(126,184,247,0.3),
      0 0 200px 120px rgba(126,184,247,0.12),
      0 0 300px 180px rgba(59,111,212,0.06);
  }
}

/* ═══ CONTENT ═══ */
.error {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.error__content {
  text-align: center;
  max-width: 550px;
  padding: 2rem;
}

.error__message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

/* Illuminated text — two layers: dim base + bright revealed */
.illuminated-text {
  color: rgba(200, 216, 240, 0.06);
  position: relative;
}

.illuminated-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0; right: 0;
  color: rgba(200, 216, 240, 0.9);
  clip-path: ellipse(250px 350px at 25% -80px);
  filter: blur(0.5px);
  animation: lightReveal 6s ease-in-out infinite;
}

@keyframes lightReveal {
  0% { clip-path: ellipse(250px 350px at 25% -80px); }
  25% { clip-path: ellipse(250px 350px at 75% -80px); }
  50% { clip-path: ellipse(250px 350px at 20% -80px); }
  75% { clip-path: ellipse(250px 350px at 80% -80px); }
  100% { clip-path: ellipse(250px 350px at 25% -80px); }
}

.message__title {
  font-size: clamp(50px, 10vw, 80px);
  font-weight: 700;
  font-family: var(--ff-mono);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.message__title::before {
  color: rgba(126, 184, 247, 0.9);
}

.message__sub {
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 0.5rem;
}

.message__text {
  font-size: 16px;
  line-height: 1.7;
  max-width: 400px;
}

/* ═══ BUTTONS ═══ */
.error__nav {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
}

.error__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
  min-height: auto;
  min-width: auto;
}

.error__btn i { font-size: 1.1em; }

.error__btn--primary {
  background: rgba(126,184,247,0.12);
  color: #7eb8f7;
  border: 1px solid rgba(126,184,247,0.25);
}

.error__btn--primary:hover {
  background: rgba(126,184,247,0.2);
  border-color: rgba(126,184,247,0.5);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(126,184,247,0.15);
}

.error__btn--outline {
  background: transparent;
  color: #c8d8f0;
  border: 1px solid rgba(255,255,255,0.1);
}

.error__btn--outline:hover {
  border-color: rgba(255,255,255,0.25);
  color: #ffffff;
  transform: translateY(-2px);
}

/* Ambient particles */
.body_404::before {
  content: '';
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image:
    radial-gradient(1px 1px at 20px 30px, rgba(126,184,247,0.15), transparent),
    radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.03), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(126,184,247,0.08), transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.02), transparent),
    radial-gradient(1px 1px at 160px 120px, rgba(126,184,247,0.1), transparent);
  background-repeat: repeat;
  background-size: 200px 150px;
  animation: float 25s ease-in-out infinite;
  pointer-events: none;
  opacity: 0.5;
  z-index: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  33% { transform: translateY(-6px) translateX(3px); }
  66% { transform: translateY(3px) translateX(-4px); }
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .lamp { zoom: 0.7; }
  .error__nav { flex-direction: column; align-items: center; }
  .error__btn { width: 200px; justify-content: center; }
}

@media (max-width: 480px) {
  .lamp { zoom: 0.5; }
  .error__content { padding: 1rem; }
}
</style>
