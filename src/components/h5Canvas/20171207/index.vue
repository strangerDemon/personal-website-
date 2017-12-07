<template>
  <div class="bgParticle"  @mousemove="updateParticle" @mouseover="updateParticle" @mouseout="releaseMouse">
      <canvas id="particles">your browser is not support canvas</canvas>
  </div>
</template>
<script>
const width = window.innerWidth;
const height = window.innerHeight;
const colorArray = ["#67C23A", "#EB9E05", "#FA5555", "#409EFF", "#878D99"];
export default {
  name: "bgParticle",
  directives: {},
  components: {},
  data() {
    return {
      //活画布笔
      canvas: null,
      context: null,
      //一个实例粒子的对象
      particle: {
        x: 0,
        y: 0,
        radius: 0,
        dx: 0,
        dy: 0,
        color: "",
        isBig: false
      },
      number: 1000, //粒子数
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
    create() {
      let vm = this;
      for (let i = 0; i < vm.number; i++) {
        let particle = new Object();
        particle.radius = Math.random() * vm.maxRadius;
        particle.x = Math.max(
          particle.radius,
          Math.random() * width - particle.radius
        );
        particle.y = Math.max(
          particle.radius,
          Math.random() * height - particle.radius
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
      //console.log(vm.particleArray);
    },
    update() {
      let vm = this;
      vm.context.clearRect(0, 0, width, height);
      for (let i = 0; i < vm.number; i++) {
        if (
          Math.abs(vm.mouseX - vm.particleArray[i].x) <
            vm.big*vm.particleArray[i].radius &&
          Math.abs(vm.mouseY - vm.particleArray[i].y) <
            vm.big*vm.particleArray[i].radius &&
          !vm.particleArray[i].isBig
        ) {
          vm.particleArray[i].radius *= vm.big;
          vm.particleArray[i].isBig = true;
          vm.drawParticle(vm.particleArray[i]);
          continue;
        } else if (vm.particleArray[i].isBig) {
          vm.particleArray[i].radius /= vm.big;
          vm.particleArray[i].isBig = false;
        }
        vm.particleArray[i].x += vm.particleArray[i].dx;
        vm.particleArray[i].y += vm.particleArray[i].dy;
        if (
          vm.particleArray[i].x > width - vm.particleArray[i].radius ||
          vm.particleArray[i].x < vm.particleArray[i].radius
        ) {
          vm.particleArray[i].dx = -vm.particleArray[i].dx;
        }
        if (
          vm.particleArray[i].y > height - vm.particleArray[i].radius ||
          vm.particleArray[i].y < vm.particleArray[i].radius
        ) {
          vm.particleArray[i].dy = -vm.particleArray[i].dy;
        }
        vm.drawParticle(vm.particleArray[i]);
        //console.log(i,vm.particleArray[i].x,vm.particleArray[i].y);
      }
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
      this.mouseX = -vm.maxRadius;
      this.mouseY = -vm.maxRadius;
    }
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    this.canvas = document.getElementById("particles");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
    this.init();
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