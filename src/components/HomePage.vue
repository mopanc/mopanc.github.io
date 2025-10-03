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
                                <p class="home__info-number" ref="countup1">04</p>
                                <h2 class="home__info-title" ref="experience"></h2>
                            </div>
                            <div class="home__info-wrapper">
                                <div class="plus_projects">
                                    <span>+</span>
                                    <p class="home__info-number" ref="countup2">25</p>
                                </div>
                                <h2 class="home__info-title" ref="projects_completed"></h2>
                            </div>
                            <div class="home__info-wrapper">
                                <p class="home__info-number" ref="countup3">03</p>
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
                                    <a href="https://www.facebook.com/jorgemopanc" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://www.instagram.com/jorgemopanc/" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://twitter.com/JorgeMo56542670" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                                        <i class="ri-twitter-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://github.com/mopanc" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                        <i class="ri-github-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://www.linkedin.com/in/jorge-mopanc/" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                                <li class="footer__social-item">
                                    <a href="https://codepen.io/mopanc" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="CodePen Profile">
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
                        <div class="about__actions">
                            <a href="/about" class="btn btn--secondary" ref="know_more"></a>
                        </div>
                    </div>
                    <div class="skills">
                        <h3 class="skills__title" ref="Technologies"></h3>
                        <div class="container-skills">

                            <div class="cards">
                                <div class="face face1">
                                    <ul class="skills__list">
                                        <li class="skills__item"><img src="../assets/icons/js.svg" height="16px" width="16px" alt="JavaScript icon">JavaScript</li>
                                        <li class="skills__item"><img src="../assets/icons/typescriptlang-icon.svg" height="16px" width="16px" alt="TypeScript icon">TypeScript</li>
                                        <li class="skills__item"><img src="../assets/icons/nodejs-icon.svg" height="16px" width="16px" alt="Node.js icon">Node.js</li>
                                        <li class="skills__item"><img src="../assets/icons/express-js.svg" height="16px" width="16px" alt="Express.js icon">Express.js</li>
                                        <li class="skills__item"><img src="../assets/icons/postgresql.svg" height="16px" width="16px" alt="PostgreSQL icon">PostgreSQL</li>
                                        <li class="skills__item"><img src="../assets/icons/mysql-official.svg" height="16px" width="16px" alt="MySQL icon">MySQL</li>
                                        <li class="skills__item"><img src="../assets/icons/Server-Api-Setting--Streamline-Freehand.png" height="16px" width="16px" alt="REST API icon">REST APIs</li>
                                        <li class="skills__item"><img src="../assets/icons/mqtt-icon-solid.svg" height="16px" width="16px" alt="MQTT icon">MQTT</li>
                                        <li class="skills__item"><img src="../assets/icons/socketio.svg" height="16px" width="16px" alt="Socket.IO icon">Socket.IO</li>
                                        <li class="skills__item"><img src="../assets/icons/binary-svgrepo-com.svg" height="16px" width="16px" alt="ccTalk Protocol icon">ccTalk Protocol</li>
                                    </ul>
                                </div>
                                <div class="face face2">
                                    <h2 class="face_title">Backend</h2>
                                </div>
                            </div>

                            <div class="cards">
                                <div class="face face1">
                                    <ul class="skills__list">
                                        <li class="skills__item"><img src="../assets/icons/reactjs-icon.svg" width="16px" height="16px" alt="React icon">React.js</li>
                                        <li class="skills__item"><img src="../assets/icons/vuejs-icon.svg" width="16px" height="16px" alt="Vue icon">Vue.js</li>
                                        <li class="skills__item">🅰️ Angular</li>
                                        <li class="skills__item"><img src="../assets/icons/typescriptlang-icon.svg" height="16px" width="16px" alt="TypeScript icon">TypeScript</li>
                                        <li class="skills__item"><img src="../assets/icons/w3_css-icon.svg" height="16px" width="16px" alt="CSS3 icon">CSS3</li>
                                        <li class="skills__item"><img src="../assets/icons/tailwindcss-icon.svg" alt="Tailwind" height="16px" width="16px">Tailwind CSS</li>
                                        <li class="skills__item"><img src="../assets/icons/sass-lang-icon.svg" height="16px" width="16px" alt="Sass icon">Sass/SCSS</li>
                                        <li class="skills__item"><img src="../assets/icons/w3_css-icon.svg" height="16px" width="16px" alt="Responsive Design icon">Responsive</li>
                                    </ul>
                                </div>
                                <div class="face face2">
                                    <h2 class="face_title">Frontend</h2>
                                </div>
                            </div>

                            <div class="cards">
                                <div class="face face1">
                                    <ul class="skills__list">
                                        <li class="skills__item"><img src="../assets/icons/git-scm-icon.svg" height="16px" width="16px" alt="Git icon">Git & GitHub</li>
                                        <li class="skills__item"><img src="../assets/icons/docker-icon.svg" width="16px" height="16px" alt="Docker icon">Docker</li>
                                        <li class="skills__item"><img src="../assets/icons/getpostman-icon.svg" alt="Postman" height="16px" width="16px">Postman</li>
                                        <li class="skills__item"><img src="../assets/icons/linux.svg" height="16px" width="16px" alt="Linux icon">Linux/Unix</li>
                                        <li class="skills__item"><img src="../assets/icons/webstorm.svg" height="16px" width="16px" alt="WebStorm icon">WebStorm</li>
                                        <li class="skills__item"><img src="../assets/icons/icons-black/claude.svg" height="16px" width="16px" alt="Claude AI icon">AI Tools</li>
                                        <li class="skills__item"><img src="../assets/icons/atlassian_jira-icon.svg" height="16px" width="16px" alt="Jira icon">Jira</li>
                                        <li class="skills__item"><img src="../assets/icons/icons-black/githubactions.svg" height="16px" width="16px" alt="CI/CD icon">CI/CD</li>
                                        <li class="skills__item"><img src="../assets/icons/icons-black/testinglibrary.svg" height="16px" width="16px" alt="Testing icon">Testing</li>
                                    </ul>
                                </div>
                                <div class="face face2">
                                    <h2 class="face_title">Tools & DevOps</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Download CV -->
        <DownloadCV />

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
                            <h3 class="qualification__title" ref="title_balancas"></h3>
                            <p class="qualification__description" ref="description_balancas"></p>
                            <span class="qualification__date" ref="dates_balancas"></span>
                        </div>
                        <!-- Experience 2-->
                        <div class="qualification__item">
                            <h3 class="qualification__title" ref="title_frontkom"></h3>
                            <p class="qualification__description" ref="description_frontkom"></p>
                            <span class="qualification__date" ref="dates_frontkom"></span>
                        </div>
                        <!-- Experience 3-->
                        <div class="qualification__item">
                            <h3 class="qualification__title" ref="title_netgocio"></h3>
                            <p class="qualification__description" ref="description_netgocio"></p>
                            <span class="qualification__date" ref="dates_netgocio"></span>
                        </div>
                    </div>
                    <!-- <div>
                        <a href="https://www.linkedin.com/in/jorge-mopanc/" class="footer__social-link">
                            <i class="ri-linkedin-fill"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jorge-mopanc/"> Please visit my Linkedin Page</a>
                    </div> -->
                </div>
            </div>
        </section>

        <!--xxxxxxxxxxxx services xxxxxxxxxxxx-->
        <section id="service" class="section service">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title_service" ref="services"></h2>
                    <span class="section__subtitle_service" ref="what_i_do"></span>
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
                            <i class="ri-database-2-line"></i>
                        </div>
                        <h3 class="service__title" ref="database"></h3>
                    </div>
                    <!--xxxxxx service card 4 xxxxxx-->
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-pages-line"></i>
                        </div>
                        <h3 class="service__title" ref="dev_ops"></h3>
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
<!--                <div class="qualification__footer__projects">-->
<!--                    <p class="qualification__footer__projects-text" ref="see_all"></p>-->
<!--                    <a href="/projects" class="btn btn&#45;&#45;secondary" ref="see_projects"></a>-->
<!--                </div>-->
            </div>
        </section>

        <!-- Call to Action -->
        <CallToAction />

        <!-- Contact Form -->
        <ContactForm />


    </main>
</template>

<script>
import CountUp from 'countup';
import SlickHome from './SlickHome-modern.vue';
import ContactForm from './ContactForm.vue';
import DownloadCV from './DownloadCV.vue';
import CallToAction from './CallToAction.vue';


export default {
        components: {
            SlickHome,
            ContactForm,
            DownloadCV,
            CallToAction,
        },
        data() {
            return {
            };
        },
        methods: {
            handleDownloadPDF() {
                // Download PDF logic here
                const link = document.createElement('a');
                link.href = '/src/assets/cv/jorge-morais-cv.pdf';
                link.download = 'Jorge-Morais-CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },



            loadTranslations() {
                const selectedLanguage = localStorage.getItem('selectedLanguage') || "en";
                if (selectedLanguage) {
                    this.selectedLanguage = selectedLanguage;
                }

                // importa o arquivo de idioma correto com base no idioma selecionado
                import(`../languages/${this.selectedLanguage}.js`).then((module) => {
                    // usa as expressões traduzidas do módulo importado
                    const expressions = module.default;

                    // utiliza as chaves do objeto de expressões para exibir o texto na tela
                    // Função helper para definir textContent com segurança
                    const setTextContent = (refName, value) => {
                      if (this.$refs[refName]) {
                        this.$refs[refName].textContent = value;
                      }
                    };

                    // Set title with HTML support for line break
                    if (this.$refs['title']) {
                        this.$refs['title'].innerHTML = expressions.title;
                    }
                    // setTextContent('title', expressions.title);
                    setTextContent('presentation', expressions.presentation);
                    setTextContent('experience', expressions.experience);
                    setTextContent('projects_completed', expressions.projects_completed);
                    setTextContent('companies', expressions.companies);
                    setTextContent('about_me', expressions.about_me);
                    setTextContent('who_i_am', expressions.who_i_am);
                    setTextContent('Technologies', expressions.Technologies);
                    setTextContent('title_about_me', expressions.title_about_me);
                    setTextContent('description_about_me', expressions.description_about_me);
                    setTextContent('know_more', expressions.know_more);
                    setTextContent('title_experience', expressions.title_experience);
                    setTextContent('subtitle_experience', expressions.subtitle_experience);
                    setTextContent('profissional_experience', expressions.profissional_experience);
                    setTextContent('title_balancas', expressions.title_balancas);
                    setTextContent('description_balancas', expressions.description_balancas);
                    setTextContent('dates_balancas', expressions.dates_balancas);
                    setTextContent('title_frontkom', expressions.title_frontkom);
                    setTextContent('description_frontkom', expressions.description_frontkom);
                    setTextContent('dates_frontkom', expressions.dates_frontkom);
                    setTextContent('title_netgocio', expressions.title_netgocio);
                    setTextContent('description_netgocio', expressions.description_netgocio);
                    setTextContent('dates_netgocio', expressions.dates_netgocio);
                    setTextContent('services', expressions.services);
                    setTextContent('what_i_do', expressions.what_i_do);
                    setTextContent('front_end', expressions.front_end);
                    setTextContent('backend', expressions.backend);
                    setTextContent('database', expressions.database);
                    setTextContent('dev_ops', expressions.dev_ops);
                    setTextContent('my_projects', expressions.my_projects);
                    setTextContent('recent_work', expressions.recent_work);
                    setTextContent('see_all', expressions.see_all);
                    setTextContent('see_projects', expressions.see_projects);
                    setTextContent('work_together', expressions.work_together);
                });
            }
        },
        mounted() {

            const options = {
            duration: 5, // tempo de duração da animação em segundos
            useEasing: true, // adicionar suavização (aceleração/desaceleração) à animação
            };

            const countup1 = new CountUp(this.$refs.countup1, 0, 4, 0, options); // 0 -> início, 3 -> fim
            countup1.start();

            const countup2 = new CountUp(this.$refs.countup2, 0, 25, 0, options);
            countup2.start();

            const countup3 = new CountUp(this.$refs.countup3, 0, 3, 0, options);
            countup3.start();

            this.loadTranslations();

            // Listen for language changes
            this.handleLanguageChange = () => {
                this.loadTranslations();
            }
            window.addEventListener('languageChanged', this.handleLanguageChange);
    },
    beforeUnmount() {
        // Remove event listener
        if (this.handleLanguageChange) {
            window.removeEventListener('languageChanged', this.handleLanguageChange);
        }
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
    border: 3px solid var(--color-primary);
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
    color: #4facfe;
}
.footer__social-link:hover {
    color: #6ab7ff;
    transform: translateY(-2px);
    transition: all 0.3s ease;
}
.social_links {
justify-content: center;
}

/* About Actions */
.about__actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}


@media screen and (max-width: 768px) {
    .about__actions {
        flex-direction: column;
    }
}

</style>
