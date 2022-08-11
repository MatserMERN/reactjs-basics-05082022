import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(){
        super()
        console.log('Constructor of B')
        this.state = {

        }
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of B')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of B')
    }

  render() {
    console.log('render of B')
    return (
      <div>LifeCycleA</div>
    )
  }
}

export default LifeCycleB