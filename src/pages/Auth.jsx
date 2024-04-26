import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from '../images/bidhub.png'
import { loginAPI, registerAPI } from '../services/allAPI';


function Auth({insideRegister}) {
  const navigate = useNavigate()
  const [googleDetails,setGoogleDetails] = useState(null)
  const [userDetails,setUserDetails] = useState({
      username:"",password:"",email:""
  })
  console.log(userDetails);

  const handleRegister =async()=>{
      const {username,password,email}=userDetails
      if(username&&password&&email){
        try{
            const result = await registerAPI(userDetails)
            console.log(result);
            if(result.status==200){
              toast.success(`Welcome ${result.data.username}..Please login to explore our website`)
              setUserDetails({username:"",email:"",password:""})
              setTimeout(()=>{
                navigate('/login')
              },2000)
            }
            else{
              toast.error(result.response.data)
              setUserDetails({username:"",email:"",password:""})
            }
          }catch(err){
            console.log(err);
          }
      }
      else{
          toast.warning("Please fill the form completely!!!")
      }
  }

  const handleLogin = async()=>{
    const {email,password}=userDetails
    if(email&&password){
        try{
            const result = await loginAPI(userDetails)
            if(result.status==200){
              sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
              sessionStorage.setItem("token",result.data.token)
              toast.success(`Welcome ${result.data.existingUser.username}...`)
              setUserDetails({username:"",email:"",password:""})
              setTimeout(() => {
                navigate('/')
              }, 2000);
            }
            else{
              toast.error(result.response.data)
            }
          }catch(err){
            console.log(err);
          }
    }
    else{
        toast.warning("Please fill the form completely!!!")
    }
  }

  console.log(googleDetails);

  useEffect(()=>{
      if(googleDetails){
          sessionStorage.setItem("user",JSON.stringify(googleDetails))
          toast.success("Login Successful")
          setTimeout(() => {
              navigate('/home')
          }, 2000);
      }
  },[googleDetails])
  return (
    <div className='log'>
    <div style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center">
        <div  style={{minHeight:"100vh",width:"100%"}} className="row r1">
            <div className="pp2 col-lg-8 d-flex justify-content-center align-items-center">
                <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png" alt="" />
            </div>
            <div className="pp1 d-flex flex-column justify-content-center align-items-center col-lg-4">
                <img className='pb-3' style={{width:"30%"}} src={image1} alt="" />
                {insideRegister?
                    <h2 className='fw-bolder'>REGISTER</h2>
                    :
                    <h2 className='fw-bolder'>LOGIN</h2>
                }
                
                <p>{insideRegister?"Register to Website":"Login to explore more"}</p>
                {
                    insideRegister&&
                    <input style={{backgroundColor:'#b8b3f8'}} value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} className='form-control w-75 mb-3' type="text" placeholder='Username'/>
                }
                <input style={{backgroundColor:'#b8b3f8'}} value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} className='form-control w-75 mb-3' type="mail" placeholder='email'/>
                <input style={{backgroundColor:'#b8b3f8'}} value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} className='form-control w-75 mb-3' type="password" placeholder='Password'/>

                {
                    insideRegister?
                    <button onClick={handleRegister} className='btn bb mb-3'>Register Now</button>
                    :
                    <button onClick={handleLogin} className='btn bb mb-3'>Login Now</button>
                }                 
                <div className='line w-75'></div>
                <p className='pt-3'><span className='fw-bolder'>OR</span> {insideRegister? "Register with" : "Login with"}</p>
                <GoogleLogin
                onSuccess={credentialResponse => {
                    const data = jwtDecode(credentialResponse.credential)
                    setGoogleDetails(data)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
                <div className='mt-5'>
                    {insideRegister?
                        <p>Alredy have an accout? <Link to={'/login'} >Login</Link></p>
                        :
                        <p>Dont have an account? <Link to={'/register'} >Register</Link></p>
                    }
                </div>
            </div>
        </div>
    </div>
    <ToastContainer position="top-center" theme="colored" autoClose={3000}/>
</div>
  )
}

export default Auth