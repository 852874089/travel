<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <router-link to="/details">
        <li class="item border-bottom" v-for="item of list" :key="item.td">
          <img class="item-img" :src="item.imgUrl" />

          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped>
  .recommend-title{
    height: 0.8rem;
    line-height: 0.8rem;
    text-indent: 0.2rem;
    margin-top: 0.2rem;
    background: #eeeeee;
  }
  .item{
    display: flex;
    height: 1.9rem;
    overflow: hidden;
  }
  .item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info{
    flex: 1;
    min-width: 0;
    padding-top: 0.1rem;
  }
  .item-title{
    color: #333333;
    line-height: 0.54rem;
    font-size: 0.32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc{
    line-height: 0.4rem;
    color: #ccc;
    overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
  }
  .item-button{
    margin-top: 0.2rem;
    background: #ff9300;
    color: #ffffff;
    padding: 0 0.2rem;
    border-radius: 0.06rem;
  }
</style>
