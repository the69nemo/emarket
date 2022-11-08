import React, { useState, useEffect } from "react";
import "./FiltersPanel.css";

function FiltersPanel({ filterParam, setFilterParam, handleFilterCurrentProduct }) {

  const [inputValue, setInputValue] = useState();
  const [checked, setChecked] = useState(
    new Array(13).fill(false)
  );

  const filterValue = (event) => {
    setInputValue(event.target.value);
  }

  const handleChangeChecked = (position) => {

    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item);

    setChecked(updatedCheckedState);

    const index = filterParam.indexOf(inputValue)
    const newFilterParam = [...filterParam]
    console.log(newFilterParam)
    if (index !== -1) {
      newFilterParam.splice(index, 1)
    } else {
      newFilterParam.push(inputValue)
    }

    setFilterParam(newFilterParam)

    handleFilterCurrentProduct()



    // console.log(eventValue)
    // const filters = updatedCheckedState.

  }

  return (
    <div className='filtersPanel' >
      <div className="filtersPanel__container">
        <fieldset className="filtersPanel__filters-group">
          <legend className="filtersPanel__filter-title">Product type</legend>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="furniture"
              value="furniture"
              checked={checked[0]}
              onChange={() => handleChangeChecked(0)}
              onClick={filterValue}
            />
            Furniture
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="homeware"
              value="homeware"
              checked={checked[1]}
              onChange={() => handleChangeChecked(1)}
              onClick={filterValue}
            />
            Homeware
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="sofas"
              value="sofas"
              checked={checked[2]}
              onChange={() => handleChangeChecked(2)}
              onClick={filterValue}
            />
            Sofas
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="fittings"
              value="fittings"
              checked={checked[3]}
              onChange={() => handleChangeChecked(3)}
              onClick={filterValue}
            />
            Light fittings
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="accessories"
              value="accessories"
              checked={checked[4]}
              onChange={() => handleChangeChecked(4)}
              onClick={filterValue}
            />
            Accessories
          </label>
        </fieldset>

        <fieldset className="filtersPanel__filters-group">
          <legend className="filtersPanel__filter-title">Price</legend>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="less_hundred"
              value="100"
            />
            0-100
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="more_hundred"
              value="250"
            />
            101-250
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="more_two_hundred_fifty"
              value="251"
            />
            250+
          </label>
        </fieldset>

        <fieldset className="filtersPanel__filters-group">
          <legend className="filtersPanel__filter-title">Designer</legend>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="smith"
              value="smith"
            />
            Robert Smith
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="gallagher"
              value="gallagher"
            />
            Liam Gallagher
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="smalls"
              value="smalls"
            />
            Biggie Smalls
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
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

export default FiltersPanel;
