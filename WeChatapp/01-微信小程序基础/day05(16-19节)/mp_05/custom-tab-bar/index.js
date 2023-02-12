// custom-tab-bar/index.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'


/**--- 按需渲染数字徽标 ---**/
/**--- 把Store中的sum的值渲染为数字徽标 ---**/
/**--- 实现tarBar页面切换 onChange ---**/
Component({
  options: {
    styleIsolation: 'shared'
  },
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: 'sum',
      active: 'activeTabBarIndex'  //  active是页面中使用的值   activeTabBarIndex是Store中定义的值
    },
    actions: {
      updateActive: 'updateActiveTabBarIndex'
    },
  },
  observers: {
    'sum': function (val) {
      this.setData({ 'list[1].info': val })  // 监听sum、绑定到data的info中
    }
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
    "list": [
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/tabs/message.png",
        "selectedIconPath": "/images/tabs/message-active.png",
        info: 0
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引

      // this.setData({ active: event.detail })

      this.updateActive(event.detail)  // 更新 Store 中的activeTabBarIndex

      wx.switchTab({ url: this.data.list[event.detail].pagePath })
    },
  }
})
