// Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  // Get user data from the Redux store
  const user = useSelector((state) => state.user);

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <div className="user-details">
        <h3>Welcome, {user.username}!</h3>
        <p>Email: {user.email}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
}

export default Dashboard;
