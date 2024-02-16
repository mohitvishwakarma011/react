import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: {
        avatar_url: "This is Dummy avatar Url",
        name: "Dummy Name",
        twitter_username: "Dummy twitter user_name",
      },
    };
  }

  async componentDidMount() {
    const Data = await fetch(
      "https://api.github.com/users/mohitvishwakarma011"
    );
    const jsonData = await Data.json();
    this.setState({
      Data: jsonData,
    });
  }

  render() {
    const { avatar_url, name, twitter_username } = this.state.Data;

    return (
      <div className="w-full flex items-center justify-center">
        <div className="p-3 border rounded-lg flex flex-col items-center">
          <img
            className="w-[220px] m-auto rounded-lg mb-4"
            src={avatar_url}
            alt="user avatar"
          ></img>
          <div className="m-auto text-center">
            <h1 className="w-48">Name: {name} </h1>
            <h3 className="w-48">Location: Narsinghpur </h3>
            <h3 className="w-48">Twitter: {twitter_username}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
