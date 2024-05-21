<template>
  <div>

    <div>
      <div class="projects-cards-content">
        <div class="testimonial__content">
          <h3 class="testimonial__name" ref="freela_calc"></h3>
          <div class="transparent-box">
            <p class="testimonial__description" ref="freela_calc_description"></p>
            <ul class="tecnologies-used">
              <li class="skills__item"><img src="../assets/icons/js.svg" height="16px" width="16px" alt="javaScript icon"></li>
              <li class="skills__item"><img src="../assets/icons/nodejs-icon.svg" height="16px" width="16px" alt="nodejs icon"></li>
              <li class="skills__item"><img src="../assets/icons/ejs.svg" height="16px" width="16px" alt="Ejs icon"></li>
              <li class="skills__item"><img src="../assets/icons/express.svg" height="16px" width="16px" alt="expressjs icon"></li>
              <li class="skills__item"><img src="../assets/icons/sqlitebrowser.svg" height="16px" width="16px" alt="sqlite icon"></li>
            </ul>
          </div>
        </div>
        <div>
        <img src="../assets/img/discover.png" alt="Santander app" class="testimonial__img" />
        </div>
      </div>
    </div>

    <div>
      <div class="projects-cards-content-left">
        <div>
          <img src="../assets/img/covid.png" alt="Covid-19 Tracker" class="testimonial__img"/>
        </div>
        <div class="testimonial__content">
          <h3 class="testimonial__name" ref="covid_19"></h3>
          <div class="transparent-box-left">
            <p class="testimonial__description" ref="covid_19_description"></p>
            <ul class="tecnologies-used">
              <li class="skills__item"><img src="../assets/icons/js.svg" height="16px" width="16px" alt="javaScript icon"></li>
              <li class="skills__item"><img src="../assets/icons/nodejs-icon.svg" height="16px" width="16px" alt="nodejs icon"></li>
              <li class="skills__item"><img src="../assets/icons/reactjs-icon.svg" width="16px" height="16px" alt="react icon"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="projects-cards-content">
        <div class="testimonial__content">
          <h3 class="testimonial__name" ref="apple_calculator"></h3>
          <div class="transparent-box">
            <p class="testimonial__description" ref="apple_calculator_description"></p>
            <ul class="tecnologies-used">
              <li class="skills__item"><img src="../assets/icons/js.svg" height="16px" width="16px" alt="javaScript icon"></li>
              <li class="skills__item"><img src="../assets/icons/vuejs-icon.svg" width="16px" height="16px" alt="vue icon"></li>
            </ul>
          </div>
        </div>
        <div>
          <img src="../assets/img/calculator.png" alt="Apple calculator" class="testimonial__img" />
        </div>
      </div>
    </div>

    <!-- <div>
      <div class="projects-cards-content-left">
        <div>
        <img src="../assets/img/googleGlass.png" alt="Google glass page" class="testimonial__img" />
        </div>
        <div class="testimonial__content">
        <h3 class="testimonial__name" ref="google_glass"></h3>
          <div class="transparent-box-left">
            <p class="testimonial__description" ref="google_glass_description"></p>
              <ul class="tecnologies-used">
                <li class="skills__item"><img src="../assets/icons/js.svg" height="16px" width="16px" alt="javaScript icon"></li>
                <li class="skills__item"><img src="../assets/icons/w3_html5-icon.svg" height="16px" width="16px" alt="html5 icon"></li>
                <li class="skills__item"><img src="../assets/icons/w3_css-icon.svg" height="16px" width="16px" alt="css3 icon"></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="projects-cards-content">
        <div class="testimonial__content">
          <h3 class="testimonial__name" ref="santander"></h3>
          <div class="transparent-box">
            <p class="testimonial__description" ref="santander_description"></p>
              <ul class="tecnologies-used">
                <li class="skills__item"><img src="../assets/icons/kotlin1.svg" height="16px" width="16px" alt="kotlin icon"></li>
                <li class="skills__item"><img src="../assets/icons/Android2021.svg" height="18px" width="18px" alt="android studio icon"></li>
              </ul>
          </div>
        </div>
        <div>
        <img src="../assets/img/santander.png" alt="Freelance jobs calculator" class="testimonial__img"/>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
// Import Swiper Vue.js components

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules

export default {
  components: {
  },
  mounted() {
    const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage;
    }

    // importa o arquivo de idioma correto com base no idioma selecionado
    import(`../languages/${this.selectedLanguage}.js`).then((module) => {
      // usa as expressões traduzidas do módulo importado
      const expressions = module.default;
      this.$refs.freela_calc.textContent = expressions.freela_calc;
      this.$refs.covid_19.textContent = expressions.covid_19;
      this.$refs.covid_19_description.textContent = expressions.covid_19_description;
      this.$refs.freela_calc_description.textContent = expressions.freela_calc_description;
      this.$refs.apple_calculator.textContent = expressions.apple_calculator;
      this.$refs.apple_calculator_description.textContent = expressions.apple_calculator_description;
      this.$refs.google_glass.textContent = expressions.google_glass;
      this.$refs.google_glass_description.textContent = expressions.google_glass_description;
      this.$refs.santander.textContent = expressions.santander;
      this.$refs.santander_description.textContent = expressions.santander_description;
    });
  },
};
</script>

<style scoped>
/* #app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
} */

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 70px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 420px;
  /* background: linear-gradient(45deg, #348765, var(--color-primary)); */
  background: var(--color-primary);
  border-radius: 6px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.2);
}

.swiper-slide img {
  display: block;
  background-position: center;
  background-size: cover;
  width: 88%;
  margin: 20px;
  border-radius: 6px;
}

.testimonial__content {
  width: 90%;
  margin: auto;
  padding: 20px 0;
}
.testimonial__content,
p,
h3 {
  color: #fff;
}

.testimonial__name {
  margin-top: 30px;
  font-size: 2.4rem;
  text-align: justify;
  color: #CCD6F6;
}

.testimonial__description {
  padding: 20px 20px 0 20px;
  /* margin-top: 30px; */
  margin-right: 40px;
  text-align: justify;
}

.projects-cards-content {
  display: flex;
  margin: 80px 0;
}

.projects-cards-content-left {
    display: flex;
    margin: 80px 0;
}

@media screen and (max-width: 530px) {
.projects-cards-content {
  display: block !important;
  margin: 80px 0;
}

.projects-cards-content-left {
    display: block !important;
    margin: 80px 0;
}
}
.transparent-box {
  min-height: 135px;
  height: fit-content;
  width: 105%;
  border-radius: 8px;
  background: rgba(105, 59, 147, 0.2); /* Fundo roxo com opacidade */
  backdrop-filter: blur(7px); /* Efeito de desfoque */
  -webkit-backdrop-filter: blur(10px); /* Compatibilidade com Webkit */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Bordas semi-transparentes */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para profundidade */
}

.transparent-box-left {
  min-height: 135px;
  height: fit-content;
  width: 105%;
  margin-left: -20px;
  border-radius: 8px;
  background: rgba(105, 59, 147, 0.2); /* Fundo roxo com opacidade */
  backdrop-filter: blur(7px); /* Efeito de desfoque */
  -webkit-backdrop-filter: blur(10px); /* Compatibilidade com Webkit */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Bordas semi-transparentes */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para profundidade */
}

.tecnologies-used {
  display: flex;
  justify-content: flex-start;
  margin-left: 12px;
}

</style>
