require('dotenv').config()
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '康索特官网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    port: 5000, // default: 3000
    host: '0.0.0.0' // default: localhost 0.0.0.0
  },
  css:[
    '~/assets/css/main.css',
  ],
  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: ['@/plugins/element-ui'],

  plugins: ['@/plugins/core'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/dayjs',
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // '@nuxtjs/apollo',
  ],
  dayjs: {
    locales: ['en', 'zh'],
    defaultLocale: 'en'
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // axios: {},
  // apollo: {
  //   clientConfigs: {
  //     default: {

  //       httpEndpoint: 'http://192.168.179.97:4000/graphql',
  //       httpLinkOptions: {
  //         credentials: 'include'
  //       },
  //     }
  //   }
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  proxy: {
    '/graphql':{
      target: 'http://localhost:4001',
    },
    '/upload':{
      target: 'http://localhost:4001',
    }
    // 'http://192.168.179.97:4000/graphql/': {
    //   target: 'http://192.168.179.97:4000',
    //   pathRewrite: {
    //     '^/graphql': '/graphql',
    //     changeOrigin:true
    //   }
    // }
  },
  build: {
    //  transpile:[/^element-ui/]
    //  transpile:['graphql-request','@nuxtjs/proxy'],
    // babel: {
    //   babelrc:false,
    //   presets({ envName }) {
    //     const envTargets = {
    //       client: { browsers: ["last 2 versions"], ie: 9 },
    //       server: { node: "current" },
    //     }
    //     return [
    //       [
    //         "@babel/preset-env",
    //         {
    //           targets: envTargets[envName]
    //         }
    //       ]
    //     ]
    //   }
    // }
    // terser:
    // {
    //   parallel: true,
    //   cache: false,
    //   sourceMap: false,
    //   extractComments: {
    //     filename: 'LICENSES'
    //   },
    //   terserOptions: {
    //     compress: {
    //       drop_console: true, // 可选：false,生产移除 console.log
    //       pure_funcs: ['console.log']
    //     },
    //     warnings: false,
    //     output: {
    //       comments: /^\**!|@preserve|@license|@cc_on/
    //     }
    //   }
    // },
    extend(config, ctx) {
      console.log(ctx.isDev, ctx.isClient)
    },
  }
}
