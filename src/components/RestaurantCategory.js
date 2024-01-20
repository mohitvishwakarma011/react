import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data})=>{

    const[showMenu,setShowMenu] = useState(false);

    const handleClick = ()=>{
        setShowMenu(!showMenu);
    }
    return(
        <div className="w-full bg-gray-50 shadow-md p-4 my-4 ">

        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
            <span>{showMenu?"🔼":"🔽"}</span>
        </div>
        {showMenu && <ItemList items={data.itemCards}/>}
        </div>
    )
    
}

export default RestaurantCategory;