import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";

class App extends Component {


  render() {
    return (
      <div className="body-wrapper">
          <Home/>
      </div>
    );
  }
}

export default App;
