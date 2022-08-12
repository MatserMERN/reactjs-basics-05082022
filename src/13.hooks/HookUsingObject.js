import React, {useState} from 'react'

function HookUsingObject() {
    const [user, setUser] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <h1>User Form</h1>
        <form>
            <label>FirstName</label>
            <input type="text" 
                   value={user.firstName} 
                   onChange={(event) => setUser({...user, firstName: event.target.value})}
                   className="form-control"/>

            <br />
            <label>LastName</label>
            <input type="text" 
                   value={user.lastName} 
                   onChange={(event) => setUser({...user, lastName: event.target.value})}
                   className="form-control"/>
            <br />
            <h2>FirstName is : {user.firstName}</h2>
            <h2>LastName is : {user.lastName}</h2>
        </form>
    </div>
  )
}

export default HookUsingObject