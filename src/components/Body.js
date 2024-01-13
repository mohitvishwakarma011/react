import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";


const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    console.log("I am Khali");
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9050007&lng=79.1887115&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await Data.json();
    setResList(
      jsonData?.data?.cards[0]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resList.length === 0) {
    return <Shimmer/>
  }

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredData = resList.filter(
            (restaurant) => restaurant.info.avgRating > 4.5
          );
          setResList(filteredData);
        }}
      >
        Filter Restaurant
      </button>

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
