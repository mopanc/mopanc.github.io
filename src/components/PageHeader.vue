 <!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header id="header" class="header">
        <div class="container">
            <nav class="nav">
                <a href="/" class="nav__brand">
                    <LogoVue />
                </a>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="/" class="nav__link" :class="{ 'green-text': currentRoute.home }" id="home"></a>
                        </li>
                        <li class="nav__item">
                            <a href="/projects" class="nav__link" :class="{ 'green-text': currentRoute.projects }" id="projects"></a>
                        </li>
                        <li class="nav__item">
                            <a href="/certificates" class="nav__link" :class="{ 'green-text': currentRoute.certificates }" id="certificates"></a>
                        </li>
                        <li class="nav__item">
                            <a href="/contact" class="nav__link" :class="{ 'green-text': currentRoute.contact }" id="contact"></a>
                        </li>
                        <li class="nav__item">
                            <language-selector />
                        </li>
                    </ul>
                </div>
                <div class="nav__toggle">
                    <i id="nav-toggle" class="ri-menu-3-line"></i>
                </div>
            </nav>
        </div>
  </header>
</template>
<script setup>
import LogoVue from "./LogoVue.vue"
import LanguageSelector from "./LanguageSelector.vue"
import { ref, onMounted, reactive } from "vue"

const selectedLanguage = ref(localStorage.getItem('selectedLanguage') || 'en')

const currentRoute = reactive({
  home: false,
  projects: false,
  certificates: false,
  contact: false
})

onMounted(() => {
  import(`../languages/${selectedLanguage.value}.js`).then((module) => {
    const expressions = module.default;
     document.querySelector('#home').textContent = expressions.home;
     document.querySelector('#projects').textContent = expressions.projects;
     document.querySelector('#certificates').textContent = expressions.certificates;
     document.querySelector('#contact').textContent = expressions.contact;

       // Verifique a rota atual e atualize a variável currentRoute
  const path = window.location.pathname;
  if (path === '/') {
    currentRoute.home = true;
  } else if (path === '/projects') {
    currentRoute.projects = true;
  } else if (path === '/certificates') {
    currentRoute.certificates = true;
  } else if (path === '/contact') {
    currentRoute.contact = true;
  } else {
    currentRoute.home = true;
  }
  });
})

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});
</script>

<style src="../assets/main.css">

</style>