<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.td">
        <img class="item-img" :src="item.imgUrl" />

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1810/2d/2d7b45e94187416ea3.img.jpg_200x200_7b01f790.jpg',
        title: '长隆野生动物世界',
        desc: '爱挑战的你怎能错过垂直过山车'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1810/2d/2d7b45e94187416ea3.img.jpg_200x200_7b01f790.jpg',
        title: '长隆野生动物世界',
        desc: '爱挑战的你怎能错过垂直过山车'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1810/2d/2d7b45e94187416ea3.img.jpg_200x200_7b01f790.jpg',
        title: '长隆野生动物世界',
        desc: '爱挑战的你怎能错过垂直过山车'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1810/2d/2d7b45e94187416ea3.img.jpg_200x200_7b01f790.jpg',
        title: '长隆野生动物世界',
        desc: '爱挑战的你怎能错过垂直过山车'
      }]
    }
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
    line-height: 0.54rem;
    font-size: 0.36em;
    overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
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
