<template>
  <div class="loading-screen" :class="{ 'loading-screen--hidden': !visible }" aria-live="polite">
    <div class="loading-brand">
      <div class="loading-mark" aria-hidden="true">
        <span class="loading-initials">JM</span>
      </div>
      <div class="loading-text">
        <span class="loading-name">Jorge Morais</span>
        <span class="loading-tag">Engineering Digital Systems</span>
      </div>
    </div>

    <div class="loading-bar">
      <span class="loading-bar__fill"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: var(--color-bg-primary);
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loading-screen--hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.loading-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.loading-mark {
  width: 58px;
  height: 58px;
  border-radius: 14px;
  border: 1px solid var(--color-border);
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(59, 183, 163, 0.2), rgba(34, 138, 121, 0.06));
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
}

.loading-initials {
  font-family: 'Goldman', sans-serif;
  font-size: 22px;
  letter-spacing: 1px;
  color: var(--color-primary);
}

.loading-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Space Grotesk', sans-serif;
}

.loading-name {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-white);
}

.loading-tag {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-text);
  opacity: 0.8;
}

.loading-bar {
  margin-top: 2rem;
  width: min(300px, 70vw);
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.loading-bar__fill {
  display: block;
  width: 35%;
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  animation: loadingSweep 1.4s ease-in-out infinite;
}

@keyframes loadingSweep {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(80%); }
  100% { transform: translateX(250%); }
}
</style>
