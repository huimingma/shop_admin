import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login'

// 安装插件
Vue.use(Router)
// 创建路由实例，并导出
export default new Router({
  routes: [
    { path: '/login', component: Login, name: 'login' }
  ]
})
