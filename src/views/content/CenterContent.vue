<template>
  <div class="content">
    <photo-wall></photo-wall>
  </div>
</template>
<script>
  import photoWall from '../../components/photoWall/photoWall'
  export default {
    name: "content",
    directives: {},
    components: {
      photoWall
    },
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
  .content {
    position: absolute;
    top: 100px;
    bottom: 40px;
    width: 100%;
    height:calc(100vh - 140px)
  }
</style>
