import React from 'react'

function SoldProducts() {
  return (
    <div>
        <h3 className='text-center p-3'>Sold Products</h3>
        <div className='border'>
            <div className='row p-2'>
                <div className="col-lg-9 d-flex flex-column justify-content-center">
                    <h5>Smart Watch</h5>
                    <p className='m-0'>Price : <span className='fw-bolder text-danger'>8000</span></p>
                </div>
                <div className="col-lg-3 d-flex align-items-center justify-content-center">
                    <div className='btn'><i class="text-danger fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SoldProducts