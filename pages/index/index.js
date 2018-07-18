const app = getApp();
const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    systemInfo:"",
    kindData:''
  },
  onLoad: function () {
    const that = this;
    wx.request({
      url: 'https://zhishun520.com/zaotoutiao-api-home-1.0.0//news/channels/',
      data: {
        userId: 929
      },
      method: 'GET',
      // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      },//默认为 'application/json'，
      success: function (res) {
        // success
        console.log(res);
        that.setData({
          kindData: res.data.data
        })
      },
      fail: function () {
        // fail
      }
    })
  },
  onReachBottom: function () {
    var that = this;
    // 显示加载图标  
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1  
    //page = page + 1;
    wx.request({
      url: 'https://zhishun520.com/zaotoutiao-api-home-1.0.0/user/record/packet',
      method: "GET",
      // 请求头部  
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // 回调函数  
        console.log("上拉", res);
        // 设置数据  
        // that.setData({
        //   moment: that.data.moment
        // })
        // 隐藏加载框  
        wx.hideLoading();
      }
    })
  },
  onPullDownRefresh() {
        const that = this;   　　
        const systemInfo = that.data.systemInfo;
    　　wx.showNavigationBarLoading() //在标题栏中显示加载
    　　wx.request({
        url: 'https://zhishun520.com/zaotoutiao-api-home-1.0.0//news/channels/',
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
            that.setData({
              kindData:res
            })
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
  },
  onReachBottom: function () {
    var that = this;
    // 显示加载图标  
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1  
    //page = page + 1;
    wx.request({
      url: 'https://zhishun520.com/zaotoutiao-api-home-1.0.0/user/record/packet',
      method: "GET",
      // 请求头部  
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // 回调函数  
       console.log("上拉",res);
        // 设置数据  
        // that.setData({
        //   moment: that.data.moment
        // })
        // 隐藏加载框  
        wx.hideLoading();
      }
    })

  },              
})
