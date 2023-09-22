import React, { useState } from 'react';
import './login.css'; // Update the import path for your CSS file
import medicalLoginImage from '../img/login.jpeg'; // Update the import path for your image
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Regular expressions for password validation
    const digitRegex = /\d/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    if (username.trim() === '' || password.trim() === '') {
      setError('Enter username and password.');
    } else if (
      !(
        digitRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        specialCharRegex.test(password)
      )
    ) {
      setError(
        'Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character.'
      );
    } else {
      window.location.href = '/home';
    }
  };

  const isUsernameValid = username.trim() !== '';
  const isPasswordValid = password.trim() !== '';

  const clearError = () => {
    setError('');
  };

  return (
    <div className="medical-login-background">
      <img src={medicalLoginImage} alt="Medical Login" className="login-image" />
      <div className="medical-login-form">
        <h1>Log In</h1>
        <label className='user'>
          Username:
          <div className={`input-form ${isUsernameValid ? 'valid' : ''}`}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
          </div>
          <br />
        </label>
        <label className='pass' onBlur={clearError}>
          Password:
          <div className={`input-form ${isPasswordValid ? 'valid' : ''}`}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              id="password-input"
            />
            {error && <div className="error-tooltip">{error}</div>}
          </div>
        </label>
        <div className="button-container">
          <button onClick={handleLogin} className="button-submit">
            Log In
          </button>
          <span>or</span>
          <Link to="/signup">
            <button type="button">SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
