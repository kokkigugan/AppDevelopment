import React, { useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");
    if (!storedUserData) {
      setError("No registered users found.");
      return;
    }

    // Parse stored user data
    const userData = JSON.parse(storedUserData);

    // Check if the entered username and password match stored data
    if (username === userData.username && password === userData.password) {
      // Login successful, you can redirect to the home page
      window.location.href = "/home";
    } else {
      setError("Invalid username or password.");
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
            <span>Username  </span>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
