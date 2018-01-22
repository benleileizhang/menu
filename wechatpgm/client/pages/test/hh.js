Page({
  data: {
    pickerHidden: true,
    chosen: ''
  },

  pickerConfirm: function (e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },
  pickerCancel: function (e) {
    this.setData({
      pickerHidden: true
    })
  },
  pickerShow: function (e) {
    this.setData({
      pickerHidden: false
    })
  },
  formSubmit: function (e) {
    var _this = this
    /*********************    
    wx.redirectTo({
      url:'create_photo'
    })
    **********************/

    wx.request({
      url: 'https://f9vo6taw.qcloud.la',
      data:
      {
        name: e.detail.value.name,
        age: e.detail.value.age,
        gender: e.detail.value.gender
      }
      ,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      /*header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },*/
      success: function (res) {
        var err = res.data.error
        if (err) {
          _this.setData({
            error: err
          })
        }
        else {
          wx.redirectTo({
            url: 'hh'
          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})