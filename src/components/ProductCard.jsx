import React, { useContext } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { SERVER_URL } from '../services/serverURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBidAPI } from '../services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';
// import socket from '../socket/socket';

function ProductCard({displayData,loginStatus}) {

  const [show, setShow] = useState(false);
  const [bidValue,setBidValue]= useState("")  
  const {addResponse,setAddResponse} = useContext(addResponseContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addbid =async()=>{
    if(bidValue>displayData.highBid){
      const reqBody ={
        pdName:displayData.productName,pdImage:displayData.productImage,productId:displayData._id,bidPrice:bidValue
      }
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        try{
          const result = await addBidAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            toast.success("Bid Placed Successfully!!!")
            setAddResponse(result)
            // socket.emit('change',{result})
            setTimeout(() => {
              handleClose()
            }, 3000);
          }
          if(result.status==201){
            toast.success("Bid updated Successfully!!!")
            setAddResponse(result)
            setTimeout(() => {
              handleClose()
            }, 3000);
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
      toast.warning("Please enter a bid higher than the current Bid")
    }
    
  }

  const handleBid = () =>{
    if(loginStatus){
      
      addbid()
    }
    else{
      toast.warning("Login to place bid on Products")
    }
  }

  return (
    <div>
        <div className="card pcc d-flex p-3 flex-column align-items-center">
            <h3 className='fw-bolder'>{displayData?.productName}</h3>
            <p className='mb-2'>MRP : {displayData?.mrp}</p>
            <img style={{height:"270px",maxWidth:"100%"}} className='img-fluid' src={`${SERVER_URL}/uploads/${displayData.productImage}`} alt="" />
            <p className='mb-0 mt-2'>Starting Price : {displayData?.stPrice}</p>
            <h5 className='mb-1'>Highest Bid : <span className='text-danger fw-bolder'>{displayData?.highBid}</span></h5>
            <p className='mb-1'>Bidding ends on : <span className='fw-bolder'>{displayData?.endDate}</span></p>
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
              <img style={{height:"300px",width:"auto"}} className='img-fluid' src={`${SERVER_URL}/uploads/${displayData.productImage}`} alt="" />
            </div>
            <div className="col-lg-7 d-flex flex-column justify-content-center">
              <h4 className='text-center fw-bolder'>{displayData?.productName}</h4>
              <h5 className='mb-1 text-center mb-3'>Highest Bid : <span className='text-danger fw-bolder'>{displayData?.highBid}</span></h5>
              <div>
                <input type="text" onChange={(e)=>setBidValue(e.target.value)} className="form-control" placeholder='enter your Bid amount'/>
              </div>
              <button onClick={handleBid} className='btn btn-warning mt-2'>Place your Bid</button>
              <button onClick={handleClose} className='btn btn-secondary mt-2'>Cancel</button>
            </div>
          </div>
          <ToastContainer position="top-center" theme="colored" autoClose={3000}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProductCard