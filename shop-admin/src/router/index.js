import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 安装插件
Vue.use(Router)
// 创建路由实例，并导出
export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    }
  ]
})
