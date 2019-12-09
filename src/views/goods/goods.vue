<template>
  <div class="goods">
    <!-- 轮播图 -->
    <div class="swripers">
      <van-swipe :autoplay="3000" style="width:100%;height:100%" indicator-color="white">
        <van-swipe-item>
          <img class="img" src="../../assets/1.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="img" src="../../assets/2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="img" src="../../assets/3.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="img" src="../../assets/4.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <!-- 商品列表 -->
      <ul class="nav-list">
        <li
          class="list"
          @click="listClick(index)"
          v-for="(item,index) in navData"
          :key="index"
          :class="{'lishStyle':listIndex === index}"
        >{{item.navList}}</li>
      </ul>
      <!-- 商品列表对应的商品 -->
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
                <!-- 商品加减按钮 -->
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
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
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
        }
      ],
      listIndex: 0, //定义需要修改样式的临时变量
      navContent: [], //点击商品列表要渲染的商品
      active: 0 //底部导航默认选中状态
    };
  },
  created() {
    // 初始化数据
    this.navContent = this.navData[0].navContent;
  },
  watch: {
    //点击购物车的清空后便利总数据，将总有的商品数目归零
    flag: function() {
      for (var i = 0; i < this.navData.length; i++) {
        console.log(this.navData[i])
        for(var j =0;j<this.navData[i].navContent.length;j++){
          this.navData[i].navContent[j].allPrice.goodsNum = 0;
        }
      }
    }
  },
  methods: {
    // 点击商品列表进行样式修改个数据展示
    listClick(index) {
      this.listIndex = index; //更改点击后样式
      this.navContent = this.navData[index].navContent;
    },
    //点击加好按钮时的逻辑
    addCart(index) {
      this.navContent[index].allPrice.goodsNum++;
      this.$emit("childByValue", this.navContent[index].allPrice);
    },
    //点击减号按钮时的逻辑
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
</style>