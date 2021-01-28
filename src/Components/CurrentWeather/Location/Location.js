import React from 'react';

const Location = ({location,lat,long}) => {
    return (
        <div>
             <h1>{location}</h1>
             <h2>{lat}°N,{long}°E</h2>
        </div>
    )
}

export default Location;
