import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryDetail = ({ country }) => {
  if (!country.name) {
    return <div>Loading country</div>;
  }
  return (
    <div>
      <p>{country.name.common}</p>
      <img src={country.flags.png} />
    </div>
  );
};

const CountryDetailsPage = (props) => {
  const [country, setCountry] = useState({});
  const countryName = useParams().name;

  const getCountry = async () => {
    const result = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    console.log(result);
    setCountry(result.data[0]);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div>
      <h1>Country Details</h1>
      <CountryDetail country={country} />
      {/* <p>{country.name?.common}</p> */}
    </div>
  );
};

export default CountryDetailsPage;
