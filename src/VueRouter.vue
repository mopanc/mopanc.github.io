<script>
import { createRouter, createWebHistory } from 'vue-router';

// Eager load HomePage for better initial page performance
import HomePage from './components/HomePage.vue';

// Lazy load other pages with code splitting
const ProjectsPage = () => import('./pages/ProjectsPage-modern.vue');
const ProjectDetail = () => import('./pages/ProjectDetail.vue');
const AboutPage = () => import('./pages/AboutPage-modern.vue');
const ContactPage = () => import('./pages/ContactPage.vue');
const PrivacyPage = () => import('./pages/PrivacyPage.vue');
const SuccessPage = () => import('./pages/SuccessPage.vue');
const NotFoundPage = () => import('./pages/404.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Jorge Morais | Senior Full Stack Developer Portfolio',
      description: 'Senior Full Stack Developer with 5+ years building high-performance web applications and embedded systems. Specialized in React, Vue.js, Node.js, TypeScript, C programming, and industrial IoT.',
      keywords: 'full stack developer, senior developer, react developer, vuejs developer, nodejs developer, typescript developer, embedded systems developer, IoT developer',
      ogType: 'profile',
      seoConfig: 'home'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
    meta: {
      title: 'Projects & Portfolio | Jorge Morais Full Stack Dev',
      description: 'Explore my portfolio of web applications, embedded systems, and IoT projects. Built with React, Vue.js, Node.js, C, and modern technologies.',
      keywords: 'portfolio, projects, web applications, embedded systems, IoT projects, react projects, vuejs projects, nodejs projects',
      seoConfig: 'projects'
    }
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetail',
    component: ProjectDetail,
    meta: {
      title: 'Project Case Study - Jorge Morais',
      description: 'Detailed case study of a professional project showcasing technical implementation and problem-solving.',
      keywords: 'case study, project details, technical implementation, portfolio project',
      dynamicSeo: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About Jorge Morais | Senior Developer Experience & Bio',
      description: 'Learn about my journey from military service to senior full stack development. 5+ years of experience in web applications, embedded systems, and industrial IoT solutions.',
      keywords: 'about, developer bio, full stack developer biography, career journey, professional experience',
      seoConfig: 'about'
    }
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: AboutPage,
    meta: {
      title: 'Certifications & Education | Jorge Morais CS50 Harvard',
      description: 'Professional certifications in JavaScript, React, Vue.js, Node.js, and computer science. Currently completing CS50 from Harvard University.',
      keywords: 'certifications, education, cs50, harvard, javascript certification, react certification',
      seoConfig: 'certificates'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact Jorge Morais - Available for Remote Opportunities',
      description: 'Get in touch to discuss your project. Available for remote full stack development, embedded systems programming, and technical consulting.',
      keywords: 'contact, hire developer, remote developer, full stack developer for hire, technical consulting',
      seoConfig: 'contact'
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPage,
    meta: {
      title: 'Privacy Policy & Data Protection | Jorge Morais Site',
      description: 'Privacy policy and data handling practices for jorgemopanc.com. Minimal data collection, GDPR compliant.',
      keywords: 'privacy policy, data protection, gdpr, privacy',
      ogType: 'article',
      seoConfig: 'privacy'
    }
  },
  {
    path: '/success',
    name: 'Success',
    component: SuccessPage,
    meta: {
      title: 'Thank You - Jorge Morais',
      description: 'Thank you for getting in touch. I will respond to your message shortly.',
      keywords: 'contact success, thank you',
      robots: 'noindex, nofollow'
    }
  },
  // Catch-all route for 404
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFoundPage,
    meta: {
      title: 'Page Not Found - Jorge Morais',
      description: 'The page you are looking for could not be found.',
      keywords: '404, not found, error',
      robots: 'noindex, nofollow'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Navigation guards for SEO and meta tags
router.beforeEach((to, from, next) => {
  // Update document title immediately for better UX
  if (to.meta?.title) {
    document.title = to.meta.title;
  }

  next();
});

router.afterEach((to) => {
  // Update meta tags after route change
  if (to.meta) {
    // Update description
    if (to.meta.description) {
      updateMetaTag('description', to.meta.description);
    }

    // Update keywords
    if (to.meta.keywords) {
      updateMetaTag('keywords', to.meta.keywords);
    }

    // Update robots
    if (to.meta.robots) {
      updateMetaTag('robots', to.meta.robots);
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Update canonical URL
    const canonical = `https://jorgemopanc.com${to.path}`;
    updateCanonicalLink(canonical);

    // Update Open Graph tags
    updateMetaProperty('og:title', to.meta.title || document.title);
    updateMetaProperty('og:description', to.meta.description || '');
    updateMetaProperty('og:url', canonical);
    if (to.meta.ogType) {
      updateMetaProperty('og:type', to.meta.ogType);
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:title', to.meta.title || document.title);
    updateMetaTag('twitter:description', to.meta.description || '');
  }

  // Scroll to top
  window.scrollTo(0, 0);
});

// Helper functions for meta tag updates
function updateMetaTag(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateMetaProperty(property, content) {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonicalLink(href) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export default router;

</script>