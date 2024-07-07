import { useEffect, useState } from "react";
import Countrylist from "../CountryList/countrylist";
import './countries.css';

const country = () => {
    const [countries, setCountry] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json())
        .then(data => setCountry(data))
    },[])


    const handleVisitedCountry = country =>{
       const newvisitedCountries = [...visitedCountries, country];
       setVisitedCountries(newvisitedCountries);
    }

    const handleVisitedFlags = flag =>{
       console.log('flag adding');
       const newVisitedFlags = [...visitedFlags, flag];
       setVisitedFlags(newVisitedFlags);
    }


    return (
        <div>
            <div>
                <h3>visited countries: {visitedCountries.length}</h3>
                <h3>visitedflags: {visitedFlags.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li> )
                    }

                </ul>
            </div>

            <div className ='Flag-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img> )
                }

            </div>

            <h3>Country: </h3>
            <div className="country-container">
             {
                countries.map(country => <Countrylist
                     key={country.cca3} 
                     handleVisitedCountry={handleVisitedCountry}
                     handleVisitedFlags={handleVisitedFlags}
                     country={country}>
                     </Countrylist>)
             }
            </div>
           
           
        </div>
    );
};

export default country;