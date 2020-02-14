import React from "react";
import logo from "./logo.svg";
import Time from "./Time";
import "./App.css";
import moment from "moment";

function App() {
  return (
    <div className="App">
      <Time
        targetTime={moment().add(5, "minutes")}
        includeTime={true}
        dynamic={true}
        displayExtras={true}
      ></Time>
    </div>
  );
}

export default App;
