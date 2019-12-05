<template>
  <div class="goods">
     <ul>
         <li v-for="(item,index) in navContentData" :key="index" class="li-flex">
              <div class="icon">
                  <img width="65" height="65" :src="item.img" />
              </div>
               <div class="content">
                  <div class="goods-sort-weaper">
                      <div class="goods-name">
                          <p style="width:50%;margin-left:10px;text-align:center;height:.2rem;line-height:.2rem;">{{item.title}}</p>
                          <div style="border-radius:.2rem;width:60%;margin-left:10px;text-align:center;height:.3rem;line-height:.3rem;background:yellow">{{item.price}}</div>
                          <p style="width:50%;margin-left:10px;text-align:center;height:.3rem;line-height:.3rem;">{{item.tax}}</p>
                      </div>
                      <div class="btn">
                         <button>按钮</button>
                      </div>
                  </div>
             </div>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
    name:"goods",
    data() {
        return {
           
        }
    },
  props: {
    navContentData: {
      type: Array
    }
  },
  methods: {
     
  },
  created() {
      console.log(this.navContentData);
  },
}

</script>
<style scoped>
.goods{
    width: 100%;
    height: 100%;
     
}
.li-flex{
    width: 100%;
    height: .9rem;
    display: -webkit-flex;
    font-size: .16rem;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
}
.goods-sort-weaper{
    display: -webkit-flex;
    padding: 5px;
}
.content{
    width:100%;
    
}
.goods-name{
    width: 65%;
    padding-left: 10px;
}
.icon{
    display: flex;
    align-items: center;
    padding-left: 5px;
}
</style>