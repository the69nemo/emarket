import React from "react";
import "./link-view.css";

function LinkView({ type, text }) {
  return (
    <a className={`link-view && ${type}`} href="#">
      {text}
    </a>
  );
}

export default LinkView;
