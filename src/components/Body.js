import RestaurantCard from "./RestaurantCard.js";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useResList from "../utils/useResList.js";

const Body = () => {

  const [resList,workingResList, setWorkingResList] = useResList();

  const [inputValue, setInputValue] = useState("");

  const onlineStatus = useOnlineStatus();


  if(onlineStatus===false) return (<h1>Looks like you're offline!! Please check your internet connection...</h1>);

  return (workingResList.length === 0) ? (<Shimmer />) : (

    <div className="body">
      <button
        className="filter-btn"
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
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const filteredList = resList.filter((res) =>
            res.info.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setWorkingResList(filteredList);
        }}
      >
        Search
      </button>

      <div className="res-container">
        {workingResList.map((restaurant) => {
          return (
            <Link
              to={"/restaurantmenu/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
