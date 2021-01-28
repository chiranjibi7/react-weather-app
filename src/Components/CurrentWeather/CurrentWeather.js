import React from 'react';
import Location from './Location/Location';
import DateTime from './DateTime/DateTime';
import Temperature from './Temperature/Temperature';

const CurrentWeather = ({location,lat,long,dateTime,temp,feel}) => {
    return (
        <div>
                <Location location={location} lat={lat} long={long}/>
                <DateTime dateTime={dateTime}/>
                <Temperature temp={temp} feel={feel}/> 
        </div>
    )
}

export default CurrentWeather
