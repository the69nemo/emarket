import React, { useState } from "react";
import "./FiltersSidePanel.css";
import FILTER_PARAM from "../../data/FilterParam";

function FiltersSidePanel({ isFilterMenuOpen, handleFilterMenu, allData, handleShowFilterProduct}) {

  const [inputValue, setInputValue] = useState();
  const [checked, setChecked] = useState(new Array(13).fill(false));

  const filterValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleChangeChecked = (position) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(updatedCheckedState);

    const filteredProduct = [];
    for (let i = 0; i < updatedCheckedState.length; i++) {
      if (updatedCheckedState[i] === true) {
        const filter = allData.filter((elem) => elem.type === FILTER_PARAM[i]);
        filteredProduct.push(filter);
      }
    }

    handleShowFilterProduct(filteredProduct);
  };

  return (
    <div className={`filtersSidePanel ${isFilterMenuOpen && "open"}`}>
      <button type='button' className="filtersSidePanel__close-btn" onClick={handleFilterMenu} />
      <div className="filtersSidePanel__container" >
        <fieldset className="filtersSidePanel__filters-group">
          <legend className="filtersSidePanel__filter-title">
            Product type
          </legend>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="furniture"
              value="furniture"
              checked={checked[0]}
              onChange={() => handleChangeChecked(0)}
            />
            Furniture
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="homeware"
              value="homeware"
              checked={checked[1]}
              onChange={() => handleChangeChecked(1)}
            />
            Homeware
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="sofas"
              value="sofas"
              checked={checked[2]}
              onChange={() => handleChangeChecked(2)}
            />
            Sofas
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="fittings"
              value="fittings"
              checked={checked[3]}
              onChange={() => handleChangeChecked(3)}
            />
            Light fittings
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="accessories"
              value="accessories"
              checked={checked[4]}
              onChange={() => handleChangeChecked(4)}
            />
            Accessories
          </label>
        </fieldset>

        <fieldset className="filtersSidePanel__filters-group">
          <legend className="filtersSidePanel__filter-title">Price</legend>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="less_hundred"
              value="100"
            />
            0-100
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="more_hundred"
              value="250"
            />
            101-250
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="more_two_hundred_fifty"
              value="251"
            />
            250+
          </label>
        </fieldset>

        <fieldset className="filtersSidePanel__filters-group">
          <legend className="filtersSidePanel__filter-title">Designer</legend>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="smith"
              value="smith"
            />
            Robert Smith
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="gallagher"
              value="gallagher"
            />
            Liam Gallagher
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="smalls"
              value="smalls"
            />
            Biggie Smalls
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="yorke"
              value="yorke"
            />
            Thom Yorke
          </label>
        </fieldset>
      </div>
    </div>
  );
}

export default FiltersSidePanel;
