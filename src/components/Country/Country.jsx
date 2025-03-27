import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);

  // console.log(handleVisitedCountries);

  const handleVisited = () => {
    // if (visited === true) {
    //     setVisited(false);
    // } else{
    //     setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.png} alt="" />
      <div>
        <h3>Name: {country.name.common}</h3>
        <p>Independent: {country.independent ? "free" : "Not Free"}</p>
        <p>Population: {country.population}</p>
        <button
          className={visited ? "btn-visited" : "btn-not-visited"}
          onClick={handleVisited}
        >
          {visited ? "visited" : "Not visited"}
        </button>

        <button onClick={() => handleVisitedFlags(country.flags.png)}>Add visited flag</button>
      </div>
    </div>
  );
};

export default Country;
