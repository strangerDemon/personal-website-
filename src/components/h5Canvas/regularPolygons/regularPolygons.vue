<template>
    <div>
        <canvas id="regularPolygons">your browser is not support canvas</canvas>
        <canvas id="waterMark">your browser is not support canvas</canvas>
    </div>
</template>
<script>
export default {
  name: "regularPolygons",
  directives: {},
  components: {},
  data() {
    return {
      //system
      canvas: null,
      context: null,
      width: 0,
      height: 0,
      // polygons side number of regular
      start: 3,
      end: 360,
      update: 1,
      nowSide: 3, //边
      tangentAngle: 0, //正切角
      radius: 0, //正多边形的半径
      pointRadius: 1, //接点绘圆的半径
      //水印
      waterMarkCanvas: null,
      waterMarkContext: null
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      vm.canvas = document.getElementById("regularPolygons");
      vm.context = vm.canvas.getContext("2d");
      vm.canvas.width = vm.width = window.innerWidth;
      vm.canvas.height = vm.height = window.innerHeight;
      vm.radius = Math.min(vm.width, vm.height) / 3;

      vm.waterMarkCanvas = document.getElementById("waterMark");
      vm.waterMarkContext = vm.waterMarkCanvas.getContext("2d");
      vm.waterMarkCanvas.width = 150;
      vm.waterMarkCanvas.height = 50;
      vm.loop();
    },
    loop() {
      let vm = this;
      vm.context.globalCompositeOpertion = "source-over"; //=>vm.context.clearRect(0,0,vm.width,vm.height)
      vm.context.fillStyle = "hsla(0,0%,0%,0.75)";
      vm.context.fillRect(0, 0, vm.width, vm.height);
      vm.context.globalCompositeOpertion = "lighter";
      vm.context.beginPath();
      vm.tangentAngle = Math.PI / vm.nowSide;
      let point = {
        x: vm.width / 2 + vm.radius * Math.sin(vm.tangentAngle),
        y: vm.height / 2 + vm.radius * Math.cos(vm.tangentAngle)
      };
      let sideLength = 2 * vm.radius * Math.sin(vm.tangentAngle);
      for (let i = 1; i <= vm.nowSide + 1; i++) {
        vm.context.arc(point.x, point.y, vm.pointRadius, 0, 2 * Math.PI);
        point.x += sideLength * Math.cos(i * 2 * vm.tangentAngle);
        point.y -= sideLength * Math.sin(i * 2 * vm.tangentAngle);
      }
      vm.nowSide += vm.update;
      vm.update =
        vm.nowSide >= vm.end || vm.nowSide <= vm.start ? -vm.update : vm.update;
      //线性渐变 参数为整数
      let g = vm.context.createLinearGradient(0, 0, vm.width, vm.height);
      g.addColorStop(0.0, "hsla(0.1,0%,40%,1)");
      g.addColorStop(1, "hsla(1.0,85%,50%,1)");
      vm.context.strokeStyle = g;
      vm.context.stroke();
      //waterMark
      vm.addWaterMark();
      setTimeout(function() {
        requestAnimationFrame(vm.loop);
      }, 1000 / vm.nowSide);
    },
    addWaterMark() {
      let vm = this;
      vm.waterMarkContext.clearRect(0,0,vm.width,vm.height)

      vm.waterMarkContext.fillStyle = "rgba(255,255,255,0.5)";
      vm.waterMarkContext.font = "bold 50px Arial";
      vm.waterMarkContext.textBaseline = "middle";
      vm.waterMarkContext.fillText(vm.nowSide, 20, 20);
      vm.context.drawImage(
        vm.waterMarkCanvas,
        vm.width/2 -50,
        vm.height/2 -25,
        150,
        25
      );
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