module.exports = {
    apps: [
      {
        name: 'cst-website',
        exec_mode:  'cluster', // 'fork',
        instances: '2', // max Or a number of instances ，仅在cluster模式有效
        script: './node_modules/nuxt/bin/nuxt.js',
        "env": {
          "NODE_ENV": "production",
          "GRAPHQL_URL":"http://127.0.0.1:4002/graphql"
        },
        args: 'start'
      }
    ]
  }