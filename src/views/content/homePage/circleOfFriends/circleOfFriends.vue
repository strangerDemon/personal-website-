<template>
  <div class="circle">
    <circle-of-friends-avatar :userInfo="userInfo"></circle-of-friends-avatar>
    <circle-of-friends-content :content="content"></circle-of-friends-content>
    <circle-of-friends-star></circle-of-friends-star>
    <circle-of-friends-comment></circle-of-friends-comment>
  </div>
</template>
<script>
  import circleOfFriendsAvatar from './circleOfFriendsAvatar'
  import circleOfFriendsContent from './circleOfFriendsContent'
  import circleOfFriendsStar from './circleOfFriendsStar.vue'
  import circleOfFriendsComment from './circleOfFriendsComment.vue'
  export default {
    name: "circle",
    directives: {},
    components: {
      circleOfFriendsAvatar,
      circleOfFriendsContent,
      circleOfFriendsStar,
      circleOfFriendsComment
    },
    data() {
      return {
        userInfo: null,
        content: null,
      }
    },
    props: {
      circleOfFriends: Object,
    },
    computed: {},
    watch: {},
    methods: {},
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
      this.content = this.circleOfFriends.content
      delete this.circleOfFriends.content
      this.userInfo = this.circleOfFriends
    }
  }

</script>
<style lang="css" scoped>
  .circle {
    position: relative;
    min-height: 100px;
    padding: 10px;
    background-color: rgba(211,220,230,0.8);/*211,220,230 239,242,247*/
    margin: 10px;
  }

</style>
