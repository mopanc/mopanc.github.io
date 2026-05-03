import { useHead } from '@unhead/vue'
import { computed } from 'vue'

export function useSEO(optionsOrRef) {
  const resolved = computed(() => {
    const opts = typeof optionsOrRef === 'function' ? optionsOrRef()
      : (optionsOrRef && optionsOrRef.value !== undefined) ? optionsOrRef.value
      : optionsOrRef || {}

    const title = opts.title || 'Jorge Morais · Senior Full-Stack Developer · AI + IoT'
    const description = opts.description || 'Senior Full-Stack Developer at the intersection of AI and Industrial IoT. React/Vue/Node + C firmware + LLMs (RAG, MCP, agents). Remote, EU.'
    const keywords = opts.keywords || 'senior full stack developer, AI and industrial IoT, edge AI, llm integration, mcp server, rag, agent tooling, react developer, vue developer, nodejs developer, typescript developer, embedded developer, MQTT, remote developer EU'
    const ogImage = opts.ogImage || 'https://avatars.githubusercontent.com/u/45471030?v=4'
    const ogType = opts.ogType || 'website'
    const canonical = opts.canonical || `https://jorgemopanc.com${typeof window !== 'undefined' ? window.location.pathname : ''}`
    const structuredData = opts.structuredData || null
    const author = opts.author || 'Jorge Morais'
    const twitterCard = opts.twitterCard || 'summary_large_image'
    const twitterCreator = opts.twitterCreator || '@JorgeMo56542670'

    return { title, description, keywords, ogImage, ogType, canonical, structuredData, author, twitterCard, twitterCreator }
  })

  useHead(computed(() => {
    const { title, description, keywords, ogImage, ogType, canonical, structuredData, author, twitterCard, twitterCreator } = resolved.value

    const config = {
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'author', content: author },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:type', content: ogType },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: ogImage },
        { property: 'og:url', content: canonical },
        { property: 'og:site_name', content: 'Jorge Morais — Senior Full-Stack Developer' },
        { property: 'og:locale', content: 'en_GB' },
        { name: 'twitter:card', content: twitterCard },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:creator', content: twitterCreator },
        { name: 'twitter:site', content: twitterCreator },
      ],
      link: [
        { rel: 'canonical', href: canonical }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }

    if (structuredData) {
      config.script = [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData)
        }
      ]
    }

    return config
  }))

  return {
    title: computed(() => resolved.value.title),
    description: computed(() => resolved.value.description),
    canonical: computed(() => resolved.value.canonical)
  }
}

// Predefined SEO configurations for common pages
export const seoConfigs = {
  home: {
    title: 'Jorge Morais · Senior Full-Stack Developer · AI + IoT',
    description: 'Senior Full-Stack Developer at the intersection of AI and Industrial IoT. React/Vue/Node + C firmware + LLMs (RAG, MCP, agents). Remote, EU.',
    keywords: 'senior full stack developer, AI and industrial IoT, edge AI developer, llm integration, mcp server, rag, agent tooling, react developer, vue developer, nodejs developer, typescript developer, embedded developer, MQTT, CCTalk, remote developer EU, benelux developer, nordic developer, portugal developer',
    canonical: 'https://jorgemopanc.com/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jorge Morais',
      jobTitle: 'Senior Full-Stack Developer',
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
        'Full-Stack Development',
        'AI for Industrial Systems', 'Edge AI', 'IoT Platforms with AI',
        'React.js', 'Vue.js', 'Node.js', 'TypeScript',
        'Large Language Models', 'LLM Integration', 'Retrieval-Augmented Generation',
        'Model Context Protocol', 'MCP Servers', 'AI Agents', 'Prompt Engineering',
        'C Programming', 'Embedded Systems', 'Industrial IoT', 'MQTT', 'CCTalk Protocol',
        'Raspberry Pi', 'IMX8', 'Industrial Telemetry', 'Hardware-to-Cloud Integration'
      ]
    }
  },

  projects: {
    title: 'Case Studies & Projects | Jorge Morais — Senior Full-Stack Developer',
    description: 'Production case studies at the intersection of AI and Industrial IoT: distributed IoT monitoring, federated POS sync, document automation platform, depguard MCP security server, quantum-inspired AI trading. React, Vue, Node.js, TypeScript, C, Python.',
    keywords: 'case studies, portfolio, senior full stack developer, AI industrial IoT case studies, llm tooling, mcp server, react projects, vue projects, nodejs projects, embedded systems, IoT platform, MQTT, CCTalk',
    canonical: 'https://jorgemopanc.com/projects'
  },

  about: {
    title: 'About Jorge Morais — Senior Full-Stack Developer · AI + Industrial IoT',
    description: 'Senior Full-Stack Developer based in Braga, Portugal, working at the intersection of AI and Industrial IoT. Five-plus years shipping React/Vue/Node.js platforms, embedded C, MCP servers and RAG over device telemetry. Previously remote at Frontkom (Norway).',
    keywords: 'about, jorge morais bio, senior full stack developer biography, AI industrial IoT developer, llm engineer, embedded developer, career',
    canonical: 'https://jorgemopanc.com/about'
  },

  contact: {
    title: 'Contact Jorge Morais — Senior Full-Stack Developer (Remote, EU)',
    description: 'Get in touch to discuss a senior or lead role at the intersection of AI and Industrial IoT, an LLM integration engagement, or a hardware-to-cloud platform challenge. Remote-first, EU citizen.',
    keywords: 'contact, hire senior full stack developer, AI industrial IoT, hire llm developer, hire mcp developer, remote developer EU, benelux nordic remote',
    canonical: 'https://jorgemopanc.com/contact'
  },

  hire: {
    title: 'Hire Jorge Morais — Senior Full-Stack Developer · AI + Industrial IoT (Remote, EU)',
    description: 'Open to senior or lead full-stack roles in product teams at the intersection of AI and Industrial IoT — smart manufacturing, edge AI, IoT platforms with LLM features, agents that act on real hardware. Remote-first, EU citizen, available for relocation to Benelux or Nordic countries.',
    keywords: 'hire senior full stack developer, AI industrial IoT, edge AI developer, hire llm developer, hire mcp developer, remote senior developer EU, benelux nordic remote senior',
    canonical: 'https://jorgemopanc.com/hire',
    ogType: 'profile'
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
    title: 'Blog & TIL | Jorge Morais — Senior Full-Stack Developer · AI + Industrial IoT',
    description: 'Technical writing at the intersection of full-stack engineering, AI integration (RAG, MCP, agents), and the embedded / industrial IoT side of real systems — Node.js performance, embedded C, MQTT pipelines, and the productivity shift AI is creating in software teams.',
    keywords: 'blog, articles, AI industrial IoT writing, llm integration, mcp server, rag, agent tooling, nodejs performance, vuejs, react, embedded systems, senior developer blog',
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
