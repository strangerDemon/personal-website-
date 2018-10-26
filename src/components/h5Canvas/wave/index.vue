<template>
  <div class='wave'>
    <div class="attributes">
      <h2 class="title">Attributes</h2>
      <div class="title">样式</div>
      <el-select v-model="selectItem" placeholder="请选择">
        <el-option v-for="item in waveItems" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="title">半径</div>
      <el-input-number v-model="radius" :min="50" :max="100" label="半径"></el-input-number>
      <div class="title">波长</div>
      <el-input-number v-model="wavelength" :min="25" :max="75" label="波长"></el-input-number>
    </div>
    <div class="animation">
        <canvas id="wave">your broswer is not support canvas</canvas>
    </div>
  </div>
</template>
<script>
const colors=[['#6e45e2', '#88d3ce'],
  ['#de6262', '#ffb88c'],
  ['#64b3f4', '#c2e59c'],
  ['#0fd850', '#f9f047'],
  ['#007adf', '#00ecbc'],
  ['#B6CEE8', '#F578DC'],
  ['#9be15d', '#00e3ae']]
export default {
  name: "wave",
  directives: {},
  components: {},
  props: {},
  data() {
    return {
      selectItem: "oneLine",
      waveItems: [
        {
          label: "一致线",
          value: "oneLine"
        },
        {
          label: "山谷线",
          value: "valleyLine"
        }
      ],
      canvas: null,
      contenxt: null,
      width: 1920,
      height: 1080,
      radius: 50,
      wavelength: 50,
      animation: null,
      dx: 1
    };
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      vm.canvas = document.getElementById("wave");
      vm.context = vm.canvas.getContext("2d");
      vm.width = window.innerWidth - 250;
      vm.height = window.innerHeight;
      vm.canvas.width = vm.width;
      vm.canvas.height = vm.height;
      if (vm.animation != null) {
        cancelAnimationFrame(vm.animation);
      }
      vm.draw();
    },
    draw() {
      let vm = this;

      vm.context.clearRect(0, 0, vm.width, vm.height);
      vm.context.beginPath();
      let grad=vm.context.createLinearGradient(0, 0, vm.width, 0);
      grad.addColorStop(0, colors[0][0]);
      grad.addColorStop(1, colors[0][1]);
      vm.context.strokeStyle = grad
      vm.context.lineWidth = 1;

      vm.context.moveTo(0, vm.height * 0.5);
      for (let x = 0; x < vm.width; x++) {
        let y = vm.height * 0.5;
        switch (vm.selectItem) {
          case "valleyLine":
            y =
              vm.height * 0.5 +
              vm.radius *
                Math.pow(
                  Math.sin((x + vm.dx++) / (2 * Math.PI * vm.wavelength)),
                  2
                );
            break;
          case "oneLine":
          default:
            y =
              vm.height * 0.5 +
              vm.radius *
                Math.sin((x + vm.dx++) / (2 * Math.PI * vm.wavelength));
            break;
        }
        vm.context.lineTo(x, y);
      }

      vm.context.stroke();
      vm.context.closePath();
      if (vm.animation == null) {
        vm.animation = requestAnimationFrame(vm.draw);
      } else {
        requestAnimationFrame(vm.draw);
      }
    }
  },
  brforeCreate() {},
  created() {},
  mounted() {
    let vm = this;
    vm.init();
    window.onresize = function() {
      vm.init();
    };
  },
  beforeDestroy() {}
};
</script>
<style lang='postcss'>
.wave {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: darkgray;
  font-weight: 700;
  .attributes {
    position: fixed;
    width: 250px;
    height: 100%;
    margin: 10px;
    display: inline-block;
    .title {
      font-size: 24px;
      color: white;
    }
  }
  .animation {
    background-color: black;
    height: 100%;
    display: inline-block;
    width: calc(100% - 250px);
    float: right;
  }
}
</style>