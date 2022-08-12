import React, { Component } from 'react'
import { studentApi } from './fakeAPIStore/studentApi'

class StudentMongoAPI extends Component {
    constructor() {
        super()

        this.state = {
            students: [],
            _id: '',
            name: '',
            email: '',
            city: ''
        }
    }

    componentDidMount() {
        this.getStudents()
    }

    getStudents() {
        studentApi.get("/students")
            .then(response => this.setState({ students: response.data }))
    }

    clearFileds() {
        this.setState({
            name: '',
            email: '',
            city: ''
        })
    }

    addStudent() {
        const student = {
            name: this.state.name,
            email: this.state.email,
            city: this.state.city
        }
        studentApi.post("/students", student)
            .then(() => {
                this.getStudents()
                this.clearFileds()
            })
            .catch(err => console.log(err));
    }

    updateStudent() {
        const student = {
            name: this.state.name,
            email: this.state.email,
            city: this.state.city
        }

        studentApi.put(`/students/${this.state._id}`, student)
            .then(() => {
                this.getStudents()
                this.clearFileds()
            })
            .catch(err => console.log(err))
    }

    editStudent(student) {
        this.setState({
            _id: student._id,
            name: student.name,
            email: student.email,
            city: student.city
        })
    }

    deleteStudent(studentId) {
        studentApi.delete(`/students/${studentId}`)
            .then(() => this.getStudents())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <h1>Student Form</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                        <tr>
                            <th>
                                <input type="text"
                                    value={this.state.name}
                                    onChange={(event) => this.setState({ name: event.target.value })} />
                            </th>
                            <th>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={(event) => this.setState({ email: event.target.value })} />
                            </th>
                            <th>
                                <input type="text"
                                    value={this.state.city}
                                    onChange={(event) => this.setState({ city: event.target.value })} />
                            </th>
                            <th>
                                <button className="btn btn-primary"
                                    onClick={() => this.addStudent()}
                                >Add</button>
                            </th>
                            <th>
                                <button className="btn btn-warning"
                                    onClick={() => this.updateStudent()}
                                >Update</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student => (
                                <tr key={student._id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.city}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => this.editStudent(student)}>Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => this.deleteStudent(student._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentMongoAPI