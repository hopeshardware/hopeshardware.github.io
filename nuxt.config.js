import data from './assets/data/data.json'
import products from './assets/data/products.json'

function transformCateName(cateName){
  return cateName.replace(/\s/g,"-").toLowerCase()
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    routes(callback) {
      let routes = []
      data.forEach(cate1=>{
        if(!cate1.hidden){
            // 一级页面
            routes.push('/' + transformCateName(cate1.name))
        }else{
            return
        }
      (cate1.children||[]).forEach(cate2=>{
        // 二级页面
        if(!cate2.hidden){
          routes.push(`/${transformCateName(cate1.name)}/${transformCateName(cate2.name)}/`)
        }else{
            return
        }
        (cate2.children||[]).forEach((ele,index)=>{
          if(ele.class==='third'){
              var cate3=ele
              if(index===0) return
              // 三级页面
              if(!cate3.hidden){
                routes.push(`/${transformCateName(cate1.name)}/${transformCateName(cate2.name)}/${transformCateName(cate3.name||'')}`)
              }else{
                  return
              }
              (cate3.children||[]).forEach(id=>{
                // 产品页
                if(!products[id].hidden){
                  routes.push(`/product/${id}`)
                }
            })
          }else{
              var id=ele
            // 产品页
            if(!products[id].hidden){
            routes.push(`/product/${id}`)
            }
          }
        })
      })
    })
      
      callback(null, routes)
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hopeshardware',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src:'/rem.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/vendor.scss',
    '@/assets/styles/common.css',
    // 'balm-ui/dist/balm-ui.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/balm-ui',
    {src:'@/plugins/common',mode:"client"}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  },
  googleAnalytics: {
    id: 'UA-159827935-1',
    // debug:{
    //   enabled:true,
    //   sendHitTask:true
    // }
  }
}
