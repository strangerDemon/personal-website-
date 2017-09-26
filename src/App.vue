<template>
  <router-view class='index'>
  </router-view>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0 0 0 0;
    overflow-y:hidden!important;
  }

  html {
    font-family: Arial, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  body {
    font-size: 12px;
    line-height: 1.5;
    color: #565656;
    word-wrap: break-word
  }

  * {
    box-sizing: border-box;
  }

</style>
