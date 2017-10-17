<template>
  <div class="workDemos">
    <el-scrollbar tag="ul" wrap-class="el-autocomplete-suggestion__wrap" view-class="el-autocomplete-suggestion__list">
      <iframe class="frame" v-for="(demo,index) in demos" :key="index" :src="'/#/'+demo.url" frameborder="0"></iframe>
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
        col:5,//列
        row:3,//行

      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      router(path) {
        window.open(location.origin + "/#/" + path)
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
  .workDemos .frame frameDemo {
    position: absolute;
    width: 100%;
    height: 100%;
  }

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

  .frame {
    position: relative;
    float: left;
    width: 24%;
    height: 24%;
    margin: 25px;
    min-height: 200px;
    min-width: 300px;
  }

</style>
