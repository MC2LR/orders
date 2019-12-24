<template>
  <div class="index">
    <div class="nav-content">
      <keep-alive>
        <router-view :isif="isif"/>
      </keep-alive>
    </div>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="#29A1F7">
      <router-link tag="div" to="/goods" class="ddd" @click.native="dd">
        <van-tabbar-item icon="home-o" class="ss">首页</van-tabbar-item>
      </router-link>
      <router-link tag="div" to="/pay" class="ddd">
        <van-tabbar-item icon="search" class="ss">订单</van-tabbar-item>
      </router-link>
      <router-link tag="div" to="/comment" class="ddd">
        <van-tabbar-item icon="friends-o" class="ss">评价</van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      active: 0,
      isif:true,//传给子组件，保证调到首页时是商品列表页，(主要针对其他页面调到首页还是商品详情页)
    };
  },
  methods:{
    dd(){
      this.isif=!this.isif; //取反保证点击后出发wat属性
    }
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
.ddd {
  line-height: 0.5rem;
  width: 33.3%;
}
.ss{
  height: 100%;
}
</style>