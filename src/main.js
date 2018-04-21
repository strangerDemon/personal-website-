// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import plugins from './plugins'
import store from './store'
import particles from '../static/js/particles/particles'
// ## Import styles
// =========================
import 'element-ui/lib/theme-default/index.css'
// import 'normalize.css/normalize.css'

// ## Use plugins
// =========================
Vue.use(ElementUI)
Vue.use(plugins)
Vue.use(particles)
// ## Config
// =========================
Vue.config.debug = true
Vue.config.devtools = true
Vue.config.productionTip = false
window.log = console.log



// ## Initial
// =========================
// ...

// ## Root app
// =========================

/* eslint-disable no-new */
const app = new Vue({
  // el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
app.$mount('#app')

Array.prototype.clear = function () {
  this.splice(0, this.length)
};