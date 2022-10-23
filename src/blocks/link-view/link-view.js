import React from "react";
import { Link } from "react-router-dom";
import "./link-view.css";


function LinkView({ type, text }) {
  return (
    <Link to='/productlistings' className={`link-view && ${type}`} href="#">
      {text}
    </Link>
  );
}

export default LinkView;
