import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Footer from './components/Footer'
import Sell from './pages/Sell'
import Admin from './pages/Admin'
import Adminproducts from './pages/Adminproducts'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/sell' element={<Sell/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/adminproduct' element={<Adminproducts/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
