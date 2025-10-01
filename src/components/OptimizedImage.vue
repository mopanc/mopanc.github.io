<template>
  <picture v-if="!error" :class="pictureClass">
    <!-- WebP source for modern browsers -->
    <source
      :srcset="webpSrc"
      type="image/webp"
      :media="media"
    />

    <!-- Fallback to JPEG for older browsers -->
    <img
      :src="fallbackSrc"
      :alt="alt"
      :class="imgClass"
      :loading="loading"
      :width="width"
      :height="height"
      @load="onLoad"
      @error="onError"
      :style="imgStyle"
    />
  </picture>

  <!-- Error fallback -->
  <div v-else class="image-error">
    <i class="ri-image-line"></i>
    <span>{{ errorMessage || 'Image failed to load' }}</span>
  </div>
</template>

<script>
export default {
  name: 'OptimizedImage',
  props: {
    /**
     * Image source path (without extension)
     * Example: '../assets/img/project-image'
     */
    src: {
      type: String,
      required: true
    },

    /**
     * Alt text for accessibility (REQUIRED for SEO)
     */
    alt: {
      type: String,
      required: true
    },

    /**
     * Image width (helps prevent layout shift - CLS)
     */
    width: {
      type: [String, Number],
      default: null
    },

    /**
     * Image height (helps prevent layout shift - CLS)
     */
    height: {
      type: [String, Number],
      default: null
    },

    /**
     * Loading strategy: 'lazy' | 'eager'
     * Use 'eager' for above-the-fold images
     */
    loading: {
      type: String,
      default: 'lazy',
      validator: (value) => ['lazy', 'eager'].includes(value)
    },

    /**
     * CSS class for <picture> element
     */
    pictureClass: {
      type: String,
      default: ''
    },

    /**
     * CSS class for <img> element
     */
    imgClass: {
      type: String,
      default: ''
    },

    /**
     * Media query for responsive images
     * Example: '(min-width: 768px)'
     */
    media: {
      type: String,
      default: null
    },

    /**
     * Use optimized folder
     */
    useOptimized: {
      type: Boolean,
      default: true
    },

    /**
     * Custom error message
     */
    errorMessage: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      error: false,
      loaded: false
    }
  },

  computed: {
    /**
     * Get base path (remove extension if present)
     */
    basePath() {
      const path = this.src.replace(/\.(png|jpg|jpeg|webp)$/i, '');

      // If useOptimized, replace img path with img-optimized
      if (this.useOptimized) {
        return path.replace('/img/', '/img-optimized/');
      }

      return path;
    },

    /**
     * WebP source path
     */
    webpSrc() {
      return `${this.basePath}.webp`;
    },

    /**
     * JPEG fallback path
     */
    fallbackSrc() {
      return `${this.basePath}.jpg`;
    },

    /**
     * Dynamic styles for loading state
     */
    imgStyle() {
      return {
        opacity: this.loaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      };
    }
  },

  methods: {
    onLoad() {
      this.loaded = true;
      this.$emit('load');
    },

    onError(event) {
      console.warn(`Failed to load image: ${this.src}`);
      this.error = true;
      this.$emit('error', event);
    }
  }
}
</script>

<style scoped>
picture {
  display: inline-block;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.image-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--color-bg-secondary, #f5f5f5);
  border: 2px dashed var(--color-border, #ddd);
  border-radius: 8px;
  color: var(--color-text, #666);
  min-height: 200px;
}

.image-error i {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  opacity: 0.5;
}

.image-error span {
  font-size: 0.9rem;
}
</style>
