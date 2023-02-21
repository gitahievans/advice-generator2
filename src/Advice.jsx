import React, { useState } from "react";
import Search from "./Search";

const Advice = ({ advice, fetchAdvice, onSearchComplete, onSearchStart, isFetching }) => {
  const [adviceData, setAdviceData] = useState([]);

  const handleAdviceData = (data) => {
    setAdviceData(data);
    console.log(data);
  };

  return (
    <div className="container">
      <Search
        onSearchResponse={handleAdviceData}
        onSearchStart={onSearchStart}
        onSearchComplete={onSearchComplete}
        isFetching={isFetching}
      />
      <p id="ad">ADVICE #{advice.id}</p>
      <div className="advice-container">
        {adviceData && adviceData.length > 0 ? (
          <ul className="searched-advice">
            {adviceData.map((adv) => (
              <li key={adv.id}>
               <span >Advice {adv.id}:</span> 
                {adv.advice} <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>{advice.advice}</p>
        )}
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
      <div className="btn" onClick={fetchAdvice}>
        <img src="/images/icon-dice.svg" alt="roll" className="dice" />
      </div>
    </div>
  );
};

export default Advice;
