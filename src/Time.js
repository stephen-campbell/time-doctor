import React from "react";
import Moment from "react-moment";
import moment from "moment";
import Clock from "react-clock";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment()
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
    const displayDifference = this.props.includeTime
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
        {this.props.displayExtras ? (
          <div>
            <div>
              Current time <Moment date={this.state.currentTime} />
              <br></br>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center"
                }}
              >
                <Clock value={this.state.currentTime.toDate()} />
              </div>
            </div>
            <div>
              <br></br>
              Target time: <Moment date={this.props.targetTime} />
              <br></br>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "center"
                }}
              >
                <Clock value={this.props.targetTime.toDate()} />
              </div>
            </div>
          </div>
        ) : (
          <p></p>
        )}
        {displayDifference ? (
          <p>
            Difference:{" "}
            <Moment diff={this.state.currentTime} unit="minutes">
              {this.props.targetTime}
            </Moment>{" "}
            minutes
          </p>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
  componentDidMount() {
    console.log("refreshed");
    if (this.props.dynamic)
      setInterval(() => this.setState({ currentTime: moment() }), 1000);
  }
}

export default Time;
