<template>
  <div class="topBar">
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    name: "topBar",
    directives: {},
    components: {},
    data() {
      return {}
    },
    props: {},
    computed: {
      ...mapState(['']),
      ...mapGetters(['']),
    },
    watch: {},
    methods: {},
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css" scoped>
  .topBar {
    position: relative;
    height: 100px;
    background-color: #1D8CE0;
  }

</style>
