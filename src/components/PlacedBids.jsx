import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { addBidAPI, getUserBidsAPI } from '../services/allAPI';
import { SERVER_URL } from '../services/serverURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PlacedBids() {

  const [userBids,setUserBids] = useState([])
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [bidValue,setBidValue]= useState("")  
  const [reload,setReload] = useState()

  const handleClose = () =>{
    setShow(false);
    setBidValue("")
  } 

  const getUserBids =async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      try{
        const result = await getUserBidsAPI(reqHeader)
        console.log(result);
        if(result.status==200){
          setUserBids(result.data)
        }
      }
      catch(err){
        console.log(err);
      }
    }
  }

  const addbid =async(displayData)=>{
    if(bidValue>displayData.highBid){
      const reqBody ={
        pdName:displayData.pdName,pdImage:displayData.pdImage,productId:displayData.productId,bidPrice:bidValue
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
          if(result.status==201){
            toast.success("Bid updated Successfully!!!")
            setReload(result)
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


  useEffect(()=>{
    getUserBids()
  },[reload])

  return (
    <div className='tab'>
      <h4 className='text-center cc p-2'>Placed Bids</h4>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Your Bid</th>
            <th>Highest Bid</th>
            <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
          </tr>
        </thead>
        <tbody>
          {userBids?.length>0?userBids.map(bids=>(
            <tr >
            <td className='fw-bolder'>{bids.pdName}</td>
            <td className='fw-bolder'>{bids.bidPrice}</td>
            <td><span className='fw-bolder text-danger'>{bids.highBid}</span></td>
            <td><button onClick={handleShow} className='btn btn-warning'>Place new Bid</button></td>
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
              <img style={{height:"300px"}} className='img-fluid' src={`${SERVER_URL}/uploads/${bids.pdImage}`} alt="" />
            </div>
            <div className="col-lg-7 d-flex flex-column justify-content-center">
              <h4 className='text-center fw-bolder'>{bids.pdName}</h4>
              <h5 className='mb-1 text-center mb-3'>Highest Bid : <span className='text-danger fw-bolder'>{bids.highBid}</span></h5>
              <div>
                <input type="text" value={bidValue} className="form-control" onChange={(e)=>setBidValue(e.target.value)} placeholder='enter your Bid amount'/>
              </div>
              <button onClick={()=>addbid(bids)} className='btn btn-warning mt-2'>Place your Bid</button>
              <button onClick={handleClose} className='btn btn-secondary mt-2'>Cancel</button>
            </div>
          </div>
          <ToastContainer position="top-center" theme="colored" autoClose={3000}/>
        </Modal.Body>
      </Modal>
          </tr>
          
          ))
          :
          <dir className='text-danger p-3'>No bids right Now!!!</dir>
          }
          
        </tbody>
      </table>
      
      </div>
  )
}

export default PlacedBids