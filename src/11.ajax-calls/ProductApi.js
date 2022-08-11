import React, { Component } from 'react'
import { fakeProductApi } from './fakeAPIStore/fakeProductAPI'

export class ProductApi extends Component {
    constructor(){
        super()

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fakeProductApi.get("/products")
        .then(response => this.setState({products: response.data}))
    }
  render() {
    return (
      <div>
        <h1>Product List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>
                                <img src={product.image} alt={product.title} height="100px"/>
                            </td>
                            <td>{product.rating.rate}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default ProductApi