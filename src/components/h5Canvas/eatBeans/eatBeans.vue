<template>
  <div class="eatBeans"  @mousemove="updateParticle" @mouseover="updateParticle" @mouseout="releaseMouse">
      <canvas id="particles">your browser is not support canvas</canvas>
      <div class="score">得分：{{score}}</div>
  </div>
</template>
<script>
const colorArray = ["#67C23A", "#EB9E05", "#FA5555", "#409EFF", "#878D99"];
export default {
  name: "eatBeans",
  directives: {},
  components: {},
  data() {
    return {
      //system
      width: 0,
      height: 0,
      SpeedDenominator: 100, //速度分母
      updateTime: 10000, //更新时间
      image: null, //图片源
      frames: 60, //帧数
      big: 10, //变大倍数
      mouseX: -10,
      mouseY: -10,
      updateInterval: null,
      addParticlesInterval: null,
      //活画布笔
      canvas: null,
      context: null,
      //用户对象 一个实例粒子的对象
      eater: {
        x: 0,
        y: 0,
        width: 40,
        height: 44,
        dx: 2.5,
        dy: 2.5,
        color: "#FFFFFF",
        isBig: false
      },
      score: 0,
      //地雷，不动
      mimeArray: [],
      mimeNumber: 10,
      //怪物，会动
      monsterArray: [],
      monsterNumber: 3,
      //背景粒子参数
      particleNumber: 100, //粒子数
      particleMaxRadius: 10, //半径范围
      particleMaxSpeed: 10,
      particleArray: [] //粒子数组
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    /**
     * 初始化
     */
    init() {
      let vm = this;
      vm.image = new Image();
      vm.image.src = "./static/images/eatBeans.png";
      vm.image.onload = function() {
        vm.create();
        vm.updateInterval = setInterval(function() {
          vm.update();
        }, 1000 / vm.frames);
        //定时添加数据
        vm.addParticlesInterval = setInterval(function() {
          vm.addParticles();
        }, vm.updateTime);
      };
    },
    initSide() {
      let vm = this;
      vm.width = window.innerWidth;
      vm.height = window.innerHeight;
      vm.canvas.width = vm.width;
      vm.canvas.height = vm.height;
    },
    initKeyBoard() {
      //controller
      let vm = this;
      window.onkeydown = function(event) {
        switch (event.code) {
          case "ArrowUp":
            vm.eater.dy =
              vm.eater.y <= 0
                ? 0
                : -Math.abs(vm.SpeedDenominator / vm.eater.height);
            vm.eater.dx = 0;
            break;
          case "ArrowDown":
            vm.eater.dy =
              vm.eater.y >= vm.height - vm.eater.height
                ? 0
                : Math.abs(vm.SpeedDenominator / vm.eater.height);
            vm.eater.dx = 0;
            break;
          case "ArrowLeft":
            vm.eater.dx =
              vm.eater.x <= 0
                ? 0
                : -Math.abs(vm.SpeedDenominator / vm.eater.width);
            vm.eater.dy = 0;
            break;
          case "ArrowRight":
            vm.eater.dx =
              vm.eater.x >= vm.width - vm.eater.width
                ? 0
                : Math.abs(vm.SpeedDenominator / vm.eater.width);
            vm.eater.dy = 0;
            break;
          case "space":
            break;
          default:
            break;
        }
        vm.update();
      };
    },
    /**
     * 数据的创建、编辑
     */
    create() {
      let vm = this;
      //背景球
      vm.createParticles(vm.particleNumber);
      vm.createMimes();
      vm.createMonsters();
      //主体球
      vm.eater.x = Math.max(0, Math.random() * vm.width - vm.eater.width);
      vm.eater.y = Math.max(0, Math.random() * vm.height - vm.eater.height);
    },
    createParticles(number) {
      let vm = this;
      for (let i = 0; i < number; i++) {
        let particle = new Object();
        particle.radius = Math.random() * vm.particleMaxRadius;
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
          (2 * Math.random() - 1) *
          Math.sqrt(vm.particleMaxSpeed / particle.radius);
        particle.dy =
          (2 * Math.random() - 1) *
          Math.sqrt(vm.particleMaxSpeed / particle.radius);
        particle.isBig = false;
        vm.particleArray.push(particle);
      }
    },
    createMimes() {
      let vm = this;
      for (let i = 0; i < vm.mimeNumber; i++) {
        let mime = new Object();
        mime.width = 30;
        mime.height = 40;
        mime.x = Math.max(0, Math.random() * vm.width - mime.width);
        mime.y = Math.max(0, Math.random() * vm.height - mime.height);
        vm.mimeArray.push(mime);
      }
    },
    createMonsters() {
      let vm = this;
      for (let i = 0; i < vm.monsterNumber; i++) {
        let monster = new Object();
        monster.width = 40;
        monster.height = 40;
        monster.x = Math.max(0, Math.random() * vm.width - monster.width);
        monster.y = Math.max(0, Math.random() * vm.height - monster.height);
        monster.dx =
          (2 * Math.random() - 1) * Math.sqrt(vm.SpeedDenominator / 40);
        monster.dy =
          (2 * Math.random() - 1) * Math.sqrt(vm.SpeedDenominator / 40);
        vm.monsterArray.push(monster);
      }
    },
    update() {
      let vm = this;
      vm.context.clearRect(0, 0, vm.width, vm.height);
      for (let i = 0, length = vm.particleArray.length; i < length; i++) {
        vm.particleArray[i] = vm.updateParticlePara(vm.particleArray[i]);
        vm.drawParticle(vm.particleArray[i]);
      }
      for (let i = 0, length = vm.mimeArray.length; i < length; i++) {
        vm.drawMime(vm.mimeArray[i]);
      }
      for (let i = 0, length = vm.monsterArray.length; i < length; i++) {
        vm.monsterArray[i] = vm.updateMonsterPara(vm.monsterArray[i]);
        vm.drawMonster(vm.monsterArray[i]);
      }
      vm.eater = vm.updateEaterPara(vm.eater);
      vm.drawEat(vm.eater);
      vm.eat();
    },
    updateParticlePara(particle) {
      let vm = this;
      //放大
      /* let mouseRadius = particle.isBig
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
      }*/
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
    updateEaterPara(eater) {
      let vm = this;
      eater.x += eater.dx;
      eater.y += eater.dy;
      if (eater.x > vm.width - eater.width || eater.x < 0) {
        eater.dx = -eater.dx;
      }
      if (eater.y > vm.height - eater.height || eater.y < 0) {
        eater.dy = -eater.dy;
      }
      return eater;
    },
    updateMonsterPara(monster) {
      let vm = this;
      monster.x += monster.dx;
      monster.y += monster.dy;
      if (monster.x > vm.width - monster.width || monster.x < 0) {
        monster.dx = -monster.dx;
      }
      if (monster.y > vm.height - monster.height || monster.y < 0) {
        monster.dy = -monster.dy;
      }
      return monster;
    },
    //x 的球吃了 y的球的半径变化math.sqrt(x*x+y*y)-x，还有一个最大UserMaxRadius的半径
    eat() {
      let vm = this;
      //当前eater的实际中心点
      let eatW = vm.eater.width / 2,
        eatH = vm.eater.height / 2;
      let x = vm.eater.x + eatW,
        y = vm.eater.y + eatH;
      for (let i = 0; i < vm.particleArray.length; ) {
        let particle = vm.particleArray[i];
        if (
          Math.abs(particle.x - x) <= particle.radius + eatW &&
          Math.abs(particle.y - y) <= particle.radius + eatH
        ) {
          vm.particleArray.splice(i, 1);
          vm.score++;
          vm.eater.width=Math.sqrt(particle.radius*particle.radius+eatW*eatW*4);
          vm.eater.height=Math.sqrt(particle.radius*particle.radius+eatH*eatH*4);
        } else {
          i++;
        }
      }
      for (let i = 0, length = vm.mimeArray.length; i < length; i++) {
        if (vm.checkDead(x, y, eatW, eatH, vm.mimeArray[i])) {
          clearInterval(vm.updateInterval);
          clearInterval(vm.addParticlesInterval);
          vm.gameOver();
        }
      }
      for (let i = 0, length = vm.monsterArray.length; i < length; i++) {
        if (vm.checkDead(x, y, eatW, eatH, vm.monsterArray[i])) {
          clearInterval(vm.updateInterval);
          clearInterval(vm.addParticlesInterval);
          vm.gameOver();
        }
      }
    },
    //补充被吃掉的
    addParticles() {
      let vm = this;
      vm.createParticles(vm.particleNumber - vm.particleArray.length);
    },
    //p判断是否gg
    checkDead(x, y, w, h, object) {
      if (
        Math.abs(object.x + object.width / 2 - x) <= object.width / 2 + w &&
        Math.abs(object.y + object.height / 2 - y) <= object.height / 2 + h
      ) {
        return true;
      } else {
        return false;
      }
    },
    gameOver() {
      let vm = this;
      vm.$alert(vm.score, "得分", {
        center: true,
        confirmButtonText: "确定",
        callback: action => vm.gameStart()
      });
    },
    gameStart() {
      let vm = this;
      //清空数据
      vm.context.clearRect(0, 0, vm.width, vm.height);
      vm.particleArray = [];
      vm.mimeArray = [];
      vm.monsterArray = [];
      vm.score = 0;
      vm.eater.width=40;
      vm.eater.height=44;
      vm.init();
    },
    /**
     * 绘制
     */
    drawParticle(particle) {
      let vm = this;
      vm.context.beginPath(); //提笔
      vm.context.fillStyle = particle.color;
      vm.context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
      vm.context.fill();
    },
    drawEat(particle) {
      let vm = this;
      vm.context.drawImage(
        vm.image,
        447,
        514,
        164,
        178,
        particle.x,
        particle.y,
        particle.width,
        particle.height
      );
    },
    drawMime(mime) {
      let vm = this;
      vm.context.drawImage(
        vm.image,
        45,
        480,
        220,
        308,
        mime.x,
        mime.y,
        mime.width,
        mime.height
      );
    },
    drawMonster(monster) {
      let vm = this;
      vm.context.drawImage(
        vm.image,
        650,
        513,
        178,
        178,
        monster.x,
        monster.y,
        monster.width,
        monster.height
      );
    },
    /**
     * 鼠标事件
     */
    updateParticle(event) {
      let vm = this;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      let speed = Math.sqrt(
        vm.eater.dx * vm.eater.dx + vm.eater.dy * vm.eater.dy
      );
      let dx = event.clientX - vm.eater.x;
      let dy = event.clientY - vm.eater.y;
      let dl = Math.sqrt(dx * dx + dy * dy);
      vm.eater.dx = speed * dx / dl;
      vm.eater.dy = speed * dy / dl;
    },
    releaseMouse(event) {
      let vm = this;
      vm.mouseX = -vm.particleMaxRadius * vm.big;
      vm.mouseY = -vm.particleMaxRadius * vm.big;
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
    vm.initKeyBoard();
  }
};
</script>
<style lang="css" scoped>
.eatBeans {
  background-color: #2d2f33;
  position: absolute;
  width: 100%;
  height: 100%;
}
.score {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 150px;
  height: 50px;
  background-color: rgba(256, 256, 256, 0.5);
  font-size: 20px;
  padding: 10px;
}
</style>