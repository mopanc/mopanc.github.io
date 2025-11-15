# 📚 Guia Completo: Como Adicionar Case Studies

## 🎯 Visão Geral

**O que são Case Studies?**
São páginas detalhadas sobre os teus projetos que mostram:
- O problema que resolveste
- Como resolveste (com código real)
- Resultados concretos

**Porquê fazer isto?**
- Google adora conteúdo detalhado (E-E-A-T)
- Recrutadores ficam impressionados
- Demonstra expertise real

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────────────────────────────┐
│  1. DADOS (case-studies.js)            │
│     ↓ Defines o conteúdo                │
├─────────────────────────────────────────┤
│  2. PÁGINA (ProjectDetail.vue)          │
│     ↓ Lê os dados e mostra bonito       │
├─────────────────────────────────────────┤
│  3. URL AUTOMÁTICO                      │
│     /projects/nome-do-projeto           │
└─────────────────────────────────────────┘
```

**Só precisas mexer em 1 ficheiro:** `src/data/case-studies.js`

---

## 📝 Estrutura de um Case Study

Cada case study tem estas secções:

```javascript
{
  // 1. IDENTIFICAÇÃO
  id: 'nome-do-projeto',
  slug: 'nome-do-projeto-url',
  title: 'Nome Bonito do Projeto',
  subtitle: 'Resumo em 1 linha',

  // 2. HERO (Topo da página)
  heroImage: '../assets/imgs-bck/foto-projeto',
  tech: ['Vue.js', 'Node.js', 'etc'],
  duration: '3 meses',
  role: 'Full Stack Developer',
  year: '2023',

  // 3. CONTEXTO (O que era antes)
  context: 'Descrição do problema...',

  // 4. DESAFIOS (O que era difícil)
  challenges: [
    { title: 'Desafio 1', description: '...', icon: 'ri-icon-name' }
  ],

  // 5. SOLUÇÃO (Como resolveste)
  stack: { backend: ['...'], frontend: ['...'] },
  codeExample: 'const code = "exemplo";',

  // 6. RESULTADOS (O que conseguiste)
  metrics: [
    { value: '-40%', label: 'Tempo de Manutenção' }
  ],

  // 7. APRENDIZAGENS (O que aprendeste)
  learnings: ['Aprendizagem 1', 'Aprendizagem 2']
}
```

---

## 🚀 Como Adicionar o TEU Case Study

### **PASSO 1: Abre o ficheiro**

```bash
# Abre este ficheiro no teu editor
src/data/case-studies.js
```

### **PASSO 2: Vê o exemplo existente**

Já tens 1 exemplo completo (Balança Marques). Podes usá-lo como template.

### **PASSO 3: Adiciona o teu projeto**

Vai à linha 270 (depois do exemplo existente) e adiciona:

```javascript
const caseStudies = {
  'balanca-marques-iot': { ... }, // ← Exemplo existente

  // ← ADICIONA AQUI O TEU NOVO PROJETO
  'teu-projeto-id': {
    id: 'teu-projeto-id',
    slug: 'teu-projeto-url',
    title: 'Nome do Teu Projeto',
    // ... resto do conteúdo
  }
};
```

---

## 📋 Template Simplificado (COPIA ISTO)

Aqui está um template **minimalista** que podes usar:

```javascript
'meu-projeto': {
  // ============ BÁSICO (OBRIGATÓRIO) ============
  id: 'meu-projeto',
  slug: 'meu-projeto-awesome', // ← URL será: /projects/meu-projeto-awesome
  title: 'Sistema de E-commerce com Vue.js',
  subtitle: 'Loja online com 10k+ produtos e pagamentos integrados',

  // SEO
  metaTitle: 'Case Study: E-commerce Vue.js | Jorge Morais',
  metaDescription: 'Como construí uma loja online com Vue.js, Node.js e Stripe. 5k vendas/mês.',

  // HERO
  heroImage: '../assets/imgs-bck/meu-projeto', // ← Nome da tua imagem (sem extensão)
  tech: ['Vue.js', 'Node.js', 'Stripe', 'PostgreSQL'],
  duration: '4 meses',
  role: 'Full Stack Developer',
  year: '2024',

  // ============ CONTEÚDO (OPCIONAL MAS RECOMENDADO) ============

  // CONTEXTO: O que era antes
  context: `
    O cliente tinha uma loja física e queria expandir online.
    Precisavam de um sistema que suportasse 10k produtos,
    gestão de stock em tempo real, e integração com pagamentos.
  `,

  // DESAFIOS: O que foi difícil
  challenges: [
    {
      title: 'Performance com Muitos Produtos',
      description: '10k produtos carregavam lentamente na listagem',
      icon: 'ri-speed-line'
    },
    {
      title: 'Pagamentos Seguros',
      description: 'Integração com Stripe e validação de transações',
      icon: 'ri-secure-payment-line'
    }
  ],

  // STACK: O que usaste
  stack: {
    frontend: ['Vue.js 3', 'Pinia', 'TailwindCSS'],
    backend: ['Node.js', 'Express', 'PostgreSQL'],
    payments: ['Stripe API', 'Webhooks']
  },

  // CÓDIGO: Exemplo (OPCIONAL)
  codeLanguage: 'javascript',
  codeDescription: 'Implementação do carrinho de compras com Pinia',
  codeExample: `
// Store do carrinho (Pinia)
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    total: 0
  }),

  actions: {
    addItem(product) {
      const existingItem = this.items.find(i => i.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }

      this.calculateTotal();
    },

    calculateTotal() {
      this.total = this.items.reduce((sum, item) =>
        sum + (item.price * item.quantity), 0
      );
    }
  }
});
  `,

  // RESULTADOS: O que conseguiste
  metrics: [
    { value: '5k', label: 'Vendas/Mês' },
    { value: '10k', label: 'Produtos' },
    { value: '99.9%', label: 'Uptime' },
    { value: '2.3s', label: 'Page Load' }
  ],

  businessImpact: `
    A loja online gerou €50k em vendas nos primeiros 3 meses.
    O cliente reduziu custos operacionais em 30% ao automatizar
    a gestão de stock e processamento de encomendas.
  `,

  technicalWins: [
    'Implementei virtual scrolling para listar 10k produtos sem lag',
    'Configurei webhooks do Stripe para sincronização em tempo real',
    'Otimizei queries SQL, reduzindo tempo de resposta em 70%'
  ],

  // APRENDIZAGENS: O que aprendeste
  learnings: [
    'Pagination vs. Virtual Scrolling: Virtual scrolling é melhor para grandes listas',
    'Webhooks do Stripe são essenciais para não perder pagamentos',
    'Cache de produtos com Redis melhorou performance em 80%'
  ],

  // TECNOLOGIAS (para SEO)
  technologies: ['Vue.js', 'Node.js', 'Stripe', 'PostgreSQL', 'Redis'],

  // TESTEMUNHO (OPCIONAL)
  testimonial: {
    quote: "Jorge criou uma loja que funciona perfeitamente. Estamos a vender 5k/mês!",
    author: "João Silva",
    role: "CEO, MinhaLoja",
    photo: null
  }
}
```

---

## ✂️ Versão SUPER MINIMALISTA (Se tiveres pressa)

Só precisas disto para começar:

```javascript
'meu-projeto': {
  id: 'meu-projeto',
  slug: 'meu-projeto-url',
  title: 'Nome do Projeto',
  subtitle: 'Resumo em 1 linha',

  heroImage: '../assets/imgs-bck/foto',
  tech: ['Vue.js', 'Node.js'],
  duration: '3 meses',
  role: 'Full Stack Developer',
  year: '2024',

  context: 'Descrição do problema que resolveste.',

  challenges: [
    { title: 'Desafio 1', description: 'Descrição', icon: 'ri-star-line' }
  ],

  stack: {
    frontend: ['Vue.js'],
    backend: ['Node.js']
  },

  metrics: [
    { value: '+50%', label: 'Performance' }
  ],

  learnings: ['Aprendi que X é melhor que Y']
}
```

**Depois podes ir adicionando mais secções aos poucos!**

---

## 🎨 Ícones Disponíveis (Para Challenges)

Usa estes nomes de ícones (Remix Icons):

```javascript
// Performance
'ri-speed-line'
'ri-rocket-line'
'ri-dashboard-line'

// Segurança
'ri-shield-check-line'
'ri-lock-line'
'ri-secure-payment-line'

// Tempo Real
'ri-time-line'
'ri-refresh-line'
'ri-notification-line'

// Dados
'ri-database-line'
'ri-server-line'
'ri-storage-line'

// Código
'ri-code-line'
'ri-terminal-line'
'ri-cpu-line'

// Outros
'ri-focus-2-line'
'ri-lightbulb-line'
'ri-star-line'
```

Ver todos: https://remixicon.com/

---

## 🖼️ Como Adicionar Imagens

### **Opção 1: Usar Imagem Existente**
```javascript
heroImage: '../assets/imgs-bck/calculator' // ← Sem extensão!
```

### **Opção 2: Adicionar Nova Imagem**
1. Coloca a imagem em `src/assets/img/`
2. Nome: `meu-projeto.png` (ou .jpg)
3. Referencia sem extensão:
```javascript
heroImage: '../assets/imgs-bck/meu-projeto'
```

**Nota:** As imagens já estão otimizadas automaticamente (WebP + lazy loading)!

---

## 🔗 Como Funciona o URL Automático

```javascript
// Se defines isto:
slug: 'trading-system-machine-learning'

// URL automático será:
https://jorgemopanc.com/projects/trading-system-machine-learning
```

**Não precisas criar rota manualmente!** Já está configurado.

---

## 🧪 Como Testar

### 1. Adiciona o case study em `case-studies.js`
### 2. Guarda o ficheiro
### 3. Corre:
```bash
npm run serve
```
### 4. Visita:
```
http://localhost:8080/projects/teu-slug-aqui
```

Se aparecer a página → **FUNCIONA!** ✅

---

## 📊 Exemplo Real: 3 Projetos Teus

Vou criar templates específicos para os teus projetos mais comuns.

### **Projeto 1: Sistema de Trading**
```javascript
'trading-system': {
  id: 'trading-system',
  slug: 'trading-system-machine-learning',
  title: 'AI-Powered Trading System',
  subtitle: 'Machine learning para previsão de mercados',

  heroImage: '../assets/imgs-bck/trading', // ← Adiciona esta imagem
  tech: ['Python', 'TensorFlow', 'Node.js', 'WebSockets'],
  duration: '6 meses',
  role: 'Full Stack Developer',
  year: '2024',

  context: `
    Desenvolvi um sistema de trading automatizado que usa
    machine learning para analisar padrões de mercado e
    executar trades em tempo real.
  `,

  challenges: [
    {
      title: 'Análise de Dados em Tempo Real',
      description: 'Processar 1000+ candlesticks por segundo com latência <50ms',
      icon: 'ri-line-chart-line'
    },
    {
      title: 'Machine Learning Accuracy',
      description: 'Treinar modelos com 70%+ accuracy em previsões',
      icon: 'ri-brain-line'
    },
    {
      title: 'Risk Management',
      description: 'Implementar stop-loss e take-profit automáticos',
      icon: 'ri-shield-check-line'
    }
  ],

  stack: {
    backend: ['Python', 'FastAPI', 'TensorFlow'],
    frontend: ['Vue.js', 'Chart.js', 'TradingView'],
    realtime: ['WebSockets', 'Redis']
  },

  metrics: [
    { value: '72%', label: 'Prediction Accuracy' },
    { value: '<50ms', label: 'Latency' },
    { value: '15%', label: 'ROI Mensal' },
    { value: '1000+', label: 'Trades/Dia' }
  ],

  learnings: [
    'LSTM networks são melhores que ARIMA para séries temporais financeiras',
    'Backtesting é essencial - 80% dos modelos falham em produção',
    'Risk management é mais importante que accuracy de previsão'
  ]
}
```

### **Projeto 2: E-commerce**
```javascript
'ecommerce-platform': {
  id: 'ecommerce-platform',
  slug: 'ecommerce-vue-nodejs',
  title: 'E-commerce Platform',
  subtitle: 'Loja online com 10k+ produtos e pagamentos',

  heroImage: '../assets/imgs-bck/ecommerce',
  tech: ['Vue.js', 'Node.js', 'Stripe', 'PostgreSQL'],
  duration: '4 meses',
  role: 'Full Stack Developer',
  year: '2023',

  context: `Cliente tinha loja física e queria expandir online...`,

  // ... (usa o template acima)
}
```

### **Projeto 3: Dashboard Real-time**
```javascript
'realtime-dashboard': {
  id: 'realtime-dashboard',
  slug: 'vue-realtime-dashboard-websockets',
  title: 'Real-time Analytics Dashboard',
  subtitle: 'Dashboard com WebSockets e 1k+ updates/segundo',

  // ... etc
}
```

---

## 🆘 Preciso de Ajuda a Preencher!

**Opção 1: Envia-me Info Básica**

Envia-me assim:
```
PROJETO: Sistema de Trading
TECNOLOGIAS: Python, TensorFlow, Vue.js
O QUE FIZ: Sistema que prevê mercados com ML
RESULTADO: 70% accuracy, 15% ROI mensal
DESAFIOS: Latência, Accuracy, Risk Management
```

**Eu transformo isto num case study completo para ti!**

---

**Opção 2: Usa o Template Minimalista**

Começa com a versão mínima (página 3 deste guia) e depois vamos adicionando mais secções juntos.

---

## ✅ Checklist Antes de Adicionar

- [ ] Tenho o nome do projeto
- [ ] Tenho as tecnologias usadas
- [ ] Tenho 1 imagem do projeto (screenshot)
- [ ] Sei o que o projeto faz (1 parágrafo)
- [ ] (Opcional) Tenho métricas/resultados
- [ ] (Opcional) Tenho código para mostrar

**Se tens tudo isto → PODEMOS COMEÇAR!**

---

## 🚀 Próximo Passo

**Queres que eu:**
1. **Crie 3 case studies completos para ti?** (só preciso de info básica)
2. **Te ajude a preencher 1 por 1?** (vais aprendendo)
3. **Simplifique ainda mais o template?** (versão ultra-minimalista)

**Escolhe e diz-me que projetos queres adicionar!** 😊
