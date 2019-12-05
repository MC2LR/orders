<template>
  <div class="index">
    <div class="swripers">
      <van-swipe :autoplay="3000" style="width:100%;height:100%" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <ul class="nav-list">
        <router-link tag="div" to="goods">
          <li
            class="list"
            @click="listClick(index)"
            v-for="(item,index) in navData"
            :key="index"
            :class="{'lishStyle':listIndex === index}"
          >{{item.navList}}</li>
        </router-link>
        <!-- <li @click="dd">dd</li> -->
      </ul>
      <div class="nav-content">
        <keep-alive>
          <router-view :navContentData="navContent" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
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
              price: "￥100",
              tax: "$200",
              goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
               {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            }
          ]
        },
        {
          navList: "颜料理",
          navContent: [
                {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
              goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            }
          ]
        },
        {
          navList: "颜料理",
          navContent: [
             {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            }
          ]
        },
        {
          navList: "颜料理",
          navContent: [
             {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            }
          ]
        },
        {
          navList: "颜料理",
          navContent: [
                  {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            }
          ]
        },
        {
          navList: "颜料理",
          navContent: [
               {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥10",
              tax: "$200"
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200"
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
               tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
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
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            },
            {
              img:
                "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
              title: "菜名",
              price: "￥100",
              tax: "$200",
               goodsNum:0
            }
          ]
        }
      ],
      listIndex: 0,
      navContent: []
    };
  },
  created() {
    this.navContent = this.navData[0].navContent;
  },
  methods: {
    listClick(index) {
      console.log(index);
      this.listIndex = index;
      this.navContent = this.navData[index].navContent;
    }
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
}
.swripers {
  width: 100%;
  height: 20%;
  background: black;
}
.nav {
  width: 100%;
  height: 73%;
  display: -webkit-flex;
}
.nav-list {
  width: 22%;
  height: 100%;
  overflow-y: auto;
}
.nav-content {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
.list {
  width: 100%;
  text-align: center;
  line-height: 0.5rem;
  height: 0.5rem;
  border-bottom: 1px solid black;
}
.lishStyle {
  background: red;
}
</style>