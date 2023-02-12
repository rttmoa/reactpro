// components/test3/test3.js
Component({

  
  options: {
    pureDataPattern: /^_/,    // 指定所有 _ 开头的数据字段为纯数据字段
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {    // 将rgb改造为以 _ 开头的纯数据字段
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    changeR() {
      this.setData({
        '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
      })
    },
    changeG() {
      this.setData({
        '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
      })
    },
    changeB() {
      this.setData({
        '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
      })
    },
    _randomColor() {  // 随机生成颜色
      this.setData({
        _rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        }
      })
    }
  },

  observers: {

    // '_rgb.r, _rgb.g, _rgb.b': function (r, g, b) {  // 监听 rgb 的三个属性
    //   this.setData({
    //     fullColor: `${r}, ${g}, ${b}`
    //   })
    // },

    '_rgb.**': function (obj) {  // 通配符监听
      this.setData({
        fullColor: `${obj.r}, ${obj.g}, ${obj.b}`
      })
    }
  },

  // 旧生命周期 ~ 不推荐
  // created() {
  //   console.log('created')
  // },
  // attached() {
  //   console.log('attached')
  // },

  // 新生命周期 ~ 推荐
  lifetimes: {
    created() {
      console.log('created ~~~~~')
    },
    attached() {
      console.log('attached ~~~~~')
    },
  },

  pageLifetimes: { // 所在的页面(Home)的生命周期      ~    显示、隐藏、尺寸变化
    show() {
      console.log('show')
      this._randomColor()
    },
    hide() {
      console.log('hide')
    },
    resize() {
      console.log('resize')
    }
  }
})
