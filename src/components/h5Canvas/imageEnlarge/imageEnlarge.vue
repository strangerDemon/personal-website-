<template>
  <div class="imageEnlarge">
      <canvas id="showImage">your browser is not support canvas</canvas>
      <canvas id="waterMark">your browser is not support canvas</canvas>
  </div>
</template>
<script>
export default {
  name: "imageEnlarge",
  directives: {},
  components: {},
  data() {
    return {
      showImageCanvas: null,
      showImageContext: null,

      waterMarkCanvas: null,
      waterMarkContext: null
    };
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    drawRect(color, x, y, width, height) {
      this.showImageContext.fillStyle = color;
      this.showImageContext.fillRect(x, y, width, height);
    },
    //  图片对象，图片起始位置，截取宽高，canvas 起始位置，显示宽高
    drawImage(image, x, y, width, height, cx, cy, cWidth, cHeight) {
      let vm = this;
      //  图片对象，canvas 起始位置,原图显示
      // vm.showImageContext.drawImage(image, cx, cy)

      //  图片对象，canvas 起始位置，显示宽高
      //vm.showImageContext.drawImage(image, cx, cy, cWidth, cHeight)

      //  图片对象，图片起始位置，截取宽高，canvas 起始位置，显示宽高
      //vm.showImageContext.drawImage( image, x, y, width, height, cx, cy, cWidth, cHeight);

      //图片拉伸显示
      vm.showImageContext.drawImage(
        image,
        0,
        0,
        vm.showImageCanvas.width,
        vm.showImageCanvas.height
      );
    },
    reDraw(event) {
      vm.showImageContext.clear();
    },
    uploadImage() {}
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    let vm = this;
    vm.showImageCanvas = document.getElementById("showImage");
    vm.showImageContext = vm.showImageCanvas.getContext("2d");

    vm.waterMarkCanvas = document.getElementById("waterMark");
    vm.waterMarkContext = vm.waterMarkCanvas.getContext("2d");

    vm.showImageCanvas.width = window.innerWidth;
    vm.showImageCanvas.height = window.innerHeight;
    vm.waterMarkCanvas.width = Math.max(vm.showImageCanvas.width * 0.2, 300);
    vm.waterMarkCanvas.height = Math.max(vm.showImageCanvas.height * 0.2, 100);
    //drawRect
    //vm.drawRect("red",100,100,200,200)

    //image
    let image = new Image();
    image.src = "./static/images/01.jpg";
    image.onload = function() {
      //图片加载完
      vm.drawImage(image, 100, 100, 200, 200, 0, 0, 400, 400);
      //waterMark
      vm.waterMarkContext.fillStyle = "rgba(255,255,255,0.5)";
      vm.waterMarkContext.font = "bold 50px Arial";
      vm.waterMarkContext.textBaseline = "middle";
      vm.waterMarkContext.fillText("demo", 20, 20);
      console.log(vm.showImageCanvas.width ,vm.waterMarkCanvas.width,
        vm.showImageCanvas.height , vm.waterMarkCanvas.height)
      vm.showImageContext.drawImage(
        vm.waterMarkCanvas,
        vm.showImageCanvas.width - vm.waterMarkCanvas.width,
        vm.showImageCanvas.height - vm.waterMarkCanvas.height
      );
    };
  }
};
</script>
<style lang="css" scoped>
#showImage {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: #fff 10px solid;
}
</style>