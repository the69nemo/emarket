import React from "react";
import "./input-email.css";

function InputEmail({type, title}) {
  return (
    <>
      {title
        ? <h3 className="input__title">{title}</h3>
        : <></>}
      <div className="input-wrapper">
        <input
          id="input"
          className={`input && ${type}`}
          type="email"
          placeholder="your@email.com"
        />
        <button type="submit" className={`input__button && input__button_${type}`}>
          Sign up
        </button>
      </div>
    </>
  );
}

export default InputEmail;
