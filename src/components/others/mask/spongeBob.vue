<template>
    <div class='sponge-bob'>
    </div>
</template>
<script>
export default {
  name: "spongeBob",
  directives: {},
  components: {},
  props: {},
  data() {
    return {};
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
.sponge-bob {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/static/images/bg.jpg");
  background-size: cover;
  mask-size: cover;
  /* mask: url("/static/images/spongeBob.gif"); */
  mask-border: url("/static/images/spongeBob.gif") 150; 
  /* source | slice */
  /* mask-border: url("border-mask.png") 25; */
  /* source | slice | repeat */
  /* mask-border: url("border-mask.png") 25 space; */
  /* source | slice | width */
  /* mask-border: url("border-mask.png") 25 / 35px; */
  /* source | slice | width | outset | repeat | mode */
  /* mask-border: url("border-mask.png") 25 / 35px / 12px space alpha; */
  /* mask-size:center; */
  mask-repeat: no-repeat;
  margin: 0 auto;
}
</style>