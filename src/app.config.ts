export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/home/index',
    'pages/recommend/index',
    'pages/score/index',
    'pages/course/index',
    'pages/mine/mine'
  ],
  // 分包
  subpackages: [
    {
      root: 'pages/home/detail',
      pages: [
        'index'
      ]
    },
    {
      root: 'pages/recommend/expertDetail',
      pages: [
        'index'
      ]
    },
    {
      root: 'pages/mine/nickName',
      pages: [
        'index'
      ]
    },
    {
      root: 'pages/mine/inviteFriends',
      pages: [
        'index'
      ]
    },
    {
      root: 'pages/mine/calculatePro',
      pages: [
        'index'
      ]
    }
  ],
  tabBar: {
    list: [
      {
        iconPath: 'assets/tabBar/home.png',
        selectedIconPath: 'assets/tabBar/home-active.png',
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        iconPath: 'assets/tabBar/recommend.png',
        selectedIconPath: 'assets/tabBar/recommend-active.png',
        pagePath: 'pages/recommend/index',
        text: '推荐'
      },
      {
        iconPath: 'assets/tabBar/score.png',
        selectedIconPath: 'assets/tabBar/score-active.png',
        pagePath: 'pages/score/index',
        text: '比分'
      },
      {
        iconPath: 'assets/tabBar/course.png',
        selectedIconPath: 'assets/tabBar/course-active.png',
        pagePath: 'pages/course/index',
        text: '关注',
      },
      {
        iconPath: 'assets/tabBar/mine.png',
        selectedIconPath: 'assets/tabBar/mine-active.png',
        pagePath: 'pages/mine/mine',
        text: '我的',
      }
    ],
    color: '#999999',
    selectedColor: '#ca3130',
    backgroundColor: '#f7f8fa',
    borderStyle: 'white',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  lazyCodeLoading: 'requiredComponents' // 微信小程序配置，组件按需加载
})
