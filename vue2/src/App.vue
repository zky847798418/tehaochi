<template>
  <div id="app" >
    <transition name="fade" mode="out-in">
      <router-view></router-view>
      <!--<keep-alive include="home">-->
       <!---->
      <!--</keep-alive>-->
    </transition>

  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
    /*font-family: -apple-system-font,Helvetica Neue,sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    color: #2c3e50;
}
</style>
