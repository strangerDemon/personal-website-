<template>
  <div class='christmas-tree'>
    <div class="tree">
        <div class="star">
            <div class="star-five"></div>
        </div>
        <div class="layer-top">&nbsp;</div>
        <div class="tree-layer" v-for="(layer,index) in layers" :key="index">
            <div class="tree-char" v-for="(char,indexC) in layer" :key="indexC" :style="{color:char.color}">
                {{char.character}}
            </div>
        </div>
        <div class="trunk">
            <div class="trunk-layer" v-for="(trunk,index) in trunkLayers" :key="index">
                <div class="trunk-width" :style="{margin:'auto '+ (2*trunk+25)+'px'}"></div>
            </div>
        </div>
    </div>
    <div class="params">
      <di class="param">
        <div class="title">color</div>:
        <el-switch v-model="colorChange"></el-switch>
      </di>
      <div class="param">
        <div class="title">character</div>:
        <el-switch v-model="characterChange"></el-switch>
      </div>
      <div class="param">
        <div class="title">interval</div>:
        <el-input-number v-model="interval" step="100" :min="0"></el-input-number>
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
      init: true,
      colorChange: true, //颜色变化
      characterChange: true, //字符变化
      interval: 1000,
      layerNumber: 20, //层数
      trunkLayers: 10
    };
  },
  computed: {},
  watch: {},
  methods: {
    blink() {
      let vm = this;
      let layers = [...vm.layers];
      vm.layers = [];
      for (let i = 0; i < vm.layerNumber; i++) {
        let length = i * 2 + 1;
        let layer = [];
        for (let j = 0; j < length; j++) {
          if (vm.init) {
            layer.push({
              color: vm.colors[Math.floor(Math.random() * vm.colors.length)],
              character:
                vm.characters[Math.floor(Math.random() * vm.characters.length)]
            });
          } else {
            let color = layers[i][j].color;
            let char = layers[i][j].character;
            if (vm.colorChange) {
              color = vm.colors[Math.floor(Math.random() * vm.colors.length)];
            }
            if (vm.characterChange) {
              char =
                vm.characters[Math.floor(Math.random() * vm.characters.length)];
            }
            layer.push({
              color: color,
              character: char
            });
          }
        }
        vm.layers.push(layer);
      }
      vm.init = false;
      setTimeout(function() {
        requestAnimationFrame(vm.blink);
      }, vm.interval);
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
    text-align: center;
    .star {
      position: relative;
      display: block;
      margin: 0px auto;
      animation: start-blink 2s infinite;
      margin-left: 10px;
      .star-five {
        position: relative;
        display: block;
        width: 0px;
        height: 0px;
        color: gold;
        margin: 20px auto;
        border-right: 45px solid transparent;
        border-bottom: 35px solid gold;
        border-left: 45px solid transparent;
        transform: rotate(35deg);
      }
      .star-five:before {
        border-bottom: 40px solid gold;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        position: absolute;
        height: 0;
        width: 0;
        top: -22.5px;
        left: -32.5px;
        display: block;
        content: "";
        transform: rotate(-35deg);
      }
      .star-five:after {
        position: absolute;
        display: block;
        color: gold;
        top: 3px;
        left: -49.5px;
        width: 0px;
        height: 0px;
        border-right: 45px solid transparent;
        border-bottom: 35px solid gold;
        border-left: 45px solid transparent;
        transform: rotate(-70deg);
        content: "";
      }
    }
    .layer-top {
      display: inline-block;
    }
    .tree-layer {
      margin: 10px 0px;
      .tree-char {
        display: inline;
      }
      .tree-char:first-child {
        padding-left: 20px;
      }
      .tree-char:last-child {
        padding-right: 10px;
      }
    }
    .layer-top::before,
    .tree-layer::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 25px;
      margin-right: 20px;
      transform: rotate(30deg);
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
    }
    .layer-top::after,
    .tree-layer::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 25px;
      margin-right: 20px;
      transform: rotate(-30deg);
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
    }
    .trunk {
      .trunk-layer {
        .trunk-width {
          display: inline;
        }
      }
      .trunk-layer::before {
        content: "|";
        color: #8b7765;
      }
      .trunk-layer::after {
        content: "|";
        color: #8b7765;
      }
    }
  }
  .params{
    position:absolute;
    width:300px;
    height:100%;
    color:#fff;
    font-size:16px;
    .param{
      position:relative;
      width:100%;
      height:50px;
      line-height: 50px;
      display:block;
      margin:10px;
      .title{
        width:100px;
        display: inline-block
      }
    }
  }
}
@keyframes start-blink {
  from,
  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
  50%,
  55% {
    opacity: 0;
    transform: rotateY(180deg);
  }
}
</style>