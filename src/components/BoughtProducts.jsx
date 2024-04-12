import React from 'react'

function BoughtProducts() {
  return (
    <div>
      <h4 className='text-center p-2'>Bought Products</h4>
      <div className='border'>
            <div className='row p-2'>
                <div className="col-6 d-flex justify-content-between">
                    <h5>Smart Watch</h5>
                </div>
                <div className="col-3">
                  <p className='m-0'>Price : <span className='fw-bolder text-danger'>8000</span></p>
                </div>              
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <div className='btn'><i class="text-danger fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoughtProducts