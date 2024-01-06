import { Component } from 'react'
import './app.scss'

class App extends Component {

  globalData = {
    code: ''
  }

  async componentWillMount() {
    const { code } = await wx.login()
    this.globalData = code
  }

  render() {
    return (
      this.props.children
    )
  }
}

export default App
