<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Locations from './components/MainContent.vue'
import Products from './components/Header.vue'
import Home from './components/Footer.vue'
</script>

<template>
  <!-- <Header />
  <MainContent />
  <Footer /> -->

  
  <router-view></router-view>
</template>

<style>
#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>