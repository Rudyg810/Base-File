import "./Navbar.css";
import React, { useRef } from "react";
import { AuthProvider, useAuth } from "../contextapi/auth";
import { NavLink } from "react-router-dom";
// import {GiShoppingBag} from "react-icons/gi"

const Navbar = () => {
//add before any element <GiShoppingBag />
const [auth, setAuth]= useAuth();


{/*const handleDropdownClick = () => {
  const dropdownElement = dropdownRef.current;
  if (dropdownElement) {
    // Toggle the "show" class to show/hide the dropdown menu
    dropdownElement.classList.toggle('show');
  }
};
*/}

const handellogout = () => {
  setAuth({
    ...auth,
    user:null,
    token:""
  })
  localStorage.removeItem("auth")
  console.log("Logout Successfully")
}

    return (
      <>
  
     
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Aescify Store
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>




            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto">
                  {
                    !auth.user ? (<>
                    <li className="nav-item mt-2">
                  <NavLink  to="/register" className="nav-link ms-auto ">
                    Register
                  </NavLink></li>
  
  
                  <li className="nav-item mt-2">
                  <NavLink  to="/login" className="nav-link " >
                    Login
                  </NavLink></li></>) : (<>
                  
      
  
  <div class="dropdown">
    <button  class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true" style={{color:"#OD52BD"}}>
    {auth?.user?.name}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  

      <li><a class="dropdown-item mt-2" onClick={handellogout} href="/login">Logout</a></li>
    
    </ul>
  </div>
  </>
  
                  
                  
                  )
                  }
                  
             
  
  
  
  
             
              </ul>
            </div>
          </div>
          
        </nav>
      </>
  
      
    );
  };
  
  export default Navbar;
  