import { res_logo_cdn } from "../utils/constants";
const RestaurantCard = (props) => {
  //Destructuring is good practice
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props.resData?.info; //Optional chaining

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="res-logo-container">
        <img
          className="res-logo"
          src={
            res_logo_cdn +
            cloudinaryImageId
          }
          alt="res-logo"
        ></img>
      </div>
      <div className="res-content">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")} </p>
        <p>Rating:{avgRating}</p>
        <p>time: {sla.deliveryTime} mins</p>
        <p>Price:{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
