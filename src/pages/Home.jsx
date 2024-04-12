import React, { useEffect } from 'react'
import Header from '../components/Header'
import image from '../images/mobile-group.png'
import ProductCard from '../components/ProductCard'
import image1 from '../images/Image (1).png'
import image2 from '../images/Image (2).png'
import image3 from '../images/Image (3).png'
import image4 from '../images/Image (4).png'
import AOS from 'aos'
import 'aos/dist/aos.css';


function Home() {

  useEffect(() => {
    AOS.init({duration:3000});
  }, [])

  return (
    <>
      <Header/>
      <div className='common'>
        <div className='container'>
          <div className="row" style={{minHeight:"100vh"}}>
            <div className="ban col-lg-5 d-flex flex-column justify-content-center">
              <div data-aos="zoom-out">
                <h1 className='m-0'>BidHub</h1>
                <h3 className='ms-1'>Your Bidding Partner</h3>
                <p className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum nulla id. Tempore non, cum quos mollitia dolores quisquam id dignissimos eligendi facilis voluptatem, fugiat fugit. Incidunt reprehenderit similique dolore!
                Nulla impedit blanditiis cupiditate officia. Corrupti quia adipisci esse, expedita, ut, doloremque aliquid dolore consequatur eum mollitia deserunt voluptate quod </p>
                <button className='btn btn-success ms-2'>Let's get Started</button>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-center align-items-center">
              <img className='img-fluid w-100' src="https://cdni.iconscout.com/illustration/premium/thumb/people-bidding-for-auction-7154360-5817943.png?f=webp" alt="" />
            </div> 
          </div>
        </div> 

        <div className='r2 py-5'>
          <div data-aos="zoom-in-up" className='container text-center'>
            <h2 className='mb-3'>India's Best Discount Auction Bidding Platform</h2>
            <p className=''>100% RISKFREE ONLINE AUCTIONS, WIN or BUY BRANDED NEW PRODUCTS AT UP TO 89% HUGE DISCOUNT <br />
                5 Free Credits On Sign Up, Worldwide Shipping , Latest Gadgets, Click To BID Easy Auctions <br />
                60000+ Members , 15000+ Completed Auctions , Always Fair Auction Guaranteed.</p>
          </div>
        </div> 

        <div className="r3 container py-5 d-flex flex-column align-items-center">
          <img className='img-fluid mb-4' src={image} alt="" />
          <h1 data-aos="zoom-in-up" className='fw-bolder'>Sell and Bid Anything Anywhere</h1>
          <div className="row rrr rounded p-5 mt-3 w-100">
            <div className="col-lg-3 d-flex justify-content-center align-items-center">
              <h3 className='fw-bolder m-0'>BID ON</h3>
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-between">
              <div className='d-flex  mb-5'><h5><i class="fa-regular fa-circle-check me-2"></i>Warehouse Products</h5></div>
              <div className='d-flex mb-0'><h5><i class="fa-regular fa-circle-check me-2"></i>Warehouse Closeouts</h5></div>
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-between">
              <div className='d-flex  mb-5'><h5><i class="fa-regular fa-circle-check me-2"></i>Overstock Surplus</h5></div>
              <div className='d-flex mb-0'><h5><i class="fa-regular fa-circle-check me-2"></i>Wholesale Stock</h5></div>
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-between">
              <div className='d-flex  mb-5'><h5><i class="fa-regular fa-circle-check me-2"></i>Manufacturer Stock</h5></div>
              <div className='d-flex mb-0'><h5><i class="fa-regular fa-circle-check me-2"></i>And More</h5></div>
            </div>
          </div>
        </div>

        <div className="r4 mb-5 container">
          <h1 data-aos="zoom-in-up" className='text-center fw-bolder pb-4'>Live Auctions</h1>
          <div className="row">
            <div className="col-lg-3">
              <div data-aos="slide-right"><ProductCard/></div>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <button className='btn btn-success'>View More Products</button>
          </div>
        </div>

        <div className="r5 mb-5 container">
        <div className="container mt-3 mb-5">
        <h1 className="text-center fw-bolder mb-4">Clint Reviews</h1>
        <div className="row">
          <div className="col-lg-3">
            <div data-aos="flip-right" className="card d-flex justify-content-center align-items-center flex-column p-3">
              <img style={{height:'70px'}} src={image1} alt="" />
              <h4>Max miller</h4>
              <div className="d-flex justify-content-center mb-2">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star "></i>
                <i className="fa-solid fa-star "></i>
              </div>
              <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur rerum neque molestias dolorem amet sit provident aspernatur ex doloremque.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div data-aos="flip-right" className="card d-flex justify-content-center align-items-center flex-column p-3">
              <img style={{height:'70px'}} src={image2} alt="" />
              <h4>Annie Mary</h4>
              <div className="d-flex justify-content-center mb-2">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
              </div>
              <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur rerum neque molestias dolorem amet sit provident aspernatur ex doloremque.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div data-aos="flip-right" className="card d-flex justify-content-center align-items-center flex-column p-3">
              <img style={{height:'70px'}} src={image3} alt="" />
              <h4>James Bond</h4>
              <div className="d-flex justify-content-center mb-2">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur rerum neque molestias dolorem amet sit provident aspernatur ex doloremque.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div data-aos="flip-right" className="card d-flex justify-content-center align-items-center flex-column p-3">
              <img style={{height:'70px'}} src={image4} alt="" />
              <h4>Dashamoolam Damu</h4>
              <div className="d-flex justify-content-center mb-2">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur rerum neque molestias dolorem amet sit provident aspernatur ex doloremque.</p>
            </div>
          </div>
        </div>
      </div>
        </div>     
      </div>
    </>
  )
}

export default Home