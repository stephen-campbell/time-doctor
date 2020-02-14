import React from "react";
import logo from "./logo.svg";
import Time from "./Time";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Time></Time>
      </header>
    </div>
  );
}

export default App;
