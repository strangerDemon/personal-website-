/**
 * Created by Administrator on 2017/7/12.
 */
import {
  asmx
} from '@/utils'
import store from '@/store'
/**
 * Initial state
 * @type {Object}
 */
const state = {
  info: {
    mapcenter: "",
    maplevel: "",
    systitle: "",
    mapfullextent: "",
    xm_dataprovider: "",
    xm_datasourse: "",
    xm_regmapcode: "",
    gj_dataprovider: "",
    gj_datasourse: "",
    jsapiProxyUrl: "",
    jsapiTimeout: "",
    sysapiTimeout: "",
    olAnalysisMaxAreaSize: '',
  },
  online: {
    views: "",
    onlines: "",
    totalViews: "",
  },
  noticeInfo: {
    notice: {
      id: 0, //通知公告ID
      title: "" //通知公告标题
    }
  }
}

/**
 * Getters
 * @type {Object}
 */
const getters = {

}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  //标绘
  getInitSysConfig(state, info) {
    asmx.post('getSysConfigPara').then(function (resp) {
      //  console.log("getSysConfigPara",resp);
      state.info = resp
    })
    asmx.post('getOnlines').then(function (resp) {
      // console.log("getOnlines",resp);
      state.online = resp;
    })
    asmx.post('getNoticeInfo',{loginSession:store.state.login.loginSession}).then(function (resp) {
      // console.log("notice",resp);
      state.noticeInfo = resp;
    })
  },
}

/**
 * Actions
 * @type {Object}
 */
const actions = {

}

// Export module
export default {
  state,
  getters,
  mutations,
  actions
}
