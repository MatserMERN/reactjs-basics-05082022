import React from 'react'

const Greeting = (props) => {
  let {id, name} = props
  console.log(id, name)
  return (
    <div>
       <h1>Student Id is {id} and name is {name}</h1> 
    </div>
  )
}

export default Greeting