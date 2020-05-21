<template>
  <div class="Search">
    <input type="text" class="num1"> + <input type="text" class="num2"> <div class="add"> = </div> <span></span>
  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {
  },
  mounted: function(){
    // console.log(document.getElementsByClassName('add')[0]);
    document.getElementsByClassName('add')[0].onclick = function(){
      console.log(document.getElementsByClassName('num1')[0]);
      let num1 = document.getElementsByClassName('num1')[0].value;
      let num2 = document.getElementsByClassName('num2')[0].value;
      let sum = parseInt(num1) + parseInt(num2);
      document.getElementsByTagName('span')[0].innerText = sum;
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Search{
  display: flex;

}
</style>
