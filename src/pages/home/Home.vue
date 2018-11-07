<template>
  <div>
    <!--父组件通过属性形式给子组件传值-->
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="WeekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
// 用ajax获取数据
import axios from 'axios'

export default{
  name: 'Home',
  components: {
    // 注册组件
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // 返回空
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      WeekendList: []
    }
  },
  methods: {
    // 定义方法
    getHomeInfo () {
      // 请求一个url api/index.json
      // then 返回对象
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    // 请求成功 返回数据
    getHomeInfoSucc (res) {
      res = res.data
      // 如果后端正确返回结果 或者res里面有data
      if (res.ret && res.data) {
        // 重新定义data 为后端获取的data
        const data = res.data
        // 返回后端的city 复制到当前data返回的数据
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.WeekendList = data.WeekendList
      }
    }
  },
  mounted () {
    // 页面挂载好之后 执行getHomeInfo()方法
    this.getHomeInfo()
  }
}
</script>
