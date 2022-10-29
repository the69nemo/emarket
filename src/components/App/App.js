import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Basket from "../Basket/Basket";
import Product from "../Product/Product";
import ProductListings from "../ProductListings/ProductListings";
import data from '../../data/data.json'

function App() {
  const [allData, setAllData] = useState(data);
  const [productInBasket, setProductInBasket] = useState([]);

  const handleAddProductInBasket = (product) => setProductInBasket([...productInBasket, ...product])

  console.log(productInBasket)

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
          <Basket
            productInBasket={productInBasket}
          />
        </Route>
        <Route path="/product/:id">
          <ScrollToTop />
          <Product
            handleAddProductInBasket = {handleAddProductInBasket}
            allData = {allData}
          />
        </Route>
        <Route path="/productlistings" >
          <ScrollToTop />
          <ProductListings
            allData = {allData}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
