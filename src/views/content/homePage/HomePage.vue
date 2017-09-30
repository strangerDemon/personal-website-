<template>
  <div class="homePage">
    <!-- 朋友圈 -->
    <div class="circleOfFriends">
      <el-scrollbar tag="ul" wrap-class="el-autocomplete-suggestion__wrap" view-class="el-autocomplete-suggestion__list">
        <circle-of-friends v-for="(shareContent,index) in circleOfFriendsList" :key="shareContent" :circleOfFriends="shareContent"></circle-of-friends>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes"
          :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </el-scrollbar>
    </div>
    <div class="userList">
      <div class="friends">
        <div class="listTitle">
          好友列表({{friendList.length}})
          <i :class="friendListShowType==0?'ion-ios-keypad':'ion-navicon-round'" style="float:right;margin-right:15px;font-size:24px;"
            @click="updateShowType('frined')"></i>
        </div>
        <div class="participation-avatars">
          <a v-for="(friend,index) in friendList" :key="friend" v-if="index<10||showMore" class="participant-avatar tooltipped tooltipped-n"
            :aria-label="friend.name" :href="'http://www.github.com/'+friend.name" :style="friendListShowType==0?'':'width:350px'">
            <img v-if="friendListShowType==0" :alt="'@'+friend.name" class="avatar" :src="friend.avatars">
            <span v-else style="width:350px;">
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
  import circleOfFriends from './circleOfFriends/circleOfFriends.vue'
  export default {
    name: "homePage",
    directives: {},
    components: {
      circleOfFriends
    },
    data() {
      return {
        //circleOfFriends
        //try to 分布load，后台加载完相对应的数据不一次性加载完，一次加载*条
        //分页
        currentPage: 2,
        pageSize: 30,
        pageSizes: [30, 50, 100],
        total: 124,
        //userList
        showMore: false,
        friendListShowType: 0,
      }
    },
    props: {},
    computed: {
      circleOfFriendsList() {
        return this.$store.state.systemParam.circleOfFriendsList
      },
      //userList
      friendList() {
        return this.$store.state.systemParam.friendList
      },
      strangerList() {
        return this.$store.state.systemParam.strangerList
      }
    },
    watch: {},
    methods: {
      handleSizeChange() {
        console.log("分页size变化");
      },
      handleCurrentChange() {
        console.log("当前页变化");
      },
      updateShowType(obj) {
        switch (obj) {
          case 'frined':
            this.friendListShowType = 1 - this.friendListShowType
            break;
          case 'stranger':
            this.$store.commit("getStrangerList", {});
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
<style lang="css">
  .homePage {
    position: relative;
    height: 100%;
  }

  .homePage .circleOfFriends {
    position: absolute;
    width: 79%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  .homePage .circleOfFriends .el-scrollbar {
    height: 100%;
  }

  .homePage .circleOfFriends .el-scrollbar .el-autocomplete-suggestion__wrap {
    height: 100%!important;
    min-height: 100%!important;
  }

  .homePage .circleOfFriends .el-scrollbar .el-autocomplete-suggestion__wrap .el-autocomplete-suggestion__list {
    height: 100%!important;
    min-height: 100%!important;
  }

  .homePage .circleOfFriends .el-pagination {
    text-align: center;
    bottom: 0px;
  }

  .homePage .userList {
    position: absolute;
    width: 20%;
    height: 100%;
    top: 0px;
    right: 0px;
    margin: 10px;
  }

  .homePage .userList .friends {
    min-height: 200px;
    max-height: 500px;
  }

  .homePage .userList .listTitle {
    font-weight: 600 !important;
    line-height: 40px;
    font-size: 18px;
  }

  .homePage .userList .participant-avatar {
    float: left;
    margin: 3px 0 0 3px;
  }

  .homePage .userList .participation-more {
    margin: 6px 0 0;
    line-height: 70px;
    cursor: pointer;
  }

  .homePage .userList .participation-more:hover {
    color: red;
  }

  .homePage .userList .avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 3px;
    height: 45px;
    width: 45px;
  }

  .homePage .userList .avatarLine {
    display: block;
    overflow: hidden;
    line-height: 1;
    /* vertical-align: middle; */
    border-radius: 5px;
    height: 60px;
    width: 60px;
  }

</style>
