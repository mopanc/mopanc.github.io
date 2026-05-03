<template>
  <div class="container-success">
    <div class="content">
      <div class="checkmark"></div>
      <h1 class="title--success">{{ translations.success_form_title || 'Form sent successfully!' }}</h1>
      <a href="/" target="_blank" class="btn btn--secondary">{{ translations.success_form_back || 'Back' }}</a>
    </div>
  </div>
</template>

<script>
import { useLanguage } from '../composables/useLanguage'

export default {
  name: 'SuccessPage',
  setup() {
    const { translations, initialize } = useLanguage()
    return { translations, initialize }
  },
  async mounted() {
    await this.initialize()
  }
}
</script>

<style>
.container-success {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.content {
  text-align: center;
}

.checkmark {
  width: 80px;
  height: 80px;
  background-color: var(--color-primary);
  border-radius: 50%;
  display: inline-block;
  position: relative;
}

.checkmark:after {
  content: '';
  position: absolute;
  width: 16px;
  height: 32px;
  border: solid white;
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
  top: 50%;
  left: 50%;
  margin-top: -18px;
  margin-left: -6px;
}

.title--success {
    margin-top: 40px;

}
</style>
