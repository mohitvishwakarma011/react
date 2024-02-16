import { res_logo_cdn } from "../utils/constants";
const RestaurantCard = (props) => {
  //Destructuring is good practice
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props.resData?.info; //Optional chaining

  return (
    <div data-testid="resCard" className="w-72 h-72 m-4 rounded-lg ">
      <div className="hover:p-2 transition-all">
        <img
          className="h-48 w-full object-cover rounded-2xl"
          src={res_logo_cdn + cloudinaryImageId}
          alt="res-logo"
        ></img>
        <div className="pt-2 ps-4">
          <h2 className="font-bold text-gray-600 text-xl mb-1">
            {name.length > 22 ? name.slice(0, 22) + "..." : name}
          </h2>
          <span>⭐</span>
          <span className="text-gray-600 font-bold">
            {avgRating} • {sla.deliveryTime} mins
          </span>
          <p className="text-md text-gray-400">
            {cuisines.length > 3
              ? cuisines.slice(0, 2).join(", ") + "..."
              : cuisines.join(", ")}
          </p>
          {/* <p>Price:{costForTwo}</p> */}
        </div>
      </div>
    </div>
  );
};

//Higher Order component

//input - RestaurantCard => RestaurantCardPromoted (output)

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white py-1 px-2 rounded-md">
          veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
