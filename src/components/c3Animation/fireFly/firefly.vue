<template>
  <div class="body" @mouseover="flyFollow" @mousedown="fly">
    <div class="fireflyDiv">
      <div class="checkbox-wrap">
        <input class="checkbox" id="checkbox" type="checkbox" />
        <label class="firefly" for="checkbox">
          <div class="abdomen">
            <div class="thorax">
              <div class="head">
                <div class="eyes"></div>
                <div class="antennae"></div>
              </div>
            </div>
            <div class="wings">
              <!-- when check 
                          fly one place to another
                          opacity wing  animation:shock 1s infinite 
                      uncheck
                          stop all
                     -->
              <div class="wing wing-a"></div>
              <div class="wing wing-b"></div>
              <div class="wing-opacity wing-a"></div>
              <div class="wing-opacity wing-b"></div>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
const width = window.innerWidth;
const height = window.innerHeight;
export default {
  name: "fireflyDiv",
  directives: {},
  components: {},
  data() {
    return {
      isFly: false,

      left: 200,
      top: 300,
      speed: 10,
      direction: 0,

      directionInterval: null,
      moveInterval: null,
      //firefly Attributes
      width: 64,
      height: 32,

      frames: 60 //帧数
    };
  },
  props: {
    flyType: {
      type: String,
      default: "flyTo"
    }
  },
  computed: {},
  watch: {},
  methods: {
    //对应的fireflyDiv模块位置方向修改
    fly(event) {
      let vm = this;
      let newTop = event.clientY,
        newLeft = event.clientX; //clientX,clientY 对应屏幕
      switch (vm.flyType) {
        case "flyAway":
          vm.flyAway(newLeft, newTop);
          break;
        case "flyTo":
          vm.flyTo(newLeft, newTop);
          break;
        default:
          break;
      }
    },
    flyAway(x, y) {},
    flyTo(x, y) {
      console.log("x:"+x+" y:"+y);
      $('#checkbox').prop('checked', true);
      let vm = this;
      clearInterval(vm.directionInterval);
      clearInterval(vm.moveInterval);
      let _speed = Math.max(~~(Math.random() * this.speed), 1); //速度
      let _direction = ~~(
        Math.atan((y - vm.top - vm.height) / (x - vm.left - vm.width)) *
        180 /
        Math.PI
      ); //角度
      //console.log("before:"+_direction);
      if (y < vm.top + vm.height && x < vm.left + vm.width) {
        _direction= _direction-180;
      }else if(y > vm.top + vm.height && x < vm.left + vm.width) {
        _direction= _direction+180;
      }
      //console.log("after:"+_direction);
      vm.directionAction(x, y, _speed, _direction);
    },
    flyFollow(event) {
      // this.flyTo(event.clientX,event.clientY)
    },
    directionAction(x, y, _speed, _direction) {
      let vm = this;
      //定时改变角度
      let i = vm.direction;
      vm.directionInterval = setInterval(function() {
        //原始角度小于现在的角度
        if (vm.direction<=_direction && i++ >= _direction) {
          clearInterval(vm.directionInterval);
          vm.moveAction(x, y, _speed, _direction);
        } else if (vm.direction>=_direction&& i-- <= _direction) {
          clearInterval(vm.directionInterval);
          vm.moveAction(x, y, _speed, _direction);
        } else {
          vm.direction = i;
          $(".fireflyDiv").css("transform", "rotate(" + i + "deg)");
        }
      }, 1000 / vm.frames);
    },
    moveAction(x, y, _speed, _direction) {
      let vm = this;
      let dy = Math.abs(_speed * Math.sin(2*Math.PI/360*_direction)),
        dx = Math.abs(_speed * Math.cos(2*Math.PI/360*_direction));
         //console.log("speed:"+_speed+" _direction:"+_direction+" dx:"+dx+" dy:"+dy);
      vm.moveInterval = setInterval(function() {
        if (y == vm.top + vm.height && x == vm.left + vm.width) {
          clearInterval(vm.moveInterval);
          $("#checkbox").removeAttr("checked");
        } else {
          vm.top =
            Math.abs(y - vm.top - vm.height) > dy
              ? y > vm.top + vm.height ? vm.top + dy : vm.top - dy
              : y - vm.height;
          vm.left =
            Math.abs(x - vm.left - vm.width) > dx
              ? x > vm.left + vm.width ? vm.left + dx : vm.left - dx
              : x - vm.width;
          $(".fireflyDiv").css("top", vm.top);
          $(".fireflyDiv").css("left", vm.left);
        }
      }, 1000 / vm.frames);
    }
  },
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {}
};
</script>
<style lang="css" scoped>
.body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: radial-gradient(#0a2a43 30%, #09243a);
  font-family: "Asap", sans-serif;
}

.fireflyDiv {
  position: absolute;
  left: 200px;
  top: 300px;
  /* width: 100px;
  height: 50px; */
  /* max-width: 500px;
    max-height: 200px; */
}

.label {
  flex: 0;
  color: #b8c5d0;
  letter-spacing: 0.04em;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 3rem;
}

@media screen and (min-width: 60rem) {
  .label {
    font-size: 5vw;
  }
}

.checkbox-wrap {
  flex: none;
  position: relative;
  width: 10%;
  min-width: 8rem;
  z-index: 1;
}

.checkbox-wrap:after {
  content: "";
  display: block;
  padding-top: 50%;
}

.checkbox {
  display: none;
}

.checkbox:checked ~ .firefly .abdomen {
  background: #27231e;
  box-shadow: inset 0 0 1.5rem rgba(150, 0, 0, 0.75);
  animation: flicker 4000ms ease infinite;
}

.checkbox:checked ~ .firefly .wing.wing-a {
  transform: rotate(30deg);
}

.checkbox:checked ~ .firefly .wing-opacity.wing-a {
  animation: shock-a 1s infinite;
}

.checkbox:checked ~ .firefly .wing.wing-b {
  transform: rotate(-30deg);
}

.checkbox:checked ~ .firefly .wing-opacity.wing-b {
  animation: shock-b 1s infinite;
}

.head {
  position: absolute;
  top: 15%;
  left: 60%;
  bottom: 15%;
  background: #27231e;
  width: 70%;
  border-radius: 40% 80% 80% 40%;
  box-shadow: inset -0.1rem 0 0 0.3rem rgba(14, 10, 10, 0.2);
}

.eyes {
  position: absolute;
  top: -5%;
  right: 10%;
  bottom: -5%;
  width: 35%;
}

.eyes:before,
.eyes:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 100%;
  background: #0e0a0a;
  padding-top: 100%;
}

.eyes:before {
  top: 0;
}

.eyes:after {
  bottom: 0;
}

.antennae {
  position: absolute;
  top: 20%;
  left: -150%;
  bottom: 20%;
  width: 400%;
  z-index: -1;
}

.antennae:before,
.antennae:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  border-color: #0e0a0a;
  border-style: solid;
  padding-top: 65%;
  border-width: 0.25rem 0.25rem 0.25rem 0;
}

.antennae:before {
  top: 80%;
  animation: Tentacles-a 1s infinite;
}

.antennae:after {
  bottom: 80%;
  animation: Tentacles-b 1s infinite;
}

.thorax {
  position: absolute;
  top: 0;
  left: 100%;
  bottom: 0;
  background: #d43b1f;
  width: 30%;
  border-radius: 20% 80% 80% 20%;
  box-shadow: inset -0.1rem 0 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
}

.abdomen {
  position: absolute;
  top: 10%;
  right: 20%;
  bottom: 10%;
  background: #27231e;
  width: 100%;
  transition: all 1000ms ease;
  border-radius: 100% 30% 30% 100%;
  box-sizing: border-box;
}

.abdomen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 15%,
    rgba(0, 0, 20, 0.1) 15%,
    rgba(0, 0, 20, 0.1) 20%
  );
  mix-blend-mode: multiply;
  border-radius: 100% 30% 30% 100%;
  z-index: 0;
  box-shadow: inset -1rem 0 0.2rem 0.3rem rgba(0, 0, 0, 0.1);
}

.wings {
  position: absolute;
  top: -20%;
  right: 0;
  bottom: -20%;
  left: -5%;
  z-index: 1;
}

.wings .wing {
  position: absolute;
  right: 0;
  background: repeating-linear-gradient(
    #27231e 0%,
    #27231e 40%,
    #191613 40%,
    #191613 60%
  );
  width: 100%;
  height: 50%;
  transition: all 200ms ease-out;
  border: 1px solid #40341d;
  box-sizing: border-box;
  box-shadow: inset 0.2rem 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
}
.wings .wing-opacity {
  position: absolute;
  right: 0;
  background: repeating-linear-gradient(
    #fafafa 0%,
    #fafafa 40%,
    #fffd99 40%,
    #fffd99 60%
  );
  width: 100%;
  height: 50%;
  transition: all 200ms ease-out;
  border: 1px solid #40341d;
  box-sizing: border-box;
  box-shadow: inset 0.1rem 0 0.1rem 0.1rem rgba(255, 255, 200, 0.5);
}
.wings .wing.wing-a {
  z-index: 2;
  transform-origin: bottom right;
  top: 0;
  border-radius: 90% 30% 0 20%;
}
.wings .wing-opacity.wing-a {
  z-index: 1;
  transform-origin: bottom right;
  top: 0;
  border-radius: 90% 30% 0 20%;
  background-color: rgba(255, 255, 255, 0.5);
}
.wings .wing.wing-b {
  z-index: 2;
  transform-origin: top right;
  top: 50%;
  border-radius: 20% 0 30% 90%;
}
.wings .wing-opacity.wing-b {
  z-index: 1;
  transform-origin: top right;
  top: 50%;
  border-radius: 20% 0 30% 90%;
  background-color: rgba(255, 255, 255, 0.5);
}
@keyframes flicker {
  0%,
  100% {
    background: #fefa01;
    box-shadow: 0 0 1rem #fefa01,
      inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
  }
  30%,
  70% {
    background: #fffd99;
    box-shadow: -1rem 0 8rem 1rem #fefa01,
      inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
  }
  50% {
    box-shadow: -1rem 0 8rem 1rem rgba(254, 250, 1, 0.8),
      inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
  }
}
@keyframes shock-a {
  0%,
  100% {
    transform: rotate(0deg);
  }
  10%,
  90% {
    transform: rotate(6deg);
  }
  20%,
  80% {
    transform: rotate(12deg);
  }
  30%,
  70% {
    transform: rotate(18deg);
  }
  40%,
  60% {
    transform: rotate(24deg);
  }
  50% {
    transform: rotate(30deg);
  }
}
@keyframes shock-b {
  0%,
  100% {
    transform: rotate(0deg);
  }
  10%,
  90% {
    transform: rotate(-6deg);
  }
  20%,
  80% {
    transform: rotate(-12deg);
  }
  30%,
  70% {
    transform: rotate(-18deg);
  }
  40%,
  60% {
    transform: rotate(-24deg);
  }
  50% {
    transform: rotate(-30deg);
  }
}
@keyframes Tentacles-a {
  0%,
  100% {
    border-radius: 0 100% 100% 100%;
  }
  50% {
    border-radius: 0 100% 100% 95%;
  }
}
@keyframes Tentacles-b {
  0%,
  100% {
    border-radius: 95% 100% 100% 0;
  }
  50% {
    border-radius: 100% 100% 100% 0;
  }
}
</style>
