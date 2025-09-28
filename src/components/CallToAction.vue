<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-card">
        <div class="cta-content">
          <div class="cta-icon">
            <i class="ri-rocket-line"></i>
          </div>
          <div class="cta-text">
            <h3 class="cta-title">{{ translations.cta_title || 'Ready to Start Your Project?' }}</h3>
            <p class="cta-description">{{ translations.cta_description || 'Let\'s work together to bring your ideas to life with modern web technologies.' }}</p>
          </div>
        </div>
        <div class="cta-actions">
          <a href="/contact" class="btn btn--primary cta-btn">
            <i class="ri-message-line"></i>
            {{ translations.get_in_touch || 'Get in Touch' }}
          </a>
          <a href="/projects" class="btn btn--secondary cta-btn">
            <i class="ri-folder-line"></i>
            {{ translations.view_projects || 'View Projects' }}
          </a>
        </div>
      </div>

      <!-- Services highlight -->
<!--      <div class="services-highlight">-->
<!--        <h4 class="services-title">{{ translations.what_i_offer || 'What I Offer' }}</h4>-->
<!--        <div class="services-grid">-->
<!--          <div class="service-item">-->
<!--            <div class="service-icon">-->
<!--              <i class="ri-code-s-slash-line"></i>-->
<!--            </div>-->
<!--            <h5 class="service-name">{{ translations.web_development || 'Web Development' }}</h5>-->
<!--            <p class="service-description">{{ translations.web_dev_desc || 'Modern, responsive websites built with Vue.js, React, and Node.js' }}</p>-->
<!--          </div>-->
<!--          <div class="service-item">-->
<!--            <div class="service-icon">-->
<!--              <i class="ri-smartphone-line"></i>-->
<!--            </div>-->
<!--            <h5 class="service-name">{{ translations.mobile_development || 'Mobile Development' }}</h5>-->
<!--            <p class="service-description">{{ translations.mobile_dev_desc || 'Cross-platform mobile applications for iOS and Android' }}</p>-->
<!--          </div>-->
<!--          <div class="service-item">-->
<!--            <div class="service-icon">-->
<!--              <i class="ri-settings-3-line"></i>-->
<!--            </div>-->
<!--            <h5 class="service-name">{{ translations.consulting || 'Technical Consulting' }}</h5>-->
<!--            <p class="service-description">{{ translations.consulting_desc || 'Architecture planning, code reviews, and technology recommendations' }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <!-- Availability Status -->
<!--      <div class="availability-status" :class="availabilityClass">-->
<!--        <div class="status-indicator">-->
<!--          <div class="status-dot"></div>-->
<!--          <span class="status-text">{{ availabilityText }}</span>-->
<!--        </div>-->
<!--        <p class="status-description">{{ availabilityDescription }}</p>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { translations, initialize } = useLanguage()

// Availability status (you can make this dynamic based on your calendar API)
//const isAvailable = computed(() => true) // Change this based on your availability

// const availabilityClass = computed(() => ({
//   'available': isAvailable.value,
//   'busy': !isAvailable.value
// }))

// const availabilityText = computed(() => {
//   return isAvailable.value
//     ? (translations.available_for_work || 'Available for Work')
//     : (translations.currently_busy || 'Currently Busy')
// })
//
// const availabilityDescription = computed(() => {
//   return isAvailable.value
//     ? (translations.availability_desc || 'I\'m currently accepting new projects and freelance opportunities.')
//     : (translations.busy_desc || 'I\'m currently focused on existing projects but feel free to reach out for future opportunities.')
// })

onMounted(async () => {
  await initialize()
})
</script>

<style scoped>
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMTk1LCAxNzYsIDE0NSwgMC4wNSkiIGZpbGwtcnVsZT0ibm9uemVybyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+');
  opacity: 0.3;
  pointer-events: none;
}

/* Main CTA Card */
.cta-card {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-primary);
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(195, 176, 145, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.cta-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.cta-icon {
  font-size: 4rem;
  color: var(--color-primary);
  animation: pulse 2s ease-in-out infinite;
}

.cta-title {
  color: var(--color-white);
  font-size: var(--fs-xxl);
  margin-bottom: 0.5rem;
  font-weight: var(--fw-bold);
}

.cta-description {
  color: var(--color-text);
  font-size: var(--fs-md);
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 200px;
}

.cta-btn {
  padding: 1rem 2rem;
  font-weight: var(--fw-semibold);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
}

/* Services Highlight */
.services-highlight {
  margin-bottom: 3rem;
}

.services-title {
  text-align: center;
  color: var(--color-white);
  font-size: var(--fs-xl);
  margin-bottom: 2rem;
  font-weight: var(--fw-bold);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-item {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
}

.service-item:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.service-name {
  color: var(--color-white);
  font-size: var(--fs-md);
  margin-bottom: 0.5rem;
  font-weight: var(--fw-semibold);
}

.service-description {
  color: var(--color-text);
  font-size: var(--fs-sm);
  line-height: 1.5;
}

/* Availability Status */
.availability-status {
  background: var(--color-bg-primary);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  text-align: center;
  border: 2px solid transparent;
  transition: var(--transition);
}

.availability-status.available {
  border-color: #4facfe;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, var(--color-bg-primary) 100%);
}

.availability-status.busy {
  border-color: #ff6b6b;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, var(--color-bg-primary) 100%);
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.available .status-dot {
  background: #4facfe;
}

.busy .status-dot {
  background: #ff6b6b;
}

.status-text {
  color: var(--color-white);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-md);
}

.status-description {
  color: var(--color-text);
  font-size: var(--fs-sm);
  line-height: 1.5;
}

/* Animations */
@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}

/* Responsive Design */
@media screen and (max-width: 968px) {
  .cta-card {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .cta-actions {
    width: 100%;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 768px) {
  .cta-section {
    padding: 3rem 0;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .cta-title {
    font-size: var(--fs-xl);
  }

  .services-title {
    font-size: var(--fs-lg);
  }

  .service-item {
    padding: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  .cta-card {
    padding: 1.5rem;
  }

  .cta-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .cta-btn {
    padding: 0.8rem 1.5rem;
    font-size: var(--fs-sm);
  }
}
</style>