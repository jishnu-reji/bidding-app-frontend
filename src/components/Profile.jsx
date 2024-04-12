import React, { useState } from 'react'
import image1 from '../images/uploadProfile.png'
import { Collapse } from 'react-bootstrap'

function Profile() {

  const [open, setOpen] = useState(false);

  return (
    <div className='p-3'>
      <div  className='d-flex p-3 flex-column align-items-center'>
        <label className='text-center'>
          <input type="file" style={{display:'none'}}/>
          <img width={'150px'} height={'150px'} src={image1} alt="" />
        </label>
        <h3 className='pt-2'>Jishnu</h3>
      </div>
      <h5>Address</h5>
      <p>Jishnu Bhavan, Chemmananathukara PO Vaikom</p>
      <h5>Phone</h5>
      <p>8129387240</p>
      <div className="d-flex justify-content-between">
          <h4 className='text-warning'>Edit Profile</h4>
          <button onClick={() => setOpen(!open)} className='btn'><i className="fa-solid fa-chevron-down"></i></button>
      </div>

      <Collapse in={open}>
      <div className='w-100'>
        <div className='mt-2'>
          <input type="text" className='form-control' placeholder='Address'/>
        </div>
        <div className='mt-2'>
          <input type="text" className='form-control' placeholder='Phone'/>
        </div>
        <div className='mt-2 d-grid'>
          <button className="btn btn-warning">Update</button>
        </div>
      </div>
      </Collapse>

    </div>
  )
}

export default Profile
