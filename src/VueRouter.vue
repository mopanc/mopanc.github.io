<script>
import { createRouter, createWebHistory } from 'vue-router';

// Eager load HomePage for better initial page performance
import HomePage from './components/HomePage.vue';

// Lazy load other pages with code splitting
const ProjectsPage = () => import('./pages/ProjectsOverview.vue');
const ProjectDetail = () => import('./pages/ProjectDetail.vue');
const AboutPage = () => import('./pages/AboutPage-new.vue');
const ContactPage = () => import('./pages/ContactPage.vue');
const HirePage = () => import('./pages/HirePage.vue');
const PrivacyPage = () => import('./pages/PrivacyPage.vue');
const SuccessPage = () => import('./pages/SuccessPage.vue');
const BlogPage = () => import('./pages/BlogPage.vue');
const ArticlePage = () => import('./pages/ArticlePage.vue');
const BlogAdmin = () => import('./pages/BlogAdmin.vue');
const NotFoundPage = () => import('./pages/404.vue');
const TestesLogo = () => import('./pages/TestesLogo.vue');

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
      title: 'Jorge Morais · Senior Full-Stack Developer · AI + IoT',
      description: 'Senior Full-Stack Developer at the intersection of AI and Industrial IoT. React/Vue/Node + C firmware + LLMs (RAG, MCP, agents). Remote, EU.',
      keywords: 'senior full stack developer, AI and industrial IoT, edge AI developer, llm integration, mcp server, rag, agent tooling, react developer, vue developer, nodejs developer, typescript developer, embedded developer, MQTT, CCTalk, remote developer EU, benelux developer, nordic developer',
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
  // Legacy routes — redirect to unified /projects (preserves SEO + external links)
  { path: '/projects/case-studies', redirect: '/projects' },
  { path: '/projects/personal', redirect: '/projects' },
  { path: '/projects/open-source', redirect: '/projects' },
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
      title: 'About Jorge Morais — Senior Full-Stack Developer · AI + Industrial IoT',
      description: 'Senior Full-Stack Developer based in Braga, Portugal, working at the intersection of AI and Industrial IoT. From PHP and military service to embedded C, real-time React/Vue/Node.js platforms, MCP servers and RAG over device telemetry. 5+ years shipping production.',
      keywords: 'about, jorge morais bio, senior full stack developer biography, AI industrial IoT developer, llm developer, mcp, embedded developer, career journey',
      seoConfig: 'about'
    }
  },
  {
    path: '/certificates',
    redirect: '/about',
    meta: {
      seoConfig: 'certificates'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact Jorge Morais — Senior Full-Stack Developer (Remote, EU)',
      description: 'Get in touch to discuss a senior or lead full-stack opportunity, an LLM integration engagement, or a hardware-to-cloud platform challenge. Remote-first, EU citizen.',
      keywords: 'contact, hire senior full stack developer, hire llm developer, remote developer EU, benelux nordic remote',
      seoConfig: 'contact'
    }
  },
  {
    path: '/hire',
    name: 'Hire',
    component: HirePage,
    meta: {
      title: 'Hire Jorge Morais — Senior Full-Stack Developer · AI + Industrial IoT (Remote, EU)',
      description: 'Open to senior or lead full-stack roles in product teams at the intersection of AI and Industrial IoT — smart manufacturing, edge AI, IoT platforms with LLM features, agents that act on real hardware. Remote-first, EU citizen, available for relocation to Benelux or Nordic countries.',
      keywords: 'hire senior full stack developer, AI industrial IoT, edge AI developer, hire llm developer, hire mcp developer, remote senior developer EU, benelux nordic remote senior',
      ogType: 'profile',
      seoConfig: 'hire'
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
  // Brand sandbox (internal, noindex)
  {
    path: '/testes-logo',
    name: 'TestesLogo',
    component: TestesLogo,
    meta: {
      title: 'Brand Mark Sandbox | Jorge Morais',
      description: 'Internal sandbox for personal brand mark iteration.',
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