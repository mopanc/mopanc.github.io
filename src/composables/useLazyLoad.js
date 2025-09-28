import { ref, onMounted, onUnmounted } from 'vue'

export function useLazyLoad() {
  const observer = ref(null)

  const createObserver = () => {
    if ('IntersectionObserver' in window) {
      observer.value = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target
              const src = img.getAttribute('data-src')

              if (src) {
                img.src = src
                img.removeAttribute('data-src')
                img.classList.add('loaded')
                observer.value.unobserve(img)
              }
            }
          })
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      )
    }
  }

  const observeImage = (imgElement) => {
    if (observer.value && imgElement) {
      observer.value.observe(imgElement)
    }
  }

  const observeImages = (selector = '[data-src]') => {
    const images = document.querySelectorAll(selector)
    images.forEach(observeImage)
  }

  onMounted(() => {
    createObserver()
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    observeImage,
    observeImages
  }
}