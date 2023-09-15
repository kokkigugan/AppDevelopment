import React, { useState } from 'react';
import '../login/login.css';
import { Link } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    console.log('Sign Up clicked');
  };

  return (
    <div className="medical-login-background">
      <div className="medical-login-form">
        <h1>Medical Log In</h1>
        <label>
          Username:
          <div className="input-form">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
          </div>
        </label>
        <label>
          Password:
          <div className="input-form">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
          </div>
        </label>
        <div className="button-container">
          <button onClick={handleLogin} className="button-submit">Log In</button>
          <span>or</span>
          <Link to="/signup">
            <button onClick={handleSignUp} className="button-signup">Sign Up</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Login;
