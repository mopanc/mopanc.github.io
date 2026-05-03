const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')
const PrerenderPlugin = require('@prerenderer/webpack-plugin')
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  configureWebpack: config => {
    // Skip prerendering on Netlify CI (no Chrome available) or when explicitly disabled
    const shouldPrerender = process.env.NODE_ENV === 'production'
      && process.env.PRERENDER !== 'false'
      && process.env.NETLIFY !== 'true'
      && process.env.CI_PLATFORM !== 'netlify'
    // Only enable prerendering in production (allow opt-out for local builds)
    if (shouldPrerender) {
      return {
        plugins: [
          new PrerenderPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist'),

            // Required - Routes to prerender.
            // Keep this list in sync with public/sitemap.xml when publishing
            // a new article. Articles live in Firestore (source of truth);
            // listing the slug here triggers the SPA to render it server-side
            // at build time so crawlers and LLM scrapers see real content.
            // Slugs must match src/data/case-studies.js (project pages)
            // and Firestore article slugs (blog pages).
            routes: [
              '/',
              '/projects',
              '/projects/distributed-iot-monitoring',
              '/projects/federated-pos-synchronization',
              '/projects/dataconvert-template-processing',
              '/projects/depguard-mcp-security-server',
              '/projects/quantum-elliott-wave-trading-ai',
              '/about',
              '/certificates',
              '/contact',
              '/hire',
              '/privacy',
              '/blog',
              '/blog/depguard-ai',
              '/blog/cache-layers-every-developer-should-know',
              '/blog/ai-multiplier-effect-software-teams',
              '/blog/five-async-nodejs-patterns-promises'
            ],

            // Renderer configuration
            renderer: new PuppeteerRenderer({
              // Wait for render event
              renderAfterDocumentEvent: 'render-event',

              // Additional wait time
              renderAfterTime: 5000,

              // Puppeteer options
              headless: true,
              args: ['--no-sandbox', '--disable-setuid-sandbox'],

              // Inject property to detect prerendering
              injectProperty: '__PRERENDER_INJECTED',
              inject: {
                prerendered: true
              }
            }),

            // Post-processing
            postProcess(context) {
              // Add server-rendered attribute
              context.html = context.html.replace(
                'id="app"',
                'id="app" data-server-rendered="true"'
              )
              return context
            }
          })
        ]
      }
    }
  },

  // Optimize production build
  productionSourceMap: false,

  // Performance optimizations
  chainWebpack: config => {
    config.plugin('vue-feature-flags').use(DefinePlugin, [{
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
    }])

    // Only apply optimizations if plugins exist
    if (config.plugins.has('preload')) {
      config.plugin('preload').tap(options => {
        options[0] = {
          rel: 'preload',
          as(entry) {
            if (/\.css$/.test(entry)) return 'style'
            if (/\.woff$/.test(entry)) return 'font'
            if (/\.png$/.test(entry)) return 'image'
            return 'script'
          },
          include: 'initial',
          fileBlacklist: [/\.map$/, /hot-update\.js$/]
        }
        return options
      })
    }

    if (config.plugins.has('prefetch')) {
      config.plugin('prefetch').tap(options => {
        options[0].fileBlacklist = options[0].fileBlacklist || []
        options[0].fileBlacklist.push(/\.map$/, /hot-update\.js$/)
        return options
      })
    }
  }
})
