<template>
  <div class="WeChat" @click="hideMenu">
    <div class="store">收藏 {{storeList.length}}</div>
    <div class="chat-list" ref="chat">
      <div class="chat-item" v-for="(item,index) in messageList" v-bind:key = "index">
        <div :class="item.isMale?'icon left':'icon right'">
          <img :src='item.imgURL'>
        </div>
        <div class="icon right"></div>
        <div :class="item.isMale?'message left':'message right'">
          <span @touchstart.prevent="startTime" @touchend.prevent="endTime(index)">{{item.message}}</span>
          <div class="menu" ref="menu" v-if="item.isShowAddStoreButton" @click="addIntoStoreList(index)">加入收藏</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="account" @click="changeAccount">
        <img :src="accountInfo.imgURL" alt="">
      </div>
      <input type="text" v-model="message">
      <div class="submit" @click="send">发送</div>
    </div>
  </div>
</template>

<script>
import imgBoy from '../assets/img/icon_boy.jpg';
import imgGirl from '../assets/img/icon_girl.jpg';

export default {
  name: 'WeChat',
  components: {
  },
  data: function(){
    return{
      message: "",
      isMale: true,
      messageList: [],
      curTouch:{
        timeOfStart:{}, //touch start time
        timeOfEnd:{}, //touch end time
        screenY:0,
      },
      storeList: [],
    }
  },
  computed: {
    accountInfo: function(){
      return this.isMale ?{imgURL: imgBoy,className : "left",}:{imgURL: imgGirl,className : "right",};
    }
  }, 
  created: function(){
    if(this.getFromLocalStorage("messageList")){
      this.messageList = this.getFromLocalStorage("messageList");
    }else{
      this.messageList = [];
    }
  },
  mounted: function(){
    
  },
  methods: {
    send: function(){
      let obj = {
        isMale: this.isMale,
        imgURL: this.isMale?imgBoy:imgGirl,
        message: this.message,
        isShowAddStoreButton: false,
      }
      this.messageList.push(obj);
      this.message = "";
      this.saveToLocalStorage("messageList",this.messageList);
      this.$nextTick(() => {
           this.scrollToTheBottom();
         });
    },
    changeAccount: function(){
      this.isMale = !this.isMale;
    },
    saveToLocalStorage: function(a,b){
      localStorage.setItem(a,JSON.stringify(b));
    },
    getFromLocalStorage: function(a){
      return(JSON.parse(localStorage.getItem(a)));
    },
    scrollToTheBottom: function(){
      let el = this.$refs.chat;
      console.log(this.$refs.chat.scrollHeight);
      window.scrollTo(0,(this.$refs.chat.scrollHeight));

    },
    startTime: function(e){
      this.curTouch['timeOfStart'] = new Date();
      this.curTouch['screenX'] = e.touches[0].screenX;
      this.curTouch['screenY'] = e.touches[0].screenX;
    },
    endTime: function(index){
      this.hideMenu()

      this.curTouch['timeOfEnd']= new Date();
      let timeGap = this.curTouch.timeOfEnd - this.curTouch.timeOfStart;
      if(timeGap >= 0){
        this.messageList[index].isShowAddStoreButton = true;
        console.log(this.messageList);
        this.$nextTick(()=>{
          // this.$refs.menu[0].style.top = this.curTouch.screenY /2 + 'px'; 
          // this.$refs.menu[0].style.left = this.curTouch.screenX /2 + 'px'; 
        });
      } 
    },
    hideMenu :function(){
      this.messageList.forEach((cur)=>{
        cur.isShowAddStoreButton = false;
      })
    },
    addIntoStoreList: function(index){
      alert(1);
      let obj = {
        message: this.messageList[index].message,
        time: new Date(),
      }
      this.storeList.push(obj);
      // this.storeList = [...this.storeList, obj]
      this.hideMenu();
    }
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
  padding: 0 1rem 2rem;
  box-sizing: border-box;
}
.chat-list .chat-item{
  width: 100%;
  /* height: 3.2rem; 我想要被自然撑开高度为什么不行，样式就乱了 */
  margin-bottom: 1rem;
  overflow:auto;
}
.chat-list .left{
  float: left;
}
.chat-list .right{
  float: right;
}
.chat-list .chat-item .icon{
  height: 3rem;
  display: flex;
  align-items: center;
}
.chat-list .chat-item .icon img{
  width: 2rem;
}
.chat-list .chat-item .message{
  padding: 1rem;
  max-width: 14rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap; 
  text-align: left;
  /* height: 3rem; */
  /* line-height: 3rem; */
  background: #99e274;
  border-radius: 0.2rem;
  margin: 0 1rem;
  position: relative;
}
.chat-list .chat-item .message .menu{
  height: 3rem;
  width: 6rem;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
}
.store{
    background: #b9bcc1;
    padding-left: 1rem;
    box-sizing: border-box;
    line-height: 2.5rem;
    color: white;
    height: 2.5rem;
    width: 5.5rem;
    border-radius: 2rem;
    position: fixed;
    right: -16px;
    top: 0;
    text-align: left;
}
</style>
