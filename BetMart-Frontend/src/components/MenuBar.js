import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../images/homeIcon.svg";
import inplay from "../images/inplay.svg";
import casino from "../images/casino.svg";
import multi from "../images/multi.svg";
import football from "../images/football.svg";
import cricket from "../images/cricket.svg";
import tennis from "../images/tennis.svg";
import clear from "../images/clear icon.svg";
import "./styles/menubar.css";

export default function MenuBar({clearEl}) {

  const HandleClear = (()=>{
      clearEl()
  })

  return (
    <div className="menubar">
      <div className="clear">
        <img onClick={HandleClear} src={clear} alt="" />
      </div>

      <div className="menubar-container">

      <NavLink to="/">
        <div className="home">
          <div className="icon">
            <img src={homeIcon} alt="Profile logo" width="14px" />
          </div>
          <div className="text">
            <h3>Home</h3>
          </div>
        </div>
      </NavLink>
      <NavLink to="/inplay/live-match">
        <div className="home">
          <div className="icon">
            <img src={inplay} alt="Profile logo" width="14px" />
          </div>
          <div className="text">
            <h3>Inplay</h3>
          </div>
        </div>
      </NavLink>
      <NavLink to="/multi-market">
        <div className="home">
          <div className="icon">
            <img src={multi} alt="Profile logo" width="14px" />
          </div>
          <div className="text">
            <h3>Multi Market</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to="/cricket">
        <div className="home">
          <div className="icon">
            <img src={cricket} alt="Profile logo"  width="14px"/>
          </div>
          <div className="text">
            <h3>Cricket</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to="/football">
        <div className="home">
          <div className="icon">
            <img src={football} alt="Profile logo" width="14px" />
          </div>
          <div className="text">
            <h3>FootBall</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to="/tennis">
        <div className="home">
          <div className="icon">
            <img src={tennis} alt="Profile logo" width="14px" />
          </div>
          <div className="text">
            <h3>Tennis</h3>
          </div>
        </div>
      </NavLink>

      <NavLink to="/casino">
        <div className="home">
          <div className="icon">
            <img src={casino} alt="Profile logo" width="14px" />
          </div>
          <div className="text">
            <h3>Casino</h3>
            <span>New</span>
          </div>
        </div>
      </NavLink>
    </div>  
    </div>
  );
}
