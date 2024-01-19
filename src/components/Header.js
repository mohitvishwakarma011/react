import { useState } from 'react';
import {header_logo} from '../utils/constants';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
      <nav className="flex justify-between bg-sky-200 shadow-lg h-24">
        <img src={header_logo} className="w-22 h-22"></img>

        <ul className="flex me-4 ">
          <li className='my-auto mx-3'>Status:{onlineStatus?"🟢":"🔴"}</li>
          <li className='my-auto mx-3'><Link to='/grocery'>Grocery</Link></li>
          <li className='my-auto mx-3'><Link to='/'>Home</Link></li>
          <li className='my-auto mx-3'><Link to='/about'>About</Link></li>
          <li className='my-auto mx-3'><Link to='/contact'>Contact</Link></li>
          <li className='my-auto mx-3'><Link to=''>Cart</Link></li>

          <button className='border-2 border-black my-auto p-1 rounded' onClick={()=>{
          btnName==="Login"?setBtnName("LogOut"):setBtnName("Login");
        }}>{btnName}</button>

        
        </ul>
      </nav>
    );
  };

  export default Header;