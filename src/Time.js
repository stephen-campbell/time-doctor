import React from "react";
import Moment from "react-moment";
import moment from "moment";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().format()
    };
  }
  //   changeColor = () => {
  //     this.setState({ color: "blue" });
  //   };
  //   updateTime() {
  //       this.setState
  //   }
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
        <p>Display time two: {displayTimeTwo.toString()}</p>
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
          <Moment diff={this.state.currentTime} unit="hours">
            {this.props.targetTime}
          </Moment>{" "}
          hours
        </p>
      </div>
    );
  }
  componentDidMount() {
    console.log("refreshed");
    if (this.props.dynamic)
      setInterval(
        () => this.setState({ currentTime: moment().format() }),
        5000
      );
  }
}

export default Time;
