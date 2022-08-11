import React from 'react'

function NameListOne() {
    const names = ["Scott", "Adam", "Tuan", "Adam"]
    return (
        <div>
            <h1>NameList</h1>
            <ul className="list-group w-50">
                {
                    names.map((name, index) => <li key={index} className="list-group-item w-50">{name}</li>)
                }
            </ul>
            <br />
            <ul className="list-group w-50">
                {
                    names.map((name, index) => {
                        return <li key={index} className="list-group-item w-50">{name}</li>
                    })
                }
            </ul>
            <br />

            <ul className="list-group w-50">
            {
                    names.map((name, index) => (
                         <li key={index} className="list-group-item w-50">{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NameListOne