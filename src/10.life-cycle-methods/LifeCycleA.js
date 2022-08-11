import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(){
        super()
        console.log('Constructor of A')
        this.state = {

        }
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of A')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of A')
    }

  render() {
    console.log('render of A')
    return (
      <div>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA