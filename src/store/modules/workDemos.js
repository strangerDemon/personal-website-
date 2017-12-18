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
  canvasList: [
    {
      name: "eatBeans",
      url: "eatBeans",
      image: "",
      type: ""
    },
    {
      name: "timeBeans",
      url: "timeBeans",
      image: "",
      type: ""
    }
  ],
  animationList: [
    {
      name: "particles",
      url: "particles",
      image: "",
      type: ""
    },
    {
      name: "balloon",
      url: "balloon",
      image: "",
      type: ""
    },
    {
      name: "firefly",
      url: "firefly",
      image: "",
      type: ""
    },
    {
      name: "heartLoading",
      url: "heartLoading",
      image: "",
      type: ""
    }
  ],
  threeJsList: []
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
  setMenuAction(state, info) {
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
