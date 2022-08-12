import React, {useState} from 'react'

function HookWithArray() {
    const [items, setItems] = useState([])

    const addNumber = () => {
        setItems([...items,
        {
            id: items.length + 1,
            value: Math.floor(Math.random() * 15) + 1
        }

        ])
    }
    return (
        <div>
            <button onClick={addNumber} className=" btn btn-primary">Add Number</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookWithArray