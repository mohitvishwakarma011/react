import { useState } from 'react';
import {header_logo} from '../utils/constants';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import userContext from '../utils/UserContext';
import {  useSelector } from 'react-redux';

const Header = () => {

  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(userContext)

  const cartItems = useSelector((store)=>store.cart.items)


    return (
      <nav className="flex justify-between bg-white shadow-lg h-24">
        <div className='h-24 w-22 flex '>
        <img src={header_logo} className=" h-22 w-22 ms-10"></img>
        <span className='text-center font-bold text-gray-400 my-auto text-2xl'>DieHard<span className='text-slate-500'>Foodie</span></span>
        </div>

        <ul className="flex me-4 ">
          <li className='my-auto mx-3'>{loggedInUser}</li>
          <li className='my-auto mx-3'>Status:{onlineStatus?"🟢":"🔴"}</li>
          <li className='my-auto mx-3'><Link to='/grocery'>Grocery</Link></li>
          <li className='my-auto mx-3'><Link to='/'>Home</Link></li>
          <li className='my-auto mx-3'><Link to='/about'>About</Link></li>
          <li className='my-auto mx-3'><Link to='/contact'>Contact</Link></li>
          <li className='my-auto mx-3'><Link to='/cart'>Cart-{cartItems.length}</Link></li>

          <button className='border-2 border-black my-auto p-1 rounded' onClick={()=>{
          btnName==="Login"?setBtnName("LogOut"):setBtnName("Login");
        }}>{btnName}</button>

        
        </ul>
      </nav>
    );
  };

  export default Header;