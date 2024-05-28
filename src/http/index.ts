import Taro from '@tarojs/taro';

const http = (options: any) => {
  return new Promise((resolve, reject) => {
    const header = options.header || {
      'content-type': 'application/json'
    }
    let openid = ''
    try {
      openid = Taro.getStorageSync('openid')
      console.log('getStorageSync', openid)
    } catch(e) {

    }
    if (openid) {
      header['Cookies'] = 'token=' + openid
      header['token'] = openid
    }
    Taro.showLoading()
    Taro.request({
      url: process.env.TARO_APP_BASEURL + options.url,
      data: options.data || {},
      header,
      method: options.method || 'GET',
      success: function(res) {
        Taro.hideLoading()
        // console.log('success', res)
        resolve(res)
      },
      fail: function (error) {
        Taro.hideLoading()
        // console.error('fail', error)
        Taro.showToast({
          title: '访问异常' + JSON.stringify(error.errMsg),
          icon: 'none'
        })
        reject(error)
        Taro.reportEvent('apiError', error)
      }
    })
  })
}

export default http;
