<template>
  <div
    class="trapdoor"
    :class="[modeClass, alignClass, { open: isOpen, opening: isOpening, closing: isClosing }]"
    :style="styleVars"
    role="button"
    :aria-label="ariaLabel"
    :tabindex="clickable ? 0 : -1"
    @click="onToggle"
    @keydown.enter.prevent="onToggle"
    @keydown.space.prevent="onToggle"
  >
    <div class="trapdoor__back">
      <slot name="back" />
    </div>

    <div class="door door--a" aria-hidden="true">
      <div class="slice">
        <div class="slice-inner">
          <slot name="front" />
        </div>
      </div>
    </div>
    <div class="door door--b" aria-hidden="true">
      <div class="slice">
        <div class="slice-inner">
          <slot name="front" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'TrapdoorReveal',
  props: {
    modelValue: { type: Boolean, default: false },
    mode: {
      type: String,
      default: 'split-vertical'
    },
    duration: { type: Number, default: 1700 },
    openDelay: { type: Number, default: 300 },
    closeDelay: { type: Number, default: 260 },
    scale: { type: Number, default: 1.08 },
    scaleSoft: { type: Number, default: 1.03 },
    align: { type: String, default: 'center' },
    clickable: { type: Boolean, default: true },
    ariaLabel: { type: String, default: 'Toggle reveal' }
  },
  emits: ['update:modelValue', 'toggle'],
  setup(props, { emit, expose }) {
    const isOpening = ref(false)
    const isClosing = ref(false)
    let openTimer = null
    let closeTimer = null

    const isOpen = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      }
    })

    const styleVars = computed(() => ({
      '--duration': `${props.duration}ms`,
      '--open-delay': `${props.openDelay}ms`,
      '--close-delay': `${props.closeDelay}ms`,
      '--scale': props.scale,
      '--scale-soft': props.scaleSoft
    }))

    const modeClass = computed(() => {
      return `mode-${props.mode}`
    })

    const alignClass = computed(() => {
      return `align-${props.align}`
    })

    const clearTimers = () => {
      if (openTimer) {
        clearTimeout(openTimer)
        openTimer = null
      }
      if (closeTimer) {
        clearTimeout(closeTimer)
        closeTimer = null
      }
    }

    const runSequence = (targetOpen) => {
      if (isOpening.value || isClosing.value) return
      if (typeof targetOpen === 'boolean' && targetOpen === isOpen.value) return
      clearTimers()

      if (!isOpen.value && targetOpen !== false) {
        isOpening.value = true
        openTimer = setTimeout(() => {
          isOpen.value = true
          emit('toggle', true)
        }, props.openDelay)
        closeTimer = setTimeout(() => {
          isOpening.value = false
        }, props.duration)
        return
      }

      if (isOpen.value && targetOpen !== true) {
        isClosing.value = true
        openTimer = setTimeout(() => {
          isOpen.value = false
          emit('toggle', false)
        }, props.closeDelay)
        closeTimer = setTimeout(() => {
          isClosing.value = false
        }, props.duration)
      }
    }

    const onToggle = () => {
      if (!props.clickable) return
      runSequence()
    }

    expose({
      trigger: (targetOpen) => runSequence(targetOpen)
    })

    return { isOpen, isOpening, isClosing, styleVars, modeClass, alignClass, onToggle }
  }
}
</script>

<style scoped>
.trapdoor {
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transition: box-shadow 300ms ease-in-out;
  display: inline-flex;
  align-items: center;
}

.trapdoor__back {
  position: relative;
  display: inline-flex;
  align-items: center;
  z-index: 1;
}

.door {
  position: absolute;
  overflow: hidden;
  z-index: 3;
  transition: transform 640ms cubic-bezier(0.3, 0.1, 0.2, 1), box-shadow 320ms ease-in-out;
}

.slice {
  position: absolute;
  width: var(--slice-size, 100%);
  height: var(--slice-size, 100%);
}

.slice-inner {
  position: absolute;
  inset: 0;
}

.align-center .slice-inner {
  display: grid;
  place-items: center;
}

.align-full .trapdoor__back {
  display: block;
}

.align-full .slice-inner {
  display: block;
}

.trapdoor.opening {
  animation: trapdoor-open var(--duration) ease-in-out both;
}

.trapdoor.closing {
  animation: trapdoor-close var(--duration) ease-in-out both;
}

.trapdoor.opening .door {
  transition-delay: var(--open-delay);
}

.trapdoor.closing .door {
  transition-delay: var(--close-delay);
}

@keyframes trapdoor-open {
  0% {
    transform: scale(1);
  }
  24% {
    transform: scale(var(--scale));
  }
  70% {
    transform: scale(var(--scale));
  }
  88% {
    transform: scale(var(--scale-soft));
  }
  100% {
    transform: scale(1);
  }
}

@keyframes trapdoor-close {
  0% {
    transform: scale(1);
  }
  22% {
    transform: scale(var(--scale));
  }
  70% {
    transform: scale(var(--scale));
  }
  88% {
    transform: scale(var(--scale-soft));
  }
  100% {
    transform: scale(1);
  }
}

/* Split vertical (center up/down) */
.mode-split-vertical .door--a,
.mode-split-vertical .door--b {
  width: 100%;
  height: 50%;
}

.mode-split-vertical .door--a {
  top: 0;
}

.mode-split-vertical .door--b {
  bottom: 0;
}

.mode-split-vertical .door--a .slice {
  top: var(--slice-top, 0px);
  left: var(--slice-left, 0px);
}

.mode-split-vertical .door--b .slice {
  top: calc(var(--slice-top, 0px) - var(--trapdoor-size, 0px) / 2);
  left: var(--slice-left, 0px);
}

.align-full.mode-split-vertical .door--a,
.align-full.mode-split-vertical .door--b {
  width: 100%;
  height: 50%;
}

.align-full.mode-split-vertical .door--a .slice,
.align-full.mode-split-vertical .door--b .slice {
  inset: 0;
  width: 100%;
  height: 100%;
}

.align-full.mode-split-vertical .door--a .slice-inner {
  clip-path: inset(0 0 50% 0);
}

.align-full.mode-split-vertical .door--b .slice-inner {
  clip-path: inset(50% 0 0 0);
}

.mode-split-vertical.open .door--a {
  transform: translateY(-110%);
}

.mode-split-vertical.open .door--b {
  transform: translateY(110%);
}

/* Split horizontal (center left/right) */
.mode-split-horizontal .door--a,
.mode-split-horizontal .door--b {
  width: 50%;
  height: 100%;
}

.mode-split-horizontal .door--a {
  left: 0;
}

.mode-split-horizontal .door--b {
  right: 0;
}

.mode-split-horizontal .door--a .slice {
  top: var(--slice-top, 0px);
  left: var(--slice-left, 0px);
}

.mode-split-horizontal .door--b .slice {
  top: var(--slice-top, 0px);
  left: calc(var(--slice-left, 0px) - var(--trapdoor-size, 0px) / 2);
}

.align-full.mode-split-horizontal .door--a,
.align-full.mode-split-horizontal .door--b {
  width: 50%;
  height: 100%;
}

.align-full.mode-split-horizontal .door--a .slice,
.align-full.mode-split-horizontal .door--b .slice {
  inset: 0;
  width: 100%;
  height: 100%;
}

.align-full.mode-split-horizontal .door--a .slice-inner {
  clip-path: inset(0 50% 0 0);
}

.align-full.mode-split-horizontal .door--b .slice-inner {
  clip-path: inset(0 0 0 50%);
}

.mode-split-horizontal.open .door--a {
  transform: translateX(-110%);
}

.mode-split-horizontal.open .door--b {
  transform: translateX(110%);
}

/* Wipe modes */
.mode-wipe-up .door--a,
.mode-wipe-down .door--a,
.mode-wipe-left .door--a,
.mode-wipe-right .door--a {
  width: 100%;
  height: 100%;
  inset: 0;
}

.mode-wipe-up .door--b,
.mode-wipe-down .door--b,
.mode-wipe-left .door--b,
.mode-wipe-right .door--b {
  display: none;
}

.mode-wipe-up.open .door--a {
  transform: translateY(-110%);
}

.mode-wipe-down.open .door--a {
  transform: translateY(110%);
}

.mode-wipe-left.open .door--a {
  transform: translateX(-110%);
}

.mode-wipe-right.open .door--a {
  transform: translateX(110%);
}
</style>
