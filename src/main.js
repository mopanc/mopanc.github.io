import { createApp } from 'vue';
import App from './App.vue';
import router from './VueRouter';
import { createUnhead, headSymbol } from '@unhead/vue';

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

app.provide(headSymbol, head);
app.use(router);

// Wait for the router to resolve the initial route (incl. async page chunks)
// before mounting/hydrating. Without this, lazy-loaded route components cause
// a hydration flash on prerendered pages: <router-view> renders empty while
// the chunk loads, blanking the prerendered HTML until the import resolves.
router.isReady().then(() => {
  app.mount('#app');

  if (window.__PRERENDER_INJECTED && window.__PRERENDER_INJECTED.prerendered) {
    document.dispatchEvent(new Event('render-event'));
  } else {
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'));
    }, 100);
  }
});

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