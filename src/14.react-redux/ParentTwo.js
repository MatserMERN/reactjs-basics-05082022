import React, { Component } from 'react'
import ParentThree from './ParentThree'

export class ParentTwo extends Component {
  render() {
    const name = this.props.name
    return (
      <div>
        
        <ParentThree name={name} />
      </div>
    )
  }
}

export default ParentTwo