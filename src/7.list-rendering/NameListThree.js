import React from 'react'

function NameListThree() {
    const persons = [
        {
            id:1,
            name: "Scott",
            age: 46,
            skill: "ReactJS"
        },
        {
            id:2,
            name: "Adam",
            age: 44,
            skill: "Angular"
        },
        {
            id:3,
            name: "Tuan",
            age: 42,
            skill: "C#"
        },
        {
            id:4,
            name: "Uma",
            age: 40,
            skill: "Javascript"
        }
    ]
    const personList = persons.map(person => (
           <ul key={person.id} className="list-group">
                <li className="list-group-item w-50" style={{textAlign: "center"}}>{person.id}</li>
                <li className="list-group-item w-50" style={{textAlign: "center"}}>{person.name}</li>
                <li className="list-group-item w-50" style={{textAlign: "center"}}>{person.age}</li>
                <li className="list-group-item w-50" style={{textAlign: "center"}}>{person.skill}</li>
                <br />
           </ul>))
  return personList
}

export default NameListThree