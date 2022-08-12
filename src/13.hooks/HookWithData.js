import React, {useState, useEffect} from 'react'

function HookWithData() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/api/students")
        .then(response => response.json())
        .then(data => setStudents(data))
    },[])
  return (
    <div>
        <h1>Student Info</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.city}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default HookWithData