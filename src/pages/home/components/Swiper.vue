<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="item of swiperList" :key="item.id">
        <img class="swiper_img" :src="item.imgUrl"  />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 定义轮播指标
        pagination: {
          el: '.swiper-pagination'
        },
        // 循环轮播
        loop: true,
        // 设置自动轮播到下一张banner
        autoplay: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/eb/5cacf42b59e91e02.jpg_750x200_9c0a77b0.jpg'
      }]
    }
  }
}
</script>
<!--添加scoped使样式只作用于当前组件的样式，不能改变其他组件的样式-->
<style scoped>
  /*修改组件里面的代码要用符号>>>进行穿透 wrapper里面出现swiper-pagination-bullet-active 就修改样式*/
  .wrapper >>> .swiper-pagination-bullet-active{
    background: #ffffff;
  }
  .wrapper{
    width : 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 26.67%;
  }
  .swiper_img{
    width: 100%;
  }
</style>
