<!-- eslint-disable no-unused-vars -->
<template>
    <main class="main home-main">
        <HomeBackground />
        <!--xxxxxxxxxxxx home xxxxxxxxxxxx-->
        <section id="home" class="home">
            <div class="container-wide">
                <div class="d-grid home__wrapper">
                    <div class="home__content">
                        <span class="home__eyebrow" ref="eyebrow">Engineering × Product</span>
                        <h1 class="home__title" ref="title">
                            Jorge Morais<br><span class="home__title-subtitle">Full Stack Developer</span>
                        </h1>
                        <p class="home__description" ref="presentation">
                            Full Stack Developer specializing in React, Vue.js, Node.js, and TypeScript. Experience in high‑performance systems and industrial integration.
                        </p>
                        <div class="home__cta">
                            <a href="/projects" class="btn btn--primary" ref="btn_view_projects">View Projects</a>
                            <a href="/contact" class="btn btn--ghost" ref="btn_lets_talk">Let’s Talk</a>
                        </div>
                        <div class="home__stack">
                            <span>React</span>
                            <span>Vue</span>
                            <span>TypeScript</span>
                            <span>Node</span>
                            <span>PostgreSQL</span>
                            <span>MQTT</span>
                        </div>
                        <div class="home__info">
                            <div class="home__info-wrapper">
                                <p class="home__info-number" ref="countup1">04</p>
                                <h2 class="home__info-title" ref="experience"></h2>
                            </div>
                            <div class="home__info-wrapper">
                                <div class="plus_projects">
                                    <span class="plus_projects__symbol">+</span>
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
                            <picture class="avatar avatar--dark">
                                <source srcset="/avatar.webp" type="image/webp">
                                <img
                                    src="/avatar.jpg"
                                    alt="Jorge Morais"
                                    width="400"
                                    height="400"
                                    decoding="async"
                                    fetchpriority="high"
                                >
                            </picture>
                            <picture class="avatar avatar--light">
                                <source srcset="/avatar_white_3.webp" type="image/webp">
                                <img
                                    src="/avatar_white_3.jpg"
                                    alt="Jorge Morais"
                                    width="400"
                                    height="400"
                                    decoding="async"
                                    fetchpriority="high"
                                >
                            </picture>
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
            <div class="container-wide">
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

                            <div class="cards" :class="{ 'is-open': openCards[0] }" @mouseleave="closeCard(0)">
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
                                <div class="face face2" @click="handleShot($event, 0)">
                                    <div v-for="(s, i) in shots[0]" :key="i" class="bullet-hole" :style="{ left: s.x + '%', top: s.y + '%' }"></div>
                                    <div class="miss-message" v-if="showMissMsg[0]">{{ tryAgainText }}</div>
                                    <svg class="card-target" :class="{ 'is-miss': missCards[0] }" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="20" stroke="currentColor" stroke-width="1.2"/>
                                        <circle cx="30" cy="30" r="12" stroke="currentColor" stroke-width="1"/>
                                        <circle cx="30" cy="30" r="5"  stroke="currentColor" stroke-width="1"/>
                                        <circle cx="30" cy="30" r="2"  fill="currentColor"/>
                                        <line x1="30" y1="8"  x2="30" y2="4"  stroke="currentColor" stroke-width="1"/>
                                        <line x1="30" y1="52" x2="30" y2="56" stroke="currentColor" stroke-width="1"/>
                                        <line x1="8"  y1="30" x2="4"  y2="30" stroke="currentColor" stroke-width="1"/>
                                        <line x1="52" y1="30" x2="56" y2="30" stroke="currentColor" stroke-width="1"/>
                                    </svg>
                                    <h2 class="face_title">Backend</h2>
                                </div>
                            </div>

                            <div class="cards" :class="{ 'is-open': openCards[1] }" @mouseleave="closeCard(1)">
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
                                <div class="face face2" @click="handleShot($event, 1)">
                                    <div v-for="(s, i) in shots[1]" :key="i" class="bullet-hole" :style="{ left: s.x + '%', top: s.y + '%' }"></div>
                                    <div class="miss-message" v-if="showMissMsg[1]">{{ tryAgainText }}</div>
                                    <svg class="card-target" :class="{ 'is-miss': missCards[1] }" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="20" stroke="currentColor" stroke-width="1.2"/>
                                        <circle cx="30" cy="30" r="12" stroke="currentColor" stroke-width="1"/>
                                        <circle cx="30" cy="30" r="5"  stroke="currentColor" stroke-width="1"/>
                                        <circle cx="30" cy="30" r="2"  fill="currentColor"/>
                                        <line x1="30" y1="8"  x2="30" y2="4"  stroke="currentColor" stroke-width="1"/>
                                        <line x1="30" y1="52" x2="30" y2="56" stroke="currentColor" stroke-width="1"/>
                                        <line x1="8"  y1="30" x2="4"  y2="30" stroke="currentColor" stroke-width="1"/>
                                        <line x1="52" y1="30" x2="56" y2="30" stroke="currentColor" stroke-width="1"/>
                                    </svg>
                                    <h2 class="face_title">Frontend</h2>
                                </div>
                            </div>

                            <div class="cards" :class="{ 'is-open': openCards[2] }" @mouseleave="closeCard(2)">
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
                                <div class="face face2" @click="handleShot($event, 2)">
                                    <div v-for="(s, i) in shots[2]" :key="i" class="bullet-hole" :style="{ left: s.x + '%', top: s.y + '%' }"></div>
                                    <div class="miss-message" v-if="showMissMsg[2]">{{ tryAgainText }}</div>
                                    <svg class="card-target" :class="{ 'is-miss': missCards[2] }" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="20" stroke="currentColor" stroke-width="1.2"/>
                                        <circle cx="30" cy="30" r="12" stroke="currentColor" stroke-width="1"/>
                                        <circle cx="30" cy="30" r="5"  stroke="currentColor" stroke-width="1"/>
                                        <circle cx="30" cy="30" r="2"  fill="currentColor"/>
                                        <line x1="30" y1="8"  x2="30" y2="4"  stroke="currentColor" stroke-width="1"/>
                                        <line x1="30" y1="52" x2="30" y2="56" stroke="currentColor" stroke-width="1"/>
                                        <line x1="8"  y1="30" x2="4"  y2="30" stroke="currentColor" stroke-width="1"/>
                                        <line x1="52" y1="30" x2="56" y2="30" stroke="currentColor" stroke-width="1"/>
                                    </svg>
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
            <div class="container-wide">
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
                    <div class="qualification-timeline">
                        <div class="experience-card reveal-item" data-reveal-delay="0">
                            <div class="experience-meta">
                                <h3 class="qualification__title" ref="title_balancas"></h3>
                                <span class="qualification__date" ref="dates_balancas"></span>
                            </div>
                            <div class="experience-stack">
                                <span>C</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>TypeScript</span>
                                <span>MQTT</span>
                                <span>CCTalk</span>
                                <span>ID003</span>
                                <span>Socket.IO</span>
                                <span>MySQL</span>
                            </div>
                            <ul class="qualification__description" ref="description_balancas"></ul>
                        </div>
                        <div class="experience-card reveal-item" data-reveal-delay="150">
                            <div class="experience-meta">
                                <h3 class="qualification__title" ref="title_frontkom"></h3>
                                <span class="qualification__date" ref="dates_frontkom"></span>
                            </div>
                            <div class="experience-stack">
                                <span>React</span>
                                <span>Vue.js</span>
                                <span>Drupal</span>
                                <span>TypeScript</span>
                                <span>Sass</span>
                                <span>Tailwind</span>
                                <span>Figma</span>
                            </div>
                            <ul class="qualification__description" ref="description_frontkom"></ul>
                        </div>
                        <div class="experience-card reveal-item" data-reveal-delay="300">
                            <div class="experience-meta">
                                <h3 class="qualification__title" ref="title_netgocio"></h3>
                                <span class="qualification__date" ref="dates_netgocio"></span>
                            </div>
                            <div class="experience-stack">
                                <span>Vue.js</span>
                                <span>JavaScript</span>
                                <span>PHP</span>
                                <span>MySQL</span>
                                <span>Bootstrap</span>
                                <span>Sass</span>
                            </div>
                            <ul class="qualification__description" ref="description_netgocio"></ul>
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

        <!-- Services section removed per request -->

        <!-- Testimonials -->
        <section id="testimonial" class="section testimonial">
            <div class="container-wide slick_container">
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

    </main>
</template>

<script>
import CountUp from 'countup';
import SlickHome from './SlickHome-modern.vue';
import DownloadCV from './DownloadCV.vue';
import CallToAction from './CallToAction.vue';
import HomeBackground from './HomeBackground.vue';


export default {
        components: {
            SlickHome,
            DownloadCV,
            CallToAction,
            HomeBackground,
        },
        data() {
            return {
                openCards:    [false, false, false],
                missCards:    [false, false, false],
                shots:        [[], [], []],
                showMissMsg:  [false, false, false],
                tryAgainText: '{{ tryAgainText }}',
            };
        },
        methods: {
            handleShot(event, index) {
                if (this.openCards[index]) return;

                const face2  = event.currentTarget;
                const svg    = face2.querySelector('.card-target');
                if (!svg) return;

                // posição do tiro relativa ao face2 (percentagem)
                const f2rect = face2.getBoundingClientRect();
                const shotX  = ((event.clientX - f2rect.left) / f2rect.width  * 100).toFixed(1);
                const shotY  = ((event.clientY - f2rect.top)  / f2rect.height * 100).toFixed(1);

                // distância ao centro do alvo
                const svgRect = svg.getBoundingClientRect();
                const dist = Math.hypot(
                    event.clientX - (svgRect.left + svgRect.width  / 2),
                    event.clientY - (svgRect.top  + svgRect.height / 2)
                );

                if (dist <= 12) {
                    // ACERTO — abre o card e limpa os tiros
                    this.openCards[index] = true;
                    this.shots[index] = [];
                } else {
                    // MISS — buraco do tiro + mensagem
                    this.shots[index].push({ x: shotX, y: shotY });
                    this.missCards[index] = true;
                    this.showMissMsg[index] = true;
                    setTimeout(() => { this.missCards[index]   = false; }, 500);
                    setTimeout(() => { this.showMissMsg[index] = false; }, 1800);
                }
            },
            closeCard(index) {
                this.openCards[index] = false;
            },
            handleDownloadPDF() {
                // Download PDF logic here
                const link = document.createElement('a');
                link.href = '/src/assets/cv/jorge-morais-cv.pdf';
                link.download = 'Jorge-Morais-CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },



            setupScrollEffects() {
                // ── Staggered scroll reveal ──
                const revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const delay = parseInt(entry.target.dataset.revealDelay || 0)
                            setTimeout(() => entry.target.classList.add('is-revealed'), delay)
                            revealObserver.unobserve(entry.target)
                        }
                    })
                }, { threshold: 0.1 })
                document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el))

                // ── Text scramble on section titles ──
                class TextScramble {
                    constructor(el) {
                        this.el = el
                        this.chars = '!<>-_/[]{}=+*?#@&ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                        this.frame = 0
                        this.queue = []
                        this.raf = null
                    }
                    setText(text) {
                        this.queue = text.split('').map((char, i) => ({
                            char,
                            start: Math.floor(i * 5),
                            end: Math.floor(i * 5) + 22,
                            current: ''
                        }))
                        cancelAnimationFrame(this.raf)
                        this.frame = 0
                        this._update()
                    }
                    _update() {
                        let out = '', done = 0
                        for (let i = 0; i < this.queue.length; i++) {
                            const item = this.queue[i]
                            if (this.frame >= item.end) {
                                done++
                                out += item.char === ' ' ? ' ' : item.char
                            } else if (this.frame >= item.start) {
                                if (!item.current || Math.random() < 0.28) {
                                    item.current = this.chars[Math.floor(Math.random() * this.chars.length)]
                                }
                                out += `<span class="scramble-glyph">${item.current}</span>`
                            } else {
                                out += `<span class="scramble-pending">${item.char === ' ' ? '&nbsp;' : item.char}</span>`
                            }
                        }
                        this.el.innerHTML = out
                        if (done < this.queue.length) {
                            this.frame++
                            this.raf = requestAnimationFrame(this._update.bind(this))
                        }
                    }
                }

                const scrambleObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const text = entry.target.textContent.trim()
                            if (text) {
                                new TextScramble(entry.target).setText(text)
                                scrambleObserver.unobserve(entry.target)
                            }
                        }
                    })
                }, { threshold: 0.5 })

                document.querySelectorAll('.section__title').forEach(el => {
                    if (el.textContent.trim()) scrambleObserver.observe(el)
                })
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

                    const setHTML = (refName, value) => {
                      if (this.$refs[refName]) {
                        this.$refs[refName].innerHTML = value;
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
                    setHTML('description_balancas', expressions.description_balancas);
                    setTextContent('dates_balancas', expressions.dates_balancas);
                    setTextContent('title_frontkom', expressions.title_frontkom);
                    setHTML('description_frontkom', expressions.description_frontkom);
                    setTextContent('dates_frontkom', expressions.dates_frontkom);
                    setTextContent('title_netgocio', expressions.title_netgocio);
                    setHTML('description_netgocio', expressions.description_netgocio);
                    setTextContent('dates_netgocio', expressions.dates_netgocio);
                    setTextContent('my_projects', expressions.my_projects);
                    setTextContent('recent_work', expressions.recent_work);
                    setTextContent('see_all', expressions.see_all);
                    setTextContent('work_together', expressions.work_together);
                    setTextContent('eyebrow', expressions.eyebrow);
                    setTextContent('btn_view_projects', expressions.btn_view_projects);
                    setTextContent('btn_lets_talk', expressions.btn_lets_talk);
                    this.tryAgainText = expressions.try_again;
                });
            }
        },
        mounted() {

            const options = {
            duration: 5, // tempo de duração da animação em segundos
            useEasing: true, // adicionar suavização (aceleração/desaceleração) à animação
            };

            const startYear = 2021
            const now = new Date()
            const hasAnniversary = now.getMonth() > 0 || (now.getMonth() === 0 && now.getDate() >= 1)
            const yearsExperience = Math.max(1, now.getFullYear() - startYear - (hasAnniversary ? 0 : 1))
            const countup1 = new CountUp(this.$refs.countup1, 0, yearsExperience, 0, options);
            countup1.start();

            const countup2 = new CountUp(this.$refs.countup2, 0, 25, 0, options);
            countup2.start();

            const countup3 = new CountUp(this.$refs.countup3, 0, 3, 0, options);
            countup3.start();

            this.loadTranslations();
            setTimeout(() => this.setupScrollEffects(), 250);

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
    width: 380px;
    height: 380px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45), 0 0 0 16px rgba(74, 134, 232, 0.08);
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08), transparent 55%);
    transition: transform 0.5s ease-out, box-shadow 0.5s ease-out;
}

.theme-light .portfolio-item {
    border-color: rgba(30, 42, 56, 0.12);
    box-shadow: 0 30px 80px rgba(30, 42, 56, 0.2), 0 0 0 16px rgba(63, 118, 210, 0.1);
    background: radial-gradient(circle at 30% 30%, rgba(63, 118, 210, 0.08), transparent 55%);
}

.theme-light .portfolio-item::before {
    border-color: rgba(63, 118, 210, 0.25);
    box-shadow: 0 0 40px rgba(63, 118, 210, 0.2);
}

.theme-light .portfolio-item::after {
    border-color: rgba(30, 42, 56, 0.08);
}

.portfolio-item::before {
    content: "";
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 1px solid rgba(74, 134, 232, 0.2);
    box-shadow: 0 0 40px rgba(74, 134, 232, 0.18);
    opacity: 0.6;
    z-index: 1;
}

.portfolio-item::after {
    content: "";
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 1;
    pointer-events: none;
}

.avatar {
    position: absolute;
    inset: 0;
    z-index: 2;
    opacity: 1;
    visibility: visible;
    pointer-events: none;
    transition: opacity 320ms ease-in-out, visibility 320ms ease-in-out;
    will-change: opacity;
}

.avatar--light {
    opacity: 0;
    visibility: hidden;
}

.theme-light .avatar--dark {
    opacity: 0;
    visibility: hidden;
}

.theme-light .avatar--light {
    opacity: 1;
    visibility: visible;
}

@media (prefers-reduced-motion: reduce) {
    .avatar {
        transition: none;
    }
}

@media screen and (max-width: 1024px) {
  .portfolio-item {
    width: 320px;
    height: 320px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 12px rgba(74, 134, 232, 0.08);
  }
}
@media screen and (max-width: 374px) {
  .portfolio-item {
    width: 300px;
    height: 300px;
  }
}

@media screen and (max-width: 320px) {
  .portfolio-item {
    width: 220px;
    height: 220px;
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

.plus_projects__symbol {
    font-size: 0.75em;
    line-height: 1;
    margin-right: 0.25rem;
    opacity: 0.85;
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
