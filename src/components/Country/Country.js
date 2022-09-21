import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,population,region,name,flags} = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common} </h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;