import {useState,useEffect} from "react";


const useResList = () => {
  const [resList, setResList] = useState([]);
  const [workingResList, setWorkingResList] = useState([]);
  

  useEffect(() => 
    {
    fetchData()
    }, []);

    const fetchData = async () => {
    const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const jsonData = await Data.json();

    // console.log(jsonData);

    setResList(
      jsonData?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setWorkingResList(
      jsonData?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

  };

  return [resList,workingResList,setWorkingResList];
};


export default useResList;