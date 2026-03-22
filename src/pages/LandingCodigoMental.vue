<template>
  <div class="cm-landing">
    <!-- Hero -->
    <section class="cm-hero">
      <div class="cm-hero__bg"></div>
      <div class="container-wide">
        <div class="cm-hero__layout">
          <div class="cm-hero__text">
            <p class="cm-hero__eyebrow">
              <span class="cm-hero__tag">Livro</span>
              <span class="cm-hero__tagline">Programa a tua consciência</span>
            </p>
            <h1 class="cm-hero__title">
              Código<br><span class="cm-hero__accent">Mental</span>
            </h1>
            <p class="cm-hero__subtitle">
              18 capítulos. 8 protocolos. 1 desafio de 90 dias.<br>
              A linguagem da engenharia aplicada ao teu sistema operativo mental.
            </p>
            <div class="cm-hero__actions">
              <a href="#diagnostico" class="cm-btn cm-btn--gold">
                <i class="ri-stethoscope-line"></i>
                Diagnóstico Rápido
              </a>
              <a href="#ferramentas" class="cm-btn cm-btn--outline">
                <i class="ri-tools-line"></i>
                Ferramentas
              </a>
              <a
                :href="buyLink"
                target="_blank"
                rel="noopener noreferrer"
                class="cm-btn cm-btn--ghost"
              >
                <i class="ri-shopping-bag-line"></i>
                Comprar
              </a>
            </div>
          </div>
          <div class="cm-hero__visual">
            <div class="cm-cover">
              <img
                src="/imgs_blog/codigo-mental-cover.jpg"
                alt="Capa do livro Código Mental por Jorge Morais"
                class="cm-cover__img"
                loading="eager"
              />
              <div class="cm-cover__glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="cm-numbers">
      <div class="container-wide">
        <div class="cm-numbers__grid">
          <div class="cm-num" v-for="stat in stats" :key="stat.label">
            <span class="cm-num__value">{{ stat.value }}</span>
            <span class="cm-num__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Conceitos-chave -->
    <section class="cm-concepts">
      <div class="container-wide">
        <h2 class="cm-section-title">Conceitos-Chave</h2>
        <p class="cm-section-desc">
          O livro usa metáforas de engenharia para tornar o abstracto concreto e accionável.
        </p>
        <div class="cm-concepts__grid">
          <div class="cm-concept" v-for="c in concepts" :key="c.title">
            <div class="cm-concept__icon">
              <i :class="c.icon"></i>
            </div>
            <h3 class="cm-concept__title">{{ c.title }}</h3>
            <p class="cm-concept__desc">{{ c.desc }}</p>
            <span class="cm-concept__chapter">Capítulo {{ c.chapter }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Diagnóstico Rápido -->
    <section id="diagnostico" class="cm-diag">
      <div class="container-wide">
        <div class="cm-diag__layout">
          <div class="cm-diag__info">
            <h2 class="cm-section-title">Diagnóstico Rápido</h2>
            <p class="cm-diag__desc">
              Responde a 6 perguntas e descobre quais os protocolos e capítulos mais relevantes para ti neste momento.
            </p>
            <p class="cm-diag__note">
              <i class="ri-time-line"></i> Menos de 2 minutos
            </p>
          </div>

          <!-- Quiz -->
          <div class="cm-quiz" v-if="!quizDone">
            <div class="cm-quiz__progress">
              <div class="cm-quiz__bar" :style="{ width: quizProgress + '%' }"></div>
            </div>
            <p class="cm-quiz__counter">{{ currentQ + 1 }} / {{ questions.length }}</p>
            <h3 class="cm-quiz__question">{{ questions[currentQ].text }}</h3>
            <div class="cm-quiz__options">
              <button
                v-for="(opt, i) in questions[currentQ].options"
                :key="i"
                class="cm-quiz__option"
                @click="answerQuestion(i)"
              >
                <span class="cm-quiz__opt-letter">{{ ['A', 'B', 'C'][i] }}</span>
                {{ opt.text }}
              </button>
            </div>
          </div>

          <!-- Results -->
          <div class="cm-quiz-results" v-else>
            <h3 class="cm-quiz-results__title">
              <i class="ri-checkbox-circle-line"></i>
              O teu diagnóstico
            </h3>
            <div class="cm-result-cards">
              <div
                class="cm-result-card"
                v-for="r in topResults"
                :key="r.key"
              >
                <div class="cm-result-card__score">
                  <span class="cm-result-card__bar" :style="{ width: r.pct + '%' }"></span>
                </div>
                <h4 class="cm-result-card__title">{{ r.title }}</h4>
                <p class="cm-result-card__desc">{{ r.desc }}</p>
                <router-link
                  v-if="r.link"
                  :to="r.link"
                  class="cm-result-card__cta"
                >
                  {{ r.cta }} <i class="ri-arrow-right-line"></i>
                </router-link>
              </div>
            </div>
            <button class="cm-btn cm-btn--outline cm-btn--sm" @click="resetQuiz">
              <i class="ri-restart-line"></i> Refazer diagnóstico
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Citações -->
    <section class="cm-quotes">
      <div class="container-wide">
        <div class="cm-quotes__slider">
          <div class="cm-quote">
            <blockquote class="cm-quote__text">{{ quotes[activeQuote].text }}</blockquote>
            <cite class="cm-quote__cite">— Capítulo {{ quotes[activeQuote].chapter }}: {{ quotes[activeQuote].title }}</cite>
          </div>
          <div class="cm-quotes__dots">
            <button
              v-for="(q, i) in quotes"
              :key="i"
              class="cm-quotes__dot"
              :class="{ 'cm-quotes__dot--active': i === activeQuote }"
              @click="activeQuote = i"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Ferramentas -->
    <section id="ferramentas" class="cm-tools">
      <div class="container-wide">
        <h2 class="cm-section-title">Ferramentas Online</h2>
        <p class="cm-section-desc">
          Ferramentas digitais gratuitas que complementam o livro. Sem login, sem floreados.
        </p>

        <div class="cm-tools__grid">
          <!-- Ciclo Diário -->
          <router-link to="/codigo-mental/ciclo" class="cm-tool">
            <div class="cm-tool__visual">
              <i class="ri-heart-pulse-line"></i>
              <span class="cm-tool__badge">Ciclo Guiado</span>
            </div>
            <div class="cm-tool__body">
              <h3 class="cm-tool__title">Ciclo Diário</h3>
              <p class="cm-tool__desc">
                Ciclo diário guiado em 5 passos: respiração 5-5-5, leitura de objectivos e "EU SOU", intenções do dia, reflexão nocturna. Marca automaticamente o desafio de 90 dias.
              </p>
              <div class="cm-tool__tags">
                <span>Respiração 5-5-5</span>
                <span>EU SOU</span>
                <span>Intenções</span>
                <span>Reflexão</span>
                <span>Auto-Tracker</span>
              </div>
              <span class="cm-tool__cta">
                Começar Ciclo <i class="ri-arrow-right-line"></i>
              </span>
            </div>
          </router-link>

          <!-- Desafio 90 Dias -->
          <router-link to="/codigo-mental/desafio-90-dias" class="cm-tool">
            <div class="cm-tool__visual">
              <i class="ri-calendar-check-line"></i>
              <span class="cm-tool__badge">Dashboard</span>
            </div>
            <div class="cm-tool__body">
              <h3 class="cm-tool__title">Desafio 90 Dias</h3>
              <p class="cm-tool__desc">
                Dashboard do teu progresso. Dias marcados automaticamente pelo ciclo diário. Grelha visual, streaks, tendência semanal e partilha.
              </p>
              <div class="cm-tool__tags">
                <span>Grelha 90 dias</span>
                <span>Streak Counter</span>
                <span>Tendência Semanal</span>
                <span>Partilha</span>
              </div>
              <span class="cm-tool__cta">
                Ver Dashboard <i class="ri-arrow-right-line"></i>
              </span>
            </div>
          </router-link>

          <!-- Debug Financeiro -->
          <router-link to="/codigo-mental/debug-financeiro" class="cm-tool">
            <div class="cm-tool__visual">
              <i class="ri-line-chart-line"></i>
              <span class="cm-tool__badge">Educação</span>
            </div>
            <div class="cm-tool__body">
              <h3 class="cm-tool__title">Debug Financeiro</h3>
              <p class="cm-tool__desc">
                Página educativa sobre literacia financeira. Identifica os 3 bugs que herdaste, segue o roadmap do iniciante e usa o simulador de juro composto.
              </p>
              <div class="cm-tool__tags">
                <span>3 Bugs Financeiros</span>
                <span>Roadmap 6 Etapas</span>
                <span>Simulador Juro Composto</span>
                <span>Recursos</span>
              </div>
              <span class="cm-tool__cta">
                Explorar <i class="ri-arrow-right-line"></i>
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Capítulos -->
    <section class="cm-chapters">
      <div class="container-wide">
        <div class="cm-chapters__layout">
          <div class="cm-chapters__text">
            <h2 class="cm-section-title">18 Capítulos</h2>
            <p>
              O <strong>Código Mental</strong> usa a linguagem da engenharia de software para mapear
              e reprogramar padrões mentais. Debugging de crenças herdadas, firewalls contra ruído,
              protocolos de crise e commits diários para uma vida mais intencional.
            </p>
            <router-link to="/about" class="cm-link">
              Sobre o Autor <i class="ri-arrow-right-line"></i>
            </router-link>
          </div>
          <div class="cm-chapters__list">
            <div class="cm-ch" v-for="ch in chapters" :key="ch.num">
              <span class="cm-ch__num">{{ ch.num }}</span>
              <span class="cm-ch__name">{{ ch.name }}</span>
              <i v-if="ch.tool" class="ri-tools-line cm-ch__tool" :title="ch.tool"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cm-final">
      <div class="container-wide">
        <div class="cm-final__box">
          <h2 class="cm-final__title">Pronto para reprogramar?</h2>
          <p class="cm-final__desc">
            Começa pelo diagnóstico rápido, inicia o ciclo diário ou acompanha o teu progresso de 90 dias.
          </p>
          <div class="cm-final__actions">
            <router-link to="/codigo-mental/ciclo" class="cm-btn cm-btn--gold">
              <i class="ri-heart-pulse-line"></i> Ciclo Diário
            </router-link>
            <router-link to="/codigo-mental/desafio-90-dias" class="cm-btn cm-btn--outline">
              <i class="ri-calendar-check-line"></i> Dashboard 90 Dias
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const buyLink = ref('#')

// ── Stats ──
const stats = [
  { value: '18', label: 'Capítulos' },
  { value: '8', label: 'Protocolos' },
  { value: '90', label: 'Dias de Desafio' },
  { value: '5', label: 'Ferramentas Online' },
]

// ── Concepts ──
const concepts = [
  {
    title: 'Código Legado',
    desc: 'Padrões herdados dos teus pais, cultura e experiências que correm em background sem que tenhas escolhido.',
    icon: 'ri-git-branch-line',
    chapter: 3,
  },
  {
    title: 'O Firewall',
    desc: '3 perguntas que filtram tudo o que entra no teu sistema — informação, opiniões, ruído.',
    icon: 'ri-shield-check-line',
    chapter: 5,
  },
  {
    title: 'Coerência Cardíaca',
    desc: 'O protocolo 5-5-5: 5 segundos a inspirar, 5 a expirar, durante 5 minutos. Reset fisiológico comprovado.',
    icon: 'ri-heart-pulse-line',
    chapter: 8,
  },
  {
    title: 'O SAR',
    desc: 'O Sistema de Activação Reticular — o filtro do teu cérebro. Programa-o com objectivos escritos e ele encontra oportunidades.',
    icon: 'ri-focus-3-line',
    chapter: 12,
  },
  {
    title: 'Protocolo Diário',
    desc: '20 minutos de manhã, 5 à noite. A rotina mínima que muda tudo se mantida com consistência.',
    icon: 'ri-calendar-check-line',
    chapter: 14,
  },
  {
    title: 'Debug Financeiro',
    desc: '3 bugs financeiros que herdaste e 6 passos para os corrigir — do diagnóstico ao primeiro investimento.',
    icon: 'ri-bug-line',
    chapter: 16,
  },
]

// ── Chapters ──
const chapters = [
  { num: '01', name: 'O Primeiro Comando' },
  { num: '02', name: 'O Sistema Operativo' },
  { num: '03', name: 'Código Legado', tool: 'Auditoria de Código Legado' },
  { num: '04', name: 'A Arquitectura da Identidade' },
  { num: '05', name: 'O Jardim e o Firewall', tool: 'Firewall 3 Perguntas' },
  { num: '06', name: 'O Compilador Emocional' },
  { num: '07', name: 'A Linguagem do Corpo' },
  { num: '08', name: 'O Motor Silencioso', tool: 'Timer 5-5-5' },
  { num: '09', name: 'Relações como Arquitectura' },
  { num: '10', name: 'A Mecânica da Resiliência', tool: 'Protocolo de Crise' },
  { num: '11', name: 'Da Intenção à Execução' },
  { num: '12', name: 'O Cartão Amarelecido', tool: '5 Objectivos' },
  { num: '13', name: 'As Armadilhas do Caminho' },
  { num: '14', name: 'O Protocolo Diário', tool: 'Kit Mental Completo' },
  { num: '15', name: 'A Revolução Interior' },
  { num: '16', name: 'Debug Financeiro', tool: 'Página Educativa' },
  { num: '17', name: 'O Firewall Contra o Ruído' },
  { num: '18', name: 'Mapa' },
]

// ── Quotes ──
const quotes = [
  {
    text: 'O teu cérebro não distingue entre uma crença que escolheste e uma que herdaste. Corre tudo da mesma forma — em background, sem perguntar.',
    chapter: 3,
    title: 'Código Legado',
  },
  {
    text: 'Não somos o que pensamos. Somos o que fazemos repetidamente com o que pensamos.',
    chapter: 11,
    title: 'Da Intenção à Execução',
  },
  {
    text: 'Escrevi 5 objectivos num cartão. Cinco anos depois, os 5 estavam cumpridos. Coincidência? Não. Programação.',
    chapter: 12,
    title: 'O Cartão Amarelecido',
  },
  {
    text: 'Não precisas de mais motivação. Precisas de um protocolo.',
    chapter: 14,
    title: 'O Protocolo Diário',
  },
  {
    text: 'Ninguém te ensinou sobre dinheiro — isso é um facto. Continuares sem aprender — isso é uma escolha.',
    chapter: 16,
    title: 'Debug Financeiro',
  },
]

const activeQuote = ref(0)
let quoteInterval = null

onMounted(() => {
  quoteInterval = setInterval(() => {
    activeQuote.value = (activeQuote.value + 1) % quotes.length
  }, 6000)
})

onBeforeUnmount(() => {
  if (quoteInterval) clearInterval(quoteInterval)
})

// ── Diagnostic Quiz ──
const currentQ = ref(0)
const answers = ref([])
const quizDone = ref(false)

const quizProgress = computed(() => ((currentQ.value) / questions.length) * 100)

const questions = [
  {
    text: 'Quando acordas de manhã, o primeiro impulso é...',
    options: [
      { text: 'Pegar no telemóvel e verificar notificações', tags: ['firewall', 'rotina'] },
      { text: 'Ficar na cama sem vontade de começar o dia', tags: ['crise', 'resiliencia'] },
      { text: 'Levantar e seguir a rotina, mas sem muita intenção', tags: ['rotina', 'objectivos'] },
    ],
  },
  {
    text: 'Quando algo corre mal no trabalho ou na vida, tends a...',
    options: [
      { text: 'Entrar em modo de stress e reagir emocionalmente', tags: ['crise', 'resiliencia'] },
      { text: 'Evitar o problema e distrair-te com outra coisa', tags: ['legado', 'firewall'] },
      { text: 'Analisar o que aconteceu, mas ruminar demasiado', tags: ['legado', 'rotina'] },
    ],
  },
  {
    text: 'Sobre os teus objectivos a 5 anos, dirias que...',
    options: [
      { text: 'Não os tenho definidos ou escritos', tags: ['objectivos', 'rotina'] },
      { text: 'Tenho uma ideia vaga mas nada concreto', tags: ['objectivos', 'legado'] },
      { text: 'Sei o que quero mas não tenho um plano', tags: ['objectivos', 'financeiro'] },
    ],
  },
  {
    text: 'Em relação a dinheiro e investimentos...',
    options: [
      { text: 'Não sei por onde começar, ninguém me ensinou', tags: ['financeiro', 'legado'] },
      { text: 'Gasto tudo e não consigo poupar', tags: ['financeiro', 'rotina'] },
      { text: 'Poupo algo mas não invisto, tenho medo', tags: ['financeiro', 'legado'] },
    ],
  },
  {
    text: 'Quanto tempo por dia passas a consumir conteúdo sem intenção (scroll, notícias, etc.)?',
    options: [
      { text: 'Mais de 2 horas', tags: ['firewall', 'rotina'] },
      { text: 'Entre 30 min e 2 horas', tags: ['firewall', 'objectivos'] },
      { text: 'Menos de 30 min, mas sem filtro', tags: ['firewall', 'legado'] },
    ],
  },
  {
    text: 'Se pudesses mudar uma coisa na tua vida agora, seria...',
    options: [
      { text: 'Ter mais disciplina e consistência', tags: ['rotina', 'objectivos'] },
      { text: 'Libertar-me de padrões que não escolhi', tags: ['legado', 'crise'] },
      { text: 'Ter mais clareza sobre o meu futuro', tags: ['objectivos', 'financeiro'] },
    ],
  },
]

const resultMap = {
  rotina: {
    title: 'Rotina Matinal + Nocturna',
    desc: 'Precisas de um protocolo diário — 20 minutos de manhã e 5 à noite mudam tudo.',
    link: '/codigo-mental/kit',
    cta: 'Montar Kit Mental',
  },
  crise: {
    title: 'Protocolo de Crise',
    desc: 'Quando tudo parece desabar, 3 perguntas escritas trazem-te de volta ao controlo.',
    link: '/codigo-mental/kit',
    cta: 'Protocolo de Crise',
  },
  legado: {
    title: 'Auditoria de Código Legado',
    desc: 'Tens padrões herdados a correr em background. Hora de auditar e decidir o que fica.',
    link: '/codigo-mental/kit',
    cta: 'Auditoria de Padrões',
  },
  objectivos: {
    title: '5 Objectivos a 5 Anos',
    desc: 'Sem objectivos escritos, o SAR não tem coordenadas. Escreve-os e activa o filtro.',
    link: '/codigo-mental/kit',
    cta: 'Definir Objectivos',
  },
  firewall: {
    title: 'Firewall Anti-Ruído',
    desc: 'Demasiado input, pouco filtro. As 3 perguntas do Firewall mudam o que entra no teu sistema.',
    link: '/codigo-mental/kit',
    cta: 'Activar Firewall',
  },
  financeiro: {
    title: 'Debug Financeiro',
    desc: 'Bugs financeiros herdados a impedir o teu progresso. 6 passos para corrigir o sistema.',
    link: '/codigo-mental/debug-financeiro',
    cta: 'Debug Financeiro',
  },
  resiliencia: {
    title: 'Mecânica da Resiliência',
    desc: 'Resiliência não é aguentar tudo — é ter o diagnóstico certo no momento certo.',
    link: '/codigo-mental/kit',
    cta: 'Protocolo de Crise',
  },
}

const topResults = computed(() => {
  const scores = {}
  answers.value.forEach(tags => {
    tags.forEach(tag => {
      scores[tag] = (scores[tag] || 0) + 1
    })
  })

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)

  const maxScore = sorted[0]?.[1] || 1

  return sorted.map(([key, score]) => ({
    key,
    ...resultMap[key],
    pct: Math.round((score / maxScore) * 100),
  }))
})

function answerQuestion(optionIndex) {
  const tags = questions[currentQ.value].options[optionIndex].tags
  answers.value.push(tags)

  if (currentQ.value < questions.length - 1) {
    currentQ.value++
  } else {
    quizDone.value = true
  }
}

function resetQuiz() {
  currentQ.value = 0
  answers.value = []
  quizDone.value = false
}
</script>

<style scoped>
.cm-landing {
  min-height: 100vh;
  padding-top: 8rem;
}

/* ── Hero ── */
.cm-hero {
  position: relative;
  padding: 6rem 0 8rem;
  overflow: hidden;
}

.cm-hero__bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(74, 134, 232, 0.06) 0%, transparent 60%);
  pointer-events: none;
}

.cm-hero__layout {
  display: grid;
  grid-template-columns: 1fr 34rem;
  gap: 6rem;
  align-items: center;
  position: relative;
}

.cm-hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.cm-hero__tag {
  font-size: 1.1rem;
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c9a84c;
  background: rgba(201, 168, 76, 0.1);
  padding: 0.4rem 1.2rem;
  border-radius: 2rem;
  border: 1px solid rgba(201, 168, 76, 0.2);
}

.cm-hero__tagline {
  font-size: 1.3rem;
  color: var(--color-muted);
  font-style: italic;
}

.cm-hero__title {
  font-size: clamp(4rem, 7vw, 7rem);
  font-weight: var(--fw-bold);
  color: var(--color-white);
  line-height: 1;
  margin-bottom: 2.4rem;
}

.cm-hero__accent {
  background: linear-gradient(135deg, #c9a84c, #e8d5a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cm-hero__subtitle {
  font-size: var(--fs-md);
  color: var(--color-text);
  line-height: 1.8;
  max-width: 52rem;
  margin-bottom: 3.2rem;
}

.cm-hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ── Cover ── */
.cm-cover {
  position: relative;
}

.cm-cover__img {
  width: 100%;
  height: auto;
  border-radius: 0.8rem;
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.4),
    0 8px 16px rgba(0, 0, 0, 0.3);
}

.cm-cover__glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

/* ── Buttons ── */
.cm-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: var(--border-radius);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
  border: 1px solid transparent;
}

.cm-btn--gold {
  background: linear-gradient(135deg, #c9a84c, #b8943e);
  color: #0c1118;
  border: none;
}

.cm-btn--gold:hover {
  background: linear-gradient(135deg, #d4b65c, #c9a84c);
  color: #0c1118;
  transform: translateY(-1px);
}

.cm-btn--outline {
  border: 1px solid var(--color-border);
  color: var(--color-white);
  background: transparent;
}

.cm-btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.cm-btn--ghost {
  color: var(--color-muted);
  background: transparent;
}

.cm-btn--ghost:hover {
  color: var(--color-white);
}

.cm-btn--sm {
  padding: 0.8rem 1.6rem;
  font-size: 1.2rem;
}

/* ── Section Shared ── */
.cm-section-title {
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 1.2rem;
}

.cm-section-desc {
  font-size: var(--fs-md);
  color: var(--color-muted);
  max-width: 56rem;
  margin-bottom: 4rem;
  line-height: 1.7;
}

/* ── Numbers ── */
.cm-numbers {
  padding: 2rem 0 4rem;
}

.cm-numbers__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.cm-num {
  text-align: center;
  padding: 2.4rem 1.6rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
}

.cm-num__value {
  display: block;
  font-size: 3.6rem;
  font-weight: var(--fw-bold);
  color: #c9a84c;
  font-family: 'JetBrains Mono', monospace;
  line-height: 1;
  margin-bottom: 0.6rem;
}

.cm-num__label {
  font-size: 1.2rem;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── Concepts ── */
.cm-concepts {
  padding: 4rem 0 6rem;
}

.cm-concepts__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.cm-concept {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2.4rem;
  transition: var(--transition);
}

.cm-concept:hover {
  border-color: rgba(201, 168, 76, 0.3);
  transform: translateY(-2px);
}

.cm-concept__icon {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(201, 168, 76, 0.08);
  border-radius: 0.8rem;
  margin-bottom: 1.6rem;
  font-size: 2rem;
  color: #c9a84c;
}

.cm-concept__title {
  font-size: 1.6rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.8rem;
}

.cm-concept__desc {
  font-size: 1.3rem;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.cm-concept__chapter {
  font-size: 1.1rem;
  color: var(--color-muted);
  font-family: 'JetBrains Mono', monospace;
}

/* ── Diagnostic ── */
.cm-diag {
  padding: 6rem 0;
}

.cm-diag__layout {
  display: grid;
  grid-template-columns: 32rem 1fr;
  gap: 4rem;
  align-items: start;
}

.cm-diag__desc {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 1.6rem;
}

.cm-diag__note {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.2rem;
  color: var(--color-muted);
}

/* ── Quiz ── */
.cm-quiz {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1.2rem;
  padding: 3.2rem;
}

.cm-quiz__progress {
  height: 0.4rem;
  background: var(--color-border);
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  overflow: hidden;
}

.cm-quiz__bar {
  height: 100%;
  background: linear-gradient(90deg, #c9a84c, #e8d5a0);
  border-radius: 0.2rem;
  transition: width 0.4s ease;
}

.cm-quiz__counter {
  font-size: 1.2rem;
  color: var(--color-muted);
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 1.2rem;
}

.cm-quiz__question {
  font-size: 1.8rem;
  font-weight: var(--fw-semibold);
  color: var(--color-white);
  line-height: 1.4;
  margin-bottom: 2.4rem;
}

.cm-quiz__options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.cm-quiz__option {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 1.4rem 1.6rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
  border-radius: 0.8rem;
  font-size: var(--fs-sm);
  color: var(--color-text);
  text-align: left;
  cursor: pointer;
  transition: var(--transition);
}

.cm-quiz__option:hover {
  border-color: #c9a84c;
  background: rgba(201, 168, 76, 0.05);
  color: var(--color-white);
}

.cm-quiz__opt-letter {
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(201, 168, 76, 0.1);
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
  color: #c9a84c;
  flex-shrink: 0;
  font-family: 'JetBrains Mono', monospace;
}

/* ── Quiz Results ── */
.cm-quiz-results {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1.2rem;
  padding: 3.2rem;
}

.cm-quiz-results__title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.8rem;
  font-weight: var(--fw-bold);
  color: var(--color-success);
  margin-bottom: 2.4rem;
}

.cm-result-cards {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
}

.cm-result-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
  border-radius: 0.8rem;
  padding: 2rem;
}

.cm-result-card__score {
  height: 0.4rem;
  background: var(--color-border);
  border-radius: 0.2rem;
  margin-bottom: 1.2rem;
  overflow: hidden;
}

.cm-result-card__bar {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #c9a84c, #e8d5a0);
  border-radius: 0.2rem;
}

.cm-result-card__title {
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.6rem;
}

.cm-result-card__desc {
  font-size: 1.3rem;
  color: var(--color-text);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.cm-result-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  color: #c9a84c;
  font-weight: var(--fw-semibold);
  text-decoration: none;
}

.cm-result-card__cta:hover {
  color: #e8d5a0;
}

.cm-result-card__cta i {
  transition: var(--transition);
}

.cm-result-card__cta:hover i {
  transform: translateX(4px);
}

/* ── Quotes ── */
.cm-quotes {
  padding: 4rem 0;
}

.cm-quotes__slider {
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
}

.cm-quote__text {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: var(--color-white);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
  min-height: 8rem;
  position: relative;
  padding: 0 2rem;
}

.cm-quote__text::before {
  content: '\201C';
  position: absolute;
  left: -1rem;
  top: -1.5rem;
  font-size: 6rem;
  color: rgba(201, 168, 76, 0.15);
  font-style: normal;
  line-height: 1;
}

.cm-quote__cite {
  font-size: 1.3rem;
  color: #c9a84c;
  font-style: normal;
}

.cm-quotes__dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
}

.cm-quotes__dot {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: var(--color-border);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 0;
}

.cm-quotes__dot--active {
  background: #c9a84c;
  transform: scale(1.3);
}

/* ── Tools ── */
.cm-tools {
  padding: 6rem 0;
}

.cm-tools__grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.cm-tool {
  display: grid;
  grid-template-columns: 20rem 1fr;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1.2rem;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

.cm-tool:hover {
  border-color: rgba(201, 168, 76, 0.3);
  transform: translateY(-2px);
  color: inherit;
}

.cm-tool__visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  background: rgba(201, 168, 76, 0.04);
  padding: 3rem 2rem;
  border-right: 1px solid var(--color-border);
}

.cm-tool__visual > i {
  font-size: 3.6rem;
  color: #c9a84c;
}

.cm-tool__badge {
  font-size: 1rem;
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #c9a84c;
  background: rgba(201, 168, 76, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 2rem;
}

.cm-tool__body {
  padding: 2.4rem 3rem;
}

.cm-tool__title {
  font-size: 2rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.8rem;
}

.cm-tool__desc {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 1.6rem;
}

.cm-tool__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

.cm-tool__tags span {
  font-size: 1.1rem;
  color: var(--color-muted);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.3rem 0.8rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
}

.cm-tool__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--fs-sm);
  color: #c9a84c;
  font-weight: var(--fw-semibold);
}

.cm-tool:hover .cm-tool__cta i {
  transform: translateX(4px);
}

.cm-tool__cta i {
  transition: var(--transition);
}

/* ── Chapters ── */
.cm-chapters {
  padding: 6rem 0;
}

.cm-chapters__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
}

.cm-chapters__text p {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cm-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--fs-sm);
  color: #c9a84c;
  font-weight: var(--fw-semibold);
  text-decoration: none;
}

.cm-link:hover {
  color: #e8d5a0;
}

.cm-link:hover i {
  transform: translateX(4px);
}

.cm-link i {
  transition: var(--transition);
}

.cm-chapters__list {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.cm-ch {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem 1.2rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.cm-ch:hover {
  background: var(--color-bg-secondary);
}

.cm-ch__num {
  font-size: 1.1rem;
  font-weight: var(--fw-bold);
  color: #c9a84c;
  font-family: 'JetBrains Mono', monospace;
  min-width: 2.4rem;
}

.cm-ch__name {
  font-size: 1.3rem;
  color: var(--color-text);
  flex: 1;
}

.cm-ch__tool {
  font-size: 1.4rem;
  color: var(--color-primary);
  opacity: 0.5;
}

.cm-ch:hover .cm-ch__tool {
  opacity: 1;
}

/* ── Final CTA ── */
.cm-final {
  padding: 4rem 0 8rem;
}

.cm-final__box {
  text-align: center;
  background: linear-gradient(135deg, rgba(201, 168, 76, 0.06), rgba(74, 134, 232, 0.04));
  border: 1px solid rgba(201, 168, 76, 0.15);
  border-radius: 1.6rem;
  padding: 5rem 3rem;
}

.cm-final__title {
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 1.2rem;
}

.cm-final__desc {
  font-size: var(--fs-md);
  color: var(--color-muted);
  margin-bottom: 3rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

.cm-final__actions {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .cm-hero__layout {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .cm-cover__img {
    max-width: 28rem;
    margin: 0 auto;
    display: block;
  }

  .cm-numbers__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cm-concepts__grid {
    grid-template-columns: 1fr;
  }

  .cm-diag__layout {
    grid-template-columns: 1fr;
  }

  .cm-tool {
    grid-template-columns: 1fr;
  }

  .cm-tool__visual {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
    padding: 2rem;
    flex-direction: row;
  }

  .cm-chapters__layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .cm-landing {
    padding-top: 7rem;
  }

  .cm-hero {
    padding: 3rem 0 5rem;
  }

  .cm-hero__title {
    font-size: 4rem;
  }

  .cm-btn {
    width: 100%;
    justify-content: center;
  }

  .cm-hero__actions {
    flex-direction: column;
  }

  .cm-final__actions {
    flex-direction: column;
    align-items: center;
  }

  .cm-quiz {
    padding: 2rem;
  }

  .cm-quiz__question {
    font-size: 1.5rem;
  }
}
</style>
