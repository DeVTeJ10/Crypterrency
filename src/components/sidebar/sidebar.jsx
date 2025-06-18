import React from 'react';
        import { FaHome } from 'react-icons/fa';
import './sidebar.css';

const sidebar = () => {
  return (
    <div>
        <div className='sidebar-content'>

            <div className='Navbar'>
                <h3>Home</h3>
                <h3>Assets</h3>
                <h3>Transactions</h3>
                <h3>Support</h3>
                <h3>Logout</h3>
            </div>
            
            <div className='Auth'>
                <button className="login">Login</button>
                <button className="signUp">Signup</button>
                <button className="guides">guides</button>
                <FaHome width={50} height={50}/>
<span>Home</span>

            </div>

        </div>
        
    </div>
  );
};

export default sidebar;