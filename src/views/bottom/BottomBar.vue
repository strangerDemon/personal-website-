<template>
  <div class="bottomBar">
    <span class="copyright">{{bottomInfo.copyright}}</span>
    <span class="friendLine" @click="open"> <i class="ion-social-github"></i></span>
  </div>
</template>
<script>
  export default {
    name: "bottomBar",
    directives: {},
    components: {},
    data() {
      return {
        bottomInfo: {
          copyright: "Copyright @2017",
          friendLine: "https://www.github.com/strangerdemon"
        }
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      open() {
        window.open(this.bottomInfo.friendLine);
      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css" scoped>
  .bottomBar {
    position: absolute;
    height: 40px;
    bottom: 0px;
    background-color: rgba(49, 63, 86, 0.8);
    width: 100%;
    text-align: center
  }

  .bottomBar span {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
    margin: 25px;
    color: black;
  }

  .bottomBar span:hover {
    color: #fff;
  }

  .bottomBar>.friendLine {
    cursor: pointer;
    font-size: x-large;
  }

</style>
