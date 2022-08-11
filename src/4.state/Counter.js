import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            id: 1,
            name: "Scott",
            isAdmin: true,
            department: null,
            grade: undefined,
            address: { city: "Boston", country: "USA" },
            // getMessage: getMessage() { return "Welcome to State in ReactJS" } ,
            getMessageOne: function () { return "You can use anonymous functions" },
            getMessageTwo: (function () { return "This is IIF" })(),
            getMessageThree: () => "This is fat arrow function",
            subjects: ["Maths", "Physics", "Chemistry"]
        }
    }


    render() {
        let { id, name, isAdmin, department, grade, address,
            getMessage, getMessageOne, getMessageTwo,
            getMessageThree, subjects } = this.state
        return (
            <div>
                <h4>Id : {id}</h4>
                <h4>Name : {name}</h4>
                <h4>IsAdmin : {isAdmin ? "True" : "False"}</h4>
                <h4>Department : {department ? department : "Department details are not available"}</h4>
                <h4>Grade : {grade ? grade : "Grade info is missing"}</h4>
                <h4>City : {address.city}</h4>
                <h4>Country : {address.country}</h4>
                {/* <h4>Message : {getMessage()}</h4> */}
                <h4>MessageOne : {getMessageOne()}</h4>
                <h4>MessageTwo : {getMessageTwo}</h4>
                <h4>MessageThree : {getMessageThree()}</h4>
                <h4>Subjects : {subjects[0]}</h4>
            </div>
        )
    }
}

export default Counter