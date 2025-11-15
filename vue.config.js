const { defineConfig } = require('@vue/cli-service')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist'),

            // Required - Routes to prerender.
            routes: [
              '/',
              '/projects',
              '/projects/balanca-marques-iot-system',
              '/projects/pos-sync-fiscal-compliance',
              '/projects/dataconvert-template-processing',
              '/projects/qscope-quantum-elliott-wave-ai',
              '/about',
              '/certificates',
              '/contact',
              '/privacy'
            ],

            renderer: new Renderer({
              // Optional - Wait to render until the specified event is dispatched on the document.
              renderAfterDocumentEvent: 'render-event',

              // Optional - Wait for this amount of time
              renderAfterTime: 5000,

              // Other puppeteer options
              headless: true,

              // Inject custom values into window object for SEO
              injectProperty: '__PRERENDER_INJECTED',
              inject: {
                prerendered: true
              }
            }),

            // Post-processing to inject meta tags correctly
            postProcess (renderedRoute) {
              // Clean up JavaScript-injected CSS
              renderedRoute.html = renderedRoute.html
                .replace(/<script (.*?)>/gi, '<script $1 defer>')
                .replace('id="app"', 'id="app" data-server-rendered="true"')

              return renderedRoute
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
    // Preload optimization
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

    // Prefetch optimization
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/\.map$/, /hot-update\.js$/)
      return options
    })
  }
})
