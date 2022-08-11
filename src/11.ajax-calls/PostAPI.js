import React, { Component } from 'react'

export class PostAPI extends Component {
    constructor(){
        super()

        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response =>response.json())
        .then(data => this.setState({posts: data}))
    }
  render() {
    return (
      <div>
        <h1>Post List</h1>
        {/* {
            this.state.posts.map(post => (
                <ul key={post.id} className="list-group">
                    <li className="list-group-item">{post.id}</li>
                    <li className="list-group-item">{post.title}</li>
                    <li className="list-group-item">{post.body}</li>
                    <br />
                </ul>
            ))
        } */}
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Ttile</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default PostAPI