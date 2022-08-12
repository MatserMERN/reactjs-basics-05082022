import React, { Component } from 'react'

export class ParentThree extends Component {
    render() {
        return (
            <div><h1>
                Parent Three Value :{this.props.name}
            </h1></div>
        )
    }
}

export default ParentThree