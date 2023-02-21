import React, { useState } from "react";
import axios from "axios";
import Advice from "./Advice";

function App() {
  const [advice, setAdvice] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  window.onload = () => {
    fetchAdvice();
  };

  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      // console.log(response.data.slip);
      setAdvice(response.data.slip);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchStart = () => {
    setIsFetching(true);
  };

  const handleSearchComplete = () => {
    setIsFetching(false);
  };

  return (
    <div className="app">
      <Advice
        advice={advice}
        fetchAdvice={fetchAdvice}
        onSearchStart={handleSearchStart}
        onSearchComplete={handleSearchComplete}
        isFetching={isFetching}
      />
    </div>
  );
}

export default App;
