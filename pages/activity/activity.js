const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
  },
  onPullDownRefresh() {
    　　console.log('--------下拉刷新-------')
    　　wx.showNavigationBarLoading() //在标题栏中显示加载
    　　wx.request({
        url: 'https://zhishun520.com/zaotoutiao-api-home-1.0.0/user/record/packet',
          data: {
            userId:929
          },
          method: 'GET',
          // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            'content-type': 'application/json'
          },//默认为 'application/json'，
          success: function (res) {
            // success
            console.log(res);
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
            wx.hideNavigationBarLoading() //完成停止加载
            wx.stopPullDownRefresh() //停止下拉刷新
          }
        }) 
  }             
})
