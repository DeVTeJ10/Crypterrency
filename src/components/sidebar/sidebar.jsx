import React from 'react';
import Home from '../../images/home.png'
import Assets from '../../images/assets.png'
import Transactions from '../../images/transactions.png'
import Support from '../../images/support.png'
import './sidebar.css';

const sidebar = () => {
  return (
    <div>
        <div className='sidebar-content'>
            
            <div className='entsidebar'>

            <div className='Navbar'>
                <div className='Home'>
                    <img src={Home} alt="Home" width={20} height={20}/>
                    <h3>Home</h3>
                </div>
                <div className='Assets'>
                    <img src={Assets} alt="Assets" width={20} height={20}/>
                    <h3>Assets</h3>
                </div>
                <div className='Transactions'>
                    <img src={Transactions} alt="Transactions" width={20} height={20}/>
                    <h3>Transactions</h3>
                </div>
                <div className='Support'>
                    <img src={Support} alt="Support" width={20} height={20}/>
                    <h3>Support</h3>    
                </div>
            </div>

            <div className='Auth'>
                <button className="login">Login</button>
                <button className="signUp">Signup</button>
                <button className="guides">guides</button>
            </div>
            
            </div>


        </div>
        
    </div>
  );
};

export default sidebar;