<template>
  <div class="goods">
    <detaile v-show="!isIf" :clearDetaile="clearDetaile" :goodsNumed="goodsNumed" @fun="funs" :detaileFlag="detaileFlag" @numsDec="numDec" @nums="nums"/>
    <div class="show-wraper" v-show="isIf">
    <!-- 轮播图 -->
      <div class="swripers">
        <van-swipe :autoplay="3000" style="width:100%;height:100%" indicator-color="white">
          <van-swipe-item>
            <img class="img" src="../../../assets/1.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img" src="../../../assets/2.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img" src="../../../assets/3.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img" src="../../../assets/4.jpg" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="nav">
        <!-- 商品列表 -->
        <ul class="nav-list">
          <li
            class="list"
            @click="listClick(index)"
            v-for="(item,index) in navDatas"
            :key="index"
            :class="{'lishStyle':listIndex === index}"
          >{{item.navList}}</li>
        </ul>
        <!-- 商品列表对应的商品 -->
        <div class="nav-content">
          <ul>
            <li v-for="(item,index) in navContent" :key="index" class="li-flex" @click="deteiled(item.id,index)">
              <div class="icon">
                <img width="65" height="65" :src="'http://10.167.20.50:8080/jeecg-boot/'+item.img" />
              </div>
              <div class="content">
                <div class="goods-sort-weaper">
                  <div class="goods-name">
                    <p
                      class="eli"
                      style="width:90%;text-align:center;height:.2rem;line-height:.2rem;"
                    >{{item.pname}}</p>
                    <div
                      style="border-radius:.2rem;width:60%;margin-left:10px;text-align:center;height:.3rem;line-height:.3rem;background:#EECA26"
                    >￥{{item.price}}</div>
                    <p
                      class="eli"
                      style="width:80%;margin-left:10px;text-align:center;height:.3rem;line-height:.3rem;"
                    >税込￥{{item.price*1.08}}</p>
                  </div>
                  <!-- 商品加减按钮 -->
                  <div class="btn">
                    <transition name="move">
                      <div
                        class="decrease"
                        v-show="navContent[index].count>0"
                        @click.stop.prevent="decreaseCart(index)"
                      >-</div>
                    </transition>
                    <div
                      v-show="navContent[index].count>0"
                      class="count"
                    >{{navContent[index].count}}</div>
                    <div class="add" @click.stop.prevent="addCart(index)">+</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../../api/api_system";
import { httpService } from "../../../service/http.service";
import detaile from "../detaile/detaile"
export default {
  name: "goods",
  components:{
    detaile
  },
  props: {
    flag: {
      type: Boolean,
      default: false
    },
    isif:{  
      type:Boolean
    },
    goodsId: {
      type: String,
      default: "dd"
    },
    goodsNum: {
      type: Number
    },
    goodsNumId: {
      type: String
    },
    clearDetaile:{
      type:Boolean
    },
  },
  data() {
    return {
      isIf:true,//是否显示详情页
      listIndex: 0, //定义需要修改样式的临时变量
      navDatas: [], //总数据渲染
      navContent: [], //点击商品列表要渲染的商品
      active: 0, //底部导航默认选中状态
      detaileFlag:"",//临时储存商品id的变量
      temIndex:0,//商品下标的临时变量
      goodsNumed:0//将商品列表的商品数量传到详情页
    };
  },
  created() {

    // 初始化数据
    httpService.request(api.toProduct, { id: null }, "post").then(res => {
      console.log(res);
      this.navDatas = res.data; //q请求到的数据进行二次赋值
      this.navContent = this.navDatas[0].navContent; //初始化数据
    });
  },
  watch: {
    //点击购物车的清空后便利总数据，将总有的商品数目归零
    flag: function() {
      for (var i = 0; i < this.navDatas.length; i++) {
        for (var j = 0; j < this.navDatas[i].navContent.length; j++) {
          this.navDatas[i].navContent[j].count = 0;
        }
      }

    },
    isif:function(){
       //保证导航跳转后是最初页面
        this.isIf = true;
    },
    //将购物车里的数量与商品列表的数量统一归零
    goodsId: function() {
      for (var i = 0; i < this.navDatas.length; i++) {
        for (var j = 0; j < this.navDatas[i].navContent.length; j++) {
          if (this.goodsId == this.navDatas[i].navContent[j].id) {
            this.navDatas[i].navContent[j].count = 0;
          }
        }
      }
    },
    //将购物车里的单个商品数量与商品列表的商品数量相统一
    goodsNum: function() {
      for (var i = 0; i < this.navDatas.length; i++) {
        for (var j = 0; j < this.navDatas[i].navContent.length; j++) {
          if (this.goodsNumId == this.navDatas[i].navContent[j].id) {
            this.navDatas[i].navContent[j].count = this.goodsNum;
          }
        }
      }
    }
  },
  methods: {
    // 点击商品列表进行样式修改个数据展示
    listClick(index) {
      this.listIndex = index; //更改点击后样式
      this.navContent = this.navDatas[index].navContent;
    },
    //点击加好按钮时的逻辑
    addCart(index) {
      this.navContent[index].count++;
      this.$emit("childByValue", this.navContent[index].price);
      httpService
        .request(api.addCart, { id: this.navContent[index].id }, "post")
        .then(res => {});
    },
    //详情页返回
    funs(){
      console.log("子到父");
      this.isIf = true; //让详情页隐藏，列表页显示
    },
    //跳转详情页
    deteiled(id,index){
      this.detaileFlag = id;//将商品id赋给临时变量，传到详情页
      this.isIf=false; 
      this.temIndex = index; //将在详情页要展示的商品的下标进行保存
      this.goodsNumed = this.navContent[index].count;  
    },
    //点击减号按钮时的逻辑
    decreaseCart(index) {
      this.navContent[index].count--;
      this.$emit("decrese", this.navContent[index].price);
      httpService
        .request(api.delCart, { id: this.navContent[index].id }, "post")
        .then(res => {});
    },
    //点击详情页的购物车跟加号按钮进行传的值
    nums(){
      this.navContent[this.temIndex].count++; //这是点击详情页加号后再商品数量的重新渲染
      this.$emit("numsed",this.navContent[this.temIndex].price)
    },
    //点击详情页的减号按钮进行传的值
    numDec(){
      console.log("我是详情页减号传过来的值")
      this.navContent[this.temIndex].count--;
      this.$emit("numsDec",this.navContent[this.temIndex].price)
    }
  }
};
</script>
<style scoped>
.goods {
  width: 100%;
  height: 100%;
}
.show-wraper{
  width: 100%;
  height: 100%;
}
.move-enter,
.move-leave-active {
  opacity: 0;
  transform: translate3d(24px, 0, 0);
}
.swripers {
  width: 100%;
  height: 20%;
  background: black;
}
.count {
  height: 0.2rem;
  display: inline-block;
  width: 0.2rem;
  text-align: center;
  font-size: 12px;
}
.btn {
  width: 43%;
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
  margin-top: 0.25rem;
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
  margin-top: 0.25rem;
  position: absolute;
  right: 8px;
  transition: all 0.4s linear;
}
.nav {
  width: 100%;
  height: 80%;
  display: -webkit-flex;
}
.nav-list {
  width: 22%;
  height: 100%;
  background: #eeeeee;
  overflow-y: auto;
}
.list {
  width: 100%;
  text-align: center;
  line-height: 0.5rem;
  height: 0.5rem;
  border-bottom: 1px solid #e7eaeb;
  background: #eeeeee;
}
.lishStyle {
  background: #ffffff;
  border-radius: 5px;
}
.nav-content {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
.li-flex {
  width: 100%;
  height: 0.9rem;
  display: -webkit-flex;
  font-size: 0.16rem;
  margin-bottom: 10px;
  border-bottom: 1px solid #e7eaeb;
}
.goods-sort-weaper {
  display: -webkit-flex;
  padding: 5px;
}
.content {
  width: 100%;
}
.goods-name {
  width: 57%;
  padding-left: 10px;
}
.icon {
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.img {
  width: 100%;
  height: 100%;
}
.eli {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>