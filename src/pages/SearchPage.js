import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map((d) => (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{d.name.common}</Accordion.Header>
            <Accordion.Body className="accordionBody">
              <Link to={`countryDetails/${d.name.common}`} key={d.name.common}>
                {d.name.common}
              </Link>
              {` is a country located in ${d.name.continents}. Click on ${d.name.common} to learn more.`}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </ul>
  );
};

const SearchResults = ({ countries, filteredCountries, searchTermExists }) => {
  if (!searchTermExists) {
    return <CountryList countries={countries} />;
  } else if (searchTermExists && filteredCountries.length > 0) {
    return <CountryList countries={filteredCountries} />;
  }
  return <h2>No Results Found</h2>;
};

const SearchPage = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // const [country, setCountry] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.com/v3.1/all")
  //     .then((res) => {
  //       const data = res.data;
  //       // console.log(res);
  //       console.log(data);
  //       // setCountry();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const getData = async () => {
    const result = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(result.data);
    console.log(result.data);
  };

  // all countries are stored in an array. Filter through array and return country that matches
  // event.target.value.

  const filterCountries = (searchTerm) => {
    const countriesArray = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setFilteredCountries(countriesArray);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
    filterCountries(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="searchTitle">Search For A Country</h1>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="input"
      ></input>
      <SearchResults
        filteredCountries={filteredCountries}
        countries={countries}
        searchTermExists={value !== ""}
      />
    </div>
  );
};

export default SearchPage;

// this is where we call the API to get the countries on first render.
// stores the API data in the state.
// Calls the results component passing in the filtered countries from the search term.
