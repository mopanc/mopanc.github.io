# 🎰 Case Study: Qore - Multi-Tenant Business Management System

## 📊 Dados Recolhidos

### O Sistema (Qore)
- **Tipo:** Sistema de gestão empresarial (ERP-like)
- **Funcionalidade:** Gestão de lojas, secções, dispositivos, artigos, stocks, preços, etc.
- **Clientes:** Supermercados, Casinos, Retalho

### O Problema Específico
**Cliente:** Rede de Casinos (dono principal + sócio)
- **Contexto:** Cliente é dono de toda a rede, MAS...
  - Lojas do Sul: 50% dele + 50% sócio
  - Lojas do Norte: 100% dele

**Necessidade:**
1. Dono principal quer ver TUDO (visão completa)
2. Dono principal quer ver SÓ as suas lojas exclusivas (análise financeira separada)
3. Sócio quer ver APENAS as lojas do Sul (segurança + privacidade)

### A Solução Desenvolvida
1. **Grupos de Lojas** - Agrupar lojas por critérios (região, propriedade, etc.)
2. **Sistema de Permissões Dinâmico** - Role-based access control (RBAC) customizável
3. **Atribuição Granular** - Atribuir lojas individuais OU grupos a utilizadores

**Impacto:**
- Solução reutilizada para outros clientes com necessidades semelhantes
- Multi-tenancy com isolamento de dados
- Segurança e controlo de acesso avançado

### Stack Técnica
- **Backend:** Node.js (+ ?)
- **Frontend:** React (+ ?)
- **Database:** ? (PostgreSQL, MySQL, MongoDB?)
- **Auth:** ? (JWT, Passport, Auth0?)

---

## 🎯 Code Examples Possíveis

### Opção 1: Middleware de Permissões (Backend)
```javascript
// middleware/checkPermissions.js
async function checkStoreAccess(req, res, next) {
  const userId = req.user.id;
  const storeId = req.params.storeId;

  // Verificar se user tem acesso direto à loja
  // OU se tem acesso via grupo
}
```

### Opção 2: Model de Grupos (Backend)
```javascript
// models/StoreGroup.js
const StoreGroup = {
  id: 'uuid',
  name: 'Casinos Sul',
  stores: ['store-1', 'store-2'],
  permissions: ['view', 'edit']
}
```

### Opção 3: UI de Gestão de Permissões (Frontend)
```javascript
// components/PermissionManager.jsx
function PermissionManager() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [assignedStores, setAssignedStores] = useState([]);
  // ...
}
```

---

## ❓ Perguntas para Completar

### OBRIGATÓRIAS (para criar o case study):
1. **Duração:** Quanto tempo levou? (ex: 2 meses)
2. **Ano:** 2023? 2024?
3. **Database:** PostgreSQL? MySQL? MongoDB?
4. **Autenticação:** Como geriste login/permissões? (JWT, Passport, etc.)

### OPCIONAIS (mas melhoram muito o case study):
5. **Número de lojas:** Quantas lojas o cliente tinha?
6. **Número de utilizadores:** Quantos users/roles criaram?
7. **Resultados:** Alguma métrica? Ex:
   - "Reduziu tempo de gestão de acessos em X%"
   - "Sistema agora serve X clientes"
   - "Preveniu Y problemas de segurança"
8. **Desafios técnicos:** Algum bug difícil? Alguma decisão técnica difícil?

### PARA CÓDIGO (escolhe 1):
9. Que parte do código queres mostrar?
   - [ ] Middleware de permissões (backend)
   - [ ] Model de Grupos (backend)
   - [ ] API routes para RBAC (backend)
   - [ ] UI de gestão de permissões (frontend)
   - [ ] Hook React para permissões (frontend)

---

## 🎨 Proposta de Título & URL

**Título:** "Multi-Tenant RBAC System for Casino Management"
**Subtitle:** "Dynamic permission system with store grouping for complex business hierarchies"
**URL:** `/projects/qore-multi-tenant-rbac-system`

**Keywords SEO:**
- "multi-tenant nodejs"
- "rbac nodejs react"
- "role based access control"
- "store management system"
- "dynamic permissions"

---

## 📝 Next Steps

1. **Tu respondes às perguntas acima**
2. **Eu gero o case study completo** com:
   - Texto SEO-optimizado
   - Código exemplo (escolhes qual)
   - Métricas e resultados
   - Estrutura E-E-A-T compliant

3. **Tu copias e colas** em `src/data/case-studies.js`

4. **Testamos:** `http://localhost:8080/projects/qore-multi-tenant-rbac-system`

---

## 💬 Responde Assim (Copia e Preenche)

```
1. DURAÇÃO: 2 meses (ou o que foi)
2. ANO: 2024
3. DATABASE: PostgreSQL
4. AUTH: JWT + Passport
5. Nº LOJAS: 15 casinos
6. Nº USERS: 25 utilizadores
7. RESULTADOS: Reduziu tempo de setup de novos users em 70%
8. DESAFIO: Garantir que queries só retornam dados permitidos
9. CÓDIGO: Quero mostrar middleware de permissões (backend)
```

---

Pronto! Responde e eu crio tudo para ti em 5 minutos! 🚀
