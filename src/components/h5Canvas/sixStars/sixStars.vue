<template>
  <div class="sixStars">
    <canvas id="sixStars">your browser is not support canvas</canvas>
  </div>
</template>
<script>
export default {
  name: "sixStars",
  directives: {},
  components: {},
  data() {
    return {
      canvas: null,
      context: null,
      width: 0,
      height: 0,
      sideLength: 0,
      max: 10,
      min: 0,
      number: 0,
      update: 1,
      root3: Math.sqrt(3)
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      vm.canvas = document.getElementById("sixStars");
      vm.context = vm.canvas.getContext("2d");
      vm.canvas.width = vm.width = window.innerWidth;
      vm.canvas.height = vm.height = window.innerHeight;
      vm.sideLength = Math.min(vm.width, vm.height) * 0.75;
      vm.loop();
    },
    loop() {
      let vm = this;
      let minX = (vm.width - vm.sideLength) / 2,
        minY = vm.height / 2,
        maxX = (vm.width + vm.sideLength) / 2,
        maxY = vm.height / 2;
      //长度：vm.sideLength=1/3((y2-y1)²+(x2-x1)²)
      //折点1：(2/3*x1+1/3*x2,2/3*y1+1/3*y2)
      //折点2：(1/2*x1+1/2*x2,1/2*y1+1/2*y2)中心点：(Math.sqrt(3)/6*x2+(1-Math.sqrt(3)/6)*x1,Math.sqrt(3)/6*y1+(1-Math.sqrt(3)/6)*y2)
      //折点3：(1/3*x1+2/3*x2,1/3*y1+2/3*y2)
       console.log(minX ,maxX, minY , maxY);
      console.log( vm.root3 / 6 * maxX + (1 - vm.root3 / 6) * minX,
        vm.root3 / 6 * minY + (1 - vm.root3 / 6) * maxY);
      vm.context.globalCompositeOpertion = "source-over"; //=>vm.context.clearRect(0,0,vm.width,vm.height)
      vm.context.fillStyle = "hsla(0,0%,0%,0.75)";
      vm.context.fillRect(0, 0, vm.width, vm.height);
      vm.context.globalCompositeOpertion = "lighter";
      //for (let i = 0; i < vm.number; i++) {
      vm.context.beginPath();
      vm.context.arc(minX, minY, 0.5, 0, 2 * Math.PI);
      vm.context.arc(
        2 / 3 * minX + 1 / 3 * maxX,
        2 / 3 * minY + 1 / 3 * maxY,
        0.5,
        0,
        2 * Math.PI
      );
      vm.context.arc(
        vm.root3 / 6 * maxX + (1 - vm.root3 / 6) * minX,
        (3-vm.root3) / 2 * minY + (vm.root3-1) / 2 * maxY,
        0.5,
        0,
        2 * Math.PI
      );
      vm.context.arc(
        1 / 3 * minX + 2 / 3 * maxX,
        1 / 3 * minY + 2 / 3 * maxY,
        0.5,
        0,
        2 * Math.PI
      );
      vm.context.arc(maxX, maxY, 0.5, 0, 2 * Math.PI);
      //}
      let g = vm.context.createLinearGradient(0, 0, vm.width, vm.height);
      g.addColorStop(0.0, "hsla(" + 10 + ",0%,40%,1)");
      g.addColorStop(1, "hsla(" + 10 + ",85%,50%,1)");
      vm.context.strokeStyle = g;
      vm.context.stroke();
      vm.number += vm.update;
      vm.update =
        vm.number > vm.max || vm.number < vm.min ? -vm.update : vm.update;
      //requestAnimationFrame(vm.loop);
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