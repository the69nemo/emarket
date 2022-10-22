import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/aboutus" exact>
        <AboutUs />
      </Route>
    </div>
  );
}

export default App;
