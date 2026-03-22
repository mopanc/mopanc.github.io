<template>
  <div class="df-page">
    <!-- Header -->
    <section class="df-header">
      <div class="container-wide">
        <router-link to="/codigo-mental" class="df-back">
          <i class="ri-arrow-left-line"></i> Código Mental
        </router-link>
        <h1 class="df-title">Debug Financeiro</h1>
        <p class="df-subtitle">
          Conteúdo educativo sobre literacia financeira. Dos bugs que herdaste ao teu primeiro investimento.
        </p>
        <div class="df-disclaimer">
          <i class="ri-information-line"></i>
          <span>Conteúdo educativo. Não é aconselhamento financeiro. Consulta um profissional certificado antes de tomar decisões.</span>
        </div>
      </div>
    </section>

    <!-- 3 Bugs -->
    <section class="df-section">
      <div class="container-wide">
        <h2 class="df-section-title">Os 3 Bugs que Herdaste</h2>
        <p class="df-section-ref">Capítulo 16, p. 117-128</p>

        <div class="df-bugs">
          <div class="df-bug" v-for="bug in bugs" :key="bug.id">
            <div class="df-bug__header">
              <span class="df-bug__num">Bug {{ bug.id }}</span>
              <span class="df-bug__severity">{{ bug.severity }}</span>
            </div>
            <h3 class="df-bug__title">{{ bug.belief }}</h3>
            <div class="df-bug__fix">
              <span class="df-bug__fix-label">
                <i class="ri-git-merge-line"></i> Correcção
              </span>
              <p>{{ bug.fix }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section class="df-section">
      <div class="container-wide">
        <h2 class="df-section-title">Roadmap — Por Onde Começar</h2>

        <div class="df-roadmap">
          <!-- Etapa 1 -->
          <div class="df-etapa" v-for="(etapa, i) in roadmap" :key="i">
            <div class="df-etapa__marker">
              <span class="df-etapa__num">{{ i + 1 }}</span>
              <div class="df-etapa__line" v-if="i < roadmap.length - 1"></div>
            </div>
            <div class="df-etapa__content">
              <div class="df-etapa__header">
                <h3 class="df-etapa__title">{{ etapa.title }}</h3>
                <span class="df-etapa__timing" v-if="etapa.timing">{{ etapa.timing }}</span>
              </div>
              <p class="df-etapa__desc">{{ etapa.desc }}</p>

              <!-- Actions -->
              <ul class="df-etapa__actions" v-if="etapa.actions">
                <li v-for="(action, j) in etapa.actions" :key="j">{{ action }}</li>
              </ul>

              <!-- Books -->
              <div class="df-etapa__books" v-if="etapa.books">
                <p class="df-etapa__books-label">Leitura recomendada:</p>
                <div class="df-book" v-for="(book, j) in etapa.books" :key="j">
                  <i class="ri-book-2-line"></i>
                  <div>
                    <strong>{{ book.title }}</strong>
                    <span class="df-book__author"> — {{ book.author }}</span>
                  </div>
                </div>
              </div>

              <!-- Calculator -->
              <div class="df-calculator" v-if="etapa.calculator">
                <h4 class="df-calculator__title">
                  <i class="ri-calculator-line"></i>
                  {{ etapa.calculator.title }}
                </h4>
                <div class="df-calculator__inputs">
                  <div class="df-calc-field" v-for="field in etapa.calculator.fields" :key="field.key">
                    <label class="df-calc-label">{{ field.label }}</label>
                    <div class="df-calc-input-wrap">
                      <input
                        v-model.number="calcValues[field.key]"
                        type="number"
                        class="df-calc-input"
                        :placeholder="field.placeholder"
                        :min="field.min"
                        :step="field.step"
                      />
                      <span class="df-calc-unit" v-if="field.unit">{{ field.unit }}</span>
                    </div>
                  </div>
                </div>
                <div class="df-calculator__result" v-if="calcResult !== null">
                  <div class="df-result-row">
                    <span>Total investido:</span>
                    <strong>{{ formatCurrency(calcInvested) }}</strong>
                  </div>
                  <div class="df-result-row df-result-row--highlight">
                    <span>Valor final com juro composto:</span>
                    <strong>{{ formatCurrency(calcResult) }}</strong>
                  </div>
                  <div class="df-result-row">
                    <span>Ganhos com juros:</span>
                    <strong class="df-result-gain">+{{ formatCurrency(calcResult - calcInvested) }}</strong>
                  </div>
                </div>
              </div>

              <!-- Note -->
              <div class="df-etapa__note" v-if="etapa.note">
                <i class="ri-lightbulb-line"></i>
                <span>{{ etapa.note }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Concepts -->
    <section class="df-section">
      <div class="container-wide">
        <h2 class="df-section-title">Conceitos Base</h2>
        <p class="df-section-desc">Termos que precisas de entender antes de investir.</p>

        <div class="df-concepts">
          <div class="df-concept" v-for="concept in concepts" :key="concept.term">
            <h3 class="df-concept__term">{{ concept.term }}</h3>
            <p class="df-concept__def">{{ concept.definition }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="df-section">
      <div class="container-wide">
        <h2 class="df-section-title">Recursos</h2>

        <div class="df-resources">
          <a
            v-for="resource in resources"
            :key="resource.name"
            :href="resource.url"
            target="_blank"
            rel="noopener noreferrer"
            class="df-resource"
          >
            <i :class="resource.icon"></i>
            <div>
              <strong>{{ resource.name }}</strong>
              <p>{{ resource.desc }}</p>
            </div>
            <i class="ri-external-link-line df-resource__ext"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const bugs = [
  {
    id: 1,
    severity: 'critical',
    belief: '"O dinheiro é finito e perigoso"',
    fix: 'O dinheiro é uma ferramenta. Pode ser criado, multiplicado e gerido. O perigo está na ignorância, não no dinheiro em si.',
  },
  {
    id: 2,
    severity: 'high',
    belief: '"Os ricos são desonestos"',
    fix: 'Riqueza é o resultado de decisões consistentes ao longo do tempo. Associar dinheiro a desonestidade impede-te de o procurar sem culpa.',
  },
  {
    id: 3,
    severity: 'high',
    belief: '"Ninguém me ensinou"',
    fix: 'Não teres sido ensinado é um facto. Continuares sem aprender é uma escolha. A educação financeira está acessível — o primeiro passo é teu.',
  },
]

const roadmap = [
  {
    title: 'Diagnosticar',
    timing: 'Mês 1',
    desc: 'Antes de corrigir, precisas de ver o problema. Regista todas as tuas despesas durante 30 dias — sem julgamento, sem alterar hábitos. Apenas observa.',
    actions: [
      'Regista cada gasto durante 30 dias (app, folha de cálculo ou papel)',
      'Categoriza: essencial vs. dispensável',
      'Calcula a tua taxa de poupança actual',
    ],
  },
  {
    title: 'Educar',
    timing: 'Meses 1-3',
    desc: 'Investe tempo antes de investir dinheiro. Lê pelo menos um livro sobre finanças pessoais.',
    books: [
      { title: 'O Homem Mais Rico da Babilónia', author: 'George Clason' },
      { title: 'A Psicologia do Dinheiro', author: 'Morgan Housel' },
      { title: 'O Investidor Inteligente', author: 'Benjamin Graham' },
    ],
  },
  {
    title: 'Fundo de Emergência',
    timing: 'Meses 3-6',
    desc: 'Antes de investir, cria uma rede de segurança. O fundo de emergência cobre 3-6 meses de despesas e protege-te de imprevistos sem recorrer a dívida.',
    actions: [
      'Calcula as tuas despesas mensais essenciais',
      'Multiplica por 6 — esse é o teu objectivo',
      'Guarda numa conta separada (sem tentação de gastar)',
      'Automatiza a transferência mensal',
    ],
  },
  {
    title: 'Inverter a Ordem',
    timing: 'A partir do Mês 6',
    desc: 'A maioria recebe e gasta. O que sobra, poupa. Inverte: recebe, investe/poupa primeiro, gasta o resto. É a diferença entre intenção e resultado.',
    actions: [
      'Define uma % fixa do rendimento para investir (começa com 10-20%)',
      'Automatiza a transferência no dia em que recebes',
      'Referência: 50% necessidades / 30% desejos / 20% futuro',
    ],
    note: 'A regra 50/30/20 é um ponto de partida, não uma lei. Ajusta à tua realidade.',
  },
  {
    title: 'Primeiros Investimentos',
    timing: 'Educação contínua',
    desc: 'Investir não é especular. Não é "jogar na bolsa". É colocar o dinheiro a trabalhar para ti ao longo do tempo.',
    calculator: {
      title: 'Simulador de Juro Composto',
      fields: [
        { key: 'monthly', label: 'Investimento mensal', placeholder: '100', unit: '€', min: 1, step: 10 },
        { key: 'years', label: 'Período', placeholder: '20', unit: 'anos', min: 1, step: 1 },
        { key: 'rate', label: 'Retorno anual estimado', placeholder: '7', unit: '%', min: 0, step: 0.5 },
      ],
    },
    note: 'Retornos passados não garantem retornos futuros. Este simulador é educativo. Consulta um profissional antes de investir.',
  },
  {
    title: 'Mentalidade de Longo Prazo',
    desc: 'O melhor investimento é em ti próprio: formação, saúde, ferramentas de trabalho. O segundo melhor é tempo no mercado — não timing do mercado.',
    actions: [
      'Não tentes adivinhar o mercado (time the market)',
      'Investe regularmente independentemente das notícias (DCA)',
      'Pensa em décadas, não em semanas',
      'O investimento mais subestimado: a tua saúde e educação',
    ],
  },
]

const concepts = [
  {
    term: 'ETF (Exchange-Traded Fund)',
    definition: 'Fundo que agrupa muitas acções ou obrigações num só produto. Em vez de comprares acções de 500 empresas, compras 1 ETF que as representa todas. Diversificação instantânea, custos baixos.',
  },
  {
    term: 'Juro Composto',
    definition: 'Ganhas juros sobre os juros anteriores. O efeito bola de neve. 100€/mês a 7% anual durante 20 anos = ~52.000€ (investiste 24.000€, ganhaste ~28.000€ em juros).',
  },
  {
    term: 'DCA (Dollar Cost Averaging)',
    definition: 'Investir a mesma quantia regularmente (ex: 100€/mês) independentemente do preço do mercado. Remove a emoção da equação e suaviza a volatilidade.',
  },
  {
    term: 'Diversificação',
    definition: 'Não colocar todos os ovos no mesmo cesto. Distribuir o investimento por diferentes tipos de activos, regiões e sectores para reduzir o risco.',
  },
  {
    term: 'Horizonte Temporal',
    definition: 'O tempo que planeias manter o investimento. Quanto mais longo, mais risco podes aceitar porque tens tempo para recuperar de quedas.',
  },
]

const resources = [
  {
    name: 'CMVM',
    desc: 'Comissão do Mercado de Valores Mobiliários — regulador em Portugal',
    url: 'https://www.cmvm.pt',
    icon: 'ri-shield-check-line',
  },
  {
    name: 'Todos Contam',
    desc: 'Portal de educação financeira do Banco de Portugal',
    url: 'https://www.todoscontam.pt',
    icon: 'ri-bank-line',
  },
  {
    name: 'Investopedia',
    desc: 'Enciclopédia de termos financeiros (inglês)',
    url: 'https://www.investopedia.com',
    icon: 'ri-book-open-line',
  },
]

// Calculator
const calcValues = reactive({
  monthly: 100,
  years: 20,
  rate: 7,
})

const calcInvested = computed(() => {
  return (calcValues.monthly || 0) * (calcValues.years || 0) * 12
})

const calcResult = computed(() => {
  const m = calcValues.monthly || 0
  const y = calcValues.years || 0
  const r = (calcValues.rate || 0) / 100
  if (m <= 0 || y <= 0) return null

  const monthlyRate = r / 12
  const months = y * 12

  if (monthlyRate === 0) return m * months

  // Future value of annuity
  return m * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
})

function formatCurrency(value) {
  if (value === null) return '—'
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}
</script>

<style scoped>
.df-page {
  min-height: 100vh;
  padding-top: 10rem;
  padding-bottom: 6rem;
}

/* ── Header ── */
.df-header {
  padding: 2rem 0 4rem;
}

.df-back {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--fs-sm);
  color: var(--color-muted);
  text-decoration: none;
  margin-bottom: 2rem;
}

.df-back:hover {
  color: var(--color-primary);
}

.df-title {
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.8rem;
}

.df-subtitle {
  font-size: var(--fs-md);
  color: var(--color-muted);
  max-width: 56rem;
  margin-bottom: 2rem;
}

.df-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(245, 183, 68, 0.06);
  border: 1px solid rgba(245, 183, 68, 0.15);
  border-radius: var(--border-radius);
  padding: 1.2rem 1.6rem;
  font-size: 1.3rem;
  color: var(--color-warning);
  max-width: 60rem;
}

.df-disclaimer i {
  font-size: 1.6rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

/* ── Sections ── */
.df-section {
  padding: 4rem 0;
}

.df-section-title {
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 0.6rem;
}

.df-section-ref {
  font-size: 1.2rem;
  color: var(--color-muted);
  margin-bottom: 3rem;
}

.df-section-desc {
  font-size: var(--fs-sm);
  color: var(--color-muted);
  margin-bottom: 3rem;
}

/* ── Bugs ── */
.df-bugs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.df-bug {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2.4rem;
}

.df-bug__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
}

.df-bug__num {
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
  color: var(--color-danger);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'JetBrains Mono', monospace;
}

.df-bug__severity {
  font-size: 1rem;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  background: rgba(255, 107, 107, 0.1);
  color: var(--color-danger);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.df-bug__title {
  font-size: 1.6rem;
  font-weight: var(--fw-semibold);
  color: var(--color-white);
  font-style: italic;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.df-bug__fix {
  border-top: 1px solid var(--color-border);
  padding-top: 1.6rem;
}

.df-bug__fix-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
  color: var(--color-success);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.8rem;
}

.df-bug__fix p {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.6;
}

/* ── Roadmap ── */
.df-roadmap {
  max-width: 72rem;
}

.df-etapa {
  display: flex;
  gap: 2.4rem;
}

.df-etapa__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.df-etapa__num {
  width: 3.6rem;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: #fff;
  border-radius: 50%;
  font-size: 1.4rem;
  font-weight: var(--fw-bold);
  font-family: 'JetBrains Mono', monospace;
}

.df-etapa__line {
  width: 2px;
  flex: 1;
  background: var(--color-border);
  margin: 0.8rem 0;
}

.df-etapa__content {
  padding-bottom: 4rem;
  flex: 1;
}

.df-etapa__header {
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
  margin-bottom: 1rem;
}

.df-etapa__title {
  font-size: 1.8rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
}

.df-etapa__timing {
  font-size: 1.2rem;
  color: var(--color-muted);
  padding: 0.2rem 0.8rem;
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius);
}

.df-etapa__desc {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 1.6rem;
}

.df-etapa__actions {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.6rem;
}

.df-etapa__actions li {
  font-size: 1.3rem;
  color: var(--color-text);
  padding-left: 1.6rem;
  position: relative;
}

.df-etapa__actions li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* ── Books ── */
.df-etapa__books {
  margin-top: 1.6rem;
}

.df-etapa__books-label {
  font-size: 1.2rem;
  color: var(--color-muted);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.df-book {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  font-size: var(--fs-sm);
  color: var(--color-text);
}

.df-book i {
  color: var(--color-primary);
  font-size: 1.6rem;
}

.df-book__author {
  color: var(--color-muted);
}

/* ── Calculator ── */
.df-calculator {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2.4rem;
  margin-top: 2rem;
}

.df-calculator__title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: var(--fw-semibold);
  color: var(--color-white);
  margin-bottom: 2rem;
}

.df-calculator__title i {
  color: var(--color-primary);
}

.df-calculator__inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 2rem;
}

.df-calc-label {
  display: block;
  font-size: 1.2rem;
  color: var(--color-muted);
  font-weight: var(--fw-semibold);
  margin-bottom: 0.6rem;
}

.df-calc-input-wrap {
  display: flex;
  align-items: center;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.df-calc-input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  background: transparent;
  border: none;
  color: var(--color-white);
  font-size: var(--fs-sm);
  font-family: 'JetBrains Mono', monospace;
}

.df-calc-input:focus {
  outline: none;
}

.df-calc-input-wrap:focus-within {
  border-color: var(--color-primary);
}

.df-calc-unit {
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  color: var(--color-muted);
  background: rgba(255, 255, 255, 0.03);
  border-left: 1px solid var(--color-border);
}

.df-calculator__result {
  border-top: 1px solid var(--color-border);
  padding-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.df-result-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-sm);
  color: var(--color-text);
  padding: 0.6rem 0;
}

.df-result-row--highlight {
  background: rgba(74, 134, 232, 0.06);
  border-radius: var(--border-radius);
  padding: 1rem 1.2rem;
}

.df-result-row--highlight strong {
  color: var(--color-primary);
  font-size: 1.8rem;
  font-family: 'JetBrains Mono', monospace;
}

.df-result-gain {
  color: var(--color-success) !important;
  font-family: 'JetBrains Mono', monospace;
}

/* ── Note ── */
.df-etapa__note {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-top: 1.6rem;
  padding: 1rem 1.4rem;
  background: rgba(74, 134, 232, 0.06);
  border-radius: var(--border-radius);
  font-size: 1.3rem;
  color: var(--color-accent);
}

.df-etapa__note i {
  font-size: 1.6rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

/* ── Concepts ── */
.df-concepts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.df-concept {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2.4rem;
}

.df-concept__term {
  font-size: 1.6rem;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  margin-bottom: 1rem;
}

.df-concept__def {
  font-size: var(--fs-sm);
  color: var(--color-text);
  line-height: 1.7;
}

/* ── Resources ── */
.df-resources {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 60rem;
}

.df-resource {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem 2rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

.df-resource:hover {
  border-color: var(--color-primary);
  color: inherit;
}

.df-resource > i:first-child {
  font-size: 2rem;
  color: var(--color-primary);
  flex-shrink: 0;
}

.df-resource div {
  flex: 1;
}

.df-resource strong {
  display: block;
  font-size: var(--fs-sm);
  color: var(--color-white);
  margin-bottom: 0.2rem;
}

.df-resource p {
  font-size: 1.2rem;
  color: var(--color-muted);
}

.df-resource__ext {
  color: var(--color-muted);
  font-size: 1.4rem;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .df-bugs {
    grid-template-columns: 1fr;
  }

  .df-concepts {
    grid-template-columns: 1fr;
  }

  .df-calculator__inputs {
    grid-template-columns: 1fr;
  }

  .df-etapa {
    gap: 1.6rem;
  }
}
</style>
