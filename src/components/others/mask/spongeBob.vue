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
  /* mask-size: cover; */
  mask: url("/static/images/spongeBob.gif");
  mask-size:center;
  mask-repeat: no-repeat;
}
</style>