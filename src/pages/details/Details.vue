<template>
  <div>
    <input type=button value=后退 @click="$router.go(-1)">
  </div>
</template>

<script>

export default{
  name: 'Details',
  methods: {
    back () {
      // 返回上一个路由
      // this.$router.go(-1)
      //  跳转到特定路由 这里是根目录
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style>
  input{font-size: 0.36rem; margin-top: 0.4rem;}
</style>
