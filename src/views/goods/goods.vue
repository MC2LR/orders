<template>
  <div class="goods">
    <div class="swripers">
      <van-swipe :autoplay="3000" style="width:100%;height:100%" indicator-color="white">
        <van-swipe-item><img class="img" src="../../assets/1.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img class="img" src="../../assets/2.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img class="img" src="../../assets/3.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img class="img" src="../../assets/4.jpg" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <ul class="nav-list">
        <li
          class="list"
          @click="listClick(index)"
          v-for="(item,index) in navData"
          :key="index"
          :class="{'lishStyle':listIndex === index}"
        >{{item.navList}}</li>
      </ul>
      <div class="nav-content">
        <ul>
          <li v-for="(item,index) in navContent" :key="index" class="li-flex">
            <div class="icon">
              <img width="65" height="65" :src="item.img" />
            </div>
            <div class="content">
              <div class="goods-sort-weaper">
                <div class="goods-name">
                  <p
                    style="width:50%;margin-left:10px;text-align:center;height:.2rem;line-height:.2rem;"
                  >{{item.title}}</p>
                  <div
                    style="border-radius:.2rem;width:60%;margin-left:10px;text-align:center;height:.3rem;line-height:.3rem;background:#EECA26"
                  >￥{{item.allPrice.price}}</div>
                  <p
                    style="width:50%;margin-left:10px;text-align:center;height:.3rem;line-height:.3rem;"
                  >{{item.tax}}</p>
                </div>
                <div class="btn">
                  <transition name="move">
                    <div
                      class="decrease"
                      v-show="navContent[index].allPrice.goodsNum>0"
                      @click.stop.prevent="decreaseCart(index)"
                    >-</div>
                  </transition>
                  <div
                    v-show="navContent[index].allPrice.goodsNum>0"
                    class="count"
                  >{{navContent[index].allPrice.goodsNum}}</div>
                  <div class="add" @click.stop.prevent="addCart(index)">+</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      navData: [
        {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
          {
          navList: "颜料理",
          navContent: [
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              tax: "$200",
              allPrice: {
                price: "100",
                goodsNum: 0
              }
            }
          ]
        },
      ],
      listIndex: 0,
      navContent: [],
      active: 1
    };
  },
  created() {
    this.navContent = this.navData[0].navContent;
    console.log(this.navContent);
  },
  methods: {
    listClick(index) {
      this.listIndex = index;//更改点击后样式
      this.navContent = this.navData[index].navContent;
    },
    addCart(index) {
      this.navContent[index].allPrice.goodsNum++;
      this.$emit("childByValue", this.navContent[index].allPrice);
    },
    decreaseCart(index) {
      this.navContent[index].allPrice.goodsNum--;
      this.$emit("decrese", this.navContent[index].allPrice);
    }
  }
};
</script>
<style scoped>
.goods {
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
}
.btn {
  width: 35%;
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
  width: 60%;
  padding-left: 10px;
}
.icon {
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.img{
    width: 100%;
    height: 100%;
}
</style>