import { useContext } from "react";
import userContext from "../utils/UserContext";
const Contact = ()=>{

    const {loggedInUser} = useContext(userContext);
   
    return(
        <div className="text-center">
            {/* <h2>from Context: {loggedInUser}</h2> */}
            <h1 className="text-2xl font-bold">Contact us Page </h1>

            <form>
                <input type="text" placeholder="name" className="border-2 border-black p-1 m-2 rounded-lg"></input>
                <input type="text" placeholder="query" className="border-2 border-black p-1 m-2 rounded-lg"></input>
                <button className="border-lg bg-black rounded text-white p-1">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
