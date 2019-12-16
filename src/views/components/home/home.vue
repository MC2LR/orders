<template>
  <div class="home">
    <!-- 菜品 -->
    <div class="nav-wraper">
      <keep-alive>
        <router-view @childByValue="priceData" @decrese="decrese" :flag="clears" :goodsNumId="goodsNumId" :goodsId="goodsId" :goodsNum="goodsNum"/>
      </keep-alive>
    </div>
    <!-- 购物车logo -->
    <div class="gooda-cart">
      <div class="contentsz allprice" @click="cartShow">
        <div class="numsss" v-show="allPrice>0">{{num}}</div>
        <div class="carData" :class="{'carLight':this.allPrice>0}">
          <van-icon name="shopping-cart" class="icans" :class="{'lightHeight':this.allPrice>0}" />
        </div>
        <span class="priClo" :class="{'heightLight':this.allPrice>0}">￥{{allPrice}}</span>
      </div>
    </div>
    <!-- 购物车 -->
    <transition name="fold">
      <div class="shopcart-list" v-if="listShow">
        <div class="list-header">
          <h1 class="titless">购物车</h1>
          <span class="empty" @click="clear">清空</span>
        </div>
        <ul v-if="listShow">
          <li v-for="(item,index) in cartDtas" :key="index" class="li-flex">
            <div class="icon">
              <img width="65" height="65" :src="'http://10.167.20.50:8080/jeecg-boot/'+item.img" />
            </div>
            <div class="content">
              <div class="goods-sort-weaper">
                <div class="goods-name">
                  <p
                    style="width:100%;text-align:center;height:.2rem;line-height:.2rem;"
                  >{{item.pname}}</p>
                  <div
                    style="border-radius:.2rem;width:60%;margin-left:20px;text-align:center;height:.3rem;line-height:.3rem;background:#EECA26"
                  >￥{{item.price}}</div>
                  <p
                    style="width:50%;margin-left:15px;text-align:center;height:.3rem;line-height:.3rem;"
                  >{{item.rankAsc}}</p>
                </div>
              </div>
            </div>
            <!-- 菜品增减按钮 -->
            <div class="btn">
              <transition name="move">
                <div class="decrease" @click="dle(index)">-</div>
              </transition>
              <div class="count" >{{item.count}}</div>
              <div class="add" @click="add(index)">+</div>
            </div>
          </li>
        </ul>
      </div>
    </transition>
    <!-- 遮罩层 -->
    <transition name="fade">
      <div class="list-mask" @click="maskDisappear" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script>
import { api } from "../../../api/api_system";
import { httpService } from "../../../service/http.service";
export default {
  name: "home",
  data() {
    return {
      allPrice: 0, //总价格
      num: 0,
      listShow: false,
      goodsId:"",
      goodsNum:0,
      goodsNumId:"",
      clears: false, //清空购物车flag
      cartDtas: [      //购物车数据
       
      ] //购物车数据
    };
  },
  methods: {
    //如果总价格大于零，遮罩层和购车车的商品将显示
    cartShow() {
      if (this.allPrice > 0) {
        this.listShow = true;
         httpService.request(api.listCart,{"id":null}, "post").then(res => {
          this.cartDtas = res.data;
    })
  }
    },
    dle(index){
      this.cartDtas[index].count--;
      this.num --;
      this.goodsNumId = this.cartDtas[index].id;
      this.goodsNum = this.cartDtas[index].count;
      this.allPrice -=parseInt(this.cartDtas[index].price);
       httpService.request(api.delCart,{"id":this.cartDtas[index].id}, "post").then(res => {
         if(this.cartDtas[index].count == 0){
           this.goodsId = this.cartDtas[index].id
           this.cartDtas.splice(index,1);
            if(this.cartDtas.length == 0){
              this.listShow = false;
              this.num =0;
              this.allPrice = 0;
            }
          }
    
    })
    },
    add(index){
      httpService.request(api.addCart,{"id":this.cartDtas[index].id}, "post").then(res => {
        this.cartDtas[index].count++;
          this.num ++;
          this.allPrice +=parseInt(this.cartDtas[index].price);
        this.goodsNumId = this.cartDtas[index].id;
        this.goodsNum = this.cartDtas[index].count;
    })
    },
    //控制遮罩层的显示隐藏
    maskDisappear() {
      this.listShow = false;
    },
    priceData(value) {
      this.allPrice += parseInt(value); //总价相加
      this.num++; //总数目相加
    },
    //总价相减
    decrese(value) {
      this.allPrice -= parseInt(value); //控制总价
      this.num--;
    },
    //清空购物车
    clear() {
       httpService.request(api.clearCart,{"id":null}, "post").then(res => {
         
    })
      this.cartDtas.splice(0, this.cartDtas.length); //清空数据
      this.listShow = false; //购物车弹框隐藏
      this.allPrice = 0; //清空是将总价归零
      this.num = 0; //清空时将数目归零
      this.clears = !this.clears; //清空是将flag变为true传给子组件，让其商品数量变为零
    }
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
.nav-wraper {
  width: 100%;
  height: 85%;
  display: -webkit-flex;
}
.list-header {
  width: 100%;
  height: 0.3rem;
  background: #f3f5f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.titless {
  font-size: 0.16rem;
  margin-left: 5px;
}
.empty {
  margin-right: 5px;
  color: #00a0dc;
  cursor: pointer;
}
.gooda-cart {
  width: 100%;
  height: 8%;
  position: relative;
  z-index: 2;
  background: #141d27;
  display: -webkit-flex;
  justify-content: space-between;
}
.contentsz {
  width: 30%;
  height: 50%;
  line-height: 0.5rem;
}
.allprice {
  display: flex;
  z-index: -5;
  width: 70%;
  position: relative;
}
.carData {
  /* position: absolute; */
  width: 19%;
  margin-left: 5px;
  height: 0.5rem;
  border-radius: 50%;
  background: #72777d;
}
.numsss {
  width: 0.3rem;
  height: 0.18rem;
  background: red;
  text-align: center;
  line-height: 17px;
  border-radius: 9px;
  color: #ffffff;
  position: absolute;
  left: 0.34rem;
}
.carLight {
  background: #00a0dc;
}
.icans {
  font-size: 0.3rem;
  color: #141d27;
  margin-left: 9px;
  margin-top: 10px;
}
.priClo {
  color: #72777d;
  font-weight: 700;
  margin-left: 0.2rem;
}
.heightLight {
  color: #ffffff;
}
.lightHeight {
  color: #ffffff;
}

.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;
  z-index: 0;
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7, 17, 27, 0.8);
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  background: rgba(7, 17, 27, 0);
  transition: all 0.5s;
}
/* 实现上下缓慢移动 */
.fold-enter-active,
.fold-leave-active {
  transition: all 0.5s;
}
.fold-enter,
.fold-leave-active {
  transform: translate3d(0, 100%, 0);
  transition: all 0.5s;
}
.shopcart-list {
  position: absolute;
  bottom: 100px;
  width: 100%;
  max-height: 80%;
  overflow-y: auto;
  z-index: 1;
  background: #ffffff;
}
.icon {
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.content {
  width: 80%;
}
.goods-sort-weaper {
  display: -webkit-flex;
  padding: 5px;
}
.goods-name {
  width: 57%;
  padding-left: 10px;
}
.li-flex {
  width: 100%;
  height: 0.9rem;
  display: -webkit-flex;
  font-size: 0.16rem;
  margin-bottom: 10px;
  border-bottom: 1px solid #e7eaeb;
}
.btn {
  width: 30%;
  display: flex;
  align-items: center;
}
.count {
  height: 0.25rem;
  width: 0.25rem;
  text-align: center;
  line-height: 0.25rem;
  font-size: 12px;
}
.decrease {
  width: 0.2rem;
  height: 0.2rem;
  background: #00a0dc;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 0.17rem;
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
  transition: all 0.4s linear;
}
.move-enter,
.move-leave-active {
  opacity: 0;
  transform: translate3d(24px, 0, 0);
}
</style>