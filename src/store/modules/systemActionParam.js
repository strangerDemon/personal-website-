/**
 * Created by Administrator on 2017/7/12.
 */
import { asmx } from "@/utils";
import store from "@/store";
/**
   * Initial state
   * @type {Object}
   */
const state = {
  menu: {
    key: "1",
    class: "ion-ios-home",
    name: "主页面"
  }
};

/**
   * Getters
   * @type {Object}
   */
const getters = {};

/**
   * Mutations
   * @type {Object}
   */
const mutations = {
  //标绘
//   getInitSysConfig(state, info) {
//     asmx.post("getSysConfigPara").then(function(resp) {
//       //  console.log("getSysConfigPara",resp);
//       state.info = resp;
//     });
//   },
  setMenuAction(state, info){
    console.log("setMenuAction",info);
    state.menu = info.menuAction;
  }
};

/**
   * Actions
   * @type {Object}
   */
const actions = {};

// Export module
export default {
  state,
  getters,
  mutations,
  actions
};
