import { createApp } from 'vue';
import App from './App.vue';
import router from './VueRouter';

const app = createApp(App);

// Global error handler
app.config.errorHandler = (error, instance, info) => {
  console.error('Global error handler:', error, instance, info)

  // You could send error to monitoring service here
  // Example: sendToSentry(error, { instance, info })
}

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
  // You could send to monitoring service here
})

app.use(router);
app.mount('#app');

// Optimized ScrollReveal animations with performance improvements
// eslint-disable-next-line no-undef
if (typeof ScrollReveal !== 'undefined') {
  // eslint-disable-next-line no-undef
  const sr = ScrollReveal({
    duration: 800, // Reduced for better performance
    distance: "30px", // Reduced distance for subtlety
    delay: 100, // Reduced delay
    reset: false,
    useDelay: 'onload', // Better timing
    mobile: window.innerWidth < 768 ? false : true, // Disable on mobile for performance
  });

  // Batch animations for better performance
  // Primary content
  sr.reveal(".home__content, .about__content", {
    duration: 600,
    easing: 'ease-out'
  });

  sr.reveal(".home__img", {
    origin: "top",
    duration: 800,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  });

  // Secondary elements with staggered animation
  sr.reveal(
    ".home__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .footer__content",
    {
      delay: 200,
      interval: 30, // Reduced interval
      duration: 600,
      easing: 'ease-out'
    }
  );

  // Directional reveals
  sr.reveal(".qualification__footer-text", {
    origin: "left",
    duration: 600,
    distance: "20px"
  });

  sr.reveal(".qualification__footer .btn, .contact__btn, .cta-section, .download-cv-section", {
    origin: "right",
    duration: 600,
    distance: "20px"
  });
}