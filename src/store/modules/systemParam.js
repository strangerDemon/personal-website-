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
  //朋友圈
  circleOfFriendsList:[ {
      avatars: "https://avatars0.githubusercontent.com/u/10095631?v=4&amp;s=52",
      userId: "",
      name: "Leopoldthecoder",
      sex: "",
      age: "",
      phone: "",
      deescription: "",
      type:1,//图文
      content:{
        text:"hello world!",
        time:"2017-9-29",
        images:[{
          imageUrl:"",
        },{
          imageUrl:"",
        }] 
      },
    },{
      avatars: "https://avatars1.githubusercontent.com/u/3213618?v=4&amp;s=52",
      userId: "",
      name: "shangxinbo",
      sex: "",
      age: "",
      phone: "",
      deescription: "",
      type:2,//相册
      content:{
        text:"hello world!",//title
        time:"2017-9-29",
        images:[{
          imageUrl:"",
        },{
          imageUrl:"",
        }]
      },
    },
  ],
  //用户列表
  friendList: [
    {
      avatars: "https://avatars0.githubusercontent.com/u/10095631?v=4&amp;s=52",
      userId: "",
      name: "Leopoldthecoder",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars1.githubusercontent.com/u/3213618?v=4&amp;s=52",
      userId: "",
      name: "shangxinbo",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/31433951?v=4&amp;s=52",
      userId: "",
      name: "Nick-Tsao",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/11530201?v=4&amp;s=52",
      userId: "",
      name: "892390760",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/16240795?v=4&amp;s=52",
      userId: "",
      name: "lojzes",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/9293336?v=4&amp;s=52",
      userId: "",
      name: "cliveli",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/23392064?v=4&amp;s=52",
      userId: "",
      name: "shirenjiuhao",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/18713980?v=4&amp;s=52",
      userId: "",
      name: "littleLane",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/23070813?v=4&amp;s=52",
      userId: "",
      name: "leimingzhang",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/1799421?v=4&amp;s=52",
      userId: "",
      name: "michaelzx",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/19197922?v=4&amp;s=52",
      userId: "",
      name: "mdaima",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/4647608?v=4&amp;s=52",
      userId: "",
      name: "cajan",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/18297094?v=4&amp;s=52",
      userId: "",
      name: "Ppsj",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/16729778?v=4&amp;s=52",
      userId: "",
      name: "JohnnyLuv",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/9073321?v=4&amp;s=52",
      userId: "",
      name: "bobiscool",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/13572030?v=4&amp;s=52",
      userId: "",
      name: "chikara-chan",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/18576791?v=4&amp;s=52",
      userId: "",
      name: "FightingDao",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/18576791?v=4&amp;s=52",
      userId: "",
      name: "rhinonan",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/9367487?v=4&amp;s=52",
      userId: "",
      name: "MissCuriosity",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    },
    {
      avatars: "https://avatars0.githubusercontent.com/u/12730051?v=4&amp;s=52",
      userId: "",
      name: "PanJiaChen",
      sex: "",
      age: "",
      phone: "",
      deescription: ""
    }
  ],
  strangerList: [],
  //bottom bar
  bottomInfo: {
    copyright: "Copyright @2017",
    friendLine: "https://www.github.com/strangerdemon"
  },
  //top bar
  topInfo: {
    title: "" //狮子的尾巴
  }
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
  getCircleOfFriendsList(state, info){
     // asmx.post("getCircleOfFriendsList",{page:info.page,pageSize:info.pageSize}).then(function(resp) {
    //   console.log("getCircleOfFriendsList",resp);
    //   state.circleOfFriendsList= resp.circleOfFriendsList
    // });
  },
  getFriendList(state, info) {
    // asmx.post("getFriendList").then(function(resp) {
    //   console.log("getFriendList",resp);
    //   state.friendList = resp.friendList
    // });
  },
  getStrangerList(state, info) {
    // asmx.post("getStrangerList").then(function(resp) {
    //   console.log("strangerList",resp);
    //   state.strangerList = resp.strangerList
    // });
    state.strangerList = [];
    for (let i = 0; i < 10; ) {
      let obj = state.friendList[~~(Math.random() * 20)];
      if (state.strangerList.indexOf(obj) < 0) {
        state.strangerList.push(obj);
        i++;
      }
    }
  },
  getBottomInfo(state, info) {
    // asmx.post("getBottomInfo").then(function(resp) {
    //   console.log("getBottomInfo",resp);
    //   state.bottomInfo = resp.bottomInfo
    // });
  },
  getTopInfo(state, info) {
    // asmx.post("getTopInfo").then(function(resp) {
    //   console.log("getTopInfo",resp);
    //   state.topInfo = resp.topInfo
    // });
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
