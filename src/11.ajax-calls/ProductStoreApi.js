import React, { Component } from 'react'
import { fakeProductStore } from './fakeAPIStore/fakeProductStore'

export class ProductStoreApi extends Component {
    constructor(){
        super()

        this.state ={
            products: []
        }
    }

    componentDidMount(){
        fakeProductStore.get("/products")
        .then(response => this.setState({products: response.data.data}))
    }
  render() {
    console.log(this.state.products)
    return (
      <div>
        <h1>Product Store Data</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {this.state.products.map(product => (
                    <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.title}</td>
                        <td>{product.category.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}

export default ProductStoreApi