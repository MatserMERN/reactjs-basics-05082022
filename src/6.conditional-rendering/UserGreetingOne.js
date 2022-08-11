import React, { Component } from 'react'

export class UserGreetingOne extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        let message
        if(this.state.isLoggedIn){
            message = <div><h1>Welcome Scott</h1></div>
        } else {
            message = <div><h1>Welcome Guest</h1></div>
        }
        return message
    }
}

export default UserGreetingOne