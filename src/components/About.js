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
                <UserClass name={"Mohit Vishwakarma"} location={"Narsinghpur"}/>
            </div>
        )
    }
}

export default About;