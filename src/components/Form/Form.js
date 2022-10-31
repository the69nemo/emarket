import React, {useEffect} from "react";
import './Form.css';


function Form({ isPopupOpen, handleOpenPopup }) {

  const handleCloseByEsc = (evt) => evt.key === "Escape" && handleOpenPopup(evt);

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("keydown", handleCloseByEsc);
    }
    return () => document.removeEventListener("keydown", handleCloseByEsc);
  }, [isPopupOpen]);

  return (
    <div className={`form ${isPopupOpen && 'open'}`}>
      <div className="form__container">
      <h2 className="form__title">Hello!</h2>
        <form className="form__imput-container" id="form">
          <input className='form__input email' type='email' id="email" placeholder="Enter your email" />
          <input className="form__input password" type='password' id='password' placeholder="Enter your password" />
        </form>
        <button type="submit" for="form" className="form__button">Create account</button>
        <button type="button" className="form__button-close" onClick={handleOpenPopup}/>
      </div>
    </div>
  );
}

export default Form;
