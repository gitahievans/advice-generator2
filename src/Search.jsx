import React, { useState } from "react";
import axios from "axios";

function Search({
  onSearchResponse,
  isFetching,
  onSearchStart,
  onSearchComplete,
}) {
  const [query, setQuery] = useState("");

  const searchAdvice = async (e) => {
    e.preventDefault();
    onSearchStart();
    try {
      const response = await axios.get(
        `https://api.adviceslip.com/advice/search/${query}`
      );
      onSearchResponse(response.data.slips);
      onSearchComplete();
    } catch (err) {
      console.error(err);
      onSearchComplete();
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search">
      <form action="submit">
        <input
          type="text"
          placeholder="Search a quote"
          value={query}
          onChange={handleChange}
        />
        <button
          onClick={searchAdvice}
          className={isFetching ? "rotate" : ""}
          disabled={isFetching}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
