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
                    <input class="search_box" type="text" name="search_box" v-model="searchTerm" placeholder="Search projects">
                </div>
            </div>
            <div class="d-grid project__wrapper">
                <div v-for="(project, index) in filteredProjects" :key="index" class="project__card" :class="project.class">
                    <div class="border">
                        <div>
                            <img :src="project.imageSrc" :alt="project.imageAlt" class="project__img">
                        </div>
                        <div class="project__header">
                            <h3 class="project__title">{{ project.projectName }}</h3>
                        </div>
                        <div class="project__details">
                            <div>
                                <p class="project__description">{{ project.projectDescription }}</p>
                            </div>
                            <div>
                                <a :href="project.githubLink" target="_blank" class="project__link"> {{ project.view_project }}
                                    <i class="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
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
      searchTerm: '', // Propriedade para armazenar o termo de busca
      projects: [
          {
            imageSrc: googleGlass,
            imageAlt: 'Google Glasses',
            projectName: 'google_title',
            projectDescription: 'google_description',
            githubLink: 'https://github.com/mopanc/projeto-glass-html5',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: pythonBirds,
            imageAlt: 'Python Birds Game',
            projectName: 'python_title',
            projectDescription: 'python_description',
            githubLink: 'https://github.com/mopanc/pythonbirds-simples',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: jobsCalc,
            imageAlt: 'Jobs Calc Tool',
            projectName: 'jobs_title',
            projectDescription: 'jobs_description',
            githubLink: 'https://github.com/mopanc/MaratonaDiscover',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: instagramImage,
            imageAlt: 'Instagram Login Page',
            projectName: 'instagram_title',
            projectDescription: 'instagram_description',
            githubLink: 'https://github.com/mopanc/InstagramPage',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: netflixImage,
            imageAlt: 'Netflix Homepage',
            projectName: 'netflix_title',
            projectDescription: 'netflix_description',
            githubLink: 'https://github.com/mopanc/interfaceNetflix',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: santanderImage,
            imageAlt: 'App Santander Homepage',
            projectName: 'santanderApp_title',
            projectDescription: 'santanderApp_description',
            githubLink: 'https://github.com/mopanc/SantanderDevWeek',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: calculatorImage,
            imageAlt: 'Calculator Apple',
            projectName: 'calculator_title',
            projectDescription: 'calculator_description',
            githubLink: 'https://github.com/mopanc/calculator',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: snakeImage,
            imageAlt: 'Snake Game',
            projectName: 'snake_title',
            projectDescription: 'snake_description',
            githubLink: 'https://github.com/mopanc/snakeGame',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: facebookImage,
            imageAlt: 'Facebook Login Page',
            projectName: 'facebook_title',
            projectDescription: 'facebook_description',
            githubLink: 'https://github.com/mopanc/Tela-Login-Facebook',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: covidImage,
            imageAlt: 'Covid-19 Tracker',
            projectName: 'covid_title',
            projectDescription: 'covid_description',
            githubLink: 'https://github.com/mopanc/covid19-tracker',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: imcImage,
            imageAlt: 'BMI calculator',
            projectName: 'bmi_title',
            projectDescription: 'bmi_description',
            githubLink: 'https://github.com/mopanc/calcImcApp',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: gotImage,
            imageAlt: 'Website to Game of Thrones',
            projectName: 'wgot_title',
            projectDescription: 'wgot_description',
            githubLink: 'https://github.com/mopanc/GameOfThronesPage',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: socialImage,
            imageAlt: 'Internal Social Network',
            projectName: 'social_title',
            projectDescription: 'social_description',
            githubLink: 'https://github.com/mopanc/profile-page',
            class: 'card-color-0',
            view_project: 'view_project'
          },
          {
            imageSrc: calcImage,
            imageAlt: 'Calculator',
            projectName: 'calc_title',
            projectDescription: 'calc_description',
            githubLink: 'https://github.com/mopanc/calc',
            class: 'card-color-0',
            view_project: 'view_project'
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
    }
  }
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
  border: 1px solid #42b983;
  display: flex;
  flex-direction: column;
}

.section__title--projects {
  color: #000;
  font-size: 44px;
}
.section__subtitle {
  color: #000;
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
  color: #42b983;
  padding-left: 8px;
}

.project__link:hover i {
  color: #42b983;
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
  border: 1px solid #42b983;
  border-radius: 6px;
  width: 220px;
  outline: none;
}
.search_box:focus {
  outline: none;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

}

.container--projects {
  margin: auto;
  width: 90%;
}

.card-color-0 {
  background: linear-gradient(45deg, #3503ad, #42b983);
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
  width: 80%;
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

</style>