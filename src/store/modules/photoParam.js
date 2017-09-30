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
  //做前端 优化
  photoLists: [
    {
      albumId: "0", //相册id
      title: "2017-9-29", //相册titile
      description: "", //相册描述
      time: "2017-9-29", //时间
      images: [
        {
          description: "夕阳", //照片描述
          imageUrl: "../../../static/images/01.jpg"
        },
        {
          description: "天空", //相册描述
          imageUrl: "../../../static/images/02.jpg"
        },
        {
          description: "动物城", //相册描述
          imageUrl: "../../../static/images/03.jpg"
        },
        {
          description: "fox & pig", //相册描述
          imageUrl: "../../../static/images/04.jpg"
        },
        {
          description: "tom & terry", //相册描述
          imageUrl: "../../../static/images/05.jpg"
        },
        {
          description: "panda", //相册描述
          imageUrl: "../../../static/images/06.jpg"
        },
        {
          description: "森林", //相册描述
          imageUrl: "../../../static/images/07.jpg"
        },
        {
          description: "柯基", //相册描述
          imageUrl: "../../../static/images/08.jpg"
        },
        {
          description: "动物城", //相册描述
          imageUrl: "../../../static/images/09.jpg"
        },
        {
          description: "lonely", //相册描述
          imageUrl: "../../../static/images/10.jpg"
        },
        {
          description: "fox", //相册描述
          imageUrl: "../../../static/images/11.jpg"
        },
        {
          description: "sky", //相册描述
          imageUrl: "../../../static/images/12.jpg"
        },
        {
          description: "烈日", //相册描述
          imageUrl: "../../../static/images/13.jpg"
        },
        {
          description: "swing", //相册描述
          imageUrl: "../../../static/images/14.jpg"
        }
      ]
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
  //照片
    getPhotoList(state, info) {
      asmx.post("getPhotoList",{albumId:info.albumId}).then(function(resp) {
        //  console.log("getPhotoList",resp);
        if(resp!=null){
            for(let i=0;i<state.getPhotoList.length;i++){
                if(state.getPhotoList[i].albumId==info.albumId){
                    state.getPhotoList.splice(i,1)
                }
            }
            state.getPhotoList.push(resp);
        }
      });
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
