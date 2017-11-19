<template>
  <div class="index">
    <div class="canvasController">
      <div class="controllerDiv">
        图形样式：
        <el-select v-model="graphic" placeholder="请选择">
          <el-option v-for="(item,index) in graphics " :key="index" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="controllerDiv">
        图形颜色:
       <input id="color" type="color" class="colorController" :value="color"/>
      </div>
      <div class="controllerDiv">
        图形大小：
        <el-input-number v-model="size"></el-input-number>
      </div>
      <div class="controllerDiv">
        起始位置:
        <div class="position">x:<el-input-number v-model="dx" ></el-input-number></div>
        <div class="position">y:<el-input-number v-model="dy" ></el-input-number></div>     
      </div>
      <div class="controllerDiv">
        是否填充：

        <el-radio v-model="fill" :label="true">是</el-radio>
        <el-radio v-model="fill" :label="false">否</el-radio>
      </div>
    </div>
    <canvas id="drawcontext">your browser is not support canvas</canvas>
  </div>
</template>
<script>
const width = window.innerWidth;
const height = window.innerHeight;
const left = 350;
export default {
  name: "index",
  directives: {},
  components: {},
  data() {
    return {
      fill: true,
      canvas: null,
      context: null,

      graphics: [
        { value: "rect", label: "正方形" },
        { value: "round", label: "圆形" },
        { value: "pentagram", label: "五角星" }
      ],

      graphic: "rect",
      color: "#ffffff",
      size: 50,
      dy: 0,
      dx: 0
    };
  },
  props: {},
  computed: {},
  watch: {
    graphic(val) {
      this.drawImage();
    },
    color(val) {
      this.drawImage();
    },
    size(val) {
      this.drawImage();
    },
    dx(val) {
      this.drawImage();
    },
    dy(val) {
      this.drawImage();
    }
  },
  methods: {
    resetCanvas() {
      let vm = this;
      vm.canvas = document.getElementById("drawcontext");
      vm.context = vm.canvas.getContext("2d");
      vm.canvas = width - left;
      vm.canvas = height;
    },
    drawImage() {
      let vm = this;
      vm.resetCanvas();
      vm.context.clearRect(0, 0, width - left, height);
      vm.context.fillStyle = vm.color;
      console.log(vm.dx, vm.dy, vm.size, vm.size);
      switch (vm.graphic) {
        case "rect":
          //vm.context.clearRect(0, 0, width - left, height);
          if (vm.fill) {
            vm.context.fillRect(vm.dx, vm.dy, vm.size, vm.size);
          } else {
            vm.context.strokeRect(vm.dx, vm.dy, vm.size, vm.size);
          }
          break;
        case "round":
          //x,y,半径r,起始弧度，结束弧度，顺时针/逆时针
          let r = vm.size >> 1;
          vm.context.arc(vm.dx + r, vm.dy + r, r, 0, Math.PI * 2, true);
          break;
        case "pentagram":
          vm.context.moveTo(vm.dx, 0.4 * vm.size + vm.dy);
          vm.context.lineTo(vm.dx + 0.3 * vm.size, 0.4 * vm.size + vm.dy);
          vm.context.lineTo(vm.dx + 0.5 * vm.size, vm.dy);
          vm.context.lineTo(vm.dx + 0.7 * vm.size, 0.4 * vm.size + vm.dy);
          vm.context.lineTo(vm.dx + vm.size, 0.4 * vm.size + vm.dy);

          vm.context.lineTo(vm.dx + 0.8 * vm.size, 0.6 * vm.size + vm.dy);

          vm.context.lineTo(vm.dx + 0.95 * vm.size, vm.size + vm.dy);

          vm.context.lineTo(vm.dx + 0.5 * vm.size, 0.7 * vm.size + vm.dy);

          vm.context.lineTo(vm.dx + 0.05 * vm.size, vm.size + vm.dy);

          vm.context.lineTo(vm.dx + 0.2 * vm.size, 0.6 * vm.size + vm.dy);

          vm.context.lineTo(vm.dx, 0.4 * vm.size + vm.dy);
          break;
        default:
          break;
      }
      if (vm.fill) {
        vm.context.fill();
      } else {
        vm.context.stroke();
      }
    },
    moveTo() {}
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    let vm = this;
    vm.resetCanvas();

    document.getElementById("color").onchange = function() {
      vm.color = this.value;
    };
    vm.drawImage();
  }
};
</script>
<style lang="css" scoped>
.index {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
}
.canvasController {
  position: absolute;
  width: 350px;
  height: 100%;
  background-color: gray;
}
.colorController {
  margin-left: 10px;
  width: 190px;
  height: 40px;
}
.controllerDiv {
  font-size: 16px;
  font-weight: 700;
  position: relative;
  padding: 10px 20px;
}
.position {
  display: block;
  margin: 12px 40px;
  float: right;
}
#drawcontext {
  position: relative;
  height: 100%;
  width: calc(100vw - 350px);
  float: right;
}
</style>