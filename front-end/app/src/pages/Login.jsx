import React from 'react'
import { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useAuth, AuthProvider } from '../contextapi/auth';

const Login = () => {
    const [auth, setAuth ] = useAuth("")
    const [email, setemail]= useState("");
    const [password, SetPassword]= useState("");
    const navigate = useNavigate()
  
const HandelLogin = async (e)=>{
    //context api usage
    
    e.preventDefault()
    try{
        const res = await axios.post('http://localhost:1000/api/v1/auth/login',{ email,password})
        if(res.data.success){
            console.log("Login Succesfully")
            setTimeout(2000)
      setAuth({
        ...auth, 
        user:res.data.user,
        token: res.data.token
      })
  localStorage.setItem("auth", JSON.stringify(res.data))
      navigate("/")}
    else{
    console.log("Issue in Loggin")   }
    }
    catch(error){
      console.log(error, "Issue in Loggin")
    }
  }


return(
<div className='register'>
    <form onSubmit={HandelLogin}>
      <div> 
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" 
      className="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      placeholder="Enter email" 
      
      required

      value={email}
      onChange= {(e)=> setemail(e.target.value)}
       
      
      />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" 
      className="form-control" 
      id="exampleInputPassword1" 
      placeholder="Password" 
      
      value={password}
      onChange= {(e)=> SetPassword(e.target.value)}
      required
      />
    </div>
    <div className="button">

    <button type='submit' class="btn mt-2 ml-2 btn-primary">Login</button>
</div>
</div>
  
  </form>
  </div>)}
export default Login
