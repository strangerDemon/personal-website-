<template>
  <div>
    <canvas id="runningRect">your browser is not support canvas</canvas>
  </div>
</template>
<script>
export default {
  name: "runningRect",
  directives: {},
  components: {},
  data() {
    return {
      //system
      canvas: null,
      context: null,
      width: 0,
      height: 0
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      vm.canvas = document.getElementById("runningRect");
      vm.context = vm.canvas.getContext("2d");
      vm.canvas.width = vm.width = window.innerWidth;
      vm.canvas.height = vm.height = window.innerHeight;
      vm.loop();
    },
    loop() {
      let vm = this;
      vm.context.globalCompositeOpertion = "source-over"; //=>vm.context.clearRect(0,0,vm.width,vm.height)
      vm.context.fillStyle = "hsla(0,0%,0%,0.75)";
      vm.context.fillRect(0, 0, vm.width, vm.height);
      vm.context.globalCompositeOpertion = "lighter";
      vm.context.beginPath();
      requestAnimationFrame(vm.loop);
    }
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    let vm = this;
    vm.init();
    window.onresize = function() {
      vm.init();
    };
  }
};
</script>
<style lang="css" scoped>

</style>