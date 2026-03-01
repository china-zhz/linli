const app = getApp();

Page({
  data: {
    communityName: ""
  },

  onLoad() {
    this.setData({
      communityName: (app.globalData && app.globalData.communityName) || "碧桂园清华园"
    });
  },

  goSelectCommunity() {
    wx.navigateTo({
      url: "/pages/select-community/select-community"
    });
  }
});
