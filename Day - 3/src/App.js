import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import SignUp from './signup/signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
