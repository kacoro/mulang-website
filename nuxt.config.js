require('dotenv').config()
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Metsen 美晟供应链',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {rel:'stylesheet',href:'https://fonts.font.im/css?family=Montserrat:600|Orbitron:700,900|Open+Sans'}
      ],
    // script:[{src:"//at.alicdn.com/t/c/font_4281030_8zdqjou8itt.js"}]
  },
  server: {
    port: 5002, // default: 3000
    host: '0.0.0.0' // default: localhost 0.0.0.0
  },
  css:[
    '~/assets/metsen/css/main.scss',
  ],
  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: ['@/plugins/element-ui'],

  plugins: ['@/plugins/core','@/plugins/scrollTo',{src:'@/plugins/vue-lazyload',ssr:false},
  
  {src:'@/assets/metsen/fonts/metsent/iconfont',ssr:false} ,
  { src: '@/plugins/element-ui', ssr: false }],

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
      target: 'http://127.0.0.1:4002',
    },
    '/upload':{
      target: 'http://127.0.0.1:4002',
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
    // 按需引入element-ui
    babel: {
      plugins: [
        [ "component", {"libraryName": "element-ui",  "styleLibraryName": "theme-chalk"}] 
      ] 
    },
    vendor: ["~/plugins/element-ui",'~/plugins/vue-lazyload'],
    // analyze: true,
    extractCSS: true,
    optimization: {
      splitChunks: {
      minSize: 10000,
      maxSize: 250000,
      cacheGroups: {
        default: {
          name: 'chunk-commons',
          chunks: 'initial',
          minChunks: 3, // 模块被引用3次以上的才抽离
          priority: -20
        }
      }
      }
    },
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
