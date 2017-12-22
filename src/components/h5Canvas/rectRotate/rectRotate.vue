<template>
  <div>
    <canvas id="rectRotate" class="rectRotate"> your browser is not suppport canvas</canvas>
  </div>
</template>
<script>
export default {
  name: "rectRotate",
  directives: {},
  components: {},
  data() {
    return {
      canvas: null,
      context: null,
      width: 0,
      heighr: 0,
      rects: [],
      number: 30,
      sideHig: 10,
      duration1: 0.8,
      duration2: 0.6,
      side1: 100,
      side2: 180
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    init() {
      let vm = this;
      let prevRad = 10;
      for (let i = 0; i < vm.number; i++) {
        let rad =
          (i + 1) / vm.number * (Math.min(vm.width, vm.height) >> (2 - 10)) +
          10;
        let rect = vm.createRect(i, prevRad, rad);
        vm.startArcAnimation(rect)
        vm.rects.push(rect);
        prevRad = rad;
      }
      vm.loop();
    },
    createRect(i, prevRad, rad) {
      let vm = this;
      let rect = new Object();

      rect.x = vm.width >> 1;
      rect.y = vm.height >> 1;
      rect.wid = rad - prevRad;
      rect.hig = 1;

      rect.vel = 100;
      rect.arcRate = 0;

      rect.oriRad1 = rect.rad1 = prevRad + 10;
      rect.oriRad2 = rect.rad2 = rect.rad1 + rect.wid;

      rect.theta3 = Math.atan2(rect.hig, rect.rad2);
      rect.theta4 = Math.atan2(rect.hig, rect.rad1);
      //console.log(rect.theta4)

      rect.animTheta0 = 0;
      rect.animTheta1 = 0;
      rect.animTheta3 = 0;
      rect.animTheta4 = 0;

      rect.theta00 = 0;
      rect.theta11 = 0;

      rect.oriRad3 = rect.rad3 = 1 / Math.cos(rect.theta3) * rect.rad2;
      rect.oriRad4 = rect.rad4 = 1 / Math.cos(rect.theta4) * rect.rad1;

      rect.isReverse = false;
      rect.isArcAnimation = false;

      rect.id = i;
      //var col = parseInt(255 * i / (number - 1));
      let col = 255;
      rect.col = "rgb(" + col + ", " + col + ", " + col + ")";
      rect.delay = 0.3 * (vm.number - i) / (vm.number - 1);
      return rect;
    },
    loop() {
      let vm = this;
      vm.context.fillStyle = "#FFF";
      vm.context.fillRect(0, 0, vm.width, vm.height);
      for (let j = vm.number; j > 0; j--) {
        vm.drawRect(vm.rects[j-1]);
      }
      requestAnimationFrame(vm.loop);
    },
    drawRect(rect) {
      let vm = this;
      vm.context.beginPath();
      vm.context.fillStyle = rect.col;
      vm.context.save();

      vm.context.translate(rect.x, rect.y);

      vm.context.moveTo(
        rect.rad1 * Math.cos(rect.theta00 + rect.animTheta0),
        -rect.rad1 * Math.sin(rect.theta00 + rect.animTheta0)
      );
      vm.context.lineTo(
        rect.rad2 * Math.cos(rect.theta11 + rect.animTheta1),
        -rect.rad2 * Math.sin(rect.theta11 + rect.animTheta1)
      );
      vm.context.lineTo(
        rect.rad3 * Math.cos(rect.theta3 + rect.animTheta3 + rect.theta11),
        -rect.rad3 * Math.sin(rect.theta3 + rect.animTheta3 + rect.theta11)
      );
      vm.context.lineTo(
        rect.rad4 * Math.cos(rect.theta4 + rect.animTheta4 + rect.theta00),
        -rect.rad4 * Math.sin(rect.theta4 + rect.animTheta4 + rect.theta00)
      );

      vm.context.fill();

      vm.context.restore();
    },
    startArcAnimation(rect){
        var self = rect;
        setTimeout(function(){
            self.isArcAnimation = true;
            self.arcRate1 = 0;
            self.arcRate2 = 0;

            self.originaLRate1 = 0;
            self.originaLRate2 = 0;

            TweenLite.to(self, self.duration1 +.03 * self.id, { arcRate1 : self.arcRate1 +1, onUpdate: vm.tweenOnUpdate1(rect), ease: Power3.easeOut});
            TweenLite.to(self, self.duration2 +.03 * self.id, { arcRate2 : self.arcRate1 +1, onUpdate: vm.tweenOnUpdate2(rect), onComplete: vm.tweenOnComplete1(rect)});
        }, 300);

    },
    tweenOnUpdate1(rect){
        rect.animTheta3 =  rect.arcRate1 *Math.PI ;
        rect.animTheta4 =  rect.arcRate1 *Math.PI ;
    },
    tweenOnUpdate2 (rect){
        rect.animTheta0 =  rect.arcRate2 *Math.PI ;
        rect.animTheta1 =  rect.arcRate2 *Math.PI ;
    },

    tweenOnComplete1(rect){
        rect.originaLRate1 = rect.arcRate1;
        rect.originaLRate2 = rect.arcRate2;

        TweenLite.to(rect, rect.duration1 +.03 * rect.id, { arcRate1 : rect.arcRate1 + 1, onUpdate: rect.tweenOnUpdate1, ease: Power3.easeOut, delay: rect.delay});
        TweenLite.to(rect, rect.duration2 +.03 * rect.id, { arcRate2 : rect.arcRate2 + 1, onUpdate: rect.tweenOnUpdate2, onComplete: rect.tweenOnComplete1, delay: rect.delay});
    },
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    let vm = this;
    vm.canvas = document.getElementById("rectRotate");
    vm.context = vm.canvas.getContext("2d");
    vm.canvas.width = vm.width = window.innerWidth;
    vm.canvas.height = vm.height = window.innerHeight;
    vm.init();
    
  }
};
</script> 
<style lang="css" scoped>
.rectRotate {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>