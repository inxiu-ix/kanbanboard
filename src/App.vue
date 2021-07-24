<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  async created() {},
};
</script>

<style>
#app {
  display: flex;
  height: 100%;
  position: relative;
  z-index: 1;
  font-family: 'Oswald', sans-serif;
  background-color: #35383f;
}
</style>
