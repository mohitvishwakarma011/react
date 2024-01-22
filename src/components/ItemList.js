import { addItem } from "../utils/cartSlice";
import {res_logo_cdn} from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({items})=>{
    
    const dispatch = useDispatch();

    const handleAddItem = (item)=>{

        dispatch(addItem(item))
    }

return(<div>
    {items.map((item)=>{
        const {id,name,description,imageId,price} =  item?.card?.info;

         return(<div key={id}>
                    <div className="mt-5 flex justify-between">
                        <div className="w-9/12">
                            <div className="font-semibold text-gray-600">{name}</div>
                            <div>₹{price/100}</div>
                            <p className="text-gray-500 mt-2 text-sm">{description}</p>
                        </div>
                        <div className="w-2/12">
                            <button className="absolute text-white rounded-lg bg-black p-1 " onClick={()=>handleAddItem(item)}>Add</button>
                            <img src={res_logo_cdn+imageId} alt="Image" className="object-cover rounded-lg"></img>
                        </div>
                    </div>
                    <hr className="my-5"/>
                </div>)
    })}
    </div>)
     
}

export default ItemList;