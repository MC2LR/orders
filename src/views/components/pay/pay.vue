<template>
  <div class="pay">
    <div v-show="!isS" style="margin-top:50%;font-size:1rem; color:#AAA7A7;text-align:center">
      <van-icon name="description" />
      <p style="font-size:.2rem">暂无订单</p>
    </div>
    <div class="goodsWraper" v-show="isS">
      <div class="titles">料理の詳細</div>
      <div class="AdditionInfo">
        <p class="Serial">
          <span class="s">序号</span>
          <span class="s">{{Serial}}</span>
        </p>
        <p class="Serial">
          <span class="s" style="color:#000000">桌号</span>
          <span class="s" style="color:#000000">{{tableNumber}}</span>
        </p>
        <p class="Serial">
          <span class="s" style="color:#000000">人数</span>
          <span class="s" style="color:#000000">{{this.orderNum}}</span>
        </p>
      </div>
      <div class="goodsDeteail">
        <div class="goods-name">
          <span class="titled"></span>
          <span class="titled">料理详细</span>
          <span class="titled" style="text-indent:.5rem;">税入</span>
          <span class="titled">数量</span>
        </div>
        <ul class="goods-wraper">
          <li class="goods-wraper-content" v-for="(item,index) in goodsAllData" :key="index">
            <img :src="'http://10.167.20.50:8080/jeecg-boot/'+item.img" />
            <span style="width:1.55rem;text-align:center">{{item.pname}}</span>
            <span style="width:.5rem;text-align:center">{{item.price*1.08}}</span>
            <span style="margin-left:.25rem;width:.3rem;text-align:center">{{item.count}}</span>
          </li>
        </ul>
      </div>
      <div class="count">
        <div class="Subtotal">
          <p style="margin-left:.12rem">总計</p>
          <p style="width:.8rem">￥{{total}}</p>
        </div>
      </div>
      <div class="pays">
        <p class="as" @click="remark">取 消</p>
        <p class="as" @click="ordered">确 认</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { api } from "../../../api/api_system";
import { httpService } from "../../../service/http.service";
export default {
  name: "pay",
  data() {
    return {
      isS: false,
      orderNum: localStorage.getItem("personNum"),
      tableNumber: "No.1",
      total:0,
      Serial: "5000000155255452",
      goodsAllData: [],
     
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  watch: {
    //点击订单后将购物车数据在订单也进行渲染
     change:function(){
        httpService.request(api.listCart, { id: null }, "post").then(res => {
                 this.isS = true;
                 this.goodsAllData.splice(0, this.goodsAllData.length);
                 for (var i = 0; i < res.data.length; i++) {
                   this.goodsAllData.push(res.data[i]);
                 }
                 this.total = localStorage.getItem("all");
       });
     },
     //点击取消后，去除订单也数据
     $route(to){
       if(to.name == "pay"){
         if(localStorage.getItem("is") == null){
                 this.isS = false;
         }
       }
     }
  },
  props:{
    //点击订单后触发监听事件
    change:{
      type:Number
    }
  },
  created() {
      //订单也渲染
      httpService.request(api.listCart, { id: null }, "post").then(res => {
        this.isS = true;
        for (var i = 0; i < res.data.length; i++) {
          this.goodsAllData.push(res.data[i]); //购物车赋值
        }
        this.total = localStorage.getItem("all");
      });
    
  },
  methods: {
    remark() {
      Dialog.confirm({
        title: "是否取消订单？"
      })
        .then(() => {
          localStorage.removeItem("is");
          localStorage.setItem("clear", true);
          this.$router.push({ name: "goods" });
          this.$parent.active = 0;
          this.goodsAllData.splice(0, this.goodsAllData.length);
          console.log(this.goodsAllData);
        })
        .catch(() => {});
    },
    ordered() {
      Dialog.confirm({
        title: "立即下单？"
      })
        .then(() => {
          localStorage.removeItem("is");
          localStorage.setItem("clear", true);
          this.$router.push({ name: "goods" });
          this.$parent.active = 0;
          this.goodsAllData.splice(0, this.goodsAllData.length);
          //清空购物车
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.pay {
  width: 100%;
  height: 92.5%;
  background: #f1f1f1;
  font-size: 0.14rem;
  position: relative;
  overflow: hidden;
}
.goodsWraper {
  width: 100%;
}
.titles {
  width: 100%;
  height: 0.55rem;
  background: #eeca26;
  color: #f8f7ff;
  text-align: center;
  line-height: 0.55rem;
  font-size: 0.22rem;
}
.AdditionInfo {
  width: 100%;
}
.Serial {
  width: 95%;
  height: 0.45rem;
  background: #ffffff;
  margin: 0 auto;
  border-bottom: 1px solid #f8f8f8;
}
.s {
  display: inline-block;
  width: 48%;
  line-height: 0.45rem;
  color: #cccccc;
}
.s:nth-child(1) {
  text-indent: 0.16rem;
}
.s:nth-child(2) {
  text-align: right;
}
.goodsDeteail {
  width: 95%;
  background: #ffffff;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.goods-name {
  width: 100%;
  height: 0.45rem;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  justify-content: center;
}
.titled {
  width: 25%;
  height: 100%;
  text-align: center;
  line-height: 0.45rem;
  color: #cccccc;
}
.goods-wraper {
  width: 100%;
  max-height: 2.3rem;
  overflow-y: auto;
}
.goods-wraper-content {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  align-items: center;
}
.goods-wraper-content img {
  width: 0.45rem;
  height: 0.45rem;
  margin-left: 0.2rem;
  border-radius: 3px;
  margin: 5px 0 5px 0.2rem;
}
.count {
  width: 95%;
  margin: 0 auto;
  background: #ffffff;
  margin-top: 3px;
}
.Subtotal {
  display: flex;
  height: 0.4rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}
.pays {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
}
.evalu {
  width: 100%;
  height: 0.5rem;
  background: #eeca26;
  text-align: center;
  color: #f1f1f1;
  line-height: 0.5rem;
  font-size: 0.16rem;
}
.as {
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
}
.as:nth-child(1) {
  width: 30%;
  background: #eeca26;
  color: #f1f1f1;
  font-size: 0.16rem;
}
.as:nth-child(2) {
  width: 70%;
  background: #9370db;
  color: #f1f1f1;
  font-size: 0.16rem;
}
</style>