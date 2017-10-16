<template>
  <div class="content">
    <home-page v-if="menuAction=='1'"></home-page>
    <work-demos v-if="menuAction=='2'"></work-demos>
    <album-page v-if="menuAction=='3'"></album-page>
    <seeting-page v-if="menuAction=='4'"></seeting-page>
  </div>
</template>
<script>
  import HomePage from './homePage/HomePage.vue'
  import WorkDemos from './workDemos/WorkDemos.vue'
  import AlbumPage from './album/AlbumPage.vue'
  import SeetingPage from './setting/SettingPage.vue'
  export default {
    name: "content",
    directives: {},
    components: {
      HomePage,
      WorkDemos,
      AlbumPage,
      SeetingPage
    },
    data() {
      return {}
    },
    props: {},
    computed: {
      menuAction() {
        return this.$store.state.systemActionParam.menu.key;
      },
    },
    watch: {},
    methods: {

    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css" scoped>
  .content {
    position: absolute;
    top: 100px;
    bottom: 40px;
    width: 100%;
    height: calc(100vh - 140px);
  }
</style>
