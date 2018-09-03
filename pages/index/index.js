//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showYear: 2018,
    showMonth: 9
  },

  selectDay: function(e) {
    console.log('select day', e.detail)
  },

  nextMonth: function() {
    console.log('next month');
  },

  prevMonth: function() {
    console.log('prev month');
  }
})
