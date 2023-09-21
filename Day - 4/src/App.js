// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from '../src/store/store.js'; // Import your Redux store
import Login from './login/login';
import SignUp from './signup/signup';
import HomePage from './homepage/home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
