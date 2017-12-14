<template>
  <div class="photoWall" id="jssor_1" style="position: relative; float: right;margin: 0 auto; left: 0px; width: 1440px;height: 720px; overflow: hidden; visibility: hidden; background-color: #24262e;">
    <!-- Loading Screen -->
    <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
      <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
      <div style="position:absolute;display:block;background:url('../../../static/images/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
    </div>
    <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 360px; width: 1080px!important; height: 720px; overflow: hidden;">
      <div v-for="(photo,index) in photoList.images" :key="photo" data-p="150.00" :style="index==0?'':'display: none;'">
        <img data-u="image" :src="photo.imageUrl" />
        <img data-u="thumb" :src="photo.imageUrl" />
      </div>
    </div>
    <!-- Thumbnail Navigator -->
    <div data-u="thumbnavigator" class="abbreviated" style="position:absolute;left:0px;top:0px;width:360px;height:720px;" data-autocenter="2">
      <!-- Thumbnail Item Skin Begin -->
      <div data-u="slides" style="cursor: default;">
        <div data-u="prototype" class="p">
          <div class="w">
            <div data-u="thumbnailtemplate" class="t"></div>
          </div>
          <div class="c"></div>
        </div>
      </div>
      <!-- Thumbnail Item Skin End -->
    </div>
    <!-- Arrow Navigator -->
    <span data-u="arrowleft" class="jssora05l" style="top:0px;left:365px;width:40px;height:40px;" data-autocenter="2"></span>
    <span data-u="arrowright" class="jssora05r" style="top:0px;right:8px;width:40px;height:40px;" data-autocenter="2"></span>
  </div>
</template>
<script>
  export default {
    name: "photoWall",
    directives: {},
    components: {},
    data() {
      return {
        jssor_1_slider: null,
        //样式
        jssor_1_SlideshowTransitions: [{
          $Duration: 1200,
          $Zoom: 1,
          $Easing: {
            $Zoom: $Jease$.$InCubic,
            $Opacity: $Jease$.$OutQuad
          },
          $Opacity: 2
        }, {
          $Duration: 1000,
          $Zoom: 11,
          $SlideOut: true,
          $Easing: {
            $Zoom: $Jease$.$InExpo,
            $Opacity: $Jease$.$Linear
          },
          $Opacity: 2
        }, {
          $Duration: 1200,
          $Zoom: 1,
          $Rotate: 1,
          $During: {
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
          },
          $Easing: {
            $Zoom: $Jease$.$Swing,
            $Opacity: $Jease$.$Linear,
            $Rotate: $Jease$.$Swing
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.5
          }
        }, {
          $Duration: 1000,
          $Zoom: 11,
          $Rotate: 1,
          $SlideOut: true,
          $Easing: {
            $Zoom: $Jease$.$InExpo,
            $Opacity: $Jease$.$Linear,
            $Rotate: $Jease$.$InExpo
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.8
          }
        }, {
          $Duration: 1200,
          x: 0.5,
          $Cols: 2,
          $Zoom: 1,
          $Assembly: 2049,
          $ChessMode: {
            $Column: 15
          },
          $Easing: {
            $Left: $Jease$.$InCubic,
            $Zoom: $Jease$.$InCubic,
            $Opacity: $Jease$.$Linear
          },
          $Opacity: 2
        }, {
          $Duration: 1200,
          x: 4,
          $Cols: 2,
          $Zoom: 11,
          $SlideOut: true,
          $Assembly: 2049,
          $ChessMode: {
            $Column: 15
          },
          $Easing: {
            $Left: $Jease$.$InExpo,
            $Zoom: $Jease$.$InExpo,
            $Opacity: $Jease$.$Linear
          },
          $Opacity: 2
        }, {
          $Duration: 1200,
          x: 0.6,
          $Zoom: 1,
          $Rotate: 1,
          $During: {
            $Left: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
          },
          $Easing: {
            $Left: $Jease$.$Swing,
            $Zoom: $Jease$.$Swing,
            $Opacity: $Jease$.$Linear,
            $Rotate: $Jease$.$Swing
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.5
          }
        }, {
          $Duration: 1000,
          x: -4,
          $Zoom: 11,
          $Rotate: 1,
          $SlideOut: true,
          $Easing: {
            $Left: $Jease$.$InExpo,
            $Zoom: $Jease$.$InExpo,
            $Opacity: $Jease$.$Linear,
            $Rotate: $Jease$.$InExpo
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.8
          }
        }, {
          $Duration: 1200,
          x: -0.6,
          $Zoom: 1,
          $Rotate: 1,
          $During: {
            $Left: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
          },
          $Easing: {
            $Left: $Jease$.$Swing,
            $Zoom: $Jease$.$Swing,
            $Opacity: $Jease$.$Linear,
            $Rotate: $Jease$.$Swing
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.5
          }
        }, {
          $Duration: 1000,
          x: 4,
          $Zoom: 11,
          $Rotate: 1,
          $SlideOut: true,
          $Easing: {
            $Left: $Jease$.$InExpo,
            $Zoom: $Jease$.$InExpo,
            $Opacity: $Jease$.$Linear,
            $Rotate: $Jease$.$InExpo
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.8
          }
        }, {
          $Duration: 1200,
          x: 0.5,
          y: 0.3,
          $Cols: 2,
          $Zoom: 1,
          $Rotate: 1,
          $Assembly: 2049,
          $ChessMode: {
            $Column: 15
          },
          $Easing: {
            $Left: $Jease$.$InCubic,
            $Top: $Jease$.$InCubic,
            $Zoom: $Jease$.$InCubic,
            $Opacity: $Jease$.$OutQuad,
            $Rotate: $Jease$.$InCubic
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.7
          }
        }, {
          $Duration: 1000,
          x: 0.5,
          y: 0.3,
          $Cols: 2,
          $Zoom: 1,
          $Rotate: 1,
          $SlideOut: true,
          $Assembly: 2049,
          $ChessMode: {
            $Column: 15
          },
          $Easing: {
            $Left: $Jease$.$InExpo,
            $Top: $Jease$.$InExpo,
            $Zoom: $Jease$.$InExpo,
            $Opacity: $Jease$.$Linear,
            $Rotate: $Jease$.$InExpo
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.7
          }
        }, {
          $Duration: 1200,
          x: -4,
          y: 2,
          $Rows: 2,
          $Zoom: 11,
          $Rotate: 1,
          $Assembly: 2049,
          $ChessMode: {
            $Row: 28
          },
          $Easing: {
            $Left: $Jease$.$InCubic,
            $Top: $Jease$.$InCubic,
            $Zoom: $Jease$.$InCubic,
            $Opacity: $Jease$.$OutQuad,
            $Rotate: $Jease$.$InCubic
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.7
          }
        }, {
          $Duration: 1200,
          x: 1,
          y: 2,
          $Cols: 2,
          $Zoom: 11,
          $Rotate: 1,
          $Assembly: 2049,
          $ChessMode: {
            $Column: 19
          },
          $Easing: {
            $Left: $Jease$.$InCubic,
            $Top: $Jease$.$InCubic,
            $Zoom: $Jease$.$InCubic,
            $Opacity: $Jease$.$OutQuad,
            $Rotate: $Jease$.$InCubic
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 0.8
          }
        }]
      }
    },
    props: {
      //不能后渲染
      photoList: Object,
    },
    computed: {},
    watch: {},
    methods: {
      ScaleSlider() {
        let vm = this;
        let transtions = [];
        let j;
        let length = vm.jssor_1_SlideshowTransitions.length;
        for (let i = 0; i < vm.photoList.images.length; i++) {
          j = Math.random() * length
          transtions.push(vm.jssor_1_SlideshowTransitions[~~j])
        }
        let jssor_1_options = {
          $AutoPlay: true,
          $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: transtions,
            $TransitionsOrder: 1
          },
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
          },
          $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,
            $Rows: 2,
            $Cols: 6,
            $SpacingX: 14,
            $SpacingY: 12,
            $Orientation: 2,
            $Align: 156
          }
        };
        vm.jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
        if (vm.jssor_1_slider.$Elmt.parentNode == null) return
        let refWidth = vm.jssor_1_slider.$Elmt.parentNode.clientWidth;
        let refHeight = vm.jssor_1_slider.$Elmt.parentNode.clientHeight;
        if (refWidth && refHeight) {
          //  refWidth = Math.min(refWidth, 1440);
          //  refWidth = Math.max(refWidth, 450);
          // vm.jssor_1_slider.$ScaleWidth(refWidth);
          //vm.jssor_1_slider.$ScaleHeight(refHeight);//保持纵横比
          vm.jssor_1_slider.$ScaleSize(refWidth, refHeight) //不保持纵横比
        };
      },
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
      let vm = this
      this.ScaleSlider();
      window.onresize = () => {
        if (vm.jssor_1_slider.$Elmt.parentNode == null) return
        let refWidth = vm.jssor_1_slider.$Elmt.parentNode.clientWidth;
        let refHeight = vm.jssor_1_slider.$Elmt.parentNode.clientHeight;
        if (refWidth && refHeight) {
          //  refWidth = Math.min(refWidth, 1440);
          //  refWidth = Math.max(refWidth, 450);
          // vm.jssor_1_slider.$ScaleWidth(refWidth);
          //vm.jssor_1_slider.$ScaleHeight(refHeight);//保持纵横比
          vm.jssor_1_slider.$ScaleSize(refWidth, refHeight)
        };
      }

    }
  }

</script>
<style lang="css" scoped>
  .jssora05l,
  .jssora05r {
    display: block;
    position: absolute;
    /* size of arrow element */
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: url('../../../../static/images/a17.png') no-repeat;
    overflow: hidden;
  }

  .jssora05l {
    background-position: -10px -40px;
  }

  .jssora05r {
    background-position: -70px -40px;
  }

  .jssora05l:hover {
    background-position: -130px -40px;
  }

  .jssora05r:hover {
    background-position: -190px -40px;
  }

  .jssora05l.jssora05ldn {
    background-position: -250px -40px;
  }

  .jssora05r.jssora05rdn {
    background-position: -310px -40px;
  }

  .jssora05l.jssora05lds {
    background-position: -10px -40px;
    opacity: .3;
    pointer-events: none;
  }

  .jssora05r.jssora05rds {
    background-position: -70px -40px;
    opacity: .3;
    pointer-events: none;
  }

  .abbreviated .p {
    position: absolute;
    top: 0;
    left: 0;
    width: 149px;
    height: 99px;
  }

  .abbreviated .t {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .abbreviated .w {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  .abbreviated .c {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 145px;
    height: 95px;
    border: #000 2px solid;
    box-sizing: content-box;
    background: url('../../../../static/images/t01.png') -800px -800px no-repeat;
    _background: none;
  }

  .abbreviated .pav .c {
    top: 2px;
    _top: 0px;
    left: 2px;
    _left: 0px;
    width: 145px;
    height: 95px;
    border: #000 0px solid;
    _border: #fff 2px solid;
    background-position: 50% 50%;
  }

  .abbreviated .p:hover .c {
    top: 0px;
    left: 0px;
    width: 147px;
    height: 96px;
    border: #fff 1px solid;
    background-position: 50% 50%;
  }

  .abbreviated .p.pdn .c {
    background-position: 50% 50%;
    width: 145px;
    height: 95px;
    border: #000 2px solid;
  }

  * html .abbreviated .c,
  * html .abbreviated .pdn .c,
  * html .abbreviated .pav .c {
    /* ie quirks mode adjust */
    width: 149px;
    height: 99px;
  }

</style>
