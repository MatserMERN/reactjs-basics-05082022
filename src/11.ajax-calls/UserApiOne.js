import React, { Component } from 'react'
import axios from 'axios'
import { fakeUserApi } from './fakeAPIStore/fakeUserAPI'

export class UserApiOne extends Component {
    constructor(){
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fakeUserApi.get("/users")
        .then(response => this.setState({users: response.data}))
    }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Latitude</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td> 
                        <td>{user.name}</td> 
                        <td>
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </td> 
                        <td>{user.address.city}</td> 
                        <td>{user.address.zipcode}</td> 
                        <td>{user.address.geo.lat}</td> 
                        <td>{user.phone}</td> 
                        <td>
                            <a href={`http://${user.website}`} target="_blank">{user.website}</a>
                        </td> 
                        <td>{user.company.name}</td> 
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}

export default UserApiOne