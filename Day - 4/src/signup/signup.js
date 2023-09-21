import React, { useState } from 'react';
import '../signup/signup.css';
import { Link } from 'react-router-dom';
import br from '../img/login br.jpeg';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (
      newPassword.length < 8 ||
      !/[A-Z]/.test(newPassword) || 
      !/\d/.test(newPassword) 
    ) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter and one number.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!passwordError) {
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Password:', password);

      setFullName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="form-box">

      <img src={br} alt="Medical Login" className="login-image" />
      <form className="form" onSubmit={handleSubmit}>
        <span className="title">Sign up</span>
        <br />
        <span className="subtitle">Create your new Account</span>
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
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <Link to="/">
  <button type="button">Sign In</button>
</Link>


        <div className="form-section">
          <p>
            Have an account?{' '}
            <Link to="/">
              <button type="button">Login</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
