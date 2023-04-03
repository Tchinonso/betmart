import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./styles/Profile.css";

export default function Transaction() {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <div className="contents">
            <NavLink to="history">History</NavLink>
          </div>
          <div className="contents">
            <NavLink to="withdraw">Withdraw</NavLink>
          </div>
          <div className="contents">
            <NavLink to="deposit">Deposit</NavLink>
          </div>
          <div className="contents">
            <NavLink to="swap">Swap</NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
