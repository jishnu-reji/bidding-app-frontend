import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadImg from '../images/uploadimage.webp'
import { addProductAPI } from '../services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';

function Add() {

  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [preview,setPreview]= useState("")
  const [show, setShow] = useState(false);
  const [imageFileStatus,setImageFileStatus] = useState(false)
  const ref = useRef();
  const [productDetails,setProductDetails] = useState({
    productName:"",mrp:"",stPrice:"",endDate:"",productImage:""
  })

  useEffect(()=>{
    if(productDetails.productImage.type=="image/png"||productDetails.productImage.type=="image/jpg"||productDetails.productImage.type=="image/jpeg"){
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(productDetails.productImage))
    }
    else{
      setImageFileStatus(false)
      setProductDetails({...productDetails,productImage:""})
      setPreview(uploadImg)
    }
  },[productDetails.productImage])

  console.log(productDetails);

  const handleClose = () => {
    setShow(false)
    setProductDetails({
      productName:"",mrp:"",stPrice:"",endDate:"",productImage:""
    })
  }
  const handleShow = () => setShow(true);

  const handleUpload = async()=>{
    const{productName,mrp,stPrice,endDate,productImage} = productDetails
    if(productName&&mrp&&stPrice&&endDate&&productImage){
      const reqBody = new FormData()
      reqBody.append("productName",productName)
      reqBody.append("mrp",mrp)
      reqBody.append("stPrice",stPrice)
      reqBody.append("endDate",endDate)
      reqBody.append("productImage",productImage)

      const token = sessionStorage.getItem("token")

      if(token){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }

        try{
          const result = await addProductAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            setAddResponse(result)
            handleClose()
          }
          else{
            toast.warning(result.response.data)
          }
        }
        catch(err){
          console.log(err);
        }
      }
    }
    else{
      toast.warning("Please fill the form completely!!!")
    }
  }

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
                <input type="file" style={{display:'none'}} onChange={(e)=>setProductDetails({...productDetails,productImage:e.target.files[0]})}/>
                <img height={'200px'} src={preview} className='img-fluid' alt="" />
              </label>
              {!imageFileStatus && <div className='text-danger'>*Upload only the following file types (png, jpg, jpeg) here!!!</div>}
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className='mb-2'>
                <input type="text" value={productDetails.productName} onChange={(e)=>setProductDetails({...productDetails,productName:e.target.value})} className="form-control" placeholder='Product Name'/>
              </div>
              <div className='mb-2'>
                <input type="text" value={productDetails.mrp} onChange={(e)=>setProductDetails({...productDetails,mrp:e.target.value})} className="form-control" placeholder='MRP'/>
              </div>
              <div className='mb-2'>
                <input type="text" value={productDetails.stPrice} onChange={(e)=>setProductDetails({...productDetails,stPrice:e.target.value})} className="form-control" placeholder='Starting Price'/>
              </div>
              <div className='mb-2'>
                <input type="text" ref={ref} onFocus={() => (ref.current.type = "date")} value={productDetails.endDate} onChange={(e)=>setProductDetails({...productDetails,endDate:e.target.value})} className="form-control" placeholder='Bid ending date'/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={3000}/>
    </>
  )
}

export default Add