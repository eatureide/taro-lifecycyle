import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Component } from 'react'
import './index.scss'

export default class Index extends Component {

  componentWillMount() {
    console.log(getApp().$app.globalData)
    console.log(wx.getStorageSync('code'))
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}