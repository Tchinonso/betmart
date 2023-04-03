import React from "react";
import "./styles/login.css";
import age from "../images/ageIcon.svg";
import clear from "../images/clear icon.svg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLOgin } from "../hooks/useLogin";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useLOgin();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    setEmail("");
    setPassword("");
  };

  const History = () => {
    navigate("/")
  };

  return (
    <div className="overlay">
      <div className="loginpage">
         {error && <div className="error-message"> {error} </div> }
        <h3>Welcome Back</h3>
        <img onClick={History} className="clear" src={clear} alt="" />
        <form  onSubmit={HandleSubmit}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
          <button disabled={isLoading} type="submit">Login</button>
        </form>
        <div className="underage">
            <h4>Underage gambling is not allowed</h4>
            <img src={age} alt="must be 18yrs" />
        </div>
      </div>
    </div>
  );
}
