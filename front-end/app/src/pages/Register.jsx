import React from 'react'
import { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"



const Register =  ()=>{
//context api usage
const [name, setName]= useState("");
const [email, setemail]= useState("");
const [password, SetPassword]= useState("");
const [phone, setPhone]= useState("");
const navigate = useNavigate()

const handelregister = async (e)=>{
    e.preventDefault()
     
        try{
            //rn doing direct loal host
            const res = await axios.post('http://localhost:1000/api/v1/auth/register',{name, email,password,phone})
         //res.suxxess.data se api ka validation check hoga ahr api pe res.status lga rlha to wo aaega
          if(res.data.success){
            console.log("Registerd succefully")
                  navigate("/login")
  
    }
    else{    
console.log("Issue in Registering")   }
    }
    catch(error){
      console.log(error, "Issue in Registering")
    }
  }

  return(
<div className='register'>
    <form className="form-container" onSubmit={handelregister}> 
    <div className="form-group">
      <label htmlFor="exampleInputName">Name</label>
      
       <input type="name" className="form-control"
       id="exampleInputname" aria-describedby="namelHelp" 
       placeholder=" Name" required
       value={name} 
      onChange= {(e)=> setName(e.target.value)}
       />
    </div>
    
    
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email Id</label>
      
      <input required type="email" 
      className="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      value={email}
      onChange= {(e)=> setemail(e.target.value)}
       placeholder=" Email" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    

    <div className="form-group">
    
      <label htmlFor="exampleInputPassword1">Password</label>
      <input required  type="password" 
      className="form-control"
       id="exampleInputPassword1" 
       placeholder="Password"
       value={password}
    onChange= {(e)=> SetPassword(e.target.value)}
 />
    </div>

    <div className="form-group">
    

      <label htmlFor="exampleInputNumber">Phone</label>
      <input required 
       value={phone}
       onChange= {(e)=> setPhone(e.target.value)}
   
      type="number" className="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder=" Phone" />
    </div>
    <div className="button">

    <button type='submit' class="btn mt-2 ml-2 btn-primary">Register</button>
</div>

  
  </form>
  </div>)}
export default Register









