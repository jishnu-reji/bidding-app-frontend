import React, { useEffect, useState } from 'react'
import image1 from '../images/uploadProfile.png'
import { Collapse } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfileAPI } from '../services/allAPI';
import { SERVER_URL } from '../services/serverURL';



function Profile() {

  const [preview,setPreview] = useState("")
  const [existingImg,setExistingImg] = useState("")
  const [userdetails,setUserDetails]=useState({
    username:"",email:"",password:"",address:"",Phone:"",profileImage:""
  })

  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      const existingUserDetails = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserDetails({
        ...userdetails,username:existingUserDetails.username,email:existingUserDetails.email,password:existingUserDetails.password,address:existingUserDetails.address,Phone:existingUserDetails.Phone
      }) 
      setExistingImg(existingUserDetails.profile)
    }
  },[open])

  useEffect(()=>{
    if(userdetails.profileImage){
      setPreview(URL.createObjectURL(userdetails.profileImage))
    }
    else{
      setPreview("")
    }
  },[userdetails.profileImage])

  const handleUserProfile = async ()=>{
    const {username,email,password,address,Phone,profileImage} = userdetails
    if(address&&Phone){
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("address",address)
      reqBody.append("Phone",Phone)
      preview?reqBody.append("profileImage",profileImage):reqBody.append("profileImage",existingImg)

      const token = sessionStorage.getItem("token")

      if(token){
        const reqHeader = {
          "Content-Type" : preview?"multipart/form-data":"application/json",
          "Authorization" : `Bearer ${token}`
        }

        try{
          const result = await editProfileAPI(reqBody,reqHeader)
          if(result.status==200){
            setOpen(!open)
            sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          }
          else{
            console.log(result);
          }
        }
        catch(err){
          console.log(err);
        }

      }
    }
    else{
      toast.warning("Please fill the form completely!!!")
    }
  }

  return (
    <div className='p-3'>
      <div  className='d-flex p-3 flex-column align-items-center'>
        <label className='text-center'>
          <input type="file" onChange={(e)=>setUserDetails({...userdetails,profileImage:e.target.files[0]})} style={{display:'none'}}/>
          {existingImg == ""?
              <img width={'150px'} height={'150px'} className='rounded-circle' src={preview?preview:image1} alt="" />
              :
              <img width={'150px'} height={'150px'} className='rounded-circle' src={preview?preview:`${SERVER_URL}/uploads/${existingImg}`} alt="" />
            }
        </label>
        <h3 className='pt-2 nn'>{userdetails.username}</h3>
      </div>
      <h5 className='ps'>Address</h5>
      <p>{userdetails.address}</p>
      <h5 className='ps'>Phone</h5>
      <p>{userdetails.Phone}</p>
      <div className="d-flex justify-content-between">
          <h4 className='cc'>Edit Profile</h4>
          <button onClick={() => setOpen(!open)} className='btn'><i className="fa-solid fa-chevron-down"></i></button>
      </div>

      <Collapse in={open}>
      <div className='w-100'>
        <div className='mt-2'>
          <input type="text" value={userdetails.address} onChange={(e)=>setUserDetails({...userdetails,address:e.target.value})} className='form-control' placeholder='Address'/>
        </div>
        <div className='mt-2'>
          <input type="text" value={userdetails.Phone} onChange={(e)=>setUserDetails({...userdetails,Phone:e.target.value})} className='form-control' placeholder='Phone'/>
        </div>
        <div className='mt-2 d-grid'>
          <button onClick={handleUserProfile} className="btn btn-warning">Update</button>
        </div>
      </div>
      </Collapse>
      <ToastContainer position="top-center" theme="colored" autoClose={3000}/>

    </div>
  )
}

export default Profile
