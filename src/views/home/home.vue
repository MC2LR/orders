<template>
  <div class="home">
      <div class="nav-wraper">
        <keep-alive>
          <router-view @childByValue="priceData" @decrese="decrese"/>
        </keep-alive>
      </div>
    <div class="gooda-cart">
        <div class="contentsz allprice">
             <div class="numsss" v-show="allPrice>0">{{num}}</div>
             <div class="carData" :class="{'carLight':this.allPrice>0}"><van-icon name="shopping-cart" class="icans" :class="{'lightHeight':this.allPrice>0}"/></div>
             <span class="priClo" :class="{'heightLight':this.allPrice>0}">￥{{allPrice}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
        allPrice:0,//总价格
        num:0
    };
  },
  methods: {
    //   dd(){
    //       this.$router.push({
    //           name:"goodscart"
    //       })
    //   },
      //总价相加
      priceData(value){
          this.allPrice+=parseInt(value.price);//
          this.num++;//
      },
      //总价相减
      decrese(value){
            this.allPrice-=parseInt(value.price);
            this.num--;

      }
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.nav-wraper {
  width: 100%;
  height: 85%;
  display: -webkit-flex;
}

.gooda-cart {
  width: 100%;
  height: 15%;
  background: #141D27;
  display: -webkit-flex;
  justify-content: space-between;
}
.contentsz{
    width: 30%;
    height: 50%;
    line-height:.5rem;
}
.allprice{
    display: flex;
    width: 70%;
    position: relative;
}
.carData{
    width: 19%;
    margin-left: px;
    height: 100%;
    border-radius: 50%;
    background: #72777D;
        
}
.numsss{
    width: .3rem;
    height: .18rem;
    background: red;
    text-align: center;
    line-height:17px;
    border-radius: 9px;
    color: #FFFFFF;
    position: absolute;
    left: .34rem;
}
.carLight{
    background: #00A0DC;
}
.icans{
    font-size: .3rem;
    color:#141D27;
    margin-left: 9px;
    margin-top: 10px;
}
.priClo{
    color: #72777D;
    font-weight: 700;
    margin-left: .2rem;

}
.heightLight{
    color: #FFFFFF;
}
.lightHeight{

    color: #FFFFFF;
}
</style>