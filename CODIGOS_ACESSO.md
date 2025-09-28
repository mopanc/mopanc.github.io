# 🔒 Sistema de Códigos de Acesso - Portfolio

## **Números Base Pessoais**
- **272** - Número militar principal
- **07689704** - NIM completo
- **228747040** - Número secundário

---

## **Tipos de Códigos Disponíveis**

### **1. Códigos Originais (272)**
```
272MMDD     - 272 + mês + dia (24h acesso)
272DDMM     - 272 + dia + mês (24h acesso)
272MMDDH    - 272 + mês + dia + hora (1h acesso)
272DDMMH    - 272 + dia + mês + hora (1h acesso)
272MMDDYY   - 272 + mês + dia + ano (24h acesso)
272MMDDYYHH - 272 + mês + dia + ano + hora (1h acesso)
```

### **2. Códigos NIM 076 (Posições Variadas)**
```
076MMDD     - 076 + mês + dia
076DDMM     - 076 + dia + mês
MM076DD     - mês + 076 + dia (posição central)
DD076MM     - dia + 076 + mês (posição central)
MMDD076     - mês + dia + 076 (posição final)
DDMM076     - dia + mês + 076 (posição final)
076MMDDYY   - 076 + mês + dia + ano
MM076DDYY   - mês + 076 + dia + ano
```

### **3. Fragmentos do NIM**
```
897MMDD     - últimos 3 dígitos (897) + data
MM897DD     - mês + 897 + dia
689MMDD     - meio do NIM (689) + data
MM689DD     - mês + 689 + dia
```

### **4. Códigos com 228747040**
```
228MMDD     - primeiros 3 + data
MM228DD     - mês + 228 + dia
747MMDD     - meio do número + data
MM747DD     - mês + 747 + dia
470MMDD     - últimos 3 + data
MM470DD     - mês + 470 + dia
```

### **5. Códigos Especiais**
```
DEMOMMDD         - DEMO + data
PORTFOLIOMMDD    - PORTFOLIO + data
DEMOMMDDH        - DEMO + data + hora (1h acesso)
PORTFOLIOMMDDH   - PORTFOLIO + data + hora (1h acesso)
```

### **6. Códigos Híbridos (Mais Seguros)**
```
MM272DD     - mês + 272 + dia
2MM7DD2     - 272 fragmentado com data
0MM76DD     - 076 fragmentado com data
72MMDD2     - fragmentação alternativa
MMDD272YY   - data + 272 + ano
```

---

## **Exemplos para Hoje (27/09/2024)**

### **Fáceis de Lembrar:**
- `27209` → 272 + setembro
- `07627` → 076 + setembro + dia
- `09076` → setembro + 076
- `27227` → dia + 272 + setembro

### **Seguros mas Memorizáveis:**
- `09272` → setembro + 272 + dia
- `2709276` → dia + setembro + 076
- `0927624` → setembro + dia + 076 + ano

### **Com Hora (1h de acesso):**
- `272271214` → se usado às 14h
- `076271214` → 076 + data + hora das 14h

---

## **Sistema de Segurança**

### **Duração dos Códigos:**
- **Códigos Diários:** 24 horas de acesso
- **Códigos com Hora:** 1 hora de acesso (uso único por dia)
- **Códigos com Ano:** 24 horas (mais seguros)

### **Recursos de Segurança:**
- ✅ Posições variadas (início, meio, fim)
- ✅ Fragmentação dos números
- ✅ Prevenção de reutilização (códigos horários)
- ✅ Limpeza automática de códigos expirados
- ✅ Armazenamento local seguro

---

## **Dicas de Uso**

### **Para Memorizar:**
1. **272** sempre fácil de lembrar (número militar)
2. **076** primeiros 3 do NIM
3. **Data atual** em formatos MM/DD
4. **Posições variadas** dificultam descoberta por terceiros

### **Estratégia de Códigos:**
- **Uso pessoal:** Códigos simples (272 + data)
- **Partilha controlada:** Códigos com fragmentos (076, 897)
- **Máxima segurança:** Códigos híbridos com ano
- **Acesso temporário:** Códigos com hora específica

### **Formato da Data:**
- **MM** = Mês com 2 dígitos (01-12)
- **DD** = Dia com 2 dígitos (01-31)
- **YY** = Ano com 2 dígitos (24, 25, etc)
- **HH** = Hora com 2 dígitos (00-23)

---

## **Localização do Sistema**
- **Ficheiro:** `src/composables/useAccessControl.js`
- **Componentes:** `src/components/UnlockToast.vue`, `src/components/ProtectedContent.vue`

---

*Última atualização: 27/09/2024*
*Total de padrões disponíveis: ~50 combinações diferentes*