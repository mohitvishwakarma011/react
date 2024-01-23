import { useDispatch, useSelector } from "react-redux";
import {res_logo_cdn} from "../utils/constants"
import { removeItem,clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleRemoveItem = (id)=>{
        // console.log(item)
        dispatch(removeItem(id));
    }
    const cartItems = useSelector((store)=>{
        // console.log(store);
        // console.log(store.cart);
        // console.log(store.cart.items);
       return store.cart.items})
    return(
        <div className="w-6/12 m-auto">
            <h1 className="font-bold text-center text-xl p-2">DieHardFoodie - Cart</h1>
            
            {cartItems.length? <button className="text-white rounded-lg bg-black p-1 " onClick={()=>dispatch(clearCart())}>Clear Cart</button> :<h1 className="font-bold text-center text-xl p-2">Cart is empty..add items to cart!</h1> }
            
                    <div>
            {cartItems.map((item)=>{
                const {id,name,description,imageId,price} =  item?.card?.info;

                return(<div key={id}>
                            <div className="mt-5 flex justify-between">
                                <div className="w-9/12">
                                    <div className="font-semibold text-gray-600">{name}</div>
                                    <div>₹{price/100}</div>
                                    <p className="text-gray-500 mt-2 text-sm">{description}</p>
                                </div>
                                <div className="w-2/12">
                                    <button className="absolute text-white rounded-lg bg-black p-1 " onClick={()=>handleRemoveItem(item.card.info.id)}>remove</button>
                                    <img src={res_logo_cdn+imageId} alt="Image" className="object-cover rounded-lg"></img>
                                </div>
                            </div>
                            <hr className="my-5"/>
                        </div>)
            })}
            </div>
        </div>
    )
}

export default Cart;