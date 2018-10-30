<template>
  <div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page , index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img-con">
          <img class="icon-img" :src="item.imgUrl" />
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 定义轮播指标
        pagination: {
          el: '.swiper-pagination'
        },
        // 循环轮播
        loop: true
        // 设置自动轮播到下一张banner
        // autoplay: true
      }
    }
  },
  computed: {
    // 定义page数据 返回函数
    pages () {
      // 定义pages为一个数组
      const pages = []
      // iconList的每一项数据进行循环，接收每一项和下标
      this.list.forEach((item, index) => {
        // 当前下标的数据 应该展示在第几页
        const page = Math.floor(index / 8)
        // 判断为空时不展示
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
  .icons{margin-top: 0.1rem;}
  .icons >>> .swiper-container{width: 100%; overflow: hidden; height: 0; padding-bottom: 50%; }
  .icons .icon{width: 25%; float: left; height: 0; padding-bottom: 24.5%; position: relative;}
  .icons .icon-img-con{ position: absolute; top: 0; left: 0; right: 0; bottom: 0.44rem; }
  .icons .icon-img{height: 100%; margin: 0 auto; display: block; padding: 0.1rem;}
  .icons .icon-desc{overflow: hidden; white-space: nowrap; text-overflow: ellipsis; position: absolute; left: 0; right: 0; bottom: 0; height: 0.44rem; line-height: 0.44rem; text-align: center; color: #333333;}
</style>
