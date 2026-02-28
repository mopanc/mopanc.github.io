<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isPublished"
    :class="['st', { 'st--on': isPublished }]"
    :title="isPublished ? 'Publicado — clica para despublicar' : 'Rascunho — clica para publicar'"
    @click="toggle"
  >
    <span class="st__track">
      <span class="st__thumb">
        <i :class="isPublished ? 'ri-check-line' : 'ri-close-line'"></i>
      </span>
    </span>
    <span class="st__label">
      <span v-if="isPublished" class="st__dot st__dot--on"></span>
      <span v-else class="st__dot"></span>
      {{ isPublished ? 'Publicado' : 'Rascunho' }}
    </span>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'StatusToggle',
  props: {
    status: {
      type: String,
      required: true,
      validator: (v) => ['published', 'draft'].includes(v),
    },
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const isPublished = computed(() => props.status === 'published')
    const toggle = () => emit('toggle')
    return { isPublished, toggle }
  },
}
</script>

<style scoped>
.st {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  user-select: none;
}

/* ── Track ────────────────────────────────────────────── */
.st__track {
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 999px;
  background: var(--color-border, #cbd5e1);
  transition: background 0.25s ease, box-shadow 0.25s ease;
  flex-shrink: 0;
}

.st--on .st__track {
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.18);
}

/* ── Thumb ────────────────────────────────────────────── */
.st__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.st__thumb i {
  font-size: 0.65rem;
  color: #94a3b8;
  transition: color 0.2s;
}

.st--on .st__thumb {
  transform: translateX(18px);
}

.st--on .st__thumb i {
  color: #22c55e;
}

/* ── Label ────────────────────────────────────────────── */
.st__label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-muted);
  transition: color 0.2s;
  white-space: nowrap;
}

.st--on .st__label {
  color: #22c55e;
}

.st__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-muted, #94a3b8);
  flex-shrink: 0;
  transition: background 0.25s;
}

.st__dot--on {
  background: #22c55e;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);
}

/* ── Hover / Active ───────────────────────────────────── */
.st:hover .st__track {
  filter: brightness(1.08);
}

.st:active .st__thumb {
  width: 19px;
}

.st--on:active .st__thumb {
  transform: translateX(15px);
  width: 19px;
}
</style>
