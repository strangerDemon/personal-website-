<template>
  <div class="topBar">
    <h1 class="title">{{topInfo.title}}</h1>
  </div>
</template>
<script>
  export default {
    name: "topBar",
    directives: {},
    components: {},
    data() {
      return {
        topInfo: {
          title: "狮子的尾巴"
        }
      }
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
  .topBar {
    position: relative;
    height: 100px;
    background-color: rgba(49, 63, 86, 0.8);
  }

  .topBar .title {
    text-align: center;
    font-size: 3em;
    font-weight: 600;
    line-height:50px;
    padding: 20px 0;
    color: #fff;
    margin: 0;
  }

</style>
