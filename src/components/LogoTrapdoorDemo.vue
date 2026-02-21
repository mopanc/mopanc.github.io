<template>
  <div class="trapdoor-demo">
    <TrapdoorReveal
      ref="trapdoorRef"
      v-model="isOpen"
      class="logo-trapdoor"
      mode="split-vertical"
      align="center"
      :duration="1700"
      :open-delay="300"
      :close-delay="260"
      :scale="1.08"
      :scale-soft="1.03"
      aria-label="Toggle logo trapdoor"
    >
      <template #front>
        <div class="logo-mark logo-mark--light">JM</div>
      </template>
      <template #back>
        <div class="logo-mark logo-mark--dark">JM</div>
      </template>
    </TrapdoorReveal>

    <button class="btn btn--secondary demo-toggle" @click="triggerTrapdoor">
      Toggle Logo
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import TrapdoorReveal from './TrapdoorReveal.vue'

export default {
  name: 'LogoTrapdoorDemo',
  components: { TrapdoorReveal },
  setup() {
    const isOpen = ref(false)
    const trapdoorRef = ref(null)

    const triggerTrapdoor = () => {
      const el = trapdoorRef.value?.$el || trapdoorRef.value
      if (el) el.click()
    }

    return { isOpen, trapdoorRef, triggerTrapdoor }
  }
}
</script>

<style scoped>
.trapdoor-demo {
  display: grid;
  place-items: center;
  gap: 1.5rem;
  padding: 3rem;
  background: var(--color-bg-secondary);
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.logo-trapdoor {
  position: relative;
  --trapdoor-size: 96px;
  --logo-size: 64px;
  --slice-size: var(--logo-size);
  --slice-top: calc((var(--trapdoor-size) - var(--logo-size)) / 2);
  --slice-left: calc((var(--trapdoor-size) - var(--logo-size)) / 2);
  width: 96px;
  height: 96px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  cursor: pointer;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
  background: var(--color-bg-primary);
}

.logo-mark {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-family: 'Goldman', sans-serif;
  font-size: 22px;
  letter-spacing: 1px;
}

.logo-mark--light {
  background: linear-gradient(135deg, #e6ecf5, #cfd7e6);
  color: #1a2432;
}

.logo-mark--dark {
  background: linear-gradient(135deg, #2f5fb3, #4a86e8);
  color: #f3f6fb;
}

.demo-toggle {
  padding: 0.6rem 1.2rem;
}
</style>
