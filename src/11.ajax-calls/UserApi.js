import React, { Component } from 'react'

export class UserApi extends Component {
    constructor(){
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({users: data}))
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

export default UserApi