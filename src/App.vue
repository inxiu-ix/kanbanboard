<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  async created() {
   
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1200px;
  
}
@media (max-width: 768px) {
  #app {
    min-width: 768px;
  }
}

@media (max-width: 576px) {
  #app {
    min-width: 320px;
  }
}
</style>
