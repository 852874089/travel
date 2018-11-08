<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
// 用ajax获取数据
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default{
  name: 'City',
  components: {
    CityAlphabet,
    CityList,
    CityHeader,
    CitySearch
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      // 定义letter数据
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      // 请求一个url api/index.json
      // then 返回对象
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        // 重新定义data
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      // 让letter数据等于 alphabet.vue传过来的letter, 然后把letter用属性的形式传递给list.vue
      this.letter = letter
      // console.log(letter)
    }
  },
  mounted () {
    // 运行获得数据的方法
    this.getCityInfo()
  }
}
</script>
