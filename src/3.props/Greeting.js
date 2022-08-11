import React from 'react'

const Greeting = (props) => {
  console.log(props)
  let { id, name, isAdmin, department, grade, address,
    getMessage, getMessageOne, getMessageTwo,
    getMessageThree, subjects, children } = props
  return (
    <div>
      <h4>Id : {id}</h4>
      <h4>Name : {name}</h4>
      <h4>IsAdmin : {isAdmin ? "True" : "False"}</h4>
      <h4>Department : {department ? department : "Department details are not available"}</h4>
      <h4>Grade : {grade ? grade : "Grade info is missing"}</h4>
      <h4>City : {address.city}</h4>
      <h4>Country : {address.country}</h4>
      <h4>Message : {getMessage()}</h4>
      <h4>MessageOne : {getMessageOne()}</h4>
      <h4>MessageTwo : {getMessageTwo}</h4>
      <h4>MessageThree : {getMessageThree()}</h4>
      <h4>Subjects : {subjects[0]}</h4>
      <h4>Child : {children}</h4>
    </div>
  )
}

export default Greeting