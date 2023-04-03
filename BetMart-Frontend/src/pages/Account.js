import React from 'react'
import { useState, useEffect } from "react";

import { useAuthContext } from "../hooks/useAuthContext";

export default function Account() {
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
            console.log(json[0])
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
                <h4>Account Balance : {profile.mainBal} </h4>
            </div>
            <div className="contents">
                <h4> Exposure: {profile.exposure}  </h4>
            </div>
            <div className="contents">
                <h4>Bank Name: {profile.bankName} </h4>
            </div>
          
            <div className="contents">
                <h4>Account Number: {profile.acc_num} </h4>
            </div>
            <div className="contents">
                <h4>Account Name: {profile.acc_name} </h4>
            </div>
       </div>
    </div>
  )
}
