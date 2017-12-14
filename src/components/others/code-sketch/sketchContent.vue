<template>
  <div class="sketchContent" :id="'work-'+sketch.id" :data-id="sketch.id" style="z-index: 69; display: none; transform: perspective(500px) translate3d(349.934px, 436.566px, 0px) scale(0.542344); isplay: block;">
    <div class="work-inside-container">
      <div class="work">
        <!--front-->
        <div class="front">
          <!--<div class="work" >-->

          <div class="work-image"><img :src="sketch.imageUrl" style="opacity: 1;"></div>
          <div class="triangle"></div>
          <div class="work-header">
            <span class="day">Day<br></span>
            <span class="number">{{sketch.dayNumber}}</span>
          </div>
          <!--</div>-->

          <div class="wrap clearfix work-img-loader  " style="opacity: 0; display: none;">
            <ul class="rotate_wrapper">
              <li class="rotate_item"><span></span></li>
              <li class="rotate_item delay1"><span></span></li>
              <li class="rotate_item delay2"><span></span></li>
              <li class="rotate_item delay3"><span></span></li>
              <li class="rotate_item delay4"><span></span></li>
            </ul>
          </div>

        </div>

        <div class="back">
          <div class="ks-back-title">
            gl particle sns icons.
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "sketchContent",
    directives: {},
    components: {},
    data() {
      return {}
    },
    props: {
      sketch: {
        type: Object,
        default: {
            id:"0",
            dayNumber:"1",
            title:"",
            imageUrl:"",
        }
      }
    },
    computed: {},
    watch: {},
    methods: {},
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css" scoped>


</style>
