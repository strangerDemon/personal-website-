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
      image: "eatBeans.gif",
      date: ""
    },
    {
      name: "timeBeans",
      url: "timeBeans",
      image: "timeBeans.gif",
      date: ""
    }
  ],
  animationList: [
    {
      name: "particles",
      url: "particles",
      image: "",
      date: ""
    },
    {
      name: "balloon",
      url: "balloon",
      image: "",
      date: ""
    },
    {
      name: "firefly",
      url: "firefly",
      image: "firefly.gif",
      date: ""
    },
    {
      name: "heartLoading",
      url: "heartLoading",
      image: "",
      date: ""
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
