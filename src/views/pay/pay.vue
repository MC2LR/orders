<template>
  <div class="pay">
      支付
         <van-tabbar v-model="active" route active-color="red">
      <van-tabbar-item  icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/pay">支付</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/comment">评价</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name:"pay",
    data() {
        return {
            active:1
        }
    },
}

</script>
<style scoped>
.pay{
    width: 100%;
    height: 92.5%;
    background: purple;
}
</style>