<template>
  <div class="index">
    <bolloon></bolloon>
    <!-- <particles></particles> -->
    <main-content></main-content>
    <router></router>
  </div>
</template>

<script>
  import particles from '../components/particles/particles'
  import bolloon from '../components/bolloon/bolloon.vue'
  import mainContent from './MainContent'
  import router from './Router'
  export default {
    name: 'index',
    directives: {},
    components: {
      particles,
      bolloon,
      mainContent,
      router
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
