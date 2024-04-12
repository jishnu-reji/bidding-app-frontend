import React from 'react'
import image1 from '../images/watch.jpeg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <div className="card d-flex p-3 flex-column align-items-center">
            <h3 className='fw-bolder'>Smart Watch</h3>
            <p className='mb-2'>MRP : 10000</p>
            <img style={{height:"270px",maxWidth:"100%"}} className='img-fluid' src={image1} alt="" />
            <p className='mb-0 mt-2'>Starting Price : 7000</p>
            <h5 className='mb-1'>Highest Bid : <span className='text-danger fw-bolder'>7800</span></h5>
            <p className='mb-1'>Bidding ends on : <span className='fw-bolder'>17 april 2024</span></p>
            <h6 className='mb-0'></h6>
            <button onClick={handleShow} className='btn btn-warning w-100 fw-bolder'>BID NOW</button>
        </div>

        <Modal

        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <div className="row">
            <div className="col-lg-5 d-flex justify-content-center">
              <img style={{height:"300px"}} className='img-fluid' src={image1} alt="" />
            </div>
            <div className="col-lg-7 d-flex flex-column justify-content-center">
              <h4 className='text-center fw-bolder'>Smart Watch</h4>
              <h5 className='mb-1 text-center mb-3'>Highest Bid : <span className='text-danger fw-bolder'>7800</span></h5>
              <div>
                <input type="text" className="form-control" placeholder='enter your Bid amount'/>
              </div>
              <button className='btn btn-warning mt-2'>Place your Bid</button>
              <button onClick={handleClose} className='btn btn-secondary mt-2'>Cancel</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProductCard