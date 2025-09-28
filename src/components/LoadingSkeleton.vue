<template>
  <div class="skeleton" :class="[`skeleton--${type}`, { 'skeleton--animated': animated }]">
    <div v-if="type === 'card'" class="skeleton__card">
      <div class="skeleton__avatar"></div>
      <div class="skeleton__content">
        <div class="skeleton__line skeleton__line--title"></div>
        <div class="skeleton__line skeleton__line--subtitle"></div>
        <div class="skeleton__line skeleton__line--text"></div>
        <div class="skeleton__line skeleton__line--text skeleton__line--short"></div>
      </div>
    </div>

    <div v-else-if="type === 'text'" class="skeleton__text">
      <div
        v-for="line in lines"
        :key="line"
        class="skeleton__line"
        :class="{ 'skeleton__line--short': line === lines }"
      ></div>
    </div>

    <div v-else-if="type === 'project'" class="skeleton__project">
      <div class="skeleton__image"></div>
      <div class="skeleton__project-content">
        <div class="skeleton__line skeleton__line--title"></div>
        <div class="skeleton__line skeleton__line--text"></div>
        <div class="skeleton__line skeleton__line--text skeleton__line--short"></div>
        <div class="skeleton__actions">
          <div class="skeleton__button"></div>
          <div class="skeleton__button"></div>
        </div>
      </div>
    </div>

    <div v-else-if="type === 'form'" class="skeleton__form">
      <div class="skeleton__form-field">
        <div class="skeleton__label"></div>
        <div class="skeleton__input"></div>
      </div>
      <div class="skeleton__form-field">
        <div class="skeleton__label"></div>
        <div class="skeleton__input"></div>
      </div>
      <div class="skeleton__form-field">
        <div class="skeleton__label"></div>
        <div class="skeleton__textarea"></div>
      </div>
      <div class="skeleton__button skeleton__button--large"></div>
    </div>

    <div v-else class="skeleton__default">
      <div class="skeleton__line"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'card', 'project', 'form', 'default'].includes(value)
  },
  lines: {
    type: Number,
    default: 3
  },
  animated: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.skeleton {
  --skeleton-color: var(--color-border);
  --skeleton-highlight: rgba(255, 255, 255, 0.1);
  --skeleton-animation-duration: 1.5s;
}

.skeleton__line,
.skeleton__avatar,
.skeleton__image,
.skeleton__input,
.skeleton__textarea,
.skeleton__button,
.skeleton__label {
  background: var(--skeleton-color);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.skeleton--animated .skeleton__line,
.skeleton--animated .skeleton__avatar,
.skeleton--animated .skeleton__image,
.skeleton--animated .skeleton__input,
.skeleton--animated .skeleton__textarea,
.skeleton--animated .skeleton__button,
.skeleton--animated .skeleton__label {
  background: linear-gradient(
    90deg,
    var(--skeleton-color) 25%,
    var(--skeleton-highlight) 50%,
    var(--skeleton-color) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading var(--skeleton-animation-duration) infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Text Skeleton */
.skeleton__text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skeleton__line {
  height: 1rem;
  border-radius: 4px;
}

.skeleton__line--title {
  height: 1.5rem;
  width: 70%;
}

.skeleton__line--subtitle {
  height: 1.25rem;
  width: 50%;
}

.skeleton__line--text {
  height: 1rem;
  width: 100%;
}

.skeleton__line--short {
  width: 60%;
}

/* Card Skeleton */
.skeleton__card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.skeleton__avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Project Skeleton */
.skeleton__project {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}

.skeleton__image {
  width: 100%;
  height: 200px;
  border-radius: 0;
}

.skeleton__project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skeleton__actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.skeleton__button {
  height: 40px;
  width: 100px;
  border-radius: 6px;
}

.skeleton__button--large {
  height: 48px;
  width: 150px;
}

/* Form Skeleton */
.skeleton__form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skeleton__form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skeleton__label {
  height: 1rem;
  width: 80px;
}

.skeleton__input {
  height: 48px;
  width: 100%;
  border-radius: 6px;
}

.skeleton__textarea {
  height: 120px;
  width: 100%;
  border-radius: 6px;
}

/* Default Skeleton */
.skeleton__default {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .skeleton__card {
    flex-direction: column;
    text-align: center;
  }

  .skeleton__avatar {
    align-self: center;
  }

  .skeleton__actions {
    flex-direction: column;
  }

  .skeleton__button {
    width: 100%;
  }
}

/* Theme variations */
.theme-light .skeleton {
  --skeleton-color: #e5e5e5;
  --skeleton-highlight: rgba(255, 255, 255, 0.8);
}

.theme-dark .skeleton {
  --skeleton-color: var(--color-border);
  --skeleton-highlight: rgba(255, 255, 255, 0.1);
}

/* Accessibility */
.skeleton {
  aria-label: "Loading content";
}

@media (prefers-reduced-motion: reduce) {
  .skeleton--animated .skeleton__line,
  .skeleton--animated .skeleton__avatar,
  .skeleton--animated .skeleton__image,
  .skeleton--animated .skeleton__input,
  .skeleton--animated .skeleton__textarea,
  .skeleton--animated .skeleton__button,
  .skeleton--animated .skeleton__label {
    animation: none;
    background: var(--skeleton-color);
  }
}
</style>