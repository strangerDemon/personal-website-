<template>
  <div class="moveCard">
    <div id="card" class="card"></div>
  </div>
</template>
<script>
export default {
  name: "moveCard",
  directives: {},
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  watch: {},
  methods: {},
  beforeCreate() {},
  created() {},
  destroyed() {},
  mounted() {
    $("#card").on("mouseover", function(event) {
      let x = event.pageX - this.offsetLeft,
        y = event.pageY - this.offsetTop;
      let centerX = $(this).outerWidth() / 2,
        centerY = $(this).outerHeight() / 2;

      let deltaX = x - centerX,
        deltaY = y - centerY;
      let percentX = deltaX / centerX,
        percentY = deltaY / centerY;
      let deg = 30;
      let transform =
        "rotateX(" +
        deg * -percentY +
        "deg) rotateY(" +
        deg * percentX +
        "deg) scale3d(.9, .9, .9)";
      $("#card").css({
        transform: transform
      });
    });
  }
};
</script>
<style lang="postcss"
       scoped>
.moveCard {
  width: 100%;
  height: 100%;
  & .card {
    width: 100%;
    height: 100%;
    position: absoulte;
    background: url(/static/images/demo.gif); /* no-repeat;*/
    text-align: center;
    transform: scale3d(0.8, 0.8, 0.8);
    transition: 0.1s;
  }
}
</style>