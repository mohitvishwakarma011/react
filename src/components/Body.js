import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useResList from "../utils/useResList.js";

const Body = () => {
  const sectionListFromApi = useResList();

  if (!sectionListFromApi.length) return <Shimmer />;

  const workingResList =
    sectionListFromApi[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  return (
    <div className="mx-[10%]">
      <hr className="my-2" />
      <h3 className="font-bold text-2xl ms-8">
        Restaurants with online food delivery in Jabalpur
      </h3>
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
