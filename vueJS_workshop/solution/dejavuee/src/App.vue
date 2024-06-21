<template>
  <div class="container">
    <div class="row">
      <Friends />
    </div>
    <div class="row">
      <Products />
    </div>
  </div>
</template>

<script>
import Friends from '@/components/Friends.vue'
// import Products from '@/components/Products.vue'
export default {
  name: 'App',
  components: {
    Friends
    // Products
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>