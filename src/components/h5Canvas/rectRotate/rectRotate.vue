<template>
    <div>
        <canvas id="rectRotate">your browser is not support canvas</canvas>
    </div>
</template>
<script>
  export default {
    name: "rectRotate",
    directives: {},
    components: {},
    data() {
      return {
        //system
        canvas: null,
        context: null,
        width: 0,
        height: 0,
        //多边形的参数
        rectPoints: [],
        nowSide: 3, //边
        tangentAngle: 0, //正切角
        radius: 100, //正多边形的半径
        pointRadius: 1, //接点绘圆的半径
        side: 0,
        pointx: 0,
        pointy: 0,
        maxSide: 5,
        minSide: 3,
        dSide: 1,
      };
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      init() {
        let vm = this;
        vm.canvas = document.getElementById("rectRotate");
        vm.context = vm.canvas.getContext("2d");
        vm.canvas.width = vm.width = window.innerWidth;
        vm.canvas.height = vm.height = window.innerHeight;
        vm.pointy = vm.height / 2 + vm.radius;
        vm.loop();
      },
      loop() {
        let vm = this;
        vm.tangentAngle = Math.PI / (vm.nowSide);
        let tangentAngleNumber = 360 / vm.nowSide;
        let sideLength = 2 * vm.radius * Math.sin(vm.tangentAngle);
        vm.side += sideLength;
        let pointX = vm.pointx == 0 ? vm.side + vm.radius * Math.sin(vm.tangentAngle) :
          vm.pointx,
          pointY = vm.pointy;
        vm.rotate(vm.dSide > 0 ? pointX : pointX - sideLength, pointY, vm.nowSide +
          1, sideLength, vm.dSide > 0 ?tangentAngleNumber:0, vm.dSide);
        vm.nowSide += vm.dSide
        if (vm.nowSide > vm.maxSide || vm.nowSide < vm.minSide) {
          vm.dSide = -vm.dSide 
          vm.nowSide += 2*vm.dSide
        }
        setTimeout(function() {
          requestAnimationFrame(vm.loop);
        }, 1800);
      },
      rotate(pointX, pointY, side, sideLength, tangentAngleNumber, direction) {
        let vm = this;
        vm.context.globalCompositeOpertion = "source-over"; //=>vm.context.clearRect(0,0,vm.width,vm.height)
        vm.context.fillStyle = "hsla(0,0%,0%,0.75)";
        vm.context.fillRect(0, 0, vm.width, vm.height);
        vm.context.globalCompositeOpertion = "lighter";
        vm.context.beginPath();
        vm.context.arc(pointX, pointY, vm.pointRadius, 0, 2 * Math.PI);
        tangentAngleNumber -= direction;
        let firstAngle = tangentAngleNumber / 180 * Math.PI;
        let x = pointX + sideLength * Math.cos(firstAngle),
          y = pointY - sideLength * Math.sin(firstAngle);
        for (let i = 1; i < side; i++) {
          vm.context.arc(x, y, vm.pointRadius, 0, 2 * Math.PI);
          x += sideLength * Math.cos(i * 2 * vm.tangentAngle + firstAngle);
          y -= sideLength * Math.sin(i * 2 * vm.tangentAngle + firstAngle);
        }
        vm.pointx = x;
        //线性渐变 参数为整数
        let g = vm.context.createLinearGradient(0, 0, vm.width, vm.height);
        g.addColorStop(0.0, "hsla(0.1,0%,40%,1)");
        g.addColorStop(1, "hsla(1.0,85%,50%,1)");
        vm.context.strokeStyle = g;
        vm.context.stroke();
        if (tangentAngleNumber >= 0&&tangentAngleNumber<=(360/(side-1))) {
          setTimeout(function() {
            vm.rotate(pointX, pointY, side, sideLength, tangentAngleNumber,
              direction)
          }, 10);
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
<style lang="css"
       scoped>
</style>