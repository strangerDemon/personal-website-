<template>
  <div class="kaleidoscope">
    <canvas id="kaleidoscope">your browser is not support canvas</canvas>
  </div>
</template>
<script>
export default {
  name: "kaleidoscope",
  directives: {},
  components: {},
  data() {
    return {
      //system
      canvas: null,
      context: null,
      width: 0,
      height: 0,
      //Kaleidoscope
      number: 500,
      radius: 0.5,
      lineWidth: 0.2,
      distance:0,
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      vm.canvas = document.getElementById("kaleidoscope");
      vm.context = vm.canvas.getContext("2d");
      vm.canvas.width = vm.width = window.innerWidth;
      vm.canvas.height = vm.height = window.innerHeight;
      vm.context.lineWidth = vm.lineWidth;
      vm.loop();
    },
    loop() {
      let vm = this;
      vm.context.globalCompositeOpertion = "source-over"; //=>vm.context.clearRect(0,0,vm.width,vm.height)
      vm.context.fillStyle = "hsla(0,0%,0%,0.75)";
      vm.context.fillRect(0, 0, vm.width, vm.height);
      vm.context.globalCompositeOpertion = "lighter";
      for (let j = 0; j < 2; j++) {
        let x=0, y, _x, _y, b;
        vm.context.beginPath();
        for (let i = 0; i < vm.number; i++) {
          x -= 0.72 * Math.sin(4);
          y = x * Math.sin(j +3.0*vm.distance+ x / 20) / 2;//x * Math.sin(j +vm.distance+ x) / 2;
          _x = x * Math.cos(b) - y * Math.sin(b);
          _y = x * Math.sin(b) + y * Math.cos(b);
          b = i * 3 * Math.PI / 6.8;//b=3*i,i
          //节点绘制
          vm.context.arc(
            vm.width / 2 - _x,
            vm.height / 2 - _y,
            vm.radius,
            0,
            2 * Math.PI
          );
        }
        //线性渐变 参数为整数
        let g = vm.context.createLinearGradient(
          0,0,vm.width,vm.height
        );
        g.addColorStop(0.0, 'hsla('+vm.distance*10+',0%,40%,1)');
        g.addColorStop(1, 'hsla('+vm.distance*10+',85%,50%,1)');
        vm.context.strokeStyle=g;
        vm.context.stroke();
      }
      vm.distance+=0.02;//
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