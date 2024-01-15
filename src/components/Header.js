import { useState } from 'react';
import {header_logo} from '../utils/constants';
import {Link} from 'react-router-dom';

const Header = () => {

  const [btnName,setBtnName] = useState("Login");

    return (
      <nav className="nav">
        <img
          src={header_logo}
          className="logo"
        ></img>
        <ul className="nav-items">

          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to=''>Cart</Link></li>

        <button className='loginBtn' onClick={()=>{
          btnName==="Login"?setBtnName("LogOut"):setBtnName("Login");
        }}>{btnName}</button>
        </ul>
      </nav>
    );
  };

  export default Header;