import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Adminproducts() {
  return (
    <>
    <Header/>
        <div style={{marginTop:"70px"}} className='container-fluid'>
          <div className="row">
            <div style={{minHeight:"100vh",backgroundColor:"black"}} className="col-lg-2 p-3 d-flex flex-column">
              <Link to={'/admin'} className='fw-bolder mb-3' style={{color:'white',textDecoration:'none',fontSize:"20px"}}><i class="fa-solid fa-house me-2"></i>Users</Link>
              <Link to={'/adminproduct'} className='fw-bolder' style={{color:'white',textDecoration:'none',fontSize:"20px"}}><i class="fa-solid fa-cart-shopping me-2"></i>Products</Link>
            </div>
            <div className="col-lg-10">
  
            </div>
          </div>
        </div>
    </>
  )
}

export default Adminproducts