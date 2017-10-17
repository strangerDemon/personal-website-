<template>
  <div class="heartLoading">
    <div class="heart0"></div>
    <div class="heart1"></div>
    <div class="heart2"></div>
    <div class="heart3"></div>
    <div class="heart4"></div>
    <div class="heart5"></div>
    <div class="heart6"></div>
    <div class="heart7"></div>
    <div class="heart8"></div>
  </div>
</template>
<script>
  export default {
    name: "heartLoading",
    directives: {},
    components: {},
    data() {
      return {}
    },
    props: {},
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
  .heartLoaing {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #262e6f;
  }

  [class*-"heart-"] {
    position: absolute;
    width: 10px;
    height: 10px;
    top: -5px;
    border-radius: 50%;
    color: red;
  }

  heart-0,
  heart-8 {
    animation-delay: 2s;
  }

  heart-1,
  heart-7 {
    animation-delay: 1.5s;
  }

  heart-2,
  heart-6 {
    animation-delay: 1s;
  }

  heart-3,
  heart-5 {
    animation-delay: 0.5s;
  }

  heart-0{
    left:50%;
  }
</style>
