import React from "react";
import "./FiltersPanel.css";

function FiltersPanel() {
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
            />
            Furniture
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="homeware"
              value="homeware"
            />
            Homeware
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="sofas"
              value="sofas"
            />
            Sofas
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="fittings"
              value="fittings"
            />
            Light fittings
          </label>
          <label className="filtersPanel__filter-name">
            <input
              className="filtersPanel__filter"
              type="checkbox"
              name="accessories"
              value="accessories"
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
