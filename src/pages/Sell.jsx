import React from 'react'
import Header from '../components/Header'
import Add from '../components/Add'
import image1 from '../images/watch.jpeg'
import SoldProducts from '../components/SoldProducts'



function Sell() {
  return (
    <div>
      <Header showSearch/>
      <div style={{minHeight:"100vh"}} className="dash container">
        <div className='py-3 d-flex justify-content-center'>
          <h3>Hey Jishnu Sell your Products through BidHub</h3> 
          <Add/>
        </div>

        <div className="r4 mb-5 container">
          <h3 className='mb-3'>All Products</h3>
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4">
                  <div >
                  <div className="card d-flex p-3 flex-column align-items-center">
                  <h4 className='fw-bolder'>Smart Watch</h4>
                  <p className='mb-2'>MRP : 10000</p>
                  <img style={{height:"270px",maxWidth:"100%"}} className='img-fluid' src={image1} alt="" />
                  <p className='mb-0 mt-2'>Starting Price : 7000</p>
                  <h5 className='mb-1'>Highest Bid : <span className='text-danger fw-bolder'>7800</span></h5>
                  <p className='mb-1'>Bidding ends on : <span className='fw-bolder'>17 april 2024</span></p>
                  <h6 className='mb-0'></h6>
                  <button className='btn btn-warning w-100 fw-bolder'>Sell Now</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div style={{minHeight:"100vh"}} className='border'>
                <SoldProducts/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Sell