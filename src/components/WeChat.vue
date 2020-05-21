<template>
  <div class="WeChat">
    <div class="chat-list">
      <div class="chat-item left">
        <div class="icon">
          <img src="../assets/img/icon_boy.jpg" alt="">
        </div>
        <div class="message">lslslslslsl</div>
      </div>
    </div>
    <div class="footer">
      <div class="account">
        <img src="../assets/img/icon_boy.jpg" alt="">
      </div>
      <input type="text">
      <div class="submit">发送</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeChat',
  components: {
  },
  mounted: function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.WeChat .footer{
  position: fixed;
  bottom: 0;
  height: 3.5rem;
  width: 100%;
  /* 为啥还差一块 */
  background: #f4f4f5;
  border-top: 0.1rem #ebeef5 solid;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
.WeChat .footer .account img{
  width: 3rem;
  height: 2.5rem;
}
.WeChat .footer input{
  height: 2rem;
  width: 16rem;
  border-radius: 0.5rem;
  border: 0;
}
.chat-list{
  padding: 2rem;
  box-sizing: border-box;
}
.chat-list .left{
  display: flex;
  align-items: center;
  justify-content: start;
}
/* .chat-list .chat-item .icon::after{
  content: '';
  display: block;
  height: 1rem;
  width: 2rem;
} */
.chat-list .chat-item .icon img{
  width: 2rem;
}
.chat-list .chat-item .message{
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  background: #99e274;
  padding: 0 2rem;
}
</style>
