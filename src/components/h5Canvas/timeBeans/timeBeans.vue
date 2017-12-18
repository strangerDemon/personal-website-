<template>
  <div>
    <canvas id="timeBeans" class="timeBeans">your browser is not support canvas
    </canvas>
  </div>
</template>
<script>
  export default {
    name: "timeBeans",
    directives: {},
    components: {},
    data() {
      return {
        canvas: null,
        context: null,

        date: null,
        time: null,
        dateArray: null,
        timeArray: null,

        dateFromX: 150, //date的绘制的起始位置
        dateFromY: 100,
        timeFromX: 300, //time 的绘制起始的位置
        timeFromY: 350,
        pauseSpace: 100, //各个时间之间的间距
        balls: [], //boom ball
        k: 0.75 //摩擦系数
      };
    },
    props: {},
    computed: {
      colorArray() {
        return this.$store.state.timeBeans.colorArray;
      },
      timeMatrix() {
        return this.$store.state.timeBeans.timeMatrix;
      },
      radius() {
        return this.$store.state.timeBeans.radius;
      },
      spacing() {
        return this.$store.state.timeBeans.spacing;
      }
    },
    watch: {},
    methods: {
      init() {
        let vm = this;
        vm.canvas = document.getElementById("timeBeans");
        vm.context = vm.canvas.getContext("2d");
        vm.canvas.width = window.innerWidth;
        vm.canvas.height = window.innerHeight;
        vm.start();
      },
      start() {
        let vm = this;
        setInterval(function () {
          vm.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
          vm.getDateTime();
          let dArray = vm.splitNumber(vm.dateFromX, vm.dateFromY, vm.date);
          let tArray = vm.splitNumber(vm.timeFromX, vm.timeFromY, vm.time);
          if (vm.dateArray == null) {
            vm.dateArray = dArray;
          } else {
            for (let i = 0, length = dArray.length; i < length; i++) {
              if (dArray[i] != vm.dateArray[i]) {
                vm.addBall(
                  vm.dateFromX + i * vm.spacing,
                  vm.dateFromY,
                  vm.dateArray[i]
                );
                vm.dateArray[i] = dArray[i];
              }
            }
          }
          if (vm.timeArray == null) {
            vm.timeArray = tArray;
          } else {
            for (let i = 0, length = tArray.length; i < length; i++) {
              if (tArray[i] != vm.timeArray[i]) {
                vm.addBall(
                  vm.timeFromX + i * vm.spacing,
                  vm.timeFromY,
                  vm.timeArray[i]
                );
                vm.timeArray[i] = tArray[i];
              }
            }
          }
          vm.drawBalls();
          vm.deleteBalls();
        }, 1000 / 60);
      },
      splitNumber(x, y, number) {
        let vm = this;
        let num = Array.from(number.toString());
        let length = num.length;
        for (let i = 0; i < length; i++) {
          if (num[i] == " ") continue;
          vm.drawNumber(x + i * vm.spacing, y, num[i]);
        }
        return num;
      },
      drawNumber(x, y, number) {
        let vm = this;
        let martix = number == ":" ? vm.timeMatrix[10] : vm.timeMatrix[number];
        for (let i = 0, rows = martix.length; i < rows; i++) {
          //行10
          for (let j = 0, cols = martix[0].length; j < cols; j++) {
            //列7
            if (martix[i][j] == 1) {
              vm.context.beginPath();
              vm.context.fillStyle = "#FFF";
              vm.context.arc(
                x + 2 * j * vm.radius,
                y + 2 * i * vm.radius,
                vm.radius,
                0,
                2 * Math.PI
              );
              vm.context.fill();
            }
          }
        }
      },
      drawBalls() {
        let vm = this;
        for (let i = 0, rows = vm.balls.length; i < rows; i++) {
          let ball = vm.balls[i];
          if (ball.y + vm.radius >= window.innerHeight) {
            ball.dy = -ball.dy * vm.k;
            //ball.y = window.innerHeight - vm.radius;
          } else {
            ball.dy = ball.dy + ball.g;
          }
          ball.x = ball.x + ball.dx;
          ball.y = ball.y + ball.dy;
          vm.context.beginPath();
          vm.context.fillStyle = ball.color;
          vm.context.arc(ball.x, ball.y, vm.radius, 0, 2 * Math.PI);
          vm.context.fill();
        }
      },
      addBall(x, y, number) {
        let vm = this;
        let martix = number == ":" ? vm.timeMatrix[10] : vm.timeMatrix[number];
        for (let i = 0, rows = martix.length; i < rows; i++) {
          //行10
          for (let j = 0, cols = martix[0].length; j < cols; j++) {
            //列7
            if (martix[i][j] == 1) {
              let ball = new Object();
              ball.x = x + 2 * j * vm.radius;
              ball.y = y + 2 * i * vm.radius;
              let dx = (Math.random() - 0.5) * 10;
              ball.dx = dx >= 0 ? Math.max(2.5, dx) : Math.min(-2.5, dx);
              ball.dy = Math.max(1, Math.random() * 3);
              ball.g = 2;
              ball.color = vm.colorArray[~~(Math.random() * 10)];
              vm.balls.push(ball);
            }
          }
        }
      },
      deleteBalls() {
        let vm = this;
        for (let i = 0; i < vm.balls.length;) {
          if (
            vm.balls[i].x + vm.radius <= 0 ||
            vm.balls[i].x + vm.radius >= window.innerWidth
          ) {
            vm.balls.splice(i, 1);
          } else {
            i++;
          }
        }
      },
      getDateTime() {
        let vm = this;
        let dateTime = new Date();
        vm.date = dateTime
          .toLocaleDateString()
          .replace(/\/|[\u4e00]|:|\s+/g, " ");
        vm.time = dateTime.toTimeString().substring(0, 8);
      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
      let vm = this;
      vm.init();
      window.onresize = function () {
        vm.init();
      };
    }
  };

</script>
<style lang="css" scoped>
  .timeBeans {
    position: absolute;
    background-color: black;
  }

</style>
