import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
const loadingImg = require("../static/default/images/loading-thumb.gif")
// const loadingImg = require("../static/metsen/images/loading.gif")
Vue.use(VueLazyLoad,{
    preload:1,  //预加载的宽高比
    error:"",
    loading:loadingImg,
    attempt:2,
    throttleWait:200,
    // filter: {
    //     progressive(listener, options) {
    //       // 实现渐近式加载图片（先加载模糊的图）
    //       listener.el.setAttribute('lazy-progressive', 'true')
    //       // 先加载模糊的图（这个地方是替换图片中的宽度与高度大小）
    //       let loadingUrl = listener.src.replace(/w_[0-9]+/g, 'w_6')
    //       loadingUrl = loadingUrl.replace(/h_[0-9]+/g, 'h_4')
    //       listener.loading = loadingUrl
    //     }
    // }
    // filter: {
    //     progressive (listener, options) {
    //         const isCDN = /qiniudn.com/
    //         if (isCDN.test(listener.src)) {
    //             listener.el.setAttribute('lazy-progressive', 'true')
    //             listener.loading = listener.src + '?imageView2/1/w/10/h/10'
    //         }
    //     },
    //     webp (listener, options) {
    //         if (!options.supportWebp) return
    //         const isCDN = /qiniudn.com/
    //         if (isCDN.test(listener.src)) {
    //             listener.src += '?imageView2/2/format/webp'
    //         }
    //     }
    //   },
    //   adapter: {
    //     loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
    //         // do something here
    //         // example for call LoadedHandler
    //         LoadedHandler(el)
    //     },
    //     loading (listender, Init) {
    //         console.log('loading')
    //     },
    //     error (listender, Init) {
    //         console.log('error')
    //     }
    // },

})