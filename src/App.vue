<template>
  <div id="app" class="container p-3">
    <app-header></app-header>

      <router-view></router-view>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
