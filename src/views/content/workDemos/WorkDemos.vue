<template>
  <div class="workDemos">
    <el-scrollbar tag="ul" wrap-class="el-autocomplete-suggestion__wrap" view-class="el-autocomplete-suggestion__list">
      <div class="frame" v-for="(demo,index) in demos" :key="index" v-html="'<'+demo.name+' class=frameDemo @click=router('+demo.name+')></'+demo.name+'>'">
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
  import particles from '../../../components/particles/particles'
  import balloon from '../../../components/balloon/balloon'
  import firefly from '../../../components/fireFly/firefly'
  export default {
    name: "workDemos",
    directives: {},
    components: {
      particles,
      balloon,
      firefly
    },
    data() {
      return {
        demos: [{
          name: 'particles',
        }, {
          name: 'balloon',
        }, {
          name: 'firefly',
        }],
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      router(path) {
        window.open(location.origin + "/#/" + path)
      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css">
  .workDemos .frame .frameDemo {
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>
<style lang="css" scoped>
  .workDemos {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .frame {
    position: relative;
    float: left;
    width: 24%;
    height: 24%;
    margin: 25px;
    min-height: 200px;
    min-width: 300px;
  }

</style>
