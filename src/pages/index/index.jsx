import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { Component, PureComponent } from 'react'
import './index.scss'

export default class Index extends PureComponent {

  componentWillMount() {
    console.log(getApp().$app.globalData)
    console.log(wx.getStorageSync('code'))
  }

  handleUser() {
    Taro.navigateTo({ url: '/pages/user/index' })
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={this.handleUser}>user</Button>
      </View>
    )
  }
}