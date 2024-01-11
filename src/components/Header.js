import {header_logo} from '../utils/constants'
const Header = () => {
    return (
      <nav className="nav">
        <img
          src={header_logo}
          className="logo"
        ></img>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </nav>
    );
  };

  export default Header;