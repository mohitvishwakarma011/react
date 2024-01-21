import { useContext } from "react";
import userContext from "../utils/UserContext";
const Contact = ()=>{

    const {loggedInUser} = useContext(userContext);
   
    return(
        <div className="text-center">
            <h2>from Context: {loggedInUser}</h2>
            <h1>Contact us Page </h1>
        </div>
    )
}

export default Contact;
