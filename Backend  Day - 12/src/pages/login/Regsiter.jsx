import React, { useState } from 'react';
import './login.css';
import back from '../../assets/images/my-account.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); 
  const [emailError, setEmailError] = useState('');

  const formData = {email,firstName,password};
  const nav = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const getData = async() => {
    const response = await axios.post("http://localhost:8080/api/v1/auth/user/register",formData);
    console.log(response.data);
  }

  const handleRegister = () => {
  
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    else{
      getData();
      nav("/");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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

            <span>Firstname * </span>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
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
              <button type="button" onClick={handleRegister}>
                Register
              </button>
          </form>
        </div>
      </section>
    </>
  );
};
