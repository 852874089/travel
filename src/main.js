// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick解决手机端点击延迟300毫秒的问题
import fastClick from 'fastclick'
// 引入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 重置基本样式
import 'styles/reset.css'
// 解决边框在不同分辨屏的不同像素大小
import 'styles/border.css'

import 'styles/iconfont.css'

// 轮播图样式
import 'swiper/dist/css/swiper.css'

// 公共样式
import 'styles/site.css'

Vue.config.productionTip = false

// 把fastclick绑定到代码body里面
fastClick.attach(document.body)

// 使用vue-awesome-swiper
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
