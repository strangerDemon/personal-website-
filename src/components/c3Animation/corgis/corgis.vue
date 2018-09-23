<template>
  <div class='corgis'>
    <div class="doge">
      <div class="heart" v-for="(heart,index) in hearts" :key="index" 
        :style="{'left':heart.left,'top':heart.top}"></div>
      <div class="dog">
        <div class="head">
          <div class="ear left-ear"></div>
          <div class="ear right-ear"></div>
          <div class="eye left-eye"></div>
          <div class="eye right-eye"></div>
          <div class="nose"></div>
          <div class="mouse"></div>
        </div>
        <div class="body">
          <div class="mane"></div>
          <div class="tail"></div>
          <div class="foot" v-for="(foot,index) in 4" :key="index" 
            :class="'foot-'+foot"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//http://www.jq22.com/code1948
export default {
  name: "corgis",
  directives: {},
  components: {},
  props: {},
  data() {
    return {
      hearts: [
        {
          left: "10%",
          top: "0%"
        },
        {
          left: "20%",
          top: "5%"
        },
        {
          left: "12%",
          top: "13%"
        },
        {
          left: "23%",
          top: "17%"
        }
      ]
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
.corgis {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #303133;
  .doge {
    position: relative;
    top: 50%;
    width: 800px;
    height: 500px;
    margin: 0 auto;
    transform: translate(0%, -50%);
    .heart {
      position: absolute;
      width: 4.5%;
      height: 7%;
      background-color: #e64356;
      border-bottom-right-radius: 10%;
      animation: heart-blink 2s infinite;
      z-index: 99;
    }
    .heart::before,
    .heart::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      border-radius: 50%;
      background-color: #e64356;
    }
    .heart::after {
      bottom: 0px;
      left: -53%;
    }
    .heart::before {
      top: -53%;
      right: 0px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .dog {
      position: absolute;
      width: 100%;
      height: 100%;
      .head {
        position: absolute;
        width: 30%;
        height: 40%;
        top: 40%;
        animation: nod 2s infinite;
        background-color: #fff;
        border-top-right-radius: 45% 50%;
        border-top-left-radius: 35% 50%;
        border-bottom-left-radius: 35% 21%;
        z-index: 6;
        .eye {
          position: absolute;
          width: 8%;
          height: 8%;
          background-color: #000;
          border-radius: 50%;
          z-index: 99;
          animation: eye-blink 2s infinite;
        }
        .left-eye {
          top: 20%;
          left: 25%;
        }
        .right-eye {
          top: 22%;
          left: 55%;
        }
        .mouse {
          position: absolute;
          width: 40%;
          height: 40%;
          left: 30%;
          top: 20%;
          transform: rotate(-45deg);
          border: 0.7vmin solid transparent;
          border-bottom-color: #000;
          background-color: transparent;
          border-radius: 50%;
        }
        .nose {
          position: absolute;
          width: 40%;
          height: 40%;
          background-color: #fff;
          z-index: 7;
          left: -20%;
          top: 25%;
          border-bottom-left-radius: 50% 88%;
          border-top-left-radius: 11% 43%;
          transform: rotate(12deg);
        }
        .nose::after {
          position: absolute;
          width: 50%;
          height: 50%;
          left: -25%;
          top: -25%;
          border-radius: 40% 40% 50% 50%;
          background-color: #000;
          content: "";
        }
        .ear {
          position: absolute;
          height: 60%;
          width: 30%;
          top: -40%;
          border-top-left-radius: 68% 100%;
          border-top-right-radius: 100% 100%;
          background-color: #f79e38;
          z-index:1;
        }
        .left-ear {
          left: 0%;
          animation: left-ear-shake 1.5s infinite;
        }
        .right-ear {
          left: 65%;
          animation: right-ear-shake 1.5s infinite;
        }
      }
      .head::before {
        position: absolute;
        width: 27%;
        left: 7%;
        height: 23%;
        border-top-right-radius: 100% 100%;
        border-bottom-left-radius: 49% 100%;
        transform: rotate(-64deg);
        top: -1%;
        border-top-left-radius: 0% -20%;
        border-bottom-right-radius: 52% 0%;
        box-shadow: rgba(0, 0, 0, 0.1) 2px -6px 11px 1px;
        content: "";
        background-color: #f79e38;
        z-index: 7;
      }
      .head::after {
        position: absolute;
        width: 55%;
        left: 42%;
        top: 0%;
        height: 35%;
        border-radius: 23% 7% 16% 12%;
        transform: rotate(0deg) scaleX(-1);
        content: "";
        background-color: #f79e38;
        z-index: 7;
      }
      .body {
        position: absolute;
        width: 100%;
        height: 50%;
        top: 50%;
        z-index: 1;
        background-color: #f79e38;
        /**
        * border radius 具体要分8个线的曲度 如下写法
        */
        border-top-right-radius: 17% 40%;
        border-top-left-radius: 25%;
        border-bottom-right-radius: 5% 13%;
        border-bottom-left-radius: 30% 40%;
        .mane {
          position: absolute;
          width: 30%;
          height: 100%;
          background-color: #fff;
          border-top-right-radius: 17% 40%;
          border-top-left-radius: 25%;
          border-bottom-right-radius: 40% 40%;
          border-bottom-left-radius: 60% 40%;
          z-index: 4;
        }
        .mane::before {
          position: absolute;
          height: 60%;
          width: 10%;
          bottom: 15%;
          background-color: #fff;
          border-radius: 50%;
          content: "";
        }
        .mane::after {
          position: absolute;
          height: 60%;
          width: 10%;
          bottom: 7%;
          left: 8%;
          background-color: #fff;
          border-radius: 50%;
          content: "";
        }
        .tail {
          position: absolute;
          top: -14%;
          left: 92%;
          width: 5%;
          height: 40%;
          background-color: #f79e38;
          transform: rotate(20deg);
          border-top-right-radius: 40% 25%;
          border-top-left-radius: 40% 25%;
          animation: wagging 150ms infinite;
        }
        .tail::after {
          position: absolute;
          width: 100%;
          height: 30%;
          background-color: #fff;
          content: "";
          border-top-right-radius: 40% 25%;
          border-top-left-radius: 40% 25%;
        }
        .foot {
          position: absolute;
          width: 5%;
          height: 30%;
          bottom: -28%;
          border-bottom-right-radius: 40% 10%;
          border-bottom-left-radius: 40% 10%;
          background-color: #f79e38;
        }
        .foot::after {
          position: absolute;
          width: 100%;
          height: 30%;
          bottom: 0px;
          content: "";
          z-index: 2;
          border-bottom-right-radius: 40% 10%;
          border-bottom-left-radius: 40% 10%;
          background-color: #fff;
        }
        .foot-1 {
          left: 30%;
          transform: rotate(10deg);
          animation: foot-move-1 2s infinite;
        }
        .foot-2 {
          left: 40%;
          transform: rotate(-10deg);
          animation: foot-move-2 2s infinite;
        }
        .foot-3 {
          left: 70%;
          transform: rotate(10deg);
          animation: foot-move-1 2s infinite;
        }
        .foot-4 {
          left: 80%;
          transform: rotate(-10deg);
          animation: foot-move-2 2s infinite;
        }
      }
      .body::after {
        position: absolute;
        width: 30%;
        height: 50%;
        bottom: 65px;
        left: 45%;
        z-index: 2;
        content: "";
        background-color: #fff;
        border-radius: 50%;
        border-bottom-right-radius: 26% 41%;
        border-bottom-left-radius: 20% 36%;
        box-shadow: 100px 65px 0px #fff, -100px 65px 0px #fff, 0px 65px 0px #fff;
      }
    }
  }
}
@keyframes heart-blink {
  0% {
    -webkit-transform: scale(0.75) rotate(35deg);
    transform: scale(0.75) rotate(35deg);
    opacity: 1;
  }
  5%,
  15%,
  25% {
    -webkit-transform: scale(1) rotate(35deg);
    transform: scale(1) rotate(35deg);
  }
  10%,
  20% {
    -webkit-transform: scale(0.75) rotate(35deg);
    transform: scale(0.75) rotate(35deg);
  }
  70% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(35deg) translateY(-10px) translateX(-10px);
    transform: rotate(35deg) translateY(-10px) translateX(-10px);
    opacity: 0;
  }
}

@keyframes eye-blink {
  from,
  to {
    animation-timing-function: step-end;
    opacity: 1;
  }
  50%,
  55% {
    animation-timing-function: step-start;
    opacity: 0;
  }
}

@keyframes left-ear-shake {
 from {
    -webkit-transform: rotate(-26deg);
            transform: rotate(-26deg);
  }
  25% {
    -webkit-transform: rotate(-35deg);
            transform: rotate(-35deg);
  }
  50% {
    -webkit-transform: rotate(-26deg);
            transform: rotate(-26deg);
  }
  to {
    -webkit-transform: rotate(-40deg);
            transform: rotate(-40deg);
  }
}
@keyframes right-ear-shake {
  from {
    -webkit-transform: rotate(-331deg);
            transform: rotate(-331deg);
  }
  25% {
    -webkit-transform: rotate(-320deg);
            transform: rotate(-320deg);
  }
  50% {
    -webkit-transform: rotate(-331deg);
            transform: rotate(-331deg);
  }
  to {
    -webkit-transform: rotate(-320deg);
            transform: rotate(-320deg);
  }
}
@keyframes nod {
}

@keyframes wagging {
  from,
  to {
    transform: rotate(10deg);
  }
  50%,
  60% {
    transform: rotate(20deg) translateX(10px) translateY(2px);
  }
}

@keyframes foot-move-1 {
  0%,
  100% {
    transform: rotate(10deg);
  }
  5%,
  95% {
    transform: rotate(8deg);
  }
  10%,
  90% {
    transform: rotate(6deg);
  }
  15%,
  85% {
    transform: rotate(4deg);
  }
  20%,
  80% {
    transform: rotate(2deg);
  }
  25%,
  75% {
    transform: rotate(0deg);
  }
  30%,
  70% {
    transform: rotate(-2deg);
  }
  35%,
  65% {
    transform: rotate(-4deg);
  }
  40%,
  60% {
    transform: rotate(-6deg);
  }
  45%,
  55% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(-10deg);
  }
}
@keyframes foot-move-2 {
  0%,
  100% {
    transform: rotate(-10deg);
  }
  5%,
  95% {
    transform: rotate(-8deg);
  }
  10%,
  90% {
    transform: rotate(-6deg);
  }
  15%,
  85% {
    transform: rotate(-4deg);
  }
  20%,
  80% {
    transform: rotate(-2deg);
  }
  25%,
  75% {
    transform: rotate(0deg);
  }
  30%,
  70% {
    transform: rotate(2deg);
  }
  35%,
  65% {
    transform: rotate(4deg);
  }
  40%,
  60% {
    transform: rotate(6deg);
  }
  45%,
  55% {
    transform: rotate(8deg);
  }
  50% {
    transform: rotate(10deg);
  }
}
</style>