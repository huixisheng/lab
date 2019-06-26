App({
  onLaunch (options) {
    // Do something initial when launch.
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onPageNotFound(res) {
    wx.redirectTo({
      url: '/pages/test/index'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
