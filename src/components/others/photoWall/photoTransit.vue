<template>
  <div class="photoTransit">
    <photo-wall v-if="photoList" :photoList="photoList"></photo-wall>
  </div>
</template>
<script>
  import photoWall from './photoWall'
  export default {
    name: "photoTransit",
    directives: {},
    components: {
      photoWall
    },
    data() {
      return {
        photoList: null
      }
    },
    props: {
      albumId: "",
    },
    computed: {
      photoLists() {
        return this.$store.state.photoParam.photoLists
      }
    },
    watch: {},
    methods: {
      selectAlbum() {
        let vm = this
        if (vm.albumId) {
          vm.photoLists.forEach(function (element) {
            if (element.albumId == vm.albumId) {
              vm.photoList = element
            }
          }, this);
        }
      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
      this.selectAlbum()
    }
  }

</script>
<style lang="css" scoped>
  .photoTransit {
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>
