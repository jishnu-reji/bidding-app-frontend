import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import image1 from '../images/watch.jpeg'

function PlacedBids() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='tab'>
      <h4 className='text-center p-2'>Placed Bids</h4>
      <table className='table'>
        <thead>
          <tr>
            <th>Caption</th>
            <th>Your Bid</th>
            <th>Current Bid</th>
            <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
          </tr>
        </thead>
        <tbody>
            <tr >
            <td className='fw-bolder'>Smart Watch</td>
            <td className='fw-bolder'>7000</td>
            <td><span className='fw-bolder text-danger'>7500</span></td>
            <td><button onClick={handleShow} className='btn btn-warning'>Place new Bid</button></td>
          </tr>
        </tbody>
      </table>
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

export default PlacedBids