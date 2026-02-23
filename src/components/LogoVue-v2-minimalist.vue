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
  border-radius: 10px;
  border: 1px solid rgba(74, 134, 232, 0.25);
  display: grid;
  place-items: center;
  background: linear-gradient(160deg, #141c26, #0c1118);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
  position: relative;
  transition: all 0.35s ease;
}

.logo-mark::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 18%;
  width: 64%;
  height: 2.5px;
  border-radius: 2px;
  background: linear-gradient(90deg, #77a7ff, #4a86e8);
}

.logo-initials {
  font-family: 'Space Grotesk', -apple-system, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #f3f6fb;
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
  transition: color 0.3s ease;
}

:global(.theme-light) .logo-name {
  color: var(--color-text);
}

:global(.theme-light) .logo-mark {
  background: linear-gradient(135deg, rgba(74, 134, 232, 0.12), rgba(47, 95, 179, 0.04));
  box-shadow: 0 4px 12px rgba(74, 134, 232, 0.12);
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
