<template>
    <div class='rainbow-loading' >
        <div class="rainbow" :style="{'width':side+'px','height':side+'px'}">
            <div class="rainbow-strip" v-for="(rianbow,index) in rainbowColor" :key="index"
              :style="{'border-color':rianbow,'border-width':(index+1)*rainbowSize+'px','padding':index*rainbowSize+'px','z-index':999-index}"></div>
        </div>    
    </div>
</template>
<script>
export default {
  name: "rainbow-loading",
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
      side: 600
    };
  },
  computed: {},
  watch: {},
  methods: {},
  brforeCreate() {},
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>
<style lang='postcss'>
.rainbow-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  .rainbow {
    animation: loading 2s ease-in-out infinite;
    position: relative;
    margin:0 auto;
    transform: translate(-50%, -50%);
    .rainbow-strip {
      height: 100%;
      width: 100%;
      border-style: solid;
      border-radius: 50%;
      position: absolute;
    }
  }
  .rainbow:after {
    position: absolute;
    background-color: black;
    z-index: 999;
    bottom: 50%;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 50%;
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