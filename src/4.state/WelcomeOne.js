import React, { Component } from 'react'

export class WelcomeOne extends Component {
    constructor(){
        super()

        this.state = {
            id : 1,
           name: "Scott" ,
           city: "Boston",
           isActive: true
        }
    }
  render() {
    const {id, name, city, isActive} = this.state
    return (
      <div>
        <h4>ID : {id}</h4>
        <h4>Name : {name}</h4>
        <h4>City : {city}</h4>
        <h4>IsActive : {isActive ? "True" : "False"}</h4>
      </div>
    )
  }
}

export default WelcomeOne