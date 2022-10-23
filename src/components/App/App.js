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
        <Route path="/aboutus" exact>
          <ScrollToTop />
          <AboutUs />
        </Route>
        <Route path="/basket" exact>
          <ScrollToTop />
          <Basket />
        </Route>
        <Route path="/product" exact>
          <ScrollToTop />
          <Product />
        </Route>
        <Route path="/productlistings" exact>
          <ScrollToTop />
          <ProductListings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
