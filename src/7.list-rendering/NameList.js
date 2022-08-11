import React from 'react'

function NameList() {
    const names = ["Scott", "Adam", "Tuan"]
  return (
    <div>
        <h1>NameList</h1>
        <ul className="list-group w-50">
            <li className="list-group-item w-50">{names[0]}</li>
            <li className="list-group-item w-50">{names[1]}</li>
            <li className="list-group-item w-50">{names[2]}</li>
        </ul>
    </div>
  )
}

export default NameList