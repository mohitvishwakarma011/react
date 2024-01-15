import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [workingResList, setWorkingResList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await Data.json();
    setResList(
      jsonData?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setWorkingResList(
      jsonData?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return workingResList.length === 0 ? (
    <Shimmer />
  ) : (
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
        {workingResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
