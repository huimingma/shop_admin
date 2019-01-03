// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'

// 必须要安装插件
Vue.use(VueRouter)

// 创建路由并导出
const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  const token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})
