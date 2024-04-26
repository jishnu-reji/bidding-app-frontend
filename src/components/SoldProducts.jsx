import React, { useEffect, useState } from 'react'
import { getUserDetailsAPI, getUserSoldProductAPI, removeSoldAPI } from '../services/allAPI';
import { Slide } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SoldProducts({reload}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) =>{
    getUserDetails(id)
    setShow(true);
  } 

  const [bidderDetails,setBidderDetails]= useState({})
  const [userSolsProducts,setUserSolsProducts]=useState([])

    const getUserSoldProducts = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };
        try {
          const result = await getUserSoldProductAPI(reqHeader);
          console.log(result);
          if (result.status == 200) {
            setUserSolsProducts(result.data);
          }
        } catch (err) {
          console.log(err);
        }
    };

    const handleDeleteSold=async(sid)=>{
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
  
        const result = await removeSoldAPI(sid,reqHeader)
        if(result.status==200){
          getUserSoldProducts()
        }
        else{
          console.log(result);
        }
      }
    }
    const getUserDetails=async(uid)=>{
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        const result = await getUserDetailsAPI(uid,reqHeader)
        if(result.status==200){
          setBidderDetails(result.data)
        }
        else{
          console.log(result);
        }
      }
    }

    useEffect(()=>{
        getUserSoldProducts()
    },[reload])


    console.log(bidderDetails);
  return (
    <div>
        <h3 className='text-center cc p-3'>Sold Products</h3>
        <div className='border'>
            {userSolsProducts?.length>0?userSolsProducts.map(item=>(
            <div className='row p-2'>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
                <h5>{item.pdName}</h5>
                <p className='m-0'>Price : <span className='fw-bolder text-danger'>{item.price}</span></p>
            </div>
            <div className="col-lg-2 d-flex align-items-center justify-content-center">
                <div onClick={()=>handleShow(item.bidderId)} className='btn'><i class="fa-solid text-info fa-circle-info"></i></div>
            </div>
            <div className="col-lg-2 d-flex align-items-center justify-content-center">
                <div onClick={()=>handleDeleteSold(item._id)} className='btn'><i class="text-danger fa-solid fa-trash-can"></i></div>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buyer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className='ps'>Name</h5>
          <p>{bidderDetails.name}</p>
          <h5 className='ps'>Address</h5>
          <p>{bidderDetails.address}</p>
          <h5 className='ps'>Phone</h5>
          <p>{bidderDetails.phone}</p>
        </Modal.Body>
        
      </Modal>
        </div>
            ))
            :
            <div  className='text-danger p-3'>Empty!!!</div>
            }

        </div>
    </div>
  )
}

export default SoldProducts