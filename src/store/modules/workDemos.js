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
  dmeoList:[{
    name:"CANVAS",
    list:[
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
      },
      {
        name: "snake",
        url: "snake",
        image: "snake.gif",
        date: "2017-12-18"
      },{
        name: "rectRotate",
        url: "rectRotate",
        image: "",
        date: "2017-12-19"
      },{
        name: "kaleidoscope",
        url: "kaleidoscope",
        image: "kaleidoscope.gif",
        date: "2017-12-21"
      },{
        name: "sixStars",
        url: "sixStars",
        image: "",
        date: "2017-12-22"
      }
    ]
  },{
    name:"ANIMATION",
    list: [
      {
        name: "particles",
        url: "particles",
        image: "particles.gif",
        date: ""
      },
      {
        name: "balloon",
        url: "balloon",
        image: "balloon.gif",
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
        image: "heartLoading.gif",
        date: ""
      }
    ]
  },{
    name:"THREE3D",
    list: []
  },]
  
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
