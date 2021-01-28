import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import axios from 'axios';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';


 class App extends Component {

  API_KEY='9cb79e283a3eff063bfb7ed04a449233';
  state={
    current: {
      location: null,
      currentTemp: null,
      currentFeel: null,
      currentPressure:null,
      lat: null,
      long: null,
      humidity: null,
      dateTime: null,
      visibility: null,
      uvi: null,
      windSpeed: null,
      weather: null,
      dewPoint: null,
      sunrise: null,
      sunset: null
    },
    hourly:{
      
    },
    daily:{}
  }

  componentDidMount(){
    this.getLocation(this.getWeather); //I have used callback rather than promise and aync,await
  }

  getLocation =  (getWeatherCallback) =>{ // gets current user location coordinates(lat,long) using builtin api.
    navigator.geolocation.getCurrentPosition(position=>{
     this.setState({...this.state.current,lat: position.coords.latitude, long: position.coords.longitude });
     getWeatherCallback(position.coords.latitude,position.coords.longitude);
     console.log(position.coords.latitude,position.coords.longitude);
   }); 
 }

  getWeather=(lat,long)=>{ // gets weather forecast data from remote api using axios library.
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${this.API_KEY}&units=metric`)
    .then(response=>{
      const responseData=response.data;
      console.log(responseData); 
      
      this.setState({...this.state.current,location: responseData.timezone,
                     lat: responseData.lat,
                     long: responseData.lon,
                     currentTemp: responseData.current.temp,
                     currentFeel: responseData.current.feels_like});
      this.unixTimeConvert(responseData.current.dt);
    })
    .catch(error =>{
      console.log(error.message);      
    });  
  }

  unixTimeConvert=(unixTimeStamp)=>{ // converts unix time to real time date and time.
    const milliseconds = unixTimeStamp * 1000;
    const dateObject = new Date(milliseconds);
    const options = { weekday:'long',year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric'};
    const humanDateFormat = dateObject.toLocaleString("en-US",options);
    this.setState({dateTime: humanDateFormat});
    console.log(humanDateFormat);
  }
  
  render() {
    return (
      <div>
       <Layout>
          <CurrentWeather 
          location={this.state.location} 
          dateTime={this.state.dateTime}
          lat={this.state.lat}
          long={this.state.long}
          temp={this.state.currentTemp}
          feel={this.state.currentFeel}/>
        
       </Layout>
      </div>
    )
  }
}

export default App;



