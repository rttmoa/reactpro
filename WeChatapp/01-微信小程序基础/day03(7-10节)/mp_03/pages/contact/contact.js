// pages/contact/contact.js
Page({


  /**--- 上拉触底 节流阀函数 ---**/
  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    isloding: false
  },

  getColors() {
    this.setData({
      isloding: true
    })
    // 需要展示 loading 效果
    wx.showLoading({
      title: '数据加载中...'
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'get',
      success: ({ data: res }) => {
        this.setData({
          colorList: [...this.data.colorList, ...res.data]
        })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isloding: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { this.getColors() },


  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("触发了上拉触底事件")
    if (this.data.isloding) return;
    this.getColors()
  },









  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})