<template>
  <div class="pay">
    <div class="goodsWraper">
      <div class="titles">料理の詳細</div>
      <div class="AdditionInfo">
        <p class="Serial">
          <span class="s">序号</span>
          <span class="s">{{goodsAllData[0].Serial}}</span>
        </p>
        <p class="Serial">
          <span class="s" style="color:#000000">桌号</span>
          <span class="s" style="color:#000000">{{goodsAllData[0].tableNumber}}</span>
        </p>
        <p class="Serial">
          <span class="s" style="color:#000000">人数</span>
          <span class="s" style="color:#000000">{{goodsAllData[0].personNum}}</span>
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
          <li
            class="goods-wraper-content"
            v-for="(item,index) in goodsAllData[0].goods"
            :key="index"
          >
            <img :src="item.img" />
            <span style="width:1.55rem;text-align:center">{{item.name}}</span>
            <span style="width:.5rem;text-align:center">{{item.tax}}</span>
            <span style="margin-left:.25rem;width:.3rem;text-align:center">{{item.goodsNum}}</span>
          </li>
        </ul>
      </div>
      <div class="count">
        <div class="Subtotal">
          <p style="margin-left:.12rem">小計</p>
          <p style="width:.8rem">￥{{goodsAllData[0].Subtotal}}</p>
        </div>
        <div class="Subtotal">
          <p style="margin-left:.12rem;">割引券</p>
          <p style="width:.8rem">￥{{goodsAllData[0].coupon}}</p>
        </div>
      </div>
      <div class="pays" v-if="isShow">
        <p class="as" @click="remark">备 注</p>
        <p class="as" @click="ordered">下 单</p>
      </div>
      <div class="evalu" v-show="!isShow">
          评 价
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: "pay",
  data() {
    return {
      isShow:true,
      goodsAllData: [
        {
          tableNumber: "No.1",
          personNum: 3,
          goods: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              name: "烧茄子",
              tax: "107",
              goodsNum: "12"
            },
             {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              name: "红杉鱼",
              tax: "1045",
              goodsNum: "1"
            },
              {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/11",
              name: "烤冷面",
              tax: "5462",
              goodsNum: "1"
            },
              {
              img:
                "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
              name: "烤腰子",
              tax: "3254",
              goodsNum: "1"
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              name: "烤辣椒",
              tax: "7745",
              goodsNum: "1"
            }
          ],
          Subtotal: 2000,
          coupon: "0",
          total: 2000,
          Serial: "5000000155255452"
        }
      ]
    };
  },
    components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
      remark(){
          console.log("备注了");
      },
      ordered(){
        Dialog.confirm({
          title: '立即下单？',
              }).then(() => {
                this.isShow=false;       
              }).catch(() => {
              });
      }
  },
};
</script>
<style scoped>
.pay {
  width: 100%;
  height: 92.5%;
  background: #f1f1f1;
  font-size: 0.14rem;
  position: relative;
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
.evalu{
   width: 100%; 
  height: 0.5rem;
  background: #EECA26;
  text-align: center;
  color:#f1f1f1;
  line-height: .5rem;
  font-size: .16rem;

}
.as {
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
}
.as:nth-child(1){
    width: 30%;
   background: #EECA26;
   color: #f1f1f1;
   font-size: .16rem;
}
.as:nth-child(2){
    width: 70%;
   background: #9370DB;
   color: #f1f1f1;
   font-size: .16rem;
}
</style>