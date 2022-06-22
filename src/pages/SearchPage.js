import React from "react";
import { useState } from "react";

const SearchPage = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button>Search</button>
    </div>
  );
};

export default SearchPage;

// this is where we call the API to get the countries on first render.
// stores the API data in the state.
// Calls the results component passing in the filtered countries from the search term.
