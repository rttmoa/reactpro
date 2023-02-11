// pages/shoplist/shoplist.js
Page({


  /**--- // 在AppData中查看数据变化   网络改为3g ---**/
  /**--- 调试器  --> 查看网络 --> xhr的数据变化 ---**/
  /**--- 在普通编译、自定义编译  ||  启动页面：pages/shoplist/shoplist   ||   启动参数：id=1&title=美食  ---**/
  /**--- 上拉触底实现过程： 
   *        1、将触底距离改为200rpx
   *        2、在onReachBottom函数中让page+1
   *        3、再重新调用getShopList函数
   */
  /**
   * 页面的初始数据
   */
  data: { 
    query: {},
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isloading: false,  // 节流阀
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ query: options })   // 在调试器 -> AppData中查看query的数据     将页面参数的值放到query中
    this.getShopList()
  },

  // 以分页的形式获取商铺列表数据的方法
  getShopList(cb) {

    this.setData({ isloading: true })

    // 展示 loading 效果
    wx.showLoading({ title: '数据加载中...' })

    // 接口地址：https://www.escook.cn/categories/:cate_id/shops
    // URL地址中的:cate_id是动态参数，表示分类的id
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,   // 表示请求第几页的数据
        _limit: this.data.pageSize   // 表示每页请求几条数据
      },
      success: (res) => {
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header['X-Total-Count'] - 0,    /// total(总数据条数)   ：字符串类型转换为数字类型
        })
      },
      complete: () => {
        // 隐藏 loading 效果
        wx.hideLoading()
        this.setData({ isloading: false })
        // wx.stopPullDownRefresh()  // 按需调用
        cb && cb()   // 如果前面的值存在 就回调cb
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: this.data.query.title })     // 设置页面标题
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 需要重置关键的数据
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    })
    // 重新发起数据请求
    this.getShopList(() => { wx.stopPullDownRefresh() })  // 传递了函数、函数中cb回调
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    // 调试器  --> 查看网络 --> xhr的数据变化  当没有数据了 不必要发额外的请求了
    if (this.data.page * this.data.pageSize >= this.data.total) { //  页码值 * 每页显示多少条数据 >= 总数据条数   page * pageSizi >= total
      // 证明没有下一页的数据了
      return wx.showToast({
        title: '数据加载完毕！',
        icon: 'none'
      })
    }
    // 判断是否正在加载其他数据
    if (this.data.isloading) return

    // 页码值 +1
    this.setData({ page: this.data.page + 1 })  // 在AppData中查看数据变化 & 网络3g

    // 获取下一页数据
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})