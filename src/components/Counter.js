import React, { Component } from 'react'

class Counter extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState((prevState) => ({ //props also passed in ()
      count: prevState.count + 1      //+props.addValue
    }))
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
          //always log this way
    //   console.log('Callback', this.state.count)
    // })
    // this.state.count = this.state.count + 1
        //always log not this way
    // console.log(this.state.count)
  }

  incrementFive() {
    console.log('Inside incrementFive')
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter