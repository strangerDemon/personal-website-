<template>
  <div class="index">
    <div class="background">
      <particles></particles>
    </div>
    <work-demos></work-demos>
  </div>
</template>

<script>
import particles from "@/components/others/particles/particles";
import WorkDemos from "./workDemos/WorkDemos.vue";
export default {
  name: "index",
  directives: {},
  components: {
    particles,
    WorkDemos
  },
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

<style lang="css">
.index {
  position: relative;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  margin: 0 0 0 0;
}
</style>
