<template>
  <div class="index">
    <particles></particles>
  </div>
</template>

<script>
  import particles from '../components/particles/particles'
  export default {
    name: 'index',
    directives: {},
    components: {
      particles
    },
    data() {
      return {}
    },

    computed: {

    },
    watch: {},
    methods: {

    },
    brforeCreate() {},
    created() {},
    mounted() {},
    beforeDestroy() {}
  }

</script>

<style lang="css">
  .index {
    position: relative;
    top:0px;
    left:0px;
    height: 100%;
    width: 100%;
    margin: 0 0 0 0;
  }

</style>
