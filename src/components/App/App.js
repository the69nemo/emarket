import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Basket from "../Basket/Basket";
import Product from "../Product/Product";
import ProductListings from "../ProductListings/ProductListings";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/aboutus" exact>
          <AboutUs />
        </Route>
        <Route path="/basket" exact>
          <Basket />
        </Route>
        <Route path='/product' exact>
          <Product />
        </Route>
        <Route path='/productlistings' exact>
          <ProductListings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
