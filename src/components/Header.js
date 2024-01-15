import { useState } from 'react';
import {header_logo} from '../utils/constants';

const Header = () => {

  const [btnName,setBtnName] = useState("Login");

    return (
      <nav className="nav">
        <img
          src={header_logo}
          className="logo"
        ></img>
        <ul className="nav-items">

          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
          <li><a href=''>Cart</a></li>
          
        <button className='loginBtn' onClick={()=>{
          btnName==="Login"?setBtnName("LogOut"):setBtnName("Login");
        }}>{btnName}</button>
        </ul>
      </nav>
    );
  };

  export default Header;