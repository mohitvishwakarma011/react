import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useResList from "../utils/useResList.js";


const Body = () => {
  const sectionListFromApiData = useResList();

  if(!sectionListFromApiData.length) return(<Shimmer/>) ;

  const workingResList = sectionListFromApiData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  return (
    <div className="mt-3">
      <hr className="my-2" />

      <div className="ms-5 flex flex-wrap justify-start ">
        {workingResList?.map((restaurant) => {
          return (
            <Link
              to={"/restaurantmenu/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.veg ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
