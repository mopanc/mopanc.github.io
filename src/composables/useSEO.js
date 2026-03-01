import { useHead } from '@unhead/vue'

export function useSEO({
  title = 'Jorge Morais | Full Stack Developer Portfolio',
  description = 'Full Stack Developer with 5+ years of experience specializing in React, Vue.js, Node.js, TypeScript, and embedded systems. Building high-performance web applications and industrial IoT solutions.',
  keywords = 'full stack developer, react developer, vue.js developer, nodejs developer, typescript developer, embedded systems, IoT, C programming, portugal developer',
  ogImage = 'https://avatars.githubusercontent.com/u/45471030?v=4',
  ogType = 'website',
  canonical = null,
  structuredData = null,
  author = 'Jorge Morais',
  twitterCard = 'summary_large_image',
  twitterCreator = '@JorgeMo56542670'
} = {}) {

  const canonicalUrl = canonical || `https://jorgemopanc.com${typeof window !== 'undefined' ? window.location.pathname : ''}`

  const headConfig = {
    title,
    meta: [
      // Basic SEO
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: author },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

      // Open Graph
      { property: 'og:type', content: ogType },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:site_name', content: 'Jorge Morais - Full Stack Developer' },
      { property: 'og:locale', content: 'en_GB' },

      // Twitter Card
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:creator', content: twitterCreator },
      { name: 'twitter:site', content: twitterCreator },
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  }

  // Add structured data if provided
  if (structuredData) {
    headConfig.script = [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData)
      }
    ]
  }

  useHead(headConfig)

  return {
    title,
    description,
    canonical: canonicalUrl
  }
}

// Predefined SEO configurations for common pages
export const seoConfigs = {
  home: {
    title: 'Jorge Morais | Full Stack Developer Portfolio',
    description: 'Full Stack Developer with 5+ years building high-performance web applications and embedded systems. Specialized in React, Vue.js, Node.js, TypeScript, C programming, and industrial IoT. Available for remote opportunities.',
    keywords: 'full stack developer, react developer, vuejs developer, nodejs developer, typescript developer, embedded systems developer, IoT developer, C programming, industrial systems, remote developer, portugal developer, benelux developer, nordic developer',
    canonical: 'https://jorgemopanc.com/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jorge Morais',
      jobTitle: 'Lead Full Stack Developer',
      url: 'https://jorgemopanc.com',
      sameAs: [
        'https://github.com/jorgemorais272',
        'https://www.linkedin.com/in/jorge-mopanc/',
        'https://twitter.com/JorgeMo56542670'
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PT',
        addressLocality: 'Braga'
      },
      email: 'jorgemopanc@icloud.com',
      telephone: '+351910559307',
      knowsAbout: [
        'React.js', 'Vue.js', 'Node.js', 'TypeScript', 'JavaScript',
        'C Programming', 'Embedded Systems', 'IoT', 'MQTT', 'CCTalk',
        'Full Stack Development', 'Frontend Development', 'Backend Development'
      ]
    }
  },

  projects: {
    title: 'Projects & Portfolio | Jorge Morais Full Stack Dev',
    description: 'Explore my portfolio of web applications, embedded systems, and IoT projects. Built with React, Vue.js, Node.js, C, and modern technologies.',
    keywords: 'portfolio, projects, web applications, embedded systems, IoT projects, react projects, vuejs projects, nodejs projects, case studies',
    canonical: 'https://jorgemopanc.com/projects'
  },

  about: {
    title: 'About Jorge Morais | Developer Experience & Bio',
    description: 'Learn about my journey from military service to full stack development. 5+ years of experience in web applications, embedded systems, and industrial IoT solutions.',
    keywords: 'about, developer bio, full stack developer biography, career journey, professional experience, technical expertise',
    canonical: 'https://jorgemopanc.com/about'
  },

  contact: {
    title: 'Contact Jorge Morais - Available for Remote Opportunities',
    description: 'Get in touch to discuss your project. Available for remote full stack development, embedded systems programming, and technical consulting.',
    keywords: 'contact, hire developer, remote developer, full stack developer for hire, technical consulting, freelance developer',
    canonical: 'https://jorgemopanc.com/contact'
  },

  certificates: {
    title: 'Certifications & Education | Jorge Morais CS50 Harvard',
    description: 'Professional certifications in JavaScript, React, Vue.js, Node.js, and computer science. Currently completing CS50 from Harvard University.',
    keywords: 'certifications, education, cs50, harvard, javascript certification, react certification, professional development',
    canonical: 'https://jorgemopanc.com/certificates'
  },

  privacy: {
    title: 'Privacy Policy & Data Protection | Jorge Morais Site',
    description: 'Privacy policy and data handling practices for jorgemopanc.com. Minimal data collection, GDPR compliant.',
    keywords: 'privacy policy, data protection, gdpr, privacy',
    canonical: 'https://jorgemopanc.com/privacy',
    ogType: 'article'
  },

  blog: {
    title: 'Blog & TIL | Jorge Morais — Full Stack Developer',
    description: 'Technical articles on Node.js, Vue.js, React, embedded systems, performance optimization, and full stack development.',
    keywords: 'blog, articles, tutorials, nodejs, vuejs, react, embedded systems, performance, full stack development',
    canonical: 'https://jorgemopanc.com/blog',
    ogType: 'website'
  },

  article: ({ title, description, slug, heroImage, date }) => ({
    title: `${title} | Jorge Morais`,
    description,
    canonical: `https://jorgemopanc.com/blog/${slug}`,
    ogType: 'article',
    ogImage: heroImage || 'https://avatars.githubusercontent.com/u/45471030?v=4',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      url: `https://jorgemopanc.com/blog/${slug}`,
      image: heroImage || undefined,
      datePublished: date,
      author: {
        '@type': 'Person',
        name: 'Jorge Morais',
        url: 'https://jorgemopanc.com'
      },
      publisher: {
        '@type': 'Person',
        name: 'Jorge Morais',
        url: 'https://jorgemopanc.com'
      }
    }
  })
}
