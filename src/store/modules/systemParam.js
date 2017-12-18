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
 
};

/**
 * Getters
 * @type {Object}
 */
const getters = {
  
};

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  //初始化获取所有参数
  getAllParam(state, info) {
    // asmx.post("getAllParam").then(function(resp) {
    //   console.log("getAllParam",resp);
    //state.circleOfFriendsList=resp.circleOfFriendsList
    //   state.friendList = resp.friendList //只获取少量
    //   state.strangerList=resp.strangerList
    //state.bottomInfo=resp.bottomInfo
    //state.topInfo = resp.topInfo;
    // });
  },
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
