import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    wxLoginCode: '',
    userInfo: '',
    swanid: '',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleGetWxLoginCode = async () => {
    const res = await Taro.login();
    this.setState({
      wxLoginCode: res.code,
    });
    const clipRes = await Taro.setClipboardData({
      data: res.code,
    });
    if (clipRes) {
      Taro.showToast({
        title: '拷贝成功'
      });
    }
  }

  onGotUserInfo = async (e) => {
    console.log(e);
    const detail =  e.detail;
    const userInfo = JSON.stringify(detail);
    const clipRes = await Taro.setClipboardData({
      data: userInfo,
    });
    this.setState({
      userInfo,
    });
    if (clipRes) {
      Taro.showToast({
        title: '拷贝成功'
      });
    }
  }

  handleGetSwanId = async() => {
    const swanid = await this.promiseGetSwanId();
    const clipRes = await Taro.setClipboardData({
      data: swanid,
    });
    this.setState({
      swanid,
    });
    if (clipRes) {
      Taro.showToast({
        title: '拷贝成功'
      });
    }
  }

  promiseGetSwanId() {
    return new Promise((resolve, reject) => {
      swan.getSwanId({
        success: function (res) {
          resolve(res.data.swanid);
          console.log('getSwanId success', res);
        },
        fail: function (err) {
          reject(err);
            console.log('getSwanId fail', err);
        }
      });
    })

  }

  render () {
    const { wxLoginCode } = this.state;

    return (
      <View className='index'>
        <View className="block">
          <View>wx.login code:</View>
          <View>{wxLoginCode}</View>
          <Button type="primary" onClick={this.handleGetWxLoginCode.bind(this)}>复制微信|百度 code</Button>
        </View>
        <View className="block">
          <View>用户信息:</View>
          <View>{userInfo}</View>
          <Button openType="getUserInfo" lang="zh_CN" onGetUserInfo={this.onGotUserInfo}>获取用户信息</Button>
        </View>
        <View className="block">
          <View>百度swanid:</View>
          <View>{swanid}</View>
          <Button type="primary" onClick={this.handleGetSwanId}>获取百度 swanid</Button>
        </View>
      </View>
    )
  }
}
