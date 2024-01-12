import resListMock from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";

const Body = () => {

//Local state variable

//  const [resList,setResList] = useState(resListMock); ==>  const arr = useState(resListMock)        Both are same thing
//                                                           const resList = arr[0]
//                                                           const setResList = arr[1] 

// useState returns an array and we are destructuring array on the way or we can also do like shown in the second example

  const [resList,setResList] = useState(resListMock);  
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredData = resList.filter((restaurant) => restaurant.info.avgRating > 4.5);
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
