import React from "react";
import logo from "./logo.svg";
import Time from "./Time";
import "./App.css";
import moment from "moment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Time targetTime={new Date().getTime() + 86400 * 10000}></Time> */}
        <Time
          targetTime={moment()
            .add(23, "hours")
            .format()}
          includeTime={false}
        ></Time>
      </header>
    </div>
  );
}

export default App;
