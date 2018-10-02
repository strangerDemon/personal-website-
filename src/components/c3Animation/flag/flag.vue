<template>
    <div class='flag-contain'>
        <div class="pole"></div>
        <div class="flag"></div>
    </div>
</template>
<script>
export default {
  name: "flag-contain",
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
.flag-contain {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  .pole {
    position: absolute;
    width: 20px;
    height: 80%;
    margin: 0 auto;
    bottom: 10%;
    left: 25%;
    background-color: silver;
  }
  .pole::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: silver;
    transform: translate(-25%, -100%);
  }
  .pole::after {
    content: "";
  }
  .flag {
  }
}
</style>