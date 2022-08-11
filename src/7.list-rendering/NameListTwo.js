import React from 'react'

function NameListTwo() {
    const names = ["Scott", "Adam", "Tuan"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return nameList
}

export default NameListTwo