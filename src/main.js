import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// render: h => h(App)
// 不缩写
// render: function (createElement) {
//   return createElement(App);
// }
// render函数是vue通过js渲染dom结构的函数createElement，约定可以简写为h