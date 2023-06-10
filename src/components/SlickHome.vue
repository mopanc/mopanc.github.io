<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :loop="true"
    :centeredSlides="true"
    :slidesPerView="'3'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <div class="">
              <h3 class="testimonial__name" ref="apple_calculator"></h3>
          <img src="../assets/img/calculator.png" alt="Apple calculator" class="testimonial__img">
          <div class="testimonial__content">
              <p class="testimonial__description" ref="apple_calculator_description"></p>
          </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="">
                <h3 class="testimonial__name" ref="covid_19"></h3>
            <img src="../assets/img/covid.png" alt="Covid-19 Tracker" class="testimonial__img">
            <div class="testimonial__content">
                <p class="testimonial__description" ref="covid_19_description"></p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="">
                <h3 class="testimonial__name" ref="santander"></h3>
            <img src="../assets/img/santander.png" alt="Freelance jobs calculator" class="testimonial__img">
            <div class="testimonial__content">
                <p class="testimonial__description" ref="santander_description"></p>
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="">
                <h3 class="testimonial__name" ref="google_glass"></h3>
            <img src="../assets/img/googleGlass.png" alt="Google glass page" class="testimonial__img">
            <div class="testimonial__content">
                <p class="testimonial__description" ref="google_glass_description"></p>
            </div>
        </div>
    </swiper-slide>
        <swiper-slide>
        <div class="">
                <h3 class="testimonial__name" ref="got"></h3>
            <img src="../assets/img/got.png" alt="GOT page" class="testimonial__img">
            <div class="testimonial__content">
                <p class="testimonial__description" ref="got_description"></p>
            </div>
        </div>
    </swiper-slide>
        <swiper-slide>
        <div class="">
                <h3 class="testimonial__name" ref="freela_calc"></h3>
            <img src="../assets/img/discover.png" alt="Santander app" class="testimonial__img">
            <div class="testimonial__content">
                <p class="testimonial__description" ref="freela_calc_description"></p>
            </div>
        </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
  mounted() {
                const selectedLanguage = localStorage.getItem('selectedLanguage') || "en";
            if (selectedLanguage) {
                this.selectedLanguage = selectedLanguage;
            }

            // importa o arquivo de idioma correto com base no idioma selecionado
            import(`../languages/${this.selectedLanguage}.js`).then((module) => {
            // usa as expressões traduzidas do módulo importado
            const expressions = module.default;
            this.$refs.apple_calculator.textContent = expressions.apple_calculator;
            this.$refs.apple_calculator_description.textContent = expressions.apple_calculator_description;
            this.$refs.covid_19.textContent = expressions.covid_19;
            this.$refs.covid_19_description.textContent = expressions.covid_19_description;
            this.$refs.freela_calc.textContent = expressions.freela_calc;
            this.$refs.freela_calc_description.textContent = expressions.freela_calc_description;
            this.$refs.santander.textContent = expressions.santander;
            this.$refs.santander_description.textContent = expressions.santander_description;
            this.$refs.google_glass.textContent = expressions.google_glass;
            this.$refs.google_glass_description.textContent = expressions.google_glass_description;
            this.$refs.got.textContent = expressions.got;
            this.$refs.got_description.textContent = expressions.got_description;
            });
  }
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
  background: linear-gradient(45deg, #348765, var(--color-primary));
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
.testimonial__content, p, h3 {
  color: #fff;
}

.testimonial__name {
  margin-top: 30px;
}

</style>