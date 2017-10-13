<template>
  <!-- 朋友圈 用户头像及相关信息展示 -->
  <div class="circleOfFriendsAvatar">
    <div class="user-avatar">
      <a href="http://user.qzone.qq.com/865778002" target="_blank">
        <img src="https://qlogo3.store.qq.com/qzone/865778002/865778002/50?1358996369" class="avatarImage">
      </a>
    </div>
    <div class="user-info">
      <a target="_blank" href="http://user.qzone.qq.com/865778002" class="name">郑清华</a>
      <span>昨天 13:17</span>
    </div>
    <div class="action" @click="showOrHide()"><i :class="open?'el-icon-arrow-down':'el-icon-arrow-up'"></i></div>
  </div>
</template>
<script>
  export default {
    name: "circleOfFriendsAvatar",
    directives: {},
    components: {},
    data() {
      return {
        open:true
      }
    },
    props: {
      userInfo: Object,
    },
    computed: {},
    watch: {
    },
    methods: {
      showOrHide(){
        this.open=!this.open
        this.$emit("showOrHide",this.open)
      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css" scoped>
  .circleOfFriendsAvatar {
    margin: 5px;
  }

  .circleOfFriendsAvatar .user-info,
  .circleOfFriendsAvatar .user-avatar,
  .circleOfFriendsAvatar .action {
    display: inline-block;
  }

  .circleOfFriendsAvatar .user-avatar .avatarImage {
    border-radius: 24px;
    width: 48px;
    height: 48px;
  }

  .circleOfFriendsAvatar .user-info {
    font-size: 16px;
    position: absolute;
    left: 66px;
    top: 40px;
    font-weight: 700;
    width: 90%;
    margin: 0px 10px;
  }

  .circleOfFriendsAvatar .action {
    float: right;
    font-size: x-large;
  }

</style>
