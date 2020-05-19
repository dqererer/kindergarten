<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from './components/Index.vue';
// import Search from './components/Search.vue';

export default {
  name: 'app',
  components: {
    // Index,
    // Search
  },
  // beforeRouteLeave (to, from, next) {
  //   // console.log(from)
  //   alert(1)
  //   next()
  // },
  // beforeRouteEnter (to, from, next) {
  //   alert('before')
  //   next()
  // },
  // beforeRouteUpdate (to, from, next) {
  //   alert('update')
  //   next()
  // }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding-top:30px ;
  box-sizing: border-box;
}
</style>
