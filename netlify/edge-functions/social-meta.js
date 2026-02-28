// social-meta.js — Netlify Edge Function (Deno runtime)
// Intercepts requests from social media crawlers on /blog/:slug
// and returns a static HTML page with correct OG/Twitter meta tags
// fetched from Firestore REST API (no SDK needed).
// Normal visitors are unaffected — the function returns undefined
// which tells Netlify to serve the normal SPA response.

const FIRESTORE_PROJECT = 'portfolio-db-2f39b'
const SITE_URL = 'https://jorgemopanc.com'
const DEFAULT_IMAGE = `${SITE_URL}/avatar.jpg`

const SOCIAL_BOTS = /LinkedInBot|facebookexternalhit|Twitterbot|Slackbot|TelegramBot|WhatsApp|Discordbot|Googlebot|bingbot/i

const esc = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export default async (request) => {
  const ua = request.headers.get('user-agent') || ''
  if (!SOCIAL_BOTS.test(ua)) return // let the SPA handle normal visitors

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
    const title       = f.title?.stringValue || f.titlePt?.stringValue || 'Jorge Morais Blog'
    const description = f.excerpt?.stringValue || f.excerptPt?.stringValue || ''
    const heroImage   = f.heroImage?.stringValue || DEFAULT_IMAGE
    const articleUrl  = `${SITE_URL}/blog/${slug}`

    const html = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} | Jorge Morais</title>
  <meta name="description" content="${esc(description)}">
  <meta name="author" content="Jorge Morais">

  <!-- Open Graph (LinkedIn, Facebook, Slack, Discord) -->
  <meta property="og:type"        content="article">
  <meta property="og:title"       content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url"         content="${esc(articleUrl)}">
  <meta property="og:site_name"   content="Jorge Morais | Blog">
  <meta property="og:image"       content="${esc(heroImage)}">
  <meta property="og:image:width"  content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale"      content="pt_PT">

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image">
  <meta name="twitter:title"       content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image"       content="${esc(heroImage)}">
  <meta name="twitter:creator"     content="@JorgeMo56542670">

  <!-- Canonical + redirect for any bot that follows it -->
  <link rel="canonical" href="${esc(articleUrl)}">
  <meta http-equiv="refresh" content="0;url=${esc(articleUrl)}">
</head>
<body>
  <p>A redirecionar para <a href="${esc(articleUrl)}">${esc(title)}</a>…</p>
</body>
</html>`

    return new Response(html, {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=300, s-maxage=300' // 5 min cache for bots
      }
    })
  } catch (_) {
    return // on any error, fall through to SPA
  }
}

export const config = { path: '/blog/*' }
