<template>
  <div class="content">
    <photo-wall v-if="menuAction=='3'" ></photo-wall>
    <home-page v-if="menuAction=='1'" ></home-page>
  </div>
</template>
<script>
  import photoWall from '../../components/photoWall/photoWall'
  import HomePage from './homePage/HomePage.vue'
  export default {
    name: "content",
    directives: {},
    components: {
      photoWall,
      HomePage
    },
    data() {
      return {}
    },
    props: {},
    computed: {
      menuAction(){
        return this.$store.state.systemActionParam.menu.key;
      }
    },
    watch: {},
    methods: {},
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
    height:calc(100vh - 140px)
  }
</style>
