import React, { useState } from "react";
import Search from "./Search";

const Advice = ({
  advice,
  fetchAdvice,
  onSearchComplete,
  onSearchStart,
  isFetching,
  isRolling,
  setAdvice,
}) => {
  const [adviceData, setAdviceData] = useState([]);
  const [notFound, setNotFound] = useState("");

  const handleAdviceData = (data) => {
    setAdviceData(data);
    // console.log(data);
  };

  const handleNotFound = (data) => {
    setNotFound(data);
    console.log(data);
  };

  const handleClick = () => {
    fetchAdvice()
  }

  return (
    <div className="container">
      <Search
        onSearchResponse={handleAdviceData}
        onSearchStart={onSearchStart}
        onSearchComplete={onSearchComplete}
        isFetching={isFetching}
        adviceData={adviceData}
        onNotFound={handleNotFound}
        setAdvice={setAdvice}
        setAdviceData={setAdviceData}
      />
      {!advice && adviceData && adviceData.length > 0 ? (
        <p className="ad">{adviceData.length} match(es) found</p>
      ) : !notFound ? 
        <p className="ad">ADVICE #{advice.id}</p> : null
      }
      <div className="advice-container">
        {advice && adviceData ? (
          <p className="advice-advice">{advice.advice}</p>
        ) : adviceData && adviceData.length > 0 ? (
          <ul className="searched-advice">
            {adviceData.map((adv) => (
              <li key={adv.id}>
                <span className="advice-id">Advice {adv.id}: </span>
                <span className="advise">{adv.advice} </span>
              </li>
            ))}
          </ul>
        ) : notFound ? (
          <p className="not-found">
            {notFound}
          </p>
        ) : null}
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
      <div className="btn" onClick={handleClick}>
        <img
          src="/images/icon-dice.svg"
          alt="roll"
          className={isRolling ? "spin" : "dice"}
        />
      </div>
    </div>
  );
};

export default Advice;

