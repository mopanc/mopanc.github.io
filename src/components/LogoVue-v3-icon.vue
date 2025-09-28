<!-- Developer Icon Style Version -->
<template>
  <div class="logo">
    <div class="logo-container">
      <div class="icon-section">
        <div class="code-icon">
          <div class="bracket left">{</div>
          <div class="initials">JM</div>
          <div class="bracket right">}</div>
        </div>
      </div>
      <div class="text-section">
        <div class="name">Jorge Morais</div>
        <div class="role">
          <span class="cursor">$</span>
          <span class="command">fullstack-dev</span>
          <span class="cursor-blink">_</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoVueIcon'
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
  gap: 16px;
  transition: all 0.3s ease;
}

.icon-section {
  position: relative;
}

.code-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-primary) 0%, #4facfe 100%);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow:
    0 4px 20px rgba(79, 172, 254, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.code-icon::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.bracket {
  position: absolute;
  font-size: 18px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.bracket.left {
  left: 6px;
}

.bracket.right {
  right: 6px;
}

.initials {
  font-size: 16px;
  font-weight: 700;
  color: white;
  font-family: 'JetBrains Mono', monospace;
  z-index: 1;
  transition: all 0.3s ease;
}

.text-section {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.name {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-white);
  font-family: 'Inter', system-ui, sans-serif;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
}

.role {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.cursor {
  color: var(--color-primary);
  font-weight: 700;
}

.command {
  color: #4facfe;
  font-weight: 500;
}

.cursor-blink {
  color: var(--color-primary);
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Hover Effects */
.logo-container:hover {
  transform: scale(1.05);
}

.logo-container:hover .code-icon {
  transform: rotate(5deg);
  box-shadow:
    0 8px 30px rgba(79, 172, 254, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.logo-container:hover .bracket.left {
  transform: translateX(-3px) rotate(-10deg);
  color: #ffeb3b;
}

.logo-container:hover .bracket.right {
  transform: translateX(3px) rotate(10deg);
  color: #ffeb3b;
}

.logo-container:hover .initials {
  transform: scale(1.1);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.logo-container:hover .name {
  color: var(--color-primary);
}

.logo-container:hover .role {
  color: var(--color-white);
}

/* Responsive */
@media screen and (max-width: 425px) {
  .logo-container {
    gap: 12px;
  }

  .code-icon {
    width: 40px;
    height: 40px;
  }

  .bracket {
    font-size: 14px;
  }

  .bracket.left {
    left: 5px;
  }

  .bracket.right {
    right: 5px;
  }

  .initials {
    font-size: 12px;
  }

  .name {
    font-size: 20px;
  }

  .role {
    font-size: 11px;
  }
}

@media screen and (max-width: 320px) {
  .logo-container {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .name {
    font-size: 18px;
  }

  .role {
    justify-content: center;
  }
}
</style>