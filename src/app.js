import { Component } from 'react'
import './app.scss'
import redefineLifeCycle from './redefineLifeCycle'

async function prefixTask() {
  const { code } = await wx.login()
  wx.setStorageSync('code', code)
  if (this.globalData) this.globalData = code
}

redefineLifeCycle(prefixTask)

class App extends Component {

  globalData = {
    code: ''
  }

  async componentWillMount() {

  }

  render() {
    return (
      this.props.children
    )
  }
}

export default App
