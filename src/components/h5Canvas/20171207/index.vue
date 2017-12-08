<template>
  <div class="bgParticle"  @mousemove="updateParticle" @mouseover="updateParticle" @mouseout="releaseMouse">
      <canvas id="particles">your browser is not support canvas</canvas>
  </div>
</template>
<script>
const colorArray = ["#67C23A", "#EB9E05", "#FA5555", "#409EFF", "#878D99"];
export default {
  name: "bgParticle",
  directives: {},
  components: {},
  data() {
    return {
        //system
      width: 0,
      height: 0,
      SpeedDenominator:50,//速度分母
      updateTime:10000,//更新时间
      //活画布笔
      canvas: null,
      context: null,
      //用户对象 一个实例粒子的对象
      particle: {
        x: 0,
        y: 0,
        radius: 10,
        dx: 10,
        dy: 10,
        color: "#FFFFFF",
        isBig: false
      },
      UserMaxRadius:50,
      //背景粒子参数
      number: 100, //粒子数
      maxRadius: 10, //半径范围
      maxSpeed: 10,
      particleArray: [], //粒子数组
      frames: 60, //帧数
      big: 10, //变大倍数
      mouseX: -10,
      mouseY: -10
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      vm.create();
      setInterval(function() {
        vm.update();
      }, 1000 / vm.frames);
    },
    initSide() {
      let vm = this;
      vm.width = window.innerWidth;
      vm.height = window.innerHeight;
      vm.canvas.width = vm.width;
      vm.canvas.height = vm.height;
    },
    create() {
      let vm = this;
      //背景球
      for (let i = 0; i < vm.number; i++) {
        let particle = new Object();
        particle.radius = Math.random() * vm.maxRadius;
        particle.x = Math.max(
          particle.radius,
          Math.random() * vm.width - particle.radius
        );
        particle.y = Math.max(
          particle.radius,
          Math.random() * vm.height - particle.radius
        );
        particle.color = colorArray[~~(Math.random() * 5)];
        particle.dx =
          (2 * Math.random() - 1) * Math.sqrt(vm.maxSpeed / particle.radius);
        particle.dy =
          (2 * Math.random() - 1) * Math.sqrt(vm.maxSpeed / particle.radius);
        particle.isBig = false;
        vm.particleArray.push(particle);
        vm.drawParticle(particle);
      }
      //主体球
      vm.particle.x = Math.max(
        vm.particle.radius,
        Math.random() * vm.width - vm.particle.radius
      );
      vm.particle.y = Math.max(
        vm.particle.radius,
        Math.random() * vm.height - vm.particle.radius
      );
      //console.log(vm.particleArray);
    },
    update() {
      let vm = this;
      vm.context.clearRect(0, 0, vm.width, vm.height);
      for (let i = 0; i < vm.number; i++) {
        vm.particleArray[i] = vm.updatePara(vm.particleArray[i]);
        vm.drawParticle(vm.particleArray[i]);
      }
      vm.particle = vm.updatePara(vm.particle);
      vm.drawParticle(vm.particle);
    },
    updatePara(particle) {
      let vm = this;
      let mouseRadius = particle.isBig
        ? particle.radius
        : vm.big * particle.radius;
      if (
        Math.abs(vm.mouseX - particle.x) < mouseRadius &&
        Math.abs(vm.mouseY - particle.y) < mouseRadius &&
        !particle.isBig
      ) {
        particle.radius *= vm.big;
        particle.isBig = true;
      } else if (
        Math.abs(vm.mouseX - particle.x) > particle.radius &&
        Math.abs(vm.mouseY - particle.y) > particle.radius &&
        particle.isBig
      ) {
        particle.radius /= vm.big;
        particle.isBig = false;
      }
      particle.x += particle.dx;
      particle.y += particle.dy;
      if (
        particle.x > vm.width - particle.radius ||
        particle.x < particle.radius
      ) {
        particle.dx = -particle.dx;
      }
      if (
        particle.y > vm.height - particle.radius ||
        particle.y < particle.radius
      ) {
        particle.dy = -particle.dy;
      }
      return particle;
    },
    //x 的球吃了 y的球的半径变化math.sqrt(x*x+y*y)-x，还有一个最大UserMaxRadius的半径
    eat(){

    },
    //补充被吃掉的
    addParticles(){

    },
    drawParticle(particle) {
      let vm = this;
      //vm.context.clearRect(0, 0, width, height);
      //console.log(particle.x,particle.y);
      vm.context.beginPath(); //提笔
      vm.context.fillStyle = particle.color;
      vm.context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
      vm.context.fill();
    },
    updateParticle(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    releaseMouse(event) {
      let vm = this;
      vm.mouseX = -vm.maxRadius * vm.big;
      vm.mouseY = -vm.maxRadius * vm.big;
    }
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    let vm = this;
    vm.canvas = document.getElementById("particles");
    vm.context = vm.canvas.getContext("2d");
    vm.initSide();
    vm.init();
    window.onresize = function() {
      vm.initSide();
    };
    //controller
    window.onkeydown = function(event) {
      switch (event.code) {
        case "ArrowUp":
          vm.particle.dy =
            vm.particle.y <= vm.particle.radius ? 0 : -Math.abs(vm.SpeedDenominator/vm.particle.radius);
          vm.particle.dx = 0;
          break;
        case "ArrowDown":
          vm.particle.dy =
            vm.particle.y >= vm.height - vm.particle.radius
              ? 0
              : Math.abs(vm.SpeedDenominator/vm.particle.radius);
          vm.particle.dx = 0;
          break;
        case "ArrowLeft":
          vm.particle.dx =
            vm.particle.x <= vm.particle.radius ? 0 : -Math.abs(vm.SpeedDenominator/vm.particle.radius);
          vm.particle.dy = 0;
          break;
        case "ArrowRight":
          vm.particle.dx =
            vm.particle.x >= vm.width - vm.particle.radius
              ? 0
              : Math.abs(vm.SpeedDenominator/vm.particle.radius);
          vm.particle.dy = 0;
          break;
        case "space":
          break;
        default:
          break;
      }
      vm.update();
    };  

    //定时添加数据
    setInterval(function(){

    },vm.updateTime);
  }
};
</script>
<style lang="css" scoped>
.bgParticle {
  background-color: #2d2f33;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>