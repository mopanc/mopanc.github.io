const { defineConfig } = require('@vue/cli-service')
const PrerenderPlugin = require('@prerenderer/webpack-plugin')
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PrerenderPlugin({
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

            // Renderer configuration
            renderer: new PuppeteerRenderer({
              // Wait for render event
              renderAfterDocumentEvent: 'render-event',

              // Additional wait time
              renderAfterTime: 5000,

              // Puppeteer options
              headless: true,

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
