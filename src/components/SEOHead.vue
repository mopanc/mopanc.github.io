<template>
  <!-- SEO Component - No visual content, only meta management -->
</template>

<script>
export default {
  name: 'SEOHead',
  props: {
    title: {
      type: String,
      default: 'Jorge Morais - Full Stack Developer | React Vue.js Node.js TypeScript Expert | Freelancer'
    },
    description: {
      type: String,
      default: 'Senior Full Stack Developer with 4+ years experience. React, Vue.js, Node.js, TypeScript specialist. Expert in web development, REST APIs, enterprise systems. Available for freelance projects worldwide.'
    },
    keywords: {
      type: String,
      default: 'full stack developer, react developer, vue.js developer, nodejs developer, typescript developer, web developer, javascript expert, freelancer developer, remote developer, software engineer'
    },
    ogImage: {
      type: String,
      default: 'https://avatars.githubusercontent.com/u/45471030?v=4'
    },
    canonical: {
      type: String,
      default: 'https://mopanc.github.io'
    },
    type: {
      type: String,
      default: 'website'
    },
    structuredData: {
      type: Object,
      default: null
    }
  },

  head() {
    const head = {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.ogImage
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.canonical
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.type
        },
        // Twitter
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.ogImage
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.canonical
        }
      ]
    }

    // Add structured data if provided
    if (this.structuredData) {
      head.script = [
        {
          hid: 'structured-data',
          type: 'application/ld+json',
          json: this.structuredData
        }
      ]
    }

    return head
  },

  mounted() {
    // Update document title dynamically
    document.title = this.title

    // Update meta description
    this.updateMetaTag('description', this.description)
    this.updateMetaTag('keywords', this.keywords)

    // Update Open Graph tags
    this.updateMetaProperty('og:title', this.title)
    this.updateMetaProperty('og:description', this.description)
    this.updateMetaProperty('og:image', this.ogImage)
    this.updateMetaProperty('og:url', this.canonical)

    // Update Twitter tags
    this.updateMetaTag('twitter:title', this.title)
    this.updateMetaTag('twitter:description', this.description)
    this.updateMetaTag('twitter:image', this.ogImage)

    // Update canonical link
    this.updateCanonical(this.canonical)

    // Add structured data if provided
    if (this.structuredData) {
      this.addStructuredData(this.structuredData)
    }
  },

  watch: {
    title(newTitle) {
      document.title = newTitle
      this.updateMetaProperty('og:title', newTitle)
      this.updateMetaTag('twitter:title', newTitle)
    },

    description(newDesc) {
      this.updateMetaTag('description', newDesc)
      this.updateMetaProperty('og:description', newDesc)
      this.updateMetaTag('twitter:description', newDesc)
    },

    canonical(newCanonical) {
      this.updateCanonical(newCanonical)
      this.updateMetaProperty('og:url', newCanonical)
    }
  },

  methods: {
    updateMetaTag(name, content) {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    },

    updateMetaProperty(property, content) {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    },

    updateCanonical(href) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', href)
    },

    addStructuredData(data) {
      // Remove existing structured data
      const existing = document.querySelector('script[type="application/ld+json"][data-dynamic]')
      if (existing) {
        existing.remove()
      }

      // Add new structured data
      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-dynamic', 'true')
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    }
  }
}
</script>

<style scoped>
/* No styles needed - this is a pure SEO component */
</style>