import { useHead } from '@unhead/vue'

/**
 * Generate breadcrumb structured data for SEO
 * @param {Array} breadcrumbs - Array of breadcrumb objects {name, path}
 * @example
 * useBreadcrumbs([
 *   { name: 'Home', path: '/' },
 *   { name: 'Projects', path: '/projects' },
 *   { name: 'Project Name', path: '/projects/project-slug' }
 * ])
 */
export function useBreadcrumbs(breadcrumbs = []) {
  if (!breadcrumbs.length) return

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://jorgemopanc.com${crumb.path}`
    }))
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(breadcrumbList),
        key: 'breadcrumb-schema'
      }
    ]
  })

  return breadcrumbList
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
