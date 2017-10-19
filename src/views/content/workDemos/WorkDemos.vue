<template>
  <div class="workDemos">
    <el-scrollbar tag="ul" wrap-class="el-autocomplete-suggestion__wrap" view-class="el-autocomplete-suggestion__list">
      <div class="demoDiv" v-for="(demo,index) in demos" :key="index">
        <iframe class="demoDiv frame" :src="'/#/'+demo.url" frameborder="0"></iframe>
        <el-button type="info" @click="router(demo.name)">{{demo.name}}</el-button>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
  export default {
    name: "workDemos",
    directives: {},
    components: {},
    data() {
      return {
        demos: [{
          name: 'particles',
          url: 'particles'
        }, {
          name: 'balloon',
          url: 'balloon'
        }, {
          name: 'firefly',
          url: 'firefly'
        }, {
          name: 'heartLoading',
          url: 'heartLoading'
        }],
        //加载动画 发牌动画
        col: 5, //列
        row: 3, //行

      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      router(path) {
        window.open(location.origin + "/#/" + path)
      },
      //每次突发到底部row++
      lazyLoad() {

      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
      // window.on
      //监听事件
    }
  }

</script>
<style>
  .el-autocomplete-suggestion__wrap {
    height: 100%;
    max-height: 100%!important;
  }

</style>

<style lang="css" scoped>
  .workDemos {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .demoDiv {
    position: relative;
    float: left;
    width: 24%;
    height: 24%;
    min-height: 200px;
    min-width: 300px;
  }

  .frame {
    margin: 25px;
  }

</style>
