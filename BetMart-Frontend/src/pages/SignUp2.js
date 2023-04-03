import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./styles/signup2.css";
import age from "../images/ageIcon.svg";
import clear from "../images/clear icon.svg";

import { useSignup } from "../hooks/useSignup";


export default function SignUpEl({data}) {

  const { signup, isLoading, error } = useSignup();
 
  const [email] = useState(data.email)
  const [password] = useState(data.password)

  const [DOB, setDOB] = useState("");
  const [country, setCountry] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");

  let dataEl = { firstname, surname, DOB,country, email, password  }

  const HandleSubmit = ((e)=>{
      e.preventDefault()

      signup(dataEl)
  })


  return (
    <div className="signup2-overlay">
      <div className="signuppage2">
       {error && <div className="error-message">{error}</div>}
          <div className="signup2-overlay">
            <div className="signuppage2">
              <div className="signuppage2-cover">
                <h4>We just need a few more details</h4>
                <NavLink to='/'> <img  className="signup-clear" src={clear} alt="" /></NavLink>
                <div className="signup2-top-flex">
                  <div className="signup2-top-flex1">                  
                      <h3>STEP 1</h3>
                  </div>
                  <div className="signup2-top-flex2">
                      <h3>STEP 2</h3>
                  </div>
                </div>

                <div className="signup2-form">
                <form  onSubmit={HandleSubmit}>
                  <div className="formEmail">
                    <label>First name</label>
                    <input
                      type="text"
                      placeholder="Firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                      required
                    />
                  </div>

                  <div className="formEmail">
                    <label>Surname</label>
                    <input
                      type="text"
                      placeholder="Username "
                      onChange={(e) => setSurname(e.target.value)}
                      value={surname} required />
                  </div>

                  <div className="formDOB">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      onChange={(e) => setDOB(e.target.value)}
                      value={DOB}
                      required
                    />
                  </div>
                  <div className="formFirstName">
                    <label>Country</label>
                    <input
                      type="Country"
                      placeholder="Enter your country name"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      required
                    />
                  </div>
                  <div className="formAge">
                    <input type="checkbox" required />
                    <label>I confirm that I am above 18yrs</label>
                  </div>

                  <button disabled={isLoading}  type="submit">
                    Submit
                  </button>
                  </form>
                </div>
                <div className="signup2-underage">
                  <h4>Underage gambling is not allowed</h4>
                  <img src={age} alt="must be 18yrs" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
