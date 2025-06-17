import React from 'react';
import './sidebar.css';

const sidebar = () => {
  return (
    <div>
        <div className='sidebar-content'>
            <h2>Home</h2>
            <h2>Assets</h2>
            <h2>Transactions</h2>
            <h2>Settings</h2>
            <h2>Logout</h2>
            <button className="login">Login</button>
            <button className="signUp">Signup</button>
        </div>
        
    </div>
  );
};

export default sidebar;