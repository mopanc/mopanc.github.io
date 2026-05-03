<template>
  <div class="language-selector">
    <button class="language-option" :class="{ selected: selectedLanguage === 'en' }" @click="selectLanguage('en')">
      <img class="en-flag" src="../assets/en-small.png" alt="en-flag">
    </button>
    <button class="language-option" :class="{ selected: selectedLanguage === 'pt' }" @click="selectLanguage('pt')">
      <img class="pt-flag" src="../assets/pt-small.png" alt="pt-flag">
    </button>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'

const { selectedLanguage, setLanguage } = useLanguage()

const selectLanguage = async (language) => {
  try {
    await setLanguage(language)
    updateMetaTags(language)

    // Dispatch custom event instead of page reload
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language }
    }))
  } catch (error) {
    console.error('Failed to change language:', error)
  }
}

const updateMetaTags = (language) => {
  const isPt = language === 'pt'

  // Atualiza title
  document.title = isPt
    ? 'Jorge Morais - Desenvolvedor de Software | Vue.js, React & Node.js'
    : 'Jorge Morais - Software Developer | Vue.js, React & Node.js Expert'

  // Atualiza meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.content = isPt
      ? 'Jorge Morais é um desenvolvedor de software profissional com 4+ anos de experiência em Vue.js, React.js, Node.js e TypeScript. Disponível para projetos freelance e oportunidades full-time.'
      : 'Jorge Morais is a professional software developer with 4+ years experience in Vue.js, React.js, Node.js, and TypeScript. Available for freelance projects and full-time opportunities.'
  }

  // Atualiza Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.content = isPt
      ? 'Jorge Morais - Desenvolvedor de Software | Vue.js & React'
      : 'Jorge Morais - Software Developer | Vue.js & React Expert'
  }

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.content = isPt
      ? 'Desenvolvedor de software profissional com 4+ anos de experiência. Especializado em Vue.js, React.js, Node.js e desenvolvimento web moderno.'
      : 'Professional software developer with 4+ years experience. Specialized in Vue.js, React.js, Node.js, and modern web development.'
  }

  // Atualiza locale
  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) {
    ogLocale.content = isPt ? 'pt_PT' : 'en_US'
  }
}
</script>

<style scoped>
.language-selector {
  display: flex;
}

.language-option {
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  background-color: transparent;
  border: none;
}

.language-option:hover {
  background-color:var(--color-primary);
}

.language-option.selected img{
  width: 24px;
  border-bottom: 2px solid var(--color-primary);
  transform: scale(1.05);
}

.language-option img {
  width: 22px;
}
</style>
