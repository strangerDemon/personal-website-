<template>
  <div class="workDemos">
    <el-scrollbar tag="ul" wrap-class="el-autocomplete-suggestion__wrap" view-class="el-autocomplete-suggestion__list">
      <div class="demosDiv" v-for="(demos,listIndex) in dmeoList" :key="listIndex">
        <div class="subtitle">{{demos.name}}: </div>
        <span class="el-icon-arrow-left position left" v-if="demos.list.length>4" @click="updateShowIndex(listIndex,-1)"></span>
        <div class="lineDiv">
          <div class="demoDiv" v-for="(demo,index) in demos.list" v-show="showIndex[listIndex]<=index&&index<showIndex[listIndex]+4" :key="index">
            <img class="frame" :src="demo.image==''?url+~~(Math.random()*7+1)+'.jpg':url+demo.image" />
            <el-button type="info" class="routerButton" @click="router(demo.name)">{{demo.name}}</el-button>
          </div>
        </div>
        <span class="el-icon-arrow-right position right" v-if="demos.list.length>4" @click="updateShowIndex(listIndex,1)"></span>
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
      showIndex: new Array(3).fill(0)
    };
  },
  props: {},
  computed: {
    dmeoList() {
      return this.$store.state.workDemos.dmeoList;
    }
  },
  watch: {},
  methods: {
    router(path) {
      this.$router.push(path);
    },
    updateShowIndex(index, number) {
      let vm=this
      vm.showIndex[index] += number;
      if (vm.showIndex[index] < 0) {
        vm.showIndex[index] = 0;
         vm.$message(vm.dmeoList[index].name+' 已经到最左边了');
      }
      if (vm.showIndex[index] >= vm.dmeoList[index].list.length - 3) {
        vm.showIndex[index] = vm.dmeoList[index].list.length - 4;
         vm.$message(vm.dmeoList[index].name+' 已经到最右边了');
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
  height: 100%;
  max-height: 100% !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
}
</style>

<style lang="css" scoped>
.routerButton {
  position: relative;
  left: 38%;
}

.workDemos {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.5);
}
.demosDiv {
  display: block;
  width: 100%;
  height: 330px;
  margin: 0px 25px;
}
.lineDiv{
  left: 70px;
  position: relative
}
.demoDiv {
  position: relative;
  float: left;
  width: 22.5%;
  height: 25%;
  min-height: 300px;
  min-width: 300px;
}

.frame {
  margin: 10px 25px;
  border: 2px solid black;
  width: 90%;
  position: relative;
  height: 230px;
}
.subtitle {
  display: block;
  font-size: 18px;
  margin-left: 25px;
  font-weight: 700;
}
.position {
  position: fixed;
  font-size: 50px;
  padding-top: 100px;
  z-index: 9999;
  float: left;
}
.left {
  padding-right: 15px;
}
.right {
  padding-left: 85px;
}
</style>
