import React, { useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const formData = {email,password};
  const getData = async() => {
    const response = await axios.post("http://localhost:8080/api/v1/auth/user/authenticate",formData);
    const token = response.data.token;
    axios.defaults.headers.common["Autherization"] = `Bearer ${token}`;
    localStorage.setItem("auth",token);
    console.log(token);
  }
  const handleLogin = () => {
    
    if (!email && !password) {
      setError("Invalid email or password.");
      
    } else {
      getData();
      alert("login successful");
      window.location.href = "/home";
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form>
            <span>email  </span>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span>Password * </span>
            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-button"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <Link to="/register">
              <button type="button">Register</button>
            </Link>
          </form>

          {error && <div className="password-error">{error}</div>}
        </div>
      </section>
    </>
  );
};
