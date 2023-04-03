import React from "react";
import "./styles/inplay.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Inplay() {
  return (
    <div className="inplay-cover">
      <div className="inplay">
        <div className="inplayPage"> 
          <div className="inplay-container">
            <NavLink to="live-match">
              <div className="liveTop active">
                <h4>Live</h4>
              </div>
            </NavLink>
            <NavLink to="today">
              <div className="liveTop">
                <h4>Today</h4>
              </div>
            </NavLink>
            <NavLink to="tomorrow">
              <div className="liveTop">
                <h4>Tomorrow</h4>
              </div>
            </NavLink>
          </div>
           <Outlet />
        </div>
      </div>

    </div>
  );
}
