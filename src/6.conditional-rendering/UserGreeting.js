import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    <h1>Welcome Scott</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Welcome Guest</h1>
                </div>
            )
        }

    }
}

export default UserGreeting