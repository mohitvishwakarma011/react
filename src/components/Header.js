import { useState } from 'react';
import {header_logo} from '../utils/constants';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
      <nav className="nav">
        <img
          src={header_logo}
          className="logo"
        ></img>
        <ul className="nav-items">

          <li>Status:{onlineStatus?"🟢":"🔴"}</li>
          <li className='link'><Link to='/'>Home</Link></li>
          <li className='link'><Link to='/about'>About</Link></li>
          <li className='link'><Link to='/contact'>Contact</Link></li>
          <li className='link'><Link to=''>Cart</Link></li>

        <button className='loginBtn' onClick={()=>{
          btnName==="Login"?setBtnName("LogOut"):setBtnName("Login");
        }}>{btnName}</button>
        </ul>
      </nav>
    );
  };

  export default Header;