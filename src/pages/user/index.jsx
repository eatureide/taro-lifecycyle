import { View, Text } from '@tarojs/components'
import { Component } from 'react'


export default class User extends Component {

  componentWillMount() {
    console.log(getApp().$app.globalData)
    console.log(wx.getStorageSync('code'))
    console.log(this)
  }

  render() {
    return (
      <View className='user'>
        <Text>user</Text>
      </View>
    )
  }
}