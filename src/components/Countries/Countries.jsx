import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesPromise);
    
    const handleVisitedFlags = (flag) => {
        // console.log("flag is added", flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
        
    }

    const handleVisitedCountries = (country) => {
        console.log("click  visited country" , country);
        const newVisitedCountries = [...visitedCountries, country];
        // console.log(visitedCountries);
        setVisitedCountries(newVisitedCountries);
        
        
    }

    
    
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h2>Travel so far: {visitedCountries.length}</h2>
            <div className='visit-flag'>
                {
                  visitedFlags.map((flag, index) => <img key={index} src={flag}></img>) 
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li> key={country.cca3} {country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca2}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;