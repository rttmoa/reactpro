// index.js
// 获取应用实例
import { request } from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime.js'

const app = getApp()

Page({
 data:{
    swiperList:[],
    menuList:[],
    floordata: [
      {
          "floor_title": {
              "name": "时尚女装",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
          },
          "product_list": [
              {
                  "name": "优质服饰",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
                  "image_width": "232",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=服饰"
              },
              {
                  "name": "春季热门",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
                  "image_width": "233",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=热"
              },
              {
                  "name": "爆款清仓",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
                  "image_width": "233",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=爆款"
              },
              {
                  "name": "倒春寒",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
                  "image_width": "233",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=春季"
              },
              {
                  "name": "怦然心动",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
                  "image_width": "233",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=心动"
              }
          ]
      },
      {
          "floor_title": {
              "name": "户外活动",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
          },
          "product_list": [
              {
                  "name": "勇往直前",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
                  "image_width": "232",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=户外"
              },
              {
                  "name": "户外登山包",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
                  "image_width": "273",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=登山包"
              },
              {
                  "name": "冲锋衣系列",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
                  "image_width": "273",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=冲锋衣"
              },
              {
                  "name": "超强手套",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
                  "image_width": "193",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=手套"
              },
              {
                  "name": "户外运动鞋",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
                  "image_width": "193",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list/index?query=运动鞋"
              }
          ]
      },
      {
          "floor_title": {
              "name": "箱包配饰",
              "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
          },
          "product_list": [
              {
                  "name": "清新气质",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
                  "image_width": "232",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list?query=饰品"
              },
              {
                "name": "韩版手链",
                "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
                "image_width": "203",
                "open_type": "navigate",
                "navigator_url": "/pages/goods_list?query=手链"
            },
            {
                "name": "水晶项链",
                "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
                "image_width": "193",
                "open_type": "navigate",
                "navigator_url": "/pages/goods_list?query=水晶项链"
            },
              {
                  "name": "复古胸针",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
                  "image_width": "263",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list?query=胸针"
              },
              {
                  "name": "情侣表",
                  "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
                  "image_width": "273",
                  "open_type": "navigate",
                  "navigator_url": "/pages/goods_list?query=情侣表"
              }
              
          ]
        }
    ]
      
 },
 tap(){
  wx.switchTab({
    url: '/pages/category/index'
  })
 },
onLoad: async function(option){
    const result = await request({ url: '/home/swiperdata' })
    console.log("swiperList",result.data.message);
    this.setData({
      swiperList : result.data.message
    })
    const result1 = await request({ url: '/home/catitems' })
    console.log("menuList",result1.data.message);
    this.setData({
      menuList : result1.data.message
    })
    // const result2 = await request({ url: '/home/catitems' })
    // console.log("floordata",result2.data.message);
    //   this.setData({
    //     floordata : result2.data.message
    //   })

 }
})
 