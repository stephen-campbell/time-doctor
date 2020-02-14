import React from "react";
import Moment from "react-moment";
import moment from "moment";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().format()
      //   displayTimeTwo: this.props.includeTime
      //     ? moment(moment().format()).diff(this.props.targetTime, "seconds") >= 1
      //     : moment(moment().format()).diff(this.props.targetTime, "days") >= 1
    };
  }
  //   changeColor = () => {
  //     this.setState({ color: "blue" });
  //   };
  render() {
    console.log("state", this.state);
    const displayTimeTwo = this.props.includeTime
      ? Math.abs(
          moment(moment().format()).diff(this.props.targetTime, "seconds")
        ) >= 1
      : // ? "greater than 1 second"
        // : "less than one second"
        Math.abs(
          moment(moment().format()).diff(this.props.targetTime, "days")
        ) >= 1;
    //   ? "greater than 1 day"
    //   : "less than 1 day";
    return (
      <div>
        <p>display second: {displayTimeTwo.toString()}</p>
        <p>
          Current time <Moment date={this.state.currentTime} />
        </p>
        {displayTimeTwo ? (
          <p>
            TargetTime <Moment date={this.props.targetTime} />
          </p>
        ) : (
          <p> </p>
        )}
        <p>
          Difference:{" "}
          <Moment diff={this.state.currentTime} unit="hours" decimal>
            {this.props.targetTime}
          </Moment>{" "}
          hours
        </p>
        {/* <button type="button" onClick={this.changeColor}>
          Change color
        </button> */}
      </div>
    );
  }
}

export default Time;
