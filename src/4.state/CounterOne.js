import React, { Component } from 'react'

export class CounterOne extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    addCounter(){
        //this.state.count = this.state.count + 1
    
        this.setState({
            count :  this.state.count + 1
        }, () => console.log(this.state.count))
        
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button className="btn btn-primary" onClick={() => this.addCounter()}>Add Count</button>
      </div>
    )
  }
}

export default CounterOne