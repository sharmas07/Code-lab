import React, { useState } from "react";
import "../Styles/SignIn.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e)=>{
    setEmail(e.target.value);
    
  }
  const handleChangePassword = (e)=>{
    setPassword(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log("handleLogin");
    console.log(data);

    const response = await axios.post(
      "https://gatecodelab.onrender.com/auth/signin",
      {email, password}
    );
    console.log(response)
    navigate('/allquestions')
  };

  return (
    <>
      <div className="center">
        <div className="containe">
          <h2>Sign in</h2>
          <form>
            <div className="sign">
              <label htmlFor="email" className="email">
                Email:{" "}
              </label>
              <input
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={handleChangeEmail}
                required
              />
              <br />
              <br />
              <label htmlFor="password" className="pass">
                Password:{" "}
              </label>
              <input type="password" id="password" name="password" value={password} 
              onChange={handleChangePassword}
              required />
              <br />
              <br />
            </div>
            <p>
              {" "}
              Create account? <Link to="/auth/signup">Sign Up</Link>
            </p>
            <span onClick={handleLogin} className="btnElement"  >Login</span>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
