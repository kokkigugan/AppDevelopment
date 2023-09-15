import React, { useState } from 'react';
import '../signup/signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log the form input values to the console
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form input values
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-box">
      <form className="form" onSubmit={handleSubmit}>
        <span className="title">Sign up</span>
        <br />
        <span className="subtitle">Create a free account with your email.</span>
        <div className="form-container">
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign up</button>

        <div className="form-section">
          <p>
            Have an account?{' '}
            <Link to="/login">
              <button type="button">Log in</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
