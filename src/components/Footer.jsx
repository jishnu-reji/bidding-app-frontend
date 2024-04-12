import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/bidhublo.png'


function Footer() {
  return (
    <>
    <div className='text-white pt-1 bg-dark'>
        <div className='container mt-4 w-100'>
          <div className='footer-content d-flex justify-content-between'>
            <div className='media' style={{width:'400px'}}>
              <img style={{height:"50px"}} src={image1} alt=""/>
              <p style={{textAlign:'justify'}} className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque qui deserunt totam dolor! Aspernatur placeat, animi numquam reiciendis</p> 
              <p>Code licenced MIT, docs CC BY 3.0</p>
              <p>Currently v5.3.2</p>
            </div>
            <div className='links d-flex flex-column'>
              <h5>Links</h5>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
              <Link to={'/products'} style={{textDecoration:'none',color:'white'}}>Products</Link>
              <Link to={'/dashboard'} style={{textDecoration:'none',color:'white'}}>Dashboard</Link>
            </div>
    
            <div className='guides d-flex flex-column'>
              <h5>Guides</h5>
              <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React JS</a>
              <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Routing</a>
              <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
            </div>
    
            <div className='contact d-flex flex-column'>
              <h5>Contact Us</h5>
              <div className="d-flex">
                <input type="text" className='form-control me-1' placeholder='Email id Please'/>
                <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
              </div>
              <div className="d-flex justify-content-between pt-3">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
              </div>
            </div>
          </div>
          <p className='text-center mt-2 pb-4'>Copyright &copy; 2024 BidsHub. Built with React.</p>
        </div>
    </div>
    </>
  )
}

export default Footer