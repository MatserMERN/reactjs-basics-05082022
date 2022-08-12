import React, { Component } from 'react'
import ParentTwo from './ParentTwo'

export class ParentOne extends Component {
    constructor(){
        super()

        this.state = {
            name: "Scott"
        }
    }
  render() {
    return (
      <div>
        <ParentTwo name={this.state.name} />
      </div>
    )
  }
}

export default ParentOne