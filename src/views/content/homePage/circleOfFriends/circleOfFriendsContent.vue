<template>
  <!-- 朋友圈发布的内容显示 -->
  <div class="circleOfFriendsContent">
    <div class="description">
      <!-- 做文字转换成图片emoji -->
      <img src="http://qzonestyle.gtimg.cn/qzone/em/e176.png" title="">各位家长大家好，为了回馈各位学生家长长期以来对新航标教育的信任与支持，新航标教育将于国庆期间开展免费公益课堂。帮助学生巩固新知识，以更好的状态迎接即将到来的第一次阶段考。
      <img src="http://qzonestyle.gtimg.cn/qzone/em/e400198.gif" title="">
      <img src="http://qzonestyle.gtimg.cn/qzone/em/e400198.gif" title="">
      <img src="http://qzonestyle.gtimg.cn/qzone/em/e400198.gif" title="">
      <br>
      <img src="http://qzonestyle.gtimg.cn/qzone/em/e163.png" title=""> 开课时间10月1日到5日
      <br>早上8.30到10点高一数学 （重点复习必修一函数的概念基本性质）
      <br> 早上10点到11.30高一
      <a href="javascript:;" data-cmd="qz_toggle" data-pos="1">展开全文</a>
      <!-- <img src="http://qzonestyle.gtimg.cn/qzone_v6/img/feed/loading.gif" class="load_img none"> -->
    </div>
    <div class="images">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item.src">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="action">
      <span class="button">
        <i class="ion-android-textsms"></i> 评论
      </span>
      <span class="button">
        <i :class="isStart?'el-icon-star-off':'el-icon-star-on'"></i> 赞
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "circleOfFriendsContent",
    directives: {},
    components: {},
    data() {
      return {
        images: [{
          src: "http://a4.qpic.cn/psb?/V12rT0Bg3JXlvv/Iq.2yw5AYnOF0..mPIz8dmItuZ*m19s0jSDcJMZ35VU!/m/dPMAAAAAAAAA&amp;ek=1&amp;kp=1&amp;pt=0&amp;bo=LAQgAwAAAAARADw!&amp;t=5&amp;vuin=735359571&amp;tm=1506754800&amp;sce=60-4-3&amp;rf=0-0",
          descrition: ""
        }, {
          src: "http://a4.qpic.cn/psb?/V12rT0Bg3JXlvv/BWL37kqc1o5l*FcJUts4VtUDSDytzuEGcVTjHmuu3MA!/m/dPMAAAAAAAAA&amp;ek=1&amp;kp=1&amp;pt=0&amp;bo=LAQgAwAAAAARADw!&amp;t=5&amp;vuin=735359571&amp;tm=1506754800&amp;sce=60-4-3&amp;rf=0-0",
          descrition: ""
        }, {
          src: "http://a3.qpic.cn/psb?/V12rT0Bg3JXlvv/pl7.MsbBh7bJ.byVU*LB.6PVxpY.8Urhe2Yl8i0r*Ck!/m/dPIAAAAAAAAA&amp;ek=1&amp;kp=1&amp;pt=0&amp;bo=6APoAwAAAAARADc!&amp;t=5&amp;vuin=735359571&amp;tm=1506754800&amp;sce=60-4-3&amp;rf=0-0",
          descrition: ""
        }],
        isStart: false,
      }
    },
    props: {
      content: Object,
    },
    computed: {},
    watch: {},
    methods: {
      start() {

      },
      unStart() {

      },
      addComment() {

      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {}
  }

</script>
<style lang="css">
  .circleOfFriendsContent .images .el-carousel__mask {
    background-color: rgba(211, 220, 230, 0.3)!important;
  }

</style>
<style lang="css" scoped>
  .action {
    font-size: 18px;
    height: 30px;
    width: 100%;
  }

  .button {
    float: right;
    margin: 0 5px;
  }

  .button i {
    cursor: pointer;
  }

</style>
