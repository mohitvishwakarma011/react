import { res_logo_cdn } from "../utils/constants";
const RestaurantCard = (props) => {
  //Destructuring is good practice
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props.resData?.info; //Optional chaining

  return (
    <div className="w-52 m-4 border bg-sky-100 p-2 rounded-lg">
      <img
        className="h-48 w-48 object-cover rounded-lg"
        src={res_logo_cdn + cloudinaryImageId}
        alt="res-logo"
      ></img>{" "}
      <div className="mt-2">
        <h2 className="font-bold text-sky-600 text-lg mb-2">{name}</h2>
        <p>{cuisines.length>3?cuisines.slice(0,2).join(", "):cuisines.join(", ")} </p>
        <span>Rating: </span><span>{avgRating}</span>
        <p>time: {sla.deliveryTime} mins</p>
        <p>Price:{costForTwo}</p>
      </div>
    </div>
  );
};

 //Higher Order component

 //input - RestaurantCard => RestaurantCardPromoted (output)

  
 export const WithPromotedLabel = (RestaurantCard)=>{

    return (props)=>{

      return(
        <div>
          <label className="absolute bg-green-500 text-white py-1 px-2 rounded-md">veg</label>
          <RestaurantCard {...props}/> 
        </div>
      )
    }
  }

export default RestaurantCard;
