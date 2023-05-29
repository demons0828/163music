<template>
  <div id="app">
   <header-top></header-top>
    <red-menu></red-menu>
    <main-music></main-music>

  </div>
</template>

<script>
 import HeaderTop from './components/HeaderTop.vue'
 import RedMenu from './components/RedMenu.vue'
 import MainMusic from './components/MainMusic.vue'

 export default{
    name: 'App',
    components: {
      HeaderTop,
      RedMenu,
      MainMusic
   


    }
 }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

</style>
