import React, { Component } from 'react'

class EventBinding extends Component {
    constructor() {
        super()

        this.state = {
            message: "Hello"
        }
        //3rd way
        //this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage() {
    //     console.log(this)
    //     this.setState({
    //         message: "Thank you"
    //     })
    // }

    changeMessage = () => {
        console.log(this)
        this.setState({
            message: "Thank you"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change</button> */}

                {/* 1st way */}
                {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Change</button> */}

                {/* 2nd way */}
                {/* <button className="btn btn-primary" onClick={() =>{this.changeMessage()}}>Change</button> */}

                {/* 3rd way */}
                {/* <button className="btn btn-primary" onClick={this.changeMessage}>Change</button> */}

                {/* 4th way */}
                <button className="btn btn-primary" onClick={this.changeMessage}>Change</button>
            </div>
        )
    }
}

export default EventBinding