<!-- Professional Gradient Version -->
<template>
  <div class="logo">
    <h1>
      <span class="name">Jorge</span>
      <span class="dev">&lt;</span>
      <span class="slash">/</span>
      <span class="closeDev">&gt;</span>
      <span class="lastName">Morais</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'LogoVueProfessional'
}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  position: relative;
  display: flex;
  font-family: 'Inter', 'SF Pro Display', system-ui, sans-serif;
  letter-spacing: -0.5px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.name, .lastName {
  background: linear-gradient(135deg, var(--color-primary) 0%, #4facfe 50%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.name {
  margin-right: 4px;
}

.lastName {
  margin-left: 4px;
}

.name::after, .lastName::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), #4facfe);
  transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.dev, .slash, .closeDev {
  color: #fff;
  font-weight: 600;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
}

.dev::before, .closeDev::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.logo:hover h1 {
  transform: scale(1.05);
}

.logo:hover .name::after,
.logo:hover .lastName::after {
  width: 100%;
}

.logo:hover .dev::before,
.logo:hover .closeDev::before {
  width: 30px;
  height: 30px;
  opacity: 0.2;
}

.logo:hover .dev {
  transform: translateX(-130px) rotate(15deg) scale(1.1);
  color: var(--color-primary);
}

.logo:hover .slash {
  transform: translateX(170px) rotate(-15deg) scale(1.2);
  color: #4facfe;
}

.logo:hover .closeDev {
  transform: translateX(172px) rotate(15deg) scale(1.1);
  color: var(--color-primary);
}

.logo:hover .name {
  transform: translateX(40px) scale(1.1);
}

.logo:hover .lastName {
  transform: translateX(-40px) scale(1.1);
}

/* Responsive */
@media screen and (max-width: 425px) {
  h1 {
    font-size: 28px;
  }

  .logo:hover .dev {
    transform: translateX(-100px) rotate(15deg) scale(1.1);
  }

  .logo:hover .slash {
    transform: translateX(130px) rotate(-15deg) scale(1.2);
  }

  .logo:hover .closeDev {
    transform: translateX(132px) rotate(15deg) scale(1.1);
  }

  .logo:hover .name {
    transform: translateX(30px) scale(1.1);
  }

  .logo:hover .lastName {
    transform: translateX(-30px) scale(1.1);
  }
}

@media screen and (max-width: 320px) {
  h1 {
    font-size: 24px;
  }
}
</style>