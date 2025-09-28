<!-- Minimalist Clean Version -->
<template>
  <div class="logo">
    <div class="logo-container">
      <div class="logo-text">
        <span class="first-name">Jorge</span>
        <span class="tag-wrapper">
          <span class="tag">&lt;/&gt;</span>
        </span>
        <span class="last-name">Morais</span>
      </div>
      <div class="subtitle">Full Stack Developer</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoVueMinimalist'
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
  transition: all 0.3s ease;
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
}

.first-name, .last-name {
  color: var(--color-white);
  transition: all 0.3s ease;
  position: relative;
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
}

.tag {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 28px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: center;
}

.subtitle {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 11px;
  font-weight: 400;
  color: var(--color-primary);
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease 0.1s;
  position: relative;
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
  color: #4facfe;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.logo-container:hover .first-name,
.logo-container:hover .last-name {
  color: var(--color-primary);
  text-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
}



.logo-container:hover .subtitle {
  opacity: 1;
  transform: translateY(0);
}

.logo-container:hover {
  transform: translateY(-2px);
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
}
</style>