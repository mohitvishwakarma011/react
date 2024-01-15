import { useEffect,useState} from "react";
import {res_logo_cdn} from "../utils/constants";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = ()=>{

    const {resId} = useParams();
    const [resMenu,setResMenu] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{ 
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1685786&lng=79.9338798&restaurantId="+resId);
        const jsonData = await data.json();
        setResMenu(jsonData.data);
    }

    if(resMenu===null) return (<Shimmer/>);

    const resInfo = resMenu?.cards[0]?.card?.card?.info;

    const resMenuList = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    return(
        <div>
            <h2>{resInfo.name}</h2>
            <img src={res_logo_cdn+resInfo.cloudinaryImageId} className="res-logo"></img>
            <h3>{resInfo.costForTwoMessage}</h3>
            <h3>{resInfo.cuisines.join(", ")}</h3>
            {resMenuList?.map((menu)=>{
                return(<p key={menu.card.info.id}>{menu.card.info.name}: {typeof menu.card.info.price==="number"?menu.card.info.price/100:menu.card.info.price}</p>)
            })}
        </div>
    )
}

export default RestaurantMenu;