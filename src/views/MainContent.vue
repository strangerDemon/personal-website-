<template>
  <div class="main">
    <!-- <code-sketch></code-sketch> -->
    <top-bar></top-bar>
    <center-content></center-content>
    <bottom-bar></bottom-bar>
  </div>
</template>
<script>
  import codeSketch from "../components/code-sketch/codeSketch"
  import TopBar from './top/TopBar'
  import CenterContent from './content/CenterContent'
  import BottomBar from './bottom/BottomBar'
  export default {
    name: "main",
    directives: {},
    components: {
      codeSketch,
      TopBar,
      CenterContent,
      BottomBar
    },
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css" scoped>
  .main {
    background-color: rgba(255, 255, 255, 0.8);
    width: 90%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 5%;
    z-index: 241;
    min-width: 1320px;
  }

</style>
