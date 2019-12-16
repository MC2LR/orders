<template>
  <div class="order-num">
      <div class="order-num-log">
          <img src="../assets/1.jpg" class="imgs" alt="">
      </div>
      <h4 style="text-align:center;margin:.15rem 0 1rem 0">请选择就餐人数</h4>
      <ul class="num-Wraper">
          <li class="num-item" v-for="(item,index) in numData" :key="index" @click="numClick(index)">
              {{item}}人
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"orderNum",
    data() {
        return {
            numData:[1,2,3,4,5,6,7,8,9,10,11,12]
        }
    },
    methods:{
        //选择人数
        numClick(index){
            console.log(index+1);
            this.$router.push({
                      name: "index"
                    });
        }
    }
}

</script>
<style scoped>
    .order-num{
      width: 100%;
      height: 100%;
    }
    .order-num-log{
        width: 100%;
        height: 1rem;
        background: red;
    }
    .num-Wraper{
        width: 80%;
        display: -webkit-flex;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .num-item{
        width: 26%;
        height: .3rem;
        background:yellowgreen;
        margin: 0 auto;
        margin-bottom: .2rem;
        line-height: .3rem;
        text-align: center;
        border-radius: 3px;
        color: white;
    }
    .imgs{
        width: 100%;
        height: 100%;
    }
</style>