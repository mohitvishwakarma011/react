import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: {
        avatar_url:"This is Dummy avatar Url",
        name:"Dummy Name",
        twitter_username:"Dummy twitter user_name"
      }
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const Data = await fetch("https://api.github.com/users/mohitvishwakarma011");
    const jsonData = await Data.json();
    this.setState({
      Data:jsonData
    });
    console.log(this.props.name + "child componentDidMount");

    this.Interval = setInterval(()=>console.log("set Interval"),1000);
  }

  componentDidUpdate(){
    console.log("component did Update");
  }

  componentWillUnmount(){
    clearInterval(this.Interval);
  }
  render() {
    console.log(this.props.name + "Child render");

    const {avatar_url,name,twitter_username} = this.state.Data;

    return (
      <div className="p-3 border w-[250px] rounded-lg">
        <img className="w-[220px] m-auto rounded-lg mb-4" src={avatar_url} alt="user avatar"></img>
        <h1>Name:{name} </h1>
        <h3>Location: Narsinghpur </h3>
        <h3>twitter: {twitter_username}</h3>
      </div>
    );
  }
}

export default UserClass;
