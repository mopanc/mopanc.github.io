<!-- eslint-disable no-unused-vars -->
<template>
    <main class="main">
        <!--xxxxxxxxxxxx home xxxxxxxxxxxx-->
        <section id="home" class="home">
            <div class="container">
                <div class="d-grid home__wrapper">
                    <div class="home__content">
                        <h1 class="home__title" ref="title"></h1>
                        <p class="home__description" ref="presentation"></p>
                        <div class="home__info">
                            <div class="home__info-wrapper">
                                <p class="home__info-number" ref="countup1">03</p>
                                <h2 class="home__info-title" ref="experience"></h2>
                            </div>
                            <div class="home__info-wrapper">
                                <div class="plus_projects">
                                    <span>+</span>
                                    <p class="home__info-number" ref="countup2">15</p>
                                </div>
                                <h2 class="home__info-title" ref="projects_completed"></h2>
                            </div>
                            <div class="home__info-wrapper">
                                <p class="home__info-number" ref="countup3">02</p>
                                <h2 class="home__info-title" ref="companies"></h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="portfolio-item home__img">
                            <img src="https://avatars.githubusercontent.com/u/45471030?v=4" alt="Jorge">
                        </div>
                        <div class="footer__content social_links">
                            <h4 class="footer__title"></h4>
                            <ul class="footer__social-list">
                                <li class="footer__social-item">
                                    <a href="https://www.facebook.com/jorgemopanc" class="footer__social-link">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://www.instagram.com/jorgemopanc/" class="footer__social-link">
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://twitter.com/JorgeMo56542670" class="footer__social-link">
                                        <i class="ri-twitter-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://github.com/mopanc" class="footer__social-link">
                                        <i class="ri-github-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://www.linkedin.com/in/jorge-mopanc/" class="footer__social-link">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://codepen.io/mopanc" class="footer__social-link">
                                        <i class="ri-codepen-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--xxxxxxxxxxxx About xxxxxxxxxxxx-->
        <section id="about" class="section about">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title about_me" ref="about_me"></h2>
                    <span class="section__subtitle" ref="who_i_am"></span>
                </div>
                <div class="d-grid about__wrapper">
                    <div class="about__content">
                        <h3 class="about__title" ref="title_about_me"></h3>
                        <p class="about__description" ref="description_about_me"></p>
                        <a href="#" class="btn btn--secondary" ref="know_more"></a>
                    </div>
                    <div class="skills">
                        <h3 class="skills__title" ref="Technologies"></h3>
                        <div class="container-skills">
                            <div class="cards">
                            <div class="face face1">
                                <ul class="skills__list">
                                    <li class="skills__item"><img src="../assets/icons/php-icon.svg" height="16px" width="16px" alt="php icon">PHP</li>
                                    <li class="skills__item"><img src="../assets/icons/nodejs-icon.svg" height="16px" width="16px" alt="nodejs icon">Nodejs</li>
                                    <li class="skills__item"><img src="../assets/icons/firebase-icon.svg" height="16px" width="16px" alt="Firebase icon">Firebase</li>
                                    <li class="skills__item"><img src="../assets/icons/mysql-official.svg" height="16px" width="16px" alt="MySql icon">MySql</li>
                                    <li class="skills__item"><img src="../assets/icons/npmjs-icon.svg" height="16px" width="16px" alt="npm icon">Npm</li>
                                    <li class="skills__item"><img src="../assets/icons/python-icon.svg" height="16px" width="16px" alt="Python icon">Python</li>
                                    <li class="skills__item"><img src="../assets/icons/graphql-icon.svg" height="16px" width="16px" alt="Graphql icon">GraphQl</li>
                                    <li class="skills__item"><img src="../assets/icons/docker-icon.svg" width="16px" height="16px" alt="Docker icon">Docker</li>
                                </ul>      
                            </div>
                        <div class="face face2">
                            <h2 class="face_title">Backend</h2>
                        </div>
                            </div>

                            <div class="cards">
                        <div class="face face1">
                            <ul class="skills__list">
                                <li class="skills__item"><img src="../assets/icons/w3_html5-icon.svg" height="16px" width="16px" alt="html5 icon">Html5</li>
                                <li class="skills__item"><img src="../assets/icons/w3_css-icon.svg" height="16px" width="16px" alt="css3 icon">Css3</li>
                                <li class="skills__item"><img src="../assets/icons/sass-lang-icon.svg" height="16px" width="16px" alt="sass icon">Sass</li>
                                <li class="skills__item"><img src="../assets/icons/239ec8a4-163e-4792-83b6-3f6d96911757.svg" height="16px" width="16px" alt="javascript icon">Javascript</li>
                                <li class="skills__item"><img src="../assets/icons/jquery-vertical.svg" alt="jquery" height="16px" width="16px">jquery</li>
                                <li class="skills__item"><img src="../assets/icons/getbootstrap-icon.svg" alt="Bootstrap" height="16px" width="16px">Bootstrap</li>
                                <li class="skills__item"><img src="../assets/icons/reactjs-icon.svg" width="16px" height="16px" alt="react icon">Reactjs</li>
                                <li class="skills__item"><img src="../assets/icons/vuejs-icon.svg" width="16px" height="16px" alt="vue icon">Vuejs</li>
                                <li class="skills__item"><img src="../assets/icons/nuxtjs-icon.svg" alt="Nuxtjs" height="16px" width="16px">Nuxtjs</li>
                                <li class="skills__item"><img src="../assets/icons/tailwindcss-icon.svg" alt="Tailwind" height="16px" width="16px">Tailwind</li>
                            </ul>
                        </div>
                        <div class="face face2">
                            <h2 class="face_title">Frontend</h2>
                        </div>
                            </div>

                            <div class="cards">
                        <div class="face face1">
                            <ul class="skills__list">
                                <li class="skills__item"><img src="../assets/icons/atlassian_jira-icon.svg" height="16px" width="16px" alt="Jira icon">Jira</li>
                                <li class="skills__item"><img src="../assets/icons/getpostman-icon.svg" alt="Postaman" height="16px" width="16px">Postman</li>
                                <li class="skills__item"><img src="../assets/icons/git-scm-icon.svg" height="16px" width="16px" alt="Git icon">Git</li>
                                <li class="skills__item"><img src="../assets/icons/github-icon.svg" height="16px" width="16px" alt="Github icon">Github</li>
                                <li class="skills__item"><img src="../assets/icons/gitlab-icon.svg" alt="Gitlab" height="16px" width="16px">Gitlab</li>
                                <li class="skills__item"><img src="../assets/icons/google_analytics-icon.svg" alt="Analitics" height="16px" width="16px">Analytics</li>
                                <li class="skills__item"><img src="../assets/icons/monday-icon.svg" width="16px" height="16px" alt="Monday icon">Monday</li>
                                <li class="skills__item"><img src="../assets/icons/visualstudio_code-icon.svg" width="16px" height="16px" alt="Vscode icon">Vscode</li>
                                <li class="skills__item"><img src="../assets/icons/slack-icon.svg" width="16px" height="16px" alt="Slack icon">Slack</li>
                            </ul>
                        </div>
                        <div class="face face2">
                            <h2 class="face_title">Tools</h2>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--xxxxxxxxxxxx Qualification xxxxxxxxxxxx-->
        <section id="qualification" class="section qualification">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title experience-title" ref="title_experience"></h2>
                    <span class="section__subtitle" ref="subtitle_experience"></span>
                </div>
                <!--xxxxxx Professional Experience xxxxxx-->
                <div class="qualification__wrapper">
                    <h3 class="qualification__name">
                        <i class="ri-briefcase-line"></i>
                        <span ref="profissional_experience"></span>
                    </h3>
                    <div class="d-grid qualification__content">
                        <!-- Experience 1-->
                        <div class="qualification__item">
                            <h3 class="qualification__title" ref="title_frontkom"></h3>
                            <p class="qualification__description" ref="description_frontkom"></p>
                            <span class="qualification__date" ref="dates_frontkom"></span>
                        </div>
                        <!-- Experience 2-->
                        <div class="qualification__item">
                            <h3 class="qualification__title" ref="title_netgocio"></h3>
                            <p class="qualification__description" ref="description_netgocio"></p>
                            <span class="qualification__date" ref="dates_netgocio"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--xxxxxxxxxxxx services xxxxxxxxxxxx-->
        <section id="service" class="section service">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title" ref="services"></h2>
                    <span class="section__subtitle" ref="what_i_do"></span>
                </div>
                <div class="d-grid service__wrapper">
                    <!--xxxxxx service card 1 xxxxxx-->
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-layout-4-fill"></i>
                        </div>
                        <h3 class="service__title" ref="front_end"></h3>
                    </div>
                    <!--xxxxxx service card 2 xxxxxx-->
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-code-s-slash-line"></i>
                        </div>
                        <h3 class="service__title" ref="backend"></h3>
                    </div>
                    <!--xxxxxx service card 3 xxxxxx-->
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-pages-line"></i>
                        </div>
                        <h3 class="service__title" ref="drupal_wodrpress"></h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section id="testimonial" class="section testimonial">
            <div class="container slick_container">
                <div class="section__header">
                    <h2 class="section__title service-title" ref="my_projects"></h2>
                    <span class="section__subtitle" ref="recent_work"></span>
                </div>
                <SlickHome />
                <div class="qualification__footer__projects">
                    <p class="qualification__footer__projects-text" ref="see_all"></p>
                    <a href="/projects" class="btn btn--secondary" ref="see_projects"></a>
                </div>
            </div>
        </section>
        <!-- Contact -->
        <section id="contact" class="contact">
            <div class="container">
                <div class="d-grid contact__wrapper">
                    <div class="contact__content">
                        <h2 class="contact__title" ref="work_together"></h2>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
import CountUp from 'countup';
import SlickHome from './SlickHome.vue';


export default {
        components: {
            SlickHome,
        },
        mounted() {

            const options = {
            duration: 5, // tempo de duração da animação em segundos
            useEasing: true, // adicionar suavização (aceleração/desaceleração) à animação
            };

            const countup1 = new CountUp(this.$refs.countup1, 0, 3, 0, options); // 0 -> início, 3 -> fim
            countup1.start();

            const countup2 = new CountUp(this.$refs.countup2, 0, 15, 0, options);
            countup2.start();

            const countup3 = new CountUp(this.$refs.countup3, 0, 2, 0, options);
            countup3.start();

            const selectedLanguage = localStorage.getItem('selectedLanguage') || "en";
            if (selectedLanguage) {
                this.selectedLanguage = selectedLanguage;
            }

            // importa o arquivo de idioma correto com base no idioma selecionado
            import(`../languages/${this.selectedLanguage}.js`).then((module) => {
            // usa as expressões traduzidas do módulo importado
            const expressions = module.default;

            // utiliza as chaves do objeto de expressões para exibir o texto na tela
            this.$refs.title.textContent = expressions.title;
            this.$refs.presentation.textContent = expressions.presentation;
            this.$refs.experience.textContent = expressions.experience;
            this.$refs.projects_completed.textContent = expressions.projects_completed;
            this.$refs.companies.textContent = expressions.companies;
            this.$refs.about_me.textContent = expressions.about_me;
            this.$refs.who_i_am.textContent = expressions.who_i_am;
            this.$refs.Technologies.textContent = expressions.Technologies;
            this.$refs.title_about_me.textContent = expressions.title_about_me;
            this.$refs.description_about_me.textContent = expressions.description_about_me;
            this.$refs.know_more.textContent = expressions.know_more;
            this.$refs.title_experience.textContent = expressions.title_experience;
            this.$refs.subtitle_experience.textContent = expressions.subtitle_experience;
            this.$refs.profissional_experience.textContent = expressions.profissional_experience;
            this.$refs.title_frontkom.textContent = expressions.title_frontkom;
            this.$refs.description_frontkom.textContent = expressions.description_frontkom;
            this.$refs.dates_frontkom.textContent = expressions.dates_frontkom;
            this.$refs.title_netgocio.textContent = expressions.title_netgocio;
            this.$refs.description_netgocio.textContent = expressions.description_netgocio;
            this.$refs.dates_netgocio.textContent = expressions.dates_netgocio;
            this.$refs.services.textContent = expressions.services;
            this.$refs.what_i_do.textContent = expressions.what_i_do;
            this.$refs.front_end.textContent = expressions.front_end;
            this.$refs.backend.textContent = expressions.backend;
            this.$refs.drupal_wodrpress.textContent = expressions.drupal_wodrpress;
            this.$refs.my_projects.textContent = expressions.my_projects;
            this.$refs.recent_work.textContent = expressions.recent_work;
            this.$refs.see_all.textContent = expressions.see_all;
            this.$refs.see_projects.textContent = expressions.see_projects;
            this.$refs.work_together.textContent = expressions.work_together;
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio-item {
    display: inline-block;
    position: relative;
    width: 370px;
    height: 370px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid #42b983;
    transition: transform 0.5s ease-out;
}

@media screen and (max-width: 1024px) {
  .portfolio-item {
    width: 320px;
    height: 320px;
  }
}
@media screen and (max-width: 374px) {
  .portfolio-item {
    width: 300px;
    height: 300px;
  }
}

.portfolio-item:hover img {
    transform: scale(1.01);
}

.portfolio-item img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-out;
}


.plus_projects {
    display: flex;
    font-size: var(--fs-xxl);
    font-weight: var(--fw-bold);
    color: var(--color-white);
    margin-bottom: 1rem;
}

.footer__social-link {
    color: var(--color-white);
}
.footer__social-link:hover {
    color: #42b983;
}
.social_links {
justify-content: center;
}
</style>
