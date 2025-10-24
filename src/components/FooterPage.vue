<template>
  <footer id="footer" class="footer">
    <div class="container-wide">
      <!-- Main Footer Content -->
      <div class="footer__main">
        <div class="footer__grid">
          <!-- Brand Section -->
          <div class="footer__brand">
            <div class="footer__logo">
              <h3>Jorge Morais</h3>
              <span class="footer__tagline">{{ translations.footer_tagline || 'Full Stack Developer' }}</span>
            </div>
            <p class="footer__description">
              {{ translations.footer_description || 'Desenvolvendo soluções digitais inovadoras com foco em performance, usabilidade e tecnologias modernas.' }}
            </p>
          </div>

          <!-- Quick Links -->
          <div class="footer__links">
            <h4 class="footer__title">{{ translations.footer_navigation || 'Navegação' }}</h4>
            <ul class="footer__list">
              <li><a href="#home" class="footer__link">{{ translations.home || 'Início' }}</a></li>
              <li><a href="#about" class="footer__link">{{ translations.about || 'Sobre' }}</a></li>
              <li><a href="#qualification" class="footer__link">{{ translations.footer_experience || 'Experiência' }}</a></li>
              <li><a href="#service" class="footer__link">{{ translations.footer_services || 'Serviços' }}</a></li>
              <li>
                <router-link v-if="isAccessValid" to="/projects" class="footer__link">{{ translations.projects || 'Projetos' }}</router-link>
                <span v-else @click="showAccessRequired" class="footer__link footer__link--protected">
                  🔒 {{ translations.projects || 'Projetos' }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer__services">
            <h4 class="footer__title">{{ translations.footer_services || 'Serviços' }}</h4>
            <ul class="footer__list">
              <li><span class="footer__service">{{ translations.frontend_development || 'Frontend Development' }}</span></li>
              <li><span class="footer__service">{{ translations.backend_development || 'Backend Development' }}</span></li>
              <li><span class="footer__service">{{ translations.database_design || 'Database Design' }}</span></li>
              <li><span class="footer__service">{{ translations.devops_cicd || 'DevOps & CI/CD' }}</span></li>
              <li><span class="footer__service">{{ translations.code_review || 'Code Review' }}</span></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer__contact-section">
            <h4 class="footer__title">{{ translations.contact || 'Contacto' }}</h4>

            <div class="footer__contact-list">
              <div class="footer__contact-item">
                <i class="ri-map-pin-line"></i>
                <span>{{ translations.footer_location || 'Portugal' }}</span>
              </div>
              <div class="footer__contact-item">
                <i class="ri-mail-send-line"></i>
                <router-link to="/contact" class="footer__contact-link">
                  {{ translations.footer_send_message || 'Enviar mensagem' }}
                </router-link>
              </div>
            </div>

            <!-- Social Links -->
            <div class="footer__social">
              <h5 class="footer__social-title">{{ translations.footer_follow_me || 'Siga-me' }}</h5>
              <div class="footer__social-links">
                <a href="https://www.linkedin.com/in/jorge-mopanc/"
                   class="footer__social-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="LinkedIn">
                  <i class="ri-linkedin-fill"></i>
                </a>
                <a href="https://github.com/mopanc"
                   class="footer__social-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="GitHub">
                  <i class="ri-github-fill"></i>
                </a>
                <a href="https://www.instagram.com/jorgemopanc/"
                   class="footer__social-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Instagram">
                  <i class="ri-instagram-fill"></i>
                </a>
                <a href="https://codepen.io/mopanc"
                   class="footer__social-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="CodePen">
                  <i class="ri-codepen-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer__bottom">
        <div class="footer__bottom-content">
          <p class="footer__copyright">
            &copy; {{ currentYear }} Jorge Morais. {{ translations.footer_rights || 'Todos os direitos reservados.' }}
          </p>
          <div class="footer__bottom-links">
            <span class="footer__made-with">
              {{ translations.footer_made_with || 'Feito com' }} <i class="ri-heart-fill footer__heart-blue"></i> {{ translations.footer_and || 'and' }}
              <svg width="12" height="12" viewBox="0 0 256 256" class="footer__js-icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h256v256H0V0z" fill="#F7DF1E"/>
                <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
              </svg>
              {{ translations.footer_in_portugal || 'em Portugal' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { onMounted } from 'vue'
import { useAccessControlSimple } from '../composables/useAccessControlSimple'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'FooterPage',
  setup() {
    const { isAccessValid } = useAccessControlSimple()
    const { translations, initialize } = useLanguage()

    onMounted(async () => {
      await initialize()
    })

    return { isAccessValid, translations }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    showAccessRequired() {
      const miniTerminal = document.querySelector('.terminal-toggle')
      if (miniTerminal) {
        miniTerminal.scrollIntoView({ behavior: 'smooth', block: 'center' })

        // Fazer piscar o terminal para chamar atenção
        miniTerminal.style.animation = 'pulse 0.6s ease-in-out 3'

        setTimeout(() => {
          miniTerminal.style.animation = ''
          // Abrir o terminal automaticamente
          miniTerminal.click()
        }, 1500)
      }
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
}

.footer__main {
  padding: 4rem 0 2rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

/* Brand Section */
.footer__brand {
  max-width: 350px;
}

.footer__logo h3 {
  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, var(--color-primary), #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer__tagline {
  color: #a0a9c0;
  font-size: 1.2rem;
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
}

.footer__description {
  color: #8892a6;
  line-height: 1.6;
  font-size: 1.1rem;
  margin: 0;
}

/* Links and Services */
.footer__title {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer__title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__list li {
  margin-bottom: 0.8rem;
}

.footer__link {
  color: #a0a9c0;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
}

.footer__link:hover {
  color: var(--color-primary);
  padding-left: 8px;
}

.footer__link--protected {
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.3s ease;
}

.footer__link--protected:hover {
  opacity: 0.8;
  color: var(--color-primary);
  padding-left: 8px;
}

.footer__service {
  color: #8892a6;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.footer__service::before {
  content: '▸';
  color: var(--color-primary);
  margin-right: 8px;
  font-size: 0.8rem;
}

/* Contact Section */
.footer__contact-section {
  min-width: 250px;
}

.footer__contact-list {
  margin-bottom: 2rem;
}

.footer__contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #a0a9c0;
  font-size: 1.1rem;
}

.footer__contact-item i {
  color: var(--color-primary);
  font-size: 1.1rem;
  margin-right: 12px;
  width: 20px;
}

.footer__contact-link {
  color: #a0a9c0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer__contact-link:hover {
  color: var(--color-primary);
}

.contact-preview {
  color: #666;
  font-style: italic;
  font-family: monospace;
  letter-spacing: 1px;
}

/* Social Links */
.footer__social {
  margin-top: 1.5rem;
}

.footer__social-title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.footer__social-links {
  display: flex;
  gap: 1rem;
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #a0a9c0;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.footer__social-link:hover {
  background: var(--color-primary);
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(106, 90, 205, 0.3);
}

/* Footer Bottom */
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
}

.footer__bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer__copyright {
  color: #8892a6;
  font-size: 1.1rem;
  margin: 0;
}

.footer__made-with {
  color: #a0a9c0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.footer__heart-blue {
  color: #4facfe !important;
  animation: heartbeat 1.5s ease-in-out infinite;
}

.footer__js-icon {
  margin: 0 4px;
  filter: brightness(1.2);
  transition: transform 0.3s ease;
}

.footer__js-icon:hover {
  transform: scale(1.1);
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .footer__grid {
    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer__main {
    padding: 3rem 0 1.5rem;
  }

  .footer__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer__brand {
    max-width: none;
    text-align: center;
  }

  .footer__social-links {
    justify-content: center;
  }

  .footer__bottom-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer__main {
    padding: 2rem 0 1rem;
  }

  .footer__grid {
    gap: 2rem;
  }

  .footer__logo h3 {
    font-size: 1.5rem;
  }

  .footer__social-links {
    gap: 0.75rem;
  }

  .footer__social-link {
    width: 35px;
    height: 35px;
  }
}
</style>