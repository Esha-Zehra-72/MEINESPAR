import React from "react";
import "./CopenBtn.css"
const CopenBtn = () => {
  return (
    <>
      <div variant="primary" className="d-block text-center mb-3 px-3">
        <button className="copen-btn">
          <span className="copen-btn-inner-text">hmUil</span>
          <span className="copen-btn-wraper">
            Code sehen
            <span className="fold-copen"></span>
          </span>
        </button>
      </div>
    </>
  );
};

export default CopenBtn;
