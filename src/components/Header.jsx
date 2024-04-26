import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image1 from '../images/bidhublo.png'
import { Link } from 'react-router-dom';
import { searchProductContext } from '../contexts/ContextAPI';

function Header({showSearch}) {

  const [loginStatus,setLoginStatus]= useState(false)
  const {searchProduct,setSearchProduct}= useContext(searchProductContext)
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoginStatus(true)
    }
    else{
      setLoginStatus(false)
    }
  },[])

  return (
    <div style={{zIndex:"10"}} className='bg-dark position-fixed w-100 top-0'>
    <Navbar expand="lg" className="container">
      <Container fluid>
        <Navbar.Brand><Link to={'/'}><img style={{height:"50px"}} src={image1} alt=""/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          { !showSearch && <Form className="ms-auto me-auto d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              onChange={(e)=>setSearchProduct(e.target.value)}
              className="me-2"
              aria-label="Search"
            />
          </Form>}  
          <Nav
            className="ms-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {loginStatus &&
              <>
                <Nav.Link><Link className='he fw-bolder' to={'/'}>HOME</Link></Nav.Link>
                <Nav.Link><Link className='he fw-bolder' to={'/products'}>BID</Link></Nav.Link>
                <Nav.Link><Link className='he fw-bolder' to={'/sell'}>SELL</Link></Nav.Link>
                <Nav.Link><Link className='he fw-bolder' to={'/dashboard'}>DASHBOARD</Link></Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header