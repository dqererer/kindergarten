<template>
  <div class="Slide">
    <div class="list">
      <div class="item slide" v-for='(item,index) in list' v-bind:key="index">
        <img :src="item.img">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Slide',
  components: {
  },
  data: function(){
    return{
    }
  },
  props: {
    list:{
      type: Array,
      required: true,
    }
  },
  computed: {

  }, 
  created: function(){
    console.log(this.list)
  },
  mounted: function(){
    
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Slide .list{
  width: 38rem;
  display: flex;
  overflow: hidden;
}
/* @keyframes slide
{
from {left: 0;}
to {left: 21rem;}
}
@-webkit-keyframes slide /* Safari and Chrome */
/* {
from {left: 0;}
to {left: 21rem;}
}  */
.Slide .list .item{
  padding: 2rem;
  /* animation: slide 5s; */
  /* -moz-animation: slide 5s;	Firefox */
  /* -webkit-animation: slide 5s;	/* Safari 和 Chrome */
  /* -o-animation: slide 5s;	Opera */ 
}
.Slide .list .item {  
  padding: 2rem;  
}
.slide{
  transform:translate(-12rem,0);    
  -webkit-transform:translate(-12rem,0);      
  -moz-transform:translate(-12rem,0);
  -o-transform:translate(-12rem,0);   
  -ms-transform:translate(-12rem,0); 
}

.Slide .list .item img{
  width: 36rem;
}

</style>
