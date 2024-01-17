import UserClass from "./UserClass";
import React from "react";

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
            <div className="about-us">
                <h1>About Us Page</h1>
                <p>Welcome to DieHardFoodie</p>
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