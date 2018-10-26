<template>
  <div class="workDemos">
    <el-scrollbar tag="ul" wrap-class="el-autocomplete-suggestion__wrap" view-class="el-autocomplete-suggestion__list">
      <div class="demosDiv" v-for="(demos,listIndex) in demoList" :key="listIndex" :style="{height:demos.list.length>3?'700px':'350px'}">
        <div class="subtitle">{{demos.name}}: </div>
        <span class="el-icon-arrow-left ears left" v-if="demos.list.length>6" @click="updateShowIndex(listIndex,-1)"></span>
        <span class="space" v-else></span>
        <div class="lineDiv">
          <div class="demoDiv" v-for="(demo,index) in demos.list" v-show="showIndex[listIndex]<=index&&index<showIndex[listIndex]+6" :key="index">
            <img class="frame" :src="demo.image==''?url+~~(Math.random()*7+1)+'.jpg':url+demo.image" />
            <el-button type="info" class="routerButton" @click="router(demo.name)">{{demo.name}}</el-button>
          </div>
        </div>
        <span class="el-icon-arrow-right ears right" v-if="demos.list.length>6" @click="updateShowIndex(listIndex,1)"></span>
        <span class="space" v-else></span>
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
      url: "/static/images/demosCover/",
      demos: [],
      //加载动画 发牌动画
      showIndex: new Array(4).fill(0)
    };
  },
  props: {},
  computed: {
    demoList() {
      return this.$store.state.workDemos.demoList;
    }
  },
  watch: {},
  methods: {
    router(path) {
      this.$router.push(path);
    },
    updateShowIndex(index, number) {
      let vm = this;
      vm.showIndex[index] += number;
      if (vm.showIndex[index] < 0) {
        vm.showIndex[index] = 0;
        vm.$message(vm.demoList[index].name + " 已经到最左边了");
      }
      if (vm.showIndex[index] >= vm.demoList[index].list.length - 5) {
        vm.showIndex[index] = vm.demoList[index].list.length - 6;
        vm.$message(vm.demoList[index].name + " 已经到最右边了");
      }
      vm.showIndex.splice(index, 1, vm.showIndex[index]);
    }
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {}
};
</script>
<style>
.el-autocomplete-suggestion__wrap {
  height: 100vh;
  max-height: 100% !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
}
</style>

<style lang="postcss" scoped>
.workDemos {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  .demosDiv {
    display: block;
    width: 100%;
    height: 700px;
    .subtitle {
      display: block;
      font-size: 18px;
      margin-left: 25px;
      font-weight: 700;
    }
    .lineDiv {
      position: relative;
      min-width: 1000px;
      width: calc(100vw - 170px);
      left: 85px;
      display: inline-block;
      .demoDiv {
        position: relative;
        display: inline-block;
        text-align: center;
        margin: 0px auto;
        width: 30%;
        height: 25%;
        min-height: 300px;
        min-width: 300px;
        .frame {
          margin: 10px 25px;
          border: 2px solid black;
          width: 80%;
          position: relative;
          height: 230px;
        }
        .routerButton {
          position: relative;
        }
      }
    }
    .ears {
      position: relative;
      font-size: 50px;
      padding-top: 250px;
      z-index: 9999;
    }
    .left {
      float: left;
      padding-left: 30px;
    }
    .right {
      float: right;
      padding-right: 30px;
    }
    .space {
      position: relative;
      padding: 40px;
    }
  }
}
</style>
