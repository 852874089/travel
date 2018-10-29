<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default{
  name: 'HomeHeader',
  // 接收父组件传过来的值
  props: {
    city: String
  }
}
</script>
<!--添加scoped使样式只作用于当前组件的样式，不能改变其他组件的样式-->
<style type="text/css" scoped>
 /* .header
    display : flex
    height : 0.86rem
    line-height : 0.86rem
    background-color : #00bcd4
    color :#ffffff
    .header-left
      width : 0.64rem
      float: left
    .header-input
      flex : 1
    .header-right
      width : 1.24rem
      float: right
      text-align : center*/
  .header{
    display : flex;
    height : 0.86rem;
    line-height : 0.86rem;
    background-color : #00bcd4;
    color :#ffffff;
  }
 .header-left {
   width: 0.64rem;
   float: left;
 }
 .header-input {
   flex: 1;
   height: 0.64rem;
   line-height : 0.64rem;
   background-color : #fffffF;
   border-radius: 0.1rem;
   margin-top: 0.12rem;
   margin-left : 0.2rem;
   color : #646464;
   padding-left: 0.2rem;

 }
 .header-right {
   width: 1.24rem;
   float: right;
   text-align: center;
   color : #ffffff;
 }
 .header-left .back-icon{text-align: center;}
</style>
