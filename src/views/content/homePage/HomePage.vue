<template>
  <div class="homePage">
    <div class="home"></div>
    <div class="other">
      <div class="friends">
        <div class="listTitle">
          好友列表({{friendList.length}})
          <i :class="friendListShowType==0?'ion-ios-keypad':'ion-navicon-round'" style="float:right;margin-right:15px;font-size:24px;"
            @click="updateShowType('frined')"></i>
        </div>
        <div class="participation-avatars">
          <a v-for="(friend,index) in friendList" :key="friend" v-if="index<10||showMore" class="participant-avatar tooltipped tooltipped-n"
            :aria-label="friend.name" :href="'http://www.github.com/'+friend.name">
            <img v-if="friendListShowType==0" :alt="'@'+friend.name" class="avatar" :src="friend.avatars">
            <span v-else>
              <img :alt="'@'+friend.name" class="avatarLine" :src="friend.avatars">
              {{friend.name+" "+friend.deescription}}
            </span>
         </a>
          <a href="javascript:void(0)" class="participation-more" @click="showMore=!showMore">
              {{!showMore?'更多...':'缩略...'}}</a>
        </div>
      </div>
      <div class="strangers">
        <div class="listTitle">
          你可能感兴趣
          <i class="ion-android-sync" style="float:right;margin-right:15px;font-size:24px;" @click="updateShowType('stranger')"></i>
        </div>
        <div class="participation-avatars">
          <a v-for="(stranger,index) in strangerList" :key="stranger" class="participant-avatar tooltipped tooltipped-n" :aria-label="stranger.name"
            :href="'http://www.github.com/'+stranger.name">
            <img :alt="'@'+stranger.name" class="avatar" :src="stranger.avatars">
         </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "homePage",
    directives: {},
    components: {},
    data() {
      return {
        showMore: false,
        friendListShowType: 0,
        friendList: [{
          avatars: "https://avatars0.githubusercontent.com/u/10095631?v=4&amp;s=52",
          userId: "",
          name: "Leopoldthecoder",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars1.githubusercontent.com/u/3213618?v=4&amp;s=52",
          userId: "",
          name: "shangxinbo",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/31433951?v=4&amp;s=52",
          userId: "",
          name: "Nick-Tsao",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/11530201?v=4&amp;s=52",
          userId: "",
          name: "892390760",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/16240795?v=4&amp;s=52",
          userId: "",
          name: "lojzes",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/9293336?v=4&amp;s=52",
          userId: "",
          name: "cliveli",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/23392064?v=4&amp;s=52",
          userId: "",
          name: "shirenjiuhao",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/18713980?v=4&amp;s=52",
          userId: "",
          name: "littleLane",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/23070813?v=4&amp;s=52",
          userId: "",
          name: "leimingzhang",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/1799421?v=4&amp;s=52",
          userId: "",
          name: "michaelzx",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/19197922?v=4&amp;s=52",
          userId: "",
          name: "mdaima",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/4647608?v=4&amp;s=52",
          userId: "",
          name: "cajan",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/18297094?v=4&amp;s=52",
          userId: "",
          name: "Ppsj",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/16729778?v=4&amp;s=52",
          userId: "",
          name: "JohnnyLuv",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/9073321?v=4&amp;s=52",
          userId: "",
          name: "bobiscool",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/13572030?v=4&amp;s=52",
          userId: "",
          name: "chikara-chan",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/18576791?v=4&amp;s=52",
          userId: "",
          name: "FightingDao",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/18576791?v=4&amp;s=52",
          userId: "",
          name: "rhinonan",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/9367487?v=4&amp;s=52",
          userId: "",
          name: "MissCuriosity",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }, {
          avatars: "https://avatars0.githubusercontent.com/u/12730051?v=4&amp;s=52",
          userId: "",
          name: "PanJiaChen",
          sex: "",
          age: "",
          phone: "",
          deescription: ""
        }],
        strangerList: [],
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      updateShowType(obj) {
        switch (obj) {
          case 'frined':
            this.friendListShowType = 1 - this.friendListShowType
            break;
          case 'stranger':
            this.strangerList = [];
            //to do refresh strangerList
            for (let i = 0; i < 10;) {
              let obj = this.friendList[~~(Math.random() * 20)]
              console.log(obj,this.strangerList.indexOf(obj));
              if (this.strangerList.indexOf(obj)<0) {
                this.strangerList.push(obj)
                i++
              }
            }
            break;
          default:
            break;
        }
      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
        this.updateShowType('stranger');
    }
  }

</script>
<style lang="css" scoped>
  .homePage {
    position: relative;
    height: 100%;
  }

  .homePage .home {
    position: absolute;
    width: 80%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  .homePage .other {
    position: absolute;
    width: 20%;
    height: 100%;
    top: 0px;
    right: 0px;
    margin: 10px;
  }

  .homePage .other .friends {
    min-height: 200px;
    max-height: 500px;
  }

  .homePage .other .listTitle {
    font-weight: 600 !important;
    line-height: 40px;
    font-size: 18px;
  }

  .homePage .other .participant-avatar {
    float: left;
    margin: 3px 0 0 3px;
  }

  .homePage .other .participation-more {
    margin: 6px 0 0;
    line-height: 70px;
    cursor: pointer;
  }

  .homePage .other .participation-more:hover {
    color: red;
  }

  .homePage .other .avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 3px;
    height: 44px;
    width:44px;
  }

  .homePage .other .avatarLine {
    display: block;
    overflow: hidden;
    line-height: 1;
    /* vertical-align: middle; */
    border-radius: 5px;
    height: 60px;
    width:60px;
  }
</style>
