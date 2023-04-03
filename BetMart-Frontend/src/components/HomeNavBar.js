import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/navbar.css";
import { HiMenu } from "react-icons/hi";

import Logo from "../images/logo.svg";
import MenuBar from "./MenuBar";

import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";

export default function HomeNavBar() {

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


const [ profile, setProfile ] = useState('')
const { user } = useAuthContext();

const [ showDraw , setShowDreaw ] = useState(false)

const { logout } = useLogOut();

const LogoutHandler = () => {
  logout();
};

useEffect(() => {
  const fetchProfile = async () => {
    const Response = await fetch(
      "https://betmartoffical.herokuapp.com/api/profile/singlepro",
      {
        headers: {
          Authorization: `Bearer ${user.Token}`
      }}
    );
    const json = await Response.json();
    if (Response.ok) {
      setProfile(json[0]);
    }
    if (!Response.ok) {
      console.log("something went wrong");
    }
  };
  if (user) {
    fetchProfile();
  }
}, [user]);

const handleShow = (()=>{
  if(showDraw){
    setShowDreaw(false)
  }else{
    setShowDreaw(true)
  }
})


return (

  <div className="main-Nav-flex-cover">
    <div className="header-cover">
      <div className="headerel">
        <div className="logo">
          <NavLink to="/">
              <img className="logo-top" src={Logo} alt="Profile logo" />
          </NavLink>
        </div>
        <div className="authel">
            <div className="profile-header-container">
                <div className="wallect">
                  <p>Main bal: ${profile.mainBal}</p>
                  <p>Explosure: ${profile.exposure}</p>
                </div>
              </div>
              <div className="profile-header-container">
                  <div className="profile" onClick={handleShow}>
                    <p>{profile.firstname} {profile.surname}</p>
                    <p>ID: {profile.user_id}</p>
                  </div>
              </div>
          <div className="menu">
            <HiMenu onClick={menubar}/>
          </div>
          {
              showDraw 
           &&
              <div className="drop-downel">
                  <div className="drop-doww-container">
                  <div className="drop-doww-content">
                      <NavLink onClick={handleShow} to="/profile">
                          My Profile
                      </NavLink>
                   </div>
                   <div className="drop-doww-content">
                      <NavLink onClick={handleShow} to="/my-bet">
                          My bets
                      </NavLink>
                   </div>
                    <div className="drop-doww-content">
                      <NavLink onClick={handleShow} to="/transaction">
                          Transations
                      </NavLink>
                   </div>
                   <div className="drop-doww-content">
                      <NavLink onClick={handleShow} to="/PersonalDetails">
                         Profit and lost
                      </NavLink>
                   </div>
                   <div className="drop-doww-content">
                      <NavLink onClick={handleShow} to="/PersonalDetails">
                          Activity Log
                      </NavLink>
                   </div>
                   <div className="Logout-btn">
                      <button onClick={LogoutHandler}>
                         Log out
                      </button>
                   </div>
                  </div>
              </div>
          }
        </div>
      </div>
    </div>
    { displayMenu && 
    <MenuBar clearEl={clearMennu} /> }
  </div>
  );
}
