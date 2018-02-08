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
      //system
      canvas: null,
      context: null,
      width: 0,
      height: 0,
      //
      sideLength: 0,
      max: 6,
      min: 0,
      number: 0,
      update: 1,
      radius: 0.5,
      offetAngle: Math.PI / 3
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
      let x1 = (vm.width - vm.sideLength) / 2,
        y1 = vm.height / 1.5,
        x2 = (vm.width + vm.sideLength) / 2,
        y2 = vm.height / 1.5,
        x3 = vm.width / 2,
        y3 = y2 - vm.sideLength * Math.sqrt(3) / 2;

      vm.context.globalCompositeOpertion = "source-over"; //=>vm.context.clearRect(0,0,vm.width,vm.height)
      vm.context.fillStyle = "hsla(0,0%,0%,0.75)";
      vm.context.fillRect(0, 0, vm.width, vm.height);
      vm.context.globalCompositeOpertion = "lighter";
      vm.context.beginPath();
      vm.iteration(x1, y1, x2, y2, vm.sideLength, vm.number);
      vm.iteration(x2, y2, x3, y3, vm.sideLength, vm.number);
      vm.iteration(x3, y3, x1, y1, vm.sideLength, vm.number);
      let g = vm.context.createLinearGradient(0, 0, vm.width, vm.height);
      g.addColorStop(0.0, "hsla(" +10+ ",0%,40%,1)");
      g.addColorStop(1, "hsla(" + 10 + ",85%,50%,1)");
      vm.context.strokeStyle = g;
      vm.context.stroke();
      vm.number += vm.update;
      vm.update =
        vm.number > vm.max || vm.number < vm.min ? -vm.update : vm.update;
      requestAnimationFrame(vm.loop);
    },
    /**
     * @description 迭代绘制
     * (x,y)起始坐标
     * (x1,y1)终止坐标
     * len 长度
     * number 迭代次数
     * 长度：vm.sideLength=1/3((y2-y1)²+(x2-x1)²)
     * 折点1：(2/3*x1+1/3*x2,2/3*y1+1/3*y2)=>(t1,t2)
     * 折点2：if(x<x2){
     *	t5=t1+l*cos(atan((y2-y)/(x2-x))+p);//l=r/3,p=math.pi/3
     *	t6=t2+l*sin(atan((y2-y)/(x2-x))+p);
     * }else{
     * 	t5=t1+l*cos(atan((y2-y)/(x2-x))-2.0*p);
     * 	t6=t2+l*sin(atan((y2-y)/(x2-x))-2.0*p);
     * }
     * 折点3：(1/3*x1+2/3*x2,1/3*y1+2/3*y2)
     */
    iteration(x, y, x1, y1, len, number) {
      let vm = this;
      vm.context.globalCompositeOpertion = "source-over"; //=>vm.context.clearRect(0,0,vm.width,vm.height)
      vm.context.fillStyle = "hsla(0,0%,0%,0.75)";
      vm.context.fillRect(0, 0, vm.width, vm.height);
      vm.context.globalCompositeOpertion = "lighter";
      let l = len / 3;
      let t1 = 2 / 3 * x + 1 / 3 * x1,
        t2 = 2 / 3 * y + 1 / 3 * y1;
      let t3 = 1 / 3 * x + 2 / 3 * x1,
        t4 = 1 / 3 * y + 2 / 3 * y1;
      let t5, t6;
      if (x < x1) {
        t5 = t1 + l * Math.cos(Math.atan((y1 - y) / (x1 - x)) + vm.offetAngle); //l=r/3,p=math.pi/3
        t6 = t2 + l * Math.sin(Math.atan((y1 - y) / (x1 - x)) + vm.offetAngle);
      } else {
        t5 =
          t1 + l * Math.cos(Math.atan((y1 - y) / (x1 - x)) - 2 * vm.offetAngle);
        t6 =
          t2 + l * Math.sin(Math.atan((y1 - y) / (x1 - x)) - 2 * vm.offetAngle);
      }
      if (number >= vm.max || number <= vm.min) {
        //之后一层迭代再绘制，可以减少重复的点的绘制
        vm.context.arc(x, y, vm.radius, 0, 2 * Math.PI);
        vm.context.arc(t1, t2, vm.radius, 0, 2 * Math.PI);
        vm.context.arc(t5, t6, vm.radius, 0, 2 * Math.PI);
        vm.context.arc(t3, t4, vm.radius, 0, 2 * Math.PI);
        vm.context.arc(x1, y1, vm.radius, 0, 2 * Math.PI);
        return;
      } else {
        vm.iteration(x, y, t1, t2, l, number - 1);
        vm.iteration(t1, t2, t5, t6, l, number - 1);
        vm.iteration(t5, t6, t3, t4, l, number - 1);
        vm.iteration(t3, t4, x1, y1, l, number - 1);
      }
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