import { createApp } from 'vue';
import App from './App.vue';
import router from './VueRouter';
import { createUnhead } from '@unhead/vue';

const app = createApp(App);
const head = createUnhead();

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

app.use(head);
app.use(router);
app.mount('#app');

// Emit prerender event for prerender-spa-plugin
if (window.__PRERENDER_INJECTED && window.__PRERENDER_INJECTED.prerendered) {
  // Already prerendered, emit event immediately
  document.dispatchEvent(new Event('render-event'));
} else {
  // Wait for app to be fully mounted, then emit
  router.isReady().then(() => {
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'));
    }, 100);
  });
}

// Defer ScrollReveal initialization using requestIdleCallback for better INP
const initScrollReveal = () => {
  // eslint-disable-next-line no-undef
  if (typeof ScrollReveal === 'undefined') return;

  // eslint-disable-next-line no-undef
  const sr = ScrollReveal({
    duration: 800,
    distance: "30px",
    delay: 100,
    reset: false,
    useDelay: 'onload',
    mobile: window.innerWidth < 768 ? false : true,
  });

  // Batch animations
  sr.reveal(".home__content, .about__content", {
    duration: 600,
    easing: 'ease-out'
  });

  sr.reveal(".home__img", {
    origin: "top",
    duration: 800,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  });

  sr.reveal(
    ".home__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .footer__content",
    {
      delay: 200,
      interval: 30,
      duration: 600,
      easing: 'ease-out'
    }
  );

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
};

// Use requestIdleCallback to defer non-critical work
if ('requestIdleCallback' in window) {
  requestIdleCallback(initScrollReveal, { timeout: 2000 });
} else {
  setTimeout(initScrollReveal, 1);
}