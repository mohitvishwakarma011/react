import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div className="about-us">
            <h1>About Us Page</h1>
            <p>Welcome to DieHardFoodie</p>
            <UserClass name={"Mohit Vishwakarma"} location={"Narsinghpur"}/>
        </div>
    )
}

export default About;