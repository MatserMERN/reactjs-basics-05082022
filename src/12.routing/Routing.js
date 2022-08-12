import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import FormOne from '../9.form-data/FormOne'
import ProductApi from '../11.ajax-calls/ProductApi'
import StudentMongoAPI from "../11.ajax-calls/StudentMongoAPI"

const Default = () => <div className="container"><h1>Welcome to React Routing</h1></div>
const Error = () => <div className="container"><h1>Please contact administrator</h1></div>

function Routing() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="nav-item nav-link active">Routing</Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <Link to="/home" className="nav-item nav-link active">Home</Link>
                <Link to="/products" className="nav-item nav-link">Products</Link>
                <Link to="/students" className="nav-item nav-link">Students</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Default />}></Route>
        <Route path='/home' element={<FormOne />}></Route>
        <Route path='/products' element={<ProductApi />}></Route>
        <Route path='/students' element={<StudentMongoAPI />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default Routing