<template>
  <div class='christmas-tree'>
    <div class="tree">
        <div class="star-five"></div>
        <div class="tree-layer" v-for="(layer,index) in layers" :key="index">
            <div class="tree-char" v-for="(char,indexC) in layer" :key="indexC" :style="{color:char.color}">
                {{char.character}}
            </div>
        </div>
    </div>
  </div>
</template>
<script>
//http://www.jq22.com/code1434
export default {
  name: "christmas-tree",
  directives: {},
  components: {},
  props: {},
  data() {
    return {
      layers: [], //圣诞树的字符
      colors: [
        "#00FF00",
        "#00BFFF",
        "#FFC0CB",
        "#FFA500",
        "#FF0000",
        "#4B0082",
        "#FFFFFF"
      ], //颜色
      characters: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "~",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "=",
        "+",
        "?",
        ">",
        "<"
      ], //字符
      colorChange: true, //颜色变化
      characterChange: true, //字符变化
      layerNumber: 20 //层数
    };
  },
  computed: {},
  watch: {},
  methods: {
    blink() {
      let vm = this;
      vm.layers = [];
      for (let i = 0; i < vm.layerNumber; i++) {
        let length = i * 2 + 1;
        let layer = [];
        for (let j = 0; j < length; j++) {
          layer.push({
            color: vm.colors[Math.floor(Math.random() * vm.colors.length)],
            character:
              vm.characters[Math.floor(Math.random() * vm.characters.length)]
          });
        }
        vm.layers.push(layer);
      }
      //requestAnimationFrame(vm.blink);
    }
  },
  brforeCreate() {},
  //app created=>map created =>mapSwitch created=> map mounted=> mapSwitch mounted=>app mounted
  created() {},
  mounted() {
    this.blink();
  },
  beforeDestroy() {}
};
</script>
<style lang='postcss'>
.christmas-tree {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #0a2a43;
  .tree {
    position: absolute;
    height: 80%;
    width: 80%;
    left: 10%;
    top: 10%;
    text-align:center;
    .star-five {
      position: relative;
      display: block;
      width: 0px;
      height: 0px;
      margin: 50px 0;
      color: gold;
      border-right: 100px solid transparent;
      border-bottom: 70px solid gold;
      border-left: 100px solid transparent;
      -moz-transform: rotate(35deg);
      -webkit-transform: rotate(35deg);
      -ms-transform: rotate(35deg);
      -o-transform: rotate(35deg);
      animation: start-blink 2s infinite;
    }
    .star-five:before {
      border-bottom: 80px solid gold;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -45px;
      left: -65px;
      display: block;
      content: "";
      -webkit-transform: rotate(-35deg);
      -moz-transform: rotate(-35deg);
      -ms-transform: rotate(-35deg);
      -o-transform: rotate(-35deg);
    }
    .star-five:after {
      position: absolute;
      display: block;
      color: gold;
      top: 3px;
      left: -105px;
      width: 0px;
      height: 0px;
      border-right: 100px solid transparent;
      border-bottom: 70px solid gold;
      border-left: 100px solid transparent;
      -webkit-transform: rotate(-70deg);
      -moz-transform: rotate(-70deg);
      -ms-transform: rotate(-70deg);
      -o-transform: rotate(-70deg);
      content: "";
    }
    .tree-layer {
      .tree-char {
        display: inline;
      }
    }
  }
}
@keyframes start-blink {
  from,
  to {
    opacity: 1;
  }
  50%,
  55% {
    opacity: 0;
  }
}
</style>