<template>
  <div>
    <canvas id="snake" class="snake">your browser is not support canvas</canvas>
  </div>
</template>

<script>
export default {
  name: "snake",
  directives: {},
  components: {},
  data() {
    return {
      canvas: null,
      context: null,
      width: 0,
      height: 0,
      //snake
      snake: [],
      snakeInterval: null,
      //背景格子
      cols: 50, //列
      spans: 20, //横
      gridWidth: 0,
      gridHeight: 0,
      //猎物
      preyX: 0,
      preyY: 0,
      eated: false
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      vm.initSnake();
      vm.initPrey();

      vm.snakeInterval = setInterval(function() {
        vm.drawGrid();
        vm.drawSnake();
        vm.drawPrey();
        vm.updateSnake();
      }, 200);
    },
    initSnake() {
      let vm = this;
      let snake = new Object();
      snake.x = ~~(Math.random() * (vm.cols - 6)) + 3;
      snake.y = ~~(Math.random() * (vm.spans - 6)) + 3;
      snake.dx = snake.x > vm.cols / 2 ? -1 : 1;
      snake.dy = 0;
      vm.snake.push(snake);
    },
    initPrey() {
      let vm = this;
      let isContains = true;
      vm.preyX = ~~(Math.random() * vm.cols);
      vm.preyY = ~~(Math.random() * vm.spans);
      while (isContains) {
        isContains = vm.checkIsContains();
        vm.preyX = ~~(Math.random() * vm.cols);
        vm.preyY = ~~(Math.random() * vm.spans);
      }
    },
    initKeyBoard() {
      let vm = this;
      window.onkeydown = function(event) {
        switch (event.code) {
          case "ArrowUp":
            vm.snake[0].dx = 0;
            vm.snake[0].dy = -1;
            break;
          case "ArrowDown":
            vm.snake[0].dx = 0;
            vm.snake[0].dy = 1;
            break;
          case "ArrowLeft":
            vm.snake[0].dx = -1;
            vm.snake[0].dy = 0;
            break;
          case "ArrowRight":
            vm.snake[0].dx = 1;
            vm.snake[0].dy = 0;
            break;
          case "space":
            break;
          default:
            break;
        }
      };
    },
    updateSnake() {
      let vm = this;
      for (let i = vm.snake.length - 1; i > 0; i--) {
        if (vm.isTouchWall(vm.snake[i]) || vm.isTouchSelf(vm.snake[i], i)) {
          clearInterval(vm.snakeInterval);
          break;
        }
      }
      let newSnake = new Object();
      newSnake.x = vm.snake[0].x + vm.snake[0].dx;
      newSnake.y = vm.snake[0].y + vm.snake[0].dy;
      newSnake.dx = vm.snake[0].dx;
      newSnake.dy = vm.snake[0].dy;
      if (newSnake.x == vm.preyX && newSnake.y == vm.preyY) {
        vm.eated = true;
      } else {
        vm.snake.splice(vm.snake.length - 1, 1);
      }
      vm.snake.splice(0, 0, newSnake);
    },
    isTouchWall(snake) {
      let vm = this;
      if (
        snake.x +snake.dx> vm.cols ||
        snake.x +snake.dx< 0 ||
        snake.y +snake.dy< 0 ||
        snake.y +snake.dy> vm.spans
      ) {
        alert("game over");
        return true;
      }
      return false;
    },
    isTouchSelf(snake, index) {
      let vm = this;
      for (let i = 0; i < vm.snake.length; i++) {
        if (
          index != i &&
          snake.x == vm.snake[i].x &&
          snake.y == vm.snake[i].y
        ) {
          return true;
        }
      }
      return false;
    },
    drawGrid() {
      let vm = this;
      vm.gridWidth = vm.width / vm.cols;
      vm.gridHeight = vm.height / vm.spans;
      vm.context.clearRect(0, 0, vm.width, vm.height);
      vm.context.strokeStyle = "#FFF";
      for (let i = 1; i < vm.cols; i++) {
        vm.context.beginPath();
        vm.context.moveTo(vm.gridWidth * i, 0);
        vm.context.lineTo(vm.gridWidth * i, vm.height);
        vm.context.stroke();
      }
      for (let i = 1; i < vm.spans; i++) {
        vm.context.beginPath();
        vm.context.moveTo(0, vm.gridHeight * i);
        vm.context.lineTo(vm.width, vm.gridHeight * i);
        vm.context.stroke();
      }
    },
    drawSnake() {
      let vm = this;
      vm.context.fillStyle = "blue";
      let length = vm.snake.length;
      for (let i = 0; i < length; i++) {
        let snake = vm.snake[i];
        vm.context.beginPath();
        vm.context.fillRect(
          snake.x * vm.gridWidth,
          snake.y * vm.gridHeight,
          vm.gridWidth,
          vm.gridHeight
        );
        vm.context.fill();
      }
    },
    drawPrey() {
      let vm = this;
      if (vm.eated) {
        let isContains = true;
        vm.preyX = ~~(Math.random() * vm.cols);
        vm.preyY = ~~(Math.random() * vm.spans);
        while (isContains) {
          isContains = vm.checkIsContains();
          vm.preyX = ~~(Math.random() * vm.cols);
          vm.preyY = ~~(Math.random() * vm.spans);
        }
        vm.eated = false;
      }
      vm.context.fillStyle = "green";
      vm.context.beginPath();
      vm.context.fillRect(
        vm.preyX * vm.gridWidth,
        vm.preyY * vm.gridHeight,
        vm.gridWidth,
        vm.gridHeight
      );
    },
    checkIsContains() {
      let vm = this;
      vm.snake.forEach(function(snake) {
        if (snake.x == vm.preyX && snake.y == vm.prepY) {
          return true;
        }
      });
      return false;
    }
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    let vm = this;
    vm.canvas = document.getElementById("snake");
    vm.context = vm.canvas.getContext("2d");
    vm.canvas.width = vm.width = window.innerWidth;
    vm.canvas.height = vm.height = window.innerHeight;
    window.onresize = function() {
      vm.canvas.width = vm.width = window.innerWidth;
      vm.canvas.height = vm.height = window.innerHeight;
      vm.gridWidth = vm.width / vm.cols;
      vm.gridHeight = vm.height / vm.spans;
    };
    vm.init();
    vm.initKeyBoard();
  }
};
</script>
<style lang="css" scoped>
.snake {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>