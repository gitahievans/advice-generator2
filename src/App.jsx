import React, { useEffect, useState } from "react";
import axios from "axios";
import Advice from "./Advice";

function App() {
  const [advice, setAdvice] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
      fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    setIsRolling(true);
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      // console.log(response.data.slip);
      setAdvice(response.data.slip);
      setIsRolling(false);
    } catch (error) {
      console.error(error);
      setIsRolling(false);
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
        isRolling={isRolling}
        setAdvice={setAdvice}
      />
    </div>
  );
}

export default App;
