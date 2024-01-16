import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 10,
    };
    console.log(this.props.name+"Child Constructor")
  }

  componentDidMount(){
    console.log(this.props.name+"child componentDidMount");
  }
  render() {

    console.log(this.props.name+"Child render");
    
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Contact: @mohitaugust11</h3>
        <h3>Count: {this.state.count}</h3>
        <h3>Count2: {this.state.count2}</h3>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Increase Count</button>
      </div>
    );
  }
}

export default UserClass;
