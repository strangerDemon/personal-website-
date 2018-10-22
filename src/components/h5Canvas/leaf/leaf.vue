<template>
  <div class='leaf-contain'>
    <canvas id="leaf">your browser is not support canvas</canvas>
  </div>
</template>
<script>
//http://www.jq22.com/code395
export default {
  name: "leaf-contain",
  directives: {},
  components: {},
  props: {},
  data() {
    return {
      canvas: null,
      context: null,
      width: 0,
      height: 0,

      branch: 10,
      level: 5,
      currentLevel: 1
    };
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      vm.canvas = document.getElementById("leaf");
      vm.context = vm.canvas.getContext("2d");
      vm.canvas.width = vm.width = window.innerWidth;
      vm.canvas.height = vm.height = window.innerHeight;
      vm.pointy = vm.height / 2 + vm.radius;
      vm.loop();
    },
    loop() {
      let vm = this;
      vm.drawLeaf();
      if (vm.currentLevel < vm.level) {
        vm.currentLevel++;
        setTimeout(function() {
          requestAnimationFrame(vm.loop);
        }, 500);
      }
    },
    drawLeaf() {
      let vm = this;
    }
  },
  brforeCreate() {},
  created() {},
  mounted() {
    let vm = this;
    this.init();
    vm.onresize = function() {
      vm.init();
    };
  },
  beforeDestroy() {}
};
</script>
<style lang='postcss'>
.leaf-contain {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #303133;
}
</style>