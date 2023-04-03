import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./styles/Profile.css";

export default function Profile() {

  return (
    <div className="profile">
        <div className="profile-container">
            <div className="profile-header">
                <div className="contents">
                    <NavLink to="profile-details">
                          Personal
                    </NavLink>
                </div>
                <div className="contents">
                    <NavLink to="account">
                          Account
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>

    </div>
  );
}
