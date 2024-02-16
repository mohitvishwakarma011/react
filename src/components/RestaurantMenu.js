import { useState } from "react";
import {res_logo_cdn} from "../utils/constants";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = ()=>{

    const {resId} = useParams();
    
    const resMenu =  useRestaurantMenu(resId);

    const[showIndex,setShowindex] = useState(null);

    
    if(!resMenu) return (<Shimmer/>);
    
    const resInfo = resMenu?.cards[0]?.card?.card?.info;
    
    const itemCategorylist = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>{
       return c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    return(
        <div className="w-6/12 mx-auto mt-4 h-screen">
            <div className="flex justify-between my-3">
            <div>
            <h2 className="font-bold text-2xl text-slate-800">{resInfo.name}</h2>
                <p className="text-sm text-gray-500">{resInfo.cuisines.join(", ")}</p>
                <p className="text-sm text-gray-500">{resInfo.areaName}, {resInfo.city}</p>
            </div>
            <div className="border p-2 rounded">
                <p className="text-yellow-500">⭐{resInfo.avgRating}</p>
                <p className="text-gray-600 text-sm font-bold">{resInfo.totalRatingsString}</p>
            </div>
            </div>
            <hr></hr>
            {/* <img src={res_logo_cdn+resInfo.cloudinaryImageId} className="w-40"></img> */}
            <h3>{resInfo.costForTwoMessage}</h3>
            <h3>{resInfo.cuisines.join(", ")}</h3>
            {/* {resMenuList?.map((menu)=>{
                return(<p key={menu.card.info.id}>{menu.card.info.name}: {typeof menu.card.info.price==="number"?menu.card.info.price/100:menu.card.info.price}</p>)
            })} */}

            {/* categories accordian */}



            {itemCategorylist?.map((category,index)=> <RestaurantCategory key={category.card.card.title} data={category.card.card} showMenu={index==showIndex?true:false} setShowindex={()=>setShowindex(index==showIndex?null:index)}/>)}
        </div>
    )
}

export default RestaurantMenu;