import React from "react";
import './SearchBox.css';

function SearchBox() {
  return (
    <div className="search-box">
      <button className="btn-search" />
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
      />
    </div>
  );
}

export default SearchBox;
