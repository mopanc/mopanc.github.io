<template>
  <!--xxxxxxxxxxxx Projects xxxxxxxxxxxx-->
     <section id="project" class="section project">
    <div class="container--projects">
      <div class="search-content">
        <div class="project_content">
          <h2 class="section__title--projects" ref="projects_page"></h2>
          <span class="section__subtitle--projects" ref="projects_page_subtitle"></span>
        </div>
        <div>
          <label for="search_box" ref="projects_page_search"> </label>
          <input class="search_box" type="text" name="search_box" v-model="searchTerm" :placeholder="translations.search_projects || 'Search projects'">
        </div>
      </div>
      <div>
        <div v-for="(project, index) in displayedProjects" :key="index" :class="project.class">
          <div :class="['projects-cards-content', {'projects-cards-content-left': index % 2 !== 0}, {'project-locked': !isAccessValid && !project.isPublic}]" class="project-container">

            <!-- Sobreposição de cadeado para projetos bloqueados -->
            <div v-if="!isAccessValid && !project.isPublic" class="project-lock-overlay" @click="showUnlockTerminal">
              <div class="lock-content">
                <i class="ri-lock-line lock-icon"></i>
                <p class="lock-text">{{ translations.commercial_project || 'Projeto Comercial' }}</p>
                <p class="lock-subtext">{{ translations.click_to_unlock || 'Clique para desbloquear' }}</p>
              </div>
            </div>
            <div v-if="index % 2 === 0" class="content_proj">
              <div class="testimonial__content">
                <h3 class="testimonial__name-right">{{ project.projectName }}</h3>
                <div class="transparent-box">
                  <p class="testimonial__description">{{ project.projectDescription }}</p>
                  <ul class="tecnologies-used">
                    <li
                      v-for="(tech, idx) in project.technologies"
                      :key="idx"
                      class="skills__item"
                    >
                      <i
                        :class="[getIconClass(tech.name), 'svg_icons']"
                        :title="tech.name + ' icon'"
                      ></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img :src="project.imageSrc" :alt="project.imageAlt" class="testimonial__img fixed-size-img" />
              </div>
            </div>
            <div v-else class="content_proj">
              <div>
                <img :src="project.imageSrc" :alt="project.imageAlt" class="testimonial__img fixed-size-img" />
              </div>
              <div class="testimonial__content">
                <h3 class="testimonial__name">{{ project.projectName }}</h3>
                <div class="transparent-box-left">
                  <p class="testimonial__description">{{ project.projectDescription }}</p>
                  <ul class="tecnologies-used">
                    <li
                      v-for="(tech, idx) in project.technologies"
                      :key="idx"
                      class="skills__item"
                    >
                      <i
                        :class="[getIconClass(tech.name), 'svg_icons']"
                        :title="tech.name + ' icon'"
                      ></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Indicador de Projetos Bloqueados -->
        <div v-if="!isAccessValid && hasLockedProjects" class="locked-projects-indicator">
          <div class="locked-indicator-content">
            <div class="locked-icon">
              <i class="ri-lock-line"></i>
            </div>
            <div class="locked-info">
              <h3>{{ lockedProjectsCount }} Projetos Comerciais Privados</h3>
              <p>Acima vê apenas uma amostra do meu trabalho. Tenho mais {{ lockedProjectsCount }} projetos desenvolvidos para empresas que requerem autorização para visualização devido a direitos de propriedade intelectual.</p>
              <div class="locked-features">
                <span class="feature-item">
                  <i class="ri-building-line"></i>
                  Projetos Empresariais
                </span>
                <span class="feature-item">
                  <i class="ri-code-box-line"></i>
                  Código Proprietário
                </span>
                <span class="feature-item">
                  <i class="ri-shield-check-line"></i>
                  Acesso Controlado
                </span>
              </div>
              <div class="locked-actions">
                <button @click="requestAccess" class="access-btn primary">
                  <i class="ri-mail-send-line"></i>
                  Solicitar Acesso Completo
                </button>
                <button @click="showUnlockTerminal" class="access-btn secondary">
                  <i class="ri-key-line"></i>
                  Já Tenho um Código
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Access Request Modal -->
    <AccessRequestModal
      :visible="showAccessModal"
      content-type="project"
      @close="closeAccessModal"
      @go-to-contact="goToContactPage"
      @show-auth="showAuthTerminal"
    />
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { useAccessControlSimple } from '../composables/useAccessControlSimple'
import { useLanguage } from '../composables/useLanguage.js'
import AccessRequestModal from '../components/AccessRequestModal.vue'
// eslint-disable-next-line no-unused-vars
import en from "../languages/en";
// eslint-disable-next-line no-unused-vars
import pt from "../languages/pt";
import googleGlass from '../assets/img/googleGlass.png';
import pythonBirds from '../assets/img/pythonbirds.png';
import jobsCalc from '../assets/img/discover.png';
import instagramImage from '../assets/img/instagram.png';
import netflixImage from '../assets/img/netflix.png';
import santanderImage from '../assets/img/santander.png';
import calculatorImage from '../assets/img/calculator.png';
import snakeImage from '../assets/img/snake.png';
import facebookImage from '../assets/img/facebook.png';
import covidImage from '../assets/img/covid.png';
import imcImage from '../assets/img/imc.png';
import gotImage from '../assets/img/got.png';
import socialImage from '../assets/img/social.png';
import calcImage from '../assets/img/calc.png';


export default {
    components: {
      AccessRequestModal
    },
    setup() {
      const { isAccessValid } = useAccessControlSimple()
      const { translations, initialize } = useLanguage()

      onMounted(async () => {
        await initialize()
      })

      return { isAccessValid, translations }
    },
    mounted() {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage;

      // Importa o arquivo de idioma correto com base no idioma selecionado
      import(`../languages/${this.selectedLanguage}.js`).then((module) => {
        // Usa as expressões traduzidas do módulo importado
        this.expressions = module.default;
        // utiliza as chaves do objeto de expressões para exibir o texto na tela
        this.$refs.projects_page.textContent = this.expressions.projects_page;
        this.$refs.projects_page_subtitle.textContent = this.expressions.projects_page_subtitle;
        this.$refs.projects_page_search.textContent = this.expressions.projects_page_search;
        // Atribui as expressões a cada objeto do projeto
        this.projects.forEach((project) => {
          project.projectName = this.expressions[project.projectName];
          project.projectDescription = this.expressions[project.projectDescription];
          project.view_project = this.expressions[project.view_project];
        });
      });
    }
  },
  data() {
    return {
      expressions: {},
      searchTerm: '',
      selectedProject: null,
      currentImageIndex: 0,
      showAccessModal: false,
      projects: [
        // PROJETOS PÚBLICOS (sempre visíveis - os 2 primeiros)
        {
          imageSrc: googleGlass,
          imageAlt: "Google Glasses",
          projectName: "google_title",
          projectDescription: "google_description",
          githubLink: "https://github.com/mopanc/projeto-glass-html5",
          class: "card-color-0",
          view_project: "view_project",
          isPublic: true,
          gallery: [
            { src: googleGlass, alt: "Google Glass Main Interface", title: "Main Interface" },
            { src: googleGlass, alt: "Google Glass Features", title: "Features Overview" },
            { src: googleGlass, alt: "Google Glass Design", title: "UI Design" },
            { src: googleGlass, alt: "Google Glass Responsive", title: "Responsive Design" }
          ],
          projectType: "Academic",
          status: "Completed",
          technologies: [
            { name: "Html5", icon: "w3_html5-icon.svg" },
            { name: "Css3", icon: "w3_css-icon.svg" },
            { name: "JavaScript", icon: "js.svg" },
          ],
        },
        {
          imageSrc: pythonBirds,
          imageAlt: 'Python Birds Game',
          projectName: 'python_title',
          projectDescription: 'python_description',
          githubLink: 'https://github.com/mopanc/pythonbirds-simples',
          class: 'card-color-0',
          view_project: 'view_project',
          isPublic: true,
          gallery: [
            { src: pythonBirds, alt: "Python Birds Gameplay", title: "Gameplay" },
            { src: pythonBirds, alt: "Python Birds Code Structure", title: "Code Structure" },
            { src: pythonBirds, alt: "Python Birds Game Over", title: "Game Over Screen" },
            { src: pythonBirds, alt: "Python Birds Menu", title: "Main Menu" }
          ],
          projectType: "Game Development",
          status: "Completed",
          technologies: [
            { name: "Python", icon: "python-icon.svg" },
          ],
        },

        // PROJETOS EMPRESARIAIS/COMERCIAIS (requerem código de acesso)
          {
            imageSrc: jobsCalc,
            imageAlt: 'Jobs Calc Tool',
            projectName: 'jobs_title',
            projectDescription: 'jobs_description',
            githubLink: 'https://github.com/mopanc/MaratonaDiscover',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
              { name: "JavaScript", icon: "js.svg" },
              { name: "Node.js", icon: "nodejs-icon.svg" },
              { name: "Ejs", icon: "ejs.svg" },
              { name: "Express", icon: "express.svg" },
              { name: "SQLite", icon: "sqlitebrowser.svg" },
            ],
          },
          {
            imageSrc: instagramImage,
            imageAlt: 'Instagram Login Page',
            projectName: 'instagram_title',
            projectDescription: 'instagram_description',
            githubLink: 'https://github.com/mopanc/InstagramPage',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
            { name: "Html5", icon: "w3_html5-icon.svg" },
            { name: "Css3", icon: "w3_css-icon.svg" },
            { name: "JavaScript", icon: "js.svg" },
            ],
          },
          {
            imageSrc: netflixImage,
            imageAlt: 'Netflix Homepage',
            projectName: 'netflix_title',
            projectDescription: 'netflix_description',
            githubLink: 'https://github.com/mopanc/interfaceNetflix',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
            { name: "Html5", icon: "w3_html5-icon.svg" },
            { name: "Css3", icon: "w3_css-icon.svg" },
            { name: "JavaScript", icon: "js.svg" },
            ],
          },
          {
            imageSrc: santanderImage,
            imageAlt: 'App Santander Homepage',
            projectName: 'santanderApp_title',
            projectDescription: 'santanderApp_description',
            githubLink: 'https://github.com/mopanc/SantanderDevWeek',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
              { name: "Kotlin", icon: "kotlin1.svg" },
              { name: "Android", icon: "Android2021.svg" }
            ],
          },
          {
            imageSrc: calculatorImage,
            imageAlt: 'Calculator Apple',
            projectName: 'calculator_title',
            projectDescription: 'calculator_description',
            githubLink: 'https://github.com/mopanc/calculator',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
              { name: "JavaScript", icon: "js.svg" },
              { name: "VueJs", icon: "vuejs-icon.svg" }
            ],
          },
          {
            imageSrc: snakeImage,
            imageAlt: 'Snake Game',
            projectName: 'snake_title',
            projectDescription: 'snake_description',
            githubLink: 'https://github.com/mopanc/snakeGame',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
              { name: "JavaScript", icon: "js.svg" }
            ],
          },
          {
            imageSrc: facebookImage,
            imageAlt: 'Facebook Login Page',
            projectName: 'facebook_title',
            projectDescription: 'facebook_description',
            githubLink: 'https://github.com/mopanc/Tela-Login-Facebook',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
            { name: "Html5", icon: "w3_html5-icon.svg" },
            { name: "Css3", icon: "w3_css-icon.svg" },
            { name: "JavaScript", icon: "js.svg" },
            ],
          },
          {
            imageSrc: covidImage,
            imageAlt: 'Covid-19 Tracker',
            projectName: 'covid_title',
            projectDescription: 'covid_description',
            githubLink: 'https://github.com/mopanc/covid19-tracker',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
            { name: "Html5", icon: "w3_html5-icon.svg" },
            { name: "Css3", icon: "w3_css-icon.svg" },
            { name: "JavaScript", icon: "js.svg" },
            ],
          },
          {
            imageSrc: imcImage,
            imageAlt: 'BMI calculator',
            projectName: 'bmi_title',
            projectDescription: 'bmi_description',
            githubLink: 'https://github.com/mopanc/calcImcApp',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
              { name: "Kotlin", icon: "kotlin1.svg" },
              { name: "Android", icon: "Android2021.svg" }
            ],
          },
          {
            imageSrc: gotImage,
            imageAlt: 'Website to Game of Thrones',
            projectName: 'wgot_title',
            projectDescription: 'wgot_description',
            githubLink: 'https://github.com/mopanc/GameOfThronesPage',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
            { name: "Html5", icon: "w3_html5-icon.svg" },
            { name: "Css3", icon: "w3_css-icon.svg" },
            { name: "JavaScript", icon: "js.svg" },
            ],
          },
          {
            imageSrc: socialImage,
            imageAlt: 'Internal Social Network',
            projectName: 'social_title',
            projectDescription: 'social_description',
            githubLink: 'https://github.com/mopanc/profile-page',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
              { name: "JavaScript", icon: "js.svg" },
              { name: "ReactJs", icon: "reactjs-icon.svg" },
            ],
          },
          {
            imageSrc: calcImage,
            imageAlt: 'Calculator',
            projectName: 'calc_title',
            projectDescription: 'calc_description',
            githubLink: 'https://github.com/mopanc/calc',
            class: 'card-color-0',
            view_project: 'view_project',
            isPublic: false,
            technologies: [
            { name: "Html5", icon: "w3_html5-icon.svg" },
            { name: "Css3", icon: "w3_css-icon.svg" },
            { name: "JavaScript", icon: "js.svg" },
            ],
          },
      ]
    };
  },
  computed: {
    filteredProjects() {
      if (!this.searchTerm) {
        return this.projects; // Se o termo de busca estiver vazio, retorna todos os projetos
      }

      const searchTermLowerCase = this.searchTerm.toLowerCase();

      return this.projects.filter(project => {
        const projectNameLowerCase = project.projectName.toLowerCase();
        return projectNameLowerCase.includes(searchTermLowerCase);
      });
    },
    displayedProjects() {
      // Sempre mostra todos os projetos filtrados
      // A proteção será visual (com cadeado) no template
      return this.filteredProjects;
    },
    totalProjectsCount() {
      return this.projects.length;
    },
    visibleProjectsCount() {
      return this.displayedProjects.length;
    },
    lockedProjectsCount() {
      return this.projects.filter(project => !project.isPublic).length;
    },
    hasLockedProjects() {
      return this.lockedProjectsCount > 0;
    }
  },
  methods: {
    getIconClass(techName) {
      // Mapeamento para DevIcons com classes colored
      const iconMap = {
        // Linguagens de programação
        'JavaScript': 'devicon-javascript-plain colored',
        'TypeScript': 'devicon-typescript-plain colored',
        'Python': 'devicon-python-plain colored',
        'Java': 'devicon-java-plain colored',
        'Kotlin': 'devicon-kotlin-plain colored',
        'PHP': 'devicon-php-plain colored',

        // Frontend
        'Html5': 'devicon-html5-plain colored',
        'HTML5': 'devicon-html5-plain colored',
        'Css3': 'devicon-css3-plain colored',
        'CSS3': 'devicon-css3-plain colored',
        'VueJs': 'devicon-vuejs-plain colored',
        'Vue.js': 'devicon-vuejs-plain colored',
        'ReactJs': 'devicon-react-original colored',
        'React': 'devicon-react-original colored',
        'jQuery': 'devicon-jquery-plain colored',
        'Bootstrap': 'devicon-bootstrap-plain colored',
        'Sass': 'devicon-sass-original colored',
        'TailwindCSS': 'devicon-tailwindcss-plain colored',

        // Backend & Runtime
        'Node.js': 'devicon-nodejs-plain colored',
        'Express': 'devicon-express-original colored',
        'ExpressJS': 'devicon-express-original colored',
        'Ejs': 'devicon-nodejs-plain colored', // Fallback para EJS

        // ORM/ODM
        'TypeORM': 'devicon-typescript-plain colored', // Fallback para TypeORM

        // Mobile
        'Android': 'devicon-android-plain colored',

        // Databases
        'MySQL': 'devicon-mysql-plain colored',
        'PostgreSQL': 'devicon-postgresql-plain colored',
        'MongoDB': 'devicon-mongodb-plain colored',
        'SQLite': 'devicon-sqlite-plain colored',
        'Redis': 'devicon-redis-plain colored',
        'Firebase': 'devicon-firebase-plain colored',

        // Tools & DevOps
        'Git': 'devicon-git-plain colored',
        'GitHub': 'devicon-github-original colored',
        'Docker': 'devicon-docker-plain colored',

        // Build Tools
        'Webpack': 'devicon-webpack-plain colored',
        'Vite': 'devicon-vite-original colored',

        // Trading/Finance (usando ícones alternativos)
        'Indicadores Trade': 'devicon-python-plain colored', // Fallback
        'Trading': 'devicon-python-plain colored', // Fallback

        // Others
        'GraphQL': 'devicon-graphql-plain colored'
      };

      // Buscar a classe do ícone no mapeamento
      const iconClass = iconMap[techName];

      if (iconClass) {
        return iconClass;
      } else {
        // Fallback: tentar o nome em lowercase
        const fallbackName = techName.toLowerCase().replace(/\s+/g, '').replace('.', '');
        console.warn(`Icon not mapped for "${techName}", trying fallback: devicon-${fallbackName}-plain colored`);
        return `devicon-${fallbackName}-plain colored`;
      }
    },
    requestAccess() {
      // Redirecionar para página de contacto
      this.$router.push('/contact')
    },
    showUnlockTerminal() {
      // Show professional access request modal
      this.showAccessModal = true
    },

    closeAccessModal() {
      this.showAccessModal = false
    },

    goToContactPage() {
      // Navigate to contact page
      this.$router.push({ path: '/contact' })
    },

    showAuthTerminal() {
      // Encontrar e abrir o terminal
      const miniTerminal = document.querySelector('.terminal-toggle')
      if (miniTerminal) {
        // Scroll até o terminal
        miniTerminal.scrollIntoView({ behavior: 'smooth', block: 'center' })

        // Animação de destaque
        miniTerminal.style.animation = 'pulse 0.6s ease-in-out 3'

        // Abrir o terminal após a animação
        setTimeout(() => {
          miniTerminal.style.animation = ''
          miniTerminal.click()
        }, 1500)
      }
    }
  },
};
</script>
<style>
.project__card {
  width: 300px;
  margin: 80px 30px;
  background-color: #EB5160;
  padding-left: -5px;
  display: flex;
  justify-content: left;
}

.border {
  width: 310px;
  height: 500px;
  margin: -5px -5px;
  border: 1px solid var(--color-primary);
  display: flex;
  flex-direction: column;
}

.section__title--projects {
  color: var(--color-primary);
  font-size: 44px;
}
.section__subtitle {
  color: var(--color-primary);
}

.project__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
}

.project__img {
  width: 290px;
  height: 200px;
  background-size: cover;
  margin-left: -20px;
  margin-top: -20px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.3);
}

.project__title {
  font-size: 34px;
  font-weight: bold;
  color: #fff;
}

.project__details {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.project__details .inner-div {
  margin-bottom: 10px; /* Adicione uma margem inferior à div interna */
}

.project__description {
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
}

.project__link {
  display: flex;
  justify-content: center;
  margin: 20px;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
}
.project__link i {
  text-decoration: none;
  color: #fff;
  margin-left: 10px;
  transition: 0.3s;
}

.project__link:hover {
  /* color: var(--color-primary); */
  color: white;
  padding-left: 8px;
  font-weight: 700;
}

.project__link:hover i {
  color: var(--color-primary);
  padding-left: 8px;
}

.project_content {
  text-align: left;
}

.search-content {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid hsl(0, 5%, 93%);
}

.search-content label {
  margin: auto 5px;
  
}

.search_box {
  padding: 5px 16px 5px 5px;
  border: 1px solid var(--color-primary);
  border-radius: 6px;
  width: 320px;
  outline: none;
}
.search_box:focus {
  outline: none;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

}

.container--projects {
  margin: auto;
  width: 70%;
}

.card-color-0 {
  display: flex;
  justify-content: center;
  /* background: linear-gradient(45deg, #348765, var(--color-primary)); */
  /* background: var(--color-primary); */
}

.card-color-1 {
  background-color: #8F3985;
}

.card-color-2 {
  background-color: #8DAA91;
}

.card-color-3 {
  background-color: #328ce7;
}

.card-color-4 {
  background-color: #888DA7;
}

.card-color-5 {
  background-color: #EB5160;
}

.card-color-6 {
  background-color: #8F3985;
}

.card-color-7 {
  background-color: #8DAA91;
}

.card-color-8 {
  background-color: #328ce7;
}

.card-color-9 {
  background-color: #EB5160;
}

.card-color-10 {
  background-color: #8F3985;
}

.card-color-11 {
  background-color: #8DAA91;
}

.card-color-12 {
  background-color: #328ce7;
}

@media screen and (max-width: 1024px) {
  .container--projects {
  margin: auto;
  width: 100%;
}

  .project__card {
  width: 265px;
}
.project__img {
    width: 239px;
    height: 155px;
}
}

@media screen and (max-width: 530px) {
  .container--projects {
  margin: auto;
  width: 90%;
  max-width: 100rem;
}

.project__card {
  width: 80%;
}

.project__img {
    width: 239px;
    height: 155px;
}

.search-content {
    display: block;
}

.project_content {
  margin: 20px 0;
}

.search_box {
  width: 100%;
}
}


.testimonial__content {
  width: 90%;
  margin: auto;
  padding: 20px 0;
}
.testimonial__content,
p,
h3 {
  color: #fff;
}

.testimonial__name {
  margin-top: 30px;
  font-size: 2.4rem;
  text-align: justify;
  color: #CCD6F6;
}

.testimonial__name-right {
  margin-top: 30px;
  margin-left: 20px;
  font-size: 2.4rem;
  text-align: justify;
  color: #CCD6F6;
}

.testimonial__description {
  color: #fff;
  padding: 20px 20px 0 20px;
  /* margin-top: 30px; */
  margin-right: 40px;
  text-align: justify;
}

.projects-cards-content {
  background-color: var(--color-bg-primary-bk);
  display: flex;
  justify-content: center;
  margin: 80px 0;
}

.projects-cards-content-left {
    display: flex;
    margin: 80px 0;
}

.transparent-box {
  min-height: 135px;
  height: fit-content;
  width: 105%;
  border-radius: 8px;
  background: rgba(195, 176, 145, 0.2);
  backdrop-filter: blur(7px); /* Efeito de desfoque */
  -webkit-backdrop-filter: blur(10px); /* Compatibilidade com Webkit */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Bordas semi-transparentes */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para profundidade */
}

.transparent-box-left {
  min-height: 135px;
  height: fit-content;
  width: 105%;
  margin-left: -20px;
  border-radius: 8px;
  background: rgba(195, 176, 145, 0.2);
  backdrop-filter: blur(7px); /* Efeito de desfoque */
  -webkit-backdrop-filter: blur(10px); /* Compatibilidade com Webkit */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Bordas semi-transparentes */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para profundidade */
}

.tecnologies-used {
  display: flex;
  justify-content: flex-start;
  margin-left: 12px;
}

.projects_box {
  display: flex;
  justify-content: center;
}

.content_proj {
  display: flex;
  max-width: 100%;
}

.fixed-size-img {
  width: 520px; /* Defina o tamanho desejado aqui */
  height: 340px; /* Defina o tamanho desejado aqui */
  object-fit: cover; /* Ajusta a imagem dentro do contêiner */
}

.svg_icons {
  font-size: 16px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 530px) {
.projects-cards-content {
  background-color: var(--color-bg-primary-bk);
  display: block !important;
  justify-content: center;
  margin: 80px 0;
}

.projects-cards-content-left {
    display: block !important;
    margin: 80px 0;
}

.fixed-size-img {
  width: 275px; /* Defina o tamanho desejado aqui */
  height: 200px; /* Defina o tamanho desejado aqui */
  object-fit: cover; /* Ajusta a imagem dentro do contêiner */
}
.content_proj {
    display: block;
    max-width: 100%;
}

}

/* Locked Projects Indicator */
.locked-projects-indicator {
  margin: 60px 0;
  padding: 0 2rem;
}

.locked-indicator-content {
  background: linear-gradient(135deg, rgba(255, 85, 85, 0.1), rgba(255, 149, 0, 0.1));
  border: 2px solid rgba(255, 85, 85, 0.3);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(255, 85, 85, 0.1);
}

.locked-icon {
  background: linear-gradient(135deg, #ff5555, #ff9500);
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(255, 85, 85, 0.3);
}

.locked-info h3 {
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.locked-info p {
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  max-width: 500px;
}

.locked-features {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
}

.feature-item i {
  color: #ff9500;
  font-size: 1.1rem;
}

.locked-actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.access-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.access-btn.primary {
  background: var(--color-primary);
  color: white;
}

.access-btn.primary:hover {
  background: #5a4fcf;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(106, 90, 205, 0.3);
}

.access-btn.secondary {
  background: transparent;
  color: var(--color-text);
  border: 2px solid rgba(255, 149, 0, 0.3);
}

.access-btn.secondary:hover {
  background: rgba(255, 149, 0, 0.1);
  border-color: #ff9500;
  color: #ff9500;
  transform: translateY(-2px);
}

/* Project Lock Overlay */
.project-container {
  position: relative;
}

.project-lock-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.project-lock-overlay:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.02);
}

.lock-content {
  text-align: center;
  color: white;
  animation: pulse-lock 2s infinite;
}

.lock-icon {
  font-size: 3rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
  display: block;
}

.lock-text {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.lock-subtext {
  font-size: 0.9rem;
  opacity: 0.8;
  color: #ccc;
}

.project-locked {
  filter: grayscale(30%);
  opacity: 0.7;
}

@keyframes pulse-lock {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* Responsive para locked projects */
@media screen and (max-width: 768px) {
  .lock-icon {
    font-size: 2.5rem;
  }

  .lock-text {
    font-size: 1rem;
  }

  .lock-subtext {
    font-size: 0.8rem;
  }

  .locked-projects-indicator {
    margin: 40px 0;
    padding: 0 1rem;
  }

  .locked-indicator-content {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .locked-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .locked-info h3 {
    font-size: 1.3rem;
  }

  .locked-features {
    justify-content: center;
    gap: 1rem;
  }

  .feature-item {
    font-size: 0.8rem;
  }

  .locked-actions {
    justify-content: center;
    margin-top: 1rem;
  }

  .access-btn {
    font-size: 0.8rem;
    padding: 0.7rem 1.2rem;
  }
}

@media screen and (max-width: 480px) {
  .locked-features {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  .locked-actions {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .access-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}

</style>