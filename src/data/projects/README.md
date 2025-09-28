# 📁 Sistema de Projetos Dinâmicos

Esta pasta contém o sistema de gestão de projetos dinâmicos do portfólio.

## 📂 Estrutura de Pastas

```
src/data/projects/
├── images/                    # Imagens dos projetos organizadas por pasta
│   ├── smarttrade/           # Pasta do projeto SmartTrade
│   │   ├── dashboard.jpg
│   │   ├── charts.jpg
│   │   └── ...
│   ├── crypto-analyzer/      # Pasta do projeto CryptoAnalyzer
│   │   ├── training.jpg
│   │   └── ...
│   └── projeto-x/           # Pasta de outro projeto
├── projects-pt.json         # Dados dos projetos em Português
├── projects-en.json         # Dados dos projetos em Inglês
└── README.md               # Este arquivo
```

## 📋 Formato do JSON

Cada arquivo JSON deve seguir esta estrutura:

```json
{
  "projects": [
    {
      "id": "projeto-unico",
      "category": "personal|commercial|academic|games",
      "isPublic": true|false,
      "featured": true|false,
      "projectType": "Tipo do Projeto",
      "status": "Status do Projeto",
      "title": "Nome do Projeto",
      "description": "Descrição detalhada do projeto...",
      "images": [
        {
          "src": "pasta-projeto/imagem.jpg",
          "alt": "Texto alternativo",
          "title": "Título da imagem"
        }
      ],
      "technologies": [
        { "name": "Vue.js", "icon": "vuejs-icon.svg" }
      ],
      "links": {
        "repository": "https://github.com/user/repo",
        "website": "https://website.com"
      }
    }
  ]
}
```

## 🖼️ Adicionando Imagens

1. Crie uma pasta para o seu projeto em `images/`
2. Adicione as imagens do projeto (4-6 imagens recomendadas)
3. Use nomes descritivos: `dashboard.jpg`, `login.jpg`, etc.
4. Formatos suportados: `.jpg`, `.png`, `.webp`

## 🌐 Suporte Multi-idioma

- `projects-pt.json` - Versão em Português
- `projects-en.json` - Versão em Inglês
- Os IDs dos projetos devem ser iguais nos dois arquivos
- Apenas os textos (title, description, etc.) mudam

## 📱 Como Usar

O sistema carrega automaticamente os projetos baseado na língua selecionada:

```javascript
import { useProjects } from '@/composables/useProjects'

const { loadProjects, projects } = useProjects()

// Carregar projetos em português
await loadProjects('pt')

// Carregar projetos em inglês
await loadProjects('en')
```

## ✨ Vantagens

- ✅ **Organizado**: Cada projeto tem sua pasta de imagens
- ✅ **Multi-idioma**: Suporte automático PT/EN
- ✅ **Flexível**: Links opcionais para repo e website
- ✅ **Escalável**: Fácil adicionar novos projetos
- ✅ **Fallback**: Sistema de imagens placeholder
- ✅ **Performance**: Carregamento dinâmico