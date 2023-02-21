import React, { useState } from "react";
import axios from "axios";

function Search({
  onSearchResponse,
  isFetching,
  onSearchStart,
  onSearchComplete,
  adviceData,
  notFound,setAdviceData,
  onNotFound, advice, setAdvice
}) {
  const [query, setQuery] = useState("");

  const searchAdvice = async (e) => {
    e.preventDefault();
    onSearchStart();
    try {
      const response = await axios.get(
        `https://api.adviceslip.com/advice/search/${query}`
      );
      // console.log(response);
      if (response.data.message) {
        onNotFound(response.data.message.text);
        setAdviceData([])
        // console.log(response.data.message);
      } else {
        onSearchResponse(response.data.slips);
      }
      onSearchComplete();
      setQuery('')
    } catch (err) {
      console.error(err);
      onSearchComplete();
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    setAdvice('')
  }

  return (
    <div className="search">
      <form action="submit" onSubmit={searchAdvice}>
        <input
          type="text"
          placeholder="Enter any word to get quotes"
          value={query}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isFetching} onClick={handleClick}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/8001/8001328.png"
            alt=""
            className={isFetching ? "rotate" : "gear"}
          />
        </button>
      </form>{" "}
    </div>
  );
}

export default Search;
