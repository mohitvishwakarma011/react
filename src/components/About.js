import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/UserContext";
class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount ");
    }
    render(){
        console.log("parent Render");
        return(
            <div className="text-center h-screen">

                <h1 className="font-bold text-4xl  mt-2 text-sky-600">About Us Page</h1>
                <p className="text-2xl mt-2">Welcome to DieHardFoodie</p>
                {/* <userContext.Consumer>
                    {({loggedInUser})=>(
                        <h2 className="text-orange-500 font-bold bg-black w-3/12 m-auto rounded-lg">{loggedInUser} from Context</h2>
                    )}
                </userContext.Consumer> */}
                <UserClass name={"First "} location={"Narsinghpur"}/>
            </div>
        )
    }
}

/*
-parent constructor
-parent render

    -first child constructor
    -first child render

    -second child constructor 
    -second child render

<DOM Updated - In single Batch >

    -first child componentDidMount
    -second child componentDidMount
    
-parent componentDidMount

*/
export default About;