<template>
  <div class="albumPage">
    <!-- to do ablum list -->
    <photo-transit v-if="showPhotoWall" :albumId="ablumId"></photo-transit>
  </div>
</template>
<script>
  import photoTransit from '../../../components/photoWall/photoTransit.vue'
  export default {
    name: "albumPage",
    directives: {},
    components: {
      photoTransit
    },
    data() {
      return {
        ablumId: "0",
        showPhotoWall: true,
      }
    },
    props: {},
    computed: {

    },
    watch: {},
    methods: {

    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css" scoped>
  .albumPage {
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>
