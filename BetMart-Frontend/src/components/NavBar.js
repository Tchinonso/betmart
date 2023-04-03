import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import { HiMenu } from "react-icons/hi";
import MenuBar from "./MenuBar";


export default function NavBar() {

  const [ displayMenu, setDisplayMenu ] = useState(false)

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width <= 750 ? setIsMobile(true) : setIsMobile(false);
  }, [setIsMobile]);

  function detectWindowSize() {
      window.innerWidth <= 750 ? setIsMobile(true) : setIsMobile(false);        
  }
  
  window.onresize = detectWindowSize;

  const menubar = (()=>{
    setDisplayMenu(true)
  })

  const clearMennu = (()=>{
    setDisplayMenu(false)
  })

  useEffect(()=>{
    if (!isMobile){
      setDisplayMenu(true)
    }
    if (isMobile){
      setDisplayMenu(false)
    }
  },[isMobile])

  return (
    <div className="main-Nav-flex-cover">

      <div className="header-cover">
        <div className="header">
          <div className="logo">
            <NavLink to="/">
                <img className="logo-top" src={Logo} alt="Profile logo" />
            </NavLink>
          </div>
          <div className="auth">
            <div className="signup">
              <NavLink to="/signup">SignUp</NavLink>
            </div>
            <div className="login">
              <NavLink to="/login">Login</NavLink>
            </div>
            <div className="menu">
              <HiMenu onClick={menubar}/>
            </div>
          </div>
        </div>
      </div>
      { displayMenu && 
      <MenuBar clearEl={clearMennu} /> }
    </div>
  );
}
