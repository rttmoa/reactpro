// 在这个 JS 文件中，专门来创建 Store 的实例对象
import { observable, action } from 'mobx-miniprogram'



export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,
  activeTabBarIndex: 0,  // 在Store中定义选中项的索引
  
  // 计算属性
  get sum() {
    return this.numA + this.numB
  },
  // actions 函数，专门来修改 store 中数据的值
  updateNum1: action(function (step) {
    this.numA += step
  }),
  updateNum2: action(function (step) {
    this.numB += step
  }),
  // 更新tarBar灰标
  updateActiveTabBarIndex: action(function(index) {
    this.activeTabBarIndex = index
  })
})