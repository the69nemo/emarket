import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Basket from "../Basket/Basket";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
