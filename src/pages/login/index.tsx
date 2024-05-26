import Taro from '@tarojs/taro';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setUser} from '@/store/modules/userReducer';
import {wxLogin} from '@/http/api';
import AboutList from '@/pages/mine/components/AboutList';

export default function Mine () {
  const dispatch = useDispatch()
  const instance = Taro.getCurrentInstance()
  const inviteCode = instance?.router?.params?.inviteCode || ''
  console.log('登陆页面inviteCode', inviteCode)
  dispatch(setUser({
    fromInviteCode: inviteCode
  }))

  useEffect(() => {
    Taro.login({
      success: async function (res) {
        console.log('获取登录凭证（code）', res.code)
        const code = res.code
        if (code) {
          const response = await wxLogin({ code })
          if (response?.data?.data?.userStatus === 1) {
            // console.log('已注册')
            const payload = response?.data?.data
            payload.avatar = `${process.env.TARO_APP_BASEURL}${payload.avatar}?t=${new Date().getTime()}`
            dispatch(setUser(response?.data?.data))
            Taro.switchTab({
              url: '/pages/mine/mine'
            })
          } else {
            Taro.showToast({
              icon: 'none',
              title: '请先登陆'
            })
            console.log('未注册')
          }
        }
      },
      fail: function(err) {
        console.error('获取登录凭证（code）', err)
      }
    })
  }, [dispatch]);

  return <AboutList />
}
