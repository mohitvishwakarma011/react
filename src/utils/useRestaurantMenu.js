import { useState,useEffect } from "react"

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{ 
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1685786&lng=79.9338798&restaurantId="+resId);
        const jsonData = await data.json();
        setResInfo(jsonData.data);
    }


    return resInfo;
}

export default useRestaurantMenu;