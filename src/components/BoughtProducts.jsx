import React, { useEffect, useState } from 'react'
import { getUserBoughtProductAPI, removeBoughtAPI } from '../services/allAPI';

function BoughtProducts() {
  
  const [userBoughtProducts,setUserBoughtProducts]=useState([])

  const getUserBoughtProducts = async () => {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await getUserBoughtProductAPI(reqHeader);
        console.log(result);
        if (result.status == 200) {
          setUserBoughtProducts(result.data);
        }
      } catch (err) {
        console.log(err);
      }
  };

  const handleDeleteBought=async(boughtid)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
      }

      const result = await removeBoughtAPI(boughtid,reqHeader)
      if(result.status==200){
        getUserBoughtProducts()
      }
      else{
        console.log(result);
      }
    }
  }

  useEffect(()=>{
    getUserBoughtProducts()
  },[])

  console.log(userBoughtProducts);
  return (
    <div>
      <h4 className='text-center cc p-2'>Bought Products</h4>
      
        {userBoughtProducts?.length>0?userBoughtProducts.map(item=>(
          <div className='border'>
          <div className='row p-2'>
          <div className="col-6 d-flex justify-content-between">
              <h6>{item.pdName}</h6>
          </div>
          <div className="col-3">
            <p className='m-0'>Price : <span className='fw-bolder text-danger'>{item.price}</span></p>
          </div>              
          <div className="col-3 d-flex align-items-center justify-content-center">
              <div onClick={()=>handleDeleteBought(item._id)} className='btn'><i class="text-danger fa-solid fa-trash-can"></i></div>
          </div>
          </div>
          </div>
        ))
        :
        <div className='text-danger p-3'>No items!!!</div>
        }
            

    </div>
  )
}

export default BoughtProducts