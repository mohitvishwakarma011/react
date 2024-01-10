import React from "react";
import ReactDOM from "react-dom/client";

//? Food Ordering App
/** Components:-
 *
 * Header
 *    -logo
 *    -Nav Items
 * Body
 *    -Search
 *    -Restaurant cintainer
 *            -cards
 *                -Img
 *                -Name of Res, Star rating, Cuisine, delivery Time etc
 * Footer
 *    -Copyright
 *    -Links
 *    -Address
 *    -Contact
 */

const Header = () => {
  return (
    <nav className="nav">
      <img
        src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
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

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{backgroundColor:'#f0f0f0'}}>
      <h2>Meghana Foods</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
