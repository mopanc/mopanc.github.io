<!-- Logo — Silicon Die mini-atmosphere + jorge · morais wordmark + tagline -->
<template>
  <div class="logo">
    <div class="logo-container" :class="{ 'logo-container--scrolled': isScrolled }">
      <!-- Mini-atmosphere: orbital rings + dots + central card with scan + silicon die -->
      <div class="logo-mark" aria-hidden="true">
        <div class="logo-mark__orbit logo-mark__orbit--outer">
          <span class="logo-mark__dot"></span>
        </div>
        <div class="logo-mark__orbit logo-mark__orbit--inner">
          <span class="logo-mark__dot logo-mark__dot--small"></span>
        </div>
        <div class="logo-mark__stage">
          <div class="logo-mark__scan"></div>
          <svg viewBox="0 0 48 48" class="logo-mark__die" fill="none">
            <path d="M24 2 L42 13 L42 35 L24 46 L6 35 L6 13 Z" stroke="#7eb8f7" stroke-width="1.2" stroke-linejoin="round" stroke-opacity="0.55" fill="none"/>
            <path d="M24 9 L37 16 L37 32 L24 39 L11 32 L11 16 Z" stroke="#a8d0ff" stroke-width="0.9" stroke-linejoin="round" stroke-opacity="0.7" fill="none"/>
            <g stroke="#7eb8f7" stroke-width="0.9" stroke-linecap="round" stroke-opacity="0.55" fill="none">
              <path d="M0 24 L6 24"/><path d="M0 19 L3 19 L6 22"/><path d="M0 29 L3 29 L6 26"/>
              <path d="M42 24 L48 24"/><path d="M45 19 L48 19"/><path d="M45 29 L48 29"/>
            </g>
            <circle cx="0.8" cy="24" r="0.7" fill="#a8d0ff"/>
            <circle cx="47.2" cy="24" r="0.7" fill="#a8d0ff"/>
            <circle class="logo-mark__core-glow" cx="24" cy="24" r="3.2" fill="#7eb8f7" opacity="0.3"/>
            <circle class="logo-mark__core" cx="24" cy="24" r="1.6" fill="#fff"/>
          </svg>
        </div>
      </div>

      <!-- Wordmark + tagline -->
      <div class="logo-text">
        <span class="logo-name">
          <span>jorge</span><span class="logo-name__sep">·</span><span>morais</span>
        </span>
        <span class="logo-tag" :class="{ 'logo-tag--hidden': isScrolled }">Full Stack · AI · Embedded</span>
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
  height: 100%;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), gap 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ═══ MINI ATMOSPHERE MARK ═══ */
.logo-mark {
  position: relative;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1), height 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Orbital rings */
.logo-mark__orbit {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(126, 184, 247, 0.22);
  animation: logoOrbit 28s linear infinite;
}
.logo-mark__orbit--inner {
  inset: 14%;
  border-color: rgba(126, 184, 247, 0.16);
  animation-direction: reverse;
  animation-duration: 22s;
}
.logo-mark__dot {
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 4.5px;
  height: 4.5px;
  border-radius: 50%;
  background: #a8d0ff;
  box-shadow: 0 0 7px rgba(168, 208, 255, 0.75);
}
.logo-mark__dot--small {
  top: -2px;
  width: 3px;
  height: 3px;
  background: #7eb8f7;
  box-shadow: 0 0 5px rgba(126, 184, 247, 0.6);
}
@keyframes logoOrbit {
  to { transform: rotate(360deg); }
}

/* Central card with scan */
.logo-mark__stage {
  position: absolute;
  inset: 24%;
  border-radius: 5px;
  background: rgba(17, 24, 39, 0.55);
  border: 1px solid rgba(126, 184, 247, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(126, 184, 247, 0.06),
    0 4px 12px -3px rgba(126, 184, 247, 0.4);
}
.logo-mark__scan {
  position: absolute;
  inset-inline: 0;
  height: 12px;
  background: linear-gradient(180deg, rgba(168, 208, 255, 0.4), rgba(126, 184, 247, 0.14) 60%, transparent);
  animation: logoScan 6s ease-in-out infinite;
  pointer-events: none;
}
@keyframes logoScan {
  0%, 100% { transform: translateY(-110%); opacity: 0; }
  40%, 60% { opacity: 1; }
  100%     { transform: translateY(110%); opacity: 0; }
}

/* Silicon die SVG */
.logo-mark__die {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.logo-mark__core {
  transform-origin: 24px 24px;
  animation: logoCore 2.4s ease-in-out infinite;
  filter: drop-shadow(0 0 2px #7eb8f7);
}
.logo-mark__core-glow {
  transform-origin: 24px 24px;
  animation: logoCoreGlow 2.4s ease-in-out infinite;
}
@keyframes logoCore {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.4); }
}
@keyframes logoCoreGlow {
  0%, 100% { transform: scale(0.8); opacity: 0.2; }
  50%      { transform: scale(1.6); opacity: 0.5; }
}

/* ═══ WORDMARK + TAGLINE ═══ */
.logo-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
}

.logo-name {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: rgb(220, 232, 248);
  display: inline-flex;
  align-items: baseline;
  transition: color 0.3s ease, font-size 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.logo-name__sep {
  color: #7eb8f7;
  margin: 0 0.28em;
  font-weight: 500;
}

.logo-tag {
  margin-top: 4px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 8.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(200, 216, 240, 0.45);
  white-space: nowrap;
  transition:
    opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.logo-tag--hidden {
  opacity: 0;
  transform: translateY(-3px);
  max-height: 0;
  margin-top: 0;
}

/* ═══ HOVER ═══ */
.logo-container:hover .logo-name { color: #ffffff; }
.logo-container:hover .logo-name__sep { color: #a8d0ff; }
.logo-container:hover .logo-mark__stage {
  border-color: rgba(126, 184, 247, 0.4);
  box-shadow:
    0 0 0 1px rgba(126, 184, 247, 0.1),
    0 6px 18px -3px rgba(126, 184, 247, 0.55);
}

/* ═══ SCROLLED ═══ */
.logo-container--scrolled {
  transform: scale(0.94);
  gap: 0.55rem;
}
.logo-container--scrolled .logo-mark {
  width: 42px;
  height: 42px;
}
.logo-container--scrolled .logo-name {
  font-size: 14px;
}

/* ═══ MOBILE ═══ */
@media screen and (max-width: 425px) {
  .logo-mark {
    width: 42px;
    height: 42px;
  }
  .logo-name {
    font-size: 14px;
  }
  .logo-tag {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .logo-mark__orbit, .logo-mark__scan, .logo-mark__core, .logo-mark__core-glow {
    animation: none;
  }
}
</style>
