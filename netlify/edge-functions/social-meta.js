// social-meta.js — Netlify Edge Function (Deno runtime)
//
// Intercepts /blog/:slug requests and returns crawler-friendly HTML.
// Three classes of bots are handled:
//
//   1. SOCIAL_BOTS   (LinkedIn, Facebook, Slack, etc.)
//      → minimal HTML with OG/Twitter meta + <meta refresh> back to the SPA
//
//   2. SEARCH_BOTS   (Googlebot, bingbot)
//      → same as social bots; Google renders JS and follows refresh,
//        OG meta is what they need for rich snippets
//
//   3. LLM_BOTS      (GPTBot, ClaudeBot, PerplexityBot, Applebot, …)
//      → full standalone HTML with the article body rendered from
//        Markdown to HTML, plus a JSON-LD BlogPosting graph. No
//        <meta refresh> — these crawlers usually don't run JS and
//        don't follow refresh, so we feed them the real content.
//
// Normal visitors are untouched — we return undefined so Netlify
// serves the regular SPA response.

import { marked } from 'npm:marked@12'

const FIRESTORE_PROJECT = 'portfolio-db-2f39b'
const SITE_URL = 'https://jorgemopanc.com'
const DEFAULT_IMAGE = `${SITE_URL}/avatar.jpg`
const AUTHOR_NAME = 'Jorge Morais'
const AUTHOR_URL = SITE_URL
const PUBLISHER_NAME = 'Jorge Morais — Senior Full-Stack Developer'

const SOCIAL_BOTS = /LinkedInBot|facebookexternalhit|Twitterbot|Slackbot|TelegramBot|WhatsApp|Discordbot/i
const SEARCH_BOTS = /Googlebot|bingbot|DuckDuckBot/i
const LLM_BOTS = /GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|anthropic-ai|Claude-Web|PerplexityBot|Perplexity-User|Google-Extended|CCBot|Applebot-Extended|Applebot|Meta-ExternalAgent|Meta-ExternalFetcher|FacebookBot|MistralAI-User|Bytespider|Amazonbot|DuckAssistBot|cohere-ai|cohere-training-data-crawler|YouBot|Diffbot|Omgilibot|Omgili|TimpiBot/i

marked.setOptions({ gfm: true, breaks: false })

const esc = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const stripTags = (html = '') =>
  String(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

const wordCount = (text = '') =>
  text ? text.split(/\s+/).filter(Boolean).length : 0

const fsString = (field) => field?.stringValue ?? ''

const fsArray = (field) =>
  (field?.arrayValue?.values || []).map(v => v.stringValue).filter(Boolean)

function renderArticleBody(rawContent) {
  if (!rawContent) return ''
  try {
    return marked.parse(rawContent)
  } catch (_) {
    return `<p>${esc(rawContent)}</p>`
  }
}

function buildJsonLd({ title, description, articleUrl, heroImage, date, tags, plainText }) {
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: title,
    description,
    url: articleUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    image: heroImage ? [heroImage] : undefined,
    datePublished: date || undefined,
    dateModified: date || undefined,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: PUBLISHER_NAME,
      url: AUTHOR_URL,
    },
    keywords: tags.length ? tags.join(', ') : undefined,
    wordCount: plainText ? wordCount(plainText) : undefined,
    articleBody: plainText || undefined,
  }

  for (const k of Object.keys(graph)) {
    if (graph[k] === undefined) delete graph[k]
  }
  return graph
}

function buildLlmHtml({ title, description, heroImage, articleUrl, date, readTime, tags, bodyHtml, plainText }) {
  const jsonLd = buildJsonLd({ title, description, articleUrl, heroImage, date, tags, plainText })
  const tagBadges = tags.map(t => `<span class="tag">${esc(t)}</span>`).join(' ')
  const tagMetas = tags.map(t => `<meta property="article:tag" content="${esc(t)}">`).join('\n  ')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} — ${esc(AUTHOR_NAME)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="author" content="${esc(AUTHOR_NAME)}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
  <link rel="canonical" href="${esc(articleUrl)}">

  <meta property="og:type"        content="article">
  <meta property="og:title"       content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url"         content="${esc(articleUrl)}">
  <meta property="og:site_name"   content="${esc(PUBLISHER_NAME)}">
  <meta property="og:image"       content="${esc(heroImage)}">
  <meta property="og:image:width"  content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale"      content="en_GB">
  <meta property="article:author" content="${esc(AUTHOR_NAME)}">
  ${date ? `<meta property="article:published_time" content="${esc(date)}">` : ''}
  ${tagMetas}

  <meta name="twitter:card"        content="summary_large_image">
  <meta name="twitter:title"       content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image"       content="${esc(heroImage)}">
  <meta name="twitter:creator"     content="@JorgeMo56542670">

  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <main>
    <article>
      <header>
        <h1>${esc(title)}</h1>
        <p>
          By <a href="${SITE_URL}/about" rel="author">${esc(AUTHOR_NAME)}</a>${date ? ` · <time datetime="${esc(date)}">${esc(date)}</time>` : ''}${readTime ? ` · ${esc(readTime)}` : ''}
        </p>
        ${description ? `<p><em>${esc(description)}</em></p>` : ''}
        ${tags.length ? `<p>${tagBadges}</p>` : ''}
        ${heroImage ? `<p><img src="${esc(heroImage)}" alt="${esc(title)}" width="1200" height="630"></p>` : ''}
      </header>
      ${bodyHtml}
      <footer>
        <p>
          Originally published at
          <a href="${esc(articleUrl)}">${esc(articleUrl)}</a>
          by <a href="${SITE_URL}/about">${esc(AUTHOR_NAME)}</a>,
          Senior Full-Stack Developer (Braga, Portugal · Remote, EU).
        </p>
        <p>
          More writing: <a href="${SITE_URL}/blog">${SITE_URL}/blog</a> ·
          Profile: <a href="${SITE_URL}/llms.txt">${SITE_URL}/llms.txt</a>
        </p>
      </footer>
    </article>
  </main>
</body>
</html>`
}

function buildSocialHtml({ title, description, heroImage, articleUrl }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} | ${esc(AUTHOR_NAME)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="author" content="${esc(AUTHOR_NAME)}">

  <meta property="og:type"        content="article">
  <meta property="og:title"       content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url"         content="${esc(articleUrl)}">
  <meta property="og:site_name"   content="${esc(PUBLISHER_NAME)}">
  <meta property="og:image"       content="${esc(heroImage)}">
  <meta property="og:image:width"  content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale"      content="en_GB">

  <meta name="twitter:card"        content="summary_large_image">
  <meta name="twitter:title"       content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image"       content="${esc(heroImage)}">
  <meta name="twitter:creator"     content="@JorgeMo56542670">

  <link rel="canonical" href="${esc(articleUrl)}">
  <meta http-equiv="refresh" content="0;url=${esc(articleUrl)}">
</head>
<body>
  <p>Redirecting to <a href="${esc(articleUrl)}">${esc(title)}</a>…</p>
</body>
</html>`
}

export default async (request) => {
  const ua = request.headers.get('user-agent') || ''
  const isLLM = LLM_BOTS.test(ua)
  const isSocial = SOCIAL_BOTS.test(ua)
  const isSearch = SEARCH_BOTS.test(ua)
  if (!isLLM && !isSocial && !isSearch) return // normal visitor → SPA

  const url = new URL(request.url)
  const parts = url.pathname.replace(/\/$/, '').split('/')
  const slug = parts[parts.length - 1]
  if (!slug || slug === 'blog') return

  try {
    const firestoreUrl =
      `https://firestore.googleapis.com/v1/projects/${FIRESTORE_PROJECT}` +
      `/databases/(default)/documents/articles/${slug}`

    const res = await fetch(firestoreUrl)
    if (!res.ok) return

    const data = await res.json()
    if (!data.fields) return

    const f = data.fields

    // Skip drafts and any non-published doc — never expose them to crawlers.
    const status = fsString(f.status)
    if (status && status !== 'published') return

    const title       = fsString(f.title)     || fsString(f.titlePt)   || 'Jorge Morais Blog'
    const description = fsString(f.excerpt)   || fsString(f.excerptPt) || ''
    const heroImage   = fsString(f.heroImage) || DEFAULT_IMAGE
    const date        = fsString(f.date)
    const readTime    = fsString(f.readTime)
    const rawContent  = fsString(f.content)
    const tags        = fsArray(f.tags)
    const articleUrl  = `${SITE_URL}/blog/${slug}`

    if (isLLM) {
      const bodyHtml = renderArticleBody(rawContent)
      const plainText = stripTags(bodyHtml)
      const html = buildLlmHtml({
        title, description, heroImage, articleUrl,
        date, readTime, tags, bodyHtml, plainText,
      })
      return new Response(html, {
        status: 200,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=3600, s-maxage=86400', // 1h client / 24h CDN
          'x-rendered-for': 'llm-crawler',
        },
      })
    }

    // Social + search bots: keep the lightweight meta + refresh response
    const html = buildSocialHtml({ title, description, heroImage, articleUrl })
    return new Response(html, {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=300, s-maxage=300',
        'x-rendered-for': isSearch ? 'search-bot' : 'social-bot',
      },
    })
  } catch (_) {
    return // on any error, fall through to SPA
  }
}

export const config = { path: '/blog/*' }
