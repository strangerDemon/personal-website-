<template>
  <div class="router">
    <div id='ss_menu'>
      <div v-for="(menu,index) in menuList" :key="menu">
        <i :class="menu.class" @click="menuAction(menu)"></i>
      </div>
      <div class='menu' :class="isClose?'':'ss_active'">
        <div class='share' :class="isClose?'':'close'" :data-rot='rot' @click="menuClick">
          <div class='circle'></div>
          <div class='bar'></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "router",
    directives: {},
    components: {},
    data() {
      return {
        menuList:[{
          key:"4",//
          class:"ion-android-settings",
          name:"设置",
        },{
          key:"3",//个人照片库，分成多个照片库，每个库内一个照片墙，上传，删除，编辑Description 想着移植sketch
          class:"ion-android-film",
          name:"照片库",
        },{
          key:"2",//个人信息、作品展,编辑信息
          class:"ion-android-options",
          name:"明信片",
        },{//展示自己、朋友、所有人的最新动态，好友列表，非好友列表，关注，取消关注，点击进入查看，权限问题
          key:"1",
          class:"ion-ios-home",
          name:"主页面",
        }],
        rot:180,
        isClose:true,
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      menuClick() {
        let menu = $('#ss_menu');
        this.rot = this.rot - 180;
        menu.css('transform', 'rotate(' + this.rot + 'deg)');
        menu.css('webkitTransform', 'rotate(' + this.rot + 'deg)');
        if (this.rot / 180 % 2 == 0) {
          this.isClose=false
        } else {
          this.isClose=true
        }
      },
      menuAction(menu){
        this.$store.commit("setMenuAction",{menuAction:menu});
        this.menuClick();
      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
      let vm=this
      let menu = $('#ss_menu');
      vm.rot;
      menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (vm.rot / 180 % 2 == 0) {
          $('#ss_menu div i').addClass('ss_animate');
        } else {
          $('#ss_menu div i').removeClass('ss_animate');
        }
      });
    }
  }

</script>
<style lang="css" scoped>
  @-webkit-keyframes badbounce {
    0%,
    100% {
      -webkit-transform: translateY(0px);
    }
    10% {
      -webkit-transform: translateY(6px);
    }
    30% {
      -webkit-transform: translateY(-4px);
    }
    70% {
      -webkit-transform: translateY(3px);
    }
    90% {
      -webkit-transform: translateY(-2px);
    }
  }

  @-moz-keyframes badbounce {
    0%,
    100% {
      -moz-transform: translateY(0px);
    }
    10% {
      -moz-transform: translateY(6px);
    }
    30% {
      -moz-transform: translateY(-4px);
    }
    70% {
      -moz-transform: translateY(3px);
    }
    90% {
      -moz-transform: translateY(-2px);
    }
  }

  @keyframes badbounce {
    0%,
    100% {
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      -ms-transform: translateY(0px);
      -o-transform: translateY(0px);
      transform: translateY(0px);
    }
    10% {
      -webkit-transform: translateY(6px);
      -moz-transform: translateY(6px);
      -ms-transform: translateY(6px);
      -o-transform: translateY(6px);
      transform: translateY(6px);
    }
    30% {
      -webkit-transform: translateY(-4px);
      -moz-transform: translateY(-4px);
      -ms-transform: translateY(-4px);
      -o-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    70% {
      -webkit-transform: translateY(3px);
      -moz-transform: translateY(3px);
      -ms-transform: translateY(3px);
      -o-transform: translateY(3px);
      transform: translateY(3px);
    }
    90% {
      -webkit-transform: translateY(-2px);
      -moz-transform: translateY(-2px);
      -ms-transform: translateY(-2px);
      -o-transform: translateY(-2px);
      transform: translateY(-2px);
    }
  }

  .ss_animate {
    -webkit-animation: badbounce 1s linear;
    -moz-animation: badbounce 1s linear;
    animation: badbounce 1s linear;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background: #212121;
    margin: 0;
    padding: 0;
  }

  #ss_menu {
    bottom: 30px;
    width: 60px;
    height: 60px;
    color: #fff;
    position: fixed;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    right: 30px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  #ss_menu>.menu {
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
    color: #fff;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
  }

  #ss_menu>.menu .share {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
  }

  #ss_menu>.menu .share .circle {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    top: 50%;
    margin-top: -6px;
    left: 12px;
    opacity: 1;
  }

  #ss_menu>.menu .share .circle:after,
  #ss_menu>.menu .share .circle:before {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    content: '';
    opacity: 1;
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
  }

  #ss_menu>.menu .share .circle:after {
    left: 20.78461px;
    top: 12.0px;
  }

  #ss_menu>.menu .share .circle:before {
    left: 20.78461px;
    top: -12.0px;
  }

  #ss_menu>.menu .share .bar {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    width: 24px;
    height: 3px;
    background: #fff;
    position: absolute;
    top: 50%;
    margin-top: -1.5px;
    left: 18px;
    -webkit-transform-origin: 0% 50%;
    -moz-transform-origin: 0% 50%;
    -ms-transform-origin: 0% 50%;
    -o-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    transform: rotate(30deg);
  }

  #ss_menu>.menu .share .bar:before {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    content: '';
    width: 24px;
    height: 3px;
    background: #fff;
    position: absolute;
    left: 0px;
    -webkit-transform-origin: 0% 50%;
    -moz-transform-origin: 0% 50%;
    -ms-transform-origin: 0% 50%;
    -o-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }

  #ss_menu>.menu .share.close .circle {
    opacity: 0;
  }

  #ss_menu>.menu .share.close .bar {
    top: 50%;
    margin-top: -1.5px;
    left: 50%;
    margin-left: -12px;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: rotate(405deg);
    -moz-transform: rotate(405deg);
    -ms-transform: rotate(405deg);
    -o-transform: rotate(405deg);
    transform: rotate(405deg);
  }

  #ss_menu>.menu .share.close .bar:before {
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: rotate(-450deg);
    -moz-transform: rotate(-450deg);
    -ms-transform: rotate(-450deg);
    -o-transform: rotate(-450deg);
    transform: rotate(-450deg);
  }

  #ss_menu>.menu.ss_active {
    background: #1D8CE0;
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -o-transform: scale(0.7);
    transform: scale(0.7);
  }

  #ss_menu>div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    width: 60px;
    height: 60px;
    font-size: 30px;
    text-align: center;
    background: #20A0FF;
    border-radius: 50%;
    display: table;
  }

  #ss_menu>div i {
    display: table-cell;
    vertical-align: middle;
  }

  #ss_menu>div:hover {
    background: #1D8CE0;
    cursor: pointer;
  }

  #ss_menu div:nth-child(1) {
    top: 0px;
    left: -160px;
  }

  #ss_menu div:nth-child(2) {
    top: -80.0px;
    left: -138.56406px;
  }

  #ss_menu div:nth-child(3) {
    top: -138.56406px;
    left: -80.0px;
  }

  #ss_menu div:nth-child(4) {
    top: -160px;
    left: 0.0px;
  }

</style>
