import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard.js";
import { useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useResList from "../utils/useResList.js";
import { useContext } from "react";
import userContext from "../utils/UserContext.js";

const Body = () => {

  const [resList,workingResList, setWorkingResList] = useResList();

  const [inputValue, setInputValue] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  //UserContext functionality
  const {loggedInUser,setUserName} = useContext(userContext);

  if(onlineStatus===false) return (<h1>Looks like you're offline!! Please check your internet connection...</h1>);

  return (workingResList?.length === 0) ? (<Shimmer />) : (

    <div className="mt-3">
      {/* <input
      data-testid="searchInput"
      className="border border-black rounded ms-11 p-1"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button data-testid="searchButton" className="font-medium border border-black ms-3 p-1 rounded-md bg-sky-200 hover:bg-sky-300 "
        onClick={() => {
          const filteredList = resList.filter((res) =>
            res.info.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setWorkingResList(filteredList);
        }}
      >
        Search
      </button>
      <button
        className="font-medium border border-black ms-3 p-1 rounded-md bg-sky-200 hover:bg-sky-300 "
        onClick={() => {
          const filteredData = resList.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          setWorkingResList(filteredData);
        }}
      >
        Filter Restaurant
      </button>

      <input
      className="border border-black rounded ms-11 p-1"
        type="text"
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
      /> */}


    <hr className="my-2"/>

      <div className="flex flex-wrap justify-start ">
        { 
        workingResList?.map((restaurant) => {
          return (
            <Link
              to={"/restaurantmenu/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.veg?<RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant} />}
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
