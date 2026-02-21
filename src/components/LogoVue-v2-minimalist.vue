<!-- Minimalist Engineering Logo -->
<template>
  <div class="logo">
    <div class="logo-container" :class="{ 'logo-container--scrolled': isScrolled }">
      <div class="logo-mark" aria-hidden="true">
        <span class="logo-initials">JM</span>
      </div>
      <div class="logo-text">
        <span class="logo-name">Jorge Morais</span>
        <span class="logo-tag" :class="{ 'logo-tag--hidden': isScrolled }">Full Stack Developer</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoVueMinimalist',
  props: {
    isScrolled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.4s ease;
}

.logo-mark {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(59, 183, 163, 0.16), rgba(34, 138, 121, 0.05));
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  transition: all 0.35s ease;
}

.logo-initials {
  font-family: 'Goldman', sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  color: var(--color-primary);
}

.logo-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Space Grotesk', sans-serif;
}

.logo-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: 0.2px;
}

.logo-tag {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-text);
  opacity: 0.85;
  transition: all 0.35s ease;
}

.logo-tag--hidden {
  opacity: 0;
  transform: translateY(-6px);
  max-height: 0;
}

.logo-container:hover .logo-mark {
  transform: translateY(-2px);
  border-color: var(--color-primary);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}

.logo-container--scrolled {
  transform: scale(0.92);
}

.logo-container--scrolled .logo-mark {
  width: 38px;
  height: 38px;
}

.logo-container--scrolled .logo-name {
  font-size: 18px;
}

@media screen and (max-width: 425px) {
  .logo-mark {
    width: 38px;
    height: 38px;
  }
  .logo-name {
    font-size: 18px;
  }
  .logo-tag {
    letter-spacing: 1.5px;
    font-size: 10px;
  }
}
</style>
