import React from "react";
import "./SimpleButton.css"
const SimpleButton = ({buttonText}) => {
  return (
    <>
      <div className="btn-container">
        <button className="simple-btn">{buttonText}</button>
      </div>
    </>
  );
};

export default SimpleButton;
