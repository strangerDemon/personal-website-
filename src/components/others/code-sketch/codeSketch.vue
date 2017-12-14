<template>
  <div class="sketch">
    <!-- background clock -->
    <canvas class="sketch-clock"></canvas>
    <!-- 照片墙的事件流 -->
    <section class="sketch-main">
      <sketch-content v-for="(sketch,index) in sketchList" :key="sketch" :sketch="sketch"></sketch-content>
    </section>
  </div>
</template>
<script>
  import sketchContent from './sketchContent'
  export default {
    name: "sketch",
    directives: {},
    components: {
      sketchContent
    },
    data() {
      return {
        sketchList: [{
            id: "0",
            dayNumber: "0",
            title: "WebGL Particle Animation..",
            imageUrl: "../../../static/libs/code-sketch/images/day54.jpg"
          },
          {
            id: "1",
            dayNumber: "1",
            title: "Image Gallery.",
            imageUrl: "../../../static/libs/code-sketch/images/day53.jpg"
          },
          {
            id: "2",
            dayNumber: "2",
            title: "Image slider.",
            imageUrl: "../../../static/libs/code-sketch/images/day52.jpg"
          },
          {
            id: "3",
            dayNumber: "3",
            title: "Color.",
            imageUrl: "../../../static/libs/code-sketch/images/day51.jpg"
          },
          {
            id: "4",
            dayNumber: "4",
            title: "awwwards logo animation.",
            imageUrl: "../../../static/libs/code-sketch/images/day50.png"
          },
          {
            id: "5",
            dayNumber: "5",
            title: "Typography Animation.",
            imageUrl: "../../../static/libs/code-sketch/images/day49.png"
          },
          {
            id: "6",
            dayNumber: "6",
            title: "undefined.",
            imageUrl: "../../../static/libs/code-sketch/images/day48.png"
          },
        ],
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {

    },
  }

</script>
<style lang="css" scoped>
  .sketch {
    height: 100%;
  }

  .sketch .sketch-clock {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .sketch .sketch-main {
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>
