import React from "react";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString()
    };
  }
  //   changeColor = () => {
  //     this.setState({ color: "blue" });
  //   };
  render() {
    return (
      <div>
        <p>{this.state.currentTime}</p>
        {/* <button type="button" onClick={this.changeColor}>
          Change color
        </button> */}
      </div>
    );
  }
}

export default Time;
