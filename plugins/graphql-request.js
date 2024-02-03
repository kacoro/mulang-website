import { GraphQLClient } from 'graphql-request'
const graphQLClient = new GraphQLClient('http://127.0.0.1:4002/graphql', {
    credentials: 'include',
    mode: 'cors',
})


graphQLClient.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.graphQLClient = function () {
      // 逻辑...
    }
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      
    })
  
    // 4. 添加实例方法
    Vue.prototype.$graphQLClient = function (methodOptions) {
      // 逻辑...
      return new GraphQLClient('http://127.0.0.1:4002/graphql', {
        credentials: 'include',
        mode: 'cors',
        })
    }
  }