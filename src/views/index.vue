<template>
  <div class="index">
    <div class="nav-content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item  icon="home-o">
        <router-link tag="div" to="/goods">首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <router-link tag="div" to="/pay">支付</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <router-link tag="div" to="/comment">评价</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      active:0
    };
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
}

.nav-content {
  width: 100%;
  height: 100%;
}

</style>