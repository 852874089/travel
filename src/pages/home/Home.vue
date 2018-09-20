<template>
  <home-header></home-header>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default{
  name: 'Home',
  components: {
    // 注册组件
    HomeHeader: HomeHeader
  }
}
</script>
