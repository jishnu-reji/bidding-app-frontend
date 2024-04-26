import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { getAllProductAPI } from '../services/allAPI'
import { addResponseContext, searchProductContext } from '../contexts/ContextAPI'

function Products() {

  const [allProducts,setAllProducts] = useState([])
  const [loginStatus,setLoginStatus]= useState(false)
  const {searchProduct,setSearchProduct}= useContext(searchProductContext)
  const {addResponse,setAddResponse} = useContext(addResponseContext)

  const getAllProducts = async()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    try{
      const result = await getAllProductAPI(searchProduct,reqHeader)
      console.log(result);
      if(result.status==200){
        setAllProducts(result.data)
      }
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoginStatus(true)
    }
    else{
      setLoginStatus(false)
    }
  },[])

  console.log(searchProduct);
  useEffect(()=>{
    getAllProducts()
  },[searchProduct,addResponse])

  console.log(allProducts);

  return (
    <div>
      <Header/>
      <div style={{minHeight:"100vh"}} className='dash'>
      <div className="r4 mb-5 container">
          <h2 className='text-center fw-bolder cc pb-3'>Start Bidding Now</h2>
          <div className="row">
            {allProducts?.length>0 && allProducts.map(product=>(
              <div className="col-lg-3">
              <div><ProductCard displayData={product} loginStatus={loginStatus}/></div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products