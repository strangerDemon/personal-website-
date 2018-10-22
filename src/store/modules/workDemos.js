/**
 * Created by Administrator on 2017/7/12.
 */
/**
 * Initial state
 * @type {Object}
 */
const state = {
  demoList: [{
    name: "CANVAS",
    list: [
      {
        name: "regularPolygons",
        url: "regularPolygons",
        image: "regularPolygons.gif",
        date: "2017-12-31"
      }, {
        name: "rectRotate",
        url: "rectRotate",
        image: "rectRotate.gif",
        date: "2017-12-19"
      }, {
        name: "sixStars",
        url: "sixStars",
        image: "sixStars.gif",
        date: "2017-12-22"
      }, {
        name: "kaleidoscope",
        url: "kaleidoscope",
        image: "kaleidoscope.gif",
        date: "2017-12-21"
      },
      {
        name: "snake",
        url: "snake",
        image: "snake.gif",
        date: "2017-12-18"
      },
      {
        name: "timeBeans",
        url: "timeBeans",
        image: "timeBeans.gif",
        date: ""
      },
      {
        name: "eatBeans",
        url: "eatBeans",
        image: "eatBeans.gif",
        date: ""
      },
      {
        name: "leaf",
        url: "leaf",
        image: "",
        date: "2018-10-2"
      }
    ]
  },
  {
    name: "ANIMATION",
    list: [{
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
      },
      {
        name: "moveCard",
        url: "moveCard",
        image: "",
        date: ""
      },
      {
        name: "rainbow",
        url: "rainbow",
        image: "rainbow-loading.gif",
        date: "2018-9-23"
      },
      {
        name: "rainbowRota",
        url: "rainbowRota",
        image: "rainbow-rotating.gif",
        date: "2018-9-23"
      },
      {
        name: "corgis",
        url: "corgis",
        image: "corgis.png",
        date: "2018-9-23"
      },
      {
        name: "christmasTree",
        url: "christmasTree",
        image: "christmasTree.png",
        date: "2018-10-1"
      },
      {
        name: "flag",
        url: "flag",
        image: "",
        date: "2018-10-2"
      }
    ]
  },
  {
    name: "THREE3D",
    list: [{
      name: "threeDemo1",
      url: "threeDemo1",
      image: "",
      date: "2018-2-8"
    } ]
  },
  {
    name: "OTHER",
    list: [{
      name: "spongeBob",
      url: "spongeBob",
      image: "spongeBob.gif",
      date: "2018-10-22"
    }]
  }
]
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
