import React, { useCallback, useEffect, useState } from "react";
import "./ProductsLists.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductsLists({ allData }) {

  const addCards = 9;

  const [currentCards, setCurrentCard] = useState(0);
  const [cardsToShow, setCardsToShow] = useState([]);
  const [hiddenButton, setHiddenButton] = useState(false);

  const renderAddCards = useCallback(() => {
    const count = Math.min(allData.length, currentCards + addCards);
    const moreCards = allData.slice(currentCards, count);
    setCardsToShow([...cardsToShow, ...moreCards]);
    setCurrentCard(count);
  }, [currentCards, allData, cardsToShow])

  useEffect(() => {
    const count = Math.min(allData.length, addCards);
    setCardsToShow(allData.slice(0, count));
    setCurrentCard(count);
  }, [allData]);

  useEffect(() => {
    if (currentCards > allData.length || currentCards == allData.length) {
      setHiddenButton(true);
    }
  }, [currentCards])

  const cards = cardsToShow.map((card) => (
    <ProductCard
      key={Math.random() * Date.now()}
      title={card.name}
      alt={card.name}
      src={card.img}
      prise={card.prise}
      id={card.id}
    />
  ));

  return (
    <div className="productsLists">
      <div className="productsLists__container">
        {cards}
      </div>
      <div className="productsLists__button-wrapper">
        <button className={`productsLists__button ${hiddenButton && 'productsLists__button_hidden'}`} type="button" onClick={renderAddCards}>
          Load more
        </button>
      </div>
    </div>
  );
}

export default ProductsLists;
