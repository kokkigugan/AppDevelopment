// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Import your Redux store
import Login from './login/login';
import SignUp from './signup/signup';
import Home from './homepage/home'; // Import your Home component
import Dashboard from './homepage/dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
