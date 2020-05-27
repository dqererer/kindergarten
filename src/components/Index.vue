<template>
  <div class="Index">
    <SearchBar></SearchBar>
    <MainList></MainList>
    <Slide :list="slide_list"></Slide>
    <router-link to="/WeChat">WeChat</router-link>
    <div>
      <div class="title">
        <span>请问下面的div设置样式</span>
        <div class="set">点击设置</div>
      </div>
      <div class="pop">
        <div class="mask"></div>
        <div class="content">
          <div class="line color">
            <span>请选择背景颜色：</span>
            <div class="item-list">
              <div class="item red"></div>
              <div class="item yellow"></div>
              <div class="item blue"></div>
            </div>
            
          </div>
          <div class="line width">
            <span>请选择宽度(rem)：</span>
            <div class="item-list">
              <div class="item item10">10</div>
              <div class="item item15">15</div>
              <div class="item item20">20</div>
            </div>
          </div>
          <div class="line height">
            <span>请选择高度(rem)：</span>
            <div class="item-list">
              <div class="item item10">10</div>
              <div class="item item15">15</div>
              <div class="item item20">20</div>
            </div>
          </div>
          <div class="handle">
            <div class="cancel">恢复</div>
            <div class="ok">确定</div>
          </div>
        </div>
      </div>
      <div class="box"></div>
    </div>
    <div class="message">
      <div class="title">留言板</div>
      <div>
        <textarea rows="10" cols="80"></textarea>
        <div class="submit">提交</div>
      </div>
      <div class="message-list">
        <div class="message-item">klkk</div>
      </div>
    </div>  
  </div>
</template>

<script>
import SearchBar from './SearchBar';
import MainList from './MainList';
import Slide from './Slide';
import img1 from '../assets/img/111.jpg';
import img2 from '../assets/img/222.jpg';
import img3 from '../assets/img/333.jpg';
import img4 from '../assets/img/444.jpg';

export default {
  name: 'Index',
  data: function(){
    return{
      slide_list: [
        {
          id:1,
          img:img1,
          url:"",
        },
        {
          id:2,
          img:img2,
          url:"",
        }
      ]
    }
  },
  components: {
    SearchBar,
    MainList,
    Slide,
  },
  mounted: function(){
    //设置窗口显示
    document.querySelector('.set').onclick = function(){
      document.querySelector('.pop').style.display = "block";
    };
    //设置功能——color
    let box = document.querySelector('.box');
    document.querySelector('.pop .content .color .red').onclick = function(){
      box.style.background = "red";
    };
    document.querySelector('.pop .content .color .yellow').onclick = function(){
      box.style.background = "yellow";
    };
    document.querySelector('.pop .content .color .blue').onclick = function(){
      box.style.background = "blue";
    };
    // 设置功能——宽度
    document.querySelector('.pop .content .width .item10').onclick = function(){
      box.style.width = "10rem";
    };
    document.querySelector('.pop .content .width .item15').onclick = function(){
      box.style.width = "15rem";
    };
    document.querySelector('.pop .content .width .item20').onclick = function(){
      box.style.width = "20rem";
    };
        // 设置功能——高度
    document.querySelector('.pop .content .height .item10').onclick = function(){
      box.style.height = "10rem";
    };
    document.querySelector('.pop .content .height .item15').onclick = function(){
      box.style.height = "15rem";
    };
    document.querySelector('.pop .content .height .item20').onclick = function(){
      box.style.height = "20rem";
    };
    //弹框关闭
    document.querySelector('.pop').addEventListener('click',function(e){
      if(e.srcElement.className === "mask"){
        document.querySelector('.pop').style.display = "none";
      }
    },false);
    // 确定
    document.querySelector('.ok').onclick = function(){
      document.querySelector('.pop').style.display = "none";
    };
    // 恢复
    document.querySelector('.cancel').onclick = function(){
      box.style.width = "6rem";
      box.style.height = "6rem";
      box.style.background = "white";
    };
    // let messageList = [];
    // let messageDom = "";
    let messageCur = document.querySelector('textarea');
    document.querySelector('.submit').onclick = function(){
      // messageList.push(messageCur.value);
      let item = document.createElement('div');
      item.innerHTML = messageCur.value;
      item.setAttribute('class','message-item');
      document.querySelector('.message-list').appendChild(item);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Index{
  position: relative;
}
.title{
  width: 20rem;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.set{
  height: 1.5rem;
  width: 8rem;
  background: #25222224;
  font-size: 0.16rem;
  border: 0;
  line-height: 1.5rem;
}
.set:hover{
  border: 0;
}
.pop{
  position: absolute;
  /* 这个height为啥不生效啊？？？？？？？？ */
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: none;
}
.pop .mask{
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.4;
}
.pop .content{
  position: absolute;
  height: 10rem;
  width: 18rem;
  top: 50%;
  left: 50%;
  margin-top: -5rem;
  margin-left: -9rem;
  background: white;
  padding: 2rem;
  box-sizing: border-box;
}
.pop .content .line{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.02rem;
}
.pop .content .line .item-list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5rem;
}
.pop .content .line .item{
  width: 1rem;
  height: 1rem;
  border: 0.01rem solid black;
  background: gray;
  font-size: 0.01rem;
}
.pop .content .line .red{
  background: red;
}
.pop .content .line .yellow{
  background: yellow;
}
.pop .content .line .blue{
  background: blue;
}
.pop .content .handle{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  margin: 0 auto;
  padding-top: 1rem;
}
.pop .content .handle div{
 width: 4rem;
 height: 1.5rem;
 background: gray;
 line-height: 1.5rem;
 font-size: 0.1rem;
}
.box{
  margin-top: 1rem; 
  height: 6rem;
  width: 6rem;
  border: 0.01rem solid #000;
} 
.message{
  margin-top: 3rem;
  height: 30rem;
  width: 40rem;
  background-image: linear-gradient(#73b3f5,#f2f6fc);
} 
.message .title{
  display: inline-block;
  text-align: center;
  /* 我原本没有用display,只用的text-aline是不生效的，我记得说块元素居中是margin0auto,inline元素是text-aline，但是现在我是要对块元素内部的htmltext定位，那不是就属于行内元素么？还是说只要是这种htmltext外面都要包一个行内元素，不然就没法定位？ */
  font-size: 2rem;
  height: 6rem;
  line-height: 6rem;
}
.message .submit{
  height: 2rem;
  width: 3rem;
  margin: 0 auto;
  background: white;
  line-height: 2rem;
  border: 0.01rem solid #303133;
  border-radius: 0.5rem;
  /* 如果不设背景色（就看不出来了），radius会让原本的边框颜色变浅是为什么？ */
}
.message .message-list{
  padding: 2rem;
}
.message .message-list .message-item{
  background: white;
  width: 22rem;
  margin: 0 auto;
  height: 2rem;
  line-height: 2rem;
  border-radius: 1rem;
}
</style> 
