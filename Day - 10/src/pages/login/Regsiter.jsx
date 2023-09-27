import React, { useState } from 'react';
import './login.css';
import back from '../../assets/images/my-account.jpg';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility state
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Confirm password visibility state
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleRegister = () => {
    // Check if email is valid
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Create an object to represent the user
    const userData = {
      email,
      username,
      password,
    };

    // Store user data in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Function to toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form>
            <span>Email address</span>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}

            <span>Username * </span>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <span>Password * </span>
            <div className="password-input">
              <input
                type={passwordVisible ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-button"
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>

            <span>Confirm Password * </span>
            <div className="password-input">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="password-toggle-button"
              >
                {confirmPasswordVisible ? 'Hide' : 'Show'}
              </button>
            </div>

            <Link to="/">
              <button type="button" onClick={handleRegister}>
                Register
              </button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
