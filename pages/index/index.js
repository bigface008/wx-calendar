//index.js
//获取应用实例
const app = getApp();

function getList() {
  let tmp = [];
  for (let i = 0; i < 30; i++) {
    tmp.push({
      selected: false,
      haveItems: false
    });
  }
  tmp[12].selected = true;
  tmp[13].haveItems = true;
  tmp[20].haveItems = true;
  return tmp;
}

Page({
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    showYear: 2018,
    showMonth: 9,
    dayList: getList()
  },

  selectDay: function(e) {
    console.log("select day", e.detail);
    let tmp = this.data.dayList;
    for (let i = 0; i < this.data.dayList.length; i++) {
      if (this.data.dayList[i].selected) {
        this.data.dayList[i].selected = false;
      }
    }
    tmp[e.detail.day - 1].selected = true;
    this.setData({
      dayList: tmp
    })
  },

  nextMonth: function() {
    console.log("next month");
  },

  prevMonth: function() {
    console.log("prev month");
  }
});
