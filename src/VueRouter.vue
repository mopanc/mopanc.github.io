<script>
import { createRouter, createWebHistory } from 'vue-router';

// Eager load HomePage for better initial page performance
import HomePage from './components/HomePage.vue';

// Lazy load other pages with code splitting
const ProjectsPage = () => import('./pages/ProjectsPage-modern.vue');
const AboutPage = () => import('./pages/AboutPage-modern.vue');
const ContactPage = () => import('./pages/ContactPage.vue');
const PrivacyPage = () => import('./pages/PrivacyPage.vue');
const SuccessPage = () => import('./pages/SuccessPage.vue');
const NotFoundPage = () => import('./pages/404.vue');

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { title: 'Home - Jorge Mopanc' }
  },
  {
    path: '/projects',
    component: ProjectsPage,
    meta: { title: 'Projects - Jorge Mopanc' }
  },
  {
    path: '/about',
    component: AboutPage,
    meta: { title: 'About - Jorge Mopanc' }
  },
  {
    path: '/certificates',
    component: AboutPage,
    meta: { title: 'About - Jorge Mopanc' }
  },
  {
    path: '/contact',
    component: ContactPage,
    meta: { title: 'Contact - Jorge Mopanc' }
  },
  {
    path: '/privacy',
    component: PrivacyPage,
    meta: { title: 'Privacy Policy - Jorge Mopanc' }
  },
  {
    path: '/success',
    component: SuccessPage,
    meta: { title: 'Success - Jorge Mopanc' }
  },
  // Catch-all route for 404
  {
    path: '/:pathMatch(.*)',
    component: NotFoundPage,
    meta: { title: 'Page Not Found - Jorge Mopanc' }
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

// Navigation guards for better SEO and UX
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta?.title) {
    document.title = to.meta.title;
  }

  // Loading indicator could be added here
  // showLoadingIndicator()

  next();
});

router.afterEach(() => {
  // Hide loading indicator
  // hideLoadingIndicator()
});

export default router;

</script>