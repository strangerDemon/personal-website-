<template>
  <div class="workDemos">
    <el-scrollbar tag="ul" wrap-class="el-autocomplete-suggestion__wrap" view-class="el-autocomplete-suggestion__list">
      <div class="demosDiv">
        <div class="subtitle">CANVAS: </div>
        <div class="demoDiv" v-for="(demo,index) in canvasList" :key="index">
          <img class="frame" :src="demo.image"></img>
          <el-button type="info" class="routerButton" @click="router(demo.name)">{{demo.name}}</el-button>
        </div>
      </div>
      <div class="demosDiv">
        <div class="subtitle">ANIMATION:</div>
        <div class="demoDiv" v-for="(demo,index) in animationList" :key="index">
          <img class="frame" :src="demo.image"></img>
          <el-button type="info" class="routerButton" @click="router(demo.name)">{{demo.name}}</el-button>
        </div>
      </div>
      <div class="demosDiv">
        <div class="subtitle">THREE3D:</div>
        <div class="demoDiv" v-for="(demo,index) in threeJsList" :key="index">
          <img class="frame" :src="demo.image"></img>
          <el-button type="info" class="routerButton" @click="router(demo.name)">{{demo.name}}</el-button>
        </div>
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
      href: location.href,
      demos: [],
      //加载动画 发牌动画
      col: 5, //列
      row: 3 //行
    };
  },
  props: {},
  computed: {
    canvasList() {
      return this.$store.state.workDemos.canvasList;
    },
    animationList() {
      return this.$store.state.workDemos.animationList;
    },
    threeJsList() {
      return this.$store.state.workDemos.threeJsList;
    }
  },
  watch: {},
  methods: {
    router(path) {
      this.$router.push(path);
      //window.open(this.href + path)
    },
    //每次突发到底部row++
    lazyLoad() {}
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    // window.on
    //监听事件
  }
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
}
.demoDiv {
  position: relative;
  float: left;
  width: 25%;
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
  margin-left:25px;
  font-weight:700;
}
</style>
