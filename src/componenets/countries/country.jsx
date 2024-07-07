import { useEffect, useState } from "react";
import Countrylist from "../CountryList/countrylist";
import './countries.css';

const country = () => {
    const [countries, setCountry] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json())
        .then(data => setCountry(data))
    },[])


    const handleVisitedCountry = country =>{
       const newvisitedCountries = [...visitedCountries, country];
       setVisitedCountries(newvisitedCountries);
    }


    return (
        <div>
            <div>
                <h3>visited countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li> )
                    }

                </ul>
            </div>

            <h3>Country: </h3>
            <div className="country-container">
             {
                countries.map(country => <Countrylist
                     key={country.cca3} 
                     handleVisitedCountry={handleVisitedCountry}
                     country={country}>
                     </Countrylist>)
             }
            </div>
           
           
        </div>
    );
};

export default country;