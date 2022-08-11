import React from 'react'

const FunctionClick = () => {
    function clickHandler(){
        console.log('Button is Clicked - Function')
    }

    function getMessage(message){
        console.log(message)
    }
  return (
    <div>
        <h1>Function Click</h1>
        <button onClick={clickHandler} className="btn btn-primary">Click</button>&ensp;
        <button onClick={() => getMessage("Welcome to event handling")} className="btn btn-secondary">Click</button>
    </div>
  )
}

export default FunctionClick