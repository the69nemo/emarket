import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Basket from "../Basket/Basket";
import Product from "../Product/Product";
import ProductListings from "../ProductListings/ProductListings";
import data from "../../data/data.json";
import Form from "../Form/Form";

function App() {
  const [allData, setAllData] = useState(data);
  const [productInBasket, setProductInBasket] = useState(
    localStorage.getItem("productInBasket") || []
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleAddProductInBasket = (product) => {
    setProductInBasket([...productInBasket, ...product]);
  };

  const handleOpenPopup = () => setIsPopupOpen(!isPopupOpen);


  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <ScrollToTop />
          <Home
            handleOpenPopup={handleOpenPopup}
          />
        </Route>
        <Route path="/aboutus">
          <ScrollToTop />
          <AboutUs />
        </Route>
        <Route path="/basket">
          <ScrollToTop />
          <Basket productInBasket={productInBasket} />
        </Route>
        <Route path="/product/:id">
          <ScrollToTop />
          <Product
            handleAddProductInBasket={handleAddProductInBasket}
            allData={allData}
          />
        </Route>
        <Route path="/productlistings">
          <ScrollToTop />
          <ProductListings allData={allData} />
        </Route>
        {/* <Route path='/login'>
          <Form />
        </Route> */}
      </Switch>
      <Form
        isPopupOpen={isPopupOpen}
        handleOpenPopup={handleOpenPopup}
      />
    </div>
  );
}

export default App;
