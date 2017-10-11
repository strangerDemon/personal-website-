<template>
  <div class="bolloons">
    <!-- 自己写的一个动画 -->
    <!-- <span class="balloon"></span> -->
  </div>
</template>
<script>
  export default {
    name: "bolloons",
    directives: {},
    components: {},
    data() {
      return {
        number: 10, //初始化数量,都是random
        speed: 8, //速度
        size: 160, //宽度    
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      //初始化
      init() {
        let vm = this
        let bolloons= document.createElement();
        //number 
        for (let i = 0, number = Math.max(~~(Math.random() * vm.number), 1); i < number; i++) {
          //size
          let size = Math.max(~~(Math.random() * vm.size), 40);
          let radiusL = 0.8 * size
          let radiusM = 0.4 * size
          let shadowL = 0.5 * size
          let shadowM = -0.05 * size
          //speed
          let speed = Math.max(~~(Math.random() * vm.speed), 1)
          //left
          let left = ~~(Math.random() * window.innerWidth - size)
        
          vm.$createElement('span', {
            style: {
              'left': left + 'px',
              'width': size + 'px',
              'height': size + 'px',
              'border-radius': radiusL + 'px ' + radiusL + 'px ' + radiusM + 'px ' + radiusL + 'px ',
              'box-shadow': shadowM + 'px ' + shadowM + 'px ' + shadowL + 'px' + shadowM + 'px #873940 inset',
              'animation': 'balloonFloat' + speed + 's',
              '-webkit-animation': 'balloonFloat' + speed + 's'
            },
            attrs:{
                'class':'bolloon'
            }
          }, vm.$slots.default)
        }
      },
      //点击爆炸
      boom() {

      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
      this.init()
    }
  }

</script>
<style lang="css" scoped>
  .balloon {
    position: absolute;
    width: 160px;
    height: 160px;
    background-color: #faf9f9;
    /*圆角属性，顺时针*/
    border-radius: 128px 128px 64px 128px;
    /*旋转 顺时针*/
    transform: rotate(45deg);
    /*盒子阴影 box-shadow: h-shadow v-shadow blur spread color inset;
    水平阴影的位置 垂直阴影的位置 模糊距离 阴影的尺寸 阴影的颜色 将外部阴影 (outset) 改为内部阴影
    */
    box-shadow: -8px -8px 80px -8px #873940 inset;

    /*动画*/
    animation: balloonFloat 5s;
    -webkit-animation: balloonFloat 5s;
  }
  /*伪标签 要用content 激活*/

  .balloon::after {
    content: '';
    position: absolute;
    border: 8px solid transparent;
    /* 无色*/
    transform: rotate(45deg);
    bottom: 0px;
    right: 0px;
    border-radius: 4px;
    border-right-color: #873940/*border分为4块，可以单独赋色*/
  }
  /*动画*/

  @keyframes balloonFloat {
    from {
      top: calc(100vh - 0px);
      display: block;
    }
    to {
      top: -200px;
      display: none;
    }
  }

</style>
