<!--
  EXAMPLE: How to use SEO in a Vue component
  This is a complete example showing all SEO features
-->

<template>
  <div class="page-container">
    <h1>{{ pageTitle }}</h1>
    <p>{{ pageDescription }}</p>

    <!-- Your page content here -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSEO, seoConfigs } from '@/composables/useSEO'
import { useBreadcrumbs, breadcrumbConfigs } from '@/composables/useBreadcrumbs'

// ==================================================
// OPTION 1: Use predefined SEO config (EASIEST)
// ==================================================
useSEO(seoConfigs.projects)
useBreadcrumbs(breadcrumbConfigs.projects)

// ==================================================
// OPTION 2: Custom SEO config (FLEXIBLE)
// ==================================================
/*
useSEO({
  title: 'My Custom Page - Jorge Morais',
  description: 'This is my custom page description with keywords for SEO',
  keywords: 'custom page, portfolio, jorge morais, vue.js',
  ogImage: 'https://example.com/custom-image.jpg',
  ogType: 'article',
  canonical: 'https://jorgemopanc.com/my-custom-page',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'My Custom Page',
    description: 'Page description',
    author: {
      '@type': 'Person',
      name: 'Jorge Morais',
      url: 'https://jorgemopanc.com'
    }
  }
})

// Custom breadcrumbs
useBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Custom Section', path: '/custom' },
  { name: 'My Page', path: '/custom/my-page' }
])
*/

// ==================================================
// OPTION 3: Dynamic SEO (for dynamic routes)
// ==================================================
/*
import { useRoute } from 'vue-router'

const route = useRoute()
const projectSlug = route.params.slug

// Fetch project data
const projectData = ref(null)

onMounted(async () => {
  // Fetch your data
  projectData.value = await fetchProject(projectSlug)

  // Update SEO dynamically
  useSEO({
    title: `${projectData.value.name} - Case Study - Jorge Morais`,
    description: projectData.value.description,
    keywords: `${projectData.value.name}, ${projectData.value.tags.join(', ')}`,
    ogImage: projectData.value.image,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: projectData.value.name,
      description: projectData.value.description,
      author: {
        '@type': 'Person',
        name: 'Jorge Morais'
      },
      datePublished: projectData.value.date,
      image: projectData.value.image
    }
  })

  // Dynamic breadcrumbs
  useBreadcrumbs([
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: projectData.value.name, path: `/projects/${projectSlug}` }
  ])
})
*/

// Page data
const pageTitle = ref('Example Page')
const pageDescription = ref('This is an example of how to implement SEO')
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>

<!--
  ==================================================
  COMPLETE SEO CHECKLIST FOR THIS PAGE:
  ==================================================

  ✅ 1. Add route in src/VueRouter.vue with meta tags
  ✅ 2. Use useSEO() composable in component
  ✅ 3. Use useBreadcrumbs() for breadcrumb schema
  ✅ 4. Add to prerender routes in vue.config.js
  ✅ 5. Add to sitemap.xml
  ✅ 6. Build and test: npm run build
  ✅ 7. Verify HTML source has meta tags
  ✅ 8. Test with Google Rich Results

  ==================================================
  STRUCTURED DATA TYPES YOU CAN USE:
  ==================================================

  - Person (homepage, about)
  - Organization (company pages)
  - WebPage (general pages)
  - Article (blog posts)
  - CreativeWork (projects, case studies)
  - BreadcrumbList (navigation)
  - FAQPage (FAQ sections)
  - HowTo (tutorials)
  - Review (testimonials)
  - Product (if selling)

  Full list: https://schema.org/docs/schemas.html

  ==================================================
  TESTING TOOLS:
  ==================================================

  1. Google Rich Results Test
     https://search.google.com/test/rich-results

  2. Facebook Sharing Debugger
     https://developers.facebook.com/tools/debug/

  3. Twitter Card Validator
     https://cards-dev.twitter.com/validator

  4. LinkedIn Post Inspector
     https://www.linkedin.com/post-inspector/

  5. Schema Markup Validator
     https://validator.schema.org/

  ==================================================
-->
