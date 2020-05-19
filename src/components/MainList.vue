<template>
  <div class="MainList">
    <div class="ul">
      <div class="li" v-for="(item,index) in list" v-bind:key= "index">
        {{item.name}}
      </div>
    </div>
    
  </div>
</template>

<script>

var pubKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChgYYVTmLHci16xJEhy0wHjNBDTQZYCWJtVKT4eIlZJZEadh8HSDKmEC1fTHI8TWETCbX64gVANhadvCVU6cmDAW9T6U9GCZSlimQrunYBhP+O1RbHxGlkJ74HJ5Lmkt+eyIhBGKoVGvh08IULmZm+G2DEMleRj8rmhUcxZrsrQwIDAQAB';
var encorpt = function (param,type){
    // return param;
  if(param == null || param == undefined){
    return null;
  }
  if(typeof param == "number") {
    param = param.toString()
  }
  var flag = 1;
    // 参数比较少的加密
  if(flag == 1&& type =="simple"){
    var encrypt = new JSEncrypt();
    // var pubKey=window.sessionStorage.getItem("publicKey");
    encrypt.setPublicKey(pubKey);
    return encrypt.encrypt(param);
  }
    // 参数比较多的加密
  if(flag == 1&& type =="complex"){
      return '__Dcrypt__'+encodeURI(param);
  }
    // 不加密
  if(flag == 1&& type =="no"){
      return '__Nocrypt__'+param;
  }
}

// import axios from 'axios';
export default {
  name: 'MainList',
  components: {
  },
  data: function(){
    return{
      list:[{name:1},{name:2}],
    }
  },
  created: function(){ 
    
    this.$axios.post('/apix/nurserymanage/queryonenurseryinfo', {
      nurseryId: encorpt("518",'simple'),
      // yearId: 6
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
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
