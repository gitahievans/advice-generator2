import React, { useState } from "react";
import Search from "./Search";
import AdviceContainer from "./AdviceContainer";

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
      ) : !notFound ? (
        <p className="ad">ADVICE #{advice.id}</p>
      ) : null}
      <div className="advice-container">
        <AdviceContainer
          advice={advice}
          adviceData={adviceData}
          notFound={notFound}
        />
      </div>
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

