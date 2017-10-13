<template>
  <div class="topBar">
    <h1 class="title">{{topInfo.title}}
    </h1>
    <div class="weather">
      <iframe scrolling="no" src="http://tianqiapi.com/api.php?style=tt&skin=pitaya" frameborder="0" width="590" height="98" allowtransparency="true"></iframe>
    </div>
  </div>
</template>
<script>
  export default {
    name: "topBar",
    directives: {},
    components: {},
    data() {
      return {
      }
    },
    props: {},
    computed: {
      topInfo() {
        return this.$store.state.systemParam.topInfo
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
  .topBar {
    position: relative;
    height: 100px;
    background-color: rgba(49, 63, 86, 0.8);
  }

  .topBar .title {
    text-align: center;
    font-size: 3em;
    font-weight: 600;
    line-height: 50px;
    padding: 20px 0;
    color: #fff;
    margin: 0;
  }

  .topBar .weather {
    position: absolute;
    top: 0px;
    right: 0px;
  }

</style>
