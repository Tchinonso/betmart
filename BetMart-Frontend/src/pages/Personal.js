import React from 'react'
import { useState, useEffect } from "react";

import { useAuthContext } from "../hooks/useAuthContext";

export default function Personal() {
    const [ profile, setProfile ] = useState('')
    const { user } = useAuthContext();
  
    useEffect(() => {
        const fetchProfile = async () => {
          const Response = await fetch(
            "https://betmartoffical.herokuapp.com/api/profile/singlepro",
            {
              headers: {
                Authorization: `Bearer ${user.Token}`,
              },
            }
          );
          const json = await Response.json();
          if (Response.ok) {
            setProfile(json[0]);
            // console.log(json[0])
          }
          if (!Response.ok) {
            console.log("something went wrong");
          }
        };
        if (user) {
          fetchProfile();
        }
      }, [user]);
  return (
    <div className='personal'>
       <div className="personal-container">
       <div className="contents">
                <h4>ID: {profile.user_id} </h4>
            </div>
            <div className="contents">
                <h4>First Name: {profile.firstname}  </h4>
            </div>
            <div className="contents">
                <h4>Last Name: {profile.surname} </h4>
            </div>
          
            <div className="contents">
                <h4>Date of Birth: {profile.DOB} </h4>
            </div>
            <div className="contents">
                <h4>Country : {profile.country} </h4>
            </div>
            <div className="contents">
                <h4>Gender: {profile.gender} </h4>
            </div>
       </div>
    </div>
  )
}
