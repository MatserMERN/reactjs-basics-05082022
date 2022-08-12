import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { getStudents } from './redux/actions/studentAction'

const StudentOne = () => {
  const students = useSelector(state => state.studentList.students)
  console.log(students)
  const dispatch = useDispatch()

  const fetchStudents =() =>{
    fetch("http://localhost:3001/api/students")
    .then(response => response.json())
    .then(data => dispatch(getStudents(data)))
  }
   
  useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <div>
        <h1>Student List</h1>
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
                  students && students.map(student => (
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

export default StudentOne