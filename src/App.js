import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {


  render() {
    return (
      <div className="body-wrapper">
        <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>

              </Switch>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
