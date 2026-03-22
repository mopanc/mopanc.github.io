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
const BlogPage = () => import('./pages/BlogPage.vue');
const ArticlePage = () => import('./pages/ArticlePage.vue');
const BlogAdmin = () => import('./pages/BlogAdmin.vue');
const NotFoundPage = () => import('./pages/404.vue');

// Código Mental - Book companion pages
const LandingCodigoMental = () => import('./pages/LandingCodigoMental.vue');
const DailyCycle = () => import('./pages/DailyCycle.vue');
const Desafio90Dias = () => import('./pages/Desafio90Dias.vue');
const DebugFinanceiro = () => import('./pages/DebugFinanceiro.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Jorge Morais | Full Stack Developer Portfolio',
      description: 'Full Stack Developer with 5+ years building high-performance web applications and embedded systems. Specialized in React, Vue.js, Node.js, TypeScript, C programming, and industrial IoT.',
      keywords: 'full stack developer, lead developer, react developer, vuejs developer, nodejs developer, typescript developer, embedded systems developer, IoT developer',
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
      title: 'About Jorge Morais | Developer Experience & Bio',
      description: 'Learn about my journey from military service to full stack development. 5+ years of experience in web applications, embedded systems, and industrial IoT solutions.',
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
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    meta: {
      title: 'Blog & TIL | Jorge Morais — Node.js, C, Performance',
      description: 'Technical notes on Node.js, embedded C, performance optimization, and industrial IoT systems. Real production insights from a full stack developer.',
      keywords: 'blog, technical writing, nodejs, embedded c, performance optimization, iot, industrial systems, full stack developer blog',
      ogType: 'website',
      seoConfig: 'blog'
    }
  },
  {
    path: '/blog/:slug',
    name: 'Article',
    component: ArticlePage,
    meta: {
      title: 'Article - Jorge Morais Blog',
      description: 'Technical article by Jorge Morais, Full Stack Developer.',
      keywords: 'technical article, nodejs, embedded c, performance, iot',
      ogType: 'article',
      dynamicSeo: true
    }
  },
  {
    path: '/blog/admin',
    name: 'BlogAdmin',
    component: BlogAdmin,
    meta: {
      title: 'Blog Admin - Jorge Morais',
      description: 'Painel administrativo do blog',
      robots: 'noindex, nofollow'
    }
  },
  // Código Mental - Book companion
  {
    path: '/codigo-mental',
    name: 'CodigoMental',
    component: LandingCodigoMental,
    meta: {
      title: 'Código Mental — Recursos Online | Jorge Morais',
      description: 'Ferramentas práticas do livro Código Mental: Kit Mental personalizável, Desafio 90 Dias e Debug Financeiro. Protocolos imprimíveis para reprogramar o teu sistema operativo mental.',
      keywords: 'codigo mental, livro, kit mental, protocolos, desenvolvimento pessoal, jorge morais',
      ogType: 'website',
      seoConfig: 'codigoMental'
    }
  },
  {
    path: '/codigo-mental/ciclo',
    name: 'DailyCycle',
    component: DailyCycle,
    meta: {
      title: 'Ciclo Diário — Heart & Mental Cycle | Código Mental',
      description: 'Ciclo diário guiado: respiração 5-5-5, objectivos, intenções e reflexão. Ferramenta prática do livro Código Mental.',
      keywords: 'ciclo diario, respiracao, objectivos, reflexao, codigo mental, habitos',
      ogType: 'website'
    }
  },
  {
    path: '/codigo-mental/kit',
    redirect: '/codigo-mental/ciclo',
  },
  {
    path: '/codigo-mental/desafio-90-dias',
    name: 'Desafio90Dias',
    component: Desafio90Dias,
    meta: {
      title: 'Desafio 90 Dias — Dashboard | Código Mental',
      description: 'Dashboard do teu progresso no Desafio de 90 Dias. Dias são marcados automaticamente ao completar o ciclo diário.',
      keywords: 'desafio 90 dias, dashboard, progresso, streak, codigo mental',
      ogType: 'website'
    }
  },
  {
    path: '/codigo-mental/debug-financeiro',
    name: 'DebugFinanceiro',
    component: DebugFinanceiro,
    meta: {
      title: 'Debug Financeiro — Educação Financeira | Código Mental',
      description: 'Roadmap educativo de literacia financeira: dos 3 bugs que herdaste até conceitos de investimento. Conteúdo do livro Código Mental.',
      keywords: 'debug financeiro, educacao financeira, investimentos, literacia financeira, codigo mental',
      ogType: 'article'
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