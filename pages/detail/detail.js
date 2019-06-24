// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:null,
    othersList:[],
    commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoid=options.id;
    this.getCurrentVideo(videoid);
    this.getOthersList(videoid);
    this.getCommentList(videoid);
  },
// 获取视频详情
  getCurrentVideo(videoid){
    let that=this;
  wx.request({
    url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id=' + videoid,
    success(res){
      // console.log(res);
      if (res.data.code === 0) {
        that.setData({
          videoInfo: res.data.data.videoInfo
        })
      }
    }
  })
},
  
  //推荐视频 
  getOthersList(videoid) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + videoid,
      success(res) {
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            othersList: res.data.data.othersList
          })
        }
      }
    })
  },
  //获取评论
  getCommentList(videoid) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + videoid,
      success(res) {
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            commentData: res.data.data.commentData
          })
        }
      }
    })
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})