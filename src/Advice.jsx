import React from "react";

const Advice = ({ advice }) => {
  return (
    <div className="container">
      {advice ? <p id="ad">ADVICE #{advice.id}</p> : null}
      <div className="advice-container">
        {advice ? <p>"{advice.advice}"</p> : <p className="no-quote">Click dice to see quotes!</p>}
      </div>
      <img
        src="/images/pattern-divider-mobile.svg"
        alt=""
        className="mbl-divider"
      />
      <img
        src="/images/pattern-divider-desktop.svg"
        alt=""
        className="dktp-divider"
      />
    </div>
  );
};

export default Advice;
