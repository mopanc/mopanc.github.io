<!-- eslint-disable no-unused-vars -->
<template>
    <main class="main home-main home-lc">

        <!-- ═══ HERO ═══ -->
        <section id="s-hero" class="hero-section">
            <!-- Interactive constellation background -->
            <HeroCanvas />

            <div class="container-wide hero-inner">
                <div class="hero-split">
                    <!-- Left: text -->
                    <div class="hero-content">
                        <span class="hero-signature reveal-item"><span>jorge</span><span class="hero-signature__sep">·</span><span>morais</span></span>
                        <h1 class="hero-heading reveal-item" ref="title">
                            <span ref="heroText">{{ translations.home_hero_title || 'Full-stack developer across hardware, backend and AI.' }}</span>
                        </h1>
                        <p class="hero-desc reveal-item" ref="presentation">
                            {{ heroDesc }}
                        </p>
                        <div class="hero-actions reveal-item">
                            <a href="/projects" class="btn-lc btn-lc--white">
                                {{ translations.btn_view_projects || 'View Projects' }}
                                <i class="ri-arrow-right-line"></i>
                            </a>
                            <a href="/hire" class="btn-lc btn-lc--outline-white">
                                {{ translations.btn_open_to_roles || 'Open to Roles' }}
                            </a>
                        </div>
                    </div>

                    <!-- Right: photo -->
                    <div class="hero-photo reveal-item">
                        <div class="hero-photo__glow"></div>
                        <div class="hero-photo__frame">
                            <img src="/avatar_white_3.webp" alt="Jorge Morais" width="400" height="480" />
                        </div>
                    </div>
                </div>

            </div>

            <div class="hero-scroll-hint">
                <span>Scroll</span>
                <div class="hero-scroll-line"></div>
            </div>

            <!-- Skills strip — positioned over the hero/content boundary line -->
            <div class="skills-strip reveal-item">
                <div class="skills-strip__items">
                    <span class="skills-strip__tag" v-for="skill in heroSkills" :key="skill">{{ skill }}</span>
                </div>
            </div>

        </section>

        <!-- Glow line at hero boundary -->
        <div class="page-body" ref="pageBody">

        <!-- Section Nav (fixed, toggled by JS) -->
        <SectionNav :sections="spySections" />

        <!-- ═══ ABOUT ═══ -->
        <section id="s-about" class="lc-section lc-section--dark about-section">
            <div class="ambient-orbs" aria-hidden="true">
                <div class="ambient-orb ambient-orb--1"></div>
                <div class="ambient-orb ambient-orb--2"></div>
            </div>
            <HeroCanvas />
            <div class="container-wide">
                <div class="section-eyebrow">
                    <span class="eyebrow-tag">{{ translations.home_eyebrow_about || 'about' }}</span>
                </div>

                <!-- Text reveal — now inside about, before heading -->
                <h2 class="text-reveal-heading reveal-item" ref="textReveal">
                    {{ translations.home_about_reveal || 'Some days, memory byte by byte. Other days, React dashboards. Embedded C to enterprise TypeScript. Both ends of the same stack.' }}
                </h2>

                <div class="about-layout reveal-item">
                    <!-- Left: text -->
                    <div class="about-layout__text">
                        <h3 class="lc-heading about-heading">
                            {{ translations.who_i_am || 'Who I am' }}
                        </h3>
                        <div class="about-text">
                            <p>{{ translations.home_about_p1 || 'I started with PHP. Today the work spans the full stack: C firmware on payment machines and Raspberry Pi, MQTT and CCTalk telemetry, React/Vue/Node.js dashboards, and LLMs integrated through RAG, MCP and agents.' }}</p>
                            <p>{{ translations.home_about_p2 || "Industrial systems are getting language models. Factory floors, payment machines, IoT fleets. That seam, between hardware that runs and models that reason, is where the work is moving." }}</p>
                        </div>
                    </div>
                    <!-- Right: stats -->
                    <div class="about-layout__stats">
                        <div class="about-stat">
                            <span class="about-stat__number" ref="countup1">05</span>
                            <span class="about-stat__label" ref="experience">{{ translations.home_stat_years || 'Years in Tech' }}</span>
                        </div>
                        <div class="about-stat">
                            <span class="about-stat__number"><span class="about-stat__plus">+</span><span ref="countup2">25</span></span>
                            <span class="about-stat__label" ref="projects_completed">{{ translations.home_stat_projects || 'Projects Shipped' }}</span>
                        </div>
                        <div class="about-stat">
                            <span class="about-stat__number" ref="countup3">03</span>
                            <span class="about-stat__label" ref="companies">{{ translations.home_stat_companies || 'Companies' }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══ SERVICES ═══ -->
        <section id="s-services" class="lc-section lc-section--dark svc-section">
            <div class="ambient-orbs" aria-hidden="true">
                <div class="ambient-orb ambient-orb--3"></div>
                <div class="ambient-orb ambient-orb--4"></div>
            </div>
            <HeroCanvas />
            <div class="container-wide">
                <div class="section-eyebrow">
                    <span class="eyebrow-tag">{{ translations.home_eyebrow_services || 'services' }}</span>
                </div>
                <h2 class="lc-heading services-heading reveal-item">
                    {{ translations.home_services_heading || 'What I build.' }}
                </h2>
            </div>

            <!-- Each area as a clean block: text left, image right bleeding -->
            <div
                v-for="(service, i) in services"
                :key="i"
                class="svc-block reveal-item"
                :data-reveal-delay="i * 80"
            >
                <div class="svc-block__inner">
                    <!-- Text side -->
                    <div class="svc-block__text">
                        <header class="svc-block__meta">
                            <div class="svc-block__icon" aria-hidden="true">
                                <i :class="service.icon"></i>
                            </div>
                            <div class="svc-block__meta-text">
                                <span class="svc-block__index">{{ String(i + 1).padStart(2, '0') }} / 0{{ services.length }}</span>
                                <span class="svc-block__category">{{ isPt ? service.categoryPt : service.category }}</span>
                            </div>
                        </header>

                        <h3 class="svc-block__title">
                            {{ isPt ? service.titlePt : service.title }}
                            <a v-if="service.link" :href="service.link" target="_blank" rel="noopener noreferrer" class="svc-block__link">
                                {{ service.linkText }} <i class="ri-arrow-right-up-line"></i>
                            </a>
                        </h3>

                        <p class="svc-block__desc">{{ isPt ? service.descPt : service.desc }}</p>

                        <div class="svc-block__stack">
                            <div class="svc-block__stack-header">
                                <span class="svc-block__stack-label">Stack</span>
                                <span class="svc-block__stack-line" aria-hidden="true"></span>
                            </div>
                            <ul class="svc-block__techs">
                                <li v-for="tech in service.techs" :key="tech">{{ tech }}</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Image side — bleeds right -->
                    <div class="svc-block__img-wrap">
                        <div class="svc-block__img-glow"></div>
                        <div class="svc-block__img">
                            <img :src="service.image" :alt="isPt ? service.titlePt : service.title" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══ TECH STACK — inline flow ═══ -->
        <section id="s-stack" class="lc-section lc-section--light stack-section">
            <div class="container-wide">
                <div class="section-eyebrow section-eyebrow--dark">
                    <span class="eyebrow-tag eyebrow-tag--dark">stack</span>
                </div>
                <div class="stack-header reveal-item">
                    <h2 class="lc-heading lc-heading--dark">{{ translations.home_stack_heading || 'Technologies I work with' }}</h2>
                </div>
            </div>
            <!-- Marquee row 1 — scrolls left -->
            <div class="marquee reveal-item">
                <div class="marquee__track marquee__track--left">
                    <div class="marquee__content" v-for="n in 2" :key="'r1-'+n">
                        <span class="marquee__pill" v-for="tech in stackRow1" :key="tech.name+n">
                            <i :class="tech.icon"></i>
                            {{ tech.name }}
                        </span>
                    </div>
                </div>
            </div>
            <!-- Marquee row 2 — scrolls right -->
            <div class="marquee reveal-item" data-reveal-delay="150">
                <div class="marquee__track marquee__track--right">
                    <div class="marquee__content" v-for="n in 2" :key="'r2-'+n">
                        <span class="marquee__pill" v-for="tech in stackRow2" :key="tech.name+n">
                            <i :class="tech.icon"></i>
                            {{ tech.name }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══ FEATURED PROJECTS ═══ -->
        <section id="s-work" class="lc-section lc-section--light work-section">
            <div class="container-wide">
                <div class="section-eyebrow section-eyebrow--dark">
                    <span class="eyebrow-tag eyebrow-tag--dark">{{ translations.home_eyebrow_projects || 'projects' }}</span>
                </div>
                <h2 class="lc-heading lc-heading--dark reveal-item" style="margin-bottom: 2rem; max-width: 500px;">
                    {{ translations.home_projects_heading || 'Selected work' }}
                </h2>
            </div>

            <!-- Two projects side by side: image top, text below -->
            <div class="container-wide">
                <div class="work-gallery">
                    <a
                        v-for="(project, index) in featuredProjects"
                        :key="project.id || index"
                        :href="project.caseStudySlug ? `/projects/${project.caseStudySlug}` : '/projects'"
                        class="work-item reveal-item"
                        :data-reveal-delay="index * 150"
                    >
                        <div class="work-item__img">
                            <img
                                v-if="project.isPublic || isAccessValid"
                                :src="project.imageSrc"
                                :alt="project.imageAlt"
                                loading="lazy"
                            />
                            <div v-else class="work-item__locked">
                                <i class="ri-lock-line"></i>
                            </div>
                        </div>
                        <div class="work-item__info">
                            <span class="work-item__tag">{{ project.category || 'Project' }}</span>
                            <h3 class="work-item__title">{{ project.projectName }}</h3>
                            <p class="work-item__desc" v-if="project.description">{{ project.description }}</p>
                            <div class="work-item__techs">
                                <span v-for="tech in (project.technologies || []).slice(0, 4)" :key="tech.name">{{ tech.name }}</span>
                            </div>
                            <span class="work-item__cta">
                                {{ translations.home_view_project || 'View project' }}
                                <i class="ri-arrow-right-line"></i>
                            </span>
                        </div>
                    </a>
                </div>

                <div style="margin-top: 3rem;">
                    <a href="/projects" class="btn-lc btn-lc--outline-dark">
                        {{ translations.home_all_projects || 'All Projects' }}
                        <i class="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- ═══ TERMINAL ═══ -->
        <section v-if="false" id="s-terminal" class="lc-section lc-section--dark">
            <div class="container-wide">
                <div class="terminal-window">
                    <div class="terminal-window__bar">
                        <span class="terminal-dot terminal-dot--red"></span>
                        <span class="terminal-dot terminal-dot--yellow"></span>
                        <span class="terminal-dot terminal-dot--green"></span>
                        <span class="terminal-window__title">~/jorge-morais</span>
                    </div>
                    <div class="terminal-window__body">
                        <div class="terminal-line">
                            <span class="t-prompt">$</span>
                            <span class="t-text">{{ translations.home_terminal_msg || 'Some projects require authentication.' }}</span>
                        </div>
                        <div class="terminal-line">
                            <span class="t-prompt">$</span>
                            <span class="t-text">authenticate --access-code <span class="t-redacted">████████</span></span>
                        </div>
                        <div class="terminal-line">
                            <span class="t-prompt">$</span>
                            <span class="t-text t-muted">Type 'help' for available commands<span class="t-cursor">_</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══ BLOG ═══ -->
        <section v-if="latestArticle" id="s-blog" class="lc-section lc-section--dark blog-section">
          <HeroCanvas />
          <div class="container-wide">
            <div class="section-eyebrow">
              <span class="eyebrow-tag">blog</span>
            </div>

            <div class="blog-latest">
              <div class="blog-latest__meta">
                <time>{{ formatArticleDate(latestArticle.date) }}</time>
                <span>&middot;</span>
                <span>{{ isPt ? latestArticle.readTimePt : latestArticle.readTime }}</span>
              </div>
              <h2 class="blog-latest__title">
                <a :href="`/blog/${latestArticle.slug}`">{{ isPt ? latestArticle.titlePt : latestArticle.title }}</a>
              </h2>
              <p class="blog-latest__excerpt">{{ isPt ? latestArticle.excerptPt : latestArticle.excerpt }}</p>
              <div class="blog-latest__actions">
                <a :href="`/blog/${latestArticle.slug}`" class="blog-latest__read">
                  {{ translations.home_blog_read || 'Read article' }}
                  <i class="ri-arrow-right-line"></i>
                </a>
                <a href="/blog" class="blog-latest__all">
                  {{ translations.home_blog_all || 'View all posts' }}
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- ═══ CTA ═══ -->
        <section id="s-contact" class="lc-section lc-section--light lc-section--cta">
            <div class="container-wide">
                <div class="cta-center reveal-item">
                    <h2 class="cta-center__heading">
                        {{ translations.home_cta_heading_prefix || 'Need a system that' }} <em>{{ translations.home_cta_heading_em || 'works' }}</em>?
                    </h2>
                    <p class="cta-center__desc">{{ ctaDesc }}</p>
                    <div class="cta-center__actions">
                        <a href="/contact" class="btn-lc btn-lc--dark btn-lc--lg">
                            <i class="ri-message-line"></i>
                            {{ ctaBtn }}
                        </a>
                        <a href="/projects" class="btn-lc btn-lc--outline-dark btn-lc--lg">
                            <i class="ri-folder-line"></i>
                            {{ ctaBtn2 }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        </div><!-- .page-body -->

    </main>
</template>

<script>
import CountUp from 'countup';
import SectionNav from './SectionNav.vue';
import HeroCanvas from './HeroCanvas.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { computed, onMounted, onUnmounted } from 'vue';
import { useArticles } from '../composables/useArticles.js';
import { useProjects } from '../composables/useProjects.js';
import { useAccessControlSimple } from '../composables/useAccessControlSimple';
import { useLanguage } from '../composables/useLanguage.js';

gsap.registerPlugin(ScrollTrigger);

export default {
    components: { SectionNav, HeroCanvas },
    setup() {
        const { articles } = useArticles()
        const { projects, loadProjects } = useProjects()
        const { isAccessValid } = useAccessControlSimple()
        const { translations, selectedLanguage, initialize } = useLanguage()

        const isPt = computed(() => selectedLanguage.value === 'pt')

        const startYear = 2020
        const now = new Date()
        const yearsExp = Math.max(1, now.getFullYear() - startYear - (now.getMonth() > 0 ? 0 : 1))

        const heroSkills = ['React', 'Vue', 'Node.js', 'TypeScript', 'LLMs', 'MCP', 'C', 'IoT']


        const services = [
            {
                title: 'Industrial & Embedded', titlePt: 'Industrial & Embarcados',
                category: 'Embedded Systems', categoryPt: 'Sistemas Embarcados',
                icon: 'ri-cpu-line',
                desc: 'Payment-machine APIs in C with CCTalk and ID003. IMX8 image builds, PCB flashing tools, Raspberry Pi software, MQTT feeds. Zero memory leaks, verified with Valgrind.',
                descPt: 'APIs de máquinas de pagamento em C com CCTalk e ID003. Builds de imagens IMX8, ferramentas de flash de PCBs, software em Raspberry Pi, feeds MQTT. Zero memory leaks, verificado com Valgrind.',
                techs: ['C', 'MQTT', 'CCTalk', 'Raspberry Pi', 'Linux', 'Valgrind'],
                image: '/industrial.png',
            },
            {
                title: 'Enterprise Platforms', titlePt: 'Plataformas Enterprise',
                category: 'Backend & Platforms', categoryPt: 'Backend & Plataformas',
                icon: 'ri-stack-line',
                desc: 'Multi-tenant business platforms with real-time dashboards, RBAC/IAM, multi-location operations. Data pipelines processing 900k+ POS documents. Memory optimization from 3GB to 850MB.',
                descPt: 'Plataformas multi-tenant com dashboards real-time, RBAC/IAM, operações multi-loja. Pipelines de dados a processar 900k+ documentos POS. Otimização de memória de 3GB para 850MB.',
                techs: ['React', 'Node.js', 'TypeScript', 'Socket.IO', 'SQL Server', 'TypeORM'],
                image: '/enterprise.png',
            },
            {
                title: 'AI Systems', titlePt: 'Sistemas de IA',
                category: 'AI & LLMs', categoryPt: 'IA & LLMs',
                icon: 'ri-robot-line',
                desc: 'RAG platforms with vector search, embeddings, and product-based chat with images and video. Autonomous trading bots on Binance futures, 24/7, AI-driven decisions controllable via Telegram. Author of depguard, an open-source MCP server.',
                descPt: 'Plataformas RAG com vector search, embeddings e chat baseado em produto com imagens e vídeo. Bots de trading autónomos em futuros Binance, 24/7, decisão por IA controlável via Telegram. Autor do depguard, servidor MCP open-source.',
                techs: ['Python', 'LangChain', 'Embeddings', 'MCP', 'Telegram API'],
                link: 'https://depguard.dev/',
                linkText: 'depguard.dev',
                image: '/ai-1.png',
            },
            {
                title: 'Web & SaaS', titlePt: 'Web & SaaS',
                category: 'Web & Product', categoryPt: 'Web & Produto',
                icon: 'ri-window-line',
                desc: 'SaaS platforms in React, Next.js, Vue and Angular. Multi-tenant architecture, B2B/B2C e-commerce, payment integrations. WCAG AA compliance on government projects.',
                descPt: 'Plataformas SaaS em React, Next.js, Vue e Angular. Arquitetura multi-tenant, e-commerce B2B/B2C, integrações de pagamento. Conformidade WCAG AA em projetos governamentais.',
                techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'Vite', 'WCAG AA'],
                image: '/workora-home.webp',
            }
        ]

        // Row 1: Frontend, Backend, Languages
        const stackRow1 = [
            { name: 'React', icon: 'devicon-react-original' },
            { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
            { name: 'Next.js', icon: 'devicon-nextjs-plain' },
            { name: 'Angular', icon: 'devicon-angularjs-plain' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
            { name: 'Express', icon: 'devicon-express-original' },
            { name: 'Python', icon: 'devicon-python-plain' },
            { name: 'C', icon: 'devicon-c-plain' },
            { name: 'PHP', icon: 'devicon-php-plain' },
        ]
        // Row 2: Databases, DevOps, IoT, Tools
        const stackRow2 = [
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
            { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain' },
            { name: 'MySQL', icon: 'devicon-mysql-plain' },
            { name: 'Firebase', icon: 'devicon-firebase-plain' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Linux', icon: 'devicon-linux-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
            { name: 'Raspberry Pi', icon: 'devicon-raspberrypi-line' },
            { name: 'MQTT', icon: 'ri-wifi-line' },
            { name: 'Socket.IO', icon: 'ri-broadcast-line' },
            { name: 'Telegram API', icon: 'ri-telegram-line' },
            { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
        ]

        const spySections = computed(() => {
            const base = [
                { id: 's-hero', label: 'Intro' },
                { id: 's-about', label: translations.home_nav_about || 'About' },
                { id: 's-services', label: translations.home_nav_services || 'Services' },
                { id: 's-stack', label: 'Stack' },
                { id: 's-work', label: translations.home_nav_work || 'Work' },
            ]
            if (latestArticle.value) base.push({ id: 's-blog', label: 'Blog' })
            base.push({ id: 's-contact', label: translations.home_nav_contact || 'Contact' })
            return base
        })

        const heroDesc = computed(() => {
            const template = translations.home_hero_desc
                || 'Senior Full Stack Developer with {years}+ years building enterprise systems, payment APIs in C, React/Node.js platforms, and industrial IoT integrations.'
            return template.replace('{years}', yearsExp)
        })
        const ctaDesc = computed(() => translations.home_cta_desc
            || 'From concept to production, I build robust enterprise systems, performant APIs, and hardware integrations. Available for remote projects and full-time opportunities.'
        )
        const ctaBtn = computed(() => translations.home_cta_btn || 'Get in Touch')
        const ctaBtn2 = computed(() => translations.btn_view_projects || 'View Projects')

        onMounted(async () => {
            await initialize()
            loadProjects(selectedLanguage.value)
        })

        const featuredProjects = computed(() =>
            projects.value.filter(p => p.featured && p.isPublic).slice(0, 3)
        )

        const latestArticle = computed(() =>
            articles.value.filter(a => a.status === 'published')
                .sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null
        )

        const formatArticleDate = (dateStr) => {
            if (!dateStr) return ''
            return new Date(dateStr).toLocaleDateString(isPt.value ? 'pt-PT' : 'en-GB', {
                day: 'numeric', month: 'long', year: 'numeric'
            })
        }

        const onLangChange = () => {
            loadProjects(selectedLanguage.value)
        }
        onMounted(() => window.addEventListener('languageChanged', onLangChange))
        onUnmounted(() => window.removeEventListener('languageChanged', onLangChange))

        // 3D tilt effect for cards
        const tiltEnter = (e) => {
            const el = e.currentTarget
            el.style.transition = 'transform 0.1s ease'
        }
        const tiltMove = (e) => {
            const el = e.currentTarget
            const rect = el.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = ((y - centerY) / centerY) * -6
            const rotateY = ((x - centerX) / centerX) * 6
            el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
        }
        const tiltLeave = (e) => {
            const el = e.currentTarget
            el.style.transition = 'transform 0.5s ease'
            el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'
        }

        return {
            translations, isPt, latestArticle, formatArticleDate, featuredProjects,
            isAccessValid, spySections, heroSkills, yearsExp, services, stackRow1, stackRow2,
            heroDesc, ctaDesc, ctaBtn, ctaBtn2,
            tiltEnter, tiltMove, tiltLeave
        }
    },

    methods: {
        setupScrollEffects() {
            // Idempotent — create observer once, then re-observe any newly-added .reveal-item
            // elements. Async-rendered sections (blog, featured projects) need this re-run
            // when their data arrives after the initial setup.
            if (!this._revealObserver) {
                this._revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const delay = parseInt(entry.target.dataset.revealDelay || 0)
                            setTimeout(() => entry.target.classList.add('is-revealed'), delay)
                            this._revealObserver.unobserve(entry.target)
                        }
                    })
                }, { threshold: 0.1 })
            }
            document.querySelectorAll('.reveal-item:not(.is-revealed)').forEach(el => {
                this._revealObserver.observe(el)
            })
        },

        setupHeroFadeOut() {
            const el = this.$refs.heroText
            if (!el) return
            this._heroSplit = new SplitType(el, { types: 'words' })
            const words = this._heroSplit.words
            if (!words?.length) return
            gsap.set(words, { color: 'rgb(255, 255, 255)' })
            gsap.timeline({
                scrollTrigger: { trigger: el, start: 'top top+=40%', end: 'bottom top+=5%', scrub: 1 }
            }).to(words, {
                keyframes: [
                    { color: 'rgb(127, 200, 255)', duration: 0.12 },
                    { color: 'rgb(30, 50, 70)', duration: 0.88 },
                ],
                stagger: 0.04, ease: 'none',
            })
        },

        setupTextReveal() {
            const el = this.$refs.textReveal
            if (!el) return
            this._splitInstance = new SplitType(el, { types: 'words' })
            const words = this._splitInstance.words
            if (!words?.length) return
            gsap.set(words, { color: 'rgb(30, 50, 70)' })
            gsap.timeline({
                scrollTrigger: { trigger: el, start: 'top bottom-=5%', end: 'center center-=5%', scrub: 1 }
            }).to(words, {
                keyframes: [
                    { color: 'rgb(255, 255, 255)', duration: 0.15 },
                    { color: 'rgb(127, 200, 255)', duration: 0.85 },
                ],
                stagger: 0.06, ease: 'none',
            })
        },

        loadTranslations() {
            const selectedLanguage = localStorage.getItem('selectedLanguage') || "en"
            import(`../languages/${selectedLanguage}.js`).then((module) => {
                const exp = module.default
                const set = (ref, val) => { if (this.$refs[ref]) this.$refs[ref].textContent = val }
                set('experience', exp.experience)
                set('projects_completed', exp.projects_completed)
                set('companies', exp.companies)
            })
        }
    },

    mounted() {
        const opts = { duration: 5, useEasing: true }

        new CountUp(this.$refs.countup1, 0, this.yearsExp, 0, opts).start()
        new CountUp(this.$refs.countup2, 0, 25, 0, opts).start()
        new CountUp(this.$refs.countup3, 0, 3, 0, opts).start()

        this.loadTranslations()
        setTimeout(() => this.setupScrollEffects(), 250)
        setTimeout(() => {
            this.setupHeroFadeOut()
            this.setupTextReveal()
            // Refresh ScrollTrigger after all animations are set up
            setTimeout(() => ScrollTrigger.refresh(), 500)
        }, 400)

        this.handleLanguageChange = () => this.loadTranslations()
        window.addEventListener('languageChanged', this.handleLanguageChange)
    },

    watch: {
        // Re-observe newly-rendered .reveal-item elements when async data arrives.
        latestArticle() {
            this.$nextTick(() => this.setupScrollEffects())
        },
        featuredProjects() {
            this.$nextTick(() => this.setupScrollEffects())
        }
    },

    beforeUnmount() {
        if (this.handleLanguageChange) window.removeEventListener('languageChanged', this.handleLanguageChange)
        ScrollTrigger.getAll().forEach(st => st.kill())
        if (this._splitInstance) this._splitInstance.revert()
        if (this._heroSplit) this._heroSplit.revert()
        if (this._revealObserver) this._revealObserver.disconnect()
    }
}
</script>

<style scoped>
/* ═══ DESIGN SYSTEM ═══ */
.home-lc {
    overflow: visible !important;
    font-size: 16px; /* reset from html 62.5% — 1rem = 16px inside homepage */
    --lc-dark: #0a0d14;
    --lc-dark-elevated: #111827;
    --lc-border-dark: rgba(255, 255, 255, 0.08);
    --lc-text-light: #c8d8f0;
    --lc-text-white: #ffffff;
    --lc-accent: #7eb8f7;
    --lc-accent-glow: rgba(126, 184, 247, 0.15);
    --lc-muted: #5a6a82;
    --lc-light: #f0f4fa;
    --lc-text-dark: #0a0d14;
    --lc-text-dark-sub: #3b4a60;
    --lc-border-light: rgba(10, 13, 20, 0.08);
    background: var(--lc-dark);
    color: var(--lc-text-light);
    min-height: 100vh;
}

.lc-section { padding: 7rem 0; }
.lc-section--dark { background: var(--lc-dark); color: var(--lc-text-light); }
.lc-section--light { background: var(--lc-light); color: var(--lc-text-dark); }

.section-eyebrow { margin-bottom: 2rem; }

.eyebrow-tag {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-family: var(--ff-mono);
    font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--lc-accent); padding: 0.3rem 0.9rem;
    border: 1px solid rgba(126, 184, 247, 0.25); border-radius: 4px;
    background: rgba(126, 184, 247, 0.06);
}

.eyebrow-tag i {
    font-size: 1em;
    color: #ffffff;
    background: var(--lc-accent);
    width: 20px; height: 20px;
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: 4px;
    font-size: 11px;
}
.eyebrow-tag--dark { color: var(--lc-text-dark); border-color: var(--lc-border-light); background: rgba(10, 13, 20, 0.04); }
.eyebrow-tag--dark i { background: var(--lc-text-dark); }

.lc-heading { font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; color: var(--lc-text-white); letter-spacing: -0.03em; line-height: 1.15; }
.lc-heading--dark { color: var(--lc-text-dark); }
.lc-body { font-size: 1.05rem; line-height: 1.7; color: var(--lc-text-light); }
.lc-body--dark { color: var(--lc-text-dark-sub); }

/* ═══ BUTTONS ═══ */
.btn-lc { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.8rem; font-size: 0.9rem; font-weight: 500; font-family: inherit; line-height: 1; border: 1px solid transparent; border-radius: 8px; cursor: pointer; text-decoration: none; white-space: nowrap; transition: all 0.25s ease; }
.btn-lc i { font-size: 1em; transition: transform 0.2s ease; }
.btn-lc:hover i { transform: translateX(3px); }
.btn-lc--white { background: #fff; color: var(--lc-dark); border-color: #fff; }
.btn-lc--white:hover { background: #e8ecf2; transform: translateY(-1px); }
.btn-lc--outline-white { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.2); }
.btn-lc--outline-white:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }
.btn-lc--dark { background: var(--lc-dark); color: #fff; border-color: var(--lc-dark); }
.btn-lc--dark:hover { background: #1a2332; transform: translateY(-1px); }
.btn-lc--outline-dark { background: transparent; color: var(--lc-dark); border: 1px solid var(--lc-border-light); }
.btn-lc--outline-dark:hover { border-color: var(--lc-dark); background: rgba(10,13,20,0.04); }
.btn-lc--ghost { background: transparent; color: var(--lc-text-white); border: 1px solid var(--lc-border-dark); }
.btn-lc--ghost:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); }
.btn-lc--lg { padding: 1rem 2.2rem; font-size: 0.95rem; }

/* ═══ HERO ═══ */
.hero-section { min-height: 100vh; display: flex; align-items: center; position: relative; background: var(--lc-dark); padding: 0 0 8rem; overflow: hidden; }
.hero-section::before {
    content: '';
    position: absolute;
    inset: -10%;
    z-index: 0;
    pointer-events: none;
    background:
        radial-gradient(ellipse 55% 40% at 15% 25%, rgba(59, 111, 212, 0.22), transparent 65%),
        radial-gradient(ellipse 50% 55% at 85% 70%, rgba(126, 184, 247, 0.16), transparent 65%),
        radial-gradient(ellipse 65% 30% at 55% 95%, rgba(92, 147, 189, 0.12), transparent 70%),
        radial-gradient(ellipse 40% 50% at 70% 20%, rgba(126, 184, 247, 0.10), transparent 70%);
    filter: blur(40px);
    animation: meshDrift 28s ease-in-out infinite;
    opacity: 0.9;
}
@keyframes meshDrift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%      { transform: translate(2%, -1.5%) scale(1.03); }
    66%      { transform: translate(-1.5%, 1%) scale(0.98); }
}
@media (prefers-reduced-motion: reduce) {
    .hero-section::before { animation: none; }
}
.hero-inner { display: flex; flex-direction: column; gap: 4rem; position: relative; z-index: 2; }

.hero-split {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 3rem;
    align-items: center;
}

.hero-content { max-width: 700px; }

/* Signature — jorge · morais wordmark */
.hero-signature {
    display: inline-flex;
    align-items: baseline;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 600;
    color: var(--lc-text-light);
    margin-bottom: 1.2rem;
    letter-spacing: -0.02em;
    transition: color 0.4s ease;
    cursor: default;
}
.hero-signature__sep {
    color: var(--lc-accent);
    margin: 0 0.32em;
    font-weight: 500;
}
.hero-signature.is-revealed {
    animation: signatureReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}
.hero-signature:hover {
    color: #ffffff;
}
.hero-signature:hover .hero-signature__sep {
    color: #a8d0ff;
}
@keyframes signatureReveal {
    0%   { filter: blur(8px); opacity: 0; transform: translateY(8px); }
    100% { filter: blur(0); opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
    .hero-signature.is-revealed { animation: none; }
}

/* Gradient mesh orbs */
.hero-mesh { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
.hero-mesh__orb { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.12; }
.hero-mesh__orb--1 { width: 600px; height: 600px; background: #3b6fd4; top: -10%; right: -5%; animation: orbFloat1 20s ease-in-out infinite; }
.hero-mesh__orb--2 { width: 400px; height: 400px; background: #7eb8f7; bottom: 10%; left: 20%; animation: orbFloat2 25s ease-in-out infinite; }
.hero-mesh__orb--3 { width: 300px; height: 300px; background: #5c93bd; top: 40%; right: 30%; animation: orbFloat3 18s ease-in-out infinite; }

/* ═══ HERO PHOTO ═══ */
.hero-photo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.hero-photo__glow {
    position: absolute;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(126,184,247,0.12), rgba(59,111,212,0.06) 40%, transparent 70%);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: photoGlow 6s ease-in-out infinite;
}

@keyframes photoGlow {
    0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
}

.hero-photo__frame {
    position: relative;
    width: 300px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(126,184,247,0.15);
    box-shadow: 0 8px 40px rgba(0,0,0,0.3), 0 0 60px rgba(126,184,247,0.06);
}

.hero-photo__frame img {
    width: 100%; height: auto; display: block;
    filter: grayscale(1) brightness(0.9);
    transition: filter 0.6s ease;
}

.hero-photo:hover .hero-photo__frame img {
    filter: grayscale(0) brightness(1);
}

.hero-photo:hover .hero-photo__frame {
    border-color: rgba(126,184,247,0.3);
    box-shadow: 0 12px 50px rgba(0,0,0,0.4), 0 0 80px rgba(126,184,247,0.1);
}
.hero-heading { font-size: clamp(3rem, 7vw, 6rem); font-weight: 700; letter-spacing: -0.035em; line-height: 1.05; color: var(--lc-text-white); margin-bottom: 1.8rem; }
.hero-heading :deep(.word) { display: inline-block; }
.hero-desc { font-size: clamp(1rem, 1.5vw, 1.15rem); color: var(--lc-text-light); line-height: 1.7; max-width: 560px; margin-bottom: 2.5rem; font-family: var(--ff-mono); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; }


@keyframes orbFloat1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-40px, 30px); } }
@keyframes orbFloat2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, -40px); } }
@keyframes orbFloat3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-20px, -25px); } }

/* Skills strip — sits on top of the hero/content boundary line */
.skills-strip {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(50%);
    z-index: 15;
    padding: 0 2rem;
}
.skills-strip__items { display: flex; gap: 1rem; flex-wrap: wrap; padding-left: 5%; }
.skills-strip__tag { font-family: var(--ff-mono); font-size: 0.8rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--lc-text-light); background: var(--lc-dark); padding: 0.6rem 1.5rem; border: 1px solid rgba(126,184,247,0.15); border-radius: 100px; transition: all 0.3s ease; }
.skills-strip__tag:hover { color: var(--lc-accent); border-color: rgba(126,184,247,0.4); background: rgba(126,184,247,0.08); box-shadow: 0 0 20px rgba(126,184,247,0.08); }

/* Scroll hint */
.hero-scroll-hint { position: absolute; right: 3rem; bottom: 3rem; display: flex; flex-direction: column; align-items: center; gap: 0.6rem; }
.hero-scroll-hint span { font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--lc-muted); writing-mode: vertical-rl; }
.hero-scroll-line { width: 1px; height: 50px; background: var(--lc-border-dark); position: relative; overflow: hidden; }
.hero-scroll-line::after { content: ''; position: absolute; top: -100%; left: 0; width: 100%; height: 100%; background: var(--lc-accent); animation: scrollPulse 2.5s ease-in-out infinite; }
@keyframes scrollPulse { 0% { top: -100%; } 50% { top: 100%; } 100% { top: 100%; } }

/* ═══ CONTENT OFFSET (room for SectionNav on left) ═══ */
@media screen and (min-width: 1281px) {
    .page-body :deep(.container-wide) {
        margin-left: 220px;
        margin-right: auto;
        width: calc(100% - 260px);
    }
}

/* ═══ PAGE BODY ═══ */
.page-body {
    position: relative;
}

/* Horizontal glow line at hero/content boundary */
.page-body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    z-index: 10;
    background: linear-gradient(
        90deg,
        rgba(126, 184, 247, 0.7) 0%,
        rgba(92, 147, 189, 0.35) 25%,
        rgba(48, 78, 100, 0.1) 60%,
        transparent 100%
    );
}

.page-body::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 30%;
    height: 21px;
    z-index: 10;
    background: radial-gradient(
        ellipse at 8% 50%,
        rgba(126, 184, 247, 0.22) 0%,
        rgba(126, 184, 247, 0.06) 40%,
        transparent 80%
    );
    filter: blur(3px);
    pointer-events: none;
}

/* ═══ AMBIENT ORBS (reusable across sections) ═══ */
.ambient-orbs { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
.ambient-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.07; }
.ambient-orb--1 { width: 500px; height: 500px; background: #7eb8f7; top: 10%; right: 10%; animation: orbFloat2 22s ease-in-out infinite; }
.ambient-orb--2 { width: 350px; height: 350px; background: #3b6fd4; bottom: 15%; left: 5%; animation: orbFloat3 28s ease-in-out infinite; }
.ambient-orb--3 { width: 450px; height: 450px; background: #5c93bd; top: 20%; left: 15%; animation: orbFloat1 24s ease-in-out infinite; }
.ambient-orb--4 { width: 400px; height: 400px; background: #7eb8f7; bottom: 10%; right: -5%; animation: orbFloat2 20s ease-in-out infinite; }

.about-section, .svc-section { position: relative; }
.about-section .container-wide, .svc-section .container-wide, .blog-section .container-wide { position: relative; z-index: 1; }

/* ═══ ABOUT ═══ */
.about-section .container-wide {
    max-width: none;
}

/* About layout: text left, stats right */
.about-layout {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 4rem;
    align-items: start;
}

.about-heading {
    margin-bottom: 1.5rem;
    color: #ffffff;
}

.about-text {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.about-text p {
    font-size: 17px;
    line-height: 1.8;
    color: #ffffff;
}

/* Stats — vertical stack on the right */
.about-layout__stats {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-top: 0.5rem;
    border-left: 1px solid rgba(92, 147, 189, 0.3);
    padding-left: 2rem;
}

.about-stat {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.about-stat__number {
    font-size: 36px;
    font-weight: 700;
    font-family: var(--ff-mono);
    color: var(--lc-text-white);
    letter-spacing: -0.03em;
    line-height: 1;
}

.about-stat__plus {
    color: var(--lc-accent);
}

.about-stat__label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--lc-muted);
    font-family: var(--ff-mono);
}

/* ═══ TEXT REVEAL (inside about) ═══ */
.text-reveal-heading { font-size: clamp(22px, 3vw, 32px); font-weight: 400; color: rgb(127, 200, 255); line-height: 1.4; max-width: 800px; letter-spacing: -0.01em; margin-bottom: 4rem; }
.text-reveal-heading :deep(.word) { display: inline-block; color: rgb(30, 50, 70); transition: color 0.1s; }

/* ═══ SERVICES — clean blocks with bleeding images ═══ */
.svc-section { padding-bottom: 0; }
.services-heading { margin-bottom: 3rem; max-width: 500px; }

.svc-block {
    margin-bottom: 24rem;
}

.svc-block__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    padding-left: 220px;
}

/* Text column — capped for editorial readability */
.svc-block__text {
    max-width: 450px;
}

/* Meta header — icon + index + category badge */
.svc-block__meta {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    margin-bottom: 1.6rem;
}
.svc-block__icon {
    width: 40px;
    height: 40px;
    border-radius: 9px;
    background: rgba(126, 184, 247, 0.08);
    border: 1px solid rgba(126, 184, 247, 0.2);
    display: grid;
    place-items: center;
    flex-shrink: 0;
    transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}
.svc-block:hover .svc-block__icon {
    background: rgba(126, 184, 247, 0.14);
    border-color: rgba(126, 184, 247, 0.4);
    transform: translateY(-1px);
}
.svc-block__icon i {
    font-size: 19px;
    color: #7eb8f7;
    line-height: 1;
}
.svc-block__meta-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    line-height: 1;
}
.svc-block__index {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    color: rgba(126, 184, 247, 0.7);
    font-weight: 500;
}
.svc-block__category {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(200, 216, 240, 0.55);
    font-weight: 500;
}

/* Title — Space Grotesk, more weight */
.svc-block__title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: clamp(24px, 2.6vw, 30px);
    font-weight: 600;
    color: var(--lc-text-white);
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    line-height: 1.18;
}

/* Description — DM Sans, more breathing room */
.svc-block__desc {
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 15px;
    line-height: 1.75;
    color: rgba(200, 216, 240, 0.88);
    margin-bottom: 2rem;
}

/* Stack section */
.svc-block__stack {
    /* width inherited from .svc-block__text */
}
.svc-block__stack-header {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    margin-bottom: 0.85rem;
}
.svc-block__stack-label {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(126, 184, 247, 0.75);
    font-weight: 500;
    flex-shrink: 0;
}
.svc-block__stack-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(126, 184, 247, 0.3), transparent);
}
.svc-block__techs {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.5rem;
}
.svc-block__techs li {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
    font-weight: 500;
    color: rgba(200, 216, 240, 0.85);
    padding: 0.55rem 0.8rem;
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 6px;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1;
    transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
}
.svc-block__techs li::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #7eb8f7;
    flex-shrink: 0;
    opacity: 0.55;
    transition: opacity 0.25s ease;
}
.svc-block__techs li:hover {
    border-color: rgba(126, 184, 247, 0.3);
    background: rgba(126, 184, 247, 0.05);
    color: #ffffff;
}
.svc-block__techs li:hover::before {
    opacity: 1;
}

/* Image — bleeds off right edge, ~75% visible */
.svc-block__link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 13px;
    font-weight: 500;
    color: var(--lc-accent);
    text-decoration: none;
    margin-left: 0.8rem;
    opacity: 0.7;
    transition: opacity 0.2s ease, gap 0.2s ease;
}

.svc-block__link:hover {
    opacity: 1;
    gap: 0.5rem;
    color: var(--lc-accent);
}

/* Image outer wrap — no overflow hidden, lets glow show */
.svc-block__img-wrap {
    position: relative;
    margin-right: -12%;
}

/* Image inner — clips the scale */
.svc-block__img {
    aspect-ratio: 16 / 10;
    border-radius: 16px 0 0 16px;
    border: 1px solid rgba(126, 184, 247, 0.15);
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: border-color 0.4s ease;
}

.svc-block:hover .svc-block__img {
    border-color: rgba(126, 184, 247, 0.3);
}

.svc-block__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}


/* Blue glow — applied directly on .svc-block__img via box-shadow */
.svc-block__img-glow {
    display: none; /* glow now via box-shadow on .svc-block__img */
}

.svc-block__img {
    box-shadow:
        0 0 30px rgba(126, 184, 247, 0.1),
        0 0 60px rgba(126, 184, 247, 0.05);
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.svc-block:hover .svc-block__img {
    box-shadow:
        0 0 40px rgba(126, 184, 247, 0.16),
        0 0 80px rgba(126, 184, 247, 0.08);
}

/* ═══ TECH STACK (marquee) ═══ */
.stack-section { overflow: clip; padding-bottom: 5rem; }
/* Ensure no dark gap between consecutive light sections */
.lc-section--light + .lc-section--light { margin-top: -1px; }
.stack-header { margin-bottom: 3rem; }

.marquee {
    width: 100%;
    overflow: hidden;
    margin-bottom: 1rem;
}

.marquee__track {
    display: flex;
    width: max-content;
}

.marquee__track--left {
    animation: marqueeLeft 60s linear infinite;
}

.marquee__track--right {
    animation: marqueeRight 65s linear infinite;
}

.marquee__content {
    display: flex;
    gap: 14px;
    padding-right: 14px;
}

.marquee__pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--lc-text-dark);
    background: #ffffff;
    border: 1px solid rgba(10, 13, 20, 0.08);
    border-radius: 100px;
    white-space: nowrap;
    transition: all 0.3s ease;
    cursor: default;
}

.marquee__pill i {
    font-size: 18px;
    color: #3b6fd4;
}

.marquee__pill:hover {
    border-color: rgba(59, 111, 212, 0.3);
    box-shadow: 0 4px 20px rgba(59, 111, 212, 0.1);
    transform: translateY(-2px);
}

/* Pause on hover */
.marquee:hover .marquee__track {
    animation-play-state: paused;
}

@keyframes marqueeLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

@keyframes marqueeRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
}

/* Fade edges */
.marquee::before,
.marquee::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
}

.marquee::before { left: 0; background: linear-gradient(90deg, var(--lc-light), transparent); }
.marquee::after { right: 0; background: linear-gradient(270deg, var(--lc-light), transparent); }

.marquee { position: relative; }

/* ═══ PROJECTS — gallery style ═══ */
.work-section { padding-bottom: 4rem; }

.work-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.work-item {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    transition: transform 0.4s ease;
}

.work-item:hover {
    transform: translateY(-4px);
}

/* Image */
.work-item__img {
    aspect-ratio: 16 / 10;
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(10, 13, 20, 0.06);
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.4s ease, border-color 0.4s ease;
}

.work-item:hover .work-item__img {
    border-color: rgba(59, 111, 212, 0.2);
    box-shadow: 0 12px 40px rgba(59, 111, 212, 0.1);
}

.work-item__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}


.work-item__locked {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    color: var(--lc-text-dark-sub);
    font-size: 1.5rem;
}

/* Text below image */
.work-item__info {
    display: flex;
    flex-direction: column;
}

.work-item__tag {
    font-family: var(--ff-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3b6fd4;
    margin-bottom: 0.5rem;
}

.work-item__title {
    font-size: 22px;
    font-weight: 600;
    color: var(--lc-text-dark);
    letter-spacing: -0.01em;
    line-height: 1.25;
    margin-bottom: 0.6rem;
}

.work-item__desc {
    font-size: 15px;
    line-height: 1.7;
    color: var(--lc-text-dark-sub);
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.work-item__techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 1rem;
}

.work-item__techs span {
    font-size: 11px;
    font-family: var(--ff-mono);
    color: var(--lc-text-dark-sub);
    background: rgba(10, 13, 20, 0.03);
    border: 1px solid rgba(10, 13, 20, 0.08);
    padding: 4px 9px;
    border-radius: 4px;
}

.work-item__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 14px;
    font-weight: 500;
    color: #3b6fd4;
    transition: gap 0.2s ease;
}

.work-item:hover .work-item__cta {
    gap: 0.7rem;
}

/* ═══ TERMINAL ═══ */
.terminal-window { background: #060810; border: 1px solid var(--lc-border-dark); border-radius: 14px; overflow: hidden; max-width: 700px; }
.terminal-window__bar { display: flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.3rem; background: rgba(255,255,255,0.02); border-bottom: 1px solid var(--lc-border-dark); }
.terminal-dot { width: 10px; height: 10px; border-radius: 50%; }
.terminal-dot--red { background: #FF5F57; } .terminal-dot--yellow { background: #FEBC2E; } .terminal-dot--green { background: #28C840; }
.terminal-window__title { margin-left: 0.8rem; font-size: 0.75rem; color: var(--lc-muted); font-family: var(--ff-mono); }
.terminal-window__body { padding: 1.8rem; font-family: var(--ff-mono); display: flex; flex-direction: column; gap: 0.8rem; }
.terminal-line { display: flex; gap: 0.7rem; align-items: baseline; }
.t-prompt { color: #22C55E; font-weight: 700; flex-shrink: 0; }
.t-text { color: #c8d8f0; font-size: 0.85rem; line-height: 1.5; }
.t-redacted { color: #2a3040; letter-spacing: 0.03em; }
.t-muted { color: #3b4a60; }
.t-cursor { color: #22C55E; animation: blink 1s step-end infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

/* ═══ BLOG ═══ */
.blog-section { position: relative; }

.blog-latest {
    max-width: 750px;
}

.blog-latest__meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 13px;
    font-family: var(--ff-mono);
    color: var(--lc-muted);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.blog-latest__title {
    font-size: clamp(28px, 3.5vw, 42px);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 1.2rem;
}

.blog-latest__title a {
    color: var(--lc-text-white);
    text-decoration: none;
    transition: color 0.3s ease;
}

.blog-latest__title a:hover {
    color: var(--lc-accent);
}

.blog-latest__excerpt {
    font-size: 17px;
    line-height: 1.8;
    color: var(--lc-text-light);
    margin-bottom: 2rem;
}

.blog-latest__actions {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.blog-latest__read {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 15px;
    font-weight: 500;
    color: var(--lc-accent);
    text-decoration: none;
    transition: gap 0.2s ease;
}

.blog-latest__read:hover { gap: 0.7rem; color: var(--lc-accent); }

.blog-latest__all {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 14px;
    font-weight: 400;
    color: var(--lc-muted);
    text-decoration: none;
    transition: color 0.2s ease, gap 0.2s ease;
}

.blog-latest__all:hover { color: var(--lc-text-light); gap: 0.6rem; }

/* ═══ CTA ═══ */
.lc-section--cta { padding: 8rem 0; }
.cta-center { text-align: center; max-width: 650px; margin: 0 auto; }
.cta-center__heading { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: var(--lc-text-dark); letter-spacing: -0.03em; margin-bottom: 1rem; line-height: 1.15; }
.cta-center__heading em { font-style: normal; color: #3b6fd4; }
.cta-center__desc { color: var(--lc-text-dark-sub); font-size: 1.05rem; line-height: 1.7; margin-bottom: 2.5rem; }
.cta-center__actions { display: flex; justify-content: center; gap: 0.8rem; }

/* ═══ SCROLL REVEAL ═══ */
.reveal-item { opacity: 0; transform: translateY(28px); transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
.reveal-item.is-revealed { opacity: 1; transform: translateY(0); }

/* Failsafe — disable opacity:0 default on mobile (IntersectionObserver doesn't always fire reliably on iOS Safari, leaving sections invisible) */
@media screen and (max-width: 768px) {
  .reveal-item { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .reveal-item { opacity: 1; transform: none; }
}

/* ═══ RESPONSIVE ═══ */
@media screen and (max-width: 1024px) {
    .about-layout { grid-template-columns: 1fr; gap: 2.5rem; }
    .about-layout__stats { flex-direction: row; border-left: none; padding-left: 0; border-top: 1px solid var(--lc-border-dark); padding-top: 2rem; gap: 2rem; }
    .svc-block__inner {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding-left: 0;
    }
    .svc-block__img {
        margin-right: 0;
        border-radius: 16px;
        aspect-ratio: 16 / 9;
    }
    .work-gallery { grid-template-columns: 1fr; gap: 3rem; }
    .stats-row { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .cta-center__actions { flex-direction: column; align-items: center; }
}

@media screen and (max-width: 768px) {
    .hero-section { min-height: auto; padding: 4rem 0 3rem; }
    .hero-split { grid-template-columns: 1fr; gap: 2rem; }
    .hero-photo { order: -1; }
    .hero-photo__frame { width: 160px; }
    .hero-photo__glow { width: 180px; height: 180px; }
    .hero-content { max-width: 100%; }
    .hero-signature { font-size: clamp(1.5rem, 6vw, 1.9rem); margin-bottom: 0.8rem; }
    .hero-heading { font-size: clamp(2rem, 9vw, 3rem); margin-bottom: 1.2rem; }
    .hero-desc { font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.6rem; }
    .hero-scroll-hint { display: none; }
    .skills-strip { padding: 0; }
    .skills-strip__items { gap: 0.5rem; flex-wrap: wrap; padding-left: 0; justify-content: center; }
    .skills-strip__tag { font-size: 0.65rem; padding: 0.4rem 0.8rem; }
    .lc-section { padding: 4rem 0; }
    .stats-row { grid-template-columns: 1fr; gap: 1.5rem; }
    .stat-block { flex-direction: row; align-items: baseline; gap: 0.8rem; }
    .marquee__pill { padding: 8px 14px; font-size: 13px; }
    .marquee__pill i { font-size: 15px; }
    .blog-feature { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
    .blog-feature__cta { margin-left: 0; }
    .lc-section--cta { padding: 4rem 0; }
    .hero-mesh__orb--1 { width: 300px; height: 300px; }
    .hero-mesh__orb--2 { width: 200px; height: 200px; }
    .hero-mesh__orb--3 { display: none; }
}

@media screen and (max-width: 480px) {
    .hero-actions { flex-direction: column; width: 100%; }
    .btn-lc { justify-content: center; width: 100%; }
    .cta-center__actions { width: 100%; }
    .cta-center__actions .btn-lc { width: 100%; }
    .marquee__pill { padding: 7px 12px; font-size: 12px; gap: 5px; }
    .marquee__pill i { font-size: 14px; }
}
</style>
