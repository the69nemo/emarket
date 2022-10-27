import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
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
          <ScrollToTop />
          <Home />
        </Route>
        <Route path="/aboutus" >
          <ScrollToTop />
          <AboutUs />
        </Route>
        <Route path="/basket" >
          <ScrollToTop />
          <Basket />
        </Route>
        <Route path="/product/:id">
          <ScrollToTop />
          <Product />
        </Route>
        <Route path="/productlistings" >
          <ScrollToTop />
          <ProductListings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
