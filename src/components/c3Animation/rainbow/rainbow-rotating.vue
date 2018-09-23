<template>
    <div class='rainbow-rotating' >
        <div class="rainbow" :style="{'width':width+'px','height':height+'px'}">
            <div class="rainbow-strip" v-for="(rianbow,index) in rainbowColor" :key="index"
              :style="{'border-color':rianbow,'border-width':(index+1)*rainbowSize+'px','padding':index*rainbowSize+'px','z-index':999-index}"></div>
        </div>    
    </div>
</template>
<script>
export default {
  name: "rainbow-rotating",
  directives: {},
  components: {},
  props: {},
  data() {
    return {
      //rainbow attribute
      rainbowColor: [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "violet",
        "purple",
        "#35036D"
      ],
      rainbowSize: 20,
      //canvas attribute
      width: 600,
      height: 300,
      rotaW: 3,
      rotaH: 6,
      maxWidth: 600,
      minWidth: 300,
      maxHeight: 600,
      minHeight: 300
    };
  },
  computed: {},
  watch: {},
  methods: {
    rotating() {
      let vm = this;
      if (vm.width >= vm.maxWidth || vm.width <= vm.minWidth) {
        vm.rotaW = -vm.rotaW;
      }
      if (vm.height >= vm.maxHeight || vm.height <= vm.minHeight) {
        vm.rotaH = -vm.rotaH;
      }
      vm.width += vm.rotaW;
      vm.height -= vm.rotaH;
      requestAnimationFrame(vm.rotating);
    }
  },
  brforeCreate() {},
  created() {},
  mounted() {
    this.rotating();
  },
  beforeDestroy() {}
};
</script>
<style lang='postcss'>
.rainbow-rotating {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  .rainbow {
    animation: loading 2s ease-in-out infinite;
    position: relative;
    margin: 0 auto;
    top:300px;
    transform: translate(-50%, -50%);
    .rainbow-strip {
      height: 100%;
      width: 100%;
      border-style: solid;
      border-radius: 50%;
      position: absolute;
    }
  }
}
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>