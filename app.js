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
        src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg"
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

const RestaurantCard = (props) => {
  const { resName, cuisine, stars, time } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://www.gundersenhealth.org/sites/default/files/styles/card_medium_4_3_600_450/public/eat-balance-your-plate.jpg.webp?itok=UGYjLYzZ"
        alt="res-logo"
      ></img>
      <div className="res-content">
        <h2>{resName}</h2>
        <p>{cuisine} </p>
        <p>{stars}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Burger with Love & Chilli"
          stars="4"
          time="30 mins"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Fully Loaded pizza with cheeze"
          stars="4.5"
          time="28 mins"
        />
        <RestaurantCard
          resName="Khana Wala"
          cuisine="Allo ki sabji "
          stars="5"
          time="20 mins"
        />
        <RestaurantCard
          resName="Gutam Fast Foods"
          cuisine="chilli and Garlic Tadka Daal with Rice"
          stars="3"
          time="25 mins"
        />
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
