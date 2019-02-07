import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TaskList from "./TaskList";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TaskList />
      </div>
    );
  }
}

export default App;
