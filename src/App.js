import React from "react";
import logo from "./logo.svg";
import Time from "./Time";
import "./App.css";
import moment from "moment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Time
          targetTime={moment()
            .add(23, "hours")
            .format()}
          includeTime={false}
          dynamic={false}
        ></Time>
      </header>
    </div>
  );
}

export default App;
