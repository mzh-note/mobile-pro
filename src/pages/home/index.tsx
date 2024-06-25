import Taro from '@tarojs/taro';
import {useState} from 'react'
import {RichText, Text, Image, View} from '@tarojs/components';
import { Input, Button } from '@nutui/nutui-react-taro'
import {getMatchId} from '@/http/api';
import useShareApp from '@/hooks/useShareApp';

import styles from './index.module.less'
import logo from '../../assets/logo.png'

export default function Home() {
  useShareApp()
  const [code, setCode] = useState('')
  const prediction = async () => {
    if (code.length === 0) {
      Taro.showToast({
        title: '请输入赛事编号',
        icon: 'none'
      })
      return
    }
    const res = await getMatchId({code})
    if (res?.data?.data?.matchId) {
      setCode('')
      Taro.navigateTo({
        url: '/pages/home/detail/index?id=' + res?.data?.data?.matchId
      })
    } else {
      Taro.showToast({
        icon: 'none',
        title: '当前无可查赛事详情'
      })
    }
  }
  return (
    <View className={styles.home}>
      <View className={styles.home__logo}>
        <Image className={styles.img__logo} mode='aspectFit' src={logo} />
        {/*<Video*/}
        {/*  className={styles.img__logo}*/}
        {/*  src={`${process.env.TARO_APP_BASEURL}/images/1.mp4`}*/}
        {/*  initialTime={0}*/}
        {/*  controls={false}*/}
        {/*  autoplay*/}
        {/*  loop*/}
        {/*  muted*/}
        {/*  showProgress={false}*/}
        {/*  showFullscreenBtn={false}*/}
        {/*  showPlayBtn={false}*/}
        {/*  showCenterPlayBtn={false}*/}
        {/*  enableProgressGesture={false}*/}
        {/*  showBottomProgress={false}*/}
        {/*/>*/}
      </View>
      <View className={styles.search__form}>
        <div className={styles.search__input}>
          <Input type='number' style={{'--nutui-input-color': '#333'}}
            className={styles.input}
            placeholder='输入竞彩赛事编号如025'
            value={code}
            onChange={val => setCode(val)}
          />
          <Button className={styles.search__button} onClick={prediction}>
            <RichText nodes='预测<br />一下'></RichText>
          </Button>
        </div>
        <Text>*本次推荐仅作测试参考之用，并不构成购彩建议。</Text>
        <Text>一切互联网彩票均属违法，请到线下彩站购买。</Text>
      </View>
    </View>
  )
}
