import React from "react";
import "./FiltersSidePanel.css";

function FiltersSidePanel({ isFilterMenuOpen, handleFilterMenu}) {
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
            />
            Furniture
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="homeware"
              value="homeware"
            />
            Homeware
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="sofas"
              value="sofas"
            />
            Sofas
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="fittings"
              value="fittings"
            />
            Light fittings
          </label>
          <label className="filtersSidePanel__filter-name">
            <input
              className="filtersSidePanel__filter"
              type="checkbox"
              name="accessories"
              value="accessories"
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
