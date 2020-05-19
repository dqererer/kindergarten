<template>
  <div class="Search-bar">
    <router-link to="/Search">
      <input type="text">
      <span id="111">sss</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  components: {
  },
  mounted: function(){
    document.getElementById('111').onclick = this.getAlert;
  },
  methods:{
    getAlert: function (){
      alert(1);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
    height: 1.5rem;
    width: 16rem;
    border: solid #b1b4b9 0.05rem;
    border-radius: 1rem;
}
</style>
