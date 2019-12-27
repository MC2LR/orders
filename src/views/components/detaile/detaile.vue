<template>
  <div class="detaile">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="img">
      <img
        style="width:100%;height:100%"
        :src="'http://127.0.0.1:8080/jeecg-boot/'+this.img"
      />
    </div>
    <p class="goods-name">{{name}}</p>
    <div class="ra">
      <p class="goods-name" style="color:red"> ￥{{price}}</p>
      <p class="adds" @click="cartShow" v-if="detaileGoodsNum == 0">
        <van-icon name="cart" class="carts" />加入购物车
      </p>
      <div class="btn" v-if="detaileGoodsNum >0">
        <transition name="move">
          <div class="decrease" @click.stop.prevent="dec">-</div>
        </transition>
        <div class="count">{{detaileGoodsNum}}</div>
        <div class="add" @click="addEvent">+</div>
      </div>
    </div><br>
    <div class="goodsInfo">
      <p style="text-indent:.3rem;color:#817E91">商品信息</p><br>
      <span style="text-indent:.4rem;font-size:14px;color:#817E91">亲，需要什么请备注，谢谢</span>
    </div>
  </div>
</template>

<script>
import { api } from "../../../api/api_system";
import { httpService } from "../../../service/http.service";
export default {
  name: "detaile",
  data() {
    return {
      detaileFlag:"",
      name: "",
      img:"",
      price: 50,
      detaileGoodsNum: 0, //详情页的商品数量
    };
  },
  props: {
    //从home组件传过来的flag,判断详情页商品数量是否清零
    clearDetaile:{
      type:Boolean
    },
    allData:{
      type:Object
    },
    goodsNum:{
      type:Number
    },
    goodsNumId:{
      type:String
    },
    temIndex:{
      type:Number
    }
  },
  inject:["foo"],
  watch:{
    //(在详情页的前提下点击购物车里的加减按钮)将购物车里的商品数量与详情的商品数量统一，并保证是相同的商品
    goodsNum:function(){
      console.log(this.goodsNum);
      if(this.allData == null){

      }else{
        if(this.allData.id == this.goodsNumId){
          this.detaileGoodsNum = this.goodsNum;
        }
      }
    },
    //从home组件传过来的flag,判断详情页商品数量是否清零
    clearDetaile:function(){
      if(this.clearDetaile == true){
        this.detaileGoodsNum = 0;
      }
    },
    //详情页显示商品数量
    temIndex:function(){
       this.detaileGoodsNum = this.$parent.navContent[this.temIndex].count;
    },
     //详情页的数据显示(除商品数量)
    allData:function(){
      console.log(this.allData);
      this.detaileFlag = this.allData.id;
      this.name = this.allData.pname;
      this.price = this.allData.price;
      this.img = this.allData.img;
    }
  },
  methods: {
    //返回商品列表页的事件
    onClickLeft() {
      this.$emit("fun");
    },
    //购物车的显示隐藏
    cartShow() {
      this.detaileGoodsNum += 1;
      httpService
        .request(api.addCart, { id: this.detaileFlag }, "post")
        .then(res => {
          //将商品的数量传到购物车及商品列表页(点击购物车进行传值)
          this.$emit("nums");
        });
    },
    //商品数量减少
    dec() {
      if (this.detaileGoodsNum > 0) {
        this.detaileGoodsNum--;
         httpService
        .request(api.delCart, { id: this.detaileFlag }, "post")
        .then(res => {
           this.$emit("numsDec");
        });
      }
    },
    //商品数量增加事件
    addEvent() {
      this.detaileGoodsNum++;
      httpService
        .request(api.addCart, { id: this.detaileFlag }, "post")
        .then(res => {
           this.$emit("nums");
        });
    }
  },
};
</script>
<style scoped>
.detaile {
  width: 100%;
  height: 100%;
}
.img {
  width: 100%;
  height: 1.5rem;
}
.goods-name {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  text-indent: 0.3rem;
}
.ra {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.adds {
  width: 1.4rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  background: #eeca26;
  margin-right: 0.1rem;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.14rem;
  vertical-align: middle;
}
.carts {
  vertical-align: middle;
  margin-right: 2px;
}
.move-enter,
.move-leave-active {
  opacity: 0;
  transform: translate3d(24px, 0, 0);
}
.count {
  height: 0.2rem;
  display: inline-block;
  width: 0.25rem;
  text-align: center;
  font-size: 12px;
}
.btn {
  width: 33%;
  position: relative;
}
.decrease {
  width: 0.2rem;
  height: 0.2rem;
  background: #00a0dc;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 0.17rem;
  display: inline-block;
  margin-left: 0.1rem;
  transition: all 0.4s linear;
}
.add {
  width: 0.2rem;
  height: 0.2rem;
  background: #00a0dc;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 0.17rem;
  display: inline-block;
  margin-top: 0.02rem;
  position: absolute;
  right: 8px;
  transition: all 0.4s linear;
}
</style>