import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Component, PureComponent } from 'react'

export default class Index extends Component {

  componentWillMount() {
    console.log(getApp().$app.globalData)
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