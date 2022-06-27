import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";

const CountryDetail = ({ country }) => {
  if (!country.name) {
    return <div>Loading country</div>;
  }
  return (
    <div>
      <p>{country.name.common}</p>
      <img src={country.flags.png} className="flag" />
      <Table striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th>Continent</th>
            <th>Capital City</th>
            {/* <th>Currency</th> */}
            <th>Area (km²)</th>
            {/* <th>Language</th> */}
            <th>Population</th>
            <th>Time Zone</th>
            <th>Start of Week</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{country.continents}</td>
            <td>{country.capital}</td>
            {/* <td>{country.currencies.EUR.name}</td> */}
            <td>{country.area}</td>
            {/* <td>{country.languages.ell}</td> */}
            <td>{country.population}</td>
            <td>{country.timezones[0]}</td>
            <td>{country.startOfWeek}</td>
          </tr>
        </tbody>
      </Table>
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
    </div>
  );
};

export default CountryDetailsPage;
