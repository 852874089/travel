<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.td">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
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
    background: #eeeeee;
  }
  .item-img-wrapper{
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 26.8%;
  }
  .item-img{width: 100%;}
  .item-info{
    min-width: 0;
    padding: 0.1rem;
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
