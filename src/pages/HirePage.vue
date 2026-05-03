<template>
  <main class="hire-page">
    <!-- ═══ HERO ═══ -->
    <section class="hp-hero">
      <div class="container-wide">
        <p class="hp-hero__eyebrow">
          <span class="hp-hero__eyebrow-dot"></span>
          {{ translations.hire_hero_status || 'Open to senior or lead roles · Remote, EU' }}
        </p>
        <h1 class="hp-hero__title">
          {{ translations.hire_hero_title || 'Where AI meets industrial systems.' }}
        </h1>
        <p class="hp-hero__lede">
          {{ translations.hire_hero_lede || 'Senior Full-Stack Developer at the intersection of AI and Industrial IoT. I build production systems end-to-end — React, Vue, Node.js and TypeScript dashboards on top of C firmware and MQTT telemetry, with LLMs integrated through RAG, MCP and agent tooling. Five-plus years shipping. EU citizen, remote-first.' }}
        </p>

        <div class="hp-hero__actions">
          <a href="/contact" class="hp-btn hp-btn--primary">
            {{ translations.hire_cta_primary || 'Talk about a role' }}
            <i class="ri-arrow-right-line"></i>
          </a>
          <a href="/Jorge-Morais-CV.pdf" class="hp-btn hp-btn--ghost" download>
            {{ translations.hire_cta_cv || 'Download CV' }}
            <i class="ri-download-line"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ SNAPSHOT ═══ -->
    <section class="hp-section">
      <div class="container-wide">
        <header class="hp-section__head">
          <span class="hp-section__num">/01</span>
          <h2 class="hp-section__title">{{ translations.hire_snapshot_title || 'Snapshot' }}</h2>
        </header>

        <dl class="hp-snapshot">
          <div class="hp-snapshot__row">
            <dt>{{ translations.hire_snap_role_label || 'Role' }}</dt>
            <dd>{{ translations.hire_snap_role || 'Senior or Lead Full-Stack Developer · Strong fit for product teams at the intersection of AI and Industrial IoT (LLM integration, edge AI, smart manufacturing, IoT platforms)' }}</dd>
          </div>
          <div class="hp-snapshot__row">
            <dt>{{ translations.hire_snap_setup_label || 'Setup' }}</dt>
            <dd>{{ translations.hire_snap_setup || 'Remote-first (EU timezones) · Hybrid available · Open to relocation to Netherlands, Belgium, Norway, Denmark, Sweden' }}</dd>
          </div>
          <div class="hp-snapshot__row">
            <dt>{{ translations.hire_snap_type_label || 'Type' }}</dt>
            <dd>{{ translations.hire_snap_type || 'Full-time preferred · Long-term contract considered for the right team' }}</dd>
          </div>
          <div class="hp-snapshot__row">
            <dt>{{ translations.hire_snap_authz_label || 'Work authorization' }}</dt>
            <dd>{{ translations.hire_snap_authz || 'EU citizen (Portuguese) — no visa required for any EU/EEA country' }}</dd>
          </div>
          <div class="hp-snapshot__row">
            <dt>{{ translations.hire_snap_lang_label || 'Languages' }}</dt>
            <dd>{{ translations.hire_snap_lang || 'English (professional fluency) · Portuguese (native)' }}</dd>
          </div>
          <div class="hp-snapshot__row">
            <dt>{{ translations.hire_snap_notice_label || 'Notice period' }}</dt>
            <dd>{{ translations.hire_snap_notice || 'Flexible (1 month typical) · Target start: immediate to 1 month' }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ═══ WHAT I BRING ═══ -->
    <section class="hp-section">
      <div class="container-wide">
        <header class="hp-section__head">
          <span class="hp-section__num">/02</span>
          <h2 class="hp-section__title">{{ translations.hire_value_title || 'What I bring' }}</h2>
        </header>

        <div class="hp-value-grid">
          <article class="hp-value">
            <i class="ri-robot-2-line hp-value__icon"></i>
            <h3>{{ translations.hire_value_1_title || 'Production LLM integration' }}</h3>
            <p>{{ translations.hire_value_1_body || 'Author of depguard — an open-source MCP server that saves AI coding agents thousands of tokens per package decision. Built RAG pipelines, agent tooling, and prompt-engineered workflows that hold up under real cost and latency constraints.' }}</p>
          </article>

          <article class="hp-value">
            <i class="ri-cpu-line hp-value__icon"></i>
            <h3>{{ translations.hire_value_2_title || 'Industrial IoT depth' }}</h3>
            <p>{{ translations.hire_value_2_body || 'C firmware on Raspberry Pi and IMX8, MQTT and CCTalk/ID003 protocols, real-time telemetry pipelines, payment-machine APIs verified with Valgrind. Hardware-to-cloud experience that very few full-stack developers carry.' }}</p>
          </article>

          <article class="hp-value">
            <i class="ri-stack-line hp-value__icon"></i>
            <h3>{{ translations.hire_value_3_title || 'Full-stack as the connector' }}</h3>
            <p>{{ translations.hire_value_3_body || 'React, Vue, Node.js and TypeScript across production systems with real users — multi-tenant business platforms, real-time POS sync, document automation pipelines, government-grade web apps. PostgreSQL, Socket.IO, Docker, AWS.' }}</p>
          </article>

          <article class="hp-value">
            <i class="ri-global-line hp-value__icon"></i>
            <h3>{{ translations.hire_value_4_title || 'Remote, distributed, Nordic-fluent' }}</h3>
            <p>{{ translations.hire_value_4_body || 'Multiple years of remote work for Frontkom (Norway) before the current role. Comfortable with async-first communication, written-decision culture, and the trust model distributed Nordic / Benelux teams expect.' }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══ EVIDENCE ═══ -->
    <section class="hp-section">
      <div class="container-wide">
        <header class="hp-section__head">
          <span class="hp-section__num">/03</span>
          <h2 class="hp-section__title">{{ translations.hire_proof_title || 'Evidence' }}</h2>
          <p class="hp-section__sub">{{ translations.hire_proof_sub || 'Case studies and writing — pick the ones that match your stack.' }}</p>
        </header>

        <ul class="hp-proof">
          <li>
            <a href="/projects/depguard-mcp-security-server">
              <span class="hp-proof__num">01</span>
              <span class="hp-proof__main">
                <span class="hp-proof__head">depguard — MCP Security Server for AI Coding Agents</span>
                <span class="hp-proof__sub">TypeScript · Node.js · MCP Protocol · open-source · published on npm</span>
              </span>
              <i class="ri-arrow-right-up-line"></i>
            </a>
          </li>
          <li>
            <a href="/projects/quantum-elliott-wave-trading-ai">
              <span class="hp-proof__num">02</span>
              <span class="hp-proof__main">
                <span class="hp-proof__head">Quantum Elliott Wave AI — Autonomous Trading Platform</span>
                <span class="hp-proof__sub">Python · TypeScript · Node.js · Scikit-learn · live on Binance</span>
              </span>
              <i class="ri-arrow-right-up-line"></i>
            </a>
          </li>
          <li>
            <a href="/projects/distributed-iot-monitoring">
              <span class="hp-proof__num">03</span>
              <span class="hp-proof__main">
                <span class="hp-proof__head">Distributed IoT Monitoring</span>
                <span class="hp-proof__sub">Node.js · Vue 3 · MQTT · CCTalk · WebSockets · C · PostgreSQL</span>
              </span>
              <i class="ri-arrow-right-up-line"></i>
            </a>
          </li>
          <li>
            <a href="/projects/federated-pos-synchronization">
              <span class="hp-proof__num">04</span>
              <span class="hp-proof__main">
                <span class="hp-proof__head">Federated POS Synchronization</span>
                <span class="hp-proof__sub">Real-time sync across 10+ retail locations · 1M+ transactions · offline-first</span>
              </span>
              <i class="ri-arrow-right-up-line"></i>
            </a>
          </li>
          <li>
            <a href="/blog/depguard-ai">
              <span class="hp-proof__num">05</span>
              <span class="hp-proof__main">
                <span class="hp-proof__head">How I Built an MCP Server That Saves AI Agents Thousands of Tokens</span>
                <span class="hp-proof__sub">Technical writeup · MCP design · production cost engineering</span>
              </span>
              <i class="ri-arrow-right-up-line"></i>
            </a>
          </li>
          <li>
            <a href="/blog/ai-multiplier-effect-software-teams">
              <span class="hp-proof__num">06</span>
              <span class="hp-proof__main">
                <span class="hp-proof__head">The AI Multiplier Effect: How LLMs Are Quietly Reshaping Software Teams</span>
                <span class="hp-proof__sub">Technical writeup · field notes from a year of AI-assisted development</span>
              </span>
              <i class="ri-arrow-right-up-line"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- ═══ FIT ═══ -->
    <section class="hp-section">
      <div class="container-wide">
        <header class="hp-section__head">
          <span class="hp-section__num">/04</span>
          <h2 class="hp-section__title">{{ translations.hire_fit_title || 'Where I fit best' }}</h2>
        </header>

        <div class="hp-fit-grid">
          <div class="hp-fit hp-fit--good">
            <h3><i class="ri-check-line"></i> {{ translations.hire_fit_yes || 'Strong fit' }}</h3>
            <ul>
              <li>{{ translations.hire_fit_yes_1 || 'Product teams at the intersection of AI and Industrial IoT — smart manufacturing, edge AI, IoT platforms with LLM features, agents that act on real hardware.' }}</li>
              <li>{{ translations.hire_fit_yes_2 || 'Senior or lead full-stack roles in teams shipping with LLMs (RAG, MCP, agents) where someone who also speaks C, MQTT and CCTalk is genuinely useful.' }}</li>
              <li>{{ translations.hire_fit_yes_3 || 'Distributed Nordic / Benelux teams used to async, written-decision engineering culture.' }}</li>
              <li>{{ translations.hire_fit_yes_4 || 'Companies that value end-to-end ownership over narrow specialization.' }}</li>
            </ul>
          </div>
          <div class="hp-fit hp-fit--bad">
            <h3><i class="ri-close-line"></i> {{ translations.hire_fit_no || 'Not the right match' }}</h3>
            <ul>
              <li>{{ translations.hire_fit_no_1 || 'Pure ML / data-science roles requiring model training, fine-tuning or research — I build with LLMs, I do not train them.' }}</li>
              <li>{{ translations.hire_fit_no_2 || 'Roles that strictly require a completed Engineering degree (PT title regulation) — I ship engineering work but hold the title "Developer".' }}</li>
              <li>{{ translations.hire_fit_no_3 || 'On-site-only roles outside of Portugal that do not consider relocation.' }}</li>
              <li>{{ translations.hire_fit_no_4 || 'Roles outside Europe with no remote option.' }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="hp-cta-section">
      <div class="container-wide">
        <h2 class="hp-cta__title">{{ translations.hire_cta_title || 'Sounds like a fit?' }}</h2>
        <p class="hp-cta__lede">
          {{ translations.hire_cta_lede || 'The fastest path is the form. Mention the role, the team, the stack, and the timeline — I reply within 24 hours, in English or Portuguese.' }}
        </p>
        <div class="hp-cta__actions">
          <a href="/contact" class="hp-btn hp-btn--primary hp-btn--lg">
            {{ translations.hire_cta_btn || 'Start the conversation' }}
            <i class="ri-arrow-right-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/jorge-mopanc/" target="_blank" rel="noopener" class="hp-btn hp-btn--ghost hp-btn--lg">
            <i class="ri-linkedin-line"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useLanguage } from '../composables/useLanguage'
import { useSEO, seoConfigs } from '../composables/useSEO'
import { useBreadcrumbs, breadcrumbConfigs } from '../composables/useBreadcrumbs'

export default {
  name: 'HirePage',
  setup() {
    useSEO(seoConfigs.hire)
    useBreadcrumbs(breadcrumbConfigs.hire)
    const { translations, initialize } = useLanguage()
    return { translations, initialize }
  },
  async mounted() {
    await this.initialize()
    document.dispatchEvent(new Event('render-event'))
  }
}
</script>

<style scoped>
.hire-page {
  background: #0a0d14;
  color: #e8eef7;
  padding: 6rem 0 8rem;
  min-height: 100vh;
}

.container-wide {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ═══ Hero ═══ */
.hp-hero {
  padding: 4rem 0 6rem;
}

.hp-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #7eb8f7;
  margin-bottom: 2rem;
}

.hp-hero__eyebrow-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7eb8f7;
  box-shadow: 0 0 12px #7eb8f7;
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

.hp-hero__title {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 2rem;
  max-width: 22ch;
}

.hp-hero__lede {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(1.1rem, 1.6vw, 1.35rem);
  line-height: 1.6;
  max-width: 62ch;
  color: #a8c2e0;
  margin: 0 0 3rem;
}

.hp-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* ═══ Buttons ═══ */
.hp-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.6rem;
  border-radius: 8px;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.24s ease;
  border: 1px solid transparent;
}

.hp-btn--primary {
  background: #7eb8f7;
  color: #0a0d14;
}
.hp-btn--primary:hover {
  background: #a8d0ff;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(126, 184, 247, 0.35);
}

.hp-btn--ghost {
  background: transparent;
  color: #e8eef7;
  border-color: rgba(126, 184, 247, 0.4);
}
.hp-btn--ghost:hover {
  background: rgba(126, 184, 247, 0.08);
  border-color: #7eb8f7;
}

.hp-btn--lg {
  padding: 1.2rem 2rem;
  font-size: 1.05rem;
}

/* ═══ Section ═══ */
.hp-section {
  padding: 4rem 0;
  border-top: 1px solid rgba(126, 184, 247, 0.1);
}

.hp-section__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hp-section__num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.95rem;
  color: #7eb8f7;
  opacity: 0.7;
}

.hp-section__title {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin: 0;
  letter-spacing: -0.01em;
}

.hp-section__sub {
  flex-basis: 100%;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #8aa3c2;
  margin: 0.5rem 0 0;
  font-size: 1rem;
}

/* ═══ Snapshot ═══ */
.hp-snapshot {
  display: grid;
  gap: 0;
  margin: 0;
}

.hp-snapshot__row {
  display: grid;
  grid-template-columns: minmax(180px, 240px) 1fr;
  gap: 2rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid rgba(126, 184, 247, 0.08);
}

.hp-snapshot__row dt {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7eb8f7;
  margin: 0;
  padding-top: 0.2rem;
}

.hp-snapshot__row dd {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1.05rem;
  color: #d6dfec;
  margin: 0;
  line-height: 1.55;
}

/* ═══ Value grid ═══ */
.hp-value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.hp-value {
  background: rgba(126, 184, 247, 0.04);
  border: 1px solid rgba(126, 184, 247, 0.12);
  border-radius: 12px;
  padding: 2rem;
  transition: border-color 0.24s ease, transform 0.24s ease;
}

.hp-value:hover {
  border-color: rgba(126, 184, 247, 0.32);
  transform: translateY(-2px);
}

.hp-value__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(126, 184, 247, 0.12);
  color: #7eb8f7;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
}

.hp-value h3 {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 0 0.8rem;
  letter-spacing: -0.01em;
}

.hp-value p {
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #a8c2e0;
  font-size: 0.97rem;
  line-height: 1.6;
  margin: 0;
}

/* ═══ Proof list ═══ */
.hp-proof {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0;
}

.hp-proof li {
  border-bottom: 1px solid rgba(126, 184, 247, 0.08);
}

.hp-proof a {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 1.6rem 0;
  text-decoration: none;
  color: inherit;
  transition: padding-left 0.24s ease, color 0.24s ease;
}

.hp-proof a:hover {
  padding-left: 0.5rem;
  color: #7eb8f7;
}

.hp-proof__num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  color: #7eb8f7;
  opacity: 0.6;
  font-size: 0.9rem;
}

.hp-proof__main {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.hp-proof__head {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
}

.hp-proof__sub {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.78rem;
  color: #8aa3c2;
}

.hp-proof i {
  color: #7eb8f7;
  font-size: 1.2rem;
  opacity: 0.6;
  transition: opacity 0.24s ease, transform 0.24s ease;
}

.hp-proof a:hover i {
  opacity: 1;
  transform: translate(2px, -2px);
}

/* ═══ Fit grid ═══ */
.hp-fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.hp-fit {
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid;
}

.hp-fit--good {
  background: rgba(126, 184, 247, 0.04);
  border-color: rgba(126, 184, 247, 0.2);
}

.hp-fit--bad {
  background: rgba(220, 70, 100, 0.04);
  border-color: rgba(220, 70, 100, 0.2);
}

.hp-fit h3 {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 0 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hp-fit--good h3 { color: #7eb8f7; }
.hp-fit--bad h3 { color: #e88a9b; }

.hp-fit ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
}

.hp-fit li {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.97rem;
  line-height: 1.55;
  color: #d6dfec;
  padding-left: 1.4rem;
  position: relative;
}

.hp-fit li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 8px;
  height: 1px;
  background: rgba(126, 184, 247, 0.4);
}

/* ═══ CTA ═══ */
.hp-cta-section {
  padding: 6rem 0 2rem;
  border-top: 1px solid rgba(126, 184, 247, 0.1);
  text-align: center;
}

.hp-cta__title {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0 0 1.5rem;
  letter-spacing: -0.02em;
}

.hp-cta__lede {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #a8c2e0;
  max-width: 56ch;
  margin: 0 auto 3rem;
}

.hp-cta__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* ═══ Responsive ═══ */
@media (max-width: 720px) {
  .hp-snapshot__row {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
}
</style>
