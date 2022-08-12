import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count +1)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button className="btn btn-primary"
                onClick={incrementCount}
        >Increment</button>
    </div>
  )
}

export default HookCounter