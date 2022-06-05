import React, { Component } from 'react'
//state
//step1-constructor and super
//step2-use this.state and onClick
//step3-use setState for onClick
class Message extends Component {

  constructor() {
    super()
    this.state = {
      message:'WelcomeClass'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;