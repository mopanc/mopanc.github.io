<template>
  <main class="main about-pg">

    <!-- Hero — centered statement -->
    <section class="ab-hero">
      <div class="ab-hero__mesh" aria-hidden="true">
        <div class="ab-mesh-orb ab-mesh-orb--1"></div>
        <div class="ab-mesh-orb ab-mesh-orb--2"></div>
      </div>
      <div class="container-wide">
        <div class="ab-hero__center">
          <span class="ab-eyebrow">
            {{ translations.home_eyebrow_about || 'about' }}
          </span>
          <h1 class="ab-hero__statement">
            Code. Systems. <em>Results.</em>
          </h1>
          <p class="ab-hero__sub">
            {{ translations.about_hero_sub || "Each project pulls another thread tighter. From PHP to embedded C, from React to LLM agents, from Socket.IO to MQTT telemetry feeding RAG over real-world device data. The intersection of full-stack, AI and industrial IoT. That is where I am building." }}
          </p>
          <div class="ab-hero__signature"><span>jorge</span><span class="ab-hero__signature-sep">·</span><span>morais</span></div>
        </div>
      </div>
    </section>

    <!-- Experience — 3 tech roles -->
    <section class="ab-exp">
      <div class="container-wide">
        <h2 class="ab-section-title">{{ translations.about_journey_title || 'Tech Journey' }}</h2>

        <div class="ab-timeline">
          <div class="ab-timeline__item" v-for="(exp, i) in experiences" :key="i">
            <div class="ab-timeline__marker">
              <span class="ab-timeline__year">{{ exp.period }}</span>
              <div class="ab-timeline__dot"></div>
              <div class="ab-timeline__line" v-if="i < experiences.length - 1"></div>
            </div>
            <div class="ab-timeline__content">
              <div class="ab-timeline__header">
                <h3 class="ab-timeline__role">{{ isPt ? exp.rolePt : exp.role }}</h3>
                <span class="ab-timeline__company">{{ exp.company }}</span>
              </div>
              <p class="ab-timeline__desc">{{ isPt ? exp.descPt : exp.desc }}</p>
              <div class="ab-timeline__techs">
                <span v-for="tech in exp.techs" :key="tech">{{ tech }}</span>
              </div>
              <div class="ab-timeline__kpis" v-if="exp.kpis">
                <div class="ab-kpi" v-for="kpi in exp.kpis" :key="kpi.label">
                  <span class="ab-kpi__value">{{ kpi.value }}</span>
                  <span class="ab-kpi__label">{{ isPt ? kpi.labelPt : kpi.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Before Tech — compact -->
    <section class="ab-before">
      <div class="container-wide">
        <h2 class="ab-section-title ab-section-title--light">{{ translations.about_before_title || 'Before code' }}</h2>
        <p class="ab-before__intro">
          {{ translations.about_before_intro || "Software wasn't my first chapter. Discipline, leadership, and resilience came from somewhere else." }}
        </p>
        <div class="ab-before__grid">
          <div class="ab-before__item" v-for="item in beforeTech" :key="item.title">
            <i :class="item.icon"></i>
            <div>
              <h4>{{ isPt ? item.titlePt : item.title }}</h4>
              <p>{{ isPt ? item.descPt : item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision / Future -->
    <section class="ab-vision">
      <div class="container-wide">
        <div class="ab-vision__content">
          <h2 class="ab-vision__title">
            {{ translations.about_vision_title || 'What comes next' }}
          </h2>
          <p class="ab-vision__text">
            {{ translations.about_vision_text || "Right now I'm deep at the intersection of AI and Industrial IoT. Production LLM integration via RAG, vector search, MCP and autonomous agents. I shipped depguard with 12 MCP tools for AI agent security. On the IoT side: real-time telemetry over MQTT, embedded C on Raspberry Pi and IMX8, payment-machine APIs in C verified with Valgrind. What comes next is closing the loop. Agents that read industrial telemetry, decide, and act on the hardware itself." }}
          </p>
          <div class="ab-vision__tags">
            <span>AI / RAG</span>
            <span>MCP Protocol</span>
            <span>Autonomous Agents</span>
            <span>Industrial IoT</span>
            <span>MQTT Telemetry</span>
            <span>Edge AI</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ab-cta">
      <div class="container-wide">
        <div class="ab-cta__inner">
          <h2>{{ translations.about_cta_title || 'Shall we work together?' }}</h2>
          <p>{{ translations.about_cta_text || 'Available for remote projects, technical consulting, and full-time opportunities.' }}</p>
          <div class="ab-cta__actions">
            <a href="/contact" class="ab-btn ab-btn--white">
              {{ translations.home_cta_btn || 'Get in Touch' }}
              <i class="ri-arrow-right-line"></i>
            </a>
            <a href="/cv/jorge-morais-cv.pdf" download="Jorge-Morais-CV.pdf" class="ab-btn ab-btn--outline">
              <i class="ri-download-2-line"></i>
              {{ translations.about_download_cv || 'Download CV' }}
            </a>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { translations, selectedLanguage, initialize } = useLanguage()

const isPt = computed(() => selectedLanguage.value === 'pt')

onMounted(async () => {
  await initialize()
})

const experiences = [
  {
    period: '2023 — Present',
    role: 'Tech Lead, R&D Department', rolePt: 'Tech Lead, Departamento de I&D',
    company: 'Balanças Marques, Braga',
    desc: 'Tech Lead in the R&D department. Currently leading work on the QORE enterprise platform (real-time dashboards, RBAC/IAM, multi-store management), the on-premise truck scale automation system in production across several industrial sites, the Alice4Cash payment machine APIs in pure C with CCTalk and ID003 protocols, and an enterprise AI chat platform with RAG, vector search and embeddings. The truck scale work covers hardware orchestration (scales, I/O boards, MUPI displays, RFID and ANPR cameras, MJPEG/RTSP streaming) and self-service driver flows on Raspberry Pi terminals, so a full weighbridge can operate without an operator on site.',
    descPt: 'Tech Lead no departamento de I&D. A liderar a plataforma enterprise QORE (dashboards real-time, RBAC/IAM, gestão multi-loja), o sistema on-premise de automação de báscula de camiões em produção em várias empresas industriais, as APIs em C puro da máquina de pagamento Alice4Cash com protocolos CCTalk e ID003, e uma plataforma de chat AI enterprise com RAG, vector search e embeddings. O trabalho na báscula cobre orquestração de hardware (instrumentos, placas I/O, MUPIs, leitores RFID e câmaras ANPR, streaming MJPEG/RTSP) e fluxos self-service para o motorista via terminais Raspberry Pi, para que uma báscula completa possa operar sem operador no local.',
    techs: ['React', 'Angular', 'Node.js', 'TypeScript', 'C', 'SQL Server', 'Socket.IO', 'MQTT', 'RFID', 'RTSP', 'Python'],
    kpis: [
      { value: '72%', label: 'Memory reduction', labelPt: 'Redução de memória' },
      { value: '96%', label: 'Faster pipeline', labelPt: 'Pipeline mais rápido' },
      { value: '0', label: 'Memory leaks', labelPt: 'Memory leaks' },
      { value: 'Multi-site', label: 'Truck Scale Production', labelPt: 'Báscula em Produção' },
    ]
  },
  {
    period: '2022 — 2023',
    role: 'Frontend Developer', rolePt: 'Frontend Developer',
    company: 'Frontkom, Norway (Remote)',
    desc: 'Three large builds: a government platform, a Norwegian travel platform (the Norwegian equivalent of Booking.com), plus maintenance and feature work on enterprise Drupal platforms. React, Next.js, Drupal headless CMS. WCAG AA on every public-facing project. Distributed team across 3 time zones.',
    descPt: 'Três projetos grandes: uma plataforma governamental, uma plataforma norueguesa de viagens (equivalente norueguês do Booking.com), e manutenção e feature work em plataformas Drupal enterprise. React, Next.js, Drupal headless CMS. WCAG AA em todos os projetos públicos. Equipa distribuída em 3 fusos horários.',
    techs: ['React', 'Next.js', 'Vue.js', 'Drupal', 'WCAG AA'],
    kpis: [
      { value: 'WCAG AA', label: 'Accessibility', labelPt: 'Acessibilidade' },
      { value: '3', label: 'Time zones', labelPt: 'Fusos horários' },
    ]
  },
  {
    period: '2019 — 2021',
    role: 'Web Developer', rolePt: 'Web Developer',
    company: 'Netgócio, Portugal',
    desc: 'Landing pages, B2C e-commerce platforms and corporate websites built alongside the marketing team. Hands-on SEO work: canonical URLs, structured data, on-page optimisation. Managed 2 production servers hosting ~400 customer sites. Optimised MySQL queries from 3.5s down to 0.8s.',
    descPt: 'Landing pages, plataformas e-commerce B2C e websites empresariais construídos em conjunto com a equipa de marketing. Trabalho hands-on de SEO: URLs canónicas, structured data, otimização on-page. Geri 2 servidores de produção a alojar cerca de 400 sites de clientes. Otimizei queries MySQL de 3.5s para 0.8s.',
    techs: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'SEO'],
    kpis: [
      { value: '~400', label: 'Hosted sites', labelPt: 'Sites alojados' },
      { value: '77%', label: 'Query speedup', labelPt: 'Queries mais rápido' },
    ]
  },
]

const beforeTech = [
  {
    icon: 'ri-shield-star-line',
    title: 'Portuguese Army', titlePt: 'Exército Português',
    desc: '4 years. Peacekeeping mission in Bosnia (EUFOR/Althea). Rifleman, trained at EPI Mafra. This is where I learned discipline, precision, and how to make decisions under pressure.',
    descPt: '4 anos. Missão de paz na Bósnia (EUFOR/Althea). Atirador, com formação na EPI Mafra. Foi aqui que aprendi disciplina, precisão, e a tomar decisões sob pressão.',
  },
  {
    icon: 'ri-team-line',
    title: 'Operations Manager', titlePt: 'Gestor de Operações',
    desc: '7 years at McDonald\'s. Started as crew, became a manager at 23, managing around 50 people. Process optimisation, team training, decisions made fast.',
    descPt: '7 anos na McDonald\'s. Comecei na equipa, fui gestor aos 23, com gestão de cerca de 50 pessoas. Otimização de processos, formação de equipas, decisões rápidas.',
  },
  {
    icon: 'ri-home-heart-line',
    title: 'Real Estate Agent', titlePt: 'Agente Imobiliário',
    desc: '4 years. Negotiating, reading markets, building relationships. This is where I picked up resilience and a consultative approach: listen first, propose second.',
    descPt: '4 anos. Negociar, ler mercados, construir relações. Foi aqui que ganhei resiliência e uma abordagem consultiva: ouvir primeiro, propor depois.',
  },
]
</script>

<style scoped>
.about-pg { background: #0a0d14; min-height: 100vh; color: #c8d8f0; }

/* ═══ HERO — centered statement ═══ */
.ab-hero {
  padding: 10rem 0 6rem;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.ab-hero__mesh { position: absolute; inset: 0; pointer-events: none; }
.ab-mesh-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.08; }
.ab-mesh-orb--1 { width: 500px; height: 500px; background: #7eb8f7; top: -15%; left: 50%; transform: translateX(-50%); }
.ab-mesh-orb--2 { width: 350px; height: 350px; background: #3b6fd4; bottom: -10%; right: 20%; }

.ab-hero__center {
  position: relative; z-index: 1;
  max-width: 750px; margin: 0 auto;
}

.ab-eyebrow {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: var(--ff-mono); font-size: 12px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase; color: #7eb8f7;
  padding: 5px 14px; border: 1px solid rgba(126,184,247,0.25);
  border-radius: 4px; background: rgba(126,184,247,0.06); margin-bottom: 2.5rem;
}

.ab-hero__statement {
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 2rem;
}

.ab-hero__statement em {
  font-style: normal;
  color: #7eb8f7;
}

.ab-hero__sub {
  font-size: 18px;
  line-height: 1.8;
  color: #c8d8f0;
  max-width: 600px;
  margin: 0 auto 2.5rem;
}

.ab-hero__signature {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 600;
  color: rgba(220, 232, 248, 0.7);
  letter-spacing: -0.015em;
  display: inline-flex;
  align-items: baseline;
}
.ab-hero__signature-sep {
  color: rgba(126, 184, 247, 0.7);
  margin: 0 0.28em;
  font-weight: 500;
}

/* ═══ EXPERIENCE TIMELINE ═══ */
.ab-exp {
  padding: 5rem 0;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.ab-section-title {
  font-size: clamp(24px, 3vw, 32px); font-weight: 700; color: #ffffff;
  letter-spacing: -0.02em; margin-bottom: 3rem;
}

.ab-timeline { display: flex; flex-direction: column; }

.ab-timeline__item {
  display: grid; grid-template-columns: 180px 1fr;
  gap: 3rem; padding-bottom: 4rem;
}

.ab-timeline__item:last-child { padding-bottom: 0; }

/* Marker column */
.ab-timeline__marker { position: relative; display: flex; flex-direction: column; align-items: flex-end; padding-top: 4px; }

.ab-timeline__year {
  font-family: var(--ff-mono); font-size: 13px; font-weight: 500;
  color: #7eb8f7; letter-spacing: 0.04em; white-space: nowrap;
  margin-bottom: 1rem;
}

.ab-timeline__dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: #7eb8f7; flex-shrink: 0;
  box-shadow: 0 0 10px rgba(126,184,247,0.3);
}

.ab-timeline__line {
  width: 1px; flex: 1; margin-top: 0.5rem;
  background: linear-gradient(180deg, rgba(126,184,247,0.3), rgba(126,184,247,0.05));
}

/* Content */
.ab-timeline__header { margin-bottom: 1rem; }

.ab-timeline__role {
  font-size: 22px; font-weight: 600; color: #ffffff;
  letter-spacing: -0.01em; margin-bottom: 0.3rem;
}

.ab-timeline__company { font-size: 14px; color: #5a6a82; }

.ab-timeline__desc {
  font-size: 16px; line-height: 1.8; color: #c8d8f0; margin-bottom: 1.5rem;
}

.ab-timeline__techs { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem; }

.ab-timeline__techs span {
  font-size: 12px; font-family: var(--ff-mono); color: #c8d8f0;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  padding: 5px 10px; border-radius: 4px;
}

/* KPIs */
.ab-timeline__kpis { display: flex; gap: 2.5rem; }

.ab-kpi { display: flex; flex-direction: column; gap: 0.2rem; }

.ab-kpi__value {
  font-size: 24px; font-weight: 700; font-family: var(--ff-mono);
  color: #7eb8f7; letter-spacing: -0.02em; line-height: 1;
}

.ab-kpi__label {
  font-size: 11px; font-weight: 500; letter-spacing: 0.06em;
  text-transform: uppercase; color: #5a6a82; font-family: var(--ff-mono);
}

/* ═══ BEFORE TECH ═══ */
.ab-before {
  padding: 5rem 0;
  background: #f0f4fa; color: #0a0d14;
}

.ab-section-title--light { color: #0a0d14; }

.ab-before__intro {
  font-size: 18px; line-height: 1.7; color: #3b4a60;
  max-width: 600px; margin-bottom: 3rem;
}

.ab-before__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

.ab-before__item {
  display: flex; gap: 1rem; align-items: flex-start;
  padding: 2rem; background: #ffffff;
  border: 1px solid rgba(10,13,20,0.06); border-radius: 12px;
  transition: box-shadow 0.3s ease;
}

.ab-before__item:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.06); }

.ab-before__item i {
  font-size: 1.5rem; color: #3b6fd4; flex-shrink: 0; margin-top: 2px;
}

.ab-before__item h4 {
  font-size: 16px; font-weight: 600; color: #0a0d14; margin-bottom: 0.4rem;
}

.ab-before__item p { font-size: 14px; line-height: 1.7; color: #3b4a60; }

/* ═══ VISION ═══ */
.ab-vision { padding: 5rem 0; }

.ab-vision__content { max-width: 700px; }

.ab-vision__title {
  font-size: clamp(24px, 3vw, 32px); font-weight: 700; color: #ffffff;
  letter-spacing: -0.02em; margin-bottom: 1.5rem;
}

.ab-vision__text {
  font-size: 17px; line-height: 1.8; color: #c8d8f0; margin-bottom: 2rem;
}

.ab-vision__tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.ab-vision__tags span {
  font-size: 13px; font-family: var(--ff-mono); color: #7eb8f7;
  background: rgba(126,184,247,0.08); border: 1px solid rgba(126,184,247,0.2);
  padding: 6px 14px; border-radius: 100px;
}

/* ═══ CTA ═══ */
.ab-cta { padding: 5rem 0; background: #f0f4fa; }

.ab-cta__inner { text-align: center; max-width: 550px; margin: 0 auto; }

.ab-cta__inner h2 {
  font-size: clamp(24px, 3vw, 32px); font-weight: 700; color: #0a0d14;
  margin-bottom: 1rem;
}

.ab-cta__inner p { font-size: 16px; line-height: 1.7; color: #3b4a60; margin-bottom: 2rem; }

.ab-cta__actions { display: flex; justify-content: center; gap: 0.8rem; }

.ab-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 12px 24px; font-size: 15px; font-weight: 500;
  border-radius: 8px; text-decoration: none; transition: all 0.2s ease;
  font-family: inherit;
}

.ab-btn--white { background: #0a0d14; color: #ffffff; border: none; }
.ab-btn--white:hover { background: #1a2332; }
.ab-btn--outline { background: transparent; color: #0a0d14; border: 1px solid rgba(10,13,20,0.15); }
.ab-btn--outline:hover { border-color: #0a0d14; }

/* ═══ RESPONSIVE ═══ */
@media screen and (max-width: 1024px) {
  .ab-timeline__item { grid-template-columns: 1fr; gap: 1rem; }
  .ab-timeline__marker { flex-direction: row; align-items: center; gap: 0.8rem; }
  .ab-timeline__line { display: none; }
  .ab-before__grid { grid-template-columns: 1fr; }
}

@media screen and (max-width: 768px) {
  .ab-hero { padding: 7rem 0 4rem; }
  .ab-timeline__kpis { flex-wrap: wrap; gap: 1.5rem; }
  .ab-cta__actions { flex-direction: column; align-items: center; }
}
</style>
