// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

// 导入element-ui
import ElementUi from 'element-ui'
// 导入element-ui的样式文件
import 'element-ui/lib/theme-chalk/index.css'

// 安装插件
Vue.use(ElementUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
