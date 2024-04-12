import React from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

function Products() {
  return (
    <div>
      <Header/>
      <div className='dash'>
      <div className="r4 mb-5 container">
          <h2 className='text-center fw-bolder cc pb-3'>Start Bidding Now</h2>
          <div className="row">
            <div className="col-lg-3">
              <div><ProductCard/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products