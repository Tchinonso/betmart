import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles/signup.css";
import age from "../images/ageIcon.svg";
import clear from "../images/clear icon.svg";
import SignUpEl from "./SignUp2";

export default function SignUp() {

const [ isLoading, setIsLoading] = useState(false)
const [ error, setError] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ firstStep, setFirstStep ] = useState(true)
  const [ secondStep, setSecondStep ] = useState(false)

  const [ data, setData] = useState('')

    let Logins = { email, password }

  const HandleSubmit = async(e) =>{
    e.preventDefault();
    setIsLoading(true)
    
    const response = await fetch(
      "https://betmartoffical.herokuapp.com/api/users/signup-logins",{
        method: "POST",
        body: JSON.stringify(Logins),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setFirstStep(true)
      setSecondStep(false)
    }

    if (response.ok) {
      setData(json)
      setIsLoading(false);
      setFirstStep(false)
      setSecondStep(true)
    }
};


  return (
    <div className="signup-overlay"> 
      <div className="signuppage">
      {error && <div className="error-message"> {error} </div> }

    {firstStep &&
        <div className="signuppage-cover">
          <h2>Create Account</h2>
          <NavLink to='/'> <img  className="signup-clear" src={clear} alt="" /></NavLink>
        
          <div className="signup-top-flex">
            <div className="signup-top-flex1">
       
                <h3>STEP 1</h3>

            </div>

            <div className="signup-top-flex2">
                <h3>STEP 2</h3>
            </div>
          </div>

          <div className="signup-form">
            <form  onSubmit={HandleSubmit}>

                <div className="setShowFirstStep">
                  <div className="formFirstName">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                  <div className="formSurname">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                  <button disabled={isLoading}  type="submit"> Submit</button>
                </div>             
            </form>
          </div>
          <div className="signup-underage">
            <h4>Underage gambling is not allowed</h4>
            <img src={age} alt="must be 18yrs" />
          </div>
        </div> }

    { secondStep && <SignUpEl data={data} /> }

      </div>
    </div>
  );
}
