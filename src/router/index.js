import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [{
      // meta: {
      //   requiresAuth: true //是否需要权限
      // },
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
