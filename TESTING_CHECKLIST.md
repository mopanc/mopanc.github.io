# 🧪 Checklist Completo de Testes - Jorge Mopanc Portfolio

## **🔐 1. TESTES DE AUTENTICAÇÃO**

### **Códigos de Teste para Hoje (27/09/2024):**
```
Códigos Diários (24h acesso):
✅ 27209   → 272 + setembro
✅ 07627   → 076 + setembro + dia
✅ 09076   → setembro + 076
✅ 27227   → dia + 272 + setembro
✅ 228279  → 228 + setembro + dia
✅ 747279  → 747 + setembro + dia

Códigos com Hora (1h acesso):
✅ 272271214  → se usado às 14h
✅ 076271214  → às 14h
```

### **Testes a Realizar:**
- [ ] Inserir código válido → deve desbloquear **imediatamente**
- [ ] Inserir código inválido → deve mostrar erro
- [ ] Tempo de expiração → deve bloquear automaticamente
- [ ] Reatividade → sem necessidade de refresh
- [ ] Códigos horários → uso único por dia
- [ ] Timer visível → mostra tempo restante

---

## **🌐 2. TESTES DE TRADUÇÃO (PT/EN)**

### **Elementos a Verificar:**
- [ ] **Botão de idioma** → alterna corretamente
- [ ] **Menu de navegação** → todos os itens traduzidos
- [ ] **Página inicial** → hero, about, services
- [ ] **Página de projetos** → títulos e descrições
- [ ] **Página de certificados** → nomes e detalhes
- [ ] **Formulário de contacto** → labels e placeholders
- [ ] **Footer** → links e textos
- [ ] **Mensagens de erro** → feedback do sistema

### **URLs a Testar:**
```
http://localhost:8081/?lang=pt
http://localhost:8081/?lang=en
http://localhost:8081/projects?lang=pt
http://localhost:8081/projects?lang=en
http://localhost:8081/certificates?lang=pt
http://localhost:8081/certificates?lang=en
```

---

## **🔘 3. TESTES DE NAVEGAÇÃO E BOTÕES**

### **Menu Principal:**
- [ ] **Home** → redireciona para #home
- [ ] **About** → scroll para #about
- [ ] **Projects** → navega para /projects
- [ ] **Certificates** → navega para /certificates
- [ ] **Contact** → scroll para #contact

### **Botões de Ação:**
- [ ] **Download CV** → baixa PDF corretamente
- [ ] **Ver Projeto** → abre modal ou página
- [ ] **GitHub** → abre repositório externo
- [ ] **Live Demo** → abre demo em nova aba
- [ ] **Contact Me** → abre formulário/email
- [ ] **Social Media** → todos os links funcionam

### **Navegação Mobile:**
- [ ] **Hamburger menu** → abre/fecha corretamente
- [ ] **Menu mobile** → todos os links funcionam
- [ ] **Scroll suave** → animações funcionam

---

## **📱 4. TESTES DE RESPONSIVIDADE**

### **Breakpoints a Testar:**
```
📱 Mobile: 320px - 767px
📟 Tablet: 768px - 1023px
💻 Desktop: 1024px+
🖥️ Large: 1440px+
```

### **Elementos Críticos:**
- [ ] **Header/Navigation** → hamburger em mobile
- [ ] **Hero Section** → textos legíveis
- [ ] **Cards de Projetos** → grid responsive
- [ ] **Formulário** → inputs bem dimensionados
- [ ] **Footer** → links organizados
- [ ] **Modais** → centrados e proporcionais

### **Funcionalidades Mobile:**
- [ ] **Touch navigation** → swipe nos sliders
- [ ] **Formulários** → keyboards apropriados
- [ ] **Botões** → tamanho mínimo 44px
- [ ] **Imagens** → carregam otimizadas

---

## **📧 5. TESTES DE FORMULÁRIOS**

### **Formulário de Contacto:**
- [ ] **Campos obrigatórios** → validação funciona
- [ ] **Email validation** → formato correto
- [ ] **Envio** → mensagem de sucesso/erro
- [ ] **Reset** → limpa campos após envio
- [ ] **Proteção SPAM** → medidas implementadas

### **Campos a Testar:**
```
✅ Nome: [obrigatório, min 2 chars]
✅ Email: [obrigatório, formato válido]
✅ Assunto: [obrigatório]
✅ Mensagem: [obrigatório, min 10 chars]
```

### **Casos de Teste:**
- [ ] Envio com campos vazios
- [ ] Email inválido (test@test)
- [ ] Mensagem muito curta
- [ ] Envio completo válido

---

## **🔗 6. TESTES DE LINKS EXTERNOS**

### **Social Media:**
- [ ] **GitHub** → https://github.com/mopanc
- [ ] **LinkedIn** → perfil correto
- [ ] **Twitter** → @JorgeMo56542670
- [ ] **Instagram** → @jorgemopanc
- [ ] **Facebook** → perfil pessoal

### **Links de Projetos:**
- [ ] **Live demos** → sites funcionais
- [ ] **Repositórios** → códigos acessíveis
- [ ] **Certificados** → links para instituições

### **Verificações:**
- [ ] **Target="_blank"** → abre em nova aba
- [ ] **rel="noopener"** → segurança implementada
- [ ] **Links funcionais** → não quebrados (404)

---

## **🛡️ 7. TESTES DE PROTEÇÃO DE CONTEÚDO**

### **Proteções Implementadas:**
- [ ] **Right-click bloqueado** → conteúdo protegido
- [ ] **Ctrl+C/V/A bloqueado** → quando não autenticado
- [ ] **F12 bloqueado** → developer tools
- [ ] **Ctrl+U bloqueado** → view source
- [ ] **Seleção bloqueada** → texto não selecionável

### **DevTools Protection:**
- [ ] **Detecção** → quando DevTools abre
- [ ] **Console limpo** → clear automático
- [ ] **Overlay funcional** → não removível facilmente

### **Testes de Bypass:**
- [ ] **Inspect element** → conteúdo não visível no DOM
- [ ] **CSS manipulation** → proteções resistem
- [ ] **JavaScript console** → funções protegidas

---

## **⚡ 8. TESTES DE PERFORMANCE**

### **Loading Times:**
- [ ] **First Paint** → < 1.5s
- [ ] **Interactive** → < 3s
- [ ] **Imagens** → lazy loading funciona
- [ ] **Fonts** → carregamento otimizado

### **Core Web Vitals:**
```
🎯 LCP (Largest Contentful Paint): < 2.5s
🎯 FID (First Input Delay): < 100ms
🎯 CLS (Cumulative Layout Shift): < 0.1
```

### **Ferramentas de Teste:**
- [ ] **Google PageSpeed Insights**
- [ ] **GTmetrix**
- [ ] **WebPageTest**
- [ ] **Lighthouse** (Chrome DevTools)

---

## **🔍 9. TESTES DE SEO**

### **Meta Tags:**
- [ ] **Title** → específico por página
- [ ] **Description** → única e descritiva
- [ ] **Keywords** → relevantes para programador
- [ ] **Open Graph** → preview social media
- [ ] **Canonical URLs** → sem duplicação

### **Structured Data:**
- [ ] **Schema.org** → Person + ProfessionalService
- [ ] **Rich Snippets** → Google teste
- [ ] **JSON-LD** → validação sem erros

### **Ferramentas de Validação:**
```
✅ Google Rich Results Test
✅ Schema.org Validator
✅ Facebook Sharing Debugger
✅ Twitter Card Validator
```

---

## **📊 10. TESTES DE ANALYTICS**

### **Google Analytics:**
- [ ] **Tracking Code** → G-E08VX9Z7F0 funcional
- [ ] **Page views** → registados corretamente
- [ ] **Events** → botões e interações
- [ ] **Conversions** → formulário contacto

### **Custom Events a Testar:**
- [ ] **Download CV** → evento disparado
- [ ] **Project View** → clicks registados
- [ ] **Contact Form** → envios contabilizados
- [ ] **Social Click** → interações sociais

---

## **🚀 11. PREPARAÇÃO PARA PRODUÇÃO**

### **Build de Produção:**
- [ ] **npm run build** → sem erros
- [ ] **Assets otimizados** → CSS/JS minificados
- [ ] **Imagens comprimidas** → tamanhos otimizados
- [ ] **Service Worker** → cache implementado

### **Deploy Checklist:**
- [ ] **HTTPS** → certificado SSL
- [ ] **Custom Domain** → DNS configurado
- [ ] **Google Search Console** → propriedade verificada
- [ ] **Analytics** → ID produção configurado

---

## **📝 12. ACESSIBILIDADE (A11Y)**

### **Básicos de Acessibilidade:**
- [ ] **Alt texts** → imagens descritas
- [ ] **Color contrast** → WCAG AA compliant
- [ ] **Keyboard navigation** → funcional
- [ ] **Screen readers** → compatível
- [ ] **Focus indicators** → visíveis

### **Ferramentas de Teste:**
- [ ] **WAVE** → Web Accessibility Evaluation
- [ ] **axe DevTools** → Chrome extension
- [ ] **Lighthouse Accessibility** → audit score

---

## **✅ STATUS DOS TESTES**

```
🔐 Autenticação: [ ]
🌐 Traduções: [ ]
🔘 Navegação: [ ]
📱 Responsividade: [ ]
📧 Formulários: [ ]
🔗 Links Externos: [ ]
🛡️ Proteção Conteúdo: [ ]
⚡ Performance: [ ]
🔍 SEO: [ ]
📊 Analytics: [ ]
🚀 Build Produção: [ ]
📝 Acessibilidade: [ ]
```

---

**🎯 Próximo Passo:** Executar testes systematicamente e marcar ✅ conforme completados.

**🔧 Tools Necessárias:**
- Chrome DevTools
- Multiple browsers (Chrome, Firefox, Safari)
- Mobile device ou DevTools mobile simulation
- Google PageSpeed Insights
- Google Rich Results Test