<template>
  <div class="comment">
      我是评价
       <!-- <van-tabbar v-model="active" route active-color="red">
      <van-tabbar-item  icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/pay">支付</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/comment">评价</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script>
export default {
    name:"comment",
    data() {
        return {
            active:2
        }
    },
}

</script>
<style scoped>
    .comment{
        width: 100%;
        height: 92.5%;
        background: red;
    }
</style>