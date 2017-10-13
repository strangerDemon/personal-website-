<template>
  <div class="balloons" id="balloons">
    <!-- 自己写的一个动画 -->
  </div>
</template>
<script>
  export default {
    name: "balloons",
    directives: {},
    components: {},
    data() {
      return {
        number: 10, //初始化数量,都是random
        speed: 8, //速度
        size: 240, //宽度    
        rotationTime: 500, //创建时间间隔
        isLoop: true, //是否循环
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      init() {
        let vm = this
        //无线生成气球
        let timer = setInterval(function () {
          vm.createBalloon()
        }, vm.rotationTime);
        if (vm.isLoop) {
          setTimeout(function () {
            clearInterval(timer)
          }, vm.rotationTime*10)
        }
      },
      //初始化
      createBalloon() {
        let vm = this
        let fragment = document.createDocumentFragment();
        //number 
        for (let i = 0, number = Math.max(~~(Math.random() * vm.number), 1); i < number; i++) {
          //size
          let size = Math.max(~~(Math.random() * vm.size), 80);
          let radiusL = ~~(0.8 * size)
          let radiusM = ~~(0.3 * size)
          let shadowL = ~~(0.5 * size)
          let shadowM = ~~(-0.05 * size)
          //speed
          let speed = Math.max(~~(Math.random() * vm.speed), 2)
          //left
          let left = ~~(Math.random() * window.innerWidth - size)
          //loop
          let loop = vm.isLoop ? ' infinite' : '';
          let balloon = document.createElement("span");
          balloon.setAttribute('class', 'balloon');
          balloon.setAttribute('style',
            'z-index:' + size + ";" + //大球至于前
            'left:' + left + 'px;' +
            'width:' + size + 'px;' +
            'height:' + size + 'px;' +
            'border-radius:' + radiusL + 'px ' + radiusL + 'px ' + radiusM + 'px ' + radiusL + 'px ;' +
            'box-shadow:' + shadowM + 'px ' + shadowM + 'px ' + shadowL + 'px' + shadowM + 'px #873940 inset;' +
            'animation:' + 'balloonFloat ' + speed + 's' + loop + ';' +
            '-webkit-animation:' + 'balloonFloat ' + speed + 's' + loop
          )
          balloon.setAttribute('onclick', 'boom()')
          fragment.appendChild(balloon)
        }
        document.getElementById("balloons").appendChild(fragment)
      },
      //点击爆炸
      boom() {
        console.log(2);
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
<style lang="css">

.balloons{
  position: absolute;
    width: 100%;
    height: 100%;
    background-color: antiquewhite
}
  .balloon {
    position: absolute;
    width: 160px;
    height: 160px;
    background-color: #faf9f9;
    z-index: 1;
    /*显示前后*/
    top: -300px;
    /*最终隐藏*/
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
    bottom: -6px;
    right: -6px;
    border-radius: 4px;
    border-right-color: #eaabb0/*border分为4块，可以单独赋色*/
  }
  /*动画*/

  @keyframes balloonFloat {
    from {
      top: 100vh;
      display: block;
    }
    to {
      top: -300px;
      display: none;
    }
  }

</style>
