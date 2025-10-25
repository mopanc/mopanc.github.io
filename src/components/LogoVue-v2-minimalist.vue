<!-- Minimalist Clean Version -->
<template>
  <div class="logo">
    <div class="logo-container" :class="{ 'logo-container--scrolled': isScrolled }">
      <div class="logo-text">
        <span class="first-name">Jorge</span>
        <span class="tag-wrapper">
          <span class="tag">&lt;/&gt;</span>
        </span>
        <span class="last-name">Morais</span>
      </div>
      <div class="subtitle" :class="{ 'subtitle--hidden': isScrolled }">Full Stack Developer</div>
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
  text-align: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-text {
  display: flex;
  align-items: center;
  font-family: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Courier New', monospace;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 2px;
  text-shadow: 0 0 10px rgba(79, 172, 254, 0.1);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.first-name, .last-name {
  color: var(--color-primary);
  text-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: inline-block;
}


.tag-wrapper {
  margin: 0 8px;
  position: relative;
  overflow: hidden;
  width: 40px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.tag {
  color: #4facfe;
  font-weight: 700;
  font-size: 28px;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
  transform: rotateY(0deg);
}

.subtitle {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 11px;
  font-weight: 400;
  color: var(--color-primary);
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 1;
  max-height: 20px;
  transform: translateY(0);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* Hide subtitle when scrolled */
.subtitle--hidden {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
  margin-top: 0;
}

.subtitle::before {
  content: '> ';
  color: #4facfe;
  font-weight: 600;
}

.subtitle::after {
  content: '_';
  color: var(--color-primary);
  animation: blink 1.5s infinite;
  margin-left: 4px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Hover Effects */
.logo-container:hover .tag {
  transform: rotateY(720deg);
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.logo-container:hover .first-name,
.logo-container:hover .last-name {
  color: var(--color-primary);
  text-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
}

/* Hover effects */
.logo-container:hover {
  transform: translateY(-2px);
}

/* Scrolled state - professional compact appearance */
.logo-container--scrolled {
  transform: scale(0.88);
}

.logo-container--scrolled .logo-text {
  font-size: 24px;
  margin-bottom: 0;
}

.logo-container--scrolled .first-name,
.logo-container--scrolled .last-name {
  color: var(--color-white);
  text-shadow: none;
}

.logo-container--scrolled .tag {
  transform: rotateY(180deg);
  font-size: 20px;
  color: #4facfe;
}

.logo-container--scrolled .tag-wrapper {
  width: 32px;
  height: 24px;
}

.logo-container--scrolled:hover .tag {
  transform: rotateY(360deg);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Responsive */
@media screen and (max-width: 425px) {
  .logo-text {
    font-size: 26px;
  }

  .tag {
    font-size: 22px;
  }

  .tag-wrapper {
    width: 32px;
    height: 26px;
  }

  .subtitle {
    font-size: 10px;
  }

  .logo-container--scrolled {
    transform: scale(0.85);
  }

  .logo-container--scrolled .logo-text {
    font-size: 22px;
  }

  .logo-container--scrolled .tag {
    font-size: 18px;
  }

  .logo-container--scrolled .tag-wrapper {
    width: 28px;
    height: 22px;
  }
}

@media screen and (max-width: 320px) {
  .logo-text {
    font-size: 22px;
  }

  .tag {
    font-size: 18px;
  }

  .tag-wrapper {
    width: 28px;
    height: 22px;
    margin: 0 6px;
  }

  .logo-container--scrolled {
    transform: scale(0.82);
  }

  .logo-container--scrolled .logo-text {
    font-size: 18px;
  }

  .logo-container--scrolled .tag {
    font-size: 14px;
  }

  .logo-container--scrolled .tag-wrapper {
    width: 22px;
    height: 18px;
  }
}
</style>