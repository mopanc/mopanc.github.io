import { useHead } from '@unhead/vue'
import { computed } from 'vue'

/**
 * Generate breadcrumb structured data for SEO
 * Accepts a static array or a ref/computed/getter for reactive updates.
 */
export function useBreadcrumbs(breadcrumbsOrRef = []) {
  const resolved = computed(() => {
    const crumbs = typeof breadcrumbsOrRef === 'function' ? breadcrumbsOrRef()
      : (breadcrumbsOrRef && breadcrumbsOrRef.value !== undefined) ? breadcrumbsOrRef.value
      : breadcrumbsOrRef || []
    return crumbs
  })

  useHead(computed(() => {
    const crumbs = resolved.value
    if (!crumbs.length) return {}

    return {
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs.map((crumb, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: crumb.name,
              item: `https://jorgemopanc.com${crumb.path}`
            }))
          }),
          key: 'breadcrumb-schema'
        }
      ]
    }
  }))

  return resolved
}

// Predefined breadcrumbs for common pages
export const breadcrumbConfigs = {
  home: [
    { name: 'Home', path: '/' }
  ],

  projects: [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' }
  ],

  about: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
  ],

  contact: [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' }
  ],

  certificates: [
    { name: 'Home', path: '/' },
    { name: 'Certificates', path: '/certificates' }
  ],

  projectDetail: (projectName, projectSlug) => [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: projectName, path: `/projects/${projectSlug}` }
  ],

  blog: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' }
  ],

  article: (articleTitle, articleSlug) => [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: articleTitle, path: `/blog/${articleSlug}` }
  ]
}
