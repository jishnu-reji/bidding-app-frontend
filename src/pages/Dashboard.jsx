import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import PlacedBids from '../components/PlacedBids'
import BoughtProducts from '../components/BoughtProducts'

function Dashboard() {
  return (
    <>
      <Header showSearch/>
      <div style={{minHeight:"100vh"}} className="dash container">
        <div className="row">
          <div className="col-lg-8">
            <div style={{minHeight:"50vh"}} className='border'>
              <PlacedBids/>
            </div>
            <div style={{minHeight:"50vh"}} className='border'>
              <BoughtProducts/>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{minHeight:"100vh"}} className='border'><Profile/></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard