import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('Button is Clicked - Class')
    }

  render() {
    return (
      <div>
        <h1>Class Click</h1>
        <button className="btn btn-primary" onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick