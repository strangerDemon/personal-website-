<template>
  <div class="index">
    <div class="background">
      <balloon v-if="backgroundIndex==0"></balloon>
      <particles v-else-if="backgroundIndex==1"></particles>
    </div>
    <main-content></main-content>
    <router></router>
  </div>
</template>

<script>
  import particles from '@/components/others/particles/particles'
  import balloon from '../components/c3Animation/balloon/balloon'
  import mainContent from './MainContent'
  import router from './Router'
  export default {
    name: 'index',
    directives: {},
    components: {
      particles,
      balloon,
      mainContent,
      router
    },
    data() {
      return {
        backgroundIndex: ~~(Math.random() * 2)
      }
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
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    margin: 0 0 0 0;
  }

</style>
