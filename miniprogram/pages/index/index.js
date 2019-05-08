//index.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    avatarUrl: '',
    position: '广州'
  },

  onLoad: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  search() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  getData() {
    const db = wx.cloud.database();
    const result = db.collection('users').get().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
})