/**
 * Vue 使用的插件
 */

import axios from './axios'
import element from './element'
// import services from './services'
// import nprogress from './nprogress'
// import authorize from './authorize'

export default {
  install(Vue) {
    axios(Vue)
    element(Vue)
    // services(Vue)
    // nprogress(Vue)
    // authorize(Vue)
  }
}
