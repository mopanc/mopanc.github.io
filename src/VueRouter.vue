<script>
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import CertificatesPage from './pages/CertificatesPage.vue';
import NotFoundPage from './pages/404.vue';
import ContactPage from './pages/ContactPage.vue';
import SuccessPage from './pages/SuccessPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/certificates', component: CertificatesPage },
  { path: '/contact', component: ContactPage },
  { path: '/success', component: SuccessPage },


  // Rota curinga para redirecionar para a página 404
  { path: '/:pathMatch(.*)', component: NotFoundPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

</script>