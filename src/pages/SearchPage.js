import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const data = res.data;
        // console.log(res);
        console.log(data);
        // setCountry(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button>Search</button>
      <ul>
        {country.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;

// this is where we call the API to get the countries on first render.
// stores the API data in the state.
// Calls the results component passing in the filtered countries from the search term.
