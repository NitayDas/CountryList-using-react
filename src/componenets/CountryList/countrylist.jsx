import { useState } from 'react';
import './countrylist.css';

const Countrylist = ({country,handleVisitedCountry}) => {
    const{name,flags,population,area} = country;

    const [visited, setVisited] = useState(false);

    const handleclick = () =>{
        setVisited(!visited)
    }


    return (
        <div className={`country  ${visited && 'visited'} `}>
            <h3 style={{'color': visited? 'white' : 'black'}}>name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <h3>Area : {area}</h3>
            <button onClick={()=>handleVisitedCountry(country)}>Mark as visited</button><br />
            <button onClick={handleclick}>{ visited? "Visited" : "Going"}</button>
            {visited ? "I have visited this Country" : "I want to visit this country" }
        </div>
    );
};

export default Countrylist;