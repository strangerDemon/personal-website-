import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import {
  asmx
} from '@/utils'
import axios from 'axios'
import * as modules from './modules'
Vue.use(Vuex)

//获得本地json数据，后期对接接口后可去除
function fetch(url, params) {
  return new Promise((resolve, reject) => {
    Vue.axios.get(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

const state = {
}

const getters = {
  activePageItem: state => state.activePageItem
}

const mutations = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules
})