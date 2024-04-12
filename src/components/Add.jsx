import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadImg from '../images/uploadimage.webp'


function Add() {

  const [preview,setPreview]= useState("")
  const [show, setShow] = useState(false);

  // useEffect(()=>{
  //   if(projectDetails.projectImage.type=="image/png"||projectDetails.projectImage.type=="image/jpg"||projectDetails.projectImage.type=="image/jpeg"){
  //     setImageFileStatus(true)
  //     setPreview(URL.createObjectURL(projectDetails.projectImage))
  //   }
  //   else{
  //     setImageFileStatus(false)
  //     setProjectDetails({...projectDetails,projectImage:""})
  //     setPreview(uploadImg)
  //   }
  // },[projectDetails.projectImage])

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className='btn btn-success ms-3'>Sell Now</button> 

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}}/>
                <img height={'200px'} src={uploadImg} className='img-fluid' alt="" />
              </label>
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className='mb-2'>
                <input type="text" className="form-control" placeholder='Product Name'/>
              </div>
              <div className='mb-2'>
                <input type="text" className="form-control" placeholder='MRP'/>
              </div>
              <div className='mb-2'>
                <input type="text" className="form-control" placeholder='Starting Price'/>
              </div>
              <div className='mb-2'>
                <input type="text" className="form-control" placeholder='Bid ending date'/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={3000}/>
    </>
  )
}

export default Add