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

<script>
export default {
  data() {
    return {
      selectedLanguage: 'en'
    }
  },
  mounted() {
    // recupera o idioma selecionado anteriormente do localStorage (se houver)
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      // define o idioma selecionado anteriormente como o idioma selecionado atualmente
      this.selectedLanguage = selectedLanguage;
    }
  },
  methods: {
    selectLanguage(language) {
      // salva o valor selecionado no localStorage
      localStorage.setItem('selectedLanguage', language);
      
      // atualiza a variável selectedLanguage com o idioma selecionado
      this.selectedLanguage = language;

      location.reload();
    }
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
